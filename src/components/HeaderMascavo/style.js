import styled from 'styled-components';
import { container } from '../../styles/tools/container';
import { ButtonMascavo } from '../ButtonMascavo/style';
import LogoMascavo from '../LogoMascavo';

export const HeaderMascavo = styled.header`
  padding-top: 2rem;
  padding-bottom: 1rem;
  background-color: var(--color-black-dark);
  border-bottom: 4px solid var(--color-primary-medium);

  @media (max-width: 50em) {
    padding: 0.93rem 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${container};

  @media (max-width: 50em) {
    justify-content: center;

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
