import express from 'express'
import { createP,updateP,deleteP,getP } from '../controllers/polls-controller.js'
export const polls_route = express.Router()

polls_route.get('/getpoll/:id',getP)
polls_route.post('/create',createP)
polls_route.delete('/delete',deleteP)
polls_route.put('/update',updateP)

export default {polls_route}