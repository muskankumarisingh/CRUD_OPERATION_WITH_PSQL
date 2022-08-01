const query = require("../queries/user")
const jwt = require('jsonwebtoken');

const createUserDetails = async function(req,res){
    try{
        const body = req.body;
        const obj1 = {
            USER_ID:body.USER_ID,
            USERNAME:body.USERNAME,
            CONTACT_NUMBER:body.CONTACT_NUMBER,
            PASSWORD:body.PASSWORD,
        }
        let accessToken = jwt.sign({obj1},"access",{expiresIn:'50s'});
        res.send(accessToken)
        const data = await query.createUserDetail(obj1);
        res.send({status:200})
        return res.send(data);
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}

const getAllUserDetails =async function(req,res){
    try{
        const result = await query.getAllUserDetail();
        return res.send(result);
    }
    catch(err){
        res.send(err)
    }
}

const loginUser = async(req, res) => {
    try{
        const currentUser = await query.getUserByUserName(req.body);
        if (currentUser){
            let accessToken = jwt.sign({currentUser},"access",{expiresIn:'50s'});
            return res.send(accessToken)
        }else{
            res.send("error in login")
        }
    }catch(err){
        console.log(err)
        res.send(err)
    }
}


const updateUserDetails = async function(req,res){
    try{
        let name = "kanchan"
        let already = "golu"
        const data = await query.updateUserDetail(name,already);
        return res.send(data);
    }
    catch(err){
        console.log(err)
        res.send(err)
    }
}


const deleteAllUserDetails =  async function(req,res){
    try{
        const data = await query.deleteAllUserDetail();
        return res.statusCode(200).send(data);
    }
    catch(err){
        res.send(err)
    }
}

const deleteSingleUserDetails = async function(req,res){
    try{
        const result = await query.deleteSingleUserDetail();
        return res.statusCode(200).send(result);
    }
    catch(err){
        res.send(err)
    }
}


module.exports={
    createUserDetails,
    getAllUserDetails,
    loginUser,
    updateUserDetails,
    deleteAllUserDetails,
    deleteSingleUserDetails,

}






