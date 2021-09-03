import styled from 'styled-components';

export const Avatar = styled.img`
  position: absolute;
  top: var(--space);
  left: var(--space);
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  border: 2px solid var(--color-frontend);
  transform: translateX(calc((100% + var(--space)) * -1));
  transition: transform 200ms linear, opacity 300ms linear;
  opacity: 0;
`;

export const Thumb = styled.img`
  width: 100%;
`;

export const WrapperThumb = styled.figure`
  position: relative;
  border-radius: var(--global-radius);
  border: var(--global-radius) solid var(--color-frontend);
  width: 25rem;
  height: auto;
  overflow: hidden;
  cursor: pointer;
  transition: transform 100ms linear;

  &:hover {
    transform: translate(var(--move-space), var(--move-space));

    & > ${Avatar} {
      transform: translateX(0);
      opacity: 1;
      transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
    }
  }
`;

export const Background = styled.div`

position: relative;
  background-color: var(--color-frontend);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: calc(var(--effect-space) + var(--global-radius));
    height: calc(var(--effect-space) + var(--global-radius));
    background-color: red;
    transform-origin: right top;
    transition: transform 100ms linear;
  }

  &:hover {
    &::before {
      transform: rotate(45deg);
    }
  }
`;
