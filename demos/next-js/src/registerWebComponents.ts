// taken from https://github.com/ionic-team/stencil/issues/1090#issuecomment-501124883

import { JSX as LocalJSX } from "@newjersey/stencil-react-export/packages/stencil-library/loader";
import { HTMLAttributes } from "react";

type StencilToReact<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes<Element>, "className"> & {
      class?: string;
    };
};

declare global {
  export namespace JSX {
    interface IntrinsicElements
      extends StencilToReact<LocalJSX.IntrinsicElements> {}
  }
}
