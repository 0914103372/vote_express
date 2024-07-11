import {update,getSubmission,createSubmission} from '../service/submission-service.js'

export const createS = async (req,res)=>{
    const submission = req.body
    await createSubmission(submission)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        console.error(err)
    })
} 

export const updateS = async (req,res)=>{
    const sub = req.body.Submission
    const option_id = req.body.option_id
    await update(sub,option_id)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        console.error(err)
    })
}

export const getAllSubmissionByOption = async (req,res)=>{
    const option_id = req.params.id
    await getSubmission(option_id)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        console.error(err)
    })
}