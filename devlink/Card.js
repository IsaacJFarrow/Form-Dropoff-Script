"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { SpacerMedium } from "./SpacerMedium";
import { SpacerMedSmall } from "./SpacerMedSmall";

const _interactionsData = JSON.parse(
  '{"events":{"e-39":{"id":"e-39","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-13","affectedElements":{},"duration":0}},"mediaQueries":["main","medium"],"target":{"id":"20066cb2-482c-89d4-924d-6cc9db25a3c1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"20066cb2-482c-89d4-924d-6cc9db25a3c1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-13-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1732749443702}},"actionLists":{"a-13":{"id":"a-13","title":"Services Cards [Scroll]","continuousParameterGroups":[{"id":"a-13-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-13-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":30,"actionItems":[{"id":"a-13-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0.8,"yValue":0.8,"locked":true}},{"id":"a-13-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":1,"yValue":1,"locked":true}}]},{"keyframe":60,"actionItems":[{"id":"a-13-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0.8,"yValue":0.8,"locked":true}}]}]}],"createdOn":1681375381018}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Card({
  as: _Component = _Builtin.Block,
  cardHeading = "Heading",
  cardSubheading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  cardIcon = "",
  cardIconVisibility = true,
  cardId,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="card" tag="div">
      <_Builtin.Block className="card_content is-services" tag="div">
        {cardIconVisibility ? (
          <_Builtin.Block className="card_icon-wrapper" tag="div">
            <_Builtin.Image
              className="icon-1x1-large"
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src={cardIcon}
            />
            <SpacerMedium />
          </_Builtin.Block>
        ) : null}
        <_Builtin.Heading className="card_heading is-services" tag="h3">
          {cardHeading}
        </_Builtin.Heading>
        <SpacerMedSmall />
        <_Builtin.Paragraph className="card_subheading">
          {cardSubheading}
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Block className="card_link-target" tag="div" id={cardId} />
    </_Component>
  );
}
