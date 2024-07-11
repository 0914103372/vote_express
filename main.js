import express from 'express'
import {polls_route} from './routes/polls-route.js'
import {option_route} from './routes/options-route.js'
import {submission_route} from './routes/submission-route.js'
const port = 3000
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/polls',polls_route)
app.use('/options',option_route)
app.use('/submission',submission_route)

app.get('/',(req,res)=>{
    res.json({message: 'mainpage'})
})
app.listen(port,()=>{
    console.log(`Example app listening on http://localhost:${port}`)
})
