"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function ImageSection({
  as: _Component = _Builtin.Block,
  image = "https://cdn.prod.website-files.com/6719702b25f42f173940b521/684b74e48b1a66f90285136b_scalecraft-mockup-2.webp",
}) {
  return (
    <_Component className="section_package-image" tag="section">
      <_Builtin.HtmlEmbed
        className="hide"
        content=""
        value="%3Cscript%3E%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(window.matchMedia(%22(min-width%3A%20991px)%22).matches)%20%7B%0A%20%20%20%20%20%20var%20packageImageLoad%20%3D%20gsap.timeline(%7Bstart%3A%20%22top%20center%22%2C%20scrollTrigger%3A%20%7Btrigger%3A%20%22.section_package-image%22%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20packageImageLoad.from(%0A%20%20%20%20%20%20%20%20%22.package-image_image%22%2C%0A%20%20%20%20%20%20%20%20%7B%20scale%3A%201.6%2C%20duration%3A%203%7D%2C%0A%20%20%20%20%20%20%20%200%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20packageImageLoad.fromTo(%0A%20%20%20%20%20%20%20%20%22.package-image_wipe%22%2C%0A%20%20%20%20%20%20%20%20%7B%20height%3A%20%22100%25%22%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20height%3A%20%220%25%22%2C%20duration%3A%203%7D%2C%0A%20%20%20%20%20%20%20%200%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
      />
      <_Builtin.Block className="padding-global" tag="div">
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="package-image_component" tag="div">
            <_Builtin.Block className="package-image_image-wrapper" tag="div">
              <_Builtin.Image
                className="package-image_image"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src={image}
              />
              <_Builtin.Block className="package-image_wipe" tag="div" />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
