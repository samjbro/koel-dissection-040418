import Vue from 'vue';
import {event} from '@/services';
import App from '@/components/App';

new Vue({
    el: '#root',
    components: {App},
    template: '<App/>',
    created() {
        event.init();
    }
});