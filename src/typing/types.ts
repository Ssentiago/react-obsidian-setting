import {
    ButtonComponent,
    DropdownComponent,
    ExtraButtonComponent,
    MomentFormatComponent,
    SearchComponent,
    Setting as ObsidianSetting,
    SliderComponent,
    TextAreaComponent,
    TextComponent,
    ToggleComponent,
} from 'obsidian';
import { MultiDescComponent } from '../custom-components/multi-decsription/MultiDescComponent';
import { PrioritizedElement } from './interfaces';

export type SettingCallback<T> = T | PrioritizedElement<T> | undefined | false;

export type ButtonCallback = (button: ButtonComponent) => ButtonComponent;
export type DropdownCallback = (
    dropdown: DropdownComponent
) => DropdownComponent;
export type ExtraButtonCallback = (
    button: ExtraButtonComponent
) => ExtraButtonComponent;
export type AddMomentFormatCallback = (
    momentFormat: MomentFormatComponent
) => MomentFormatComponent;
export type AddSearchCallback = (search: SearchComponent) => SearchComponent;
export type AddSliderCallback = (slider: SliderComponent) => SliderComponent;
export type AddTextCallback = (text: TextComponent) => TextComponent;
export type AddTextAreaCallback = (
    textArea: TextAreaComponent
) => TextAreaComponent;
export type AddToggleCallback = (toggle: ToggleComponent) => ToggleComponent;
export type AddMultiDescCallback = (
    desc: MultiDescComponent
) => MultiDescComponent;
export type SetupSettingManuallyCallback = (
    setting: ObsidianSetting
) => ObsidianSetting;
