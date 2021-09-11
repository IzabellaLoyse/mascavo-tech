import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { WrapperAvatar, Channel, Avatar } from './style';

function AvatarMascavo({ photo, channelName }) {
  return (
    <WrapperAvatar>
      <Avatar src={photo} alt={channelName} />
      <Channel>{channelName}</Channel>
    </WrapperAvatar>
  );
}

AvatarMascavo.propTypes = {
  photo: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
};

export default AvatarMascavo;
