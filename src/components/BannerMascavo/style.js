import styled from 'styled-components';
import { container } from '../../styles/tools/container';
import { TagMascavo } from '../TagMascavo/style';
import { ThumbMascavo } from '../ThumbMascavo/style';
import { TitleMascavo } from '../TitleMascavo/style';

export const Text = styled.div`
  padding-bottom: 8rem;
  max-width: 45%;

  ${TagMascavo} {
    margin-bottom: 2.2rem;
  }

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

  ${ThumbMascavo} {
    transform: translateY(-25%);
  }
`;
