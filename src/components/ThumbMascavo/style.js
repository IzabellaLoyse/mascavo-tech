import styled from 'styled-components';
import { WrapperAvatar } from '../AvatarMascavo/style';

export const Time = styled.span`
  position: absolute;
  right: var(--space);
  bottom: var(--space);
  font-size: 0.8rem;
  background-color: var(--color-black-medium);
  color: var(--color-gray-light);
  padding: 0.2rem 0.2rem;
`;

export const Title = styled.figcaption`
  position: absolute;
  left: var(--space);
  bottom: var(--space);
  font-size: 1rem;
  color: var(--color-gray-light);
  font-weight: 300;
  background-color: var(--color-black-medium);
  padding: 0.4rem 0.4rem;
  transform: translateX(calc((100% + var(--space)) * -1));
  opacity: 0;
  transition: transform 200ms linear, opacity 100ms linear;
`;

export const Thumb = styled.img`
  width: 100%;
  transition: filter 100ms linear;
`;

export const WrapperThumb = styled.figure`
  position: relative;
  border-radius: var(--global-radius);
  border: var(--global-radius) solid var(--color-pixelart);
  width: 26rem;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  cursor: pointer;
  transition: transform 100ms linear;

  & > ${WrapperAvatar} {
    margin-right: 1rem;
    position: absolute;
    top: var(--space);
    left: var(--space);
    transform: translateX(calc((100% + var(--space)) * -1));
    transition: transform 200ms linear, opacity 300ms linear;
    opacity: 0;
  }
`;

export const Background = styled.div`
  position: relative;
  background-color: var(--color-pixelart);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: calc(var(--effect-space) * 1.6);
    height: calc(var(--effect-space) * 1.6);
    background-color: var(--color-pixelart);
    transition: transform 100ms linear;
  }

  &::before {
    top: 0;
    right: 0;
    transform-origin: right top;
    transform: rotate(45deg) scale(0);
  }

  &::after {
    bottom: 0;
    left: 0;
    transform-origin: left bottom;
    z-index: -1;
    transform: rotate(-45deg) scale(0);
  }

  &:hover {
    &::before {
      transform: rotate(45deg) scale(1);
    }

    &::after {
      transform: rotate(-45deg) scale(1);
    }

    & > ${WrapperThumb} {
      transform: translate(var(--move-space), var(--move-space));

      & > ${Thumb} {
        filter: brightness(0.6);
      }

      & > ${WrapperAvatar} {
        transform: translateX(0);
        opacity: 1;
        transition: transform 300ms 200ms linear, opacity 300ms 200ms linear;
      }

      & > ${Title} {
        transform: translateX(0);
        opacity: 1;
        transition: transform 300ms 200ms linear, opacity 300ms 200ms linear;
      }
    }
  }
`;
