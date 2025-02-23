"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const authorSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    author: authorSchema,
    isPublished: {
        type: Boolean,
        default: true,
    },
    category: {
        type: String,
        enum: [
            'Technology',
            'Health & Wellness',
            'Lifestyle',
            'Business',
            'Education',
            'Entertainment',
        ],
        required: true,
    },
}, { timestamps: true });
exports.Blog = (0, mongoose_1.model)('Blog', blogSchema);
