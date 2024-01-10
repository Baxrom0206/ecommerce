const express = require('express')
const bodyparser = require('body-parser')
const env = require('./config/env.config.js')

const categoryRoute = require('./routes/category.route.js')
const productRoute = require('./routes/product.route.js')
const userRoute = require('./routes/user.route.js')
const authRoute = require('./routes/auth.route.js')
//const searchRoute = require('./routes/search.route.js')
const addressesRoute = require('./routes/addresses.route.js')
const attributesRoute=require('./routes/attributes.route.js') 
const attributesValueRoute=require('./routes/attributeValue.route.js')
const deliveryRoute = require('./routes/delivery.route.js')
const ordersRoute = require('./routes/orders.route.js')
const eventsRoute = require('./routes/events.route.js')
const reviewsRoute = require('./routes/reviews.route.js')



const cartsRoute =require('./routePapka/cart.route.js')



const app = express()
app.use(bodyparser.json())



app.use('/product', productRoute)
app.use('/category', categoryRoute)
app.use('/user', userRoute)
app.use('/auth',authRoute)
app.use('/addresses', addressesRoute)
app.use('/attributes', attributesRoute)
app.use('/attributesValue',attributesValueRoute)
app.use('/delivery', deliveryRoute)
app.use('/orders', ordersRoute)
app.use('/events', eventsRoute)
app.use('/reviews', reviewsRoute)


app.use('/carts',cartsRoute)
//app.use('/search', searchRoute)





const port = env.PORT
app.listen(port, () => console.log(` ${port} chi port ishladi`))

