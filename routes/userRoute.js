const express=require('express')
const {getUser,postUser,updateUser,deleteUser,getById}=require("../controller/userController")
const router=express.Router()

router.route("/").get(getUser).post(postUser)
router.route("/:id").put(updateUser).delete(deleteUser).get(getById)

module.exports = router