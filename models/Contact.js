import {Schema, model, models} from 'mongoose'

const ContactSchema = new Schema({

    firstName: { 
        type: String, 
        required: [true, "First Name is required!"] 
    },
    lastName: { 
        type: String, 
        required: [true, "Last Name is required!"] 
    },
    phoneNumber: { 
        type: String 
    },
    subject: { 
        type: String, 
        required: true 
    },
    emailAddress: { 
        type: String, 
        required: [true, "Email Address is required!"], 
        unique: true 
    },
    message: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },

})

const Contact = models.Contact || model("Contact", ContactSchema)

export default Contact