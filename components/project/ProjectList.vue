<template>
    <section>
        <div class="grid">
            <div class="grid__cell m-6">
                <Project
                    link="http://viaequity.com/"
                    imageSrc="via_equity.png"
                    title="VIA Equity"
                    subtitle="Multilingual WordPress Theme"
                />
            </div>
            <div class="grid__cell-large m-6">
                <Project
                    link="https://vl.dk/"
                    imageSrc="vl.png"
                    title="Dansk Selskab for Virksomhedsledelse"
                    subtitle="Event Plugin Development"
                />
            </div>
            <div class="grid__cell-tall m-6">
                <Project
                    link="https://wordpress.org/themes/voltata/"
                    imageSrc="voltata.png"
                    title="Voltata"
                    subtitle="WordPress Repository Theme"
                />
            </div>
            <div class="grid__cell-wide flex m-6 p-6 card bg-green text-white">
                <p>And more.. Maybe your site too?</p>
            </div>
        </div>

        <div class="flex flex-wrap lg:hidden">
            <div class="md:w-1/2">
                <Project
                    hasMargin
                    link="https://vl.dk/"
                    imageSrc="vl.png"
                    title="Dansk Selskab for Virksomhedsledelse"
                    subtitle="Event Plugin Development"
                />
            </div>
            <div class="md:w-1/2">
                <Project
                    hasMargin
                    link="http://viaequity.com/"
                    imageSrc="via_equity.png"
                    title="VIA Equity"
                    subtitle="Multilingual WordPress Theme"
                />
            </div>
            <div class="md:w-1/2">
                <Project
                    hasMargin
                    link="https://wordpress.org/themes/voltata/"
                    imageSrc="voltata.png"
                    title="Voltata"
                    subtitle="WordPress Repository Theme"
                />
            </div>
            <div class="w-full md:w-1/2">
                <div class="h-full card card--flex m-6 p-6 bg-green text-white">
                    <p >And more.. Maybe your site too?</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Project from '~/components/project/Project.vue'

export default {
    name: 'ProjectList',
    components: {
        Project
    }
}
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 992px) {
        display: none;
    }

    &__cell {

        &-large {
            grid-column: 2/4;
            grid-row: 1/3;
        }

        &-tall {
            grid-row: 2/4;
        }

        &-wide {
            grid-column: 2/4;
        }
    }
}
</style>