import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { IAddTaskPayload } from 'custom-types/payload-types';
export default async function readOrCreateTasks(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    //Route définie pour l'exercice mais non utilisée
    if (req.method === 'GET') {
      try {
        //la route API pages/api/tasks/[pid].js a pour req.query la valeur de ce qui est à la place du pid:
        const taskId = parseInt(req.query.id as string);
        const task = await prisma.task.findUnique({
          where: {
            taskId: taskId,
          },
        });
        return res.status(200).json(task);
      } catch (error: any) {
        return res
          .status(404)
          .send({ message: "La tâche demandée n'existe pas", error });
      }
    }
    if (req.method === 'PUT') {
      // @ts-ignore
      // Mis car dans le module nexAuth le type de la session n'a que 3 arguments (email, name, image) alors qu'on a créee un callback qui récupère également le id du user
      const userIdFromSession = session?.user.id;
      // @ts-ignore
      try {
        const taskId = parseInt(req.query.id as string);

        const updatedTaskData: IAddTaskPayload = {
          title: req.body.title,
          description: req.body.description,
          date: req.body.date,
          authorId: req.body.authorId,
          ended: req.body.ended,
        };

        //On récupère le userName dans la base de données pour pouvoir comparer si l'utilisateur a le droit de modifier la tâche
        const taskInDb = await prisma.task.findUnique({
          where: {
            taskId: taskId,
          },
          include: { author: true },
        });
        if (!taskInDb) {
          res.status(404).send({
            message: "La tâche demandée n'existe pas",
          });
          //on ne peut modifier que les tâches sur lesquelles ont est inscrit ou qui n'ont pas de personnes assignées
        } else if (
          userIdFromSession === taskInDb.author?.id ||
          taskInDb.author === null ||
          taskInDb.author === undefined
        ) {
          const updatedTask = await prisma.task.update({
            where: {
              taskId: taskId,
            },
            data: updatedTaskData,
            include: { author: true },
          });
          return res.status(201).send(updatedTask);
        }
        //Si l'utilisateur essaye de modifier une tâche sur laquelle il n'est pas assignée
        else if (userIdFromSession !== taskInDb.author.id) {
          return res.status(403).send({
            message:
              "L'utilisateur ne peut pas modifier une tâche sur laquelle il n'est pas assigné",
          });
        } else {
          return res.status(404).send({
            message: "La tâche demandée n'existe pas",
          });
        }
      } catch (error: any) {
        return res.status(401).json({
          message:
            "L'utilisateur ne peut pas modifier une tâche sur laquelle il n'est pas assigné",
          error,
        });
      }
    }
    // }
    else if (!session) {
      // Not Signed in
      return res.status(401).send({
        message: 'Vous devez être logué pour accéder à ce contenu',
      });
    } else {
      return res.status(500).send({
        message: 'Problème avec le serveur',
      });
    }
  }
}
