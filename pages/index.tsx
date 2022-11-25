import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import Header from '../Components/Header/index';
export default function Home(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      router.push('/login');
    } else if (session.status === 'loading') {
      setLoading(true);
    } else if (session.status === 'authenticated') {
      setLoading(false);
      router.push('/mytodo');
    }
  }, [session, router]);

  return (
    <div>
      <Header />
      <div>
        {/* {loading && ( */}
        <div className='message'>
          <p>Veuillez patienter...</p>
        </div>
        {/* )} */}
      </div>
    </div>
  );
}
