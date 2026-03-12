"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { SpacerMedLarge } from "./SpacerMedLarge";
import { SpacerXxlarge } from "./SpacerXxlarge";
import { Button } from "./Button";
import { listOfElementsToText } from "./values/Basic/listOfElementsToText";

export function About({
  as: _Component = _Builtin.Block,
  heading = "Not Your Average Digital Solutions Agency",
  paragraph = "What IF Web is a bespoke brand, website design, and development studio based in Christchurch, New Zealand. We turn bold ideas into standout digital experiences for ambitious brands—because we know that good things happen when you don’t do normal.",
  buttonVisibility = true,
  buttonText = "Learn More About Us",
  buttonLink = "/about",
  image = "https://cdn.prod.website-files.com/6719702b25f42f173940b521/69658d6aae33be4f18402a5c_team-1%202-cropped.webp",
}) {
  return (
    <_Component className="section_about" tag="section">
      <_Builtin.Block
        className="padding-global padding-section-large"
        tag="div"
      >
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="about_component" tag="div">
            <_Builtin.Block
              className="about_content-left"
              id="w-node-db1793f1-a13c-9791-176e-42e70713b90d-0713b909"
              tag="div"
            >
              <_Builtin.Block className="about_heading-wrapper" tag="div">
                <_Builtin.Heading tag="h2">{heading}</_Builtin.Heading>
              </_Builtin.Block>
              <SpacerMedLarge />
              <_Builtin.Paragraph className="about_subheading">
                {paragraph}
              </_Builtin.Paragraph>
              <SpacerXxlarge />
              <Button
                text={buttonText}
                link={listOfElementsToText(buttonLink)}
                classProp="is-secondary"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className="about_content-right"
              id="w-node-db1793f1-a13c-9791-176e-42e70713b917-0713b909"
              tag="div"
            >
              <_Builtin.Block className="about_background-shape" tag="div" />
              <_Builtin.Block className="about_card-wrapper is-first" tag="div">
                <_Builtin.Block className="about_card-pin-wrapper" tag="div">
                  <_Builtin.Block className="about_card-pin" tag="div" />
                </_Builtin.Block>
                <_Builtin.Block className="about_card is-team" tag="div">
                  <_Builtin.Image
                    className="about_card-image is-team"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src={image}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.NotSupported _atom="Animation" />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
