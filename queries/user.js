const db = require("../models");

const createUserDetail = async(obj1) => {
    return await db.User_Details.create(obj1);
}


const getAllUserDetail = async()=>{
    return await db.User_Details.findAll();
}


const getUserByUserName = async(contactNumber)=>{
    const data = await db.User_Details.findOne({where:{USERNAME:contactNumber.USERNAME}})
    return data
}

const updateUserDetail = async(name,already)=>{
    let res = await db.User_Details.update({ 
        USERNAME: name}, 
    {
        where: { USERNAME: already }
    });

    return res ? res.dataValues : res
}


const deleteAllUserDetail = async()=>{
    return await db.User_Details.destroy({
        truncate: true
    });
}


const deleteSingleUserDetail = async()=>{
    const result = await db.User_Details.destroy({where: {USERNAME: "muskan"}})
    return result
}



module.exports={
    createUserDetail,
    getAllUserDetail,
    getUserByUserName,
    updateUserDetail,
    deleteAllUserDetail,
    deleteSingleUserDetail,
};



