import express from "express"
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mango_uri = process.env.MANGODB_URL || "mongodb+srv://bigUser:olZcLiy3nN171tY3@cluster0.k8gly.mongodb.net/bigUser?retryWrites=true&w=majority"
mongoose.connect(mango_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
mongoose.connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});




const port = process.env.VIEWPORT || 9000;

// app.get("/api/products/:id",(req,res)=>{
//     const product = data.products.find((x)=>x._id === req.params.id)
//     if(product){
//         res.send(product)
//     }
//     else{
//         res.status(404).send({message: "product not found"})
//     }
// })

// app.get("/api/products",(req,res)=>{
//     res.send(data.products)
// });
app.get("/",(req,res)=>{
    res.send("server is ready")
});
app.use("/api/users",userRouter);
app.use("/api/products",productRouter)

app.use((err, req, res, next)=>{
    res.status(500).send({message: err.message})
})

app.listen(port,()=>{
    console.log(`server run ${port}`)
})
