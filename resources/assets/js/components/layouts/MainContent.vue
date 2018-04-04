<template>
    <section class="main-content">
        <home v-show="currentView === 'home'"/>
        <queue v-show="currentView === 'queue'"/>
        <songs v-show="currentView === 'songs'"/>
        <albums v-show="currentView === 'albums'"/>
        <artists v-show="currentView === 'artists'"/>
    </section>
</template>

<script>
    import {event} from '@/services';
    import Home from '@/components/home/Home';
    import Queue from '@/components/queue/Queue';
    import Songs from '@/components/songs/Songs';
    import Albums from '@/components/albums/Albums';
    import Artists from '@/components/artists/Artists';
    export default {
        components: {Home, Queue, Songs, Albums, Artists},

        data() {
            return {
                currentView: 'home' // default view
            }
        },
        created() {
            event.on('load-main-content:view', view => {
               this.currentView = view;
            });
        }
    }
</script>
<style lang="scss">
    .main-content {
        color: black;
    }
</style>