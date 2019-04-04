<template>
    <div id="home">
        <section class="w-full bg-grey-light py-32">
            <div class="container px-6 mx-auto">
                <h1 class="text-5xl font-bold mb-3">Simon Konstantyner</h1>
                <p class="text-xl text-grey-darker">is a fullstack webdeveloper</p>
            </div>
        </section>
        
        <section class="container mx-auto my-6">
            <div class="px-6">
                <h2 class="text-3xl font-bold">Projects</h2>
                <p class="text-base text-grey-darker">Selected Work</p>
            </div>

            <ProjectList/>
        </section>
    </div>
</template>

<script>
import ProjectList from '@/components/project/ProjectList.vue'

export default {
    name: 'Home',
    components: {
        ProjectList
    },
    computed: {
        darkmode () {
            return this.$store.getters['darkmode/isDarkmode']
        }
    }
}
</script>

<style>
</style>
