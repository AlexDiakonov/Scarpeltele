import './globals.scss';

export const metadata = {
  title: 'Scarpel: Score Scalable SMS. Worldwide.',
  description:
    "Aim customer trust with Scarpel: boost your marketing, secure your communication from fraud, enhance your users' account security.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
