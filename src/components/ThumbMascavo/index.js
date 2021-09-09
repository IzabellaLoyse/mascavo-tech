import React from 'react';

// Components
import { AvatarMascavo } from '../AvatarMascavo';

// Styles
import { Thumb, WrapperThumb, Background } from './style';

export function ThumbMascavo({ src, alt, avatar, channelName }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarMascavo photo={avatar} channelName={channelName} />
      </WrapperThumb>
    </Background>
  );
}
