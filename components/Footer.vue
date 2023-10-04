<template>
    <footer class="bg-very-dark-violet text-grayish-violet text-sm text-center md:text-left py-16">
        <div class="w-[90%] max-w-[1110px] mx-auto flex flex-col md:flex-row gap-8 md:gap-14 lg:gap-20 items-center md:items-start">
            <div class="flex-grow">
                <IconLogo fillColor="#FFFFFF" class="max-w-full"/>
            </div>
            <div class="flex flex-col md:flex-row gap-8 md:gap-14 lg:gap-20 items-center md:items-start">
                <div v-for="key in Object.keys(footerLinks)" :key="key">
                    <p class="font-bold text-white mb-3">{{ key }}</p>
                    <ul>
                        <li v-for="link in footerLinks[key]" :key="link.name" class="mb-2">
                            <a :href="link.link" class="transition-all duration-300 hover:text-cyan">
                                {{ link.name }}
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="flex gap-5">
                    <li><a href="#" class="group"><IconFacebook /></a></li>
                    <li><a href="#" class="group"><IconTwitter /></a></li>
                    <li><a href="#" class="group"><IconPinterest /></a></li>
                    <li><a href="#" class="group"><IconInstagram /></a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup>
const footerLinks = {
    'Features': [
        { name: 'Link Shortening', link: '#' },
        { name: 'Branded Links', link: '#' },
        { name: 'Analytics', link: '#' },
    ],
    'Resources': [
        { name: 'Blog', link: '#' },
        { name: 'Developers', link: '#' },
        { name: 'Support', link: '#' },
    ],
    'Company': [
        { name: 'About', link: '#' },
        { name: 'Our Team', link: '#' },
        { name: 'Careers', link: '#' },
        { name: 'Contact', link: '#' }
    ]
}
</script>