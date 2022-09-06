import { SET_ALIGNEMENT } from './types';

export const ColumnX = {
  center: 'items-center',
  left: 'items-start',
  right: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};
export const RowY = {
  center: 'items-center',
  left: 'items-start',
  right: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

export const RowX = {
  center: 'justify-center',
  left: 'justify-start',
  right: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
  stretch: 'justify-stretch',
};

export const ColumnY = {
  center: 'justify-center',
  left: 'justify-start',
  right: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
  stretch: 'justify-stretch',
};

// todo: rework on this
export const setAlignement = ({
  positionX,
  positionY,
  variant,
}: SET_ALIGNEMENT) => {
  let posX = '';
  let posY = '';
  if (variant === 'col') {
    // @ts-ignore
    posY = ColumnY[positionY] || 'justify-start';
    // @ts-ignore
    posX = ColumnX[positionX] || 'items-start';
  } else if (variant === 'row') {
    // @ts-ignore
    posY = RowY[positionY] || 'items-start';
    posX = RowX[positionX] || 'justify-start';
  }
  return `${posX} ${posY}`;
};
