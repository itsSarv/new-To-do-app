const router = require("express").Router();
const todoRouter = require("../modules/todo/todo.api")

router.use("/todo", todoRouter)

module.exports= router;