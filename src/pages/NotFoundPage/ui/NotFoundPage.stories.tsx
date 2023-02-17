import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import NotFoundPage from './NotFoundPage';

export default {
    title: 'page/NotFoundPage',
    component: NotFoundPage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const LightPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightPage.args = {};

export const DarkPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkPage.args = {};
DarkPage.decorators = [ThemeDecorator(Theme.DARK)];
