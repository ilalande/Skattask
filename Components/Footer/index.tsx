import SFooter from './style';
import Link from 'next/link';
export default function Footer(): JSX.Element {
  return (
    <SFooter>
      <div>
        <div className='mainFooter'>
          <Link href='/about'>
            <a href='/about'>A propos</a>
          </Link>
        </div>
      </div>
    </SFooter>
  );
}
