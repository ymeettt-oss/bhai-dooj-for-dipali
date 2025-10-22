
import Link from 'next/link';

export default function Wishes() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>💌 Bhai’s Wishes for Dipali 💌</h1>
      <p>Happy Bhai Dooj Baccha! You are the best sister ever 💖</p>
      <p>Love you always 😘</p>
      <div style={{ marginTop: '20px' }}>
        <Link href="/" legacyBehavior><a>🏠 Back to Home</a></Link>
      </div>
    </div>
  );
}
