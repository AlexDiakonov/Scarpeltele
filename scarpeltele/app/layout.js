import './globals.scss';

export const metadata = {
  title: 'Scarpel: SMS Solutions. Scaled Globally.',
  description:
    'Explore our messaging toolbox: A2P, popular Messengers, RCS, Push notifications, Flashing calls, SS7, SIM Routes, iMessage integration, and Messaging Firewall. Tailor any solution to your needs. Optimize costs with Message Cascades and HLR. Enjoy flexible payment options. Connect with your customers worldwide.',
};

export const revalidate = 800; // revalidate at most every hour

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head></head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
