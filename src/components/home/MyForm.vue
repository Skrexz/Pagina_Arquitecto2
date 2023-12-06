<template>
    <form action="" class="">
        <h3 class="fw-bold">Envianos un mensaje</h3>
        <input type="text" autocomplete="off" id="nombre" placeholder="nombre">
        <input type="email" autocomplete="off" id="correo" placeholder="correo">
        <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje..."></textarea>
        <input type="submit" value="Enviar">
    </form>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>
form {
    h3{
        color: var(--main-green);
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 950px;
    height: 550px;

    label {
        align-self: flex-start;
        padding: 0 22px;
        letter-spacing: 1px;
    }

    input,
    textarea {
        border-radius: 6px;
        margin: 8px 0;
        width: 90%;
        padding: 4px 8px;
        resize: none;
        border: 1px solid rgb(156, 156, 156);
    
        &::placeholder {
            color: rgba(0, 0, 0, 0.452);
            text-transform: capitalize;
            letter-spacing: 1px;
        }
    }

    input[type="submit"] {
        transition: all 0.4s;
        padding: 4px;
        font-weight: bold;
        letter-spacing: 1px;

        &:hover {
            background: linear-gradient(to left, var(--main-green) 50%, transparent 50%);
            background-size: 200% 100%;
            background-position: right;
            color: white;
            box-shadow: none;
        }
    }
}

@media (max-width:992px) {
    form {
        margin: 0 !important;
        width: 100%;
    }
}</style>