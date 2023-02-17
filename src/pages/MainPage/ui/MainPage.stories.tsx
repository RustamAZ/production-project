import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import MainPage from './MainPage';

export default {
    title: 'page/MainPage',
    component: MainPage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const LightPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightPage.args = {};

export const DarkPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkPage.args = {};
DarkPage.decorators = [ThemeDecorator(Theme.DARK)];
