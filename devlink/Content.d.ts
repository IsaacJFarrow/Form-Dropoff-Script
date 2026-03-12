import * as React from "react";
import * as Types from "./types";

declare function Content(props: {
  as?: React.ElementType;
  eyebrowText?: React.ReactNode;
  eyebrowVisibility?: Types.Visibility.VisibilityConditions;
  heading?: React.ReactNode;
  paragraph?: React.ReactNode;
}): React.JSX.Element;
