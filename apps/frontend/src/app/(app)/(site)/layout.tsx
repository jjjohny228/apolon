'use client';

import { LayoutComponent } from '@gitroom/frontend/components/new-layout/layout.component';
import { usePathname } from 'next/navigation';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // For home page (/), don't use the authenticated layout
  // This allows the home page to be accessible without authentication
  if (pathname === '/') {
    return <>{children}</>;
  }
  
  return <LayoutComponent>{children}</LayoutComponent>;
}
