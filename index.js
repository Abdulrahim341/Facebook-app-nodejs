import express from 'express'
import cors from 'cors'
import bootstrab from './src/bootstrab.js'
const app = express()
const port = 3000
app.use(cors())
bootstrab(app,express)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))




