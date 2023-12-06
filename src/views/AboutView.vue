<template>
    <main>
        <div class="row p-0 m-0 px-1 bg-dark text-white">
            <div class="col-md-4 col-sm-12 py-4 text-center">
                <h2 class="text-uppercase mision">Misión</h2>
                <p>INGSOLPRO se proyecta como un referente inigualable en la industria de
                     la construcción especializada en estructuras metálicas, instalación de cubiertas, diseño e instalación 
                     de fachadas arquitectónicas y mantenimiento de infraestructura. Nos visualizamos como líderes innovadores, 
                     impulsando el progreso con soluciones de vanguardia que establecen nuevos estándares en durabilidad, eficiencia 
                     y sostenibilidad.</p>
            </div>
            <div class="col-md-4 col-sm-12 ">
                <img src="../assets/img/LogoSubtitulos.png" alt="" class="img-fluid">
            </div>
            <div class="col-md-4 col-sm-12  py-4 text-center">
                <h2 class="text-uppercase vision">visión</h2>
                <p>En Ingsolpro, nos dedicamos a ofrecer servicios de ejecución y supervisión de obras civiles con los más altos
                     estándares de calidad y profesionalismo. Nuestra misión es satisfacer las necesidades de nuestros clientes
                      mediante la entrega puntual de proyectos de construcción seguros y eficientes. Valoramos a nuestros empleados 
                      como el recurso más valioso de la empresa, fomentando un entorno laboral colaborativo y orientado al crecimiento
                       profesional.</p>
            </div>
        </div>

        <section class="text-center d-flex align-items-center justify-content-center quienes-somos px-1 py-5 flex-column">
            <div class="back-ground"></div>
            <img src="../assets/img/quienessomos.jpg" alt="">
            <h1 class="mb-2 text-white">¿Quiénes somos?</h1>
            <p class="w-50 text-white">Somos más que una empresa de construcción; somos INGSOLPRO, un equipo apasionado de profesionales
                 comprometidos con la ingeniería de vanguardia y soluciones integrales. Con sede en Santander, Colombia, nos enorgullece
                  ser un actor clave en el desarrollo de infraestructuras que definen el paisaje arquitectónico de la región.</p>
        </section>

        <section>
            <div class="d-flex justify-content-around flex-wrap people-container">
                <div class="back-ground-yellow"></div>
                <div class="people bg-dark">
                    
                    <h2 class="text-white text-center ">Juan Sebastian Bautista</h2>
                    <p class="text-white text-center">Ingeniero Civil.
                        <br>
                         Gerente de proyectos.</p>

                </div>

                <div class="people bg-dark">
                    
                    <h2 class="text-white text-center ">Juan Camilo Rangel</h2>
                    <p class="text-white text-center"> Ingeniero Civil. 
                        <br>
                        Departamento de obras civiles</p>

                </div>

                <div class="people bg-dark">
                    <h2 class="text-white text-center ">Laura Lopez</h2>
                    <p class="text-white text-center"> Profesional SST.
                        <br>
                         Recursos Humanos.</p>

                </div>

                <div class="people bg-dark">
                    <h2 class="text-white text-center ">Luis Carlos Santos</h2>
                    <p class="text-white text-center">Arquitecto.
                        <br>
                         Departamento de Arquitectura y diseño.</p>

                </div>

                

            </div>
        </section>

        <MyFooter></MyFooter>

    </main>
</template>

<script setup>
import MyFooter from '../components/shared/MyFooter.vue';
import { Icon } from '@iconify/vue';

</script>

<style lang="scss" scoped>
.quienes-somos {
    overflow: hidden;
    position: relative;
    height: 65vh;

    img {
        height: 150px;
    }

    .back-ground {
        position: absolute;
        background:
        linear-gradient(135deg, #166530 21px, #000000 22px, #000000 24px, transparent 24px, transparent 67px, #000000 67px, #000000 69px, transparent 69px),
        linear-gradient(225deg, #166530 21px, #000000 22px, #000000 24px, transparent 24px, transparent 67px, #000000 67px, #000000 69px, transparent 69px)0 64px;
        background-color:#166530;
        background-size: 64px 128px;
        transform: rotate(-10deg);
        z-index: -1;
        width: 200%;
        height: 130%;
    }
}

.personas {
    img {
        max-width: 25%;
    }
}

.mision,
.vision {
    text-shadow: 3px 3px 1px rgb(197, 197, 197);
}

img:hover {
    transition: all .3s;
    transform: scale(1.05);
}

.people-container{
    position: relative;
    overflow: hidden;
    .back-ground-yellow{
        position: absolute;
        background: #b39e09;
        transform: rotate(0deg);
        z-index: -1;
        width: 3000%;
        height: 210%;
    }
    .people{
    width: 27%;
    margin: 1%;
    h2{
        margin: 1rem 0;
    }
    p{
        padding: 0 .5rem ;
    }
    border-radius: 5px;
    margin-bottom: 1rem;
}
}


@media (max-width: 992px) {
    .quienes-somos {
        p {
            width: 100% !important;
        }
    }

    .personas {
        flex-wrap: wrap;

        img {
            width: 100%;
            max-width: none;
        }

        .info-lideres {
            padding: 1rem 0;
        }
    }


    .people{
    width: 100% !important;
}
}


</style>