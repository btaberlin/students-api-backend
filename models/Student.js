const {Schema, model} = require('mongoose')

const studentSchema = new Schema(
    {
        name: String,
        Modul: String,
        date: Date
    }
)

const Student = model('Student', studentSchema)

// const student = new Student(
//     {
//         name: "Peter",
//         Modul: "Python",
//         date: new Date()
//     }
// )

// student.save().then(result => {
//     console.log(result)
// }).catch(err =>{
//     console.error(err)
// })

module.exports = Student