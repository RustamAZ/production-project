import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import ProfilePage from './ProfilePage';

export default {
    title: 'page/ProfilePage',
    component: ProfilePage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const LightPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightPage.args = {};
LightPage.decorators = [StoreDecorator({})];

export const DarkPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkPage.args = {};
DarkPage.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
