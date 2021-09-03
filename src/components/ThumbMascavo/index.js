import React from 'react';

// Styles
import { Thumb, WrapperThumb, Avatar, Background } from './style';

export  function ThumbMascavo({ src, alt, avatar, channelName }) {
  return (
    <Background>
    <WrapperThumb>
      <Thumb src={src} alt={alt} />
      <Avatar src={avatar} alt={channelName}/>
    </WrapperThumb>
    </Background>
  );
}
