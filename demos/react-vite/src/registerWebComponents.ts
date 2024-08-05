// taken from https://github.com/ionic-team/stencil/issues/1090#issuecomment-501124883

import { JSX as LocalJSX } from "@newjersey/njwds-components/packages/stencil-library/loader";
import { HTMLAttributes } from "react";

type StencilToReact<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes<Element>, "className"> & {
      class?: string;
    };
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace JSX {
    interface IntrinsicElements
      extends StencilToReact<LocalJSX.IntrinsicElements> {}
  }
}
