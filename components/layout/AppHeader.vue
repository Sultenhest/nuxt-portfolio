<template>
    <header id="nav" class="w-full">
        <div class="container mx-auto px-6 h-24 flex justify-between items-center">
            <nuxt-link to="/" title="Home" class="title-link flex items-center no-underline border-none">
                <Logo/>
                <p class="hidden md:block text-inherit">SK Programmering</p>
            </nuxt-link>

            <nav class="navigation">
                <nuxt-link to="/" title="Projects" class="mr-6 border-green">Projects</nuxt-link>
                <nuxt-link to="/profile" title="Profile" class="border-green">Profile</nuxt-link>
            </nav>
        </div>
    </header>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    name: 'AppHeader',
    components: {
        Logo
    }
}
</script>