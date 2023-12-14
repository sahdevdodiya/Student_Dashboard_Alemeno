const mongoose = require("mongoose")
const prerequisitesSchema = mongoose.Schema({
    prerequisites: [String]
})

const syllabusSchema = mongoose.Schema({
    syllabus: [
        {
            week: Number,
            topic: String,
            content: String,
        }
    ]
})
const studentsSchema = mongoose.Schema({
    students: [
        {
            id: Number,
            name: String,
            email: String
        }
    ]
})

const courseSchema = mongoose.Schema({
    name: String,
    instructor: String,
    description: String,
    enrollmentStatus: String,
    thumbnail: String,
    duration: String,
    schedule: String,
    location: String,
    prerequisites: prerequisitesSchema,
    syllabus: syllabusSchema,
    students: studentsSchema
})

const CourseModel = mongoose.model("Course", courseSchema)

module.exports = CourseModel;