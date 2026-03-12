"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-354":{"id":"e-354","name":"","animationType":"custom","eventTypeId":"PAGE_START","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-97","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-355"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1742333050494}},"actionLists":{"a-97":{"id":"a-97","title":"Preloader [Fade Out]","actionItemGroups":[{"actionItems":[{"id":"a-97-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".preloader","selectorGuids":["e97541cc-6e24-aeb1-2196-75e196f353f8"]},"value":"flex"}},{"id":"a-97-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".preloader","selectorGuids":["e97541cc-6e24-aeb1-2196-75e196f353f8"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-97-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"easeOut","duration":500,"target":{"selector":".preloader","selectorGuids":["e97541cc-6e24-aeb1-2196-75e196f353f8"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-97-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".preloader","selectorGuids":["e97541cc-6e24-aeb1-2196-75e196f353f8"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1740014017439}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Preloader({
  as: _Component = _Builtin.Block,
  variant = "Base",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Base: "",
    Dark: "w-variant-5b86e16c-69a5-1b6f-ea02-516edecdd70d",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return (
    <_Component
      className={`preloader ${_activeStyleVariant}`}
      tag="div"
      id="preloader"
    />
  );
}
