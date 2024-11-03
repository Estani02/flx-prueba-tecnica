import type { Metadata } from "next"

import { Roboto } from "next/font/google"

import "./globals.css"
import "antd/dist/reset.css"
import { ReduxProvider } from "./providers"

import Header from "@/components/layout/Header"

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Flexxus - Prueba técnica",
  description: "Prueba técnica para Flexxus",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[#F5F5F5] antialiased`}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
