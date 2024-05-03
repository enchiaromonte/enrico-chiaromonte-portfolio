import Link from "next/link";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {

  const router = useRouter();
  const [ pageClass, setPageClass ] = useState('');
  const [ labelText, setLabelText ] = useState('');
  const [ linkUrl, setLinkUrl ] = useState('');

  useEffect( () => {

    // Set Dark or Light Navbar
    const targetPages = ['/contatti' , '/works' ];
    const className = targetPages.includes( router.pathname ) ? 'navbar-light' : 'navbar-dark';
    setPageClass(className);

  }, [ router.pathname ] );

  useEffect( () => {

    // Set initial label text based on the current route
    setLinkUrl( router.pathname === '/' ? 'mailto:me@enricochiaromonte.it' : '/' );
    setLabelText( getLabelText( router.pathname ));

    // Set Label Based on Current page
    const handleRouteChange = ( url ) => {

      setLinkUrl( url === '/' ? 'mailto:me@enricochiaromonte.it' : '/' );

      setTimeout(() => {
        setLabelText( getLabelText( url ) );
      }, 500);

    };
    
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };

  }, [] );
  
  // Function to get label text based on the URL
  const getLabelText = ( url ) => {

    if ( url === '/' ) {
      setLinkUrl('mailto:me@enricochiaromonte.it');
      return 'EMAIL';
    } else if ( url.startsWith( '/work/' ) ) {
      setLinkUrl('/works');
      return 'WORKS';
    } else {
      setLinkUrl('/');
      return 'HOME';
    }

  };

  return (
    <nav className={ pageClass + " navbar"} >
      <div className="navbar-item navbar-item-page">
          <Link href={ linkUrl }>
            { labelText }
          </Link>
      </div>
      <div className="navbar-item navbar-item-copyright">
        <div>
          &copy; 2024.
        </div>
      </div> 
    </nav>
  )
}
