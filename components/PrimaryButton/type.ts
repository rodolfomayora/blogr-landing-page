import { ReactNode } from 'react';

type PrimaryButtonProps = {
  children?: ReactNode | string | number,
  buttonStyle?: 'white' | 'transparent' | 'gradient',
  path?: string
}

export default PrimaryButtonProps;