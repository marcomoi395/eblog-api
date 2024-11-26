// GET /auth/login
export const login = (req, res) => {
    res.render('page/auth/login', {
        title: 'EBlogAPI', message: "/auth/login"
    })
}

// POST /auth/login
export const loginPost = (req, res) => {


    // res.redirect("/auth/category");
    res.send("/auth/login")
}

// GET /auth/register
export const register = (req, res) => {
    res.render('page/auth/register', {
        title: 'EBlogAPI', message: "/auth/register"
    })
}

// POST /auth/register
export const registerPOST = (req, res) => {


    res.send("/auth/register")
}


// POST /auth/logout
export const logoutPost = (req, res) => {

    // res.redirect("/auth/category");
    res.send("/auth/logout")
}

// POST /auth/refresh
export const refreshPost = (req, res) => {

    // res.redirect("/auth/category");
    res.send("/auth/refresh")
}