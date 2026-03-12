"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Steps({
  as: _Component = _Builtin.Block,
  heading = "How It Works",
  item1Heading = "1. Discover",
  item1Paragraph = "We kick things off with a discovery call to get under the hood of your business and goals. You share, we listen, and together, we craft a killer brand identity and digital game plan designed to launch you at full speed and turn clicks into clients.",
  item2Heading = "2. Design",
  item2Paragraph = "Next, we craft your complete brand starter kit, including your logo, fonts, colour palette, and print-ready business cards. At the same time, we design your website to match your business goals and online needs.",
  item3Heading = "3. Develop",
  item3Paragraph = "With your strategy and design locked in, we build your custom website in Webflow. It’s fast, modern, and totally future-ready. You’ll be set up with a domain, emails, and 12 months of hosting.",
  item4Heading = "4. Ongoing Support",
  item4Paragraph = "We don’t ghost you after launch. We can provide ongoing support across all domains so your digitals can grow as you grow.",
}) {
  return (
    <_Component className="section_steps" tag="section">
      <_Builtin.HtmlEmbed
        className="hide"
        content=""
        value="%3Cscript%3E%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(window.matchMedia(%22(min-width%3A%20991px)%22).matches)%20%7B%0A%20%20%20%20%20%20var%20packageProcess%20%3D%20gsap.timeline(%7Bstart%3A%20%22top%20center%22%2C%20scrollTrigger%3A%20%7Btrigger%3A%20%22.section_steps%22%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20packageProcess.from(%0A%20%20%20%20%20%20%20%20%22.steps_component%20%3E%20h2%22%2C%0A%20%20%20%20%20%20%20%20%7B%20y%3A%2080%2C%20opacity%3A%200%7D%2C%0A%20%20%20%20%20%20%20%200%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20packageProcess.from(%0A%20%20%20%20%20%20%20%20%22.steps_item%22%2C%0A%20%20%20%20%20%20%20%20%7B%20y%3A%20100%2C%20opacity%3A%200%2C%20stagger%3A%200.125%7D%2C%0A%20%20%20%20%20%20%20%200.5%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
      />
      <_Builtin.Block
        className="padding-global padding-section-medium"
        tag="div"
      >
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="steps_component" tag="div">
            <_Builtin.Heading
              className="align-center text-align-center"
              tag="h2"
            >
              {heading}
            </_Builtin.Heading>
            <_Builtin.Block className="steps_content" tag="div">
              <_Builtin.Block
                className="steps_item"
                id="w-node-_271ebd55-d853-6ef9-8056-dceaa4e973ee-a4e973e7"
                tag="div"
              >
                <_Builtin.Heading className="steps_heading" tag="h3">
                  {item1Heading}
                </_Builtin.Heading>
                <_Builtin.Block className="steps_paragraph-wrapper" tag="div">
                  <_Builtin.Paragraph>{item1Paragraph}</_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className="steps_item"
                id="w-node-_271ebd55-d853-6ef9-8056-dceaa4e973f4-a4e973e7"
                tag="div"
              >
                <_Builtin.Heading className="steps_heading" tag="h3">
                  {item2Heading}
                </_Builtin.Heading>
                <_Builtin.Block className="steps_paragraph-wrapper" tag="div">
                  <_Builtin.Paragraph>{item2Paragraph}</_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className="steps_item"
                id="w-node-_271ebd55-d853-6ef9-8056-dceaa4e973fa-a4e973e7"
                tag="div"
              >
                <_Builtin.Heading className="steps_heading" tag="h3">
                  {item3Heading}
                </_Builtin.Heading>
                <_Builtin.Block className="steps_paragraph-wrapper" tag="div">
                  <_Builtin.Paragraph>{item3Paragraph}</_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className="steps_item"
                id="w-node-_271ebd55-d853-6ef9-8056-dceaa4e97400-a4e973e7"
                tag="div"
              >
                <_Builtin.Heading className="steps_heading" tag="h3">
                  {item4Heading}
                </_Builtin.Heading>
                <_Builtin.Block className="steps_paragraph-wrapper" tag="div">
                  <_Builtin.Paragraph>{item4Paragraph}</_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
