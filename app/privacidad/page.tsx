// app/privacidad/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Políticas de Privacidad',
  description: 'Políticas de privacidad y tratamiento de datos personales de La Llama del Amor.',
}

export default function Privacidad() {
  return (
    <main style={{ maxWidth: 740, margin: '0 auto', padding: '8rem 2rem 6rem' }}>

      <Link href="/" style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2.5rem' }}>
        ← Volver al inicio
      </Link>

      <h1 style={{ fontFamily: 'var(--font-serif, serif)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 300, color: 'var(--txt, #faf0e6)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
        Políticas de <em style={{ color: 'var(--gold-2, #f2d58a)', fontStyle: 'italic' }}>Privacidad</em>
      </h1>
      <p style={{ color: 'var(--muted, #aaa)', fontSize: '0.82rem', marginBottom: '3rem' }}>Última actualización: mayo 2026</p>

      <div style={{ color: 'var(--muted, #ccc)', lineHeight: 1.9, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <section>
          <h2 style={h2}>1. Responsable del tratamiento</h2>
          <p>
            <strong style={{ color: 'var(--txt)' }}>LA LLAMA DEL AMOR SAC</strong>, con RUC activo,
            domiciliada en Lima, Perú. Correo de contacto:{' '}
            <a href="mailto:ventas@lallamadelamor.pe" style={{ color: 'var(--gold)' }}>ventas@lallamadelamor.pe</a>.
          </p>
        </section>

        <section>
          <h2 style={h2}>2. Datos que recopilamos</h2>
          <p>Al contactarnos por WhatsApp, Instagram o cualquier canal, podemos recopilar:</p>
          <ul style={ul}>
            <li>Nombre completo</li>
            <li>Número de teléfono</li>
            <li>Correo electrónico (si lo proporcionas)</li>
            <li>Dirección de entrega en Lima</li>
            <li>Información del pedido (producto, personalización, ocasión)</li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>3. Finalidad del tratamiento</h2>
          <p>Usamos tus datos exclusivamente para:</p>
          <ul style={ul}>
            <li>Procesar y coordinar tu pedido</li>
            <li>Coordinar la entrega a domicilio</li>
            <li>Comunicarnos contigo sobre el estado de tu pedido</li>
            <li>Enviarte información de productos o promociones (solo si das tu consentimiento)</li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>4. Compartir información con terceros</h2>
          <p>
            No vendemos, alquilamos ni cedemos tus datos personales a terceros. Solo podemos
            compartirlos con proveedores de logística necesarios para realizar la entrega de tu pedido,
            bajo acuerdos de confidencialidad.
          </p>
        </section>

        <section>
          <h2 style={h2}>5. Seguridad</h2>
          <p>
            Adoptamos medidas razonables para proteger tu información personal contra accesos no
            autorizados, pérdida o divulgación. La comunicación por WhatsApp cuenta con el cifrado
            de extremo a extremo de Meta.
          </p>
        </section>

        <section>
          <h2 style={h2}>6. Tus derechos (Ley 29733 – Perú)</h2>
          <p>De acuerdo con la Ley de Protección de Datos Personales del Perú, tienes derecho a:</p>
          <ul style={ul}>
            <li><strong style={{ color: 'var(--txt)' }}>Acceso:</strong> conocer qué datos tenemos sobre ti</li>
            <li><strong style={{ color: 'var(--txt)' }}>Rectificación:</strong> corregir datos inexactos</li>
            <li><strong style={{ color: 'var(--txt)' }}>Cancelación:</strong> solicitar la eliminación de tus datos</li>
            <li><strong style={{ color: 'var(--txt)' }}>Oposición:</strong> oponerte al tratamiento de tus datos</li>
          </ul>
          <p style={{ marginTop: '0.75rem' }}>
            Para ejercer cualquiera de estos derechos, escríbenos a{' '}
            <a href="mailto:ventas@lallamadelamor.pe" style={{ color: 'var(--gold)' }}>ventas@lallamadelamor.pe</a>.
          </p>
        </section>

        <section>
          <h2 style={h2}>7. Cookies</h2>
          <p>
            Este sitio web no utiliza cookies de seguimiento ni publicidad. Solo se usan cookies
            técnicas necesarias para el funcionamiento básico del sitio.
          </p>
        </section>

        <section>
          <h2 style={h2}>8. Cambios en esta política</h2>
          <p>
            Podemos actualizar estas políticas ocasionalmente. La fecha de última actualización
            siempre estará indicada al inicio de esta página.
          </p>
        </section>

      </div>
    </main>
  )
}

const h2: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: 'var(--txt, #faf0e6)',
  marginBottom: '0.6rem',
}

const ul: React.CSSProperties = {
  paddingLeft: '1.4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
  marginTop: '0.5rem',
}
