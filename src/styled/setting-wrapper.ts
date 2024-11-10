import styled from 'styled-components';

export const SettingWrapper = styled.div<{ noBorder?: boolean }>`
    border-bottom: ${(props) =>
        props.noBorder ? 'none' : '1px solid var(--color-base-30)'};

    &:last-child {
        border-bottom: none;
    }
`;
