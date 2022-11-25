const { PrismaClient } = require('@prisma/client');
const { tasks, users } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  console.log('seeding');
  try {
    await prisma.task.deleteMany();
    console.log('Deleted records in article table');

    await prisma.user.deleteMany();
    console.log('Deleted records in user table');

    await prisma.task.createMany({
      data: tasks,
    });
    console.log('Added task data');

    await prisma.user.createMany({
      data: users,
    });
    console.log('Added product data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
