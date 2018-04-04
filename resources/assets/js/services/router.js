import {loadMainContent} from '@/utils';

export const router = {
    routes: {
        '/home'() {
            loadMainContent('home');
        },
        '/queue'() {
            loadMainContent('queue');
        },
        '/songs'() {
            loadMainContent('songs');
        },
        '/albums'() {
            loadMainContent('albums');
        },
        '/artists'() {
            loadMainContent('artists');
        }
    },

    init() {
        this.loadState();
        window.addEventListener('popstate', () => this.loadState());
    },

    loadState() {
        Object.keys(this.routes).forEach(route => {
            const matches = location.hash.match(new RegExp(`^#!${route}$`));
            if (matches) {
                this.routes[route]();
            }
        })
    }
};