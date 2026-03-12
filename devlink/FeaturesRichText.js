"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FeaturesRichText({
  as: _Component = _Builtin.Block,
  servicesIntroSectionHeading = "",
  servicesIntroParagraph = "",
  servicesIntroImage = "",
  name,
}) {
  return (
    <_Component className="section_features-rich-text" tag="section">
      <_Builtin.HtmlEmbed
        className="hide"
        content=""
        value="%3Cscript%3E%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(window.matchMedia(%22(min-width%3A%20991px)%22).matches)%20%7B%0A%20%20%20%20%20%20var%20servicesIntro%20%3D%20gsap.timeline(%7B%0A%20%20%20%20%20%20%20%20scrollTrigger%3A%20%7B%20trigger%3A%20%22.section_features-rich-text%22%20%7D%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20servicesIntro.fromTo(%0A%20%20%20%20%20%20%20%20%22.features-rich-text_content-left%20%3E%20.services-paragraph_rich-text%20%22%2C%0A%20%20%20%20%20%20%20%20%7By%3A%20100%2C%20opacity%3A%200%7D%2C%0A%20%20%20%20%20%20%20%20%7By%3A%200%2C%20opacity%3A%201%2C%20stagger%3A%200.25%7D%2C%0A%20%20%20%20%20%20%20%200%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20servicesIntro.fromTo(%0A%20%20%20%20%20%20%20%20%22.features-rich-text_image%22%2C%0A%20%20%20%20%20%20%20%20%7By%3A%20800%7D%2C%0A%20%20%20%20%20%20%20%20%7By%3A%200%7D%2C%0A%20%20%20%20%20%20%20%200.125%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
      />
      <_Builtin.Block
        className="padding-global padding-section-small"
        tag="div"
      >
        <_Builtin.Block className="container-medium" tag="div">
          <_Builtin.Block className="features-rich-text_component" tag="div">
            <_Builtin.Block
              className="features-rich-text_content-left"
              id="w-node-_48a19f24-0cfd-2be6-983b-7a7e8f809b50-8f809b4c"
              tag="div"
            >
              <_Builtin.RichText
                className="services-paragraph_rich-text"
                tag="div"
                slot=""
              >
                {servicesIntroSectionHeading}
              </_Builtin.RichText>
              <_Builtin.RichText
                className="services-paragraph_rich-text"
                tag="div"
                slot=""
              >
                {servicesIntroParagraph}
              </_Builtin.RichText>
            </_Builtin.Block>
            <_Builtin.Block
              className="features-rich-text_content-right"
              id="w-node-_48a19f24-0cfd-2be6-983b-7a7e8f809b53-8f809b4c"
              tag="div"
            >
              <_Builtin.Image
                className="features-rich-text_image"
                width="auto"
                height="auto"
                loading="lazy"
                src={servicesIntroImage}
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
