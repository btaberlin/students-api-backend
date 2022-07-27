require('./mongo')
const Student = require('./models/Student')

const express = require('express')
const app = express()
const port = process.env.Port || 3001 

const cors = require('cors')
app.use(cors())

app.use(express.json())




/////////////////////////////////////////////////////

app.get('/', (req, res) => {
  res.send('<h1> Home </h1>')
})

app.get('/api/student', (req, res) => {
    Student.find({}).then(students =>{
      res.json(students)
    })
  })

app.get('/api/student/:id', (req, res) => {
  const id = req.params.id

  Student.findById(id).then(student => {
      if (student) {
        return res.json(student)
      } else {
        res.status(404).json({
          error: "Nicht gefunden (not found)"
        }).end()
      }
  }).catch(err =>{
    console.log(err)
  })
})

app.delete('/api/student/:id', (req, res) => {
  const id = Number(req.params.id)

  Student.findByIdAndRemove(id).then(student =>{
    res.status(204).end()
  }).catch(err =>{
    console.log(err)
  })
})

app.post('/api/student',  (req, res) => {
  const student = req.body
  console.log(student)

  if (!student || !student.name) {
    return res.status(400).json({
      Error: "name is missing"
    })
  }

  // students = students.concat({student})
  students = [...students, student]

  res.status(201).json(student)
})

/////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





// ########################################
