
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🎉 Happy Bhai Dooj Baccha ❤️</h1>
      <p>Hello Dipali! Your Bhai made this cute website just for you 💕</p>
      <nav>
        <ul style={{ listStyle: 'none' }}>
          <li><Link href="/music" legacyBehavior><a>🎵 Music Page</a></Link></li>
          <li><Link href="/game" legacyBehavior><a>🎮 Game Page</a></Link></li>
          <li><Link href="/wishes" legacyBehavior><a>💌 Wishes Page</a></Link></li>
        </ul>
      </nav>
    </div>
  );
}
