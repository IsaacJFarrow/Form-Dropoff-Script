import * as React from "react";
import * as Types from "./types";

declare function FormCta(props: {
  as?: React.ElementType;
  eyebrowText?: React.ReactNode;
  eyebrowVisibility?: Types.Visibility.VisibilityConditions;
  heading?: React.ReactNode;
  paragraph?: Types.Basic.RichTextChildren;
  formButtonText?: React.ReactNode;
  image?: Types.Asset.Image;
}): React.JSX.Element;
