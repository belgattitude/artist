// This file is required to use MDX in `app` directory.
import type { ComponentType } from 'react';
export function useMDXComponents(components: {
  [component: string]: ComponentType;
}) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  };
}
