<template>
    <section class="main-wrapper">
        <sidebar/>
        <main-content/>
    </section>
</template>

<script>
    import Sidebar from '@/components/layouts/Sidebar';
    import MainContent from '@/components/layouts/MainContent';
    export default {
        components: {Sidebar, MainContent}
    }
</script>

<style lang="scss">
    .main-wrapper {
        flex: 1;
        display: flex;
    }
</style>