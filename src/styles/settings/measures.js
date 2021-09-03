import { createGlobalStyle } from 'styled-components';

export const Measures = createGlobalStyle`
:root {
  --global-radius: 4px;
  --space: 0.5rem;
  --effect-space: 1rem;
  --move-space: calc(var(--space) * -1);
}
`;
