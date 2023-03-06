import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    title: 'Введите текст',
    text: 'Рустам Аббязов',
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
    title: 'Введите текст',
    text: 'Рустам Аббязов',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnlyTitle.args = {
    title: 'Введите текст',
};

export const OnlyText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnlyText.args = {
    text: 'Рустам Аббязов',
};

export const PrimaryDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryDark.args = {
    title: 'Введите текст',
    text: 'Рустам Аббязов',
};
PrimaryDark.decorators = [(ThemeDecorator(Theme.DARK))];

export const OnlyTitleDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnlyTitleDark.args = {
    title: 'Введите текст',
};
OnlyTitleDark.decorators = [(ThemeDecorator(Theme.DARK))];

export const OnlyTextDark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnlyTextDark.args = {
    text: 'Рустам Аббязов',
};
OnlyTextDark.decorators = [(ThemeDecorator(Theme.DARK))];
