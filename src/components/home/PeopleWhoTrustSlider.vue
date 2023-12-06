<template>
  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <img src="../../assets/img/marcas-confiaron/empas.png" alt="">
      </div>
      <div class="slide">
        <img src="../../assets/img/marcas-confiaron/sangil.png" alt="">
      </div>
      <div class="slide">
        <img src="../../assets/img/marcas-confiaron/aeropuertos-oriente.png" alt="">
      </div>
      <div class="slide">
        <img src="../../assets/img/marcas-confiaron/marlowe.jpg" alt="">
      </div>
      <div class="slide">
        <img src="../../assets/img/marcas-confiaron/ecooildry.jpg" alt="">
      </div>
      <div class="slide">
        <img src="../../assets/img/marcas-confiaron/ingelec.jpg" alt="">
      </div>
      <div class="slide">
        <img src="../../assets/img/c4.png" alt="">
      </div>
      <div class="slide">
        <img src="../../assets/img/c6.png" alt="">
      </div>

      <div class="slide">
        <img src="../../assets/img/marcas-confiaron/empas.png" alt="">
      </div>
      <div class="slide">
        <img src="../../assets/img/marcas-confiaron/sangil.png" alt="">
      </div>
      <div class="slide">
        <img src="../../assets/img/marcas-confiaron/aeropuertos-oriente.png" alt="">
      </div>
      <div class="slide">
        <img src="../../assets/img/marcas-confiaron/marlowe.jpg" alt="">
      </div>
      <div class="slide">
        <img src="../../assets/img/marcas-confiaron/ecooildry.jpg" alt="">
      </div>
      <div class="slide">
        <img src="../../assets/img/marcas-confiaron/ingelec.jpg" alt="">
      </div>
      <div class="slide">
        <img src="https://www.pngkit.com/png/detail/306-3063295_fila-logo-logos-de-marcas-deportivas.png" alt="">
      </div>

    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  height: 180px;
  overflow: hidden;
  .slide-track {
    display: flex;
    animation: scroll 45s linear infinite;
    -webkit-animation: scroll 45s linear infinite;
    width: calc(350px * 14);
    .slide {

      margin: 0 10px;
      width: 350px;
      height: 180px;
      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
      }
    }

  }
}


@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(calc(-200px * 7));
    transform: translateX(calc(-200px * 7));
  }
}

</style>