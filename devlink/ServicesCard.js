"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { listOfElementsToText } from "./values/Basic/listOfElementsToText";

const _interactionsData = JSON.parse(
  '{"events":{"e-447":{"id":"e-447","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-141","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-448"}},"mediaQueries":["main"],"target":{"id":"23ecdcc7-1acd-0ca3-bfb4-45d7f19f6f56","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"23ecdcc7-1acd-0ca3-bfb4-45d7f19f6f56","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749093795889},"e-448":{"id":"e-448","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-145","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-447"}},"mediaQueries":["main"],"target":{"id":"23ecdcc7-1acd-0ca3-bfb4-45d7f19f6f56","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"23ecdcc7-1acd-0ca3-bfb4-45d7f19f6f56","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749093795891},"e-536":{"id":"e-536","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-143","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-537"}},"mediaQueries":["main"],"target":{"id":"3b7bad0b-9904-4417-b1b0-a30e52254991","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b7bad0b-9904-4417-b1b0-a30e52254991","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1768365663176},"e-537":{"id":"e-537","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-144","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-536"}},"mediaQueries":["main"],"target":{"id":"3b7bad0b-9904-4417-b1b0-a30e52254991","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"3b7bad0b-9904-4417-b1b0-a30e52254991","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1768365663177},"e-538":{"id":"e-538","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-141","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-539"}},"mediaQueries":["main"],"target":{"id":"d15c2046-e8f2-a1a5-066d-ad890299e1a0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d15c2046-e8f2-a1a5-066d-ad890299e1a0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1768425146153},"e-539":{"id":"e-539","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-145","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-538"}},"mediaQueries":["main"],"target":{"id":"d15c2046-e8f2-a1a5-066d-ad890299e1a0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"d15c2046-e8f2-a1a5-066d-ad890299e1a0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1768425146155}},"actionLists":{"a-141":{"id":"a-141","title":"Services Card [Hover In]","actionItemGroups":[{"actionItems":[{"id":"a-141-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".services_card-image","selectorGuids":["5322391b-50e4-b6db-6ddd-411b4da13c04"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-141-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"23ecdcc7-1acd-0ca3-bfb4-45d7f19f6f56"},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-141-n-5","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"23ecdcc7-1acd-0ca3-bfb4-45d7f19f6f56"},"globalSwatchId":"--base-color-brand--light-grey","rValue":248,"bValue":235,"gValue":241,"aValue":1}},{"id":"a-141-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".services_card-image","selectorGuids":["5322391b-50e4-b6db-6ddd-411b4da13c04"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-141-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":750,"target":{"useEventTarget":"CHILDREN","selector":".services_card-image","selectorGuids":["5322391b-50e4-b6db-6ddd-411b4da13c04"]},"xValue":1.2,"yValue":1.2,"locked":true}},{"id":"a-141-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":true,"id":"23ecdcc7-1acd-0ca3-bfb4-45d7f19f6f56"},"yValue":-1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-141-n-6","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":true,"id":"23ecdcc7-1acd-0ca3-bfb4-45d7f19f6f56"},"globalSwatchId":"--border-color--border-alternate","rValue":45,"bValue":97,"gValue":63,"aValue":1}},{"id":"a-141-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":750,"target":{"useEventTarget":"CHILDREN","selector":".services_card-image","selectorGuids":["5322391b-50e4-b6db-6ddd-411b4da13c04"]},"yValue":-1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1749093802073},"a-145":{"id":"a-145","title":"Services Card [Hover Out]","actionItemGroups":[{"actionItems":[{"id":"a-145-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".services_card-image","selectorGuids":["5322391b-50e4-b6db-6ddd-411b4da13c04"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-145-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":true,"id":"23ecdcc7-1acd-0ca3-bfb4-45d7f19f6f56"},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-145-n-3","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":true,"id":"23ecdcc7-1acd-0ca3-bfb4-45d7f19f6f56"},"globalSwatchId":"--base-color-brand--light-grey","rValue":248,"bValue":235,"gValue":241,"aValue":1}},{"id":"a-145-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".services_card-image","selectorGuids":["5322391b-50e4-b6db-6ddd-411b4da13c04"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1749093802073},"a-143":{"id":"a-143","title":"Ongoing Support [Lottie]","actionItemGroups":[{"actionItems":[{"id":"a-143-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".services_card-star","selectorGuids":["e9433526-9150-378d-de3d-212a090f01f7"]},"value":0,"unit":""}},{"id":"a-143-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".services_card-star","selectorGuids":["e9433526-9150-378d-de3d-212a090f01f7"]},"xValue":0,"yValue":0,"zValue":null,"locked":true}}]},{"actionItems":[{"id":"a-143-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0}},{"id":"a-143-n-10","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outBack","duration":750,"target":{"selector":".services_card-star","selectorGuids":["e9433526-9150-378d-de3d-212a090f01f7"]},"xValue":1,"yValue":1,"zValue":null,"locked":true}},{"id":"a-143-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":750,"target":{"selector":".services_card-star","selectorGuids":["e9433526-9150-378d-de3d-212a090f01f7"]},"value":1,"unit":""}},{"id":"a-143-n-5","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0}},{"id":"a-143-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0}}]},{"actionItems":[{"id":"a-143-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":3000,"target":{},"value":100}},{"id":"a-143-n-6","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":3000,"target":{},"value":100}},{"id":"a-143-n-4","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":3000,"target":{},"value":100}}]}],"useFirstGroupAsInitialState":true,"createdOn":1749101942632},"a-144":{"id":"a-144","title":"Ongoing Support [Lottie Pause]","actionItemGroups":[{"actionItems":[{"id":"a-144-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0}},{"id":"a-144-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".services_card-star","selectorGuids":["e9433526-9150-378d-de3d-212a090f01f7"]},"xValue":0,"yValue":0,"locked":true}},{"id":"a-144-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"selector":".services_card-star","selectorGuids":["e9433526-9150-378d-de3d-212a090f01f7"]},"value":0,"unit":""}},{"id":"a-144-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0}},{"id":"a-144-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":0,"target":{},"value":0}}]}],"useFirstGroupAsInitialState":false,"createdOn":1749101942632}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ServicesCard({
  as: _Component = _Builtin.Link,
  variant = "Base",
  heading = (
    <>
      {"Webflow "}
      <br />
      {"Development"}
    </>
  ),
  subheading = "As a Premium Webflow Partner, we build dynamic, easy-to-manage websites, designed for impact.",
  image = "https://cdn.prod.website-files.com/6719702b25f42f173940b521/682ffeb8d767ac5e5adc8b13_Image%20size.webp",

  link = {
    href: "/services/webflow-development",
  },
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Base: "",
    "Two Columns": "w-variant-322979c8-e30e-c484-2f44-516fe071effe",
    "Ongoing Support": "w-variant-809071bb-6f9c-3773-395a-0dd129133ef1",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`services_card-wrapper ${_activeStyleVariant}`}
      id="w-node-d15c2046-e8f2-a1a5-066d-ad890299e19f-0299e19f"
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block
        className={`services_card ${_activeStyleVariant}`}
        id="w-node-d15c2046-e8f2-a1a5-066d-ad890299e1a0-0299e19f"
        data-w-id="d15c2046-e8f2-a1a5-066d-ad890299e1a0"
        tag="div"
      >
        <_Builtin.Block
          className={`services_card-image-wrapper ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Image
            className={`services_card-image ${_activeStyleVariant}`}
            loading="lazy"
            width="auto"
            height="auto"
            src={image}
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={`services_card-content ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Heading
            className={`services_card-heading ${_activeStyleVariant}`}
            tag="h3"
          >
            {heading}
          </_Builtin.Heading>
          <_Builtin.Paragraph
            className={`text-size-small text-weight-normal ${_activeStyleVariant}`}
          >
            {subheading}
          </_Builtin.Paragraph>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={`services_card-shadow ${_activeStyleVariant}`}
        tag="div"
      />
      <_Builtin.Image
        className={`services_card-star ${_activeStyleVariant}`}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/6719702b25f42f173940b521/683927d8f254623b84506df7_star-emoji.webp"
      />
      <_Builtin.Image
        className={`services_card-star is-2 ${_activeStyleVariant}`}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/6719702b25f42f173940b521/683927d8f254623b84506df7_star-emoji.webp"
      />
    </_Component>
  );
}
