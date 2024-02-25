import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'
import Player from '@/components/Player'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Spotify Clone',
}

export const revalidate = 0

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const songs = await getSongsByUserId()

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={songs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
