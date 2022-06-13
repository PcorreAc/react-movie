import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import ReactPlayer from "react-player";

import "./ModalVideo.scss";

function ModalVideo(props) {
  const { videoKey, videoPlatform, isOpen, close, afterClose } = props;
  const [urlVideo, setUrlVideo] = useState(null);

  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`);
        break;
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`);
        break;
      default:
        break;
    }
    /*   
  Por resolver
  return () => {
      const remover = document.querySelector("style[rc-util-key]");
      remover.parentElement.removeChild(remover);
    }; */
  }, [videoKey, videoPlatform]);

  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close}
      destroyOnClose={true}
      afterClose={afterClose}
      footer={false}
    >
      <ReactPlayer url={urlVideo} controls />
    </Modal>
  );
}

export default ModalVideo;
