import { Setting as ObsidianSetting } from 'obsidian';
import {
    MomentFormatCallback,
    MultiDescCallback,
    SearchCallback,
    SliderCallback,
    TextAreaCallback,
    TextCallback,
    ToggleCallback,
    ButtonCallback,
    DropdownCallback,
    ExtraButtonCallback,
    SettingCallback,
    SetupSettingManuallyCallback,
} from './types';

export interface ReactSetting extends ObsidianSetting {}

export interface SettingProps {
    addButtons?: SettingCallback<ButtonCallback>[];
    addDropdowns?: SettingCallback<DropdownCallback>[];
    addExtraButtons?: SettingCallback<ExtraButtonCallback>[];
    addMomentFormats?: SettingCallback<MomentFormatCallback>[];
    addSearches?: SettingCallback<SearchCallback>[];
    addSliders?: SettingCallback<SliderCallback>[];
    addTexts?: SettingCallback<TextCallback>[];
    addTextAreas?: SettingCallback<TextAreaCallback>[];
    addToggles?: SettingCallback<ToggleCallback>[];
    addMultiDesc?: SettingCallback<MultiDescCallback>;
    setupSettingManually?: SetupSettingManuallyCallback;
    class?: string;
    desc?: string;
    name?: string;
    setHeading?: boolean;
    setDisabled?: boolean;
    noBorder?: boolean;
}

export interface PrioritizedElement<T> {
    callback: T;
    priority: number;
}

export interface SettingElement {
    type: string;
    callback: any;
    priority: number;
    originalIndex: number;
}
