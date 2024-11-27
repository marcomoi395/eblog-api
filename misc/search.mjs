const search = (req) => {
    let searchCondition = {};
    if (req.query.search) {
        searchCondition = {
            $or: [{
                title: {
                    $regex: req.query.search, $options: 'i'}}, {
                content: {
                    $regex: req.query.search, $options: 'i'
                }
            },]
        }
    }
    return {searchCondition};
}

export default search;