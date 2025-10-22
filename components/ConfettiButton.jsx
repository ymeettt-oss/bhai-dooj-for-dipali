import confetti from 'canvas-confetti'

export default function ConfettiButton({ children }) {
  function boom() {
    confetti({ particleCount: 120, spread: 140, origin: { y: 0.6 } })
  }
  return (
    <button onClick={boom} className="px-4 py-2 rounded-lg shadow bg-gradient-to-r from-pink-400 to-yellow-300 text-white font-semibold">{children}</button>
  )
}
