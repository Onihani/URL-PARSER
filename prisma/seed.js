const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const now = new Date();

const seedData = [
  {
    url: "tailwindcss.com", 
    description: "Documentation for the Tailwind CSS framework.", 
    favicon: "/apple-touch-icon.png",
    title: "Tailwind CSS - Rapidly build modern websites without ever leaving your HTML."
  },
];

// A `main` function so that we can use async/await
async function main() {
  const res = await Promise.all(
    seedData.map((data) => {
      console.log(prisma)
      const newUrl = prisma.url.create({ data });
      return newUrl;
    })
  );
  res.map((data) => {
    console.log(data);
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
