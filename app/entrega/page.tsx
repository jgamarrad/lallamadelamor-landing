// app/entrega/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Condiciones de Entrega',
  description: 'Información sobre tiempos de entrega, zonas de cobertura y costos de envío de La Llama del Amor.',
}

export default function Entrega() {
  return (
    <main style={{ maxWidth: 740, margin: '0 auto', padding: '8rem 2rem 6rem' }}>

      <Link href="/" style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2.5rem' }}>
        ← Volver al inicio
      </Link>

      <h1 style={{ fontFamily: 'var(--font-serif, serif)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 300, color: 'var(--txt, #faf0e6)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
        Condiciones de <em style={{ color: 'var(--gold-2, #f2d58a)', fontStyle: 'italic' }}>Entrega</em>
      </h1>
      <p style={{ color: 'var(--muted, #aaa)', fontSize: '0.82rem', marginBottom: '3rem' }}>Última actualización: mayo 2026</p>

      <div style={{ color: 'var(--muted, #ccc)', lineHeight: 1.9, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <section>
          <h2 style={h2}>Zona de cobertura</h2>
          <p>
            Realizamos entregas a domicilio en <strong style={{ color: 'var(--txt)' }}>Lima Metropolitana</strong>.
            Para distritos fuera de la cobertura habitual, consúltanos por WhatsApp — evaluamos
            cada caso y buscamos la mejor opción para ti.
          </p>
        </section>

        <section>
          <h2 style={h2}>Tiempos de preparación</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'Pedido estándar',   time: '24 – 48 horas hábiles', note: 'desde la confirmación y pago' },
              { label: 'Pedido express',    time: 'Mismo día',              note: 'sujeto a disponibilidad, consultar' },
              { label: 'Fechas especiales', time: '5+ días antes',          note: 'San Valentín, Día de la Madre, Navidad, etc.' },
            ].map((item) => (
              <div key={item.label} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                padding: '0.9rem 1.1rem', borderRadius: 10,
                background: 'var(--panel)', border: '1px solid var(--line)',
                gap: '1rem', flexWrap: 'wrap',
              }}>
                <span style={{ color: 'var(--txt)', fontWeight: 500 }}>{item.label}</span>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ color: 'var(--gold-2)', fontWeight: 600 }}>{item.time}</span>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.1rem' }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={h2}>Costo de envío</h2>
          <p>
            El costo de envío depende del distrito de entrega y se informa al momento de cotizar.
            Para algunos distritos céntricos podemos ofrecer envío sin costo en pedidos mayores
            a un monto mínimo — consulta disponibilidad.
          </p>
        </section>

        <section>
          <h2 style={h2}>Horarios de entrega</h2>
          <ul style={ul}>
            <li>Lunes a sábado: 9:00 am – 8:00 pm</li>
            <li>Domingos y feriados: consultar disponibilidad</li>
            <li>Coordinamos el horario exacto contigo por WhatsApp antes de la entrega</li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>Recepción del pedido</h2>
          <ul style={ul}>
            <li>El cliente o una persona designada debe estar disponible para recibir el pedido.</li>
            <li>Si nadie puede recibir el pedido en el horario acordado, por favor avísanos con al menos 2 horas de anticipación para reprogramar.</li>
            <li>Los intentos de entrega fallidos por ausencia del cliente pueden generar un costo adicional de reenvío.</li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>Cuidado del producto</h2>
          <ul style={ul}>
            <li>Los productos de chocolate deben conservarse en un lugar fresco y seco, alejados del sol directo.</li>
            <li>Se recomienda consumir en un plazo máximo de <strong style={{ color: 'var(--txt)' }}>7 días</strong> desde la recepción.</li>
            <li>En época de verano o calor intenso, se recomienda refrigerar.</li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>¿Tienes dudas sobre tu entrega?</h2>
          <p>
            Escríbenos directamente por WhatsApp y te respondemos en minutos:
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=51984096041&text=Hola!%20Tengo%20una%20consulta%20sobre%20la%20entrega%20de%20mi%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              marginTop: '1rem', padding: '0.75rem 1.4rem', borderRadius: '3rem',
              background: '#25D366', color: 'white', textDecoration: 'none',
              fontWeight: 600, fontSize: '0.88rem',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por WhatsApp
          </a>
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
