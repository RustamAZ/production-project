import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    title: 'Рустам Аббязов',
    text: 'Рустам Аббязов',
};

export const DarkDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkDefault.args = {
    title: 'Рустам Аббязов',
    text: 'Рустам Аббязов',
};

DarkDefault.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SizeL.args = {
    title: 'Рустам Аббязов',
    text: 'Рустам Аббязов',
    size: TextSize.L,
};

export const OnlyTitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnlyTitle.args = {
    title: 'Рустам Аббязов',
};

export const OnlyText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnlyText.args = {
    text: 'Рустам Аббязов',
};

export const DarkOnlyTitle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkOnlyTitle.args = {
    title: 'Рустам Аббязов',
};
DarkOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOnlyText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DarkOnlyText.args = {
    text: 'Рустам Аббязов',
};
DarkOnlyText.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
    title: 'Рустам Аббязов',
    text: 'Рустам Аббязов',
    theme: TextTheme.ERROR,
};
Error.decorators = [ThemeDecorator(Theme.DARK)];
