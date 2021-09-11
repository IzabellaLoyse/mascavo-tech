import styled from 'styled-components';
import container from '../../styles/tools/container';
import TagMascavo from '../TagMascavo/style';
import TitleMascavo from '../TitleMascavo/style';

export const Text = styled.div`
  max-width: 45%;

  ${TagMascavo},
  ${TitleMascavo} {
    margin-bottom: 2rem;
  }
`;

export const BannerMascavo = styled.section`
  ${container};
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 70vh;
  height: 100vh;
  margin-top: 2rem;
`;
