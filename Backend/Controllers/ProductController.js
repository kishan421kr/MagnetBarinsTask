const OrderModel = require("../Models/OrderModel");
const ProductModel = require("../Models/ProductModel")


const GetData=async(req,res)=>{
    try {
        const data = await ProductModel.find();

        res.send(data);
    } catch (error) {
        res.send({masg:"Internal Server Error"})
    }
    
}
const displaypayment =async(req,res)=>{
    const Product  = await OrderModel.find();
    console.log(req.body);
    res.send(Product);
}

module.exports = {
    GetData,
    displaypayment
}