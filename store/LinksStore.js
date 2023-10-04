import { defineStore } from 'pinia'

export const useLinksStore = defineStore('links', () => {
    const links = reactive([]);
    
    onMounted(() => {
        for(const [key, value] of Object.entries(localStorage)) {
            if(key.startsWith('http:') || key.startsWith('https:')) {
                links.push([key, value]);
            }
        }
    });

    function addLink(url, token) {
        let foundIdx = links.findIndex(link => link[0] == url);
        if(foundIdx == -1) {
            localStorage.setItem(url, token);
        }
        links.push([url, token]);
    }

    return { links, addLink };
})