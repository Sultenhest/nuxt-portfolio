<template>
    <a
        class="card bg-white text-black"
        target="_blank"
        :href="link" 
        :class="hasMargin ? 'm-6' : ''"
        :title="title"
    >
        <img class="w-full" :src="imagePath" :alt="title">
        <div class="p-6 -mt-1">
            <h3 class="font-bold text-xl mb-2">
                {{ title }}
            </h3>
            <p
                class="text-grey-darker text-base"
                :if="subtitle"
            >
                {{ subtitle }}
            </p>
        </div>
    </a>
</template>

<script>
export default {
    name: 'Project',
    props: {
        hasMargin: {
            type: Boolean,
            default: false
        },
        link: {
            type: String,
            required: true
        },
        imageSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        }
    },
    computed: {
        imagePath() {
            return require('~/assets/images/' + this.imageSrc);
        },
    }
}
</script>