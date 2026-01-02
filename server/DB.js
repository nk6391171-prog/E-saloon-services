const mongoose=require('mongoose');

  
async function connectMongo(){
    try{
       await mongoose.connect("mongodb+srv://neha:cE9c3oajct3dLTpj@cluster0.ptnmroa.mongodb.net/Esallonservices?appName=Cluster0"),{
            useNewUrlParser:true,
            useUnifiedTopology:true 
        } 
        console.log("connetd to mongodb");
  
    } catch(a){
        console.log(a); 
        process.exit(1);
}
    }

    module.exports=connectMongo;
 