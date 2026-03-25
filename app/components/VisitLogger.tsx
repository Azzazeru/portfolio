"use client";

import { useEffect, useRef } from 'react';

export default function VisitLogger() {
  const hasIncremented = useRef(false);

  useEffect(() => {
    function handleScroll() {
      if (hasIncremented.current) return;
      fetch('https://countapi.mileshilliard.com/api/v1/hit/azzazeru-portfolio-deploy-visits').catch(() => { });
      hasIncremented.current = true;
      window.removeEventListener('scroll', handleScroll);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}
