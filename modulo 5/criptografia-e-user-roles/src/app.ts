import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
    console.log('Server running in http://localhost:3003')
})

export default app