import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-20 shadow-sm">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold">Happy Bhai Dooj Baccha ❤️</div>
        <div className="flex gap-3 text-sm">
          <Link href="/"><a className="px-3 py-1 rounded hover:bg-gray-100">Home</a></Link>
          <Link href="/game"><a className="px-3 py-1 rounded hover:bg-gray-100">Game</a></Link>
          <Link href="/memes"><a className="px-3 py-1 rounded hover:bg-gray-100">Memes</a></Link>
          <Link href="/music"><a className="px-3 py-1 rounded hover:bg-gray-100">Music</a></Link>
          <Link href="/wishes"><a className="px-3 py-1 rounded hover:bg-gray-100">Wishes</a></Link>
        </div>
      </div>
    </nav>
  )
}
