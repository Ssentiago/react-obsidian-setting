import styled from 'styled-components';

export const SettingWrapper = styled.div<{ $noBorder?: boolean }>`
    border-bottom: ${(props) =>
        props.$noBorder ? 'none' : '1px solid var(--color-base-30)'} !important;

    &.react-obsidian-settings-item {
        padding: 8px !important;
        margin-bottom: 12px !important;
        transition: box-shadow 0.3s ease !important;

        .setting-item .button-active {
            background-color: var(--interactive-accent) !important;
            color: var(--text-on-accent) !important;
        }

        &:last-child {
            border-bottom: none !important;
        }

        &.no-border {
            border-bottom: none !important;
        }
    }
`;
