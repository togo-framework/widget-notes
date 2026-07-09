import type { Meta, StoryObj } from "@storybook/react";
import { Notes } from "./index";

const meta = { title: "Widgets/Notes", component: Notes } satisfies Meta<typeof Notes>;
export default meta;

export const Default: StoryObj<typeof Notes> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Notes> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
