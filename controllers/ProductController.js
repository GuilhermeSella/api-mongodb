const Product = require("../Models/Product")


class ProductController{

    static async ShowProducts(req,res){
        const products = await Product.getProducts();
        return res.status(200).json({

            products
        })
    }

    static async ShowOneProduct(req,res){

        const {id} = req.params

        const product = await Product.getOneProduct(id)
        return res.status(200).json({
            message:"Produto " + id,
            product
        })
    }

    static CreateProducts(req,res){
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description

        const product = new Product(name,price,description)

        product.save()

        return res.status(200).json({
            message:"Produto cadastrado!",
            product
        })

    }

    static async DeleteProduct(req,res){
        const {id}  = req.params

        const product = await Product.deleteOneProduct(id)

        return res.status(200).json({
            message:`Produto ${id} deletado do mongodb`,
        })

    }

    static async EditProductMethod(req,res){
        const {id} = req.params
        const {name, price, description} = req.body

        const product = new Product(name,price,description);

        await product.editProduct(id)

        return res.status(200).json({
            message:"Dados do produto editado!",
            product
        })
    }

}

module.exports = ProductController;