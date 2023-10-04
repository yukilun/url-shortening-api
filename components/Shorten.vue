<template>
    <section id="shorten" class="bg-light-violet flex flex-col pb-28 gap-6">
        <div class="w-[90%] max-w-[1110px] mx-auto h-[218px] md:h-[168px] -mt-[109px] md:-mt-[84px] 
                flex justify-end bg-dark-violet rounded-lg overflow-hidden relative">
            <BgShortenDesktop class="w-full hidden md:block" />
            <BgShortenMobile class="w-[70%] md:hidden "/>
            <ShortenForm />
        </div>
        <ShortenLink v-for="link, idx in linksStore.links" :key="idx" :link="link" />
        <button v-if="linksStore.links.length > 0" type="button" @click="linksStore.removeAllLinks"
            class="mx-auto mt-2 text-white bg-red px-6 py-3 rounded-lg font-bold md:text-lg 
            transition-all duration-300 hover:opacity-50">
            Clear All
        </button>
    </section>
</template>

<script setup>
import { useLinksStore } from '~/store/LinksStore';
const linksStore = useLinksStore();
</script>