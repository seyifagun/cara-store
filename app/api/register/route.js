import { connectToDB } from "@mongodb/database";
import User from "@models/User";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { writeFile } from "fs/promises"

// USER REGISTRATION

export async function POST(req) {
    try{
        await connectToDB() //initialise connection to db

        const data =  await req.formData()

        // Get info from forms via input elements
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");
        const file = data.get("profileImage");

        if(!file){
            return NextResponse.json({mesage:"No file uploaded"}, {status:400})
        }

        const bytes = await file.arrayBuffer() 
        const buffer = Buffer.from(bytes)

        const profileImagePath=`C:/CMP7246/D2__MERN/d2__ecommerce/public/uploads/${file.name}`
        await writeFile(profileImagePath, buffer)
        console.log(`open ${profileImagePath} to see the uploaded files`)

        // Find an already existing user
        const existingUser = await User.findOne({email})
        if (existingUser) {
            return NextResponse.json({ message:"User already exists!" }, {status:409})
        }

        /* Hash the password */
        const saltRounds = 10
        const hashedPassword = await hash(password, saltRounds)

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            profileImagePath: `uploads/${file.name}`
        })

        // Save new user
        await newUser.save()

        // Return success message
        return NextResponse.json({message:'User registered successfully!'},{user: newUser}, { status:200 })

    } catch(err){
        console.log(err)
        return NextResponse.json({message:"Fail to register new user"}, {status:500})
    }
}

