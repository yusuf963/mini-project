import './styles.home.css';
import { Fragment } from 'react';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import PlatformLinks from '../../features/PlatformLinks';

export const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <PlatformLinks />
      </main>
      <Footer />
    </Fragment>
  );
};