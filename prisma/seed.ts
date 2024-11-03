import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: 'password123',
      profile: {
        create: {
          firstName: 'John',
          lastName: 'Doe',
          bio: 'Hello, I am John!',
        },
      },
    },
  });
  console.log({ user });
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());

