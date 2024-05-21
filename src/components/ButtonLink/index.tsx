import type { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

type Props = ComponentProps<typeof Link> & {
  children: ReactNode,
  href: string,
}

export function ButtonLink({ 
  children,
  href,
  className=styles.ButtonLink,
  ...props
}: Props) {
  return (
    <Link href={href} {...props}>
      <a className={className}>
        {children}
      </a>
    </Link>
  );
}