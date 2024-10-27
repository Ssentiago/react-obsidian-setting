import React, { Component } from 'react';

interface MultiDescProps {
    containerEl?: HTMLDivElement;
}

export class MultiDescComponent extends Component<MultiDescProps> {
    private element: HTMLDivElement | null = null;

    constructor(props: MultiDescProps) {
        super(props);
        if (props.containerEl) {
            this.element = props.containerEl;
        }
    }

    componentDidMount(): void {
        const div = document.createElement('div');
        this.element = div;

        if (this.props.containerEl) {
            this.props.containerEl.appendChild(div);
        }
    }

    addDesc(desc: string) {
        if (this.element) {
            const div = document.createElement('div');
            div.textContent = desc;
            this.element.appendChild(div);
        }
    }

    addDescriptions(desc: string[]): this {
        if (this.element) {
            desc.forEach((desc) => this.addDesc(desc));
        }
        return this;
    }

    render(): null {
        return null;
    }
}
