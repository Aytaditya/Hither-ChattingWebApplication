import React from 'react';

const MessageInput = () => {
 

  return (
    <>
    

      <form className="px-3 my-3">
        <div className="w-full relative">
          <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-600 text-white" placeholder='Send a Message' />
          <button className="absolute inset-y-0 end-0 flex items-center pe-3"><i className="fa-solid fa-paper-plane fa-inverse"></i></button>
        </div>
      </form>
    </>
  );
};

const noChatSelected=()=>{
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2">
                    <p>Welcome Aditya Aryan 😉,</p>
                    <p>Select a chat to start messaging</p>
                    <i class="fa-solid fa-message"></i>
            </div>
        </div>
    )
}

export default MessageInput;
