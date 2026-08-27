<template>
  <div>

    <!-- =========================
         BARRA DE NAVEGACIÓN
    ========================== -->

    <header class="navbar">
      <div class="container navbar-content">

        <NuxtLink to="/" class="logo">
          Seyer<span>.Wholesale</span>
        </NuxtLink>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <NuxtLink
          to="/cotizacion"
          class="btn-cotizacion"
        >
          Solicitar cotización
        </NuxtLink>

      </div>
    </header>


    <!-- =========================
         CONTENIDO PRINCIPAL
    ========================== -->

    <main>

      <!-- =========================
           INICIO
      ========================== -->

      <section
        id="inicio"
        class="hero"
      >

        <div class="container hero-content">

          <div class="hero-text">

            <p class="subtitle">
              COMERCIO EXTERIOR Y LOGÍSTICA
            </p>

            <h1>
              Soluciones para tus
              <span>operaciones comerciales</span>
            </h1>

            <p class="description">
              Brindamos soluciones integrales en comercio exterior,
              logística y servicios aduanales para facilitar las
              operaciones de nuestros clientes.
            </p>

            <div class="hero-buttons">

              <NuxtLink
                to="/cotizacion"
                class="btn-primary"
              >
                Solicitar cotización
              </NuxtLink>

              <a
                href="#servicios"
                class="btn-secondary"
              >
                Conocer servicios
              </a>

            </div>

          </div>

        </div>

      </section>


      <!-- =========================
           NOSOTROS
      ========================== -->

      <section
        id="nosotros"
        class="section about-section"
      >

        <div class="container about-content">

          <div class="about-text">

            <p class="section-label">
              NOSOTROS
            </p>

            <h2>
              Una solución profesional
              para tus operaciones
            </h2>

            <p class="section-text">
              Seyer.Wholesale ofrece soluciones integrales en comercio
              exterior y logística, proporcionando atención personalizada,
              calidad en el servicio y compromiso con las necesidades de
              sus clientes.
            </p>

            <p class="section-text">
              Nuestro objetivo es facilitar las operaciones comerciales
              mediante soluciones eficientes y una atención cercana a
              nuestros clientes.
            </p>

          </div>


          <!-- ESPACIO PARA IMAGEN -->

          <div class="about-image">

            <span>
              IMAGEN DE SEYER.WHOLESALE
            </span>

            <small>
              Espacio reservado para imagen corporativa
            </small>

          </div>

        </div>

      </section>


      <!-- =========================
           SERVICIOS
      ========================== -->

      <section
        id="servicios"
        class="section services-section"
      >

        <div class="container">

          <p class="section-label">
            NUESTROS SERVICIOS
          </p>

          <h2>
            Soluciones integrales
          </h2>


          <div class="services-grid">

            <!-- SERVICIO 1 -->

            <article class="service-card">

              <div class="service-icon">
                01
              </div>

              <h3>
                Comercio exterior
              </h3>

              <p>
                Asesoría especializada para operaciones de
                importación y exportación de mercancías.
              </p>

            </article>


            <!-- SERVICIO 2 -->

            <article class="service-card">

              <div class="service-icon">
                02
              </div>

              <h3>
                Logística
              </h3>

              <p>
                Soluciones para facilitar el transporte,
                distribución y control de las operaciones.
              </p>

            </article>


            <!-- SERVICIO 3 -->

            <article class="service-card">

              <div class="service-icon">
                03
              </div>

              <h3>
                Servicios aduanales
              </h3>

              <p>
                Atención y asesoría especializada para procesos
                relacionados con operaciones aduanales.
              </p>

            </article>


            <!-- SERVICIO 4 -->

            <article class="service-card">

              <div class="service-icon">
                04
              </div>

              <h3>
                Almacenaje
              </h3>

              <p>
                Soluciones de almacenamiento como parte de una
                gestión logística integral.
              </p>

            </article>

          </div>

        </div>

      </section>


      <!-- =========================
           COTIZACIÓN
      ========================== -->

      <section
        id="cotizacion"
        class="quote-section"
      >

        <div class="container quote-content">

          <div>

            <p class="section-label">
              COTIZACIONES
            </p>

            <h2>
              ¿Necesitas una cotización?
            </h2>

            <p>
              Registra tu solicitud y proporciona la información
              necesaria para que nuestro equipo pueda atenderte.
            </p>

          </div>


          <NuxtLink
            to="/cotizacion"
            class="btn-primary quote-button"
          >
            Solicitar cotización
          </NuxtLink>

        </div>

      </section>


      <!-- =========================
           CONTACTO
      ========================== -->

      <section
        id="contacto"
        class="section contact-section"
      >

        <div class="container">

          <p class="section-label">
            CONTACTO
          </p>

          <h2>
            Estamos para ayudarte
          </h2>

          <p class="section-text">
            Ponte en contacto con Seyer.Wholesale para conocer más
            sobre nuestros servicios y soluciones.
          </p>


          <div class="contact-placeholder">

            <div class="contact-item">
              <span class="contact-number">
                01
              </span>

              <div>
                <h3>
                  Atención personalizada
                </h3>

                <p>
                  Nuestro equipo está disponible para atender
                  tus necesidades comerciales.
                </p>
              </div>
            </div>


            <div class="contact-item">
              <span class="contact-number">
                02
              </span>

              <div>
                <h3>
                  Solicita información
                </h3>

                <p>
                  Puedes solicitar una cotización a través de
                  nuestro formulario.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

    </main>


    <!-- =========================
         FOOTER
    ========================== -->

    <footer>

      <div class="container footer-content">

        <div>

          <div class="logo footer-logo">
            Seyer<span>.Wholesale</span>
          </div>

          <p>
            Comercio exterior, logística y servicios aduanales.
          </p>

        </div>

        <div class="footer-right">

          <NuxtLink to="/cotizacion">
            Solicitar cotización
          </NuxtLink>

          <p>
            © 2026 Seyer.Wholesale.
            Todos los derechos reservados.
          </p>

        </div>

      </div>

    </footer>

  </div>
</template>


<style>

/* =========================
   CONFIGURACIÓN GENERAL
========================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    Arial,
    Helvetica,
    sans-serif;

  color: #172033;
  background: #ffffff;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  width: min(1120px, 90%);
  margin: 0 auto;
}


/* =========================
   NAVBAR
========================= */

.navbar {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  z-index: 100;

  background:
    rgba(255, 255, 255, 0.96);

  border-bottom:
    1px solid #e8ebf0;
}

.navbar-content {
  min-height: 76px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;
}

.logo {
  font-size: 22px;

  font-weight: 800;

  letter-spacing: -0.5px;
}

.logo span {
  font-weight: 400;
}

nav {
  display: flex;

  gap: 28px;

  font-size: 14px;
}

nav a {
  color: #4c566a;

  transition:
    color 0.2s;
}

nav a:hover {
  color: #111827;
}


/* =========================
   BOTONES
========================= */

.btn-cotizacion,
.btn-primary {
  display: inline-block;

  background: #172033;

  color: #ffffff;

  padding: 13px 22px;

  border-radius: 6px;

  font-size: 14px;

  border: none;

  cursor: pointer;

  transition:
    background 0.2s,
    transform 0.2s;
}

.btn-cotizacion:hover,
.btn-primary:hover {
  background: #28344d;

  transform: translateY(-1px);
}

.btn-secondary {
  display: inline-block;

  padding: 13px 22px;

  border:
    1px solid #cbd2dc;

  border-radius: 6px;

  font-size: 14px;

  transition:
    background 0.2s;
}

.btn-secondary:hover {
  background: #ffffff;
}


/* =========================
   HERO
========================= */

.hero {
  min-height: 720px;

  display: flex;

  align-items: center;

  background: #f3f6f9;

  padding-top: 76px;
}

.hero-content {
  display: flex;

  align-items: center;
}

.hero-text {
  max-width: 720px;
}

.subtitle,
.section-label {
  font-size: 13px;

  font-weight: 700;

  letter-spacing: 2px;

  color: #64748b;

  margin-bottom: 18px;
}

.hero h1 {
  font-size:
    clamp(45px, 6vw, 72px);

  line-height: 1.05;

  letter-spacing: -2px;

  margin-bottom: 28px;
}

.hero h1 span {
  display: block;

  font-weight: 400;
}

.description {
  max-width: 620px;

  font-size: 18px;

  line-height: 1.7;

  color: #5b6475;

  margin-bottom: 34px;
}

.hero-buttons {
  display: flex;

  gap: 14px;
}


/* =========================
   SECCIONES
========================= */

.section {
  padding: 110px 0;
}

.section h2,
.quote-section h2 {
  font-size:
    clamp(34px, 4vw, 52px);

  line-height: 1.1;

  max-width: 700px;

  margin-bottom: 25px;
}

.section-text {
  max-width: 720px;

  color: #606b7d;

  line-height: 1.8;

  font-size: 17px;
}


/* =========================
   NOSOTROS
========================= */

.about-section {
  background: #ffffff;
}

.about-content {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 70px;

  align-items: center;
}

.about-text {
  max-width: 600px;
}

.about-text .section-text + .section-text {
  margin-top: 18px;
}

.about-image {
  min-height: 380px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  padding: 40px;

  border:
    1px dashed #cbd2dc;

  border-radius: 10px;

  background: #f7f8fa;

  text-align: center;
}

.about-image span {
  color: #64748b;

  font-size: 14px;

  font-weight: 700;

  letter-spacing: 1px;
}

.about-image small {
  margin-top: 10px;

  color: #98a2b3;

  font-size: 13px;
}


/* =========================
   SERVICIOS
========================= */

.services-section {
  background: #f7f8fa;
}

.services-grid {
  margin-top: 55px;

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 18px;
}

.service-card {
  background: #ffffff;

  padding: 30px;

  border:
    1px solid #e6e9ee;

  border-radius: 8px;

  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.service-card:hover {
  transform: translateY(-5px);

  box-shadow:
    0 12px 30px
    rgba(23, 32, 51, 0.08);
}

.service-icon {
  font-size: 13px;

  font-weight: 700;

  color: #64748b;

  margin-bottom: 35px;
}

.service-card h3 {
  font-size: 20px;

  margin-bottom: 15px;
}

.service-card p {
  color: #687386;

  line-height: 1.7;

  font-size: 14px;
}


/* =========================
   COTIZACIÓN
========================= */

.quote-section {
  padding: 90px 0;

  background: #172033;

  color: #ffffff;
}

.quote-content {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 50px;
}

.quote-section .section-label {
  color: #aeb8c8;
}

.quote-section p {
  color: #c5ccda;

  line-height: 1.7;

  max-width: 600px;
}

.quote-section .btn-primary {
  background: #ffffff;

  color: #172033;

  flex-shrink: 0;
}

.quote-section .btn-primary:hover {
  background: #e9edf2;
}


/* =========================
   CONTACTO
========================= */

.contact-section {
  background: #ffffff;
}

.contact-placeholder {
  margin-top: 50px;

  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 20px;

  max-width: 900px;
}

.contact-item {
  display: flex;

  gap: 20px;

  padding: 28px;

  border:
    1px solid #e6e9ee;

  border-radius: 8px;

  background: #f8f9fb;
}

.contact-number {
  font-size: 13px;

  font-weight: 700;

  color: #64748b;
}

.contact-item h3 {
  margin-bottom: 8px;

  font-size: 17px;
}

.contact-item p {
  color: #687386;

  line-height: 1.6;

  font-size: 14px;
}


/* =========================
   FOOTER
========================= */

footer {
  background: #0e1523;

  color: #ffffff;

  padding: 50px 0;
}

.footer-content {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;
}

.footer-logo {
  margin-bottom: 8px;
}

footer p {
  color: #9da7b8;

  font-size: 14px;
}

.footer-right {
  text-align: right;
}

.footer-right a {
  display: inline-block;

  margin-bottom: 10px;

  color: #ffffff;

  font-size: 14px;

  font-weight: 600;
}


/* =========================
   TABLET
========================= */

@media (max-width: 850px) {

  nav {
    display: none;
  }

  .services-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .about-content {
    grid-template-columns: 1fr;

    gap: 40px;
  }

  .about-image {
    min-height: 280px;
  }

  .quote-content {
    flex-direction: column;

    align-items: flex-start;
  }

  .contact-placeholder {
    grid-template-columns: 1fr;
  }

}


/* =========================
   CELULAR
========================= */

@media (max-width: 550px) {

  .navbar-content {
    min-height: 68px;
  }

  .navbar .btn-cotizacion {
    display: none;
  }

  .hero {
    min-height: 650px;

    padding-top: 68px;
  }

  .hero h1 {
    font-size: 43px;

    letter-spacing: -1.5px;
  }

  .hero-buttons {
    flex-direction: column;

    align-items: flex-start;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 80px 0;
  }

  .about-image {
    min-height: 240px;
  }

  .footer-content {
    flex-direction: column;

    align-items: flex-start;
  }

  .footer-right {
    text-align: left;
  }

}

</style>