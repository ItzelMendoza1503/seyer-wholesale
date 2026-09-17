<template>
  <div class="pagina">

    <!-- =========================
         NAVBAR
    ========================== -->
    <header class="navbar">
      <div class="contenedor nav-contenido">

        <NuxtLink to="/" class="logo-area">
          <img
            src="/logo.png"
            alt="Seyer.Wholesale"
            class="logo"
          />

          <div class="nombre-logo">
            <strong>Seyer</strong><span>.Wholesale</span>
          </div>
        </NuxtLink>

        <nav class="menu">
          <NuxtLink to="/">Inicio</NuxtLink>
          <NuxtLink to="/#nosotros">Nosotros</NuxtLink>
          <NuxtLink to="/#galeria">Empresa</NuxtLink>
          <NuxtLink to="/#servicios">Servicios</NuxtLink>

          <NuxtLink
            to="/cotizacion"
            class="activo"
          >
            Cotización
          </NuxtLink>
        </nav>

        <NuxtLink
          to="/"
          class="boton-regresar"
        >
          ← Inicio
        </NuxtLink>

      </div>
    </header>


    <!-- =========================
         ENCABEZADO
    ========================== -->
    <main>

      <section class="encabezado">

        <div class="decoracion decoracion-1"></div>
        <div class="decoracion decoracion-2"></div>

        <div class="contenedor encabezado-contenido">

          <div class="encabezado-texto">

            <p class="etiqueta">
              SEYER.WHOLESALE
            </p>

            <h1>
              Solicita tu
              <span>cotización.</span>
            </h1>

            <p>
              Completa el siguiente formulario con la información
              de lo que deseas cotizar. Nuestro equipo podrá
              conocer tu solicitud y darle seguimiento.
            </p>

          </div>


          <div class="encabezado-logo">

            <img
              src="/logo.png"
              alt="Logo Seyer.Wholesale"
            />

          </div>

        </div>

      </section>


      <!-- =========================
           FORMULARIO
      ========================== -->
      <section class="formulario-seccion">

        <div class="contenedor">

          <div class="formulario-grid">

            <!-- =========================
                 INFORMACIÓN
            ========================== -->
            <aside class="informacion">

              <p class="mini-titulo">
                INFORMACIÓN
              </p>

              <h2>
                Cuéntanos qué
                <span>necesitas.</span>
              </h2>

              <p class="texto-info">
                Proporciona los datos de tu solicitud para que
                podamos conocer el producto, cantidad y
                características que deseas cotizar.
              </p>


              <div class="pasos">

                <!-- PASO 1 -->
                <div class="paso">

                  <div class="numero">
                    01
                  </div>

                  <div>
                    <strong>
                      Tus datos
                    </strong>

                    <p>
                      Información básica de contacto.
                    </p>
                  </div>

                </div>


                <!-- PASO 2 -->
                <div class="paso">

                  <div class="numero">
                    02
                  </div>

                  <div>
                    <strong>
                      Producto o servicio
                    </strong>

                    <p>
                      Indica qué deseas cotizar.
                    </p>
                  </div>

                </div>


                <!-- PASO 3 -->
                <div class="paso">

                  <div class="numero">
                    03
                  </div>

                  <div>
                    <strong>
                      Detalles de la solicitud
                    </strong>

                    <p>
                      Agrega cantidades y características.
                    </p>
                  </div>

                </div>

              </div>

            </aside>


            <!-- =========================
                 FORMULARIO
            ========================== -->
            <div class="formulario">

              <form @submit.prevent="enviarFormulario">


                <!-- DATOS DE CONTACTO -->
                <div class="seccion-form">

                  <div class="titulo-form">

                    <span>
                      01
                    </span>

                    <h3>
                      Datos de contacto
                    </h3>

                  </div>


                  <div class="campos">

                    <div class="campo">

                      <label for="nombre">
                        Nombre completo *
                      </label>

                      <input
                        id="nombre"
                        v-model="formulario.nombre"
                        type="text"
                        placeholder="Escribe tu nombre"
                        required
                      />

                    </div>


                    <div class="campo">

                      <label for="empresa">
                        Empresa
                      </label>

                      <input
                        id="empresa"
                        v-model="formulario.empresa"
                        type="text"
                        placeholder="Nombre de tu empresa"
                      />

                    </div>


                    <div class="campo">

                      <label for="correo">
                        Correo electrónico *
                      </label>

                      <input
                        id="correo"
                        v-model="formulario.correo"
                        type="email"
                        placeholder="ejemplo@correo.com"
                        required
                      />

                    </div>


                    <div class="campo">

                      <label for="telefono">
                        Teléfono *
                      </label>

                      <input
                        id="telefono"
                        v-model="formulario.telefono"
                        type="tel"
                        placeholder="55 0000 0000"
                        required
                      />

                    </div>

                  </div>

                </div>


                <!-- INFORMACIÓN DE COTIZACIÓN -->
                <div class="seccion-form">

                  <div class="titulo-form">

                    <span>
                      02
                    </span>

                    <h3>
                      Información de cotización
                    </h3>

                  </div>


                  <div class="campos">

                    <div class="campo">

                      <label for="servicio">
                        Servicio *
                      </label>

                      <select
                        id="servicio"
                        v-model="formulario.servicio"
                        required
                      >

                        <option
                          value=""
                          disabled
                        >
                          Selecciona una opción
                        </option>

                        <option value="Comercio mayorista">
                          Comercio mayorista
                        </option>

                        <option value="Distribución">
                          Distribución
                        </option>

                        <option value="Logística">
                          Logística
                        </option>

                        <option value="Soluciones comerciales">
                          Soluciones comerciales
                        </option>

                        <option value="Otro">
                          Otro
                        </option>

                      </select>

                    </div>


                    <div class="campo">

                      <label for="producto">
                        Producto
                      </label>

                      <input
                        id="producto"
                        v-model="formulario.producto"
                        type="text"
                        placeholder="Producto de interés"
                      />

                    </div>


                    <div class="campo">

                      <label for="cantidad">
                        Cantidad aproximada
                      </label>

                      <input
                        id="cantidad"
                        v-model="formulario.cantidad"
                        type="number"
                        min="1"
                        placeholder="Ej. 100"
                      />

                    </div>


                    <div class="campo">

                      <label for="fecha">
                        Fecha requerida
                      </label>

                      <input
                        id="fecha"
                        v-model="formulario.fecha"
                        type="date"
                      />

                    </div>

                  </div>

                </div>


                <!-- DETALLES -->
                <div class="seccion-form">

                  <div class="titulo-form">

                    <span>
                      03
                    </span>

                    <h3>
                      Detalles de la solicitud
                    </h3>

                  </div>


                  <div class="campo">

                    <label for="mensaje">
                      Información adicional
                    </label>

                    <textarea
                      id="mensaje"
                      v-model="formulario.mensaje"
                      rows="6"
                      placeholder="Escribe aquí las características, cantidades, especificaciones o cualquier detalle que quieras agregar..."
                    ></textarea>

                  </div>

                </div>


                <!-- CONFIRMACIÓN -->
                <div class="terminos">

                  <label>

                    <input
                      v-model="formulario.acepta"
                      type="checkbox"
                      required
                    />

                    <span>
                      Confirmo que la información proporcionada
                      es correcta.
                    </span>

                  </label>

                </div>


                <!-- BOTÓN -->
                <button
                  type="submit"
                  class="boton-enviar"
                >

                  <span>
                    Enviar solicitud
                  </span>

                  <strong>
                    →
                  </strong>

                </button>


                <!-- MENSAJE -->
                <div
                  v-if="enviado"
                  class="mensaje-exito"
                >
                  ✓ Tu solicitud de cotización ha sido
                  preparada correctamente.
                </div>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>


    <!-- =========================
         FOOTER
    ========================== -->
    <footer>

      <div class="contenedor footer-contenido">

        <div class="footer-marca">

          <img
            src="/logo.png"
            alt="Seyer.Wholesale"
          />

          <div>

            <h3>
              Seyer<span>.Wholesale</span>
            </h3>

            <p>
              Conectando productos, oportunidades y soluciones
              comerciales.
            </p>

          </div>

        </div>


        <div class="footer-links">

          <NuxtLink to="/">
            ← Volver al inicio
          </NuxtLink>

        </div>

      </div>


      <div class="footer-final">

        <div class="contenedor">
          © 2026 Seyer.Wholesale
        </div>

      </div>

    </footer>

  </div>
</template>


<script setup>

import { reactive, ref } from 'vue'


/* =========================
   ESTADO
========================= */

const enviado = ref(false)


/* =========================
   FORMULARIO
========================= */

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


/* =========================
   ENVIAR
========================= */

function enviarFormulario() {

  enviado.value = true

  console.log(
    'Solicitud de cotización:',
    formulario
  )

}

</script>


<style scoped>

/* =====================================================
   GENERAL
===================================================== */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.pagina {

  min-height: 100vh;

  background: #f8f4fb;

  color: #281332;

  font-family:
    Arial,
    Helvetica,
    sans-serif;

}

.contenedor {

  width: min(1180px, 90%);

  margin: 0 auto;

}


/* =====================================================
   NAVBAR
===================================================== */

.navbar {

  position: sticky;

  top: 0;

  z-index: 1000;

  background:
    rgba(255, 255, 255, 0.97);

  border-bottom:
    1px solid #e9e0ef;

  backdrop-filter:
    blur(12px);

}

.nav-contenido {

  min-height: 82px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 25px;

}


/* =====================================================
   LOGO
===================================================== */

.logo-area {

  display: flex;

  align-items: center;

  gap: 10px;

  text-decoration: none;

  color: #32124d;

  white-space: nowrap;

}

.logo {

  width: 55px;

  height: 55px;

  object-fit: contain;

}

.nombre-logo {

  font-size: 20px;

  font-weight: 800;

}

.nombre-logo span {

  color: #8b45c6;

}


/* =====================================================
   MENÚ
===================================================== */

.menu {

  display: flex;

  align-items: center;

  gap: 25px;

}

.menu a {

  color: #5c5364;

  text-decoration: none;

  font-size: 14px;

  font-weight: 600;

  transition: 0.3s;

}

.menu a:hover {

  color: #7432a7;

}

.menu .activo {

  color: #7432a7;

}


/* =====================================================
   BOTÓN INICIO
===================================================== */

.boton-regresar {

  padding: 12px 18px;

  color: #6f2da8;

  border:
    1px solid #cdb2db;

  border-radius: 9px;

  text-decoration: none;

  font-size: 13px;

  font-weight: bold;

  transition: 0.3s;

}

.boton-regresar:hover {

  background: #6f2da8;

  color: white;

}


/* =====================================================
   ENCABEZADO
===================================================== */

.encabezado {

  position: relative;

  overflow: hidden;

  background:
    linear-gradient(
      135deg,
      #321343,
      #71329b
    );

  color: white;

}

.decoracion {

  position: absolute;

  border-radius: 50%;

  pointer-events: none;

}

.decoracion-1 {

  width: 450px;

  height: 450px;

  right: -150px;

  top: -230px;

  background:
    rgba(255, 255, 255, 0.08);

}

.decoracion-2 {

  width: 250px;

  height: 250px;

  left: -100px;

  bottom: -150px;

  background:
    rgba(255, 255, 255, 0.06);

}

.encabezado-contenido {

  position: relative;

  z-index: 2;

  min-height: 400px;

  display: grid;

  grid-template-columns:
    1.2fr 0.8fr;

  align-items: center;

  gap: 60px;

  padding: 70px 0;

}


/* =====================================================
   TEXTO DEL ENCABEZADO
===================================================== */

.encabezado-texto {

  max-width: 650px;

}

.etiqueta {

  color: #dec6eb;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 2px;

  margin-bottom: 18px;

}

.encabezado h1 {

  margin: 0;

  font-size:
    clamp(45px, 6vw, 70px);

  line-height: 1.02;

  letter-spacing: -2px;

}

.encabezado h1 span {

  color: #d6b0e8;

}

.encabezado-texto > p:last-child {

  max-width: 570px;

  color: #eadff0;

  font-size: 16px;

  line-height: 1.7;

  margin-top: 25px;

}


/* =====================================================
   LOGO ENCABEZADO
===================================================== */

.encabezado-logo {

  display: flex;

  justify-content: center;

  align-items: center;

}

.encabezado-logo img {

  width: min(340px, 90%);

  height: auto;

  object-fit: contain;

  filter:
    drop-shadow(
      0 20px 30px
      rgba(0, 0, 0, 0.20)
    );

}


/* =====================================================
   FORMULARIO
===================================================== */

.formulario-seccion {

  padding: 100px 0;

  background: #f8f4fb;

}

.formulario-grid {

  display: grid;

  grid-template-columns:
    0.7fr 1.3fr;

  gap: 70px;

  align-items: start;

}


/* =====================================================
   INFORMACIÓN
===================================================== */

.informacion {

  position: sticky;

  top: 110px;

}

.mini-titulo {

  color: #7935aa;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 2px;

  margin-bottom: 18px;

}

.informacion h2 {

  color: #281332;

  font-size:
    clamp(32px, 4vw, 46px);

  line-height: 1.1;

  margin: 0 0 20px;

}

.informacion h2 span {

  color: #7935aa;

}

.texto-info {

  color: #706678;

  line-height: 1.7;

  font-size: 15px;

}


/* =====================================================
   PASOS
===================================================== */

.pasos {

  margin-top: 45px;

  display: flex;

  flex-direction: column;

  gap: 25px;

}

.paso {

  display: flex;

  gap: 18px;

  align-items: flex-start;

}

.paso .numero {

  min-width: 52px;

  height: 52px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: #e8d8f0;

  color: #71329b;

  font-size: 12px;

  font-weight: bold;

}

.paso strong {

  display: block;

  color: #38203f;

  margin-bottom: 5px;

}

.paso p {

  margin: 0;

  color: #82768a;

  font-size: 13px;

  line-height: 1.5;

}


/* =====================================================
   CAJA FORMULARIO
===================================================== */

.formulario {

  background: white;

  border-radius: 24px;

  padding: 45px;

  box-shadow:
    0 20px 55px
    rgba(65, 28, 85, 0.08);

}


/* =====================================================
   SECCIONES
===================================================== */

.seccion-form {

  padding-bottom: 35px;

  margin-bottom: 35px;

  border-bottom:
    1px solid #eee6f2;

}

.seccion-form:last-of-type {

  border-bottom: none;

  margin-bottom: 10px;

}


/* =====================================================
   TÍTULOS
===================================================== */

.titulo-form {

  display: flex;

  align-items: center;

  gap: 15px;

  margin-bottom: 25px;

}

.titulo-form span {

  color: #7935aa;

  font-size: 12px;

  font-weight: 800;

}

.titulo-form h3 {

  margin: 0;

  color: #32183e;

  font-size: 21px;

}


/* =====================================================
   CAMPOS
===================================================== */

.campos {

  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 20px;

}

.campo {

  display: flex;

  flex-direction: column;

  gap: 8px;

}

.campo label {

  color: #493950;

  font-size: 13px;

  font-weight: 700;

}

.campo input,
.campo select,
.campo textarea {

  width: 100%;

  border:
    1px solid #ded3e4;

  border-radius: 9px;

  background: #fcfaff;

  color: #34213d;

  padding: 14px;

  font-family: inherit;

  font-size: 14px;

  outline: none;

  transition: 0.3s;

}

.campo input,
.campo select {

  height: 48px;

}

.campo textarea {

  resize: vertical;

  min-height: 130px;

}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {

  border-color: #7a35a6;

  background: white;

  box-shadow:
    0 0 0 3px
    rgba(111, 45, 168, 0.08);

}

.campo input::placeholder,
.campo textarea::placeholder {

  color: #a69cab;

}


/* =====================================================
   CHECKBOX
===================================================== */

.terminos {

  margin: 25px 0;

}

.terminos label {

  display: flex;

  align-items: flex-start;

  gap: 10px;

  color: #756a7b;

  font-size: 13px;

  line-height: 1.5;

  cursor: pointer;

}

.terminos input {

  margin-top: 3px;

  accent-color: #6f2da8;

}


/* =====================================================
   BOTÓN
===================================================== */

.boton-enviar {

  width: 100%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  padding: 17px 22px;

  border: none;

  border-radius: 10px;

  background:
    linear-gradient(
      135deg,
      #6f2da8,
      #873db8
    );

  color: white;

  font-family: inherit;

  font-size: 14px;

  font-weight: 700;

  cursor: pointer;

  transition: 0.3s;

}

.boton-enviar:hover {

  transform: translateY(-3px);

  box-shadow:
    0 12px 25px
    rgba(111, 45, 168, 0.25);

}

.boton-enviar strong {

  font-size: 21px;

}


/* =====================================================
   MENSAJE
===================================================== */

.mensaje-exito {

  margin-top: 20px;

  padding: 15px;

  border-radius: 9px;

  background: #eee2f5;

  color: #5c2879;

  font-size: 13px;

  text-align: center;

  font-weight: 600;

}


/* =====================================================
   FOOTER
===================================================== */

footer {

  color: white;

  background: #1d1025;

}

.footer-contenido {

  min-height: 180px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

}


/* MARCA */

.footer-marca {

  display: flex;

  align-items: center;

  gap: 15px;

}

.footer-marca img {

  width: 65px;

  height: 65px;

  object-fit: contain;

}

.footer-marca h3 {

  margin: 0 0 8px;

  font-size: 20px;

}

.footer-marca h3 span {

  color: #a45bd0;

}

.footer-marca p {

  margin: 0;

  color: #a99eaf;

  font-size: 13px;

}


/* LINKS */

.footer-links a {

  color: #d0aee0;

  text-decoration: none;

  font-size: 13px;

  font-weight: bold;

}

.footer-links a:hover {

  color: white;

}


/* FOOTER FINAL */

.footer-final {

  padding: 18px 0;

  border-top:
    1px solid #35283b;

  color: #817787;

  font-size: 12px;

}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 1000px) {

  .menu {
    display: none;
  }

  .encabezado-contenido {

    grid-template-columns: 1fr;

    text-align: center;

  }

  .encabezado-texto {

    margin: 0 auto;

  }

  .encabezado-texto > p:last-child {

    margin-left: auto;

    margin-right: auto;

  }

  .encabezado-logo {

    min-height: 260px;

  }

  .formulario-grid {

    grid-template-columns: 1fr;

    gap: 40px;

  }

  .informacion {

    position: static;

  }

}


/* =====================================================
   CELULAR
===================================================== */

@media (max-width: 600px) {

  .nav-contenido {

    min-height: 70px;

  }

  .logo {

    width: 43px;

    height: 43px;

  }

  .nombre-logo {

    font-size: 17px;

  }

  .boton-regresar {

    padding: 9px 12px;

    font-size: 11px;

  }


  /* ENCABEZADO */

  .encabezado-contenido {

    padding: 55px 0;

  }

  .encabezado h1 {

    font-size: 43px;

  }

  .encabezado-texto > p:last-child {

    font-size: 14px;

  }

  .encabezado-logo img {

    width: 270px;

  }


  /* FORMULARIO */

  .formulario-seccion {

    padding: 60px 0;

  }

  .formulario {

    padding: 25px 20px;

    border-radius: 18px;

  }

  .campos {

    grid-template-columns: 1fr;

  }


  /* FOOTER */

  .footer-contenido {

    padding: 40px 0;

    flex-direction: column;

    align-items: flex-start;

  }

}

</style>