import { Inter } from "next/font/google";
import "@/src/css/globals.css";
import { UserContextProvider } from "./dashboard/login/authorization/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  );
}
