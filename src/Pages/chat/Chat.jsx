import React from "react";

const Chat = () => {
  return (
    <section>
      <div>
        <p className="relative border mt-1 " />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 max-w-7xl mx-auto mt-20 ">
          <div>
            <div className="bg-[#9ebfdd] px-6 py-10">
              <p className="font-sans text-3xl text-white pt-2 font-semibold">
                chat list
              </p>
            </div>
          </div>
          {/* message list start */}
          <div className="lg:col-span-3">
            <div>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="chat-header">
                  Obi-Wan Kenobi
                  <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="chat-header">
                  Anakin
                  <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble">I hate you!</div>
                <div className="chat-footer opacity-50">Seen at 12:46</div>
              </div>
            </div>

            <div className="flex gap-2 my-2 mx-2">
              <input type="text" className="w-full border-2 px-2" />
              <button className="text-black border py-2 px-4">sent</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
