import React, { useEffect, useState } from 'react';
import { ClassNames } from 'shared/lib/ClassNames/ClassNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
    className?: string;
}

// Тестовый компонент, для тестирования ошибок
export const BugButton = (props: BugButtonProps) => {
    const { className = '' } = props;
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError((prev) => !prev);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow} className={ClassNames('', {}, [className])}>
            {/* что бы не ругался eslint на отсутсвие интрнационализации */}
            {/* Throw Error! */}
        </Button>
    );
};
