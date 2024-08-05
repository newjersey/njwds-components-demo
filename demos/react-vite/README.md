# React + Vite Demo

This demo uses Vite to setup React, but other development environments such as Create React App should work very similarly as long as you're using client-side rendering.

For an example of server-side rendering, refer to the [`next-js` example](<(https://github.com/newjersey/njwds-components-demo/blob/main/demos/next-js)>)

## Running the Example

1. Make sure you're in the `demos/react-vite` directory.
2. Run `npm install`
3. Run `npm run dev`

Use the buttons at the top of the site to switch between the defineCustomElement and package import examples.

## Adding styles

Whether you want to use NJWDS web or React components, make NJWDS styles available globally by importing the stylesheet in `main.tsx`.

```ts
import "@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/css/styles.css";
```

## Using web components

### Defining custom JSX elements

First, we want to define custom JSX elements for web components by extending `React.JSX`. To do this, add a file (e.g. [`registerWebComponents.ts`](https://github.com/newjersey/njwds-components-demo/blob/main/demos/astro/src/registerWebComponents.ts)) with the following code:

```ts
import { JSX as LocalJSX } from "@newjersey/njwds-components/packages/stencil-library/loader";
import { HTMLAttributes } from "react";

type StencilToReact<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes<Element>, "className"> & {
      class?: string;
    };
};

declare global {
  export namespace React.JSX {
    interface IntrinsicElements
      extends StencilToReact<LocalJSX.IntrinsicElements> {}
  }
}
```

### Importing web components

There are two options for importing web components in Astro:

1. Adding a component-specific package import
2. Registering all components using `defineCustomElements()`

#### Adding a component-specific package import

Import the specific component you want within the React component. This allows you to easily colocate the component import with its usage.

```ts
import "@newjersey/njwds-components/packages/stencil-library/dist/components/njwds-alert";
```

An example usage can be found in [`src/components/PackageImportExample.tsx`](https://github.com/newjersey/njwds-components-demo/blob/main/demos/astro/src/components/PackageImportExample.tsx).

#### Registering web components using `defineCustomElements`

Alternatively, you can make all web components accessible at once by calling `defineCustomElements()` in a `useEffect`.

```ts
useEffect(() => {
  defineCustomElements();
});
```

An example usage can be found in [`src/components/DefineCustomElementsExample.tsx`](https://github.com/newjersey/njwds-components-demo/blob/main/demos/astro/src/components/DefineCustomElementsExample.tsx).

**Note:** This will also make all React components available. Therefore, if you would like to use both React and web components within your project, using `defineCustomElements` may be preferred.

## Using React components

To use React components, first register all NJWDS components using `definCustomElements` as described in the section above.

### Loading assets

To load assets, copy the `img` folder from `/node_modules/@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/img` into the `public` folder.

### Importing components

To import a specific React component, add an import statement from `@newjersey/njwds-components` in the React component.

```tsx
import { NjwdsAlert, NjwdsBanner } from "@newjersey/njwds-components";

import "@newjersey/njwds-components/packages/stencil-library/dist/components/njwds-alert";

export default function PackageImportExample() {
    return (
      <njwds-alert type="warning">
          <span
          >Lorem ipsum dolor sit amet, <a href="">consectetur adipiscing</a> elit, sed
              do eiusmod.
          </span>
      </njwds-alert>
    )
```
