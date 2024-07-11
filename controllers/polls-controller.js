import {update,createPoll,getPoll,deletePoll} from '../service/polls-service.js'

export const createP = async (req,res)=>{
    const poll = req.body
    await createPoll(poll)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        console.error(err)
    })
} 

export const deleteP = async (req,res)=>{
    const poll_id = req.body.poll_id
    await deletePoll(poll_id)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        console.error(err)
    })
}

export const updateP = async (req,res)=>{
    const poll = req.body
    await update(poll)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        console.error(err)
    })
}

export const getP = async (req,res)=>{
    const poll_id = req.params.id
    await getPoll(poll_id)
    .then(()=>{
        res.status(200).json({message:'success'})
    })
    .catch(err=>{
        console.error(err)
    })
}