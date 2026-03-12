"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-79":{"id":"e-79","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main"],"target":{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734484081985},"e-80":{"id":"e-80","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-79"}},"mediaQueries":["main"],"target":{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734484081986},"e-507":{"id":"e-507","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-508"}},"mediaQueries":["main"],"target":{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759980473854},"e-508":{"id":"e-508","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-507"}},"mediaQueries":["main"],"target":{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759980473855}},"actionLists":{"a-28":{"id":"a-28","title":"Button Primary [Hover In]","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-28-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-1x1-small","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270ec"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-28-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-28-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"yValue":-4.5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-28-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-1x1-small","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270ec"]},"xValue":1.5,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-28-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f"},"xValue":0.95,"yValue":0.95,"locked":true}},{"id":"a-28-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"xValue":1.5,"yValue":1.5,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1734484085862},"a-29":{"id":"a-29","title":"Button Primary [Hover Out]","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-29-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-1x1-small","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270ec"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-29-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":350,"target":{"useEventTarget":true,"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-29-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outBack","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1734484085862}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Button({
  as: _Component = _Builtin.DOM,
  variant = "Base",
  text = "Button Text",
  classProp = " ",
  link,
  tag = "a",
  iconVisibility = false,
  attributeName,
  attributeVaue,
  visibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Base: "",
    Small: "w-variant-9010b4a9-918f-d3b6-9568-92d422e58201",
    Icon: "w-variant-a026d1bd-8a1f-786d-a251-58bac0a71b0a",
    "Small Icon": "w-variant-a164921b-d189-0b27-dac9-cf1c1f9246c5",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return visibility ? (
    <_Component
      className={`button ${_activeStyleVariant}`}
      id="w-node-f4153d05-4b65-caba-a56c-7b552f7b49a9-2f7b49a9"
      slot=""
      tag={tag}
      classProp={classProp}
      href={link}
    >
      <_Builtin.Block className={`z-index-1 ${_activeStyleVariant}`} tag="div">
        {text}
      </_Builtin.Block>
      {iconVisibility ? (
        <_Builtin.HtmlEmbed
          className={`icon-embed-xxsmall z-index-1 ${_activeStyleVariant}`}
          content=""
          value="%3Csvg%20aria-hidden%3D%22true%22%20fill%3D'currentColor'%20role%3D%22img%22%20viewBox%3D%220%200%2020%2021%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EArrow%20Right%3C%2Ftitle%3E%3Cpolygon%20points%3D%2216.172%209%2010.101%202.929%2011.515%201.515%2020%2010%2019.293%2010.707%2011.515%2018.485%2010.101%2017.071%2016.172%2011%200%2011%200%209%22%2F%3E%3C%2Fsvg%3E"
        />
      ) : null}
      <_Builtin.Block
        className={`button-background ${_activeStyleVariant}`}
        tag="div"
      />
    </_Component>
  ) : null;
}
