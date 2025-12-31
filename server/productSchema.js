const mongoose=require('mongoose')

const proSchema=mongoose.Schema({
    productImage:String,
    productTitle:String,
    productPrice:String,
    productVideo:String,
    productDescription:String
})

module.exports=mongoose.model("beautyproducts",proSchema);