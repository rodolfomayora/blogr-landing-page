import React, { FC, useState } from 'react';
import Container from '../Container';
import Modal from '../Modal';
import style from './style.module.scss';

const Header: FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
    <header className={style.Header}>
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
          HOLA
        </Modal>
      )
    }
    </>
  );
}

export default Header;