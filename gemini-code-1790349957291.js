import Link from 'next/link'

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>🍣 Sushi Order System</h1>
      <p>ยินดีต้อนรับสู่ระบบสั่งอาหารร้านซูชิ (Deployment Success Check)</p>

      <nav style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link 
          href="/generate-qr" 
          style={{ padding: '0.75rem 1.5rem', backgroundColor: '#0070f3', color: 'white', borderRadius: '8px', textDecoration: 'none' }}
        >
          ไปหน้าสร้าง QR Code (/generate-qr)
        </Link>
        <Link 
          href="/kitchen" 
          style={{ padding: '0.75rem 1.5rem', backgroundColor: '#10b981', color: 'white', borderRadius: '8px', textDecoration: 'none' }}
        >
          ไปหน้าห้องครัว (/kitchen)
        </Link>
      </nav>
    </main>
  )
}