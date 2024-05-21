import React, { FC } from 'react';
import Link from 'next/link';

const ConnectLinks: FC = () => (
  <>
    <Link href="/contact"><a>Contact</a></Link>

    <a href="https://www.google.com/intl/es-419/gmail/about/"
      target="_blank"
      rel="external noopener noreferrer"
    >
      Newsletter
    </a>
    
    <a href="https://www.linkedin.com/"
      target="_blank"
      rel="external noopener noreferrer"
    >
      LinkedIn
    </a>
  </>
);

export default ConnectLinks