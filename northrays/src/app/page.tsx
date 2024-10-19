'use client'
import Header from './Home/page';
import { useEffect } from 'react';
import AOS from 'aos';
import Portfolio from './Home/Portfolio';
import Academy from './academy/page';
AOS.init();



export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}
