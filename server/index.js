        const express=require('express');
        const connectdb=require('./DB');
        const proSchema=require('./productSchema')
        const cors=require('cors')

        connectdb();
 

        const app=express();
       
        app.use(cors({
            origin:"https://imaginative-tarsier-731810.netlify.app",
            methods:"GET",
            credentials:true
        }));

        app.use(express.json())

        app.get('/product',(req,res)=>{
             proSchema.find({})
             .then(cat=>{ 

                res.json(cat);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  console.log(cat);
             })
        })

        

        app.get('/product:id',(req,res)=>{

            const id=req.params.id;
             proSchema.findbyid(id)
             .then(cat=>{ 

                res.json(cat);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  console.log(cat);
             })
        })

        app.get('/',(reg,res)=>{
            res.send("Hello");
        })

        app.get('/movie',(req,res)=>{
            res.json({
                "movie_name":"Baghi",
                "thumnail":"https://cdn.britannica.com/53/133553-050-9EC2A4E1/Mata-Hari-costume-Javanese.jpg", 
                "trailer_video":"https://youtu.be/If1_SQQioos?si=mgDNaJ_gy4ECZeyG"

            })
        })

        

        chasma=()=>{
            console.log("chasma is running")
        }

        const port=5000;
        app.listen(port,chasma);