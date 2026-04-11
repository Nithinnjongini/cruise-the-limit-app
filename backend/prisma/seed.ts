import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@cruisethelimit.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'ChangeMe!Secure2024';

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (existingAdmin) {
    console.log(`Admin user already exists: ${adminEmail}`);
    return;
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(adminPassword, salt);

  const admin = await prisma.user.create({
    data: {
      email: adminEmail,
      passwordHash,
      firstName: 'System',
      lastName: 'Admin',
      displayName: 'Admin',
      role: 'ADMIN',
      provider: 'LOCAL',
      emailVerified: true,
      isActive: true,
    },
  });

  console.log(`Admin user created successfully: ${admin.email} (ID: ${admin.id})`);
}

main()
  .catch((e) => {
    console.error('Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
