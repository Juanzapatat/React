"use client"; // 👈 obligatorio en componentes con hooks

import React from 'react';
import ComponentOne from './components/ComponentOne';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/auth/login'); // 👈 Esto va a /app/auth/login/page.tsx
  };

  return (
    <div>
      <h1>Mi primer pagina react</h1>
      <ComponentOne />
      <button onClick={handleLoginClick}>Ir a Login</button>
    </div>
  );
}