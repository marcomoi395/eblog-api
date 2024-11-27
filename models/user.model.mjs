import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            // unique: true,
        },
        email: {
            type: String,
            required: true,
            // unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        permissions: {
            type: [String],
            default: []
        },
        thumbnail: String,
        phone: String,
        bio: String,
        isActive: {
            type: Boolean,
            default: true,
        },
        refreshToken: {
            type: [String],
            default: [],
        },
        deleted: {
            type: Boolean,
            default: false,
        },
        deletedAt: Date
    },
    {
        timestamps: true,
    },
);


const User = mongoose.model('User', userSchema, 'user');

export default User;