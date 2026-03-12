"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { TestimonialClientWrapper } from "./TestimonialClientWrapper";
import { listOfElementsToText } from "./values/Basic/listOfElementsToText";

export function TestimonialCard({
  as: _Component = _Builtin.Block,
  testimonialReview = "",
  variant = "Base",
  clientInfoClientImage = "",
  clientInfoClientName = "John Doe",
  clientInfoClientRoleCompany = "CEO, ABC",
}) {
  const _styleVariantMap = {
    Base: "",
    Grey: "w-variant-5be968ca-2fe7-f1b8-aea2-52a010fdb78b",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`testimonials_card ${_activeStyleVariant}`}
      tag="div"
    >
      <_Builtin.RichText
        className={`testimonials-rich-text ${_activeStyleVariant}`}
        tag="div"
        slot=""
      >
        {testimonialReview}
      </_Builtin.RichText>
      <_Builtin.Block
        className={`testimonial_bottom-content ${_activeStyleVariant}`}
        tag="div"
      >
        <TestimonialClientWrapper
          testimonialClientImage={clientInfoClientImage}
          testimonialNameOfClient={clientInfoClientName}
          testimonialClientRoleCompany={clientInfoClientRoleCompany}
          testimonialClientImageAltText={listOfElementsToText(
            clientInfoClientName
          )}
        />
      </_Builtin.Block>
    </_Component>
  );
}
