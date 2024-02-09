const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false, // Make the 'name' field optional
    },
    instructor: {
        type: String,
        required: false, // Make the 'instructor' field optional
    },
    description: {
        type: String,
        required: false, // Make the 'description' field optional
    },
    enrollmentStatus: {
        type: String,
        required: false, // Make the 'enrollmentStatus' field optional
    },
    thumbnail: {
        type: String,
        required: false, // Make the 'thumbnail' field optional
    },
    duration: {
        type: String,
        required: false, // Make the 'duration' field optional
    },
    schedule: {
        type: String,
        required: false, // Make the 'schedule' field optional
    },
    location: {
        type: String,
        required: false, // Make the 'location' field optional
    },
    prerequisites: {
        type: [String],
        default: [],
    },
    syllabus: {
        type: [
            {
                week: {
                    type: Number,
                    required: false, // Make the 'week' field optional
                },
                topic: {
                    type: String,
                    required: false, // Make the 'topic' field optional
                },
                content: {
                    type: String,
                    required: false, // Make the 'content' field optional
                },
            },
        ],
        default: [],
    },
    students: {
        type: [
            {
                name: {
                    type: String,
                    required: false, // Make the 'name' field of each student optional
                },
                email: {
                    type: String,
                    required: false, // Make the 'email' field of each student optional
                },
            },
        ],
        default: [],
    },
});

const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;
