import * as React from "react";
import * as Types from "./types";

declare function Points(props: {
  as?: React.ElementType;
  eyebrowText?: React.ReactNode;
  eyebrowVisibility?: Types.Visibility.VisibilityConditions;
  heading?: React.ReactNode;
  paragraph?: React.ReactNode;
  item1Text?: React.ReactNode;
  item1Visibility?: Types.Visibility.VisibilityConditions;
  item2Text?: React.ReactNode;
  item2Visibility?: Types.Visibility.VisibilityConditions;
  item3Text?: React.ReactNode;
  item3Visibility?: Types.Visibility.VisibilityConditions;
  item4Text?: React.ReactNode;
  item4Visibility?: Types.Visibility.VisibilityConditions;
  item5Text?: React.ReactNode;
  item5Visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
