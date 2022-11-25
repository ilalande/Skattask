import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SLogin from './style';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { getLoggedUser } from '@redux/actions/users.action';
import Image from 'next/image';

export default function Login(): JSX.Element {
  const router = useRouter();
  const session = useSession();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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
      setLoading(false);
      router.push('/mytodo');
    } else if (session.status === 'unauthenticated') {
      setLoading(false);
    } else {
      // Si on ne peut pas récupérer le mail dans la session
      toast(
        "Votre email n'est pas récupérable, voyez sur le compte sur lequel vous êtes connecté"
      );
      router.push('/mytodo');
    }
  }, [session, dispatch, router]);

  return (
    <SLogin>
      {loading ? (
        <div className='container '>
          <p>Veuillez patienter ...</p>
        </div>
      ) : (
        <>
          <div className='container '>
            <Image
              src='/logo.svg'
              width={120}
              height={50}
              layout='intrinsic'
              alt='todoList'
              priority
            />
            <div className='login-section'>
              <h1>Login</h1>
              <button
                onClick={() => {
                  signIn('github', {
                    callbackUrl: `${process.env.NEXT_PUBLIC_SERVER}/mytodo`,
                  });
                }}
              >
                <span>Se connecter avec Github</span>
              </button>
              <button
                onClick={() => {
                  signIn('google', {
                    callbackUrl: `${process.env.NEXT_PUBLIC_SERVER}/mytodo`,
                  });
                }}
              >
                <span>Se connecter avec Google</span>
              </button>
            </div>
          </div>
        </>
      )}
    </SLogin>
  );
}
