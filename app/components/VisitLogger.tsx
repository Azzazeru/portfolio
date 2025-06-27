"use client";

import { useEffect, useState } from 'react';

export default function VisitIncrementer() {
  const [incremented, setIncremented] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (incremented) return;
      fetch('https://countapi.mileshilliard.com/api/v1/hit/azzazeru-portfolio-deploy-visits').catch(() => { });
      setIncremented(true);
      window.removeEventListener('scroll', handleScroll);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [incremented]);

  return null
}
