import EnumsError from '../utils/EnumsError.js'

export default (req, res, next) => {
    console.error(error.cause);
    switch (error.code) {
        case EnumsError.PRODUCT_NOT_FOUND:
            res.status(404).json({ status: 'error', message: error.message });
            break;

        case EnumsError.PRODUCT_NOT_CREATED:
            res.status(400).json({ status: 'error', message: error.message });
            break;

        case EnumsError.PRODUCT_NOT_UPDATED:
            res.status(400).json({ status: 'error', message: error.message });
            break;

        case EnumsError.PRODUCT_NOT_DELETED:
            res.status(400).json({ status: 'error', message: error.message });
            break;

        case EnumsError.PRODUCT_NOT_FOUND_BY_ID:
            res.status(404).json({ status: 'error', message: error.message });
            break;

        case EnumsError.CART_NOT_FOUND:
            res.status(404).json({ status: 'error', message: 'Carrito no encontrado.' });
            break;

        case EnumsError.CART_NOT_CREATED:
            res.status(400).json({ status: 'error', message: error.message });
            break;

        case EnumsError.CART_NOT_UPDATED:
            res.status(400).json({ status: 'error', message: error.message });
            break;

        case EnumsError.CART_NOT_DELETED:
            res.status(400).json({ status: 'error', message: error.message });
            break;

        case EnumsError.CART_NOT_FOUND_BY_ID:
            res.status(404).json({ status: 'error', message: error.message });
            break;

        case EnumsError.DB_ERROR:
            res.status(500).json({ status: 'error', message: error.message });
            break;

        case EnumsError.ROUTING_ERROR:
            res.status(500).json({ status: 'error', message: error.message });
            break;
        default:
            res.status(500).json({ status: 'error', message: 'Error desconocido' });
            break;
    }
}