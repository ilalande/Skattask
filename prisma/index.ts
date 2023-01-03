import { PrismaClient } from '@prisma/client';
// Import du constructeur PrismaClient depuis le paquet @prisma/client npm déjà installé.
declare global {
  var prisma: PrismaClient | undefined;
}

//log:["query"] permet de visualiser dans la console les requêtes faites sur Primsa
const prisma = global.prisma || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV === 'development') global.prisma = prisma;
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
export default prisma;
