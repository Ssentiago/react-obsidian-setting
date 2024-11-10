import React, { useCallback, useLayoutEffect } from 'react';
import { Setting as ObsidianSetting } from 'obsidian';
import { MultiDescComponent } from '../custom-components/multi-decsription/MultiDescComponent';
import {
    PrioritizedElement,
    ReactSetting,
    SettingElement,
    SettingProps,
} from '../typing/interfaces';
import { SettingWrapper } from '../styled/setting-wrapper';

function isPrioritizedElement<T>(
    element: T | PrioritizedElement<T>
): element is PrioritizedElement<T> {
    return undefined !== (element as PrioritizedElement<T>).priority;
}

export const ReactObsidianSetting: React.FC<SettingProps> = ({
    name,
    desc,
    setHeading,
    setDisabled,
    noBorder,
    class: className,
    addToggles,
    addTexts,
    addTextAreas,
    addMomentFormats,
    addDropdowns,
    addSearches,
    addButtons,
    addExtraButtons,
    addSliders,
    addMultiDesc,
    setupSettingManually,
}) => {
    const settingRef = React.useRef<ReactSetting>();
    const containerRef = React.useRef<HTMLDivElement>(null);

    const setupSetting = useCallback(
        (setting: ReactSetting) => {
            if (setupSettingManually) {
                setupSettingManually(setting);
            }
            if (name) {
                setting.setName(name);
            }
            if (desc) {
                setting.setDesc(desc);
            }

            if (addMultiDesc) {
                const callback = isPrioritizedElement(addMultiDesc)
                    ? addMultiDesc.callback
                    : addMultiDesc;

                const descContainer = document.createElement('div');
                descContainer.addClass('setting-item-description');

                if (setting.infoEl) {
                    setting.infoEl.appendChild(descContainer);
                }

                const multiDesc = new MultiDescComponent({
                    containerEl: descContainer,
                });

                callback(multiDesc);
            }

            if (setHeading) {
                setting.setHeading();
            }
            if (setDisabled) {
                setting.setDisabled(setDisabled);
            }
            if (className) {
                setting.setClass(className);
            }

            const elements: SettingElement[] = [
                ...(addToggles?.map((toggle, index) => ({
                    type: 'toggle',
                    callback: isPrioritizedElement(toggle)
                        ? toggle.callback
                        : toggle,
                    priority: isPrioritizedElement(toggle)
                        ? toggle.priority
                        : 0,
                    originalIndex: index,
                })) ?? []),
                ...(addTexts?.map((text, index) => ({
                    type: 'text',
                    callback: isPrioritizedElement(text) ? text.callback : text,
                    priority: isPrioritizedElement(text) ? text.priority : 0,
                    originalIndex: index,
                })) ?? []),
                ...(addTextAreas?.map((textArea, index) => ({
                    type: 'textArea',
                    callback: isPrioritizedElement(textArea)
                        ? textArea.callback
                        : textArea,
                    priority: isPrioritizedElement(textArea)
                        ? textArea.priority
                        : 0,
                    originalIndex: index,
                })) ?? []),
                ...(addMomentFormats?.map((format, index) => ({
                    type: 'momentFormat',
                    callback: isPrioritizedElement(format)
                        ? format.callback
                        : format,
                    priority: isPrioritizedElement(format)
                        ? format.priority
                        : 0,
                    originalIndex: index,
                })) ?? []),
                ...(addDropdowns?.map((dropdown, index) => ({
                    type: 'dropdown',
                    callback: isPrioritizedElement(dropdown)
                        ? dropdown.callback
                        : dropdown,
                    priority: isPrioritizedElement(dropdown)
                        ? dropdown.priority
                        : 0,
                    originalIndex: index,
                })) ?? []),
                ...(addSearches?.map((search, index) => ({
                    type: 'search',
                    callback: isPrioritizedElement(search)
                        ? search.callback
                        : search,
                    priority: isPrioritizedElement(search)
                        ? search.priority
                        : 0,
                    originalIndex: index,
                })) ?? []),
                ...(addButtons?.map((button, index) => ({
                    type: 'button',
                    callback: isPrioritizedElement(button)
                        ? button.callback
                        : button,
                    priority: isPrioritizedElement(button)
                        ? button.priority
                        : 0,
                    originalIndex: index,
                })) ?? []),
                ...(addExtraButtons?.map((button, index) => ({
                    type: 'extraButton',
                    callback: isPrioritizedElement(button)
                        ? button.callback
                        : button,
                    priority: isPrioritizedElement(button)
                        ? button.priority
                        : 0,
                    originalIndex: index,
                })) ?? []),
                ...(addSliders?.map((slider, index) => ({
                    type: 'slider',
                    callback: isPrioritizedElement(slider)
                        ? slider.callback
                        : slider,
                    priority: isPrioritizedElement(slider)
                        ? slider.priority
                        : 0,
                    originalIndex: index,
                })) ?? []),
            ].filter(
                (element): element is SettingElement =>
                    element.callback !== undefined && element.callback !== false
            );

            const sortedElements = elements.sort((a, b) => {
                if (a.priority === b.priority) {
                    return a.originalIndex - b.originalIndex;
                }
                return a.priority - b.priority;
            });

            sortedElements.forEach((element) => {
                switch (element.type) {
                    case 'toggle':
                        setting.addToggle(element.callback);
                        break;
                    case 'text':
                        setting.addText(element.callback);
                        break;
                    case 'textArea':
                        setting.addTextArea(element.callback);
                        break;
                    case 'momentFormat':
                        setting.addMomentFormat(element.callback);
                        break;
                    case 'dropdown':
                        setting.addDropdown(element.callback);
                        break;
                    case 'search':
                        setting.addSearch(element.callback);
                        break;
                    case 'button':
                        setting.addButton(element.callback);
                        break;
                    case 'extraButton':
                        setting.addExtraButton(element.callback);
                        break;
                    case 'slider':
                        setting.addSlider(element.callback);
                        break;
                }
            });
        },
        [
            name,
            desc,
            setHeading,
            setDisabled,
            className,
            addToggles,
            addTexts,
            addTextAreas,
            addMomentFormats,
            addDropdowns,
            addSearches,
            addButtons,
            addExtraButtons,
            addSliders,
            addMultiDesc,
            setupSettingManually,
        ]
    );

    useLayoutEffect(() => {
        if (!containerRef.current) {
            return;
        }

        containerRef.current.empty();
        settingRef.current = new ObsidianSetting(
            containerRef.current
        ) as ReactSetting;
        setupSetting(settingRef.current);

        return () => {
            containerRef.current?.empty();
        };
    }, [setupSetting]);

    return (
        <SettingWrapper
            noBorder={noBorder}
            ref={containerRef}
            className={`react-obsidian-settings-item ${className ?? ''}`}
        />
    );
};
