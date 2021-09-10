import React from 'react';

// Components
import { AvatarMascavo } from '../AvatarMascavo';

// Styles
import { Thumb, WrapperThumb, Background, Title, Time } from './style';

export function ThumbMascavo({ src, alt, avatar, channelName, title, time }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarMascavo photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
        <Time>{time}</Time>
      </WrapperThumb>
    </Background>
  );
}
