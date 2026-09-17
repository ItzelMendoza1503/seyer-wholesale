<template>
  <div class="pagina">

    <!-- =====================================================
         NAVBAR
    ====================================================== -->
    <header class="navbar">
      <div class="contenedor nav-contenido">

        <!-- LOGO -->
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


        <!-- MENÚ -->
        <nav class="menu">
          <NuxtLink to="/" class="activo">
            Inicio
          </NuxtLink>

          <a href="#nosotros">
            Nosotros
          </a>

          <a href="#galeria">
            Empresa
          </a>

          <a href="#servicios">
            Servicios
          </a>

          <NuxtLink to="/cotizacion">
            Cotización
          </NuxtLink>

          <a href="#contacto">
            Contacto
          </a>
        </nav>


        <!-- BOTÓN -->
        <NuxtLink
          to="/cotizacion"
          class="boton-nav"
        >
          Solicitar cotización
        </NuxtLink>

      </div>
    </header>



    <!-- =====================================================
         HERO
    ====================================================== -->
    <main>

      <section class="hero">

        <div class="hero-circulo hero-circulo-1"></div>
        <div class="hero-circulo hero-circulo-2"></div>

        <div class="contenedor hero-contenido">

          <!-- TEXTO -->
          <div class="hero-texto">

            <p class="etiqueta">
              COMERCIO • DISTRIBUCIÓN • LOGÍSTICA
            </p>

            <h1>
              Conectamos tus productos
              <span>con el mundo.</span>
            </h1>

            <p class="descripcion">
              En Seyer.Wholesale buscamos facilitar las operaciones
              comerciales mediante soluciones de distribución,
              logística y comercio mayorista.
            </p>


            <!-- BOTONES -->
            <div class="hero-botones">

              <NuxtLink
                to="/cotizacion"
                class="boton-principal"
              >
                Solicitar cotización
                <span>→</span>
              </NuxtLink>

              <a
                href="#servicios"
                class="boton-secundario"
              >
                Conocer servicios
              </a>

            </div>


            <!-- DATOS -->
            <div class="datos">

              <div class="dato">
                <strong>01</strong>
                <span>Atención personalizada</span>
              </div>

              <div class="dato">
                <strong>02</strong>
                <span>Soluciones comerciales</span>
              </div>

              <div class="dato">
                <strong>03</strong>
                <span>Enfoque profesional</span>
              </div>

            </div>

          </div>


          <!-- LOGO GRANDE -->
          <div class="hero-logo">

            <div class="logo-fondo"></div>

            <img
              src="/logo.png"
              alt="Seyer.Wholesale"
            />

          </div>

        </div>

      </section>



      <!-- =====================================================
           NOSOTROS
      ====================================================== -->
      <section
        id="nosotros"
        class="nosotros"
      >

        <div class="contenedor">

          <div class="titulo-seccion">

            <p>
              CONÓCENOS
            </p>

            <h2>
              Una empresa pensada para
              <span>conectar.</span>
            </h2>

          </div>


          <div class="nosotros-grid">

            <!-- TEXTO -->
            <div class="nosotros-texto">

              <p>
                Seyer.Wholesale es una empresa enfocada en brindar
                soluciones relacionadas con el comercio y la
                distribución de productos.
              </p>

              <p>
                Nuestro objetivo es ofrecer una experiencia sencilla,
                organizada y confiable para nuestros clientes,
                facilitando sus procesos comerciales.
              </p>

              <p>
                Buscamos crear conexiones entre productos,
                clientes y oportunidades mediante soluciones
                comerciales adaptadas a diferentes necesidades.
              </p>


              <NuxtLink
                to="/cotizacion"
                class="enlace"
              >
                Solicita información →
              </NuxtLink>

            </div>


            <!-- TARJETA -->
            <div class="tarjeta-info">

              <div class="icono">
                ✦
              </div>

              <h3>
                Conectando oportunidades
              </h3>

              <p>
                Trabajamos para acercar productos, clientes y
                oportunidades comerciales mediante una atención
                enfocada en las necesidades de cada proyecto.
              </p>

            </div>

          </div>

        </div>

      </section>



      <!-- =====================================================
           GALERÍA / FOTOS DE LA EMPRESA
      ====================================================== -->
      <section
        id="galeria"
        class="galeria"
      >

        <div class="contenedor">

          <!-- TÍTULO -->
          <div class="titulo-galeria">

            <div>

              <p>
                CONOCE SEYER.WHOLESALE
              </p>

              <h2>
                Nuestra empresa
                <br>
                <span>en imágenes.</span>
              </h2>

            </div>


            <p class="texto-galeria">
              Conoce nuestras instalaciones, productos y
              operaciones a través de fotografías reales
              de nuestra empresa.
            </p>

          </div>


          <!-- GALERÍA -->
          <div class="galeria-grid">


            <!-- FOTO 1 -->
            <div class="foto foto-grande">

              <img
                src="/fotos/empresa.jpg"
                alt="Instalaciones de Seyer.Wholesale"
              />

              <div class="foto-placeholder">
                <span>FOTOGRAFÍA</span>
                <strong>Instalaciones de la empresa</strong>
                <small>
                  Agrega aquí una fotografía real
                </small>
              </div>

              <div class="foto-overlay"></div>

              <div class="foto-texto">
                <span>01</span>
                <h3>
                  Nuestras instalaciones
                </h3>
              </div>

            </div>



            <!-- FOTO 2 -->
            <div class="foto">

              <img
                src="/fotos/productos.jpg"
                alt="Productos de Seyer.Wholesale"
              />

              <div class="foto-placeholder">
                <span>FOTOGRAFÍA</span>
                <strong>Productos</strong>
                <small>
                  Agrega aquí una fotografía real
                </small>
              </div>

              <div class="foto-overlay"></div>

              <div class="foto-texto">
                <span>02</span>
                <h3>
                  Nuestros productos
                </h3>
              </div>

            </div>



            <!-- FOTO 3 -->
            <div class="foto">

              <img
                src="/fotos/distribucion.jpg"
                alt="Distribución de Seyer.Wholesale"
              />

              <div class="foto-placeholder">
                <span>FOTOGRAFÍA</span>
                <strong>Distribución</strong>
                <small>
                  Agrega aquí una fotografía real
                </small>
              </div>

              <div class="foto-overlay"></div>

              <div class="foto-texto">
                <span>03</span>
                <h3>
                  Distribución y logística
                </h3>
              </div>

            </div>

          </div>

        </div>

      </section>



      <!-- =====================================================
           SERVICIOS
      ====================================================== -->
      <section
        id="servicios"
        class="servicios"
      >

        <div class="contenedor">

          <!-- ENCABEZADO -->
          <div class="titulo-servicios">

            <div>

              <p>
                SOLUCIONES
              </p>

              <h2>
                Nuestros servicios
              </h2>

            </div>

            <span>
              Soluciones diseñadas para apoyar las necesidades
              comerciales de nuestros clientes.
            </span>

          </div>


          <!-- TARJETAS -->
          <div class="servicios-grid">


            <!-- SERVICIO 1 -->
            <article class="servicio">

              <div class="numero">
                01
              </div>

              <div class="icono-servicio">
                ▣
              </div>

              <h3>
                Comercio mayorista
              </h3>

              <p>
                Soluciones orientadas a la comercialización y
                distribución de productos.
              </p>

              <a href="#contacto">
                Más información →
              </a>

            </article>



            <!-- SERVICIO 2 -->
            <article class="servicio destacado">

              <div class="numero">
                02
              </div>

              <div class="icono-servicio">
                ◎
              </div>

              <h3>
                Distribución
              </h3>

              <p>
                Organización y apoyo para facilitar el movimiento
                de productos hacia diferentes destinos.
              </p>

              <a href="#contacto">
                Más información →
              </a>

            </article>



            <!-- SERVICIO 3 -->
            <article class="servicio">

              <div class="numero">
                03
              </div>

              <div class="icono-servicio">
                ◇
              </div>

              <h3>
                Logística
              </h3>

              <p>
                Planeación y coordinación para mejorar los procesos
                relacionados con la operación comercial.
              </p>

              <a href="#contacto">
                Más información →
              </a>

            </article>



            <!-- SERVICIO 4 -->
            <article class="servicio">

              <div class="numero">
                04
              </div>

              <div class="icono-servicio">
                ↗
              </div>

              <h3>
                Soluciones comerciales
              </h3>

              <p>
                Atención personalizada para identificar las
                necesidades de cada cliente.
              </p>

              <a href="#contacto">
                Más información →
              </a>

            </article>

          </div>

        </div>

      </section>



      <!-- =====================================================
           CTA
      ====================================================== -->
      <section class="cta">

        <div class="contenedor cta-contenido">

          <div>

            <p>
              ¿TIENES UN PROYECTO?
            </p>

            <h2>
              Hablemos de tu próxima operación.
            </h2>

          </div>


          <NuxtLink
            to="/cotizacion"
            class="boton-cta"
          >
            Solicitar cotización
            <span>→</span>
          </NuxtLink>

        </div>

      </section>

    </main>



    <!-- =====================================================
         FOOTER
    ====================================================== -->
    <footer id="contacto">

      <div class="contenedor footer-grid">


        <!-- MARCA -->
        <div class="footer-marca">

          <img
            src="/logo.png"
            alt="Seyer.Wholesale"
          />

          <h3>
            Seyer<span>.Wholesale</span>
          </h3>

          <p>
            Conectando productos, oportunidades y
            soluciones comerciales.
          </p>

        </div>


        <!-- NAVEGACIÓN -->
        <div class="footer-columna">

          <h4>
            Navegación
          </h4>

          <NuxtLink to="/">
            Inicio
          </NuxtLink>

          <a href="#nosotros">
            Nosotros
          </a>

          <a href="#galeria">
            Empresa
          </a>

          <a href="#servicios">
            Servicios
          </a>

          <NuxtLink to="/cotizacion">
            Cotización
          </NuxtLink>

        </div>


        <!-- CONTACTO -->
        <div class="footer-columna">

          <h4>
            Contacto
          </h4>

          <p>
            Atención personalizada
          </p>

          <p>
            Información comercial
          </p>

          <NuxtLink to="/cotizacion">
            Solicitar información →
          </NuxtLink>

        </div>

      </div>


      <!-- FOOTER FINAL -->
      <div class="footer-final">

        <div class="contenedor">

          <span>
            © 2026 Seyer.Wholesale
          </span>

          <span>
            Todos los derechos reservados
          </span>

        </div>

      </div>

    </footer>

  </div>
</template>



<style scoped>

/* =========================================================
   CONFIGURACIÓN GENERAL
========================================================= */

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

.pagina {
  min-height: 100vh;
  background: #ffffff;
  color: #21172d;
  font-family: Arial, Helvetica, sans-serif;
}

.contenedor {
  width: min(1180px, 90%);
  margin: 0 auto;
}



/* =========================================================
   NAVBAR
========================================================= */

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;

  background: rgba(255, 255, 255, 0.96);

  border-bottom: 1px solid #eee6f3;

  backdrop-filter: blur(12px);
}

.nav-contenido {
  min-height: 82px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 25px;
}


/* LOGO */

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


/* MENÚ */

.menu {
  display: flex;
  align-items: center;

  gap: 25px;
}

.menu a {
  position: relative;

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


/* BOTÓN NAV */

.boton-nav {
  background: #6f2da8;

  color: white;

  text-decoration: none;

  padding: 13px 20px;

  border-radius: 10px;

  font-size: 13px;
  font-weight: bold;

  transition: 0.3s;
}

.boton-nav:hover {
  background: #51207e;

  transform: translateY(-2px);
}



/* =========================================================
   HERO
========================================================= */

.hero {
  position: relative;

  overflow: hidden;

  min-height: 650px;

  display: flex;
  align-items: center;

  background:
    linear-gradient(
      135deg,
      #faf7fd 0%,
      #f0e5f8 100%
    );
}


/* CÍRCULOS DECORATIVOS */

.hero-circulo {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;
}

.hero-circulo-1 {
  width: 500px;
  height: 500px;

  right: -180px;
  top: -180px;

  background: #dcc4eb;

  opacity: 0.35;
}

.hero-circulo-2 {
  width: 300px;
  height: 300px;

  left: -180px;
  bottom: -150px;

  background: #caa3df;

  opacity: 0.18;
}


/* CONTENIDO */

.hero-contenido {
  position: relative;
  z-index: 2;

  display: grid;

  grid-template-columns: 1.1fr 0.9fr;

  align-items: center;

  gap: 50px;

  padding: 80px 0;
}


/* TEXTO */

.hero-texto {
  max-width: 650px;
}

.etiqueta {
  color: #7935aa;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 2px;

  margin-bottom: 18px;
}

.hero h1 {
  margin: 0;

  color: #281332;

  font-size: clamp(42px, 5vw, 70px);

  line-height: 1.05;

  letter-spacing: -2px;
}

.hero h1 span {
  display: block;

  color: #7432a7;
}

.descripcion {
  max-width: 560px;

  color: #62596a;

  font-size: 17px;

  line-height: 1.7;

  margin: 28px 0;
}


/* BOTONES */

.hero-botones {
  display: flex;

  align-items: center;

  gap: 15px;

  flex-wrap: wrap;
}

.boton-principal,
.boton-secundario {
  display: inline-flex;

  align-items: center;

  gap: 15px;

  padding: 15px 23px;

  border-radius: 10px;

  text-decoration: none;

  font-weight: 700;

  transition: 0.3s;
}

.boton-principal {
  background: #6f2da8;

  color: white;
}

.boton-principal:hover {
  background: #4f2079;

  transform: translateY(-3px);
}

.boton-principal span {
  font-size: 20px;
}

.boton-secundario {
  border: 1px solid #bda4cb;

  color: #54286d;

  background: rgba(255, 255, 255, 0.5);
}

.boton-secundario:hover {
  background: white;

  transform: translateY(-2px);
}


/* DATOS */

.datos {
  display: flex;

  gap: 35px;

  margin-top: 55px;

  flex-wrap: wrap;
}

.dato {
  display: flex;

  flex-direction: column;

  gap: 5px;
}

.dato strong {
  color: #7432a7;

  font-size: 20px;
}

.dato span {
  color: #766d7c;

  font-size: 12px;
}



/* =========================================================
   LOGO DEL HERO
========================================================= */

.hero-logo {
  position: relative;

  display: flex;

  justify-content: center;
  align-items: center;

  min-height: 450px;
}

.hero-logo img {
  position: relative;

  z-index: 2;

  width: min(440px, 90%);

  height: auto;

  object-fit: contain;

  filter:
    drop-shadow(
      0 25px 35px
      rgba(72, 32, 94, 0.22)
    );

  animation: flotar 5s ease-in-out infinite;
}

.logo-fondo {
  position: absolute;

  width: 390px;
  height: 390px;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      #ead7f5,
      #c7a4df
    );

  opacity: 0.65;
}

@keyframes flotar {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }

}



/* =========================================================
   NOSOTROS
========================================================= */

.nosotros {
  padding: 110px 0;

  background: white;
}

.titulo-seccion {
  max-width: 700px;

  margin-bottom: 60px;
}

.titulo-seccion p {
  color: #7935aa;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 2px;

  margin-bottom: 18px;
}

.titulo-seccion h2 {
  color: #281332;

  font-size: clamp(35px, 4vw, 52px);

  line-height: 1.1;

  margin: 0;
}

.titulo-seccion h2 span {
  color: #7935aa;
}


/* GRID */

.nosotros-grid {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 80px;

  align-items: center;
}


/* TEXTO */

.nosotros-texto p {
  color: #665d6d;

  line-height: 1.8;

  font-size: 16px;

  margin-bottom: 20px;
}

.enlace {
  display: inline-block;

  margin-top: 15px;

  color: #7432a7;

  font-weight: bold;

  text-decoration: none;
}

.enlace:hover {
  text-decoration: underline;
}


/* TARJETA */

.tarjeta-info {
  min-height: 310px;

  padding: 50px;

  border-radius: 25px;

  color: white;

  background:
    linear-gradient(
      145deg,
      #4f2170,
      #7d3caf
    );

  box-shadow:
    0 20px 45px
    rgba(83, 38, 111, 0.2);
}

.tarjeta-info .icono {
  font-size: 32px;

  margin-bottom: 25px;
}

.tarjeta-info h3 {
  font-size: 28px;

  margin: 0 0 15px;
}

.tarjeta-info p {
  color: #eadff1;

  line-height: 1.7;
}



/* =========================================================
   GALERÍA
========================================================= */

.galeria {
  padding: 110px 0;

  background: #f8f4fb;
}


/* TÍTULO */

.titulo-galeria {
  display: flex;

  justify-content: space-between;

  align-items: end;

  gap: 50px;

  margin-bottom: 55px;
}

.titulo-galeria > div {
  max-width: 600px;
}

.titulo-galeria > div > p {
  color: #7935aa;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 2px;

  margin-bottom: 18px;
}

.titulo-galeria h2 {
  color: #281332;

  font-size: clamp(35px, 4vw, 52px);

  line-height: 1.1;

  margin: 0;
}

.titulo-galeria h2 span {
  color: #7935aa;
}

.texto-galeria {
  max-width: 350px;

  color: #6b6272;

  line-height: 1.7;

  font-size: 15px;
}


/* GRID */

.galeria-grid {
  display: grid;

  grid-template-columns:
    1.4fr 1fr 1fr;

  gap: 20px;
}


/* FOTOS */

.foto {
  position: relative;

  height: 360px;

  overflow: hidden;

  border-radius: 20px;

  background:
    linear-gradient(
      135deg,
      #eee3f5,
      #d5b9e5
    );
}

.foto-grande {
  height: 430px;
}


/* IMAGEN */

.foto img {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  z-index: 1;

  transition:
    transform 0.5s ease;
}

.foto:hover img {
  transform: scale(1.06);
}


/* PLACEHOLDER */

.foto-placeholder {
  position: absolute;

  z-index: 2;

  inset: 0;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  text-align: center;

  padding: 30px;

  color: #5a356d;

  background:
    linear-gradient(
      135deg,
      #eee3f5,
      #d9c0e8
    );
}


/*
   Cuando pongas una imagen real,
   la imagen cubrirá este espacio.
*/

.foto-placeholder span {
  font-size: 11px;

  font-weight: 800;

  letter-spacing: 2px;

  color: #8c5aa7;

  margin-bottom: 10px;
}

.foto-placeholder strong {
  font-size: 22px;

  margin-bottom: 8px;
}

.foto-placeholder small {
  font-size: 12px;

  color: #806b8b;
}


/* OVERLAY */

.foto-overlay {
  position: absolute;

  z-index: 3;

  inset: 0;

  background:
    linear-gradient(
      transparent 45%,
      rgba(35, 15, 48, 0.82)
    );
}


/* TEXTO DE FOTO */

.foto-texto {
  position: absolute;

  z-index: 4;

  bottom: 25px;

  left: 25px;

  color: white;
}

.foto-texto span {
  color: #d6b5e7;

  font-size: 12px;

  font-weight: bold;
}

.foto-texto h3 {
  margin: 7px 0 0;

  font-size: 21px;
}



/* =========================================================
   SERVICIOS
========================================================= */

.servicios {
  padding: 100px 0;

  background: white;
}


/* ENCABEZADO */

.titulo-servicios {
  display: flex;

  justify-content: space-between;

  align-items: end;

  gap: 40px;

  margin-bottom: 55px;
}

.titulo-servicios p {
  color: #7935aa;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 2px;

  margin-bottom: 18px;
}

.titulo-servicios h2 {
  color: #281332;

  font-size: clamp(35px, 4vw, 50px);

  margin: 0;
}

.titulo-servicios > span {
  max-width: 330px;

  color: #6b6272;

  line-height: 1.6;
}


/* GRID */

.servicios-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 18px;
}


/* TARJETA */

.servicio {
  position: relative;

  min-height: 330px;

  padding: 30px;

  background: white;

  border:
    1px solid #e9e0ef;

  border-radius: 18px;

  transition: 0.3s;
}

.servicio:hover {
  transform: translateY(-8px);

  box-shadow:
    0 20px 40px
    rgba(66, 31, 86, 0.12);
}


/* DESTACADO */

.servicio.destacado {
  color: white;

  background: #652694;
}


/* NÚMERO */

.numero {
  color: #a174bf;

  font-size: 13px;

  font-weight: bold;

  margin-bottom: 40px;
}

.destacado .numero {
  color: #d9bdea;
}


/* ICONO */

.icono-servicio {
  color: #7735a4;

  font-size: 35px;

  margin-bottom: 20px;
}

.destacado .icono-servicio {
  color: #ead5f6;
}


/* TÍTULO */

.servicio h3 {
  font-size: 21px;

  margin: 0 0 15px;
}


/* TEXTO */

.servicio p {
  color: #746b7a;

  font-size: 14px;

  line-height: 1.7;
}

.destacado p {
  color: #e4d8eb;
}


/* LINK */

.servicio a {
  position: absolute;

  left: 30px;

  bottom: 25px;

  color: #7432a7;

  text-decoration: none;

  font-size: 13px;

  font-weight: bold;
}

.destacado a {
  color: white;
}



/* =========================================================
   CTA
========================================================= */

.cta {
  padding: 80px 0;

  color: white;

  background: #30153e;
}

.cta-contenido {
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 30px;
}

.cta p {
  color: #caa8dc;

  font-size: 12px;

  font-weight: 800;

  letter-spacing: 2px;

  margin-bottom: 12px;
}

.cta h2 {
  max-width: 650px;

  margin: 0;

  font-size: clamp(30px, 4vw, 48px);

  line-height: 1.1;
}


/* BOTÓN */

.boton-cta {
  display: inline-flex;

  align-items: center;

  gap: 20px;

  padding: 17px 25px;

  border-radius: 10px;

  background: white;

  color: #4f2070;

  text-decoration: none;

  font-weight: bold;

  white-space: nowrap;

  transition: 0.3s;
}

.boton-cta:hover {
  transform: translateY(-3px);

  background: #eee3f3;
}



/* =========================================================
   FOOTER
========================================================= */

footer {
  color: white;

  background: #1d1025;
}


/* GRID */

.footer-grid {
  display: grid;

  grid-template-columns:
    2fr 1fr 1fr;

  gap: 70px;

  padding: 70px 0;
}


/* MARCA */

.footer-marca img {
  width: 65px;
  height: 65px;

  object-fit: contain;

  margin-bottom: 10px;
}

.footer-marca h3 {
  font-size: 22px;

  margin: 0 0 12px;
}

.footer-marca h3 span {
  color: #a45bd0;
}

.footer-marca p {
  max-width: 300px;

  color: #a99eaf;

  line-height: 1.6;
}


/* COLUMNAS */

.footer-columna {
  display: flex;

  flex-direction: column;

  gap: 13px;
}

.footer-columna h4 {
  margin: 0 0 10px;

  color: white;
}

.footer-columna a,
.footer-columna p {
  color: #a99eaf;

  font-size: 14px;

  text-decoration: none;

  margin: 0;
}

.footer-columna a:hover {
  color: #d3a6e9;
}


/* FINAL */

.footer-final {
  border-top:
    1px solid #35283b;

  padding: 20px 0;

  color: #817787;

  font-size: 12px;
}

.footer-final .contenedor {
  display: flex;

  justify-content: space-between;
}



/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1000px) {

  .menu {
    display: none;
  }

  .hero-contenido {
    grid-template-columns: 1fr;

    text-align: center;
  }

  .hero-texto {
    margin: auto;
  }

  .descripcion {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-botones {
    justify-content: center;
  }

  .datos {
    justify-content: center;
  }

  .hero-logo {
    min-height: 350px;
  }


  .nosotros-grid {
    grid-template-columns: 1fr;

    gap: 40px;
  }


  .titulo-galeria {
    align-items: start;

    flex-direction: column;
  }

  .galeria-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .foto-grande {
    grid-column: span 2;
  }


  .servicios-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .titulo-servicios {
    align-items: start;

    flex-direction: column;
  }

}



/* =========================================================
   CELULAR
========================================================= */

@media (max-width: 600px) {

  /* NAVBAR */

  .nav-contenido {
    min-height: 70px;
  }

  .logo-area {
    font-size: 17px;
  }

  .logo {
    width: 43px;
    height: 43px;
  }

  .boton-nav {
    padding: 10px 13px;

    font-size: 11px;
  }


  /* HERO */

  .hero {
    min-height: auto;
  }

  .hero-contenido {
    padding: 60px 0;
  }

  .hero h1 {
    font-size: 42px;
  }

  .descripcion {
    font-size: 15px;
  }

  .hero-logo {
    min-height: 300px;
  }

  .hero-logo img {
    width: 300px;
  }

  .logo-fondo {
    width: 280px;
    height: 280px;
  }


  /* DATOS */

  .datos {
    gap: 20px;
  }


  /* NOSOTROS */

  .nosotros {
    padding: 80px 0;
  }

  .tarjeta-info {
    padding: 35px;
  }


  /* GALERÍA */

  .galeria {
    padding: 80px 0;
  }

  .galeria-grid {
    grid-template-columns: 1fr;
  }

  .foto,
  .foto-grande {
    grid-column: auto;

    height: 350px;
  }


  /* SERVICIOS */

  .servicios {
    padding: 80px 0;
  }

  .servicios-grid {
    grid-template-columns: 1fr;
  }


  /* CTA */

  .cta-contenido {
    flex-direction: column;

    align-items: flex-start;
  }


  /* FOOTER */

  .footer-grid {
    grid-template-columns: 1fr;

    gap: 40px;
  }

  .footer-final .contenedor {
    flex-direction: column;

    gap: 8px;
  }

}

</style>