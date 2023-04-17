import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

export default {
    title: 'page/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const LightPage = Template.bind({});
LightPage.args = {};
LightPage.decorators = [StoreDecorator({
    profile: {
        data: {
            username: 'admin',
            age: 20,
            country: Country.Kazakhstan,
            lastname: 'Ernie',
            first: 'Sesame',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
            city: 'Test',
            currency: Currency.USD,
        },
        form: {
            username: 'admin',
            age: 20,
            country: Country.Kazakhstan,
            lastname: 'Ernie',
            first: 'Sesame',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
            city: 'Test',
            currency: Currency.USD,
        },
    },
})];

export const DarkPage = Template.bind({});
DarkPage.args = {};
DarkPage.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
