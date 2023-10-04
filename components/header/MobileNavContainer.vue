<template>
    <div class="absolute top-full right-0 rounded-xl bg-dark-violet overflow-hidden transition-all duration-500 lg:!hidden" 
        :class="isOpen ? 'w-full h-auto px-8 pt-5 pb-10' : 'w-0 h-0'">
        <HeaderNav />
    </div>
</template>

<script setup>
const { isOpen } = defineProps(['isOpen']);
</script>