import  express  from "express";
import {user} from '../controllers/userController.js'

const userRouter=express.Router();


userRouter.post('/createUser',user)

// routers.get("/",get)

// routers.post("/post",post)

// routers.put("/put",put)

// routers.patch("/",(req,res)=>{
//     res.send("hello world");
// })

// routers.delete("/delete",delet)


export default userRouter;