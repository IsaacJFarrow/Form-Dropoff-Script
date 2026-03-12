"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-172":{"id":"e-172","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5281bca-efa6-2c17-a9ff-0531516d8217","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5281bca-efa6-2c17-a9ff-0531516d8217","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":9,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1737669927229}},"actionLists":{"a-68":{"id":"a-68","title":"What to Expect [Load In]","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"value":0,"unit":""}},{"id":"a-68-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"value":0,"unit":""}},{"id":"a-68-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"value":0,"unit":""}},{"id":"a-68-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"value":0,"unit":""}},{"id":"a-68-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-68-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"value":1,"unit":""}},{"id":"a-68-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"value":1,"unit":""}},{"id":"a-68-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"value":1,"unit":""}},{"id":"a-68-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737670691540}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function List({
  as: _Component = _Builtin.Block,
  heading = (
    <>
      <br />
      {"The Founders Package"}
    </>
  ),
  subheading = "Perfect for small businesses ready to make waves, not ripples. This all-in-one website and branding package is designed to get your business noticed, without blowing the budget.",
  item1Heading = "Your brand new website",
  item1Paragraph = "We create a custom website tailored to your business, built in Webflow for speed, flexibility, and future growth. Your package includes full design, strategy, and copy, domain name setup, business email configuration, and 12 months of reliable hosting, so you're ready to launch and grow from day one.",
  item2Heading = "Brand identity starter kit",
  item2Paragraph = "Look pro from the get-go. We’ll design a standout logo, set you up with a mini brand kit (including fonts, colours, and a usage guide).",
  item3Heading = "Website & domain hosting",
  item3Paragraph = "Stay live and stress-free. Your package includes 12 months of secure website hosting and domain management, handled by us, so you don’t need to lift a finger. We’ll make sure your site is fast, reliable, and always ready for visitors.",
  item4Heading = "*Digital marketing starter package",
  item4Paragraph = (
    <>
      {
        "We’ll set you up to get found online, from Google to social. You’ll launch with the right tools in place and a simple plan for what to do next. Includes: Google Analytics, Search Console, Meta Pixel, Google Business Profile setup, optimised social bios, and a checklist for what to tackle next. "
      }
      <br />
    </>
  ),
  item5Heading = "**Ongoing support",
  item5Paragraph = "We’re here when you need us. While ongoing updates aren’t included in your package, we’ve got your back. Whether it’s a quick content tweak or a bigger update down the line, we offer support on an hourly basis, just reach out when you’re ready.",
  item1Visibility = true,
  item2Visibility = true,
  item3Visibility = true,
  item4Visibility = true,
  item5Visibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="section_list" tag="section">
      <_Builtin.HtmlEmbed
        className="hide"
        content=""
        value="%3Cscript%3E%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(window.matchMedia(%22(min-width%3A%20991px)%22).matches)%20%7B%0A%20%20%20%20%20%20var%20whatYouGet%20%3D%20gsap.timeline(%7Bstart%3A%20%22top%20center%22%2C%20scrollTrigger%3A%20%7Btrigger%3A%20%22.section_list%22%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20whatYouGet.from(%0A%20%20%20%20%20%20%20%20%22.list_content-left%20%3E%20h2%2C%20.list_content-left%20%3E%20p%22%2C%20%0A%20%20%20%20%20%20%20%20%7B%09y%3A%20100%2C%20opacity%3A%200%2C%20stagger%3A%200.25%7D%2C%0A%20%20%20%20%20%20%20%200%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20whatYouGet.from(%0A%20%20%20%20%20%20%20%20%22.list_list%20%3E%20div%22%2C%0A%20%20%20%20%20%20%20%20%7B%20y%3A%2080%2C%20opacity%3A%200%2C%20stagger%3A%200.125%7D%2C%0A%20%20%20%20%20%20%20%200.5%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20whatYouGet.from(%0A%20%20%20%20%20%20%20%20%22.list_item.is-ongoing%22%2C%0A%20%20%20%20%20%20%20%20%7B%20y%3A%20100%2C%20opacity%3A%200%7D%2C%0A%20%20%20%20%20%20%20%20%22%3E-0.125%22%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
      />
      <_Builtin.Block
        className="padding-global padding-section-medium"
        tag="div"
      >
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="list_component" tag="div">
            <_Builtin.Block
              className="list_content-left"
              id="w-node-_001bc73d-2439-1ab2-704d-08c9fbef72b6-fbef72b2"
              tag="div"
            >
              <_Builtin.Heading
                className="heading-style-h2-small is-package"
                tag="h2"
              >
                {heading}
              </_Builtin.Heading>
              <_Builtin.Paragraph className="text-size-medium">
                {subheading}
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className="list_content-right"
              id="w-node-_001bc73d-2439-1ab2-704d-08c9fbef72be-fbef72b2"
              tag="div"
            >
              <_Builtin.Block className="list_items-wrapper" tag="div">
                {item1Visibility ? (
                  <_Builtin.Block className="list_item" tag="div">
                    <_Builtin.Heading
                      className="text-size-medium text-weight-semibold is-package"
                      tag="h3"
                    >
                      {item1Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph>{item1Paragraph}</_Builtin.Paragraph>
                  </_Builtin.Block>
                ) : null}
                {item2Visibility ? (
                  <_Builtin.Block className="list_item" tag="div">
                    <_Builtin.Heading
                      className="text-size-medium text-weight-semibold is-package"
                      tag="h3"
                    >
                      {item2Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph>{item2Paragraph}</_Builtin.Paragraph>
                  </_Builtin.Block>
                ) : null}
                {item3Visibility ? (
                  <_Builtin.Block className="list_item" tag="div">
                    <_Builtin.Heading
                      className="text-size-medium text-weight-semibold is-package"
                      tag="h3"
                    >
                      {item3Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph>{item3Paragraph}</_Builtin.Paragraph>
                  </_Builtin.Block>
                ) : null}
                {item4Visibility ? (
                  <_Builtin.Block className="list_item" tag="div">
                    <_Builtin.Heading
                      className="text-size-medium text-weight-semibold is-package"
                      tag="h3"
                    >
                      {item4Heading}
                    </_Builtin.Heading>
                    <_Builtin.Paragraph>{item4Paragraph}</_Builtin.Paragraph>
                  </_Builtin.Block>
                ) : null}
              </_Builtin.Block>
              {item5Visibility ? (
                <_Builtin.Block className="list_item is-ongoing" tag="div">
                  <_Builtin.Heading
                    className="text-size-medium text-weight-semibold is-package"
                    tag="h3"
                  >
                    {item5Heading}
                  </_Builtin.Heading>
                  <_Builtin.Paragraph className="text-color-primary-light">
                    {item5Paragraph}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              ) : null}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
