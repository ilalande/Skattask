import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@prisma';

export default async function readUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  session;
  //APi non utilisée mais créée pour l'exercice
  if (session) {
    // Signed in
    if (req.method === 'GET') {
      try {
        const userEmail = session.user?.email;
        if (userEmail) {
          const userDatas = await prisma.user.findUnique({
            where: {
              email: userEmail,
            },
          });

          return res.status(200).json(userDatas);
        } else
          return res
            .status(404)
            .json({ message: "L'utilisateur n'a pas d'email valide" });
      } catch (error: any) {
        return res
          .status(500)
          .json({ message: 'Il y a un problème avec le serveur', error });
      }
    }
  } else if (!session) {
    // Not Signed in
    return res.status(401).send({
      error: 'Vous devez être logué pour accéder à ce contenu',
    });
  } else {
    return res.status(500).send({
      error: 'Problème avec le serveur',
    });
  }
}
