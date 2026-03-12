import * as React from "react";
import * as Types from "./types";

declare function Testimonials(props: {
  as?: React.ElementType;
  variant?: "Base" | "White" | "Home";
  topSpacing?: Types.Visibility.VisibilityConditions;
  headingText?: React.ReactNode;
}): React.JSX.Element;
