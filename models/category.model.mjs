import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            // unique: true
        },
        description: {
            type: String,
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

const Category = mongoose.model('Category', categorySchema, 'category');

export default Category;