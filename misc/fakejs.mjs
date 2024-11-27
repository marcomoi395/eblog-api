import mongoose from 'mongoose';
import Category from '../models/category.model.mjs';
import User from '../models/user.model.mjs';
import Post from '../models/post.model.mjs';
import {faker} from '@faker-js/faker';

const seedDatabase = async () => {
    try{
        // await mongoose.connect(process.env.MONGODB_URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });

        // Clear existing data
        await Category.deleteMany({});
        await User.deleteMany({});
        await Post.deleteMany({});

        // Create categories
        const categories = [];
        for (let i = 0; i < 5; i++) {
            const category = new Category({
                name: faker.commerce.department(),
                description: faker.lorem.sentence(),
                slug: faker.lorem.slug(),
                thumbnail: faker.image.url(),
            });
            categories.push(await category.save());
        }

        // Create users
        const users = [];
        for (let i = 0; i < 3; i++) {
            const user = new User({
                fullName: faker.person.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                permissions: ['read', 'write'],
                thumbnail: faker.image.avatar(),
                phone: faker.phone.number(),
                bio: faker.lorem.sentence(),
            });
            users.push(await user.save());
        }

        // Create posts
        for (let i = 0; i < 30; i++) {
            const post = new Post({
                title: faker.lorem.sentence(),
                content: faker.lorem.paragraphs(),
                author: users[Math.floor(Math.random() * users.length)]._id,
                category: categories[Math.floor(Math.random() * categories.length)]._id,
                slug: faker.lorem.slug(),
                thumbnail: faker.image.url(),
            });
            await post.save();
        }

        console.log('Database seeded!');
        // mongoose.connection.close();
    } catch (e) {
        console.error(e);
    }

};

export default seedDatabase;