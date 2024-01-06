import path from 'path';
import { fileURLToPath } from 'url';
import { faker } from '@faker-js/faker';


export const __filename = fileURLToPath(import.meta.url);

export const __dirname = path.dirname(__filename);

export const generateProduct = () => {
    return {
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        code: faker.string.alphanumeric({ length: 10 }),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        stock: faker.number.int(10000, 99000),
        image: faker.image.url(),
    };
};

export const generateProducts = () => {
    const products = [];
    for (let i = 0; i < 100; i++) {
        products.push(generateProduct());
    }
    return products;
};