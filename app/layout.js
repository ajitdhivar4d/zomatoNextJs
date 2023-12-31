import Navbar from "@/components/navbar/Navbar"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/footer/Footer"
import styles from "../components/styleMixinComponents/RootLayout.module.scss"
import { ReduxProvider } from "@/redux/Provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "zomato",
  description: "Generated by zomato",
  icons: { icon: ["/favicon.ico"] },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.lgContainer}>
          <div className={styles.justifyCenter}>
            <ReduxProvider>
              <Navbar />
              {children}
              <Footer />
            </ReduxProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
