import search from '../misc/search.mjs';
import pagination from '../misc/pagination.mjs';
import Post from "../models/post.model.mjs";

// GET /admin
export const index = async (req, res) => {
    let find = {
        deleted: false,
    }

    // Filter status
    if (req.query.status) {
        find.isPublished = req.query.status === 'published';
    }

    //Search
    Object.assign(find, search(req).searchCondition);

    // Pagination
    const totalRecords = await Post.countDocuments(find);
    let objectPagination = pagination(req, totalRecords);

    // Sort
    let sort = {};
    if (req.query?.sortKey && req.query?.sortValue) {
        sort[req.query.sortKey] = req.query.sortValue === "desc" ? -1 : 1;
    } else {
        sort.createAt = -1; // Default sort by position in descending order
    }

    const records = await Post.find(find).sort(sort).skip(objectPagination.skip).limit(objectPagination.numberOfProductsPerPage);
    const result = {
        records: records,
        totalRecords: totalRecords,
        totalPages: objectPagination.numberOfPages,
        currentPage: objectPagination.page,
        numberOfProductsPerPage: objectPagination.numberOfProductsPerPage,
        query: req.query
    }

    res.send(result)
    // res.render('page/admin/index', {
    //     title: 'EBlogAPI',
    //     message: "/admin"
    // })
}

// GET /admin/add
export const add = (req, res) => {
    res.render('page/admin/add', {
        title: 'EBlogAPI', message: "/admin/add"
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
        title: 'EBlogAPI', message: "/admin/permission"
    })
}

// PATCH /admin/permission
export const permissionPatch = (req, res) => {

    // res.redirect("/admin/category");
    res.send("/admin/permission")
}