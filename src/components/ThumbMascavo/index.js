import React from 'react';

// Components
import { AvatarMascavo } from '../AvatarMascavo';

// Styles
import { Thumb, WrapperThumb, Background, Title } from './style';

export function ThumbMascavo({ src, alt, avatar, channelName, title }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarMascavo photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
      </WrapperThumb>
    </Background>
  );
}
