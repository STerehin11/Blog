import { MyHeader } from "@/components/MyHeader";
import "./globals.css";

import { Inter } from "next/font/google";
import { MyFooter } from "@/components/MyFooter";
import { Provider } from "@/components/SessionProviders";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <MyHeader />
          <main className="container">{children}</main>
          <MyFooter />
        </Provider>
      </body>
    </html>
  );
}
