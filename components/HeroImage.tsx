'use client'

import Image from 'next/image'
import { useState } from 'react'

export function HeroImage({ className = '' }: { className?: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={`w-full max-w-[420px] aspect-[4/5] rounded-2xl border border-dashed flex flex-col items-center justify-center gap-3 text-sm ${className}`}
        style={{ borderColor: 'rgba(214,178,94,0.25)', color: 'var(--muted)', background: 'var(--panel)' }}>
        <span className="text-5xl">🎁</span>
        <p className="text-center leading-relaxed">
          Aquí va tu mejor foto<br />
          <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>
            public/images/hero-producto.jpg · ratio 4:5
          </span>
        </p>
      </div>
    )
  }

  return (
    <Image
      src="/images/hero-producto.jpg"
      alt="Detalle personalizado La Llama del Amor"
      width={420}
      height={525}
      priority
      onError={() => setError(true)}
      className={`w-full max-w-[420px] rounded-2xl object-cover ${className}`}
      style={{
        aspectRatio: '4/5',
        boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(214,178,94,0.15)',
        animation: 'fadeUp 1s 0.3s ease both',
      }}
    />
  )
}
