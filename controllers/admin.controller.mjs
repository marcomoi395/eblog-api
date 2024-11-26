
// GET /admin
export const index = (req, res) => {
    res.render('page/admin/index', {
        title: 'EBlogAPI',
        message: "/admin"
    })
}

// GET /admin/add
export const add = (req, res) => {
    res.render('page/admin/add', {
        title: 'EBlogAPI',
        message: "/admin/add"
    })

}
// POST /admin/add
export const addPost = (req, res) => {

    // res.redirect("/admin/category");
    res.send("/admin/permission")
}

// GET /admin/permission
export const permission = (req, res) => {
    res.render('page/admin/permission', {
        title: 'EBlogAPI',
        message: "/admin/permission"
    })
}

// PATCH /admin/permission
export const permissionPatch = (req, res) => {

    // res.redirect("/admin/category");
    res.send("/admin/permission")
}