export const GeneratorProductError = (product) => {
    return `Todos los campos son requerids y deben ser validos.
    Lista de campos recibidos: 
     - title: ${product.title}
     - description: ${product.description}
     - code: ${product.code}
     - price: ${product.price}
     - department: ${product.department}
     - stock: ${product.stock}
     - image: ${product.image}
    `
}