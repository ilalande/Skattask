import { PrismaClient } from '@prisma/client';
// Import du constructeur PrismaClient depuis le paquet @prisma/client npm déjà installé.
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = prisma;
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
export default prisma;
