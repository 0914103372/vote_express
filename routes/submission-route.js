import express from "express";
import { createS,updateS,getAllSubmissionByOption } from "../controllers/submission-controller.js";
import { checklocked } from "../middleware/checklocked.js";
export const submission_route = express.Router()

submission_route.get("/getallsubmission/:id",getAllSubmissionByOption)
submission_route.post('/createsubmission',checklocked,createS)
submission_route.put('/updatesubmission',updateS)


export default {submission_route}