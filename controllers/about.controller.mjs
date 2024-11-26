// GET /about
const index = (req, res) => {
    res.render('page/about', {
        title: 'EBlogAPI',
        message: "/about"
    })
}

export default index
