import * as React from "react";
import * as Types from "./types";

declare function ResourcesCard(props: {
  as?: React.ElementType;
  variant?: "Base" | "Cloneables" | "Related" | "Related Snippet";
  heading?: React.ReactNode;
  link?: Types.Basic.Link;
  thumbnailImage?: Types.Asset.Image;
  altText?: Types.Basic.AltText;
  subheading?: React.ReactNode;
  subheadingVisibility?: Types.Visibility.VisibilityConditions;
  tagText?: React.ReactNode;
  buttonClass?: Types.Builtin.Text;
}): React.JSX.Element;
