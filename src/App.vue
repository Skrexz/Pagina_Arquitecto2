<template>
  <div class="app-container">
    <!--Nav presente en todas las pantallas-->
    <MyNavbar />
    <!--Contenido que cambia según la vista-->
    <RouterView />
    <a href="https://wa.me/+573153421676" target="_blank"><img src="../src/assets/img/whatsapplogo.png" alt="" class="contact"></a>
  </div>
</template>

<script setup>
//Componentes
import MyNavbar from './components/shared/MyNavbar.vue';
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  .contact {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 120px;
    transition: all .3s;
    &:hover{
      transform: scale(1.1);
    }
  }
}
</style>