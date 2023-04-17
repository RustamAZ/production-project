import { useTranslation } from 'react-i18next';
import { ClassNames, Mods } from 'shared/lib/ClassNames/ClassNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readonly?: boolean
    OnChangeFirstname?: (value: string) => void
    OnChangeLastname?: (value: string) => void
    OnChangeAge?: (value: string) => void
    OnChangeCity?: (value: string) => void
    OnChangeAvatar?: (value: string) => void
    OnChangeUsername?: (value: string) => void
    OnChangeCurrency?: (value: Currency) => void
    OnChangeCountry?: (value: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className = '',
        data,
        isLoading,
        error,
        readonly,
        OnChangeFirstname,
        OnChangeLastname,
        OnChangeAge,
        OnChangeCity,
        OnChangeAvatar,
        OnChangeUsername,
        OnChangeCurrency,
        OnChangeCountry,
    } = props;

    const { t } = useTranslation();

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    if (isLoading) {
        return (
            <div className={ClassNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={ClassNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте перезагрузить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={ClassNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar
                    ? (
                        <div className={cls.avatarWrapper}>
                            <Avatar alt={t('Аватар')} src={data.avatar} />
                        </div>
                    )

                    : null }
                <Input
                    label={t('Ваше имя')}
                    value={data?.first}
                    className={cls.input}
                    onChange={OnChangeFirstname}
                    readOnly={readonly}
                />
                <Input
                    label={t('Ваше фамилия')}
                    value={data?.lastname}
                    className={cls.input}
                    onChange={OnChangeLastname}
                    readOnly={readonly}
                />
                <Input
                    label={t('Ваше имя пользователя')}
                    value={data?.username}
                    className={cls.input}
                    onChange={OnChangeUsername}
                    readOnly={readonly}
                />
                <Input
                    label={t('Ваш возраст')}
                    value={data?.age}
                    className={cls.input}
                    onChange={OnChangeAge}
                    readOnly={readonly}
                />
                <Input
                    label={t('Ваш город')}
                    value={data?.city}
                    className={cls.input}
                    onChange={OnChangeCity}
                    readOnly={readonly}
                />
                <Input
                    label={t('Введит ссылку на аватар')}
                    value={data?.avatar}
                    className={cls.input}
                    onChange={OnChangeAvatar}
                    readOnly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={OnChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={OnChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
