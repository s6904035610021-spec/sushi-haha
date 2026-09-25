export const metadata = {
  title: 'ระบบสั่งอาหารร้านซูชิ',
  description: 'ระบบสั่งอาหารร้านซูชิ เชื่อมต่อ Supabase',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
