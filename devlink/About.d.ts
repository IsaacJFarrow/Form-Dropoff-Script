import * as React from "react";
import * as Types from "./types";

declare function About(props: {
  as?: React.ElementType;
  heading?: React.ReactNode;
  paragraph?: React.ReactNode;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
  buttonText?: React.ReactNode;
  buttonLink?: React.ReactNode;
  image?: Types.Asset.Image;
}): React.JSX.Element;
