import { ReactObsidianSetting } from '../../main';
import { createRoot, Root } from 'react-dom/client';
import React from 'react';


export default class DetailsSummaryComponent {
    private readonly element: HTMLElement;
    private readonly details: HTMLDetailsElement;
    private readonly summary: HTMLElement;
    private settingsContainer: HTMLDivElement;
    private root: Root;

    constructor(containerEl: HTMLElement) {
        this.element = containerEl;
        this.details = this.element.createEl('details');
        this.summary = this.details.createEl('summary');
        this.settingsContainer = this.details.createEl('div');
        this.root = createRoot(this.settingsContainer);
    }

    setSummary(text: string) {
        this.summary.textContent = text;
    }

    setDetails(callback: () => React.ReactElement) {
        this.root.render(callback());
        return this;
    }

    cleanup() {
        this.root.unmount();
    }
}
