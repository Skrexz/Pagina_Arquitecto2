<template>
    <div class="project-text-box">
        <p class="p-3">{{ texto }}</p>
    </div>
</template>

<script setup>
const props = defineProps(['texto'])
</script>

<style lang="scss" scoped>
.project-text-box {
    width: 25vw;
    height: 250px;
    p {
        word-break: break-all;
    }
}

@media (max-width: 992px){
        .project-text-box{
            width: 100%;
        }
    }
</style>