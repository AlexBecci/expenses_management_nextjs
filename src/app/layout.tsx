import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//importamos los componentes 
import { AuthProvider } from "./lib/auth";
import ProtectedRoute from "./lib/ProtectedRoute";
import { Bounce, ToastContainer } from "react-toastify";
/* import i18n from "./lib/i18n";
import { I18nextProvider } from "react-i18next"; */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //definir las rutas excluidas de a autenticacion(login,register)
  const excludedRoutes = ['/login', '/register']

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*    <I18nextProvider i18n={i18n}> */}
        <ToastContainer theme="dark" transition={Bounce} />
        <AuthProvider>
          {/* Protege las rutas con ProtectedRoute */}
          <ProtectedRoute excludedRoutes={excludedRoutes}>{children}</ProtectedRoute>
        </AuthProvider>
        {/*  </I18nextProvider> */}
      </body>
    </html>
  );
}
