
import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";

//              use of req.params.id
// if you have a route defined as /users/:id, and a request is made to /users/123, req.params.id would give you the value 123.



export const sendMessage=async(req,res)=>{
    try {

        //this is destructuring
    const {message}=req.body;

    // const id=req.params.id;
    //          or
    const {id:receiverId}=req.params;
                             // reciever id is id that is present in url

    // now we can get sender id after setting middleware and extracting data from veryfing jwt token stored in cookie 
    const senderId=req.user._id;

    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] }
        // searching for a conversation document where both senderId and receiverId are participants in the conversation. It's using MongoDB's $all operator to ensure that both IDs are present in the "participants" array field of the document.
    });

    
    if(!conversation){
        conversation= await Conversation.create({
            participants:[senderId,receiverId]
            //no need of message because it set as default 
        })
    }

    //creating a new message
    const newMessage= new Message({
        senderId,
        receiverId,
        message
    })

    if(newMessage){
        conversation.messages.push(newMessage._id)
        //we're pushing the _id property of newMessage into the messages array of the conversation object. 
        //conversation model chema store partcipant id , sender id and messages section store message id
    }

    // await conversation.save()
    // await newMessage.save()
                              //instead of doing this we can run them in parallel
    await Promise.all([conversation.save(),newMessage.save()])

    res.status(201).json(newMessage)
        
    } catch (error) {
        res.status(500).json({error:"Some Error Occured, Internal Server Error"})
    }
}