import React from 'react';

// Styles
import { FooterText } from './style';
import { LinkMascavo } from '../LinkMascavo/style';

export function FooterTextComponent() {
  return (
    <FooterText>
      Desenvolvido por
      <LinkMascavo href="https://github.com/IzabellaLoyse">
        Izabella Loyse
      </LinkMascavo>
    </FooterText>
  );
}
