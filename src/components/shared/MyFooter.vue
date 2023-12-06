<template>
  <footer class="m-0 p-0 d-flex flex-column">

      <div class="d-flex justify-content-center border-bottom mx-5">
        <div class="icons-box px-4">
          <i class="icon-facebook-circled"></i>
          <i class="icon-instagram"></i>
          <i class="icon-whatsapp"></i>
          <i class="icon-linkedin-squared"></i>
        </div>
      </div>

      <div class="row m-4">
      <div class="col-5 ">
        <p class="text-white p-0 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatibus!</p>
      </div>
      <div class="col-5">
        <p class="text-white p-0 m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatibus!</p>
      </div>
    </div>

  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@import '../../assets/fontello/css/fontello.css';

footer {
  padding: 2rem 0;
  min-height: 80px;
  background: var(--main-green);
  img{
    width: 250px;
  }
  i {
    font-size: 28px;
    transition: all 0.4s;
    margin: 0 8px;
    color: rgba(255, 255, 255, 0.603);
    &:hover{
      color: white;
    }
  }
}

.icons-box{
  transform: translateY(40%);
  background: var(--main-green);
}
</style>