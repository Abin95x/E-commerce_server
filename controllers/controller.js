import  hashPassword  from "../utils/hashPassword.js";
import {User} from '../models/userModel.js'

export const signup = async (req,res) => {
    try{
        const {name,email,password} = req.body
        const exist = await User.findOne({ email: email })

        if(!exist){
            const hashedPassword = await hashPassword(password)
            const user = new User({
                name: name,
                email: email,
                password: hashedPassword,
                
            })
            await user.save()

            res.status(200).json({ message: "Signup successful" });
        }else{
            res.status(409).json({message:'Conflict user already registered with this email'})
        }

    }catch(error){
        console.log('Error in signup',error)
        res.status(500).json({ error: "Internal Server Error" });

    }
}