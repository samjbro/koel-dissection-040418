import Vue from 'vue';
export const event = {
    bus: null,
    init() {
        if (!this.bus) {
            this.bus = new Vue();
        }
    },
    on(name, cb) {
        this.bus.$on(name, cb);
    },
    emit(name, ...args) {
        this.bus.$emit(name, ...args);
    }
};