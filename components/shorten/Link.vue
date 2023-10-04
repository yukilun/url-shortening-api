<template>
    <div class="w-[90%] max-w-[1110px] mx-auto bg-white rounded-lg flex flex-col md:flex-row md:justify-between items-center">
        <div class="w-full px-6 py-3 text-very-dark-blue text-lg whitespace-nowrap overflow-hidden text-ellipsis">
            {{ link[0] }}
        </div>
        <hr class="block w-full border-gray md:hidden" />
        <div class="w-full md:w-auto px-6 py-3 flex flex-col md:flex-row md:items-center gap-5">
            <div class="w-full text-cyan text-lg whitespace-nowrap overflow-hidden text-ellipsis">
            {{ shortenUrl }}
            </div>
            <button type="button" @click="handleCopy" :disabled="isCopied"
                class="text-white px-6 py-2 rounded-lg transition-all duration-300" :class="isCopied ? 'bg-dark-violet' : 'bg-cyan hover:opacity-50' ">
                {{ isCopied ? 'Copied!' : 'Copy' }}
            </button>
        </div>
    </div>
</template>

<script setup>
const { link } = defineProps(['link']);
const isCopied = ref(false);

const config = useRuntimeConfig();
const shortenUrl = computed(() => config.public.apiBase + '/' + link[1] );

function handleCopy() {
    navigator.clipboard.writeText(shortenUrl.value);
    isCopied.value = true;
    setTimeout(() => {
        isCopied.value = false;
    }, 1000);
}
</script>