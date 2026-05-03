// app/terminos/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de compra, cambios y devoluciones de La Llama del Amor.',
}

export default function Terminos() {
  return (
    <main style={{ maxWidth: 740, margin: '0 auto', padding: '8rem 2rem 6rem' }}>

      <Link href="/" style={{ color: 'var(--gold)', textDecoration: 'none', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '2.5rem' }}>
        ← Volver al inicio
      </Link>

      <h1 style={{ fontFamily: 'var(--font-serif, serif)', fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 300, color: 'var(--txt, #faf0e6)', marginBottom: '0.5rem', lineHeight: 1.1 }}>
        Términos y <em style={{ color: 'var(--gold-2, #f2d58a)', fontStyle: 'italic' }}>Condiciones</em>
      </h1>
      <p style={{ color: 'var(--muted, #aaa)', fontSize: '0.82rem', marginBottom: '3rem' }}>Última actualización: mayo 2026</p>

      <div style={{ color: 'var(--muted, #ccc)', lineHeight: 1.9, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <section>
          <h2 style={h2}>1. Aceptación</h2>
          <p>
            Al realizar un pedido con <strong style={{ color: 'var(--txt)' }}>La Llama del Amor</strong>,
            el cliente acepta los presentes términos y condiciones. Si tienes dudas, contáctanos
            antes de realizar tu pedido por WhatsApp al{' '}
            <a href="https://api.whatsapp.com/send?phone=51984096041" target="_blank" rel="noopener noreferrer"
               style={{ color: 'var(--gold)' }}>+51 984 096 041</a>.
          </p>
        </section>

        <section>
          <h2 style={h2}>2. Productos y personalización</h2>
          <ul style={ul}>
            <li>Todos nuestros productos son elaborados de forma artesanal y personalizados según las indicaciones del cliente.</li>
            <li>El cliente es responsable de verificar que la información enviada para la personalización (nombres, fechas, fotos) sea correcta.</li>
            <li>Una vez confirmado el pedido y enviados los datos de personalización, no se aceptan cambios en el diseño.</li>
            <li>Los colores y acabados pueden variar ligeramente respecto a las fotos referenciales por la naturaleza artesanal del producto.</li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>3. Precios y pagos</h2>
          <ul style={ul}>
            <li>Todos los precios están expresados en Soles peruanos (S/.) e incluyen IGV.</li>
            <li>El pedido se confirma con el pago adelantado del 50% o el 100% según se acuerde.</li>
            <li>Formas de pago: Yape, Plin, transferencia bancaria, depósito.</li>
            <li>Los precios pueden variar sin previo aviso. El precio acordado al momento del pedido se respeta siempre.</li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>4. Tiempos de preparación</h2>
          <ul style={ul}>
            <li>El tiempo de preparación estándar es de <strong style={{ color: 'var(--txt)' }}>24 a 48 horas hábiles</strong> desde la confirmación del pedido.</li>
            <li>Para fechas especiales (San Valentín, Día de la Madre, Navidad) se recomienda hacer el pedido con al menos 5 días de anticipación.</li>
            <li>Los pedidos urgentes están sujetos a disponibilidad y pueden tener un costo adicional.</li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>5. Entrega</h2>
          <ul style={ul}>
            <li>Realizamos entregas a domicilio en Lima Metropolitana.</li>
            <li>El costo de envío varía según la zona y se informa al momento de cotizar.</li>
            <li>El cliente debe estar disponible para recibir el pedido en el horario acordado.</li>
            <li>En caso de ausencia del cliente, el costo de un nuevo intento de entrega corre por su cuenta.</li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>6. Cambios y devoluciones</h2>
          <ul style={ul}>
            <li>Por la naturaleza personalizada de nuestros productos, <strong style={{ color: 'var(--txt)' }}>no se aceptan devoluciones</strong> una vez confirmado el pedido y enviados los datos de personalización.</li>
            <li>Si el producto presenta un defecto de fabricación comprobable, nos comprometemos a reemplazarlo sin costo adicional, previa verificación fotográfica dentro de las <strong style={{ color: 'var(--txt)' }}>24 horas</strong> de recibido el pedido.</li>
            <li>No nos responsabilizamos por errores en los datos de personalización proporcionados por el cliente (nombres mal escritos, fechas incorrectas, etc.).</li>
            <li>Los cambios de fecha de entrega deben solicitarse con al menos 24 horas de anticipación.</li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>7. Propiedad intelectual</h2>
          <p>
            Todas las imágenes, diseños y contenidos de este sitio web y del catálogo son propiedad
            de La Llama del Amor. Queda prohibida su reproducción sin autorización escrita.
          </p>
        </section>

        <section>
          <h2 style={h2}>8. Ley aplicable</h2>
          <p>
            Los presentes términos se rigen por las leyes de la República del Perú, incluyendo
            el Código de Protección y Defensa del Consumidor (Ley N° 29571) y las normas del INDECOPI.
            Cualquier controversia se someterá a los tribunales competentes de Lima.
          </p>
        </section>

        <section>
          <h2 style={h2}>9. Contacto</h2>
          <p>
            Para cualquier consulta sobre estos términos:{' '}
            <a href="mailto:ventas@lallamadelamor.pe" style={{ color: 'var(--gold)' }}>ventas@lallamadelamor.pe</a>
            {' '}o WhatsApp{' '}
            <a href="https://api.whatsapp.com/send?phone=51984096041" target="_blank" rel="noopener noreferrer"
               style={{ color: 'var(--gold)' }}>+51 984 096 041</a>.
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
