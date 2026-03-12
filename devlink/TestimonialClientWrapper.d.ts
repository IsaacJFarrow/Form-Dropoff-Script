import * as React from "react";
import * as Types from "./types";

declare function TestimonialClientWrapper(props: {
  as?: React.ElementType;
  testimonialClientImage?: Types.Asset.Image;
  testimonialNameOfClient?: React.ReactNode;
  testimonialClientRoleCompany?: React.ReactNode;
  testimonialClientImageAltText?: Types.Basic.AltText;
}): React.JSX.Element;
