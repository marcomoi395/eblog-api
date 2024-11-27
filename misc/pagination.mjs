const pagination = (req, totalRecords) => {
    let objectPagination = {
        currentPageNumber: 1, numberOfProductsPerPage: 12,
    };

    if (req.query.page) {
        objectPagination.currentPageNumber = parseInt(req.query.page);
    }

    objectPagination.skip = (objectPagination.currentPageNumber - 1) * objectPagination.numberOfProductsPerPage;
    objectPagination.numberOfPages = Math.ceil((totalRecords / objectPagination.numberOfProductsPerPage));
    return objectPagination;
}

export default pagination;