<template>
    <div class="fixed inset-0 
    h-[--mobile-header-height] app-tablet:h-[--tablet-header-height] app-desktop:h-[--desktop-header-height]
    ">
        <header class="h-full flex flex-col justify-center">
            <div v-html="logoSvg" class="logo-svg"></div>
        </header>
    </div>
</template>

<script lang="ts" setup>
import logoSvg from '/src/assets/images/logo.svg?raw'
</script>

<style lang="scss" scoped>
.logo-svg {
    @apply mx-auto;
    @apply *:h-[40px] *:app-desktop:h-[60px]
}
</style>