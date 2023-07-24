import './globals.scss';

// export const metadata = {
//   icons: {
//     icon: './favicon.png',
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Scarpeltele</title>
        {/* <link sizes="any" type="image/png" rel="icon" href="./favicon.png" /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}
