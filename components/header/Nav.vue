<template>
    <nav class="font-bold text-lg lg:text-base text-center flex-grow lg:flex justify-between gap-4">
        <ul class="flex flex-col lg:flex-row gap-3 lg:gap-0">
            <li v-for="navLink in navLinks">
                <a :href="navLink.link" class="block text-white lg:text-grayish-violet px-6 py-2 transition-all duration-300 hover:text-grayish-violet lg:hover:text-very-dark-blue">
                    {{navLink.name}}
                </a>
            </li>
        </ul>
        <hr class="block my-5 border-grayish-violet lg:hidden" />
        <ul class="flex flex-col lg:flex-row gap-3">
            <li >
                <a href="#" class="block text-white lg:text-grayish-violet px-6 py-2 transition-all duration-300 hover:text-grayish-violet lg:hover:text-very-dark-blue">
                    Login
                </a>
            </li>
            <li>
                <a href="#" class="block text-white bg-cyan px-6 py-2 rounded-full transition-all duration-300 hover:opacity-50">
                    Sign Up
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const navLinks = [
    {name: 'Features', link: '#'},
    {name: 'Pricing', link: '#'},
    {name: 'Resources', link: '#'},
];
</script>