import styled from 'styled-components';

export const Avatar = styled.img`
  --space: 0.5rem;

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
  --space: 0.5rem;

  position: relative;
  border-radius: 4px;
  border: 4px solid var(--color-frontend);
  width: 25rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 100ms linear;

  &:hover {
    --move: calc(var(--space) * -1);

    transform: translate(var(--move), var(--move));

    & > ${Avatar} {
      transform: translateX(0);
      opacity: 1;
      transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
    }
  }
`;
