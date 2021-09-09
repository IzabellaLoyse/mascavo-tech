import React from 'react';

// Styles
import { Channel, Avatar, WrapperAvatar} from './style';

export function AvatarMascavo({ photo, channelName }) {
  return (
    <WrapperAvatar>
      <Avatar src={photo} alt={channelName} />
      <Channel>{channelName}</Channel>
    </WrapperAvatar>
  );
}
