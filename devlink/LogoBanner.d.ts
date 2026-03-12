import * as React from "react";
import * as Types from "./types";

declare function LogoBanner(props: {
  as?: React.ElementType;
  variant?: "Base" | "Home";
  popupVisibility?: Types.Boolean.Boolean;
}): React.JSX.Element;
