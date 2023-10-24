import { Router } from "express";
import * as productController from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { idProductValidators, productsValidators } from "../middlewares/validators/productValidators";
import { handleValidationErrors } from "../middlewares/validation.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";

const router = Router();

// OBTENER TODOS
router.get(
    "/", 
    productController.index
);
// CREAR
router.post(
    "/", 
    ...productsValidators,
    handleValidationErrors,
    authMiddleware, 
    adminMiddleware,
    productController.create
);
// OBTENER UNO
router.get(
    "/:id",
    ...idProductValidators,
    handleValidationErrors, 
    productController.show
);
// BORRAR
router.delete(
    "/:id", 
    ...idProductValidators,
    handleValidationErrors,
    authMiddleware, 
    productController.destroy)

export default router;