import React from 'react';
import PropTypes from 'prop-types';

// Components
import AvatarMascavo from '../AvatarMascavo';

// Styles
import { Thumb, WrapperThumb, Background, Title, Time } from './style';

function ThumbMascavo({ src, alt, avatar, channelName, title, time }) {
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

ThumbMascavo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default ThumbMascavo;
