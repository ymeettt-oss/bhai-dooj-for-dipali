
import Link from 'next/link';

export default function Game() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎯 Easy Game for Baccha 💕</h1>
      <p>Click the hearts to win 💖</p>
      <button onClick={() => alert('Yay! You win Baccha 🥰')}>💖 Click Me 💖</button>
      <div style={{ marginTop: '20px' }}>
        <Link href="/" legacyBehavior><a>🏠 Back to Home</a></Link>
      </div>
    </div>
  );
}
