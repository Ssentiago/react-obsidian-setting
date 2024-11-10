import { Setting as ObsidianSetting } from 'obsidian';
import {
    AddMomentFormatCallback,
    AddMultiDescCallback,
    AddSearchCallback,
    AddSliderCallback,
    AddTextAreaCallback,
    AddTextCallback,
    AddToggleCallback,
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
    addMomentFormats?: SettingCallback<AddMomentFormatCallback>[];
    addSearches?: SettingCallback<AddSearchCallback>[];
    addSliders?: SettingCallback<AddSliderCallback>[];
    addTexts?: SettingCallback<AddTextCallback>[];
    addTextAreas?: SettingCallback<AddTextAreaCallback>[];
    addToggles?: SettingCallback<AddToggleCallback>[];
    addMultiDesc?: SettingCallback<AddMultiDescCallback>;
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
