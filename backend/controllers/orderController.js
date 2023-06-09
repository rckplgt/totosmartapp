import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

//@desc     Create new orders
//@route    POST /api/orders
//@access   Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
    });

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
});

//@desc     Create an order by ID
//@route    GET /api/orders/:id
//@access   Private
const getOrderByID = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate("user", "name email")

  if (order){
    res.json(order)
  }else{
    res.status(404)
    throw new Error("Order not found")
  }
}
);

export {addOrderItems, getOrderByID }
