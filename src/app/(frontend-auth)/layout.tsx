import React from 'react'
import 'dotenv/config'

const websiteName = process.env.WEBSITE_NAME

export const metadata = {
  description: '',
  title: 'Přihlášení | ' + websiteName,
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
