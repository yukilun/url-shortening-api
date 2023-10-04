
import LogoVue from '../icon/Logo.vue';
<template>
    <form @submit="handleSubmit" class="absolute top-1/2 -translate-y-1/2 left-[5%] w-[90%] flex flex-col md:flex-row justify-between md:items-center md:gap-5 text-lg md:text-xl">
        <input type="text" placeholder="Shorten a link here" aria-label="url-to-be-shorten" v-model="inputUrl" @input="() => handleInput()"
            class="px-4 py-3 md:px-6 md:py-4 md:flex-grow rounded-lg outline-offset-[3px]" 
            :class='(isEmpty || errorMsg) && "border-[3px] border-red"'>
        <p v-if="isEmpty || errorMsg" class="text-base text-red italic md:absolute md:top-full pt-1">
            {{errorMsg ? errorMsg : 'Please add a link'}}
        </p>
        <div class="bg-white rounded-lg overflow-hidden h-fit w-auto mt-4 md:mt-0">
            <button type="submit" class="w-full text-white bg-cyan font-bold py-3 md:px-9 md:py-4 transition-all duration-300 hover:opacity-50">
                Shorten it!
            </button>
        </div>
    </form>
</template>

<script setup>
import { useLinksStore } from '~/store/LinksStore';
const linksStore = useLinksStore();

const inputUrl = ref('');
const isEmpty = ref(false);
const errorMsg = ref('');

function handleInput() {
    errorMsg.value = '';
    isEmpty.value = inputUrl.value == ''; 
}
async function handleSubmit(e) {
    e.preventDefault();
    if(inputUrl.value == '') {
        isEmpty.value = true;
        return;
    }  
    const { data, error } = await useFetch('/api', {
        method: 'POST',
        body: {url: inputUrl.value}
    });
    if(error.value) {
        errorMsg.value = error.value.data.statusMessage;
    }
    else {
        linksStore.addLink(data.value.url, data.value.token);
    }
}

</script>