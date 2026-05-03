// app/page.tsx  — Server Component (sin 'use client' → compile rápido)
import { HeroImage }   from '@/components/HeroImage'
import { ProductCard } from '@/components/ProductCard'

const WA = '51984096041'
const wa = (msg: string) =>
  `https://api.whatsapp.com/send?phone=${WA}&text=${encodeURIComponent(msg)}`

function WaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

const productos = [
  { img: '/images/correo-postal.jpg', alt: 'Correo Postal de Chocolate', badge: '⭐ Favorito',   name: 'Correo Postal de Chocolate',  desc: 'Caja con mensaje en chocolate, mensaje de texto y foto personalizada. La forma más dulce de decir lo que sientes.',             price: 'S/.85', desde: true,  emoji: '🍫', waMsg: 'Hola! Me interesa el Correo Postal de Chocolate. ¿Me brinda precio y detalles?' },
  { img: '/images/caja-miski.jpg',    alt: 'Caja Miski Te Amo',          badge: '🔥 Más vendido',  name: 'Caja Miski "Te Amo"',          desc: 'Letras de chocolate personalizadas con decoración premium. Para decirlo de la manera más especial.',          price: 'S/.60', desde: true,  emoji: '❤️', waMsg: 'Hola! Me interesa la Caja Miski Te Amo. ¿Me brinda precio y detalles?' },
  { img: '/images/brownie-cumple.jpg',alt: 'Choco Brownie Cumpleañero',  badge: '🎉 Cumpleaños', name: 'Choco Brownie Cumpleañero',    desc: 'Caja de 4 brownies y 4 tabletas de chocolate con historia personalizada. El regalo más especial del año.',             price: 'S/.65', desde: true,  emoji: '🎂', waMsg: 'Hola! Me interesa el Choco Brownie Cumpleañero. ¿Me brinda precio y detalles?' },
  { img: '/images/miski-peluche.jpg',   alt: 'Pack de Aniversario',      badge: '💫 Romántico', name: 'Caja Miski + Peluche',        desc: 'Letras de chocolate personalizadas con peluche, bolsa, tarjeta y globo. Un combo irresistible.',                       price: 'S/.125',desde: false, emoji: '🦙', waMsg: 'Hola! Me interesa el Box Brownie + Llamita. ¿Me brinda precio y detalles?' },
  { img: '/images/caja-osito.jpg',    alt: 'Caja Acrílica Osito 3D',     badge: '✨ Premium',    name: 'Caja Acrílica Osito 3D',       desc: 'Osito de chocolate 3D en elegante caja acrílica. Presentación de lujo para momentos únicos.',                  price: 'S/.85', desde: false, emoji: '🐻', waMsg: 'Hola! Me interesa la Caja Acrílica con Osito 3D. ¿Me brinda precio y detalles?' },
]

const ocasiones = [
  { emoji: '🎂', text: 'Cumpleaños — Hazlo inolvidable' },
  { emoji: '💑', text: 'Enamorados — El detalle que conquista' },
  { emoji: '🎓', text: 'Graduación — Celebra el esfuerzo' },
  { emoji: '👨‍👩‍👧', text: 'Mamá / Papá — Dile cuánto los quieres' },
  { emoji: '💼', text: 'Corporativo — Regala con identidad' },
  { emoji: '🌹', text: 'San Valentín — Rosas, chocolate y amor' },
]

const testimonios = [
  { text: '"Mi novio se quedó sin palabras. La caja estaba hermosa. Definitivamente lo pido de nuevo."', author: '— Valeria M., Lima' },
  { text: '"Pedí el Correo Postal para mi mamá y lloró de la emoción. El detalle de la foto es increíble."', author: '— Carlos R., Miraflores' },
  { text: '"Rapidísimos y atentos. El regalo llegó perfecto y fue todo un éxito."', author: '— Luciana P., San Isidro' },
]

const gradientGold = {
  background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-2) 55%, var(--gold-deep) 100%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
}

export default function LandingPage() {
  return (
    <>
      {/* ── NAV ── */}
      <nav className="landing-nav">
        <a href="#" style={{
          color: 'var(--gold-2)', textDecoration: 'none',
          fontSize: 'clamp(0.85rem, 3.5vw, 1.2rem)',
          fontWeight: 700, letterSpacing: '-0.01em', flexShrink: 0,
        }}>
          <span style={{ color: 'var(--txt)' }}>La Llama</span> del Amor
        </a>

        {/* Links — solo desktop */}
        <ul className="nav-links-desktop flex gap-8 list-none items-center m-0 p-0">
          <li><a href="#productos" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Productos</a></li>
          <li><a href="#ocasiones" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ocasiones</a></li>
          <li><a href="https://sv.lallamadelamor.pe/inicio" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Catálogo</a></li>
          <li>
            <a href={wa('Hola! Quiero cotizar un detalle 🎁')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem' }}>
              <WaIcon size={16} /> Cotizar ahora
            </a>
          </li>
        </ul>

        {/* Botón — solo móvil */}
        <a href={wa('Hola! Quiero cotizar un detalle 🎁')} target="_blank" rel="noopener noreferrer"
           className="nav-mobile-cta btn-whatsapp"
           style={{ fontSize: '0.72rem', padding: '0.4rem 0.75rem', marginLeft: '0.5rem', flexShrink: 0, whiteSpace: 'nowrap' }}>
          <WaIcon size={13} /> Cotizar
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        className="hero-gold px-6 flex items-center"
        style={{
          paddingTop: 'clamp(4.5rem, 12vw, 7rem)',
          paddingBottom: 'clamp(2rem, 6vw, 4rem)',
          minHeight: 'auto',
        }}
      >
        <div className="mx-auto w-full grid gap-12 items-center" style={{ maxWidth: 1100, gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))' }}>

          <div className="flex flex-col" style={{ animation: 'fadeDown 0.8s ease both' }}>
            <span className="pill self-start mb-8" style={{ fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              ♥ Detalles personalizados · Lima, Perú
            </span>
            <h1 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.02em', color: 'var(--txt)', marginBottom: '0.3em' }}>
              El detalle perfecto<br />
              <span style={gradientGold}>para sorprender</span>
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 'clamp(0.95rem,1.5vw,1.1rem)', lineHeight: 1.8, maxWidth: 440, margin: '1.5rem 0 2.5rem' }}>
              Chocolates, brownies, rosas y detalles personalizados para cada momento especial. Entrega en Lima.
            </p>
            <div className="flex flex-row flex-wrap gap-3 items-center">
              <a href={wa('Hola! Quiero cotizar por WhatsApp 🎁')} target="_blank" rel="noopener noreferrer"
                 className="btn-whatsapp"
                 style={{ fontSize: '0.85rem', padding: '0.7rem 1.3rem' }}>
                <WaIcon size={17} /> Cotizar por WhatsApp
              </a>
              <a href="https://sv.lallamadelamor.pe/inicio" target="_blank" rel="noopener noreferrer"
                 style={{
                   display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                   fontSize: '0.85rem', padding: '0.7rem 1.3rem',
                   borderRadius: '3rem', fontWeight: 600,
                   border: '1.5px solid rgba(214,178,94,0.6)',
                   color: 'var(--gold-2)', textDecoration: 'none',
                   transition: 'all 0.25s',
                   background: 'rgba(214,178,94,0.07)',
                 }}>
                Ver catálogo →
              </a>
            </div>
            {/* Instagram link sutil bajo los botones */}
            <a href="https://instagram.com/lallamadelamor.pe" target="_blank" rel="noopener noreferrer"
               style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem', textDecoration: 'none', color: 'var(--muted)', fontSize: '0.78rem', transition: 'color 0.2s' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @lallamadelamor.pe
            </a>
          </div>

          <div className="flex justify-center">
            <HeroImage />
          </div>
        </div>
      </section>

      {/* ── PROOF BAR ── */}
      <div className="flex flex-wrap justify-center gap-10 px-6 py-7" style={{ background: 'var(--panel)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        {[
          { num: '+2,000', label: 'Regalos entregados en Lima' },
          { num: 'Lima',   label: 'Envío a domicilio' },
          { num: '100%',   label: 'Personalizado' },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1 text-center">
            <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--gold-2)', lineHeight: 1 }}>{item.num}</span>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)' }}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* ── PRODUCTOS ── */}
      <section className="px-6 py-24" id="productos" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="text-center mb-14 max-w-xl mx-auto">
          <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold)', display: 'block', marginBottom: '0.75rem' }}>Lo más pedido</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', display: 'inline-block', marginBottom: '0.75rem' }}>
            Imprescindibles que <em style={{ color: 'var(--gold-2)' }}>enamoran</em>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
            Chocolates, brownies, rosas y más. Todo personalizado con tu foto, nombre y mensaje.
          </p>
        </div>
        <div className="grid gap-5 mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px,1fr))', maxWidth: 1100 }}>
          {productos.map((p) => (
            <ProductCard key={p.name} href={wa(p.waMsg)} img={p.img} alt={p.alt} badge={p.badge} name={p.name} desc={p.desc} price={p.price} desde={p.desde} fallbackEmoji={p.emoji} />
          ))}
          {/* Ver más → catálogo */}
          <a href="https://sv.lallamadelamor.pe/inicio" target="_blank" rel="noopener noreferrer"
             className="product-card-hover flex flex-col items-center justify-center gap-4 text-center"
             style={{
               minHeight: 320,
               textDecoration: 'none',
               borderRadius: 16,
               border: '1.5px solid rgba(214,178,94,0.3)',
               background: 'linear-gradient(145deg, rgba(214,178,94,0.06) 0%, rgba(214,178,94,0.02) 100%)',
               position: 'relative',
               overflow: 'hidden',
             }}>
            {/* Brillo de fondo */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(214,178,94,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-2) 55%, var(--gold-deep) 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.4rem', color: '#111', fontWeight: 700,
              boxShadow: '0 8px 24px rgba(214,178,94,0.3)',
            }}>→</div>
            <div style={{ position: 'relative' }}>
              <p style={{ color: 'var(--txt)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.3rem' }}>
                Ver catálogo completo
              </p>
              <p style={{ color: 'var(--gold)', fontSize: '0.82rem', fontWeight: 500 }}>
                +20 detalles disponibles
              </p>
            </div>
            <span style={{
              fontSize: '0.75rem', color: 'var(--muted)',
              border: '1px solid rgba(214,178,94,0.25)',
              padding: '0.3rem 0.9rem', borderRadius: '2rem',
              position: 'relative',
            }}>
              sv.lallamadelamor.pe
            </span>
          </a>
        </div>
      </section>

      {/* ── POR QUÉ ── */}
      <section className="px-6 py-24 text-center">
        <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold)', display: 'block', marginBottom: '0.75rem' }}>Por qué elegirnos</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', display: 'inline-block', marginBottom: '3.5rem' }}>
          Cada detalle <em style={{ color: 'var(--gold-2)' }}>importa</em>
        </h2>
        <div className="grid gap-10 mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', maxWidth: 900 }}>
          {[
            { icon: '🎨', title: 'Hecho a tu medida',      desc: 'Chocolate, brownie, rosas o peluches — lo que necesites para el detalle perfecto.' },
            { icon: '✍️', title: '100% personalizado',     desc: 'Tu foto, tu texto, tu historia. Cada pieza es única como quien la recibe.' },
            { icon: '⚡', title: 'Rápido y seguro',        desc: 'Coordinamos por WhatsApp. Envío a domicilio en Lima.' },
            { icon: '🎁', title: 'Presentación impecable', desc: 'Cada pedido llega en caja premium lista para regalar.' },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-4">
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--panel)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>{item.icon}</div>
              <h3 style={{ fontWeight: 600, color: 'var(--txt)' }}>{item.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: 180 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OCASIONES ── */}
      <section className="px-6 py-24" id="ocasiones" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="mx-auto grid gap-14 items-center" style={{ maxWidth: 1000, gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))' }}>
          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold)', display: 'block', marginBottom: '0.75rem' }}>Para cada momento</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', marginBottom: '1rem' }}>
              El regalo perfecto <em style={{ color: 'var(--gold-2)' }}>siempre existe</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '2rem' }}>Tenemos algo especial para cada ocasión que quieras celebrar.</p>
            <div className="flex flex-col gap-3">
              {ocasiones.map((o) => (
                <div key={o.text} className="card flex items-center gap-4 px-4 py-3 transition-transform hover:translate-x-1" style={{ cursor: 'default' }}>
                  <span style={{ fontSize: '1.4rem' }}>{o.emoji}</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--txt)' }}>{o.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card flex flex-col items-center text-center gap-5 p-10">
            {/* Logo de La Llama del Amor */}
            <img
              src="/images/logo.png"
              alt="La Llama del Amor"
              style={{ width: 80, height: 80, objectFit: 'contain', opacity: 0.9 }}
            />
            <h3 style={{ fontSize: '2rem', fontWeight: 300, color: 'var(--txt)', lineHeight: 1.2 }}>
              ¿No sabes qué<br /><em style={{ color: 'var(--gold-2)' }}>regalar?</em>
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: 260 }}>
              Te recomendamos opciones según tu presupuesto y ocasión. Respuesta rápida por WhatsApp.
            </p>
            <a href={wa('Hola! Necesito ayuda para elegir un regalo 🎁')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WaIcon size={18} /> Te ayudamos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="px-6 py-24 text-center">
        <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold)', display: 'block', marginBottom: '0.75rem' }}>Lo que dicen</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', display: 'inline-block', marginBottom: '3.5rem' }}>
          Clientes que ya <em style={{ color: 'var(--gold-2)' }}>enamoraron</em>
        </h2>
        <div className="grid gap-5 mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))', maxWidth: 900 }}>
          {testimonios.map((t) => (
            <div key={t.author} className="card text-left p-7">
              <div style={{ color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--txt)', lineHeight: 1.6, marginBottom: '1rem' }}>{t.text}</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', letterSpacing: '0.05em' }}>{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="px-6 py-32 text-center relative overflow-hidden" style={{ background: 'var(--panel)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(214,178,94,0.08) 0%, transparent 70%)' }} />
        <h2 style={{ fontSize: 'clamp(2.4rem,6vw,5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--txt)', marginBottom: '1rem', position: 'relative' }}>
          Escríbenos y en minutos<br />
          <span style={gradientGold}>te enviamos opciones</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: 440, margin: '0 auto 3.5rem', lineHeight: 1.8, position: 'relative' }}>
          Cuéntanos tu idea y recibe opciones con precio según tu presupuesto y ocasión. Sin compromiso.
        </p>
        <a href={wa('Hola! Quiero cotizar un detalle especial 🎁 ❤️')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp-big" style={{ position: 'relative' }}>
          <WaIcon size={24} /> Escribir por WhatsApp
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-8 py-8" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg0)' }}>

        {/* Fila principal */}
        <div className="flex flex-wrap justify-between items-start gap-8 mb-6">

          {/* Marca */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold-2)' }}>La Llama del Amor ♥</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>Regalos personalizados · Lima, Perú</span>
            <a href="mailto:ventas@lallamadelamor.pe"
               style={{ fontSize: '0.78rem', color: 'var(--muted)', textDecoration: 'none' }}>
              ventas@lallamadelamor.pe
            </a>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold)', marginBottom: '0.25rem' }}>Visítanos</span>
            {[
              { label: 'Catálogo completo',  href: 'https://sv.lallamadelamor.pe/inicio', external: true },
              { label: 'Instagram',          href: 'https://instagram.com/lallamadelamor.pe', external: true },
              { label: 'WhatsApp',           href: `https://api.whatsapp.com/send?phone=51984096041`, external: true },
            ].map((l) => (
              <a key={l.label} href={l.href}
                 {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                 style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.82rem' }}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold)', marginBottom: '0.25rem' }}>Legal</span>
            {[
              { label: 'Políticas de Privacidad',  href: '/privacidad' },
              { label: 'Términos y Condiciones',   href: '/terminos' },
              { label: 'Condiciones de Entrega',   href: '/entrega' },
            ].map((l) => (
              <a key={l.label} href={l.href}
                 style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '0.82rem' }}>
                {l.label}
              </a>
            ))}
          </div>

        </div>

        {/* Línea inferior */}
        <div className="flex flex-wrap justify-between items-center gap-3 pt-5"
          style={{ borderTop: '1px solid var(--line)' }}>
          <p style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
            © 2026 LA LLAMA DEL AMOR SAC · Todos los derechos reservados
          </p>
          <a
            href="https://forms.gle/uPE7AvED8m3GNkpJ6"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.72rem', color: 'var(--muted)', textDecoration: 'none',
              border: '1px solid rgba(255,220,180,0.15)',
              padding: '0.3rem 0.8rem', borderRadius: '2rem',
            }}
          >
            📋 Libro de Reclamaciones
          </a>
        </div>

      </footer>

      {/* ── WHATSAPP FLOTANTE ── */}
      <a href={wa('Hola! Quiero hacer un pedido 🎁')} target="_blank" rel="noopener noreferrer" className="wa-float" title="Escribir por WhatsApp">
        <WaIcon size={26} />
      </a>

      {/* ── INSTAGRAM FLOTANTE ── */}
      <a href="https://instagram.com/lallamadelamor.pe" target="_blank" rel="noopener noreferrer"
         className="ig-float" title="Ver Instagram">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      </a>
    </>
  )
}
