import React, { FC, useState, useEffect } from 'react';
import Container from '../Container';
import Modal from '../Modal';
import style from './style.module.scss';
import MenuMobile from '../MenuMobile';

const Header: FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const initialStyle: string = style.Header;
  const scrolledStyle: string = style.Header + ' ' + style.scrolled;
  const [headerStyle, setHeaderStyle] = useState<string>(initialStyle);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  useEffect(() => {

    const intervarWatcher: number = window.setInterval(() => {
      if (isScrolling) {
        setIsScrolling(false);
        
        if (window.pageYOffset === 0) {
          setHeaderStyle(initialStyle);
        }

        if (window.pageYOffset > 0 && initialStyle === headerStyle ) {
          setHeaderStyle(scrolledStyle);
        }
      }
    }, 250);

    window.addEventListener('scroll', () => setIsScrolling(true));

    return () => clearInterval(intervarWatcher);
  }, [isScrolling, headerStyle, initialStyle, scrolledStyle])

  return (
    <>
    <header className={headerStyle}>
      <Container>
        <div className={style.wrapper}>
          <img className={style.logo}
            src="/images/svg/logo.svg"
            alt="Logo"
          />
  
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