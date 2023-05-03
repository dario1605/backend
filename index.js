class ProductManager {
    #products
    #error
    constructor() {
        this.#products = []
        this.#error = undefined
    }

    getProducts = () => this.#products

    getProductsId = (id) => {
        const product = this.#products.find(item => item.id === id)
        if (!product) return 'Not Found'
        return product
    }
 
    #generateId = () =>  (this.#products.length === 0) ? 1 : this.#products[this.#products.length-1].id +1

    #validate = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            //return `[${title}]: Faltan completar campos`
            this.#error = `[${title}]: Faltan completar campos`
        } else {
            const found = this.#products.find(item => item.code === code)
            //if (!found) return 'ok'
            //return `[${title}]: El codigo ya existe`
            if (found) this.#error = `[${title}]: El codigo ya existe`
            else this.#error = undefined
        }
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        //let id
        //if (this.#products.length === 0) id = 1
        //else id = this.#products[this.#products.length-1].id + 1
        this.#validate(title, description, price, thumbnail, code, stock)
        if (this.#error === undefined)
           this.#products.push({id: this.#generateId(), title, description, price, thumbnail, code, stock})
        else
         console.log(this.#error)
    }
}

const productManager = new ProductManager()
productManager.addProduct('Cordoba', '1 Litro', 400, 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3100656_f.jpg', 1000, 1000)
productManager.addProduct('Quilmes', '1 Litro', 'https://masonlineprod.vtexassets.com/arquivos/ids/272997-800-auto?v=638116617849200000&width=800&height=auto&aspect=true', 2000, 1100) //campo incompleto
productManager.addProduct('Brahma', '1 Litro', 550, 'https://masonlineprod.vtexassets.com/arquivos/ids/155943/Cerveza-Brahma-Retornable-1-Lt-2-1551.jpg?v=637835121505000000', 3000, 1200)
productManager.addProduct('Andes', '1 Litro', 560, 'https://almacenfamily.com/productos/7792798002115-355-5ee921024bc57.jpg', 1000, 1300) //codigo repetido
productManager.addProduct('Imperial', '1 Litro', 600, 'https://http2.mlstatic.com/D_NQ_NP_981069-MLA50973672855_082022-O.webp', 5000, 1400)
productManager.addProduct('Corona', '1 Litro', 650, 'https://http2.mlstatic.com/D_NQ_NP_977571-MLA46459474198_062021-V.jpg', 6000, 1500)
console.log(productManager.getProducts())
console.log(productManager.getProductsId(2))
console.log(productManager.getProductsId(4))
console.log(productManager.getProductsId(10))