<template>
    <div id="carouselExampleAutoplaying" class="carousel slide full-carousel" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="20000">
                <video autoplay muted loop >
                    <source src="../../assets/videoSlider.mp4" type="video/mp4">
                </video>
            </div>
            <div class="carousel-item" data-bs-interval="19000">
                <video autoplay muted loop >
                    <source src="../../assets/sombrillas.mp4" type="video/mp4">
                </video>
            </div>
            <div class="carousel-item" data-bs-interval="21000">
                <video autoplay muted loop >
                    <source src="../../assets/betulia.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" @click="emitChange('-')" aria-hidden="true"></span>
            <span class="visually-hidden" id="previous">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" @click="emitChange('+')" aria-hidden="true"></span>
            <span class="visually-hidden" id="next">Next</span>
        </button>
    </div>
</template>

<script setup>

const emit = defineEmits(['changeImg'])
const emitChange = (data) => {
    emit('changeImg',
        data)
}




</script>

<style lang="scss" scoped>
.full-carousel {
    height: 95vh;
    overflow: hidden !important;

}

video{
    transform: translateY(-20vh);
    width: 100%;
}

@media (max-width: 992px) {
    .full-carousel {
        height: 40vh !important;
        overflow: hidden !important;

        .carousel-inner {
            video {
                height: 50vh !important;
            }
        }
    }

    video{
        transform: translateY(-10%);
    }
}
</style>