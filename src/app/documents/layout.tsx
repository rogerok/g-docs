import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <main className="flex h-screen flex-col pt-4">{children}</main>;
}
