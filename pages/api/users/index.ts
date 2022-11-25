import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@prisma';

export default async function readUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await unstable_getServerSession(req, res, authOptions);
  session;
  if (session) {
    // Signed in
    if (req.method === 'GET') {
      try {
        const users = await prisma.user.findMany();

        return res.status(200).json(users);
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
