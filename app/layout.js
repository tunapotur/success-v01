import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Success",
  description: "Save all your success in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={``}>
      <head>
        <title>Success</title>
      </head>
      <body className={``}>
        <div className="flex h-screen w-full flex-col items-center justify-center">
          <div className="relative flex h-screen w-full flex-col items-center rounded-lg border-2 border-gray-400/50 sm:h-[53rem] sm:w-[25rem]">
            <main className="w-full overflow-y-auto p-[1rem] pb-[10rem]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
