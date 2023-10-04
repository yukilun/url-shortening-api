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

    function removeAllLinks() {
        links.forEach((link) => {
            localStorage.removeItem(link[0]);
        })
        links.splice(0)
    }

    return { links, addLink, removeAllLinks };
})