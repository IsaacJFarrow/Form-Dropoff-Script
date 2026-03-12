import * as React from "react";
import * as Types from "./types";

declare function TestimonialCard(props: {
  as?: React.ElementType;
  testimonialReview?: Types.Basic.RichTextChildren;
  variant?: "Base" | "Grey";
  clientInfoClientImage?: Types.Asset.Image;
  clientInfoClientName?: React.ReactNode;
  clientInfoClientRoleCompany?: React.ReactNode;
}): React.JSX.Element;
