import type { ComponentProps } from 'react';
import { ButtonLink } from '#components/ButtonLink';
import sytles from './styles.module.scss';

type Props = ComponentProps<typeof ButtonLink>;

export function ButtonLinkGradient({ children, ...props }: Props) {
  return (
    <ButtonLink className={sytles.ButtonLinkGradient} {...props}>
      {children}
    </ButtonLink>
  );
}