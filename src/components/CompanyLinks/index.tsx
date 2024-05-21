import React, { FC } from 'react';
import Link from 'next/link';

const CompanyLinks: FC = () => (
  <>
    <Link href="/about"><a>About</a></Link>
    <Link href="/team"><a>Team</a></Link>
    <Link href="/blog"><a>Blog</a></Link>
    <Link href="/careers"><a>Careers</a></Link>
  </>
);

export default CompanyLinks