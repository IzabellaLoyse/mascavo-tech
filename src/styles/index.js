import React from 'react';
import { Colors } from './settings/colors';
import { Measures } from './settings/measures';
import { Reset } from './vendor/reset';

export function Configuration() {
  return (
    <>
      <Measures />
      <Colors />
      <Reset />
    </>
  );
}
