
import mongoose from "mongoose";


// this is a message schema that will store sender and reciever id and message


const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // This line specifies that the values stored in the senderId field will refer to documents in the "User" collection
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String, 
        required: true
    }
}, {
    timestamps: true // Use timestamps option to automatically add createdAt and updatedAt fields
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
