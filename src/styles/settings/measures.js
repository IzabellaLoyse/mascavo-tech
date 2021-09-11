import { createGlobalStyle } from 'styled-components';

const Measures = createGlobalStyle`
:root {
  --global-radius: 5px;
  --space: 0.5rem;
  --effect-space: 0.3rem;
  --move-space: calc(var(--effect-space) * -1);
}
`;

export default Measures;
