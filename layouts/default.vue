<template>
    <div id="app" class="antialiased font-sans">
        <AppHeader/>

        <main id="main" class="w-full">
            <nuxt/>
        </main>

        <AppFooter/>
    </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/layout/AppFooter.vue'

export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<style>
</style>
