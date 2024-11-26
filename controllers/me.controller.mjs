// GET /me
export const index = (req, res) => {
    res.render('page/me/index', {
        title: 'EBlogAPI',
        message: "/me"
    })
}

// GET /me/list
export const list = (req, res) => {
    res.render('page/me/list', {
        title: 'EBlogAPI',
        message: "me/list"
    })
}

// GET /me/create
export const create = (req, res) => {
    res.render('page/me/create', {
        title: 'EBlogAPI',
        message: "/me/create"
    })
}

// POST /me/create
export const createPost = (req, res) => {

    // res.redirect("/me/category");
    res.send("/me/create")
}

// GET /me/upload
export const upload = (req, res) => {
    res.render('page/me/upload', {
        title: 'EBlogAPI',
        message: "/me/upload"
    })
}

// POST /me/upload
export const uploadPost = (req, res) => {

    // res.redirect("/me/category");
    res.send("/me/upload")
}

// GET /me/edit/:id
export const edit = (req, res) => {
    res.render('page/me/edit', {
        title: 'EBlogAPI',
        message: "/me/edit/:id"
    })
}

// PATCH /me/edit/:id
export const editPatch = (req, res) => {

    // res.redirect("/me/edit/:id");
    res.send("/me/edit/:id")
}

// PATCH /me/delete/:id
export const deletePatch = (req, res) => {

    // res.redirect("/me/category");
    res.send("/me/delete/:id")
}

