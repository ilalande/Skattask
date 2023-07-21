import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default prisma;
//log:["query"] permet de visualiser dans la console les requêtes faites sur Primsa
// const prisma = global.prisma || new PrismaClient({ log: ['query'] });

// Old version
// if (process.env.NODE_ENV === 'development') global.prisma = prisma;
// if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
// export default prisma;
