import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./global.css"
import Template from "@/lib/zemoga-ui/Template"

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Zemoga UI FE Test",
  description: "A very funny frontend test",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Template>{children}</Template>
      </body>
    </html>
  )
}
