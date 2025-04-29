import './globals.css';
import ClientProviders from '../components/ClientProviders';

export const metadata = {
  title: 'Dostoevsky',
  description: 'A character quiz and visual narrative of Dostoevsky\'s themes across three works'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
