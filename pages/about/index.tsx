import Footer from 'Components/Footer';
import Image from 'next/image';
import SAbout from './style';
import Link from 'next/link';
export default function About(): JSX.Element {
  return (
    <SAbout>
      <div className='central'>
        <div className='container '>
          <Link href='/'>
            <a href='/'>
              <Image
                src='/logo.png'
                width={247}
                height={46}
                layout='intrinsic'
                alt='todoList'
                priority
                className=''
              />
            </a>
          </Link>
          <div className='section'>
            <h1>A propos</h1>
            <p>
              Ce site a été développé par Juliane Casier durant son stage à
              l'agence User-Agency.{' '}
            </p>
            <p>
              Il a été créé et amélioré afin de préparer le passage de titre de
              titre professionnel de développeur.se web et web mobile.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </SAbout>
  );
}
