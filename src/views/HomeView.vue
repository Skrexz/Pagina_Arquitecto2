<template>
  <!--Contennido principal-->
  <main>
    <!--
      /**
      *SLIDER
      */
    -->
    <section id="slider-presentacion">
      <MySlider @changeImg="changePhrase" />

      <p class="text-center prhase">
        {{ phrase }}
      </p>
    </section>


  <section class="d-flex justify-content-around seccion-iconos">
    <div class="d-flex flex-column align-items-center">
      <div class="circle-imgs circle-1">
        <img src="../assets/img/personaestrellas.jpg" alt="" class="img-iconos">
      </div>
      <h3 class="mt-2 fw-bolder text-center w-75 p-0 m-0 h3-1">+3</h3>
      <p class="text-center mt-2 w-75">Años de experiencia</p>
    </div>

    <div class="d-flex flex-column align-items-center ">
      <div class="circle-imgs circle-2">
        <img src="../assets/img/ladrillos.jpg" alt="" class="img-iconos">
      </div>
      <h3 class="mt-2 fw-bolder text-center w-75 p-0 m-0 h3-2">+20</h3>
      <p class="text-center mt-2 w-75">Proyectos culminados</p>
    </div>

    <div class="d-flex flex-column align-items-center">
      <div class="circle-imgs circle-3">
        <img src="../assets/img/planeta.jpg" alt="" class="img-iconos">
      </div>
      <h3 class="mt-2 fw-bolder text-center w-75 p-0 m-0 h3-3">+10</h3>
      <p class="text-center mt-2 w-75">Ciudades a nivel nacional</p>
    </div>


  </section>

    <!--
      /**
      *SERVICIOS
      */
    -->
    <section id="servicios" class="bg-light servicios">
      <h2 class="text-center py-5 subtitles">Nos especializamos en</h2>
      <div class="d-flex flex-wrap justify-content-center">

        <div class="w-100 d-flex flex-wrap justify-content-center">
          <div class="project-image-box m-3 p-0">
            <!--Imagen por encima del vídeo-->
            <div class="caja-animacion"></div>
            <h2 class="w-100 text-center">Estructura metálica</h2>
            <img class="top-image" src="../../src/assets/img/estructura/3/Estructura3.2.jpg" alt="Estructura metálica">
            <button class="py-1 px-3 border border-white text-uppercase">
              <a href="/estructura">Ver más</a>
            </button>
          </div>

          <div class="project-image-box m-3 p-0">
            <!--Imagen por encima del vídeo-->
            <div class="caja-animacion"></div>
            <h2 class="w-100 text-center">Fachadas arquitectonicas</h2>
            <img class="top-image" src="../../src/assets/img/fachadas/1/fachadas1.1.jpg" alt="Fachadas arquitectonicas">
            <button class="py-1 px-3 border border-white text-uppercase">
              <a href="/fachadas">Ver más</a>
            </button>
          </div>


          <div class="project-image-box m-3 p-0">
            <!--Imagen por encima del vídeo-->
            <div class="caja-animacion"></div>
            <h2 class="w-100 text-center">Cubiertas</h2>
            <img class="top-image" src="../assets/img/cubiertas/1/cubiertas1.1.jpeg" alt="Cubiertas">
            <button class="py-1 px-3 border border-white text-uppercase">
              <a href="/cubiertas">Ver más</a>
            </button>
          </div>


          <div class="project-image-box m-3 p-0">
            <!--Imagen por encima del vídeo-->
            <div class="caja-animacion"></div>
            <h2 class="w-100 text-center">Mantenimientos</h2>
            <img class="top-image" src="../assets/img/mantenimientos/2/mantenimiento2.1.png" alt="Mantenimientos">
            <button class="py-1 px-3 border border-white text-uppercase">
              <a href="/mantenimientos">Ver más</a>
            </button>
          </div>


          <div class="project-image-box m-3 p-0">
            <!--Imagen por encima del vídeo-->
            <div class="caja-animacion"></div>
            <h2 class="w-100 text-center">Estudios y diseños</h2>
            <img class="top-image" src="../assets/img/estructura/5/Estructura5.1.jpg" alt="Estudios y diseños">
            <button class="py-1 px-3 border border-white text-uppercase">
              <a href="/estudios">Ver más</a>
            </button>
          </div>

          <div class="project-image-box m-3 p-0">
            <!--Imagen por encima del vídeo-->
            <div class="caja-animacion"></div>
            <h2 class="w-100 text-center">Carpinteria metalica</h2>
            <img class="top-image" src="../../src/assets/img/carpinteria/3/Divisiones1.1.jpg" alt="Fachadas arquitectonicas">
            <button class="py-1 px-3 border border-white text-uppercase">
              <a href="/carpinteria">Ver más</a>
            </button>
          </div>
        </div>

      </div>
    </section>
    <!--
      /**
      *CLIENTES
      */
    -->
    <section id="confiaron-clientes">
      <h2 class="text-center my-5  subtitles">confiaron en nosotros</h2>
      <PeopleWhoTrustSlider />
    </section>

    <section id="confiaron-clientes">
      <h2 class="text-center my-5  subtitles">Nuestros aliados</h2>
      <MisAliados />
    </section>

    <!--
      /**
      *MAPA Y FORM
      */
    -->
    <section id="contacto" ref="homeSection" class="bg-light d-flex flex-column">
      <h2 class="text-center my-5 subtitles">contacto</h2>
      <div class="d-flex content-contacto">
        <MyForm class="me-3" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.059151201265!2d-73.12547759019765!3d7.1191440159269455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683fd8262a7997%3A0x4119d032459582b5!2sCl.%2036%20%2319-18%2C%20Bol%C3%ADvar%2C%20Bucaramanga%2C%20Santander!5e0!3m2!1ses!2sco!4v1700167130929!5m2!1ses!2sco"
          width="100%" height="550" style="border: 0" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </section>

    <!--
      /**
      *FOOTER
      */
    -->

    <MyFooter class="mt-5" />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
//Componentes
import MyForm from '../components/home/MyForm.vue';
import MySlider from '../components/home/MySlider.vue';
import MyFooter from '../components/shared/MyFooter.vue';
import PeopleWhoTrustSlider from '../components/home/PeopleWhoTrustSlider.vue';
import MisAliados from '../components/home/MisAliados.vue';
//Imagenes que se iteran en la sección de servicios

const serviciosMediaData = [

  {
    imagen: '../../src/assets/img/fachadas/1/2.jpg',
    alt: 'xd',
    texto: 'Fachadas arquitectonicas',
  },

  {
    imagen: '../assets/img/cubiertas/1/1.jpeg',
    alt: 'Texto alternativo',
    texto: 'Cubierta',
  },

  {
    imagen: '../assets/img/mantenimientos/2/1.png',
    alt: 'Texto alternativo',
    texto: 'Mantenimientos',
  },

  {
    imagen: "../assets/img/estructura/5/1.jpg",
    alt: 'Texto alternativo',
    texto: 'Estudios y diseños',
  },

  {
    imagen: "../assets/img/carpinteria/3/Divisiones1.1.jpg",
    alt: 'Texto alternativo',
    texto: 'Carpinteria Metalica',
  }

]

const phrasesArray = [
  `En los momentos difíciles, encontramos nuestra verdadera fortaleza. Cada obstáculo
   es una oportunidad disfrazada, una invitación a crecer y descubrir nuestra resistencia interior.`,

  `Las adversidades son trampolines para alcanzar alturas inimaginables. Recuerda que no
   es la magnitud de la caída, sino la fuerza con la que te levantas lo que define tu camino.`,

  `Cada experiencia, ya sea un tropiezo o un logro, es una lección valiosa que te acerca
   a tu mejor versión. No temas a los desafíos; abrázalos con valentía. En la lucha y la superación descubrimos la verdadera medida de nuestra grandeza.`,
];

const phrase = ref('');
let indiceActual = 0;

const setTimer = ref(20000);
const changePhrase = (situation) => {

  if (situation === '+') {
    phrase.value = phrasesArray[indiceActual];
    indiceActual = (indiceActual + 1) % phrasesArray.length;
  } else if (situation === '-') {
    phrase.value = phrasesArray[indiceActual];
    indiceActual = (indiceActual - 1) % phrasesArray.length;
  } else {

    phrase.value = phrasesArray[indiceActual];
    indiceActual = (indiceActual + 1) % phrasesArray.length;

  }

  if (setTimer.value == 20000) {
    setTimer.value == 19000
  } else if (setTimer.value == 19000) {
    setTimer.value == 21000
  } else {
    setTimer.value = 20000
  }


};

changePhrase();
setInterval(changePhrase, setTimer.value)

</script>

<style lang="scss" scoped>
.subtitles {
  text-shadow: 1px 1px 1px rgb(216, 216, 216), 1px 4px 4px rgb(99, 99, 99);
}

.servicios {
  .project-image-box {
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 25vw;
    height: 300px;
    overflow: hidden;
    box-shadow: 3px 3px 4px 4px rgb(202, 202, 202);

    &:hover {
      transform: scale(1.05);
      border-radius: 4px;
    }

    /* &:hover > .caja-animacion {
                width: 100% ;
            } */
    /**
        *!Imagen posicionada sobre el vídeo
        */
    img {
      position: absolute;
      transition: all 0.3s;
      object-fit: cover;
      height: 100%;
      width: 100%;
      /**
            *!Mostrar el vídeo
            */

    }

    h2,
    button {
      color: white;
      z-index: 4;
      position: absolute;
    }

    button {
      justify-self: center;
      transition: all 0.3s;
      bottom: 2rem;
      z-index: 4;
      background: transparent;

      &:hover {
        color: black;
        background: linear-gradient(to left, #ffffff 50%, transparent 50%);
        background-size: 200% 100%;
        background-position: right;
      }
    }

    .caja-animacion {
      position: absolute;
      height: 100%;
      background: rgb(0, 0, 0);
      width: 100%;
      transition: all 0.3s;
      right: 0;
      z-index: 3;
      opacity: 0.3;
    }

  }
}

.prhase {
  font-size: clamp(1rem, 2vw, 2rem);
  letter-spacing: 0;
  font-weight: bold;
}

.img-iconos{
  width: 95px;
}

.circle-imgs{
  overflow: hidden;
  padding: 1rem;
  border-radius: 50%;
}

.circle-1{
  border: 4px solid #f9a72a;
}
.h3-1{
  color: #f9a72a;
}
.h3-2{
  color: #00927e;
}
.h3-3{
  color: #25758d;
}
.circle-2{
  border: 4px solid #00927e;
}
.circle-3{
  border: 4px solid #25758d;
}



@media (max-width:992px) {
  .content-contacto {
    flex-wrap: wrap;
  }

  .project-image-box {
    width: 100% !important;
  }


  .seccion-iconos{
    flex-wrap: wrap;
  }
}
</style>