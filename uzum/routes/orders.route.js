const express = require('express')
const ordersRoute = express.Router()
const authGuard = require("../middleware/auth.guard")
const roleGuard = require("../middleware/role.guard")
const app = express()


const { createOrders, findAllOrders, findByOrders, updateOrders, deleteOrders } = require("../controller/orders.controller")




ordersRoute.post("/",authGuard ,roleGuard("deliver"), createOrders)
ordersRoute.get("/orders", findAllOrders)
ordersRoute.get("/:id",authGuard ,roleGuard("deliver"), findByOrders)
ordersRoute.patch("/:id",authGuard, roleGuard("deliver"), updateOrders)
ordersRoute.delete("/:id",authGuard, roleGuard("deliver"), deleteOrders)




module.exports = ordersRoute
