import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const ChatMessage = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="/public/avatar.png" alt="" />
          <div className="text-white font-primary">
            <span className="text-lg font-semibold">Abdullah Abir</span>
            <p>Everything is possible </p>
          </div>
        </div>
        <div className="icons">
          <img src="/public/phone.png" alt="" />
          <img src="/public/video.png" alt="" />
          <img src="/public/info.png" alt="" />
        </div>
      </div>
      <div className="center  font-medium  font-secondary">
        <div className="message  ">
          <img src="/public/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              quod!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message Own">
          <img src="/public/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              quod!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="/public/avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              quod!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message Own">
          <img src="/public/avatar.png" alt="" />
          <div className="texts">
            <img src="/public/dure.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              quod!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="/public/img.png" alt="" />
          <img src="/public/camera.png" alt="" />
          <img src="/public/mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type a message...."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            onClick={() => setOpen((prev) => !prev)}
            src="/public/emoji.png"
            alt=""
          />
          <EmojiPicker open={open} onEmojiClick={handleEmoji} />
        </div>
        <button className="senButton">Send</button>
      </div>
    </div>
  );
};

export default ChatMessage;
