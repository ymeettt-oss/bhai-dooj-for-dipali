
import Link from 'next/link';

export default function Music() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎶 Songs for You, Dipali 💖</h1>
      <p>Enjoy these songs while thinking of your Bhai 😊</p>
      <audio controls autoPlay>
        <source src="/palpal.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p>Lyrics will appear here 🎤</p>
      <div style={{ marginTop: '20px' }}>
        <Link href="/" legacyBehavior><a>🏠 Back to Home</a></Link>
      </div>
    </div>
  );
}
