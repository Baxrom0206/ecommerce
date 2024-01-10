const express = require('express')
const cartsRoute = express.Router()
const authGuard = require("../middleware/auth.guard")
const roleGuard = require("../middleware/role.guard")
const app = express()


const { createCarts,updateCarts,deleteCarts } = require("../controllerPapka/cart.controller.js")




cartsRoute.post("/",authGuard ,roleGuard("deliver"), createCarts)
cartsRoute.patch("/:id",authGuard, roleGuard("deliver"), updateCarts)
cartsRoute.delete("/:id",authGuard, roleGuard("deliver"), deleteCarts)




module.exports = cartsRoute
