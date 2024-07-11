import express from "express";
import { deleteO,createO,updateO,getO } from "../controllers/options-controller.js";

export const option_route = express.Router()

option_route.get('',getO)
option_route.post('create',createO)
option_route.delete('delete',deleteO)
option_route.put('update',updateO)

export default {option_route}