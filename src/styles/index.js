import React from 'react';
import { Colors } from './settings/colors';
import { Reset } from './vendor/reset';

export function Configuration() {
  return (
    <>
      <Colors />
      <Reset />
    </>
  );
}
