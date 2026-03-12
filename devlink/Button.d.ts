import * as React from "react";
import * as Types from "./types";

declare function Button(props: {
  as?: React.ElementType;
  variant?: "Base" | "Small" | "Icon" | "Small Icon";
  text?: React.ReactNode;
  classProp?: Types.Builtin.Text;
  link?: Types.Builtin.Text;
  tag?: Types.Basic.TagType;
  iconVisibility?: Types.Boolean.Boolean;
  attributeName?: Types.Builtin.Text;
  attributeVaue?: Types.Builtin.Text;
  visibility?: Types.Boolean.Boolean;
}): React.JSX.Element;
