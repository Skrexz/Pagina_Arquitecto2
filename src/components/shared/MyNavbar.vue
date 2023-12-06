<template>
    <!--Navbar Bootstrap-->
    <nav class="navbar navbar-expand-lg m-0 p-0" id="my-nav-bar">
        <div class="container-fluid">
            <a class="navbar-brand mx-2" href="/">
                <img src="../../assets/img/logoingsolproblanco.png" alt="">
            </a>
            <Icon icon="material-symbols:menu" class="icon navbar-toggler-icon" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            </Icon>
            <div class="collapse navbar-collapse px-3" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item mx-2">
                        <router-link :to="{ name: 'Inicio' }" class="nav-link">Inicio</router-link>
                        <div class="line-hover"></div>
                    </li>
                    <li class="nav-item mx-2">
                        <div class="dropdown">
                            <button class="drop-button" type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                id="button-drop">
                                SERVICIOS
                            </button>
                            <ul class="dropdown-menu">
                                <li><router-link :to="{ name: 'Estructura' }"
                                        class="dropdown-item text-black px-2 text-uppercase">Estructura</router-link></li>
                                <li><router-link :to="{ name: 'Fachadas' }"
                                        class="dropdown-item text-black px-2 text-uppercase">Fachadas</router-link></li>
                                <li><router-link :to="{ name: 'Cubiertas' }"
                                        class="dropdown-item text-black px-2 text-uppercase">Cubiertas</router-link></li>
                                <li><router-link :to="{ name: 'Mantenimientos' }"
                                        class="dropdown-item text-black px-2 text-uppercase">Mantenimientos </router-link></li>
                                <li><router-link :to="{ name: 'Estudios' }"
                                        class="dropdown-item text-black px-2 text-uppercase">Estudio y Diseño</router-link></li>
                                <li><router-link :to="{ name: 'Carpinteria' }"
                                        class="dropdown-item text-black px-2 text-uppercase">Carpinteria metalica</router-link></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item mx-2">
                        <a href="/#contacto" class="nav-link">contacto</a>
                        <div class="line-hover"></div>
                    </li>
                    <li class="nav-item mx-2">
                        <router-link :to="{ name: 'Sobre nosotros' }" class="nav-link">quiénes somos</router-link>
                        <div class="line-hover"></div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { Icon } from '@iconify/vue';

</script>

<style lang="scss" scoped>
nav {
    transition: all 0.4s;
    ;
    height: 55px;
    position: sticky;
    top: 0;
    background: var(--main-green);
    z-index: 999;

    .icon {
        font-size: 28px;
        color: white;
        display: none;
    }

    .nav-link {
        text-transform: uppercase;
    }

    ul {
        .drop-button {
            background: transparent;
            border: none;
            color: rgba(255, 255, 255, 0.603);
            text-transform: uppercase;
            font-weight: bold;
        }

        li {
            a {
                color: rgba(255, 255, 255, 0.603);
                font-weight: bold;
                letter-spacing: 1px;
                padding: 0;

                &:hover {
                    color: rgba(255, 255, 255, 0.603);
                }

                &:hover+.line-hover {
                    width: 100%;
                    background: white;
                }
            }

            .line-hover {
                transition: all 0.4s;
                height: 2px;
                width: 0px;
            }

        }
    }
}

.router-link-exact-active {
    font-weight: bold;
    color: white;
}



img {
    width: 70px;
}

//Mover el listado de links de la barra de navegación a la derecha (cuando no está oculta)
@media (min-width: 992px) {
    #navbarNav {
        display: flex;
        justify-content: flex-end;
    }
}

//Ajustes para que la barra en versión móvil no empuje el contenido hacía abajo
@media (max-width: 992px) {
    #navbarNav {
        position: absolute;
        top: 54px;
        left: 0;
        right: 0;
        background: #fff;
        z-index: 9999;

        ul {
            align-items: center;

            li {
                width: 100%;
                text-align: center;
                padding: 4px 0;

                a {
                    font-weight: normal;
                    color: black;
                }

                .router-link-exact-active {
                    color: var(--main-green) !important;
                }
            }
        }
    }


    .icon {
        display: block !important;
    }
}</style>