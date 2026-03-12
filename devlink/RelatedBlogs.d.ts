import * as React from "react";
import * as Types from "./types";

declare function RelatedBlogs(props: {
  as?: React.ElementType;
  heading?: React.ReactNode;
  buttonText?: React.ReactNode;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
  buttonLink?: React.ReactNode;
  limit?: number;
  blogsListVisibility?: Types.Visibility.VisibilityConditions;
  cloneablesListVisibility?: Types.Visibility.VisibilityConditions;
  codeSnippetsListVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
