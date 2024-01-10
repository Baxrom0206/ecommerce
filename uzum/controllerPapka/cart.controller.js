const db = require("../config/db.config")
const Pagination = require("../helpers/pagiantion")
const cartsRoute = require("../routePapka/cart.route")
const apiResponse = require("../helpers/apiResponse.helpers")

async function createCarts(req, res) {

    try {
        sqlQuery = 'INSERT INTO carts  (count) VALUES(0)'
        const { count } = req.body
        db.query(sqlQuery, [ count])
        res.send("ishladi")
    } catch (error) {
        console.error({ error: error.message })
        console.log(error)
    }
}
async function updateCarts(req, res) {
    try {
    const id = req.params.id;
    const selectSql = "SELECT * FROM carts WHERE id = ?";
    const carts = await db.query(selectSql, id);
    if (carts.length === 0) {
      const error = new Error(`Mahsulot ${id} raqamiga ega bo'lmagan`);
      error.status = 404;
      throw error;
    }
    const { } = req.body;
    const updateSql = "UPDATE carts SET ? WHERE id = ?";
    await db.query(updateSql, [req.body, id]);
    res.send("Ma'lumotlar o'zgartirildi");
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
    console.log(error);
  } 
}




async function deleteCarts(req,res){
  try {
    const cartsId = req.params.id;
    const query = "DELETE FROM carts WHERE id =?";
    await db.query(query, [cartsId]);
    res.json({ message: "muvaffaqiyatli o\'chirildi" });


} catch (error) {
    console.error(error);
    res.status(500).json({ error: "o\'chirilmadi" });
}
}






module.exports = {
    createCarts,
    updateCarts,
    deleteCarts
}
