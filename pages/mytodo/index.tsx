import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { IRootState } from '@redux/reducers';
import { getLoggedUser } from '@redux/actions/users.action';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import SMyTodo from './style';
import Header from '../../Components/Header/index';
import Main from '../../Components/Main';
import SideBar from '../../Components/SideBar';
import Footer from 'Components/Footer';

export default function MyTodo(): JSX.Element {
  const router = useRouter();
  const session = useSession();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const selectLoggedUser = useSelector(
    (state: IRootState) => state.users.loggedUser
  );

  useEffect(() => {
    if (
      session.status === 'loading' &&
      session !== undefined &&
      session !== null
    ) {
      setLoading(true);
    } else if (
      session.status === 'authenticated' &&
      session !== undefined &&
      session !== null
    ) {
      if (
        session.data.user?.email !== null &&
        session.data.user?.email !== undefined
      ) {
        //C'est l'action qui permet de récupérer les données du user connecté et de le mettre dans le redux state grâce à une saga
        dispatch(getLoggedUser(session.data.user.email));
        setLoading(false);
      } else {
        // Si on ne peut pas récupérer le mail dans la session
        toast(
          "Votre email n'est pas récupérable, voyez sur le compte sur lequel vous êtes connecté"
        );
      }
    } else if (session.status === 'unauthenticated') {
      setLoading(false);
      router.push('login');
    }
  }, [session, dispatch, router]);

  // If no session exists, display access denied message
  if (!session.data) {
    return (
      <SMyTodo>
        <Header />

        <div className='message'>
          <p>
            Vous n&apos;avez pas le droit d&apos;accéder à cette page, veuillez
            <Link href='/login'> vous authentifier</Link>
          </p>
        </div>
      </SMyTodo>
    );
  }

  // If session exists, display content
  else if (loading) {
    return (
      <SMyTodo>
        <Header />
        <div className='message'>
          <p>En cours de chargement, veuillez patienter</p>
        </div>
      </SMyTodo>
    );
  }

  // If session exists, display content
  else {
    return (
      <SMyTodo>
        <Header />
        <div className='central'>
          <SideBar />
          <Main />
        </div>
        <Footer />
      </SMyTodo>
    );
  }
}
