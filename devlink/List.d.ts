import * as React from "react";
import * as Types from "./types";

declare function List(props: {
  as?: React.ElementType;
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  item1Heading?: React.ReactNode;
  item1Paragraph?: React.ReactNode;
  item2Heading?: React.ReactNode;
  item2Paragraph?: React.ReactNode;
  item3Heading?: React.ReactNode;
  item3Paragraph?: React.ReactNode;
  item4Heading?: React.ReactNode;
  item4Paragraph?: React.ReactNode;
  item5Heading?: React.ReactNode;
  item5Paragraph?: React.ReactNode;
  item1Visibility?: Types.Visibility.VisibilityConditions;
  item2Visibility?: Types.Visibility.VisibilityConditions;
  item3Visibility?: Types.Visibility.VisibilityConditions;
  item4Visibility?: Types.Visibility.VisibilityConditions;
  item5Visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
