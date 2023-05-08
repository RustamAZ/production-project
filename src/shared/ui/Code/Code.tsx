import { ClassNames } from 'shared/lib/ClassNames/ClassNames';

import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Code.module.scss';
import { Button, ThemeButton } from '../Button/Button';
import Copy from '../../assets/icons/copy.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const {
        className = '',
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    const { t } = useTranslation();

    return (
        <pre className={ClassNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} theme={ThemeButton.CLEAR} className={cls.copyBtn}>
                <Copy className={cls.copyBtn} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
