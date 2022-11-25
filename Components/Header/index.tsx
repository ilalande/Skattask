import { useSelector } from 'react-redux';
import { signOut } from 'next-auth/react';
import { IRootState } from '@redux/reducers';
import Image from 'next/image';
import SHeader from './style';

export default function Header(): JSX.Element {
  //données récupérées du state, celui ci a été modifié par l'appel à l'action getLoggedUser depuis la page login
  const selectLoggedUser = useSelector(
    (state: IRootState) => state.users.loggedUser
  );

  return (
    <SHeader>
      <div className='containerGen'>
        <div className='title'>
          <Image
            src='/logo.png'
            width={120}
            height={50}
            layout='intrinsic'
            alt='todoList'
          />
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
    </SHeader>
  );
}
