/** @format */

import './globals.css'
import NavBar from './components/NavBar'
import { SectionAnnouncementBar } from './components/SectionAnnouncementBar'
import { AppContext } from './AppContext'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white">
        <AppContext>
          <SectionAnnouncementBar />
          <NavBar />
          {children}
        </AppContext>
      </body>
    </html>
  )
}
