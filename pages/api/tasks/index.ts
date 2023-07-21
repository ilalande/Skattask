import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import prisma from '@prisma';
import { IAddTaskPayload } from 'custom-types/payload-types';

export default async function readOrCreateTasks(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    if (req.method === 'GET') {
      try {
        const tasks = await prisma.task.findMany({
          include: { author: true },
        });

        return res.status(200).json(tasks);
      } catch (error: any) {
        return res.status(500).json({
          message: 'Il y a un problème avec le serveur',
          error,
        });
      }
    }
    if (req.method === 'POST') {
      try {
        //QUand on créé une tâche, le authorId est null or on ne peut pas lier à un utilisateur nul, on ne met donc pas la donnée sinon cela fait rater la requête
        const newTaskData: IAddTaskPayload = {
          title: req.body.title,
          description: req.body.description,
          date: req.body.date,
          ended: req.body.ended,
        };

        //on ne peut pas ajouter un tâche avec un titre vide
        if (!newTaskData.title) {
          return res
            .status(400)
            .json({ message: 'Vous ne pouvez pas ajouter de tâche sans nom' });
        }
        const newTask = await prisma.task.create({
          data: newTaskData,
        });

        return res.status(201).send(newTask);
      } catch (error: any) {
        return res.status(400).json({ message: 'Erreur de requête' });
      }
    }
  } else if (!session) {
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
