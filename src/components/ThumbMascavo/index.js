import React from 'react';

// Styles
import { Thumb, WrapperThumb, Avatar } from './style';

export  function ThumbMascavo({ src, alt, avatar, channelName }) {
  return (
    <WrapperThumb>
      <Thumb src={src} alt={alt} />
      <Avatar src={avatar} alt={channelName}/>
    </WrapperThumb>
  );
}
