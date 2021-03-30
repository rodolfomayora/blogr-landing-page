import React, { FC } from 'react';
import Link from 'next/link';

const ProductLinks: FC = () => (
  <>
    <Link href="/Overview"><a>Overview</a></Link>
    <Link href="/Pricing"><a>Pricing</a></Link>
    <Link href="/Marketplace"><a>Marketplace</a></Link>
    <Link href="/Features"><a>Features</a></Link>
    <Link href="/Integrations"><a>Integrations</a></Link>
  </>
);

export default ProductLinks