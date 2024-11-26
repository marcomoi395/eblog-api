import {Router} from "express";
import {login, loginPost, logoutPost, refreshPost, register} from "../controllers/auth.controller.mjs"

const router = Router();

router.get("/login", login);

router.post("/login", loginPost);

router.get("/register", register);

router.post("/register", refreshPost);

router.post("/logout", logoutPost);

router.post('/refresh', refreshPost)

export default router
