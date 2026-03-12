import * as React from "react";
import * as Types from "./types";

declare function RichText(props: {
  as?: React.ElementType;
  servicesFeatureHeading?: React.ReactNode;
  serviceFeatureMediumParagraph?: React.ReactNode;
  servicesFeatureMainParagraph?: Types.Basic.RichTextChildren;
  servicesFeatureIllustration?: Types.Asset.Image;
  visibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
