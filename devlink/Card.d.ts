import * as React from "react";
import * as Types from "./types";

declare function Card(props: {
  as?: React.ElementType;
  cardHeading?: React.ReactNode;
  cardSubheading?: React.ReactNode;
  cardIcon?: Types.Asset.Image;
  cardIconVisibility?: Types.Visibility.VisibilityConditions;
  cardId?: Types.Basic.IdTextInput;
}): React.JSX.Element;
