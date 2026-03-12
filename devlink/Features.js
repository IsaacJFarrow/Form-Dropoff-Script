"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-172":{"id":"e-172","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5281bca-efa6-2c17-a9ff-0531516d8217","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5281bca-efa6-2c17-a9ff-0531516d8217","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":9,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1737669927229}},"actionLists":{"a-68":{"id":"a-68","title":"What to Expect [Load In]","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"value":0,"unit":""}},{"id":"a-68-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"value":0,"unit":""}},{"id":"a-68-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"value":0,"unit":""}},{"id":"a-68-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"value":0,"unit":""}},{"id":"a-68-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-68-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"value":1,"unit":""}},{"id":"a-68-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"value":1,"unit":""}},{"id":"a-68-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"value":1,"unit":""}},{"id":"a-68-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737670691540}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Features({
  as: _Component = _Builtin.Block,
  heading = "Why Choose What IF Web?",
  subheading = "We build fast and build right",
  item1Heading = "Launched Websites from Christchurch to Los Angeles",
  item1Paragraph = "Trusted by clients globally. Loved by locals.",
  item1Visibility = true,
  item2Heading = "Agile Team With Direct Access to the Founders",
  item2Paragraph = "We’re a small but passionate agency with the founders running their respective departments.",
  item2Visibility = true,
  item3Heading = "Video-first comms so you’re always in the loop",
  item3Paragraph = "Quick updates. Clear walkthroughs. No meetings needed.",
  item3Visibility = true,
  item4Heading = "Stand-out design meets serious structure",
  item4Paragraph = "Looks sharp. Works hard. Converts better.",
  item4Visibility = true,
  image = "https://cdn.prod.website-files.com/6719702b25f42f173940b521/684b7ccbbf7fe7fba4ca5428_why-choose-illustration.webp",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="section_features" tag="section">
      <_Builtin.HtmlEmbed
        className="hide"
        content=""
        value="%3Cscript%3E%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(window.matchMedia(%22(min-width%3A%20991px)%22).matches)%20%7B%0A%20%20%20%20%20%20var%20whyChoose%20%3D%20gsap.timeline(%7B%20start%3A%20%22top%20center%22%20%2CscrollTrigger%3A%20%7Btrigger%3A%20%22.section_features%22%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20whyChoose.from(%0A%20%20%20%20%20%20%20%20%22.features_content-left%20%3E%20h2%2C%20.features_content-left%20%3E%20p%22%2C%20%0A%20%20%20%20%20%20%20%20%7B%20y%3A%2080%2C%20stagger%3A%200.125%2C%20opacity%3A%200%7D%2C%0A%20%20%20%20%20%20%20%200%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20whyChoose.from(%0A%20%20%20%20%20%20%20%20%22.features_grid-item%22%2C%0A%20%20%20%20%20%20%20%20%7B%20y%3A%20100%2C%20stagger%3A%200.125%2C%20opacity%3A%200%7D%2C%0A%20%20%20%20%20%20%20%200.5%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
      />
      <_Builtin.Block
        className="padding-global padding-section-medium"
        tag="div"
      >
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="features_component" tag="div">
            <_Builtin.Block className="features_content-left" tag="div">
              <_Builtin.Heading className="heading-style-h2-small" tag="h2">
                {heading}
              </_Builtin.Heading>
              <_Builtin.Paragraph className="text-size-large">
                {subheading}
              </_Builtin.Paragraph>
              <_Builtin.Block className="features_grid" tag="div">
                {item1Visibility ? (
                  <_Builtin.Block
                    className="features_grid-item"
                    id="w-node-aa59848b-65f2-bba0-6c63-dae55e45a696-5e45a68c"
                    tag="div"
                  >
                    <_Builtin.Heading
                      className="text-size-medium text-weight-semibold is-package"
                      tag="h3"
                    >
                      {item1Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph className="text-size-small max-width-xsmall">
                      {item1Paragraph}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                ) : null}
                {item2Visibility ? (
                  <_Builtin.Block
                    className="features_grid-item"
                    id="w-node-aa59848b-65f2-bba0-6c63-dae55e45a69b-5e45a68c"
                    tag="div"
                  >
                    <_Builtin.Heading
                      className="text-size-medium text-weight-semibold is-package"
                      tag="h3"
                    >
                      {item2Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph className="text-size-small max-width-xsmall">
                      {item2Paragraph}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                ) : null}
                {item3Visibility ? (
                  <_Builtin.Block
                    className="features_grid-item"
                    id="w-node-aa59848b-65f2-bba0-6c63-dae55e45a6a0-5e45a68c"
                    tag="div"
                  >
                    <_Builtin.Heading
                      className="text-size-medium text-weight-semibold is-package"
                      tag="h3"
                    >
                      {item3Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph className="text-size-small max-width-xsmall">
                      {item3Paragraph}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                ) : null}
                {item4Visibility ? (
                  <_Builtin.Block
                    className="features_grid-item"
                    id="w-node-aa59848b-65f2-bba0-6c63-dae55e45a6a5-5e45a68c"
                    tag="div"
                  >
                    <_Builtin.Heading
                      className="text-size-medium text-weight-semibold is-package max-width-small"
                      tag="h3"
                    >
                      {item4Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph className="text-size-small max-width-xsmall">
                      {item4Paragraph}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="features_content-right" tag="div">
              <_Builtin.Image
                className="features_image"
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src={image}
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
