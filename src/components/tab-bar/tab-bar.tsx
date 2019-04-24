import { Component, Element, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'google-tab-bar',
    styleUrl: 'tab-bar.scss',
    shadow: true
})
export class TabBar {

    @Element() element: Element;

    @Event() tabChange: EventEmitter;

    componentDidLoad() {
        this.tabButtonHandler();
    }

    private tabButtonHandler() {
        this.element.addEventListener('click', event => {
            const target = event.target as HTMLElement;
            const tabButton = target.closest('google-tab-button');
            if (tabButton) {
                const tabButtons = this.element.querySelectorAll('google-tab-button');
                tabButtons.forEach(tabButton => {
                    if (tabButton.classList.contains('active')) {
                        tabButton.classList.remove('active');
                    }
                });
                tabButton.classList.add('active');
                this.tabChange.emit(tabButton);
            }
        });
    }

    render() {
        return (
            <nav class="tab-bar">
                <slot></slot>
            </nav>
        );
    }
}
