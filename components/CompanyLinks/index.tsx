import React, { FC } from 'react';
import Link from 'next/link';

const CompanyLinks: FC = () => (
  <>
    <Link href="/About"><a>About</a></Link>
    <Link href="/Team"><a>Team</a></Link>
    <Link href="/Blog"><a>Blog</a></Link>
    <Link href="/Careers"><a>Careers</a></Link>
  </>
);

export default CompanyLinks