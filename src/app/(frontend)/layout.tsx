import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import Link from "next/link";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Офіційний сайт ДАРТ",
  description: "Державне агентство розвитку туризму України",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={cn(oswald.variable, openSans.variable)}>
      <body className="font-sans antialiased text-[#333] bg-white" suppressHydrationWarning>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <footer className="w-full bg-gray-900 py-20 mt-20 text-white font-sans">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-2xl font-oswald uppercase font-black mb-6 tracking-tight">ДАРТ</h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Державне агентство розвитку туризму України є центральним органом виконавчої влади, який реалізує державну політику у сфері туризму та курортів.
              </p>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-blue-400">Корисні посилання</h3>
              <ul className="space-y-4 text-sm font-bold">
                <li><Link href="/orders" className="hover:text-blue-400 transition-colors uppercase tracking-tighter">Нормативна база</Link></li>
                <li><Link href="/vacancies" className="hover:text-blue-400 transition-colors uppercase tracking-tighter">Вакансії</Link></li>
                <li><Link href="/admin" className="hover:text-blue-400 transition-colors uppercase tracking-tighter text-gray-500">Адмін-панель</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase tracking-widest text-xs mb-6 text-blue-400">Контакти</h3>
              <p className="text-sm text-gray-400 font-bold mb-2">вул. Прорізна, 2, м. Київ, 01001</p>
              <p className="text-sm text-gray-500 font-medium">© 2026 ДАРТ. Всі права захищені.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
