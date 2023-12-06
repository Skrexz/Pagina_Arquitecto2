<template>
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src="../../assets/img/aliados/A1.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/img/aliados/A2.jpg" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/img/aliados/a3.jpg" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/img/aliados/A6.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/img/aliados/sika-logo-0-2048x2048.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/img/wurth-logo-8.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/img/aliados/A1.png" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/img/aliados/A2.jpg" alt="">
        </div>
        <div class="slide">
          <img src="../../assets/img/aliados/a3.jpg" alt="">
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
      width: calc(350px * 10);
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