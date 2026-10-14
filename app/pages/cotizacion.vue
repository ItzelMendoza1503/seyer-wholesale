
<template>
  <main class="pagina-cotizacion">
    <!-- Encabezado -->
    <header class="encabezado">
      <NuxtLink to="/" class="logo">
        <span class="logo-icono">S</span>
        <span class="logo-texto">
          SEYER<span>.WHOLESALE</span>
        </span>
      </NuxtLink>

      <nav class="navegacion">
        <NuxtLink to="/">Inicio</NuxtLink>
        <NuxtLink to="/servicios">Servicios</NuxtLink>
        <NuxtLink to="/productos">Productos</NuxtLink>
        <NuxtLink to="/cotizacion" class="activo">
          Cotización
        </NuxtLink>
      </nav>

      <NuxtLink to="/contacto" class="boton-contacto">
        Contáctanos
        <span>↗</span>
      </NuxtLink>
    </header>

    <!-- Presentación -->
    <section class="hero">
      <div class="hero-contenido">
        <span class="etiqueta">
          <span class="punto"></span>
          SOLICITUDES COMERCIALES
        </span>

        <h1>
          Hagamos crecer<br />
          tu <span>negocio.</span>
        </h1>

        <p>
          Cuéntanos qué necesitas y nuestro equipo preparará
          una propuesta adaptada a los requerimientos de tu empresa.
        </p>

        <div class="hero-detalles">
          <div class="detalle">
            <span class="detalle-icono">✓</span>
            <span>Atención personalizada</span>
          </div>

          <div class="detalle">
            <span class="detalle-icono">✓</span>
            <span>Propuestas a tu medida</span>
          </div>

          <div class="detalle">
            <span class="detalle-icono">✓</span>
            <span>Atención profesional</span>
          </div>
        </div>
      </div>

      <div class="hero-decoracion">
        <div class="circulo circulo-grande"></div>
        <div class="circulo circulo-mediano"></div>
        <div class="circulo circulo-pequeno"></div>

        <div class="tarjeta-flotante">
          <span class="tarjeta-icono">✦</span>
          <div>
            <strong>Tu próximo proyecto</strong>
            <p>Comienza con una cotización</p>
          </div>
        </div>

        <div class="hero-inicial">S</div>
      </div>
    </section>

    <!-- Formulario -->
    <section class="seccion-formulario">
      <div class="introduccion-formulario">
        <span class="subtitulo">EMPECEMOS</span>
        <h2>Solicita tu cotización</h2>
        <p>
          Completa los siguientes campos para que podamos conocer
          tus necesidades y ponernos en contacto contigo.
        </p>

        <div class="nota">
          <span class="nota-icono">i</span>
          Los campos marcados con * son obligatorios.
        </div>
      </div>

      <form class="formulario" @submit.prevent="enviarFormulario">
        <!-- Información de contacto -->
        <div class="grupo-seccion">
          <div class="titulo-seccion">
            <span class="numero-seccion">01</span>
            <div>
              <h3>Información de contacto</h3>
              <p>Datos de la persona o empresa solicitante.</p>
            </div>
          </div>

          <div class="rejilla">
            <div class="campo">
              <label for="nombre">Nombre completo *</label>
              <input
                id="nombre"
                v-model.trim="formulario.nombre"
                type="text"
                placeholder="Escribe tu nombre"
                autocomplete="name"
                maxlength="120"
                required
              />
            </div>

            <div class="campo">
              <label for="empresa">Nombre de la empresa *</label>
              <input
                id="empresa"
                v-model.trim="formulario.empresa"
                type="text"
                placeholder="Nombre de tu empresa"
                autocomplete="organization"
                maxlength="150"
                required
              />
            </div>

            <div class="campo">
              <label for="correo">Correo electrónico *</label>
              <input
                id="correo"
                v-model.trim="formulario.correo"
                type="email"
                placeholder="nombre@empresa.com"
                autocomplete="email"
                maxlength="150"
                required
              />
            </div>

            <div class="campo">
              <label for="telefono">Teléfono *</label>
              <input
                id="telefono"
                v-model.trim="formulario.telefono"
                type="tel"
                placeholder="Tu número de contacto"
                autocomplete="tel"
                maxlength="25"
                required
              />
            </div>
          </div>
        </div>

        <div class="separador"></div>

        <!-- Detalles de la cotización -->
        <div class="grupo-seccion">
          <div class="titulo-seccion">
            <span class="numero-seccion">02</span>
            <div>
              <h3>Detalles de la cotización</h3>
              <p>Cuéntanos qué producto o servicio necesitas.</p>
            </div>
          </div>

          <div class="rejilla">
            <div class="campo">
              <label for="servicio">Tipo de servicio *</label>
              <select
                id="servicio"
                v-model="formulario.servicio"
                required
              >
                <option disabled value="">
                  Selecciona una opción
                </option>
                <option value="Venta de productos">
                  Venta de productos
                </option>
                <option value="Venta al mayoreo">
                  Venta al mayoreo
                </option>
                <option value="Distribución">
                  Distribución
                </option>
                <option value="Abastecimiento empresarial">
                  Abastecimiento empresarial
                </option>
                <option value="Otro">
                  Otro
                </option>
              </select>
            </div>

            <div class="campo">
              <label for="producto">Producto o servicio *</label>
              <input
                id="producto"
                v-model.trim="formulario.producto"
                type="text"
                placeholder="¿Qué necesitas cotizar?"
                maxlength="200"
                required
              />
            </div>

            <div class="campo">
              <label for="cantidad">Cantidad aproximada *</label>
              <input
                id="cantidad"
                v-model="formulario.cantidad"
                type="number"
                min="1"
                step="1"
                placeholder="Ej. 100"
                required
              />
            </div>

            <div class="campo">
              <label for="fecha">Fecha requerida</label>
              <input
                id="fecha"
                v-model="formulario.fecha"
                type="date"
                :min="fechaMinima"
              />
            </div>

            <div class="campo campo-completo">
              <label for="mensaje">
                Descripción adicional
              </label>
              <textarea
                id="mensaje"
                v-model.trim="formulario.mensaje"
                rows="5"
                maxlength="2000"
                placeholder="Describe las características, especificaciones o requisitos de tu solicitud..."
              ></textarea>
              <span class="contador">
                {{ formulario.mensaje.length }}/2000 caracteres
              </span>
            </div>
          </div>
        </div>

        <div class="separador"></div>

        <!-- Confirmación -->
        <div class="confirmacion">
          <input
            id="acepta"
            v-model="formulario.acepta"
            type="checkbox"
            required
          />

          <label for="acepta">
            Confirmo que la información proporcionada es correcta
            y acepto que Seyer.Wholesale utilice estos datos para
            dar seguimiento a mi solicitud de cotización. *
          </label>
        </div>

        <!-- Mensajes -->
        <div
          v-if="enviado"
          class="mensaje-exito"
          role="status"
          aria-live="polite"
        >
          <span class="mensaje-icono">✓</span>
          <div>
            <strong>¡Solicitud enviada!</strong>
            <p>
              Tu solicitud de cotización se guardó correctamente.
            </p>
          </div>
        </div>

        <div
          v-if="errorEnvio"
          class="mensaje-error"
          role="alert"
          aria-live="assertive"
        >
          <strong>No se pudo enviar la solicitud.</strong>
          <p>{{ errorEnvio }}</p>
        </div>

        <!-- Botón -->
        <div class="acciones-formulario">
          <p>
            <span>🔒</span>
            Tus datos se utilizarán para dar seguimiento a tu solicitud.
          </p>

          <button
            type="submit"
            class="boton-enviar"
            :disabled="enviando"
          >
            <span>
              {{
                enviando
                  ? 'Enviando solicitud...'
                  : 'Enviar solicitud'
              }}
            </span>
            <strong>{{ enviando ? '...' : '→' }}</strong>
          </button>
        </div>
      </form>
    </section>

    <!-- Pie de página -->
    <footer class="pie-pagina">
      <NuxtLink to="/" class="logo logo-pie">
        <span class="logo-icono">S</span>
        <span class="logo-texto">
          SEYER<span>.WHOLESALE</span>
        </span>
      </NuxtLink>

      <p>
        Soluciones comerciales para impulsar tu negocio.
      </p>

      <span class="copyright">
        © {{ anioActual }} Seyer.Wholesale. Todos los derechos reservados.
      </span>
    </footer>
  </main>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const enviado = ref(false)
const enviando = ref(false)
const errorEnvio = ref('')

const formulario = reactive({
  nombre: '',
  empresa: '',
  correo: '',
  telefono: '',
  servicio: '',
  producto: '',
  cantidad: '',
  fecha: '',
  mensaje: '',
  acepta: false
})

const anioActual = new Date().getFullYear()

const fechaMinima = computed(() => {
  const hoy = new Date()
  const anio = hoy.getFullYear()
  const mes = String(hoy.getMonth() + 1).padStart(2, '0')
  const dia = String(hoy.getDate()).padStart(2, '0')

  return `${anio}-${mes}-${dia}`
})

async function enviarFormulario() {
  enviado.value = false
  errorEnvio.value = ''

  if (!formulario.acepta) {
    errorEnvio.value =
      'Debes confirmar la información antes de continuar.'
    return
  }

  if (
    !formulario.nombre ||
    !formulario.empresa ||
    !formulario.correo ||
    !formulario.telefono ||
    !formulario.servicio ||
    !formulario.producto ||
    !formulario.cantidad
  ) {
    errorEnvio.value =
      'Completa todos los campos obligatorios.'
    return
  }

  if (
    !Number.isInteger(Number(formulario.cantidad)) ||
    Number(formulario.cantidad) < 1
  ) {
    errorEnvio.value =
      'La cantidad debe ser un número entero mayor que cero.'
    return
  }

  enviando.value = true

  try {
    const respuesta = await $fetch('/api/cotizacion', {
      method: 'POST',
      body: {
        nombre: formulario.nombre,
        empresa: formulario.empresa,
        correo: formulario.correo,
        telefono: formulario.telefono,
        servicio: formulario.servicio,
        producto: formulario.producto,
        cantidad: Number(formulario.cantidad),
        fecha: formulario.fecha || null,
        mensaje: formulario.mensaje,
        acepta: formulario.acepta
      }
    })

    if (respuesta?.ok !== true) {
      throw new Error(
        'El servidor no confirmó el registro de la solicitud.'
      )
    }

    enviado.value = true

    Object.assign(formulario, {
      nombre: '',
      empresa: '',
      correo: '',
      telefono: '',
      servicio: '',
      producto: '',
      cantidad: '',
      fecha: '',
      mensaje: '',
      acepta: false
    })
  } catch (error) {
    console.error(
      'Error al enviar la cotización:',
      error
    )

    errorEnvio.value =
      error?.data?.statusMessage ||
      error?.data?.message ||
      error?.message ||
      'Ocurrió un problema al enviar tu solicitud. Inténtalo nuevamente.'
  } finally {
    enviando.value = false
  }
}
</script>

<style scoped>
:root {
  color-scheme: light;
}

* {
  box-sizing: border-box;
}

.pagina-cotizacion {
  min-height: 100vh;
  background: #fbfaff;
  color: #242039;
  font-family: Inter, "Segoe UI", Arial, sans-serif;
}

/* Encabezado */

.encabezado {
  min-height: 82px;
  padding: 0 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  background: #ffffff;
  border-bottom: 1px solid #efedf5;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  text-decoration: none;
  color: #25164d;
  flex-shrink: 0;
}

.logo-icono {
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, #7b45e8, #4d20a7);
  color: #ffffff;
  font-size: 23px;
  font-weight: 800;
}

.logo-texto {
  font-size: 16px;
  font-weight: 850;
  letter-spacing: 0.5px;
}

.logo-texto span {
  color: #8250d9;
}

.navegacion {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 29px;
}

.navegacion a {
  color: #6d687b;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.navegacion a:hover,
.navegacion a.activo {
  color: #7742d4;
}

.navegacion a.activo {
  position: relative;
}

.navegacion a.activo::after {
  content: "";
  position: absolute;
  height: 2px;
  left: 0;
  right: 0;
  bottom: -10px;
  background: #8752e6;
  border-radius: 5px;
}

.boton-contacto {
  padding: 12px 17px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #7541d2;
  color: #ffffff;
  border-radius: 9px;
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s ease;
}

.boton-contacto:hover {
  background: #5b2ab2;
}

/* Hero */

.hero {
  position: relative;
  min-height: 370px;
  padding: 64px 10%;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  overflow: hidden;
  background:
    radial-gradient(
      circle at 83% 30%,
      rgba(170, 130, 255, 0.2),
      transparent 28%
    ),
    linear-gradient(115deg, #211341 0%, #392064 58%, #4f2b82 100%);
  color: #ffffff;
}

.hero-contenido {
  position: relative;
  z-index: 2;
  max-width: 610px;
}

.etiqueta {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 20px;
  color: #d6c1ff;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.punto {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #c6a3ff;
  box-shadow: 0 0 12px rgba(198, 163, 255, 0.7);
}

.hero h1 {
  margin: 0;
  font-size: clamp(38px, 5vw, 57px);
  line-height: 1.12;
  font-weight: 800;
  letter-spacing: -2px;
}

.hero h1 span {
  color: #c3a0ff;
}

.hero-contenido > p {
  max-width: 500px;
  margin: 20px 0 0;
  color: #d6cfe5;
  font-size: 14px;
  line-height: 1.9;
}

.hero-detalles {
  display: flex;
  flex-wrap: wrap;
  gap: 17px;
  margin-top: 27px;
}

.detalle {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #e5def3;
  font-size: 11px;
}

.detalle-icono {
  width: 19px;
  height: 19px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(190, 155, 255, 0.18);
  color: #d1b6ff;
  font-size: 11px;
  font-weight: 800;
}

.hero-decoracion {
  position: relative;
  min-height: 245px;
  display: grid;
  place-items: center;
}

.circulo {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(214, 190, 255, 0.25);
}

.circulo-grande {
  width: 255px;
  height: 255px;
  background: rgba(177, 132, 255, 0.06);
}

.circulo-mediano {
  width: 190px;
  height: 190px;
  background: rgba(177, 132, 255, 0.08);
}

.circulo-pequeno {
  width: 125px;
  height: 125px;
  background: linear-gradient(
    145deg,
    rgba(190, 151, 255, 0.65),
    rgba(111, 64, 186, 0.3)
  );
  box-shadow: 0 0 60px rgba(168, 118, 255, 0.15);
}

.hero-inicial {
  position: relative;
  z-index: 1;
  color: rgba(255, 255, 255, 0.94);
  font-size: 91px;
  font-weight: 900;
  text-shadow: 0 8px 25px rgba(20, 8, 42, 0.2);
}

.tarjeta-flotante {
  position: absolute;
  z-index: 2;
  right: 0;
  bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 19px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 13px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  box-shadow: 0 14px 40px rgba(12, 5, 32, 0.16);
}

.tarjeta-icono {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: #c1a0ff;
  color: #392064;
  font-size: 22px;
}

.tarjeta-flotante strong {
  font-size: 12px;
}

.tarjeta-flotante p {
  margin: 5px 0 0;
  color: #e2d8f2;
  font-size: 10px;
}

/* Formulario */

.seccion-formulario {
  width: min(100% - 40px, 1000px);
  margin: 0 auto;
  padding: 65px 0 80px;
}

.introduccion-formulario {
  max-width: 650px;
  margin-bottom: 33px;
}

.subtitulo {
  color: #8953dc;
  font-size: 10px;
  font-weight: 850;
  letter-spacing: 2px;
}

.introduccion-formulario h2 {
  margin: 12px 0;
  color: #271747;
  font-size: clamp(27px, 4vw, 35px);
  font-weight: 800;
  letter-spacing: -1px;
}

.introduccion-formulario > p {
  margin: 0;
  color: #777184;
  font-size: 13px;
  line-height: 1.9;
}

.nota {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 19px;
  color: #7b748b;
  font-size: 11px;
}

.nota-icono {
  width: 17px;
  height: 17px;
  display: grid;
  place-items: center;
  border: 1px solid #a68ad7;
  border-radius: 50%;
  color: #8453cf;
  font-size: 11px;
  font-weight: 800;
}

.formulario {
  padding: 36px;
  border: 1px solid #efebf6;
  border-radius: 17px;
  background: #ffffff;
  box-shadow: 0 15px 55px rgba(55, 31, 94, 0.055);
}

.grupo-seccion {
  width: 100%;
}

.titulo-seccion {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 28px;
}

.numero-seccion {
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: #f1e9ff;
  color: #7741ce;
  font-size: 13px;
  font-weight: 850;
}

.titulo-seccion h3 {
  margin: 0;
  color: #2e2148;
  font-size: 16px;
  font-weight: 800;
}

.titulo-seccion p {
  margin: 6px 0 0;
  color: #8b8498;
  font-size: 11px;
}

.rejilla {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 23px 22px;
}

.campo {
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.campo label {
  margin-bottom: 9px;
  color: #423852;
  font-size: 12px;
  font-weight: 750;
}

.campo input,
.campo select,
.campo textarea {
  width: 100%;
  min-width: 0;
  padding: 13px 14px;
  border: 1px solid #e6e1ee;
  border-radius: 9px;
  outline: none;
  background: #fdfcff;
  color: #342845;
  font-family: inherit;
  font-size: 12px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.campo input,
.campo select {
  min-height: 46px;
}

.campo input::placeholder,
.campo textarea::placeholder {
  color: #aaa4b6;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  border-color: #9563e8;
  background: #ffffff;
  box-shadow: 0 0 0 3px rgba(133, 79, 219, 0.1);
}

.campo select {
  cursor: pointer;
}

.campo textarea {
  min-height: 125px;
  resize: vertical;
  line-height: 1.7;
}

.campo-completo {
  grid-column: 1 / -1;
}

.contador {
  margin-top: 7px;
  color: #a19aaf;
  font-size: 10px;
  text-align: right;
}

.separador {
  height: 1px;
  margin: 35px 0;
  background: #f0edf5;
}

/* Confirmación */

.confirmacion {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 28px 0;
}

.confirmacion input {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  margin: 1px 0 0;
  accent-color: #7943d0;
  cursor: pointer;
}

.confirmacion label {
  color: #746d81;
  font-size: 11px;
  line-height: 1.8;
  cursor: pointer;
}

/* Mensajes */

.mensaje-exito,
.mensaje-error {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  margin: 22px 0;
  padding: 16px;
  border-radius: 10px;
}

.mensaje-exito {
  border: 1px solid #c9ecd7;
  background: #effbf3;
  color: #21643b;
}

.mensaje-error {
  display: block;
  border: 1px solid #f2cccc;
  background: #fff0f0;
  color: #a12626;
}

.mensaje-icono {
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #d0f1da;
  font-weight: 800;
}

.mensaje-exito strong,
.mensaje-error strong {
  font-size: 12px;
}

.mensaje-exito p,
.mensaje-error p {
  margin: 5px 0 0;
  font-size: 11px;
  line-height: 1.7;
}

/* Acciones */

.acciones-formulario {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-top: 8px;
}

.acciones-formulario > p {
  max-width: 360px;
  margin: 0;
  color: #8c8498;
  font-size: 10px;
  line-height: 1.8;
}

.boton-enviar {
  min-width: 210px;
  min-height: 49px;
  padding: 0 19px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border: 0;
  border-radius: 9px;
  background: linear-gradient(115deg, #8250dc, #612db9);
  color: #ffffff;
  font-family: inherit;
  font-size: 12px;
  font-weight: 750;
  cursor: pointer;
  box-shadow: 0 7px 18px rgba(106, 55, 194, 0.2);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.boton-enviar:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(106, 55, 194, 0.3);
}

.boton-enviar strong {
  font-size: 20px;
  font-weight: 500;
}

.boton-enviar:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Pie de página */

.pie-pagina {
  padding: 28px 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  border-top: 1px solid #eeebf4;
  background: #ffffff;
}

.logo-pie .logo-icono {
  width: 33px;
  height: 33px;
  font-size: 19px;
}

.logo-pie .logo-texto {
  font-size: 13px;
}

.pie-pagina > p {
  margin: 0;
  color: #8a8297;
  font-size: 11px;
}

.copyright {
  color: #9a93a6;
  font-size: 10px;
}

/* Adaptación a celulares y tabletas */

@media (max-width: 900px) {
  .encabezado {
    padding: 18px 5%;
    flex-wrap: wrap;
  }

  .navegacion {
    order: 3;
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 10px;
  }

  .navegacion a.activo::after {
    bottom: -5px;
  }

  .hero {
    padding: 52px 7%;
    grid-template-columns: 1fr 0.7fr;
  }

  .hero-decoracion {
    transform: scale(0.85);
  }

  .hero-detalles {
    flex-direction: column;
    gap: 12px;
  }

  .formulario {
    padding: 28px;
  }
}

@media (max-width: 620px) {
  .encabezado {
    gap: 16px;
  }

  .logo-texto {
    font-size: 13px;
  }

  .boton-contacto {
    padding: 10px 12px;
    font-size: 11px;
  }

  .navegacion {
    gap: 15px;
  }

  .navegacion a {
    font-size: 11px;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 48px 7% 25px;
  }

  .hero h1 {
    font-size: 43px;
  }

  .hero-contenido > p {
    font-size: 13px;
  }

  .hero-detalles {
    flex-direction: row;
    gap: 12px;
  }

  .detalle {
    font-size: 10px;
  }

  .hero-decoracion {
    min-height: 205px;
    transform: scale(0.8);
    margin-top: 5px;
  }

  .tarjeta-flotante {
    right: 2%;
  }

  .seccion-formulario {
    width: min(100% - 28px, 1000px);
    padding: 43px 0 50px;
  }

  .introduccion-formulario h2 {
    font-size: 29px;
  }

  .formulario {
    padding: 22px 17px;
    border-radius: 13px;
  }

  .rejilla {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .campo-completo {
    grid-column: auto;
  }

  .titulo-seccion {
    gap: 11px;
  }

  .titulo-seccion h3 {
    font-size: 14px;
  }

  .titulo-seccion p {
    font-size: 10px;
    line-height: 1.6;
  }

  .numero-seccion {
    width: 37px;
    height: 37px;
  }

  .separador {
    margin: 27px 0;
  }

  .acciones-formulario {
    align-items: stretch;
    flex-direction: column;
  }

  .boton-enviar {
    width: 100%;
  }

  .pie-pagina {
    align-items: flex-start;
    flex-direction: column;
    padding: 25px 6%;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
