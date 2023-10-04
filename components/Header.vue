<template>
    <header class="w-[90%] max-w-[1110px] mx-auto pt-10 pb-5 md:pb-10 flex justify-between items-center gap-10 relative">
        <IconLogo fillColor="#34313D"/>
        <HeaderNav class="hidden lg:flex" />
        <button type="button" class="block p-3 lg:hidden" aria-label="open-menu" @click="toggleNavMenu">
            <IconHamburger />
        </button>
        <HeaderMobileNavContainer :isOpen="isOpenNavMenu"/>
    </header>
</template>

<script setup>
const isOpenNavMenu = ref(false);
function toggleNavMenu() {
    isOpenNavMenu.value = !isOpenNavMenu.value;
}
</script>