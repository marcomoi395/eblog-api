import express from "express";
import meRoute from "./me.route.mjs"
import adminRoute from "./admin.route.mjs"
import authRoute from "./auth.route.mjs"
import aboutController from "../controllers/about.controller.mjs"

const index = (app) => {
    app.get('/', (req, res) => {
        res.render('page/index', {
            title: 'EBlogAPI',
            message: "index"
        })
    })
    app.get('/about', aboutController);

    app.use('/auth', authRoute);

    app.use('/me', meRoute);

    app.use('/admin', adminRoute);

}

export default index;
