import { connection } from "../model/database.js";


const createSubmission = async (sub)=>{


    const query = 'insert into `submission`(user_id,option_id) values(?,?)'
    
    const createSubmission = await connection.query(query,[sub.user_id,sub.option_id])
    .catch(err=>{
        console.error('loi create submission',err)
    })

    return createSubmission
}

const getSubmission = async (option_id)=>{
    const query = 'select * from submission where option_id = ?'
    const getSubmission = await connection.query(query,[option_id])
    .then(data=>{
        console.log(data[0])
        return data[0]
    })
    .catch(err=>{
        console.error('loi getSubmisstion',err)
    })
    return getSubmission
}
const update = async (sub,option_id)=>{
    const query = 'update submission set option_id = ? where option_id = ? and user_id = ?'
    const update = await connection.query(query,[option_id,sub.option_id,sub.user_id])
    .then(()=>{
        return 'Update submisstion success'
    })
    .catch(err=>{
        console.error('loi updatesubmisstion',err)
    })

    return update
}
export {update,getSubmission,createSubmission}