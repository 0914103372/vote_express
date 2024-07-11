import { query } from "express";
import { connection } from "../model/database.js";

const getPollbyOption = async ()=>{
    async (option_id)=>{
        const query = 'select p.isLocked from options as o join polls as p on p.poll_id = o.poll_id where o.option_id = ?'
        const getpoll = await connection.query(query,[option_id])
        .then(data=>{
            console.log(data[0])
            return data[0]
        })
        .catch(err=>{
            console.error('loi getPoll',err)
        })
        return getpoll
    }
}
const createPoll = async (poll)=>{
    var date = new Date();
    date = date.getFullYear() + '-' +
    ('00' + (date.getMonth()+1)).slice(-2) + '-' +
    ('00' + date.getDate()).slice(-2) + ' ' + 
    ('00' + date.getHours()).slice(-2) + ':' + 
    ('00' + date.getMinutes()).slice(-2) + ':' + 
    ('00' + date.getSeconds()).slice(-2);
    poll.createdAt = date
    const query = 'insert into `polls`(title,user_id,createdAt,isLocked) values(?,?,?,?)'
    
    const createpoll = await connection.query(query,[poll.title,poll.user_id,poll.createdAt,poll.isLocked])
    .catch(err=>{
        console.error('loi createpoll',err)
    })

    return createpoll
}

const getPoll = async (poll_id)=>{
    const query = 'select * from polls where poll_id = ?'
    const getpoll = await connection.query(query,[poll_id])
    .then(data=>{
        console.log(data[0])
        return data[0]
    })
    .catch(err=>{
        console.error('loi getPoll',err)
    })
    return getpoll
}
const update = async (poll)=>{
    const query = 'update polls set title = ?,isLocked = ? where poll_id = ?'
    const update = await connection.query(query,[poll.title,poll.isLocked,poll.poll_id])
    .then(()=>{
        return 'Update poll success'    
    })
    .catch(err=>{
        console.error('loi updatePoll',err)
    })

    return update
}

const deletePoll = async (poll_id)=>{
    const query = 'delete from polls where poll_id = ?'
    const deletepoll = await connection.query(query,[poll_id])
    .then(()=>{
        return 'Delete poll success'
    })
    .catch(err=>{
        console.error('loi deletePoll',err)
    })
}
// const poll = {
//     title :'testvip',
//     user_id:1,
//     createdAt:date,
//     isLocked: 1
// }

export {update,createPoll,getPoll,deletePoll,getPollbyOption}