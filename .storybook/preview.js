import { addParameters } from "@storybook/react";
import { DocsContainer, DocsPage } from "@storybook/addon-docs";
import { withPerformance } from "storybook-addon-performance";
import "@l3-lib/ui-style/dist/index.min.css";
import {
  AnchorListItem,
  ComponentName,
  ComponentRules,
  DocFooter,
  FunctionArgument,
  FunctionArguments,
  LinkComponent,
  MultipleStoryElementsWrapper,
  Paragraph,
  RelatedComponents,
  SectionName,
  Tip,
  Title,
  UsageGuidelines,
  withMemoryStats
} from "../src/storybook";

addParameters({
  controls: {
    expanded: true,
    sort: "requiredFirst"
  },
  docs: {
    inlineStories: true,
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        {children}
        {<DocFooter />}
      </DocsContainer>
    ),
    page: DocsPage,
    components: {
      h1: ComponentName,
      h2: SectionName,
      h3: Title,
      li: AnchorListItem,
      a: LinkComponent,
      p: Paragraph,
      Tip,
      ComponentRules,
      UsageGuidelines,
      FunctionArguments,
      FunctionArgument,
      RelatedComponents
    }
  },
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      index: -1
    },
    canvas: { title: "Sandbox" }
  },
  themes: {
    default: "Light",
    list: [
      { name: "Dark", class: "dark-app-theme", color: "#1C1F3B" },
      { name: "Black", class: "black-app-theme", color: "#111111" },
      { name: "Light", class: "light-app-them", color: "#ffffff" }

      // { name: "Hacker", class: "hacker_theme-app-theme", color: "#282a36" }
    ]
  },
  options: {
    storySort: {
      order: [
        "Welcome",
        "Foundations",
        "Buttons",
        "Inputs",
        "Data display",
        "Media",
        "Popover",
        "Pickers",
        "*",
        "Accessibility",
        "Hooks"
      ]
    }
  }
});

export const globalTypes = {
  memoryStats: {
    name: "Memory Stats",
    description: "Add Memory Stat tracker",
    defaultValue: "no",
    toolbar: {
      icon: "memory",
      items: [
        { value: "no", right: "🚫", title: "Hide Memory Stat" },
        { value: "yes", right: "✅", title: "Show Memory Stat" }
      ]
    }
  }
};

export const decorators = [
  withPerformance,
  (Story, { className }) => {
    return (
      <MultipleStoryElementsWrapper className={className}>
        <Story />
      </MultipleStoryElementsWrapper>
    );
  },
  withMemoryStats
];
