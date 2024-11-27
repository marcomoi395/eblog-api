import meRoute from "./me.route.mjs"
import adminRoute from "./admin.route.mjs"
import authRoute from "./auth.route.mjs"
import aboutController from "../controllers/about.controller.mjs"
import homeController from "../controllers/home.controller.mjs";

const index = (app) => {
    app.get('/', homeController);

    app.get('/about', aboutController);

    app.use('/auth', authRoute);

    app.use('/me', meRoute);

    app.use('/admin', adminRoute);

}

export default index;
