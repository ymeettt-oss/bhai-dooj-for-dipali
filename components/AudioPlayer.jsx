import { useState } from 'react'
import { Howl } from 'howler'

export default function AudioPlayer({ label = 'Play Voice Message', src = '/audio/voice-message.mp3' }) {
  const [playing, setPlaying] = useState(false)
  const sound = (typeof window !== 'undefined') ? new Howl({ src: [src], html5: true, volume: 1.0 }) : null

  function toggle() {
    if (!sound) return
    if (playing) { sound.pause(); setPlaying(false) }
    else { sound.play(); setPlaying(true) }
  }

  return (
    <button onClick={toggle} className="px-4 py-2 rounded bg-green-500 text-white shadow">{playing ? 'Pause' : label}</button>
  )
}
