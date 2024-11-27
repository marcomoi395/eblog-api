import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    slug: {
        type: String,
        required: true,
        // unique: true
    },
    thumbnail: { type: String },
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    }
},
    {
        timestamps: true
    }
);

const Post = mongoose.model('Post', postSchema, 'post');

export default Post;