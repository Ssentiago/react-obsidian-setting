import React, { ReactPortal, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ReactObsidianModalProps {
    children: React.ReactNode;
    onClose: () => void;
    onOpen?: () => void;
    title: string;
}

const ReactObsidianModal = ({
                                children,
                                title,
                                onOpen,
                                onClose,
                            }: ReactObsidianModalProps): ReactPortal => {
    useEffect(() => {
        if (onOpen) {
            onOpen();
        }
    }, [onOpen]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    const modalRoot = document.body;

    return createPortal(
        <div className={'modal-container mod-dim'}>
            <div
                className={'modal-bg'}
                onClick={() => onClose()}
                style={{ opacity: '0.85' }}
            ></div>
            <div className={'modal'}>
                <div
                    className={'modal-close-button'}
                    onClick={() => onClose()}
                ></div>
                <div className={'modal-header'}>
                    <div className={'modal-title'}>{title}</div>
                </div>
                <div className={'modal-content'}>{children}</div>
            </div>
        </div>,
        modalRoot
    );
};

export default ReactObsidianModal;
