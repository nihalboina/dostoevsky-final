import './globals.css';
import ClientProviders from '../components/ClientProviders';

export const metadata = {
  title: 'Dreams and Doubt: A Dostoevsky Scroll',
  description: 'Visual narrative of Dostoevsky\'s themes across three works'
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
