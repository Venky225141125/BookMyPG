"use client";

import { Button, Layout, theme } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const { Header } = Layout;

export default function AppHeader() {
  const { token } = theme.useToken();

  return (
    <Header
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 50px',
        background: token.colorBgContainer,
        boxShadow: token.boxShadowTertiary,
      }}
    >
      {/* Logo and Brand */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit', textDecoration: 'none' }}>
        {/* If you have a logo, swap Image below */}
        {/* <Image src="/logo.png" alt="BookMyPG Logo" width={40} height={40} /> */}
        <div style={{ fontWeight: 700, fontSize: 18 }}>BookMyPG</div>
      </Link>

      <div style={{ display: 'flex', gap: 12 }}>
        <Link href="/login">
          <Button type="text">Sign in</Button>
        </Link>
        <Link href="/signup">
          <Button type="primary">Sign up</Button>
        </Link>
      </div>
    </Header>
  );
}
