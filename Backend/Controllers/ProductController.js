const ProductModel = require("../Models/ProductModel")


const GetData=async(req,res)=>{
    try {
        const data = await ProductModel.find();
        
        res.send(data);
    } catch (error) {
        res.send({masg:"Internal Server Error"})
    }
    
}

module.exports = {
    GetData
}