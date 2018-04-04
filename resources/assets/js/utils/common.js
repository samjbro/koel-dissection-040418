import {event} from '@/services';
export function loadMainContent(view) {
    event.emit('load-main-content:view', view);
}