import * as React from "react";
import * as Types from "./types";

declare function FeaturesRichText(props: {
  as?: React.ElementType;
  servicesIntroSectionHeading?: Types.Basic.RichTextChildren;
  servicesIntroParagraph?: Types.Basic.RichTextChildren;
  servicesIntroImage?: Types.Asset.Image;
  name?: Types.Basic.AltText;
}): React.JSX.Element;
