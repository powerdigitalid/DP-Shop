const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();

async function main() {
  const User = await prisma.User.createMany({
    data: [
      {
        name: 'Alice',
        username: 'alice',
        password: 'alice',
      },
      {
        name: 'Admin',
        username: 'admin',
        password: 'admin',
      },
    ],
    skipDuplicates: true,
  });
  const product = await prisma.Product.createMany({
    data: [
      {
        product_name: 'Product 1',
        product_price: 10000,
        product_desc: 'Product 1 Description',
        product_img: 'https://picsum.photos/200/300',
      },
      {
        product_name: 'Product 2',
        product_price: 20000,
        product_desc: 'Product 2 Description',
        product_img: 'https://picsum.photos/200/300',
      },
    ],
    skipDuplicates: true,
  });
  console.log({ User, product });
} 

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
  });