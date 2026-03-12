"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-172":{"id":"e-172","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5281bca-efa6-2c17-a9ff-0531516d8217","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5281bca-efa6-2c17-a9ff-0531516d8217","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":9,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1737669927229}},"actionLists":{"a-68":{"id":"a-68","title":"What to Expect [Load In]","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"value":0,"unit":""}},{"id":"a-68-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"value":0,"unit":""}},{"id":"a-68-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"value":0,"unit":""}},{"id":"a-68-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"value":0,"unit":""}},{"id":"a-68-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-68-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"value":1,"unit":""}},{"id":"a-68-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"value":1,"unit":""}},{"id":"a-68-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"value":1,"unit":""}},{"id":"a-68-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737670691540}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function TestimonialClientWrapper({
  as: _Component = _Builtin.Block,
  testimonialClientImage = "",
  testimonialNameOfClient = "This is some text inside of a div block.",
  testimonialClientRoleCompany = "This is some text inside of a div block.",
  testimonialClientImageAltText,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="testimonial_client-wrapper" tag="div">
      <_Builtin.Block className="testimonial_client-image-wrapper" tag="div">
        <_Builtin.Image
          className="testimonial_client-image"
          width="auto"
          height="auto"
          loading="lazy"
          src={testimonialClientImage}
        />
      </_Builtin.Block>
      <_Builtin.Block tag="div">
        <_Builtin.Block className="text-weight-semibold" tag="div">
          {testimonialNameOfClient}
        </_Builtin.Block>
        <_Builtin.Block className="text-size-small" tag="div">
          {testimonialClientRoleCompany}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
