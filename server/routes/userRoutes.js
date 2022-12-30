const {Router} = require("express")


const {getAllUser,signUp,login }= require("../controller/userController")


 const router = Router()

router.get("/",getAllUser )
router.post("/signup",signUp )
router.post("/login",login )

module.exports = router