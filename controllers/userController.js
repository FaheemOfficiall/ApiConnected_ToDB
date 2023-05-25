import { createUser } from "../services/userServices.js";
import bcrypt from 'bcrypt'

const user = async (req, res) => {
    let { firstName, lastName, mobileNumber, email, password } = req.body;
    let pass=bcrypt.hashSync(password,10)
    let status = await createUser(firstName, lastName, mobileNumber, email, pass)
    try {
if (status=="success") {
    res.send("user created succes")
} else {
    res.send("user not created succes")
    
}
    } catch (error) {
console.log('err in controllers');
    }

}


export {user}










































// // import routers from "../router/userRouters";
// import { createUser } from "../services/userServices.js";

// const get =(req,res)=>{
//     res.send("hello world");
// };

// const post=(req,res)=>{
//     res.send("hello world");
// }

// const put=(req,res)=>{
//     res.send("hello world");
// }

// const delet=(req,res)=>{
//     res.send("hello world");
// }

// export {get,post,put,delet}