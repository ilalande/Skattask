import { useSelector } from 'react-redux';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { IRootState } from '@redux/reducers';
import Image from 'next/image';
import SHeader from './style';
import BurgerMobileMenu from 'Components/BurgerMobileMenu';
export default function Header(): JSX.Element {
  //données récupérées du state, celui ci a été modifié par l'appel à l'action getLoggedUser depuis la page login
  const selectLoggedUser = useSelector(
    (state: IRootState) => state.users.loggedUser
  );
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks((preshowLink) => {
      return !preshowLink;
    });
  };

  return (
    <SHeader>
      <div className='containerGen'>
        <div className='wrapper'>
          <div className='title'>
            <div className='img-container'>
              <Image
                src='/logo.png'
                width={247}
                height={46}
                layout='intrinsic'
                alt='todoList'
              />
            </div>
          </div>

          <div className='button'>
            {selectLoggedUser && <span>{selectLoggedUser.name}</span>}
            <button
              onClick={() =>
                signOut({
                  callbackUrl: 'http://localhost:3000/login',
                })
              }
            >
              sign out
            </button>
          </div>
        </div>
      </div>
      <div className='burgerMenu'>
        <button
          type='button'
          className='burgerButton'
          onClick={handleShowLinks}
        >
          <Image
            src={showLinks ? '/Vector.svg' : '/burger-menu.svg'}
            width={30}
            height={30}
          />
        </button>
        {showLinks && <BurgerMobileMenu />}
      </div>
    </SHeader>
  );
}
