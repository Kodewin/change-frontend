'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Wrapper;
