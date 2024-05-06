import { connectToDB } from "@mongodb/database";
import Contact from "@models/Contact";
import { NextResponse } from "next/server";

// USER REGISTRATION

export async function POST(req) {
    try{
        await connectToDB() //initialise connection to db

        const data =  await req.formData()

        // Get info from forms via input elements
        const firstName = data.get("firstName");
        const lastName = data.get("lastName");
        const emailAddress = data.get("emailAddress");
        const subject = data.get("subject");
        const message = data.get("message");
        const phoneNumber = data.get("phoneNumber");

        // Create new user
        const newContact = new Contact({
            firstName,
            lastName,
            phoneNumber,
            emailAddress,
            subject,
            message
        })

        // Save new user
        await newContact.save()

        // Return success message
        return NextResponse.json({message:'Message sent successfully!'},{contact: newContact}, { status:200 })

    } catch(err){
        console.log(err)
        return NextResponse.json({message:"Fail to send message"}, {status:500})
    }
}

