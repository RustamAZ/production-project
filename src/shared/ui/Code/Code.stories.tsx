import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
    text: `
    import { ComponentStory, ComponentMeta } from '@storybook/react';
    import { Code } from './Code';
    
    export default {
        title: 'shared/Code',
        component: Code,
        // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
        argTypes: {
            backgroundColor: { control: 'color' },
        },
    } as ComponentMeta<typeof Code>;
    
    const Template: ComponentStory<typeof v> = (args) => <Code {...args} />;
    
    export const Normal = Template.bind({});
    `,
};
