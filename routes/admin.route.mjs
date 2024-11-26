import {Router} from "express";
import {index, permission, add, addPost, permissionPatch} from "../controllers/admin.controller.mjs"

const router = Router();

router.get("/", index);
router.get("/add", add);
router.post("/add", addPost);
router.get("/permission", permission);
router.patch("/permission", permissionPatch);

export default router
