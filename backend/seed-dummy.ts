import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash('TestPassword123!', salt);

    console.log('Creating dummy users...');

    const user1 = await prisma.user.upsert({
        where: { email: 'john.doe@example.com' },
        update: {},
        create: {
            email: 'john.doe@example.com',
            passwordHash,
            firstName: 'John',
            lastName: 'Doe',
            displayName: 'JohnD',
            role: 'USER',
            emailVerified: true,
            isActive: true,
            city: 'New York',
            state: 'NY'
        },
    });

    const user2 = await prisma.user.upsert({
        where: { email: 'jane.smith@example.com' },
        update: {},
        create: {
            email: 'jane.smith@example.com',
            passwordHash,
            firstName: 'Jane',
            lastName: 'Smith',
            displayName: 'JaneS',
            role: 'USER',
            emailVerified: true,
            isActive: true,
            city: 'Los Angeles',
            state: 'CA'
        },
    });

    console.log('Creating dummy testimonials...');

    await prisma.testimonial.create({
        data: {
            userId: user1.id,
            content: 'This platform is absolutely amazing! The limits are truly tested and exceeded here.',
            rating: 5,
            isApproved: true,
            isPublic: true,
        },
    });

    await prisma.testimonial.create({
        data: {
            userId: user2.id,
            content: 'I had some issues initially but support was extremely helpful. Pending approval test.',
            rating: 4,
            isApproved: false, // Pending review
            isPublic: true,
        },
    });

    console.log('Creating dummy orders...');

    await prisma.order.create({
        data: {
            userId: user1.id,
            quantity: 2,
            unitPrice: 1500,
            totalAmount: 3000,
            shippingName: 'John Doe',
            shippingAddress: '123 Fake St',
            shippingCity: 'New York',
            shippingState: 'NY',
            shippingZipCode: '10001',
            status: 'SHIPPED',
        },
    });

    await prisma.order.create({
        data: {
            userId: user2.id,
            quantity: 1,
            unitPrice: 2000,
            totalAmount: 2000,
            shippingName: 'Jane Smith',
            shippingAddress: '456 Test Ave',
            shippingCity: 'Los Angeles',
            shippingState: 'CA',
            shippingZipCode: '90001',
            status: 'PENDING',
        },
    });

    console.log('Dummy data seeding completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
