<template>
    <div class="project-image-box m-0 p-0">

        <!--Imagen por encima del vídeo-->
        <img class="top-image" :src="imagen" :alt="alt">
        <iframe width="100%" height="auto" :src="video" title="Babasónicos - Medley: Vampi / El Loco (Repuesto de Fe/En Vivo)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
    </div>
</template>

<script setup>
const props = defineProps(['imagen','video', 'alt'])
</script>

<style lang="scss" scoped>

    .project-image-box{
        position: relative;
        width: 25vw;
        height: 250px;
        /**
        *!Imagen posicionada sobre el vídeo
        */
        img, iframe{
            position: absolute;
            transition: all 0.3s;
            /* object-fit: cover; */
            height: 100%;
            width: 100%;
            /**
            *!Mostrar el vídeo
            */    
            &:hover{
                opacity: 0;
            }
        }
        .top-image{
            z-index: 1;
        }
    }


    @media (max-width: 992px){
        .project-image-box{
            width: 100%;
        }
    }

</style>