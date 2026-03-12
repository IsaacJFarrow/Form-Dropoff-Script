import * as React from "react";
import * as Types from "./types";

declare function ServicesCard(props: {
  as?: React.ElementType;
  variant?: "Base" | "Two Columns" | "Ongoing Support";
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  image?: Types.Asset.Image;
  link?: Types.Basic.Link;
}): React.JSX.Element;
