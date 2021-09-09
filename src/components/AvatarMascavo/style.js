import styled from 'styled-components';

export const WrapperAvatar = styled.figure`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  border: 2px solid var(--color-pixelart);
  margin-right: 0.5rem;
`;

export const Channel = styled.figcaption`
  font-size: 1rem;
  color: var(--color-gray-light);
`;
