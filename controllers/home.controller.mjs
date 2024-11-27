// GET /
const index = (req, res) => {
    const filter =
    res.render('page/about', {
        title: 'EBlogAPI',
        message: "/about"
    })
}

export default index
