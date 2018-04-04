<template>
    <nav class="sidebar">
        <section class="sidebar__section sidebar__section--music">
            <h1 class="sidebar__header">Your Music</h1>
            <ul class="sidebar__menu">
                <li><a href="#!/home"
                       :class="classObject('home')">Home</a>
                </li>
                <li><a href="#!/queue"
                       :class="classObject('queue')">Queue</a>
                </li>
                <li><a href="#!/songs"
                       :class="classObject('songs')">Songs</a>
                </li>
                <li><a href="#!/albums"
                       :class="classObject('albums')">Albums</a>
                </li>
                <li><a href="#!/artists"
                       :class="classObject('artists')">Artists</a>
                </li>
            </ul>
        </section>
    </nav>
</template>

<script>
    import {event} from '@/services';

    export default {
        data() {
            return {
                currentView: 'home'
            }
        },
        methods: {
            classObject(modifier) {
                return [
                    'sidebar__link',
                    'sidebar__link--' + modifier,
                    {'sidebar__link--active': this.currentView === modifier}
                ];
            }
        },
        created() {
            event.on('load-main-content:view', view => {
                this.currentView = view;
            })
        }
    }
</script>

<style lang="scss">
    @import "~#/variables";

    .sidebar {
        flex: 0 0 $sidebar-width;
        background-color: $color-sidebar-bgr;
        padding: 2.2rem 0 0;

        &__section {
            margin-bottom: 3.2rem;
        }

        &__header {
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 0 1.6rem;
            margin-bottom: 1.2rem;
        }

        &__link {
            display: block;
            height: 3.6rem;
            line-height: 3.6rem;
            padding: 0 1.2rem 0 1.6rem;
            border-left: 4px solid transparent;

            &:hover,
            &--active {
                color: $color-link-hovered;
                background: rgba($color-white, .05);
                box-shadow: 0 1px 0 rgba(0, 0, 0, .1);
            }
            &--active {
                border-left-color: $color-highlight;
            }
            &:hover {
                border-left-color: darken($color-highlight, 20%);
            }
            &:active {
                opacity: .5;
            }

            &::before {
                width: 2.4rem;
                display: inline-block;
                font-family: FontAwesome;
            }

            &--home::before {
                content: "\f015";
            }
            &--queue::before {
                content: "\f0cb";
            }
            &--songs::before {
                content: "\f001";
            }
            &--albums::before {
                content: "\f152";
            }
            &--artists::before {
                content: "\f130";
            }
        }
    }
</style>