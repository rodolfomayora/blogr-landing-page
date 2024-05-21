import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '../Container';
import Modal from '../Modal';
import style from './style.module.scss';
import MenuMobile from '../MenuMobile';
import MenuDesktop from '../MenuDesktop';

const Header: FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [headerStyle, setHeaderStyle] = useState<string>(style.Header);
  useEffect(() => {
    const initialStyle: string = style.Header;
    const scrolledStyle: string = style.Header + ' ' + style.scrolled;
    let isScrolling: boolean = false;
    let isInTop: boolean = true;

    const intervarWatcher: number = window.setInterval(() => {

      const scrollOffSet: number = window.pageYOffset;

      if (scrollOffSet === 0) {
        isInTop = true;
        setHeaderStyle(initialStyle);
      }

      if (isScrolling) {
        isScrolling = false;

        if (scrollOffSet > 0 && isInTop ) {
          isInTop = false;
          setHeaderStyle(scrolledStyle);
        }
      }
    }, 200);

    const setScrollTrue = (): void => {
      isScrolling = true;
    }

    window.addEventListener('scroll', setScrollTrue);

    return () => {
      clearInterval(intervarWatcher);
      window.removeEventListener('scroll', setScrollTrue); 
    }
  },
  [])

  return (
    <>
    <header className={headerStyle}>
      <Container>
        <div className={style.wrapper}>
          <Link href="/">
            <a className={style.logoWrapper}>
              <img className={style.logo}
                src="/images/svg/logo.svg"
                alt="Logo"
              />
            </a>
          </Link>

          <MenuDesktop />
  
          <div className={style.menuButton}
            onClick={() => setIsMenuOpen(crr => !crr)}
          >
          {
            isMenuOpen ? (
              <img src="/images/svg/icon-close.svg" alt="open menu" />
            ) : (
              <img src="/images/svg/icon-hamburger.svg" alt="close menu" />
            )
          }
          </div>
        </div>
      </Container>
    </header>
    {
      isMenuOpen && (
        <Modal>
          <MenuMobile />
        </Modal>
      )
    }
    </>
  );
}

export default Header;