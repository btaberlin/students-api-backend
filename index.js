let students = [
    {"id": 1,
    "name": "Max",
    "Modul": "React Native"
    },
    {"id": 2,
    "name": "Maria",
    "Modul": "Python"
    },
    {"id": 3,
    "name": "Tom",
    "Modul": "Cloud"
    }
]


const { response } = require('express')
////// 

const express = require('express')
const app = express()
const port = process.env.port || 3001
app.use(express.json())


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/student', (req, res) => {
    res.json(students)
  })

app.get('/api/student/:id', (req, res) => {
  const id = Number(req.params.id)
  console.log({id})
  const student = students.find(student=> student.id === id)
  // console.log({student})
  if (student) {
    res.json(student)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/student/:id', (req, res) => {
  const id = Number(req.params.id)
  students = students.filter(student => student.id !== id)
  res.status(204).end()
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
