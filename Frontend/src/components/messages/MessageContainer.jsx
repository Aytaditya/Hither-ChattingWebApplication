import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';

const MessageContainer = () => {
    const noChatSelected = false;
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {noChatSelected ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* Header */}
                    <div className="bg-slate-500 px-4 py-2 mb-2 font-mono">
                        <span className="label-text"> To: </span>
                        <span className="text-gray-900 font-bold">Aditya Aryan</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2 font-mono">
                <p>Welcome to Hither 😉, Aditya Aryan</p>
                <p>Happy chatting! 🚀</p>
                <i class="fa-regular fa-message fa-3x"></i>
            </div>
        </div>
    );
};

export default MessageContainer;
