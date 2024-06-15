import hashPassword from "../utils/hashPassword.js";
import { User } from '../models/userModel.js'
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

dotenv.config();

export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, Email, password are required.' });
        }

        const exist = await User.findOne({ email: email })
        console.log(exist);
        if (!exist) {
            const hashedPassword = await hashPassword(password)
            const user = new User({
                name: name,
                email: email,
                password: hashedPassword,

            })
            await user.save()
            const userData = await User.findOne({ email: email })
            const usertoken = jwt.sign({ userId: userData._id },
                process.env.SECRET_KEY_USER,
                { expiresIn: "1h" })
            res.header('usertoken', usertoken);
            res.status(200).json({ message: "Signup successful" });
        } else {
            res.status(409).json({ message: 'User already registered with this email' })
        }

    } catch (error) {
        console.log('Error in signup', error)
        res.status(500).json({ error: "Internal Server Error" });

    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'email and password are required.' });
        }
        
        const exist = await User.findOne({ email: email })
        if (exist) {
            const passCheck = await bcrypt.compare(password, exist.password)
            if (passCheck) {
                const usertoken = jwt.sign({ userId: exist._id },
                    process.env.SECRET_KEY_USER,
                    { expiresIn: "1h" })
                res.header('usertoken', usertoken);
                res.status(200).json({ userData: exist, usertoken, message: `Welome ${exist.name}` });
            } else {
                res.status(401).json({
                    message: "Password is incorrect"
                });
            }
        } else {
            res.status(401).json({
                message: "Email is not verified",
                status: false
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}