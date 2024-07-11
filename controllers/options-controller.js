import { getOption,createOption,update,deleteOption } from "../service/options-service.js";

export const createO = async (req,res)=>{
    const option = req.body
    await createPoll(option)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        console.error(err)
    })
} 

export const deleteO = async (req,res)=>{
    const option_id = req.body.poll_id
    await deletePoll(option_id)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        console.error(err)
    })
}

export const updateO = async (req,res)=>{
    const option = req.body
    await update(option)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        console.error(err)
    })
}

export const getO = async (req,res)=>{
    const option_id = req.params.id
    await getPoll(option_id)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        console.error(err)
    })
}