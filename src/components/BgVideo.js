import React from "react";
import BGV  from "../assets/BGV.mp4"

const BgVideo = () => {
    window.onload = function() {
        document.getElementById("video").play();
        document.querySelector('video').playbackRate = 2;
    }
    return (
     <div className="main overlay">
            <video id="video" src={BGV} muted autoPlay loop controls />
     </div>
    )
  }
  
  export default BgVideo ;