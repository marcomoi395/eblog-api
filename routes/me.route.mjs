import {Router} from "express";
import {
    index,
    list,
    create,
    createPost,
    uploadPost,
    edit,
    editPatch,
    deletePatch,
    upload
} from "../controllers/me.controller.mjs"
const router = Router();

router.get("/", index);

router.get("/list", list);

router.get("/create", create);

router.post("/create", createPost);

router.get("/upload", upload);

router.post("/upload", uploadPost);

router.get("/edit/:id", edit);

router.patch("/edit/:id", editPatch);

router.patch("/delete/:idPost", deletePatch);

export default router
