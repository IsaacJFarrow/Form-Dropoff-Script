"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Button } from "./Button";

const _interactionsData = JSON.parse(
  '{"events":{"e-172":{"id":"e-172","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5281bca-efa6-2c17-a9ff-0531516d8217","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5281bca-efa6-2c17-a9ff-0531516d8217","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":9,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1737669927229},"e-446":{"id":"e-446","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-140","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6719702b25f42f173940b51d|7242c584-fde5-12de-8bc8-a18139583dd2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6719702b25f42f173940b51d|7242c584-fde5-12de-8bc8-a18139583dd2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-140-p","smoothing":50,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1749091718943},"e-507":{"id":"e-507","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-508"}},"mediaQueries":["main"],"target":{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759980473854},"e-508":{"id":"e-508","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-507"}},"mediaQueries":["main"],"target":{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759980473855},"e-515":{"id":"e-515","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-165","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-516"}},"mediaQueries":["main"],"target":{"id":"45741d23-3cc7-9514-9a7c-69402729c12d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"45741d23-3cc7-9514-9a7c-69402729c12d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1760999317846},"e-516":{"id":"e-516","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-166","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-515"}},"mediaQueries":["main"],"target":{"id":"45741d23-3cc7-9514-9a7c-69402729c12d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"45741d23-3cc7-9514-9a7c-69402729c12d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1760999317848},"e-520":{"id":"e-520","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-164","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-521"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"45741d23-3cc7-9514-9a7c-69402729c12b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"45741d23-3cc7-9514-9a7c-69402729c12b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761003381968},"e-521":{"id":"e-521","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-168","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-520"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"45741d23-3cc7-9514-9a7c-69402729c12b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"45741d23-3cc7-9514-9a7c-69402729c12b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1761003381970}},"actionLists":{"a-68":{"id":"a-68","title":"What to Expect [Load In]","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"value":0,"unit":""}},{"id":"a-68-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"value":0,"unit":""}},{"id":"a-68-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"value":0,"unit":""}},{"id":"a-68-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"value":0,"unit":""}},{"id":"a-68-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-68-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"value":1,"unit":""}},{"id":"a-68-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"value":1,"unit":""}},{"id":"a-68-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"value":1,"unit":""}},{"id":"a-68-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737670691540},"a-140":{"id":"a-140","title":"Home hero Logo [Colour Change]","continuousParameterGroups":[{"id":"a-140-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-140-n","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-3","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-background","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-4","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---button-border","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-5","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---button-text","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-9","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---button-background-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-10","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-text-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button-old.is-small.is-navbar","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27158","07815991-952a-8d98-0e00-e4c25af27167","85ece59c-fc6f-f49a-345a-9b3486342800"]},"value":0,"unit":""}},{"id":"a-140-n-16","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---home-logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}}]},{"keyframe":99,"actionItems":[{"id":"a-140-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button-old.is-small.is-navbar","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27158","07815991-952a-8d98-0e00-e4c25af27167","85ece59c-fc6f-f49a-345a-9b3486342800"]},"value":0,"unit":""}}]},{"keyframe":100,"actionItems":[{"id":"a-140-n-2","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-background","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-6","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-7","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---button-border","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-8","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---button-text","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-11","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---button-background-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-12","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-text-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button-old.is-small.is-navbar","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27158","07815991-952a-8d98-0e00-e4c25af27167","85ece59c-fc6f-f49a-345a-9b3486342800"]},"value":1,"unit":""}},{"id":"a-140-n-17","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---home-logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}}]}]}],"createdOn":1749091598251},"a-28":{"id":"a-28","title":"Button Primary [Hover In]","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-28-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-1x1-small","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270ec"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-28-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-28-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"yValue":-4.5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-28-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-1x1-small","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270ec"]},"xValue":1.5,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-28-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f"},"xValue":0.95,"yValue":0.95,"locked":true}},{"id":"a-28-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"xValue":1.5,"yValue":1.5,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1734484085862},"a-29":{"id":"a-29","title":"Button Primary [Hover Out]","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-29-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-1x1-small","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270ec"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-29-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":350,"target":{"useEventTarget":true,"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-29-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outBack","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1734484085862},"a-165":{"id":"a-165","title":"eBook Input [Hover In]","actionItemGroups":[],"useFirstGroupAsInitialState":false,"createdOn":1760999323639},"a-166":{"id":"a-166","title":"eBook Input [Hover Out]","actionItemGroups":[{"actionItems":[{"id":"a-166-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":350,"target":{"useEventTarget":true,"id":"45741d23-3cc7-9514-9a7c-69402729c12d"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1760999323639},"a-164":{"id":"a-164","title":"eBook CTA Form [Hover In]","actionItemGroups":[{"actionItems":[{"id":"a-164-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"45741d23-3cc7-9514-9a7c-69402729c12b"},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-164-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"45741d23-3cc7-9514-9a7c-69402729c12b"},"xValue":0.98,"yValue":0.98,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1760996318670},"a-168":{"id":"a-168","title":"eBook CTA Form [Hover Out]","actionItemGroups":[{"actionItems":[{"id":"a-168-n","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":350,"target":{"useEventTarget":true,"id":"45741d23-3cc7-9514-9a7c-69402729c12b"},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1760996318670}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FormCta({
  as: _Component = _Builtin.Block,
  eyebrowText = "Our 2025 eBook",
  eyebrowVisibility = true,
  heading = (
    <>
      {"The 30 Day Digital Launch Toolkit"}
      <br />
    </>
  ),
  paragraph = "",
  formButtonText = "Get your eBook",
  image = "https://cdn.prod.website-files.com/6719702b25f42f173940b521/68e727a1792c2beb49d9cba8_Front%20Cover%20-%2030%20Day%20Digital%20Launch%20Toolkit.webp",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="section_ebook-cta" tag="section">
      <_Builtin.Block
        className="padding-global padding-section-xlarge"
        tag="div"
      >
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="ebook-cta_component" tag="div">
            <_Builtin.Block
              className="ebook-cta_content-left"
              id="w-node-_45741d23-3cc7-9514-9a7c-69402729c113-2729c10f"
              tag="div"
            >
              {eyebrowVisibility ? (
                <_Builtin.Paragraph className="text-size-medium text-weight-semibold text-color-primary-light">
                  {eyebrowText}
                </_Builtin.Paragraph>
              ) : null}
              <_Builtin.Block className="ebook-cta_heading-wrapper" tag="div">
                <_Builtin.Heading className="heading-style-h2-small" tag="h2">
                  {heading}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Block
                className="ebook-cta_subheading-wrapper"
                tag="div"
              >
                <_Builtin.RichText
                  className="ebook-rich-text"
                  tag="div"
                  slot=""
                >
                  {paragraph}
                </_Builtin.RichText>
              </_Builtin.Block>
              <_Builtin.FormWrapper
                className="ebook-cta_form-wrapper"
                data-w-id="45741d23-3cc7-9514-9a7c-69402729c12b"
              >
                <_Builtin.FormForm
                  className="ebook-cta_form"
                  name="wf-form-eBook-Email-Form"
                  data-name="eBook Email Form"
                  method="get"
                  id="wf-form-eBook-Email-Form"
                >
                  <_Builtin.FormTextInput
                    className="form_input w-node-_45741d23-3cc7-9514-9a7c-69402729c12d-2729c10f"
                    id="Email"
                    data-w-id="45741d23-3cc7-9514-9a7c-69402729c12d"
                    name="Email"
                    maxLength={256}
                    data-name="Email"
                    placeholder="Enter your email"
                    disabled={false}
                    type="email"
                    required={true}
                    autoFocus={false}
                  />
                  <_Builtin.FormButton
                    className="button-old is-ebook-form hide"
                    data-w-id="45741d23-3cc7-9514-9a7c-69402729c12e"
                    type="submit"
                    value="Get your eBook"
                    data-wait="Please wait..."
                    msCodeSubmitOld="1"
                  />
                  <Button
                    attributeName="ms-code-submit-new"
                    attributeVaue="1"
                    tag="button"
                    text="Get your eBook"
                    iconVisibility={true}
                    variant="Icon"
                  />
                </_Builtin.FormForm>
                <_Builtin.FormSuccessMessage className="ebook-cta_form-sucess">
                  <_Builtin.Block tag="div">
                    {
                      "Thanks! Your eBook is on the way to the email you provided."
                    }
                  </_Builtin.Block>
                </_Builtin.FormSuccessMessage>
                <_Builtin.FormErrorMessage>
                  <_Builtin.Block tag="div">
                    {"Oops! Something went wrong while submitting the form."}
                  </_Builtin.Block>
                </_Builtin.FormErrorMessage>
              </_Builtin.FormWrapper>
            </_Builtin.Block>
            <_Builtin.Block
              className="ebook-cta_image-wrapper"
              id="w-node-_45741d23-3cc7-9514-9a7c-69402729c13c-2729c10f"
              tag="div"
            >
              <_Builtin.Image
                className="ebook-cta_image"
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
