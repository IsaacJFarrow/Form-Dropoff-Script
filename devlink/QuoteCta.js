"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { SpacerLarge } from "./SpacerLarge";
import { SpacerMedium } from "./SpacerMedium";
import { Button } from "./Button";

const _interactionsData = JSON.parse(
  '{"events":{"e-172":{"id":"e-172","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5281bca-efa6-2c17-a9ff-0531516d8217","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5281bca-efa6-2c17-a9ff-0531516d8217","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":9,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1737669927229}},"actionLists":{"a-68":{"id":"a-68","title":"What to Expect [Load In]","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"value":0,"unit":""}},{"id":"a-68-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"value":0,"unit":""}},{"id":"a-68-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"value":0,"unit":""}},{"id":"a-68-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"value":0,"unit":""}},{"id":"a-68-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-68-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"value":1,"unit":""}},{"id":"a-68-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"value":1,"unit":""}},{"id":"a-68-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"value":1,"unit":""}},{"id":"a-68-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737670691540}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function QuoteCta({
  as: _Component = _Builtin.Block,
  variant = "Base",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Base: "",
    Padding: "w-variant-0b8d0da4-a0f5-734b-af5a-50060625aeff",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`section_quote-cta ${_activeStyleVariant}`}
      tag="section"
      id="quote-cta"
    >
      <_Builtin.Block
        className={`padding-global padding-section-small ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.Block
          className={`container-large ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Block
            className={`quote-cta_component ${_activeStyleVariant}`}
            tag="div"
          >
            <_Builtin.Block
              className={`quote-cta_content white-dash ${_activeStyleVariant}`}
              tag="div"
            >
              <_Builtin.Block
                className={`quote-cta_heading-wrapper ${_activeStyleVariant}`}
                tag="div"
              >
                <_Builtin.Heading
                  className={`quote-cta_heading ${_activeStyleVariant}`}
                  tag="h2"
                >
                  {"Fancy a "}
                  <_Builtin.Span
                    className={`text-color-alternate display-inlineflex ${_activeStyleVariant}`}
                  >
                    {"Free"}
                  </_Builtin.Span>
                  {" Quote?"}
                </_Builtin.Heading>
                <_Builtin.HtmlEmbed
                  className={`quote-cta_scribble ${_activeStyleVariant}`}
                  content=""
                  value="%3Csvg%20width%3D%22233%22%20height%3D%2232%22%20viewBox%3D%220%200%20233%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20id%3D%22ctaScribble%22%20d%3D%22M231.326%202.37541C231.326%202.37541%20209.498%201.68277%20198.579%201.64597C158.703%201.51157%20124.136%201.38173%2083.8361%202.29043C58.1165%202.87036%20-18.1018%204.49189%207.3039%208.82847C18.2896%2010.7037%2057.5023%2012.6798%2065.507%2013.0078C95.1875%2014.2237%20125.014%2014.8228%20154.723%2013.9882C164.236%2013.7209%20165.601%2013.3411%20155.236%2012.9155C141.459%2012.3497%20122.29%2012.2387%20109.211%2012.2336C100.11%2012.23%2075.1182%2013.7379%2064.0323%2014.7921C62.1121%2014.9747%2048.1093%2015.9554%2058.806%2018.6538C78.6713%2023.665%20117.73%2018.0541%20141.136%2027.1368C145.159%2029.8726%20129.922%2027.8698%20124.309%2027.914C112.456%2028.0074%2099.7676%2027.0019%2088.2408%2030.2701%22%20stroke%3D%22%23EB5B30%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
              <SpacerLarge />
              <_Builtin.Block
                className={`max-width-large ${_activeStyleVariant}`}
                tag="div"
              >
                <_Builtin.Paragraph
                  className={`quote-cta_subheading ${_activeStyleVariant}`}
                >
                  <_Builtin.Span
                    className={`text-weight-semibold ${_activeStyleVariant}`}
                  >
                    {"Got a crazy idea?"}
                  </_Builtin.Span>
                  {
                    " We’re all ears. Reach out, share your story, and let’s make some magic together. Click below to get your free quote."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <SpacerMedium />
              <Button
                text="Go on, it's FREE"
                classProp="is-form-link is-dark"
                tag="button"
              />
              <_Builtin.Link
                className={`quote-cta_secondary-link ${_activeStyleVariant}`}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Forms not your thing, book a call instead"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
