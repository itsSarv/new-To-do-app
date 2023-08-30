const router = require("express").Router();
const todoController = require("./todo.controller")

//list all
router.get("/", async (req, res, next)=>{
    try {
        const result = await todoController.list();
        res.json({data: result, msg:"success"});
    } 
    catch (error) {
        next(error);
    }
});

//get by id
router.get("/:id", async (req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await todoController.getById(id);
        res.json({data: result, msg:"success"});
    } 
    catch (error) {
        next(error);
    }
});

//create
router.post("/", async (req, res, next)=>{
    try {
        const {payload} = req.body;
        const result = await todoController.create(payload);
        res.json({data: result, msg:"success"});
    } 
    catch (error) {
        next(error);
    }
});

//put
router.put("/:id", async (req, res, next)=>{
    try {
        const {id} = req.params;
        const {payload} = req.body;
        const result = await todoController.updatebyId(id, payload);
        res.json({data: result, msg:"success"});
    } 
    catch (error) {
        next(error);
    }
});

//delete by id
router.delete("/:id", async (req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await todoController.remove(id)
        res.json({data: "Hello", msg:"success"});
    } 
    catch (error) {
        next(error);
    }
});

module.exports= router;