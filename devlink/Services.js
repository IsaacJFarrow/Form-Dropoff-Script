"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ServicesCard } from "./ServicesCard";

const _interactionsData = JSON.parse(
  '{"events":{"e-536":{"id":"e-536","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-143","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-537"}},"mediaQueries":["main"],"target":{"id":"3b7bad0b-9904-4417-b1b0-a30e52254991","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b7bad0b-9904-4417-b1b0-a30e52254991","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1768365663176},"e-537":{"id":"e-537","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-144","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-536"}},"mediaQueries":["main"],"target":{"id":"3b7bad0b-9904-4417-b1b0-a30e52254991","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b7bad0b-9904-4417-b1b0-a30e52254991","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1768365663177}},"actionLists":{"a-143":{"id":"a-143","title":"Ongoing Support [Lottie]","actionItemGroups":[{"actionItems":[{"id":"a-143-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".services_card-star","selectorGuids":["e9433526-9150-378d-de3d-212a090f01f7"]},"value":0,"unit":""}},{"id":"a-143-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".services_card-star","selectorGuids":["e9433526-9150-378d-de3d-212a090f01f7"]},"xValue":0,"yValue":0,"zValue":null,"locked":true}}]},{"actionItems":[{"id":"a-143-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0}},{"id":"a-143-n-10","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outBack","duration":750,"target":{"selector":".services_card-star","selectorGuids":["e9433526-9150-378d-de3d-212a090f01f7"]},"xValue":1,"yValue":1,"zValue":null,"locked":true}},{"id":"a-143-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":750,"target":{"selector":".services_card-star","selectorGuids":["e9433526-9150-378d-de3d-212a090f01f7"]},"value":1,"unit":""}},{"id":"a-143-n-5","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0}},{"id":"a-143-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0}}]},{"actionItems":[{"id":"a-143-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":3000,"target":{},"value":100}},{"id":"a-143-n-6","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":3000,"target":{},"value":100}},{"id":"a-143-n-4","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":3000,"target":{},"value":100}}]}],"useFirstGroupAsInitialState":true,"createdOn":1749101942632},"a-144":{"id":"a-144","title":"Ongoing Support [Lottie Pause]","actionItemGroups":[{"actionItems":[{"id":"a-144-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0}},{"id":"a-144-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".services_card-star","selectorGuids":["e9433526-9150-378d-de3d-212a090f01f7"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-144-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".services_card-star","selectorGuids":["e9433526-9150-378d-de3d-212a090f01f7"]},"value":0,"unit":""}},{"id":"a-144-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0}},{"id":"a-144-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1749101942632}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Services({
  as: _Component = _Builtin.Block,
  heading = "Our Services",
  subheading = "We are a Christchurch based creative studio obsessed with building beautiful, bespoke digital experiences that are simple to manage, impossible to ignore, and drive real results.",
  servicesCard1Heading = (
    <>
      {"Webflow "}
      <br />
      {"Development"}
    </>
  ),
  servicesCard1Subheading = "As a Premium Webflow Partner, we build dynamic, easy-to-manage websites, designed for impact.",
  servicesCard1Image = "https://cdn.prod.website-files.com/6719702b25f42f173940b521/698e7635a484d4896251dba9_webflow-development-icon.webp",
  servicesCard2Heading = "Website & Mobile Design",
  servicesCard2Subheading = "Stand out and drive real results with a bespoke web design that truly oozes your brand’s personality.",
  servicesCard2Image = "https://cdn.prod.website-files.com/6719702b25f42f173940b521/698e7635c05af6693c6e7e5b_web-design-icon.webp",
  servicesCard3Heading = "Website Development",
  servicesCard3Subheading = "Building powerful, responsive, and interactive web solutions.",
  servicesCard3Image = "https://cdn.prod.website-files.com/6719702b25f42f173940b521/698e75886e1057e6a688bd9e_web-development-icon.webp",
  servicesCard4Heading = "Website Strategy",
  servicesCard4Subheading = "Lay a strong foundation for your brand’s online presence that captures attention and drives growth.",
  servicesCard4Image = "https://cdn.prod.website-files.com/6719702b25f42f173940b521/698e7588f74e555724a8c68d_website-strategy-icon.webp",
  servicesCard5Heading = "Branding & Identity",
  servicesCard5Subheading = "Unleash your business’s potential with custom branding, designed to showcase your company’s unique values.",
  servicesCard5Image = "https://cdn.prod.website-files.com/6719702b25f42f173940b521/698e75886dc96a4e3bbb0b5a_branding-icon.webp",

  servicesCard1Link = {
    href: "/services/webflow-development",
  },

  servicesCard2Link = {
    href: "/services/web-design",
  },

  servicesCard3Link = {
    href: "/services/web-development",
  },

  servicesCard4Link = {
    href: "/services/website-strategy",
  },

  servicesCard5Link = {
    href: "/services/digital-branding",
  },

  servicesCard6Heading = "Ongoing Support",
  servicesCard6Subheading = "Never feel stuck again. With Ongoing Support, we keep your site fresh, functional, and firing on all cylinders.",
  servicesCard6Image = "https://cdn.prod.website-files.com/6719702b25f42f173940b521/68392ac28bad0b5b8e3dca3c_ongoing-support-group.webp",

  servicesCard6Link = {
    href: "/services/ongoing-support",
  },
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="section_services" tag="section">
      <_Builtin.Block
        className="padding-global padding-section-large"
        tag="div"
      >
        <_Builtin.Block className="container-medium" tag="div">
          <_Builtin.Block className="services_component" tag="div">
            <_Builtin.Block
              className="services_content-left"
              id="w-node-_0d5c9253-85b4-1189-8091-f2f62337f4f8-2337f4f4"
              tag="div"
            >
              <_Builtin.Heading className="heading-style-h2-small" tag="h2">
                {heading}
              </_Builtin.Heading>
              <_Builtin.Paragraph className="text-size-small">
                {subheading}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className="services_content-right"
              id="w-node-_0d5c9253-85b4-1189-8091-f2f62337f4fd-2337f4f4"
              tag="div"
            >
              <ServicesCard
                heading={servicesCard1Heading}
                subheading={servicesCard1Subheading}
                image={servicesCard1Image}
                link={servicesCard1Link}
              />
              <ServicesCard
                heading={servicesCard2Heading}
                subheading={servicesCard2Subheading}
                image={servicesCard2Image}
                link={servicesCard2Link}
              />
              <ServicesCard
                heading={servicesCard3Heading}
                subheading={servicesCard3Subheading}
                image={servicesCard3Image}
                link={servicesCard3Link}
                variant="Two Columns"
              />
              <ServicesCard
                heading={servicesCard4Heading}
                subheading={servicesCard4Subheading}
                image={servicesCard4Image}
                link={servicesCard4Link}
                variant="Two Columns"
              />
              <ServicesCard
                heading={servicesCard5Heading}
                subheading={servicesCard5Subheading}
                image={servicesCard5Image}
                link={servicesCard5Link}
                variant="Two Columns"
              />
              <_Builtin.Block
                className="services_card-animation"
                id="w-node-_3b7bad0b-9904-4417-b1b0-a30e52254991-2337f4f4"
                data-w-id="3b7bad0b-9904-4417-b1b0-a30e52254991"
                tag="div"
              >
                <ServicesCard
                  heading={servicesCard6Heading}
                  subheading={servicesCard6Subheading}
                  image={servicesCard6Image}
                  link={servicesCard6Link}
                  variant="Ongoing Support"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
