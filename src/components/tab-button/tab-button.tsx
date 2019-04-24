import { Component, Prop } from "@stencil/core";
import { Colors } from "../../utils";

@Component({
  tag: 'google-tab-button',
  styleUrl: 'tab-button.scss',
  shadow: true
})
export class TabButton {

    @Prop() color: Colors = 'primary';

    cssClasses: string;

    componentWillLoad() {
        this.generateCssClasses();
    }

    private generateCssClasses() {
        const classes = ['tab-button'];
        classes.push(`color-${this.color}`);
        this.cssClasses = classes.join(' ');
    }

    render() {
        return (
            <a class={this.cssClasses}>
                <span class="tab-button-icon">
                    <slot name="icon"></slot>
                </span>
                <span class="tab-button-text">
                    <slot></slot>
                </span>
            </a>
        );
    }

}
