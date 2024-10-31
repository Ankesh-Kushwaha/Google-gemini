/* eslint-disable react/jsx-key */
import React, { useContext, useState } from "react";
import "./sideBar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  
  const { onSent, previousPrompt, setRecentPrompts } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompts(prompt);
    await onSent(prompt);
   }


  return (
    <div className="sideBar">
      <div className="top">
        <img src={assets.menu_icon} alt="" className="menu"
         onClick={()=>setExtended(prev=>!prev)}
        />
        <div className="newchat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompt.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}...</p>
                </div>
              );
            })}
         
          </div>
        ) : null}

      </div>
      <div className="bottom">
        <div className="bottom_item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p>:null}
        </div>

        <div className="bottom_item recent-entry">
          <img src={assets.history_icon} alt="" />
          { extended ?<p>Activity</p>:null}
        </div>

        <div className="bottom_item recent-entry">
          <img src={assets.setting_icon} alt="" />
          { extended ? <p>Settings</p>:null }
        </div>
      </div>
    </div>
  );
};

export default SideBar;
