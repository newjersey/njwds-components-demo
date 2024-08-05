# Next.js Demo

## Running the Example

1. Make sure you're in the `demos/next-js` directory.
2. Run `npm install`.
3. Run `npm run dev`.

Use the links to navigate between the defineCustomElement and package import examples.

## Adding styles

Whether you want to use NJWDS web or React components, make NJWDS styles available globally by importing the stylesheet in the [root `layout.tsx`](https://github.com/newjersey/njwds-components-demo/blob/main/demos/next-js/src/app/layout.tsx).

```ts
import "@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/css/styles.css";
```

## Using web components

### Defining custom JSX elements

First, we want to define custom JSX elements for web components by extending `React.JSX`. To do this, add a file (e.g. [`registerWebComponents.ts`](https://github.com/newjersey/njwds-components-demo/blob/main/demos/next-js/src/registerWebComponents.ts)) with the following code:

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

There are two options for importing web components:

1. Adding a component-specific package import (not recommended)
2. Registering all components using `defineCustomElements()`

#### Adding a component-specific package import (not recommended)

Import the specific component you want within the React component. This allows you to easily colocate the component import with its usage.

```ts
import "@newjersey/njwds-components/packages/stencil-library/dist/components/njwds-alert";
```

**Note**: To use the package import method, the import must be within a client component (see [`src/components/WebNjwdsAlertWrapper.tsx`](https://github.com/newjersey/njwds-components-demo/blob/main/demos/next-js/src/components/WebNjwdsAlertWrapper.tsx)).

**Note**: When using this import method, you may occasionally get the following runtime error when slots are not valid children of the web component:

> Error: Hydration failed because the initial UI does not match what was rendered on the server.

For example, `<span>` is not a valid child of `<njwds-alert>`, even though once the `<njwds-alert>` component is hydrated, the `<span>` will be nested inside a `<p>`.

Within our testing, we were able to avoid this error by importing web components using `defineCustomElements` and directly referencing the web component in a server component (see the [defineCustomElements example](https://github.com/newjersey/njwds-components-demo/blob/main/demos/next-js/src/app/define-custom-elements/page.tsx))

#### Registering web components using `defineCustomElements`

Alternatively, you can make all web components accessible at once by calling `defineCustomElements()` client-side.

There are multiple ways to achieve this, but this example calls a `useEffect` within the [`DefineCustomElementsLoader`](https://github.com/newjersey/njwds-components-demo/blob/main/demos/next-js/src/DefineCustomElementsLoader.tsx) component. For the sake of this example, the component is added to the [define-custom-elements page layout](https://github.com/newjersey/njwds-components-demo/blob/main/demos/next-js/src/app/define-custom-elements/layout.tsx). If you wanted to make the components availabe on any page within the app, you could add this component to the root layout (e.g. `src/pages/layout.tsx`) instead.

**Note:** This will also make all React components available. Therefore, if you would like to use both React and web components within your project, using `defineCustomElements` may be preferred.

## Using React components

To use React components, first register all NJWDS components using `defineCustomElements` as described in the section above.

### Loading assets

To load assets, copy the `img` folder from `/node_modules/@newjersey/njwds-components/packages/stencil-library/dist/stencil-library/img` into the `public` folder.

### Importing components

To import a specific React component, add an import statement from `@newjersey/njwds-components` in the React component.

```tsx
import { NjwdsAlert } from "@newjersey/njwds-components";
```

Since the NJDWS React component's underlying web component has to run client-side, it must be wrapped in a client component (see [ReactNjwdsAlertWrapper](https://github.com/newjersey/njwds-components-demo/blob/main/demos/next-js/src/components/ReactNjwdsAlertWrapper.tsx)).
