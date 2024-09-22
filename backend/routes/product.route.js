import express from 'express';
import {getProducts} from '../Controllers/product.controller.js'
import {createProduct} from '../Controllers/product.controller.js'
import {deleteProduct} from '../Controllers/product.controller.js'
import {updateProduct} from '../Controllers/product.controller.js'
const router=express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", updateProduct);


router.delete("/:id",deleteProduct);


export default router;

