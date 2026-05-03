'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
  href: string
  img: string
  alt: string
  badge: string
  name: string
  desc: string
  price: string
  desde?: boolean
  fallbackEmoji?: string
}

export function ProductCard({ href, img, alt, badge, name, desc, price, desde, fallbackEmoji = '🎁' }: Props) {
  const [error, setError] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card product-card-hover block text-inherit no-underline"
      style={{ overflow: 'hidden' }}
    >
      {/* Imagen */}
      <div className="relative">
        {!error ? (
          <Image
            src={img}
            alt={alt}
            width={400}
            height={500}
            onError={() => setError(true)}
            className="w-full object-cover"
            style={{ aspectRatio: '4/5', borderRadius: '16px 16px 0 0' }}
          />
        ) : (
          <div className="w-full flex items-center justify-center text-6xl"
            style={{ aspectRatio: '4/5', background: 'var(--panel)', borderRadius: '16px 16px 0 0' }}>
            {fallbackEmoji}
          </div>
        )}
        <span className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full"
          style={{ background: 'var(--gold)', color: '#111' }}>
          {badge}
        </span>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-semibold text-base mb-1 leading-snug" style={{ color: 'var(--txt)' }}>{name}</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
        </div>

        {/* Precio + etiquetas */}
        <div>
          <div className="flex items-baseline gap-1 mb-1">
            {desde && <span className="text-xs" style={{ color: 'var(--muted)' }}>Desde</span>}
            <span className="text-xl font-bold" style={{ color: 'var(--gold-2)' }}>{price}</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(214,178,94,0.12)', color: 'var(--gold)', border: '1px solid rgba(214,178,94,0.25)' }}>
              ✨ Personalizable
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--muted)', border: '1px solid rgba(255,255,255,0.1)' }}>
              Entrega en Lima 🚚
            </span>
          </div>
        </div>

        {/* Botón */}
        <span className="btn-whatsapp text-center justify-center" style={{ fontSize: '0.82rem', padding: '0.55rem 1rem', marginTop: '0.25rem' }}>
          Cotizar →
        </span>
      </div>
    </a>
  )
}
