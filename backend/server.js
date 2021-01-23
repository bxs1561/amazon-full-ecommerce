import express from "express"
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";

const app = express();
const mango_uri = process.env.MANGODB_URL || "mongodb+srv://bigUser:UYanIpK05xNlXzm0@cluster0.k8gly.mongodb.net/bigUser?retryWrites=true&w=majority"
mongoose.connect(mango_uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const port = process.env.VIEWPORT || 9000;

app.get("/api/products/:id",(req,res)=>{
    const product = data.products.find((x)=>x._id === req.params.id)
    if(product){
        res.send(product)
    }
    else{
        res.status(404).send({message: "product not found"})
    }
})

app.get("/api/products",(req,res)=>{
    res.send(data.products)
});
app.use("/api/users",userRouter)
app.get("/",(req,res)=>{
    res.send("server is ready")
});
app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message})
})

app.listen(port,()=>{
    console.log(`server run ${port}`)
})
