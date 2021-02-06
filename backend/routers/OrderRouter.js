import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import {isAuth} from "../utils.js";

const orderRouter = express.Router();

orderRouter.post("/",isAuth,expressAsyncHandler(async (req,res)=>{
    if(req.body.orderItems.length ===0){
        res.status(400).send({message: "cart is empty"})
    }
    else {
        const order = new Order({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.b.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id
        });
        const createdOrder = order.save();
        res.status(201).send({message: "new order created", order:createdOrder})
    }
}));
export default orderRouter

