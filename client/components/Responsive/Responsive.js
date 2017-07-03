import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
  xsmall: 480,
  small: 768,
  medium: 1024,
  large: 1200,
});

export const DownXsmall = layout.isAtMost('xsmall');
export const DownSmall = layout.isAtMost('small');
export const DownMedium = layout.isAtMost('medium');
export const DownLarge = layout.isAtMost('large');

export const UpXsmall = layout.isAtLeast('xsmall');
export const UpSmall = layout.isAtLeast('small');
export const UpMedium = layout.isAtLeast('medium');
export const UpLarge = layout.isAtLeast('large');
