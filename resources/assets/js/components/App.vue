<template>
    <section class="app">
        <main-wrapper v-if="authenticated"/>
        <login-wrapper v-else/>
    </section>
</template>

<script>
    import {router} from '@/services';
    import MainWrapper from '@/components/layouts/MainWrapper';
    import LoginWrapper from '@/components/layouts/LoginWrapper';

    export default {
        components: {MainWrapper, LoginWrapper},
        data() {
            return {
                authenticated: true
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                router.init();
            }
        }
    }
</script>

<style lang="scss">
    .app {
        height: 100vh;
        display: flex;
    }
</style>