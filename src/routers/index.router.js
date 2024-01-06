import { Router } from "express";
import { generateProduct } from "../utils.js";
import { CustomError } from "../utils/CustomError.js";
import { GeneratorProductError } from "../utils/CauseMessageError.js";

const router = Router();

router.get('/', (req, res) => {
    res.send('<h1>Hola! 👋🏽</h1>')
});

router.get('/mockingproducts', (req, res) => {
    const products = [];
    for (let i = 0; i < 100; i++) {
        products.push(generateProduct());
    }
})

router.post('/new-product', (req, res) => {
    const products = [];
    const {
        id,
        title,
        description,
        code,
        price,
        department,
        stock,
        image
    } = req.body;

    if (
        !id ||
        !title ||
        !description ||
        !code ||
        !price ||
        !department ||
        !stock ||
        !image
    ) {
        return CustomError.createError({
            name: 'Error creando el producto',
            cause: GeneratorProductError({
                title,
                description,
                code,
                price,
                department,
                stock,
                image
            }),
            message: 'Todos los campos son requeridos y deben ser validos.',
            code: 1
        }),
            res.status(400).json({ status: 'error', message: 'Todos los campos son requeridos y deben ser validos.' });
    }

    const newProduct = {
        id: faker.database.mongodbObjectId(),
        title,
        description,
        code,
        price,
        department,
        stock,
        image
    };

    products.push(newProduct);
    res.status(201).json(products);
});

export default router;