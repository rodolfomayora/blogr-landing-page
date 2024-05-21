import React, { FC } from 'react';
import Link from 'next/link';

const ProductLinks: FC = () => (
  <>
    <Link href="/overview"><a>Overview</a></Link>
    <Link href="/pricing"><a>Pricing</a></Link>
    <Link href="/marketplace"><a>Marketplace</a></Link>
    <Link href="/features"><a>Features</a></Link>
    <Link href="/integrations"><a>Integrations</a></Link>
  </>
);

export default ProductLinks