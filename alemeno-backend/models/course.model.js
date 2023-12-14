const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name: { type: String, required: true },
    instructor: { type: String, required: true },
    description: { type: String, required: true },
    enrollmentStatus: { type: String, required: true },
    thumbnail: { type: String, required: true },
    duration: { type: String, required: true },
    schedule: { type: String, required: true },
    location: { type: String, required: true },
    prerequisites: [{ type: String, required: true }],
    syllabus: [
        {
            week: { type: Number, required: true },
            topic: { type: String, required: true },
            content: { type: String, required: true },
        },
    ],
    students: [
        {
            id: { type: Number, required: true },
            name: { type: String, required: true },
            email: { type: String, required: true },
        },
    ],
});

const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;
