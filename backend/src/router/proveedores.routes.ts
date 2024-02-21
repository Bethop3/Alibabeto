
import { GetProveedores } from "../controllers/proveedores.controller";
import { Router } from "express";


const router = Router();

router.get( '/', GetProveedores);

export default router;
