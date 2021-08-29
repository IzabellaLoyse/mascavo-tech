import styled from 'styled-components';
import { ButtonMascavo } from '../ButtonMascavo/style';
import LogoMascavo from '../LogoMascavo';

export const HeaderMascavo = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.87rem 2.5rem;
  background-color: var(--color-black-dark);
  border-bottom: 4px solid var(--color-primary-medium);

  @media (max-width: 50em) {
    justify-content: center;
    padding: 0.93rem 1rem;

    & > ${LogoMascavo} {
      height: 2.187rem;
    }

    & > ${ButtonMascavo} {
      background-color: var(--color-primary-medium);
      border-radius: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
    }
  }
`;
