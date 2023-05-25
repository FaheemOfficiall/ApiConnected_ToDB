import userModel from "../model/userModel.js";

//create users
 
const createUser=async(fname,lname,mobileNumber,email,password)=>{
let userDoc=new userModel({
    firstName: fname,
    lastName: lname,
    mobileNumber: mobileNumber,
    email: email,
    password: password
})
try {
    
    await userDoc.save()
    console.log('added succes');
    return "success"
} catch (error) {
    console.log("err adding");
    return "error"
}

}

export  {createUser}