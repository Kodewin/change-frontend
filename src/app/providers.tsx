'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import { WatchProvider } from '@/contexts/WatchCreationContext';
import { ReactNode } from 'react';

const ProvidersWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <AuthProvider>
        <WatchProvider>{children}</WatchProvider>
      </AuthProvider>
    </main>
  );
};

export default ProvidersWrapper;
