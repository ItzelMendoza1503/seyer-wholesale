<template>
  <div class="quote-page">

    <!-- ENCABEZADO -->
    <header class="header">
      <div class="container header-content">

        <NuxtLink to="/" class="logo">
          Seyer<span>.Wholesale</span>
        </NuxtLink>

        <NuxtLink to="/" class="back-link">
          ← Regresar al inicio
        </NuxtLink>

      </div>
    </header>

    <!-- CONTENIDO PRINCIPAL -->
    <main>

      <!-- INTRODUCCIÓN -->
      <section class="intro">
        <div class="container">

          <p class="eyebrow">
            SOLICITUD DE COTIZACIÓN
          </p>

          <h1>
            Solicita una cotización
          </h1>

          <p class="intro-text">
            Cuéntanos sobre tu operación y las necesidades de tu
            empresa. Completa la información y nuestro equipo podrá
            revisar tu solicitud.
          </p>

        </div>
      </section>


      <!-- FORMULARIO -->
      <section class="form-area">
        <div class="container">

          <form
            class="quote-form"
            @submit.prevent="enviarSolicitud"
          >

            <!-- DATOS DE CONTACTO -->
            <div class="form-block">

              <div class="block-heading">
                <span class="number">01</span>

                <div>
                  <h2>Información de contacto</h2>

                  <p>
                    Necesitamos algunos datos para poder comunicarnos
                    contigo.
                  </p>
                </div>
              </div>


              <div class="fields">

                <!-- NOMBRE -->
                <div class="field">
                  <label for="nombre">
                    Nombre completo
                    <span>*</span>
                  </label>

                  <input
                    id="nombre"
                    v-model="form.nombre"
                    type="text"
                    placeholder="Escribe tu nombre"
                    required
                  />
                </div>


                <!-- CORREO -->
                <div class="field">
                  <label for="correo">
                    Correo electrónico
                    <span>*</span>
                  </label>

                  <input
                    id="correo"
                    v-model="form.correo"
                    type="email"
                    placeholder="nombre@empresa.com"
                    required
                  />
                </div>


                <!-- EMPRESA -->
                <div class="field">
                  <label for="empresa">
                    Empresa
                  </label>

                  <input
                    id="empresa"
                    v-model="form.empresa"
                    type="text"
                    placeholder="Nombre de tu empresa"
                  />
                </div>


                <!-- TELEFONO -->
                <div class="field">
                  <label for="telefono">
                    Teléfono
                  </label>

                  <input
                    id="telefono"
                    v-model="form.telefono"
                    type="tel"
                    placeholder="Número de contacto"
                  />
                </div>

              </div>

            </div>


            <!-- DETALLES DE OPERACIÓN -->
            <div class="form-block">

              <div class="block-heading">
                <span class="number">02</span>

                <div>
                  <h2>Detalles de la operación</h2>

                  <p>
                    Proporciona información sobre el servicio que
                    necesitas.
                  </p>
                </div>
              </div>


              <div class="fields">

                <!-- SERVICIO -->
                <div class="field full">
                  <label for="servicio">
                    Tipo de servicio
                    <span>*</span>
                  </label>

                  <select
                    id="servicio"
                    v-model="form.servicio"
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      Selecciona un servicio
                    </option>

                    <option value="Comercio exterior">
                      Comercio exterior
                    </option>

                    <option value="Logística">
                      Logística
                    </option>

                    <option value="Servicios aduanales">
                      Servicios aduanales
                    </option>

                    <option value="Transporte">
                      Transporte
                    </option>

                    <option value="Almacenaje">
                      Almacenaje
                    </option>

                    <option value="Otro">
                      Otro
                    </option>

                  </select>
                </div>


                <!-- ORIGEN -->
                <div class="field">

                  <label for="origen">
                    Origen
                    <span>*</span>
                  </label>

                  <input
                    id="origen"
                    v-model="form.origen"
                    type="text"
                    placeholder="Ciudad / País"
                    required
                  />

                </div>


                <!-- DESTINO -->
                <div class="field">

                  <label for="destino">
                    Destino
                    <span>*</span>
                  </label>

                  <input
                    id="destino"
                    v-model="form.destino"
                    type="text"
                    placeholder="Ciudad / País"
                    required
                  />

                </div>


                <!-- MERCANCÍA -->
                <div class="field full">

                  <label for="mercancia">
                    Descripción de la mercancía
                    <span>*</span>
                  </label>

                  <textarea
                    id="mercancia"
                    v-model="form.mercancia"
                    rows="6"
                    placeholder="Describe brevemente la mercancía, cantidad, características o cualquier información que consideres importante..."
                    required
                  ></textarea>

                </div>

              </div>

            </div>


            <!-- ENVÍO -->
            <div class="form-submit">

              <div class="required-info">
                <span>*</span>
                Campos obligatorios
              </div>

              <button
                type="submit"
                class="submit-button"
              >
                Enviar solicitud
                <span>→</span>
              </button>

            </div>


            <!-- MENSAJE -->
            <div
              v-if="mensaje"
              class="success-message"
            >
              <strong>Solicitud registrada</strong>

              <p>
                {{ mensaje }}
              </p>
            </div>

          </form>

        </div>
      </section>

    </main>


    <!-- FOOTER -->
    <footer>
      <div class="container footer-content">

        <div class="footer-brand">
          <div class="logo">
            Seyer<span>.Wholesale</span>
          </div>

          <p>
            Comercio exterior y soluciones logísticas.
          </p>
        </div>

        <p class="copyright">
          © 2026 Seyer.Wholesale
        </p>

      </div>
    </footer>

  </div>
</template>


<script setup lang="ts">

const form = ref({
  nombre: '',
  correo: '',
  empresa: '',
  telefono: '',
  servicio: '',
  origen: '',
  destino: '',
  mercancia: ''
})

const mensaje = ref('')

const enviarSolicitud = () => {

  console.log('Solicitud enviada:', form.value)

  mensaje.value =
    'Gracias por compartir la información. Tu solicitud ha sido recibida.'

}

</script>


<style scoped>

/* =========================
   GENERAL
========================= */

* {
  box-sizing: border-box;
}

.quote-page {
  min-height: 100vh;
  background: #f5f6f8;
  color: #172033;
}

.container {
  width: min(1080px, 90%);
  margin: 0 auto;
}


/* =========================
   HEADER
========================= */

.header {
  height: 78px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

.header-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 21px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.logo span {
  font-weight: 400;
}

.back-link {
  color: #667085;
  font-size: 14px;
  transition: 0.2s;
}

.back-link:hover {
  color: #172033;
}


/* =========================
   INTRO
========================= */

.intro {
  padding: 85px 0 60px;
  background: #ffffff;
}

.eyebrow {
  margin-bottom: 18px;

  color: #667085;

  font-size: 12px;
  font-weight: 700;

  letter-spacing: 2px;
}

.intro h1 {
  max-width: 750px;

  margin: 0 0 22px;

  font-size: clamp(42px, 6vw, 64px);

  line-height: 1.05;

  letter-spacing: -2px;
}

.intro-text {
  max-width: 650px;

  color: #667085;

  font-size: 17px;

  line-height: 1.75;
}


/* =========================
   FORM AREA
========================= */

.form-area {
  padding: 65px 0 100px;
}

.quote-form {
  background: #ffffff;

  border: 1px solid #e4e7ec;

  border-radius: 12px;

  overflow: hidden;
}


/* =========================
   FORM BLOCK
========================= */

.form-block {
  padding: 45px;

  border-bottom: 1px solid #e4e7ec;
}

.block-heading {
  display: flex;

  gap: 18px;

  margin-bottom: 35px;
}

.number {
  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  width: 36px;
  height: 36px;

  border-radius: 50%;

  background: #172033;

  color: #ffffff;

  font-size: 12px;
  font-weight: 700;
}

.block-heading h2 {
  margin: 0 0 7px;

  font-size: 21px;
}

.block-heading p {
  margin: 0;

  color: #7b8494;

  font-size: 14px;

  line-height: 1.5;
}


/* =========================
   CAMPOS
========================= */

.fields {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 26px;
}

.field {
  display: flex;

  flex-direction: column;

  gap: 9px;
}

.field.full {
  grid-column: 1 / -1;
}

label {
  color: #344054;

  font-size: 14px;

  font-weight: 600;
}

label span {
  color: #667085;
}

input,
select,
textarea {
  width: 100%;

  padding: 14px 15px;

  border: 1px solid #d0d5dd;

  border-radius: 7px;

  background: #ffffff;

  color: #172033;

  font-family: inherit;

  font-size: 14px;

  outline: none;

  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

input::placeholder,
textarea::placeholder {
  color: #98a2b3;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #172033;

  box-shadow: 0 0 0 3px rgba(23, 32, 51, 0.08);
}

textarea {
  resize: vertical;

  min-height: 145px;
}


/* =========================
   BOTÓN
========================= */

.form-submit {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 25px;

  padding: 30px 45px;

  background: #fafafa;
}

.required-info {
  color: #7b8494;

  font-size: 13px;
}

.required-info span {
  color: #172033;
}

.submit-button {
  display: flex;

  align-items: center;

  gap: 18px;

  padding: 15px 24px;

  border: none;

  border-radius: 7px;

  background: #172033;

  color: #ffffff;

  font-family: inherit;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  transition:
    transform 0.2s,
    background 0.2s;
}

.submit-button span {
  font-size: 18px;
}

.submit-button:hover {
  background: #28344d;

  transform: translateY(-1px);
}


/* =========================
   MENSAJE
========================= */

.success-message {
  margin: 25px 45px 35px;

  padding: 18px 20px;

  border: 1px solid #d9dee7;

  border-radius: 7px;

  background: #f7f8fa;
}

.success-message strong {
  font-size: 14px;
}

.success-message p {
  margin-top: 5px;

  color: #667085;

  font-size: 14px;
}


/* =========================
   FOOTER
========================= */

footer {
  background: #101827;

  color: #ffffff;

  padding: 45px 0;
}

.footer-content {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;
}

.footer-brand p {
  margin-top: 10px;

  color: #98a2b3;

  font-size: 13px;
}

.copyright {
  color: #98a2b3;

  font-size: 13px;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 700px) {

  .intro {
    padding: 65px 0 45px;
  }

  .form-block {
    padding: 30px 25px;
  }

  .fields {
    grid-template-columns: 1fr;
  }

  .field.full {
    grid-column: auto;
  }

  .form-submit {
    flex-direction: column;

    align-items: stretch;

    padding: 25px;
  }

  .submit-button {
    justify-content: center;
  }

  .footer-content {
    flex-direction: column;

    align-items: flex-start;
  }

}

</style>