"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { Button } from "./Button";
import { listOfElementsToText } from "./values/Basic/listOfElementsToText";

export function Process({
  as: _Component = _Builtin.Block,
  heading = "Our Process",
  eyebrowText = "Process",
  eyebrowVisibility = true,
  item1Heading = "Onboarding",
  item1Subheading = "We’ll kick things off by setting up communication channels and guiding you through our workflows to ensure a smooth project ahead.",
  item1Link = "",
  item1LinkText = "View service",
  item1LinkVisibility = false,
  item2Heading = "Strategy",
  item2Subheading = "Through thorough research, we dive deep into understanding your business, target audience, and competitors, mapping out the perfect website structure to exceed your goals.",
  item2Link = "/services/website-strategy",
  item2LinkText = "View service",
  item2LinkVisibility = true,
  item3Heading = "Design",
  item3Subheading = "We’ll craft a visually stunning, engaging website design in Figma that captures your brand’s essence and resonates with your audience.",
  item3Link = "/services/web-design",
  item3LinkText = "View service",
  item3LinkVisibility = true,
  item4Heading = "Development",
  item4Subheading = "Your designs come to life online as we build a responsive, intuitive website that’s simple to manage, optimised for performance, and scalable for future growth.",
  item4Link = "/services/web-development",
  item4LinkText = "View service",
  item4LinkVisibility = true,
  item5Heading = "Quality Assurance",
  item5Subheading = "Every website goes through rigorous testing to iron out any bugs, implement final changes, and ensure seamless functionality and experience across all devices.",
  item5Link = "",
  item5LinkText = "View service",
  item5LinkVisibility = false,
  finalItemText = "Launch!",
  finalItemVisibility = true,
}) {
  return (
    <_Component className="section_process-timeline" tag="section">
      <_Builtin.Block className="padding-global" tag="div">
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="padding-section-large" tag="div">
            <_Builtin.Block className="process-timeline_component" tag="div">
              <_Builtin.Grid className="process-timeline_content" tag="div">
                <_Builtin.Block
                  className="process-timeline_content-left"
                  id="w-node-_58ff5248-38b7-a555-9d80-a0247b46ce78-7b46ce72"
                  tag="div"
                >
                  <_Builtin.Block
                    className="process-timeline_heading-wrapper"
                    tag="div"
                  >
                    <_Builtin.Heading
                      className="heading-style-h2-small"
                      tag="h2"
                    >
                      {heading}
                    </_Builtin.Heading>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className="process-timeline_progress"
                  id="w-node-_58ff5248-38b7-a555-9d80-a0247b46ce7e-7b46ce72"
                  tag="div"
                >
                  <_Builtin.Block
                    className="process-timeline_fade-overlay-top"
                    tag="div"
                  />
                  <_Builtin.Block
                    className="process-timeline_progress-line"
                    tag="div"
                  />
                  <_Builtin.Block className="process-timeline_line" tag="div" />
                  <_Builtin.Block
                    className="process-timeline_fade-overlay-bottom"
                    tag="div"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="process-timeline_content-right"
                  tag="div"
                >
                  <_Builtin.Block className="process-timeline_row" tag="div">
                    <_Builtin.Block
                      className="process-timeline_circle-wrapper"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="process-timeline_circle"
                        tag="div"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="process-timeline_item" tag="div">
                      <_Builtin.Heading className="heading-style-h3" tag="h3">
                        {item1Heading}
                      </_Builtin.Heading>
                      <_Builtin.Paragraph className="text-color-primary-light">
                        {item1Subheading}
                      </_Builtin.Paragraph>
                      <Button
                        text={item1LinkText}
                        visibility={item1LinkVisibility}
                        link={listOfElementsToText(item1Link)}
                        variant="Icon"
                        classProp="is-dark is-link"
                        iconVisibility={true}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="process-timeline_row" tag="div">
                    <_Builtin.Block
                      className="process-timeline_circle-wrapper"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="process-timeline_circle"
                        tag="div"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="process-timeline_item" tag="div">
                      <_Builtin.Heading className="heading-style-h3" tag="h3">
                        {item2Heading}
                      </_Builtin.Heading>
                      <_Builtin.Paragraph className="text-color-primary-light">
                        {item2Subheading}
                      </_Builtin.Paragraph>
                      <Button
                        text={item2LinkText}
                        visibility={item2LinkVisibility}
                        link={listOfElementsToText(item2Link)}
                        variant="Icon"
                        classProp="is-dark is-link"
                        iconVisibility={true}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="process-timeline_row" tag="div">
                    <_Builtin.Block
                      className="process-timeline_circle-wrapper"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="process-timeline_circle"
                        tag="div"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="process-timeline_item" tag="div">
                      <_Builtin.Heading className="heading-style-h3" tag="h3">
                        {item3Heading}
                      </_Builtin.Heading>
                      <_Builtin.Paragraph className="text-color-primary-light">
                        {item3Subheading}
                      </_Builtin.Paragraph>
                      <Button
                        text={item3LinkText}
                        visibility={item3LinkVisibility}
                        link={listOfElementsToText(item3Link)}
                        variant="Icon"
                        classProp="is-dark is-link"
                        iconVisibility={true}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="process-timeline_row"
                    id="w-node-_58ff5248-38b7-a555-9d80-a0247b46cea4-7b46ce72"
                    tag="div"
                  >
                    <_Builtin.Block
                      className="process-timeline_circle-wrapper"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="process-timeline_circle"
                        tag="div"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="process-timeline_item" tag="div">
                      <_Builtin.Heading className="heading-style-h3" tag="h3">
                        {item4Heading}
                      </_Builtin.Heading>
                      <_Builtin.Paragraph className="text-color-primary-light">
                        {item4Subheading}
                      </_Builtin.Paragraph>
                      <Button
                        text={item4LinkText}
                        visibility={item4LinkVisibility}
                        link={listOfElementsToText(item4Link)}
                        variant="Icon"
                        classProp="is-dark is-link"
                        iconVisibility={true}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block className="process-timeline_row" tag="div">
                    <_Builtin.Block
                      className="process-timeline_circle-wrapper"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="process-timeline_circle"
                        tag="div"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block className="process-timeline_item" tag="div">
                      <_Builtin.Heading className="heading-style-h3" tag="h3">
                        {item5Heading}
                      </_Builtin.Heading>
                      <_Builtin.Paragraph className="text-color-primary-light">
                        {item5Subheading}
                      </_Builtin.Paragraph>
                      <Button
                        text={item5LinkText}
                        visibility={item5LinkVisibility}
                        link={listOfElementsToText(item5Link)}
                        variant="Icon"
                        classProp="is-dark is-link"
                        iconVisibility={true}
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Grid>
              {finalItemVisibility ? (
                <_Builtin.Block
                  className="process-timeline_content-bottom"
                  tag="div"
                >
                  <_Builtin.Block
                    className="process-timeline_text-bottom"
                    tag="div"
                  >
                    {finalItemText}
                  </_Builtin.Block>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
