import './globals.css';

export const metadata = {
  title: 'Hamad Ur Rehman — SQA Engineer',
  description: 'Professional QA Engineer portfolio built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
