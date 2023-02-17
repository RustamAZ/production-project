import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: 'text',
    theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
    children: 'text',
    theme: AppLinkTheme.SECONDARY,
};

export const Red = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Red.args = {
    children: 'text',
    theme: AppLinkTheme.RED,
};

export const PrimaryDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryDark.args = {
    children: 'text',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SecondaryDark.args = {
    children: 'text',
    theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RedDark.args = {
    children: 'text',
    theme: AppLinkTheme.RED,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
