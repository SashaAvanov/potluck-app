const express = require('express')
const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})