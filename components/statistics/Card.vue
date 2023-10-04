<template>
    <div class="card-container w-full text-center md:text-left flex flex-col items-center md:items-start">
        <div class="w-[88px] h-[88px] bg-dark-violet rounded-full flex justify-center items-center z-20 -mb-[44px] md:ml-6">
            <slot></slot>
        </div>
        <div class="card bg-white rounded-lg p-8 lg:p-9 !pt-[80px] z-10">
            <h5 class="text-very-dark-blue text-lg font-bold mb-3">{{ item }}</h5>
            <p class="text-grayish-violet text-sm leading-[1.6]">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
const { item, description } = defineProps(['item', 'description']);
</script>