"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { SpacerXxsmall } from "./SpacerXxsmall";
import { SpacerMedium } from "./SpacerMedium";
import { SocialList } from "./SocialList";
import { SpacerXsmall } from "./SpacerXsmall";

const _interactionsData = JSON.parse(
  '{"events":{"e-44":{"id":"e-44","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-59","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1959"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"519e01b2-fb00-8742-62e7-267425e974f4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"519e01b2-fb00-8742-62e7-267425e974f4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1645856301248},"e-77":{"id":"e-77","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-78"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734479626487},"e-79":{"id":"e-79","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main"],"target":{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734484081985},"e-80":{"id":"e-80","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-79"}},"mediaQueries":["main"],"target":{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734484081986},"e-138":{"id":"e-138","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-59","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-139"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"519e01b2-fb00-8742-62e7-267425e97466","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"519e01b2-fb00-8742-62e7-267425e97466","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737585234307},"e-140":{"id":"e-140","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-59","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-141"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"519e01b2-fb00-8742-62e7-267425e974ed","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"519e01b2-fb00-8742-62e7-267425e974ed","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1737585509184},"e-212":{"id":"e-212","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-213"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"681c7279-4543-bc6b-3066-e989fe202508","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"681c7279-4543-bc6b-3066-e989fe202508","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1738705194718},"e-405":{"id":"e-405","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-406"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be6507e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be6507e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747963362785},"e-407":{"id":"e-407","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-408"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be65081","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be65081","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747963613673},"e-446":{"id":"e-446","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-140","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6719702b25f42f173940b51d|7242c584-fde5-12de-8bc8-a18139583dd2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6719702b25f42f173940b51d|7242c584-fde5-12de-8bc8-a18139583dd2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-140-p","smoothing":50,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1749091718943},"e-461":{"id":"e-461","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-462"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6719702b25f42f173940b51d|79b10d8f-e7b1-36a2-45fa-a93a25ef4e2d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6719702b25f42f173940b51d|79b10d8f-e7b1-36a2-45fa-a93a25ef4e2d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749524045654},"e-507":{"id":"e-507","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-508"}},"mediaQueries":["main"],"target":{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759980473854},"e-508":{"id":"e-508","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-507"}},"mediaQueries":["main"],"target":{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759980473855},"e-553":{"id":"e-553","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-18","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-554"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".is-form-link","originalId":"4c892f32-2fe6-6dd6-e21d-94a417215dd4","appliesTo":"CLASS"},"targets":[{"selector":".is-form-link","originalId":"4c892f32-2fe6-6dd6-e21d-94a417215dd4","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1772763597609}},"actionLists":{"a-59":{"id":"a-59","title":"Multi Step Form [Close]","actionItemGroups":[{"actionItems":[{"id":"a-59-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":350,"target":{"selector":".multi-step-form_component","selectorGuids":["28752c31-774f-4b7b-052a-46c643b0416f"]},"value":0,"unit":""}},{"id":"a-59-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":350,"target":{"selector":".multi-step-form_content-wrapper","selectorGuids":["28752c31-774f-4b7b-052a-46c643b04170"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-59-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".multi-step-form_component","selectorGuids":["28752c31-774f-4b7b-052a-46c643b0416f"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1644220869174},"a-18":{"id":"a-18","title":"Multi Step Form [Open]","actionItemGroups":[{"actionItems":[{"id":"a-18-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".multi-step-form_component","selectorGuids":["28752c31-774f-4b7b-052a-46c643b0416f"]},"value":0,"unit":""}},{"id":"a-18-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".multi-step-form_content-wrapper","selectorGuids":["28752c31-774f-4b7b-052a-46c643b04170"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-18-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".multi-step-form_component","selectorGuids":["28752c31-774f-4b7b-052a-46c643b0416f"]},"value":"none"}}]},{"actionItems":[{"id":"a-18-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":250,"target":{"selector":".multi-step-form_component","selectorGuids":["28752c31-774f-4b7b-052a-46c643b0416f"]},"value":1,"unit":""}},{"id":"a-18-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"selector":".multi-step-form_content-wrapper","selectorGuids":["28752c31-774f-4b7b-052a-46c643b04170"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-18-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".multi-step-form_component","selectorGuids":["28752c31-774f-4b7b-052a-46c643b0416f"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1644220869174},"a-28":{"id":"a-28","title":"Button Primary [Hover In]","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-28-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-1x1-small","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270ec"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-28-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-28-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"yValue":-4.5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-28-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-1x1-small","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270ec"]},"xValue":1.5,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-28-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f"},"xValue":0.95,"yValue":0.95,"locked":true}},{"id":"a-28-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"xValue":1.5,"yValue":1.5,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1734484085862},"a-29":{"id":"a-29","title":"Button Primary [Hover Out]","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-29-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-1x1-small","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270ec"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-29-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":350,"target":{"useEventTarget":true,"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-29-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outBack","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1734484085862},"a-130":{"id":"a-130","title":"Currency NZD [Toggle]","actionItemGroups":[{"actionItems":[{"id":"a-130-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price-wrapper.is-usd","selectorGuids":["e36d732e-3df2-6473-01f8-163844c77050","9f5008dd-66ce-2ae6-794b-2cb09e75b727"]},"value":"none"}},{"id":"a-130-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-size-tiny.text-color-secondary-light.is-usd","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27118","d570b2de-9ada-15dc-cb9a-4f49c9588db3","e7490f12-92d8-2d7b-c57c-ede4d82f7952"]},"value":"none"}},{"id":"a-130-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price-wrapper.is-nzd","selectorGuids":["e36d732e-3df2-6473-01f8-163844c77050","03486887-de8e-7a77-2197-a26c6456cbc8"]},"value":"flex"}},{"id":"a-130-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-size-tiny.text-color-secondary-light.is-nzd","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27118","d570b2de-9ada-15dc-cb9a-4f49c9588db3","4619035f-fd1e-ea55-aec6-6440fa4ad1ad"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1747963400698},"a-131":{"id":"a-131","title":"Currency USD [Toggle]","actionItemGroups":[{"actionItems":[{"id":"a-131-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price-wrapper.is-nzd","selectorGuids":["e36d732e-3df2-6473-01f8-163844c77050","03486887-de8e-7a77-2197-a26c6456cbc8"]},"value":"none"}},{"id":"a-131-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-size-tiny.text-color-secondary-light.is-nzd","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27118","d570b2de-9ada-15dc-cb9a-4f49c9588db3","4619035f-fd1e-ea55-aec6-6440fa4ad1ad"]},"value":"none"}},{"id":"a-131-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price-wrapper.is-usd","selectorGuids":["e36d732e-3df2-6473-01f8-163844c77050","9f5008dd-66ce-2ae6-794b-2cb09e75b727"]},"value":"flex"}},{"id":"a-131-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-size-tiny.text-color-secondary-light.is-usd","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27118","d570b2de-9ada-15dc-cb9a-4f49c9588db3","e7490f12-92d8-2d7b-c57c-ede4d82f7952"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1747963400698},"a-140":{"id":"a-140","title":"Home hero Logo [Colour Change]","continuousParameterGroups":[{"id":"a-140-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-140-n","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-3","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-background","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-4","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---button-border","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-5","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---button-text","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-9","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---button-background-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-10","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-text-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button-old.is-small.is-navbar","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27158","07815991-952a-8d98-0e00-e4c25af27167","85ece59c-fc6f-f49a-345a-9b3486342800"]},"value":0,"unit":""}},{"id":"a-140-n-16","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---home-logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}}]},{"keyframe":99,"actionItems":[{"id":"a-140-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button-old.is-small.is-navbar","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27158","07815991-952a-8d98-0e00-e4c25af27167","85ece59c-fc6f-f49a-345a-9b3486342800"]},"value":0,"unit":""}}]},{"keyframe":100,"actionItems":[{"id":"a-140-n-2","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-background","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-6","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-7","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---button-border","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-8","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---button-text","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-11","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---button-background-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-12","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-text-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button-old.is-small.is-navbar","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27158","07815991-952a-8d98-0e00-e4c25af27167","85ece59c-fc6f-f49a-345a-9b3486342800"]},"value":1,"unit":""}},{"id":"a-140-n-17","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---home-logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}}]}]}],"createdOn":1749091598251}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function OnboardingForm({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="multi-step-form_component"
      tag="div"
      fsScrolldisableElement="when-visible"
    >
      <_Builtin.Block className="multi-step-form_content-wrapper" tag="div">
        <_Builtin.FormWrapper className="multi-step-form_block">
          <_Builtin.FormForm
            className="multi-step-form_form"
            name="wf-form-Get-a-Quote-Form"
            data-name="Get a Quote Form"
            method="get"
            data-form="multistep"
            data-enter="true"
            id="wf-form-Get-a-Quote-Form"
          >
            <_Builtin.Block
              className="multi-step-form_progress-wrapper"
              tag="div"
            >
              <_Builtin.Link
                className="button-old is-icon is-text is-multi-step-form"
                button={false}
                data-form="back-btn"
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.HtmlEmbed
                  className="icon-embed-xxsmall"
                  content=""
                  value="%3Csvg%20width%3D%2219%22%20height%3D%2216%22%20viewBox%3D%220%200%2019%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M18.9999%206.99997H4.41394L9.70694%201.70697L8.29294%200.292969L0.585938%207.99997L8.29294%2015.707L9.70694%2014.293L4.41394%208.99997H18.9999V6.99997Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                />
                <_Builtin.Block tag="div">{"Back"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Block
                className="multi-step-form_progress"
                tag="div"
                data-form="progress"
              >
                <_Builtin.Block
                  className="multi-step-form_progress-bar current"
                  tag="div"
                />
                <_Builtin.Block
                  className="multi-step-form_progress-bar"
                  tag="div"
                  data-form="progress-indicator"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className="multi-step-form_step-tag"
                id="w-node-_519e01b2-fb00-8742-62e7-267425e9745f-25e97453"
                tag="div"
              >
                {"Step "}
                <_Builtin.Span
                  className="multi-step-form_step-current"
                  data-text="current-step"
                >
                  {"1"}
                </_Builtin.Span>
                {"/3"}
              </_Builtin.Block>
              <_Builtin.Block
                className="multi-step-form_icon-wrapper"
                id="w-node-_519e01b2-fb00-8742-62e7-267425e97466-25e97453"
                data-w-id="519e01b2-fb00-8742-62e7-267425e97466"
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className="icon-1x1-small"
                  id="w-node-_519e01b2-fb00-8742-62e7-267425e97467-25e97453"
                  content=""
                  value="%3Csvg%20width%3D%2224%22%20height%3D%2223%22%20viewBox%3D%220%200%2024%2023%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M2%2021.5L22%201.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M2%201.5L22%2021.5%22%20stroke%3D%22currentColor%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="multi-step-form_step"
              id="w-node-_519e01b2-fb00-8742-62e7-267425e97468-25e97453"
              tag="div"
              data-form="step"
              data-checkbox="1"
            >
              <_Builtin.Block
                className="multi-step-form_content-left"
                id="w-node-_519e01b2-fb00-8742-62e7-267425e97469-25e97453"
                tag="div"
              >
                <_Builtin.Block className="multi-step-form_tag" tag="div">
                  {"Select a service"}
                </_Builtin.Block>
                <SpacerXxsmall />
                <_Builtin.Paragraph className="multi-step-form_heading">
                  {"How can we help?"}
                </_Builtin.Paragraph>
                <SpacerMedium />
                <_Builtin.Paragraph>
                  {
                    "Let’s turn those What IF’s into reality, select one or more services to get started."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block
                className="multi-step-form_form-content"
                tag="div"
              >
                <_Builtin.Block
                  className="multi-step-form_service-list"
                  id="w-node-_154fde3e-b1dd-4839-0686-2e683d2edfe3-25e97453"
                  tag="div"
                >
                  <_Builtin.Block
                    className="form_field-wrapper"
                    id="w-node-_05ad8856-a97e-fd61-7395-2f6e019882d5-25e97453"
                    tag="div"
                  >
                    <_Builtin.FormCheckboxWrapper className="form_checkbox is-large">
                      <_Builtin.HtmlEmbed
                        className="icon-wrapper is-onboarding"
                        content=""
                        value="%3Csvg%20width%3D%2220%22%20height%3D%2218%22%20viewBox%3D%220%200%2020%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M19.447%203.10474L13.447%200.104739C13.3081%200.0352188%2013.1549%20-0.000976562%2012.9995%20-0.000976562C12.8441%20-0.000976562%2012.6909%200.0352188%2012.552%200.104739L7%202.88174L1.447%200.104739C1.2945%200.0285367%201.12506%20-0.00741561%200.954757%200.000297308C0.784455%200.00801023%200.618953%200.0591322%200.473969%200.148808C0.328985%200.238483%200.209334%200.363735%200.126379%200.512666C0.0434244%200.661598%20-7.93497e-05%200.829264%201.08651e-07%200.999739V13.9997C1.08651e-07%2014.3787%200.214%2014.7247%200.553%2014.8947L6.553%2017.8947C6.69193%2017.9643%206.84515%2018.0005%207.0005%2018.0005C7.15585%2018.0005%207.30907%2017.9643%207.448%2017.8947L13%2015.1177L18.553%2017.8937C18.7051%2017.9707%2018.8744%2018.0071%2019.0446%2017.9996C19.2149%2017.9921%2019.3803%2017.9408%2019.525%2017.8507C19.82%2017.6677%2020%2017.3467%2020%2016.9997V3.99974C20%203.62074%2019.786%203.27474%2019.447%203.10474ZM8%204.61774L12%202.61774V13.3817L8%2015.3817V4.61774ZM2%202.61774L6%204.61774V15.3817L2%2013.3817V2.61774ZM18%2015.3817L14%2013.3817V2.61774L18%204.61774V15.3817Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.FormCheckboxInput
                        className="form_checkbox-icon"
                        type="checkbox"
                        name="Website-Strategy"
                        data-name="Website Strategy"
                        required={false}
                        checked={false}
                        id="Website-Strategy"
                        form={{
                          type: "checkbox-input",
                          name: "Website Strategy",
                        }}
                        inputType="custom"
                        customClassName="w-checkbox-input--inputType-custom"
                      />
                      <_Builtin.FormInlineLabel
                        className="form_checkbox-label text-color-secondary"
                        htmlFor="Checkbox"
                      >
                        {"Website Strategy"}
                      </_Builtin.FormInlineLabel>
                    </_Builtin.FormCheckboxWrapper>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="form_field-wrapper"
                    id="w-node-_67cb9dea-11da-b65b-96f6-a6c43ef015e6-25e97453"
                    tag="div"
                  >
                    <_Builtin.FormCheckboxWrapper className="form_checkbox is-large">
                      <_Builtin.HtmlEmbed
                        className="icon-wrapper is-onboarding"
                        content=""
                        value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M16.4038%200.997836C15.6468%200.243836%2014.3268%200.246836%2013.5758%201.00284L11.7918%202.79384L9.58583%204.99984H4.99983C4.79466%204.99969%204.59443%205.06279%204.42641%205.18053C4.25838%205.29827%204.13073%205.46494%204.06083%205.65784L0.0608339%2016.6578C-0.0721661%2017.0228%200.0188338%2017.4318%200.292834%2017.7068L2.29283%2019.7068C2.42729%2019.8416%202.59752%2019.9351%202.78341%2019.9762C2.9693%2020.0173%203.16308%2020.0044%203.34183%2019.9388L14.3418%2015.9388C14.5347%2015.8689%2014.7014%2015.7413%2014.8191%2015.5733C14.9369%2015.4052%2015%2015.205%2014.9998%2014.9998V10.4138L17.2078%208.20584L18.9998%206.40884C19.3778%206.03084%2019.5858%205.52784%2019.5848%204.99384C19.5848%204.45884%2019.3758%203.95584%2018.9968%203.57884L16.4038%200.997836ZM13.2928%209.29284C13.1998%209.38554%2013.126%209.49573%2013.0757%209.61707C13.0254%209.73841%2012.9996%209.86849%2012.9998%209.99984V14.2998L3.75083%2017.6628L8.42183%2012.9918C8.44783%2012.9928%208.47383%2012.9998%208.49983%2012.9998C8.79651%2012.9998%209.08652%2012.9119%209.33319%2012.747C9.57986%2012.5822%209.77212%2012.3479%209.88565%2012.0739C9.99918%2011.7998%2010.0289%2011.4982%209.97101%2011.2072C9.91313%2010.9162%209.77027%2010.649%209.56049%2010.4392C9.35072%2010.2294%209.08344%2010.0865%208.79247%2010.0287C8.5015%209.97078%208.1999%2010.0005%207.92581%2010.114C7.65172%2010.2275%207.41745%2010.4198%207.25263%2010.6665C7.08781%2010.9132%206.99983%2011.2032%206.99983%2011.4998C6.99983%2011.5258%207.00683%2011.5518%207.00783%2011.5778L2.33683%2016.2488L5.69983%206.99984H9.99983C10.2658%206.99984%2010.5198%206.89484%2010.7068%206.70684L12.4998%204.91384L15.0858%207.49984L13.2928%209.29284ZM16.4988%206.08484L13.9128%203.49884L14.9918%202.41484L17.5848%204.99584L16.4988%206.08484Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.FormCheckboxInput
                        className="form_checkbox-icon"
                        type="checkbox"
                        name="Web-Design"
                        data-name="Web Design"
                        required={false}
                        checked={false}
                        id="Web-Design"
                        form={{
                          type: "checkbox-input",
                          name: "Web Design",
                        }}
                        inputType="custom"
                        customClassName="w-checkbox-input--inputType-custom"
                      />
                      <_Builtin.FormInlineLabel
                        className="form_checkbox-label text-color-secondary"
                        htmlFor="Checkbox-2"
                      >
                        {"Web Design"}
                      </_Builtin.FormInlineLabel>
                    </_Builtin.FormCheckboxWrapper>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="form_field-wrapper"
                    id="w-node-_6ae1429c-ded1-67ba-3774-1d24507cf714-25e97453"
                    tag="div"
                  >
                    <_Builtin.FormCheckboxWrapper className="form_checkbox is-large">
                      <_Builtin.HtmlEmbed
                        className="icon-wrapper is-onboarding"
                        content=""
                        value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M11.7072%200.293201C11.6144%200.200255%2011.5042%200.126518%2011.3829%200.0762068C11.2615%200.0258961%2011.1315%200%2011.0002%200C10.8688%200%2010.7388%200.0258961%2010.6175%200.0762068C10.4962%200.126518%2010.386%200.200255%2010.2932%200.293201L4.45317%206.1332C4.43817%206.1322%204.42417%206.1242%204.40917%206.1242C4.27784%206.12406%204.14777%206.14988%204.02644%206.20016C3.90511%206.25044%203.79491%206.3242%203.70217%206.4172L2.28817%207.8312C2.00897%208.10942%201.78764%208.44018%201.63694%208.80439C1.48624%209.1686%201.40917%209.55905%201.41017%209.9532C1.41017%2010.7552%201.72317%2011.5092%202.28917%2012.0742L2.99617%2012.7812L0.874171%2014.9032C0.594311%2015.178%200.372686%2015.5064%200.222523%2015.8687C0.0723604%2016.2311%20-0.00326134%2016.62%200.000171408%2017.0122C-0.00455092%2017.4516%200.0883567%2017.8866%200.272186%2018.2857C0.456015%2018.6848%200.726179%2019.0382%201.06317%2019.3202C1.58217%2019.7592%202.25117%2020.0002%202.94817%2020.0002C3.78217%2020.0002%204.60217%2019.6592%205.19817%2019.0632L7.23817%2017.0242L7.94517%2017.7302C9.07917%2018.8632%2011.0542%2018.8642%2012.1872%2017.7312L13.6022%2016.3172C13.6952%2016.2245%2013.7689%2016.1143%2013.8192%2015.9929C13.8695%2015.8716%2013.8953%2015.7415%2013.8952%2015.6102C13.8952%2015.5842%2013.8822%2015.5602%2013.8802%2015.5342L19.7072%209.7072C19.8001%209.61441%2019.8739%209.50421%2019.9242%209.38289C19.9745%209.26158%2020.0004%209.13153%2020.0004%209.0002C20.0004%208.86887%2019.9745%208.73882%2019.9242%208.61751C19.8739%208.49619%2019.8001%208.38599%2019.7072%208.2932L11.7072%200.293201ZM10.7722%2016.3172C10.5817%2016.4991%2010.3284%2016.6005%2010.065%2016.6003C9.80158%2016.6001%209.54841%2016.4984%209.35817%2016.3162L7.94417%2014.9032C7.85138%2014.8103%207.74118%2014.7365%207.61986%2014.6862C7.49855%2014.6359%207.36851%2014.61%207.23717%2014.61C7.10584%2014.61%206.97579%2014.6359%206.85448%2014.6862C6.73316%2014.7365%206.62296%2014.8103%206.53017%2014.9032L3.78417%2017.6482C3.56291%2017.8713%203.26238%2017.9978%202.94817%2018.0002C2.73173%2018.0037%202.52113%2017.93%202.35417%2017.7922C2.23958%2017.6974%202.14814%2017.5776%202.08679%2017.4421C2.02545%2017.3066%201.99582%2017.1589%202.00017%2017.0102C1.99913%2016.8815%202.024%2016.7539%202.0733%2016.635C2.12261%2016.5161%202.19535%2016.4084%202.28717%2016.3182L5.11617%2013.4892C5.20912%2013.3964%205.28285%2013.2862%205.33317%2013.1649C5.38348%2013.0436%205.40937%2012.9135%205.40937%2012.7822C5.40937%2012.6509%205.38348%2012.5208%205.33317%2012.3995C5.28285%2012.2782%205.20912%2012.168%205.11617%2012.0752L3.70117%2010.6602C3.60816%2010.5677%203.53445%2010.4577%203.48432%2010.3365C3.4342%2010.2153%203.40865%2010.0854%203.40917%209.9542C3.40917%209.6862%203.51317%209.4352%203.70217%209.2462L4.40917%208.5392L11.4802%2015.6112L10.7722%2016.3172ZM12.6612%2013.9252L6.07517%207.3392L11.0002%202.4142L17.5862%209.0002L12.6612%2013.9252Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.FormCheckboxInput
                        className="form_checkbox-icon"
                        type="checkbox"
                        name="Branding-Identity"
                        data-name="Branding & Identity"
                        required={false}
                        checked={false}
                        id="Branding-Identity"
                        form={{
                          type: "checkbox-input",
                          name: "Branding & Identity",
                        }}
                        inputType="custom"
                        customClassName="w-checkbox-input--inputType-custom"
                      />
                      <_Builtin.FormInlineLabel
                        className="form_checkbox-label text-color-secondary"
                        htmlFor="Checkbox-2"
                      >
                        {"Branding &Identity"}
                      </_Builtin.FormInlineLabel>
                    </_Builtin.FormCheckboxWrapper>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="form_field-wrapper"
                    id="w-node-ba48d4ce-b3ee-3f2b-0056-49b0d5ec2945-25e97453"
                    tag="div"
                  >
                    <_Builtin.FormCheckboxWrapper className="form_checkbox is-large">
                      <_Builtin.HtmlEmbed
                        className="icon-wrapper is-onboarding"
                        content=""
                        value="%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10%200C4.486%200%200%204.486%200%2010C0%2015.514%204.486%2020%2010%2020C15.514%2020%2020%2015.514%2020%2010C20%204.486%2015.514%200%2010%200ZM17.931%209H15.167C15.0436%206.81124%2014.4313%204.67797%2013.375%202.757C14.5992%203.32905%2015.6589%204.2014%2016.4554%205.29291C17.252%206.38442%2017.7596%207.65965%2017.931%209ZM10.53%202.027C11.565%203.391%2012.957%205.807%2013.157%209H7.03C7.169%206.404%208.024%203.972%209.481%202.026C9.653%202.016%209.825%202%2010%202C10.179%202%2010.354%202.016%2010.53%202.027ZM6.688%202.727C5.704%204.618%205.136%206.762%205.03%209H2.069C2.24177%207.64784%202.75663%206.3621%203.56489%205.26442C4.37315%204.16673%205.44808%203.29339%206.688%202.727ZM2.069%2011H5.043C5.179%2013.379%205.708%2015.478%206.599%2017.23C5.38119%2016.6559%204.32773%2015.7842%203.53596%2014.6953C2.74419%2013.6064%202.23966%2012.3355%202.069%2011ZM9.45%2017.973C8.049%2016.275%207.222%2013.896%207.041%2011H13.154C12.946%2013.773%2012.037%2016.196%2010.551%2017.972C10.369%2017.984%2010.187%2018%2010%2018C9.814%2018%209.633%2017.984%209.45%2017.973ZM13.461%2017.201C14.416%2015.407%2014.999%2013.3%2015.152%2011H17.93C17.7612%2012.3243%2017.264%2013.5853%2016.4834%2014.6684C15.7029%2015.7514%2014.6639%2016.622%2013.461%2017.201Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.FormCheckboxInput
                        className="form_checkbox-icon"
                        type="checkbox"
                        name="Website-Development"
                        data-name="Website Development"
                        required={false}
                        checked={false}
                        id="Website-Development"
                        form={{
                          type: "checkbox-input",
                          name: "Website Development",
                        }}
                        inputType="custom"
                        customClassName="w-checkbox-input--inputType-custom"
                      />
                      <_Builtin.FormInlineLabel
                        className="form_checkbox-label text-color-secondary"
                        htmlFor="Checkbox-2"
                      >
                        {"Website Development"}
                      </_Builtin.FormInlineLabel>
                    </_Builtin.FormCheckboxWrapper>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="form_field-wrapper"
                    id="w-node-ed5c28f6-bb89-c6a0-af28-3dceda873cb0-25e97453"
                    tag="div"
                  >
                    <_Builtin.FormCheckboxWrapper className="form_checkbox is-large">
                      <_Builtin.HtmlEmbed
                        className="icon-wrapper is-onboarding"
                        content=""
                        value="%3Csvg%20width%3D%2214%22%20height%3D%2220%22%20viewBox%3D%220%200%2014%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%200H2C0.897%200%200%200.897%200%202V18C0%2019.103%200.897%2020%202%2020H12C13.103%2020%2014%2019.103%2014%2018V2C14%200.897%2013.103%200%2012%200ZM2%2014.999V3H12L12.002%2014.999H2Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.FormCheckboxInput
                        className="form_checkbox-icon"
                        type="checkbox"
                        name="Webflow-Development"
                        data-name="Webflow Development"
                        required={false}
                        checked={false}
                        id="Webflow-Development"
                        form={{
                          type: "checkbox-input",
                          name: "Webflow Development",
                        }}
                        inputType="custom"
                        customClassName="w-checkbox-input--inputType-custom"
                      />
                      <_Builtin.FormInlineLabel
                        className="form_checkbox-label text-color-secondary"
                        htmlFor="Checkbox-2"
                      >
                        {"Webflow Development"}
                      </_Builtin.FormInlineLabel>
                    </_Builtin.FormCheckboxWrapper>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <SocialList />
              <_Builtin.Link
                className="button-old is-small"
                id="w-node-_519e01b2-fb00-8742-62e7-267425e9747f-25e97453"
                button={true}
                data-form="next-btn"
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Next"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className="multi-step-form_step"
              id="w-node-_519e01b2-fb00-8742-62e7-267425e974c1-25e97453"
              tag="div"
              data-form="step"
            >
              <_Builtin.Block
                className="multi-step-form_content-left"
                tag="div"
              >
                <_Builtin.Block className="multi-step-form_tag" tag="div">
                  {"Contact Details"}
                </_Builtin.Block>
                <SpacerXxsmall />
                <_Builtin.Paragraph className="multi-step-form_heading">
                  {"How can we reach you?"}
                </_Builtin.Paragraph>
                <SpacerMedium />
                <_Builtin.Paragraph>
                  {
                    "Final step! Fill out your contact info, and we’ll be in touch to discuss your project soon."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block
                className="multi-step-form_form-content"
                tag="div"
              >
                <_Builtin.Block
                  className="form_field-wrapper"
                  id="w-node-_519e01b2-fb00-8742-62e7-267425e974cc-25e97453"
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className="form_label"
                    htmlFor="Name-3"
                  >
                    {"Enter your name*"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className="form_input"
                    name="Name"
                    maxLength={256}
                    data-name="Name"
                    placeholder="Your name"
                    disabled={false}
                    type="text"
                    required={true}
                    autoFocus={false}
                    id="Name-3"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="form_field-wrapper"
                  id="w-node-_519e01b2-fb00-8742-62e7-267425e974d0-25e97453"
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className="form_label"
                    htmlFor="Email-6"
                  >
                    {"Enter your email*"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className="form_input is-email"
                    name="Email"
                    maxLength={256}
                    data-name="Email"
                    placeholder="hello@company.com"
                    disabled={false}
                    type="email"
                    required={true}
                    autoFocus={false}
                    id="Email-6"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="form_field-wrapper"
                  id="w-node-_49cb42ad-a7fb-e5eb-2f55-5dba3512d1d0-25e97453"
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className="form_label"
                    htmlFor="Company-Name-3"
                  >
                    {"Enter your company name"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextInput
                    className="form_input"
                    name="Company-Name"
                    maxLength={256}
                    data-name="Company Name"
                    placeholder="Your company"
                    disabled={false}
                    type="text"
                    required={false}
                    autoFocus={false}
                    id="Company-Name-3"
                  />
                  <SpacerXxsmall />
                  <_Builtin.Block className="text-size-tiny" tag="div">
                    {"Leave blank if you don’t have one yet"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <SocialList id="w-node-_6ca1e75b-0df8-7d2c-f515-de637cd913cb-25e97453" />
              <_Builtin.Link
                className="button-old is-small"
                id="w-node-_8e433d64-b589-5371-0dad-6b12a25273bd-25e97453"
                button={true}
                data-form="next-btn"
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Next"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className="multi-step-form_step"
              id="w-node-_519e01b2-fb00-8742-62e7-267425e97481-25e97453"
              tag="div"
              data-form="step"
            >
              <_Builtin.Block
                className="multi-step-form_content-left"
                id="w-node-_519e01b2-fb00-8742-62e7-267425e97482-25e97453"
                tag="div"
              >
                <_Builtin.Block className="multi-step-form_tag" tag="div">
                  {"project details"}
                </_Builtin.Block>
                <SpacerXxsmall />
                <_Builtin.Paragraph className="multi-step-form_heading">
                  {"Tell us about "}
                  <br />
                  {"the project"}
                </_Builtin.Paragraph>
                <SpacerMedium />
                <_Builtin.Paragraph>
                  {
                    "Tell us everything! Share your thoughts, ideas, and any specifics about your project. The more details, the better."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Block
                className="multi-step-form_form-content"
                tag="div"
              >
                <_Builtin.Block
                  className="form_field-wrapper"
                  id="w-node-_519e01b2-fb00-8742-62e7-267425e9748e-25e97453"
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className="form_label"
                    htmlFor="Message-3"
                  >
                    {"Tell us about what you need"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.FormTextarea
                    className="form_input is-text-area"
                    name="Message"
                    maxLength={5000}
                    data-name="Message"
                    placeholder="I want to create the best..."
                    required={false}
                    autoFocus={false}
                    id="Message-3"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="form_field-wrapper"
                  id="w-node-_519e01b2-fb00-8742-62e7-267425e97492-25e97453"
                  tag="div"
                >
                  <_Builtin.FormBlockLabel
                    className="form_label"
                    htmlFor="Timeline-2"
                  >
                    {"How soon do you need it?"}
                  </_Builtin.FormBlockLabel>
                  <_Builtin.DropdownWrapper
                    className="dropdown"
                    tag="div"
                    fsSelectcustomElement="dropdown"
                    fsSelectcustomHideinitial="true"
                    delay={0}
                    hover={false}
                  >
                    <_Builtin.DropdownToggle
                      className="form_dropdown-toggle"
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className="icon-embed-xsmall"
                        content=""
                        value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M12%202C6.486%202%202%206.486%202%2012C2%2017.514%206.486%2022%2012%2022C17.514%2022%2022%2017.514%2022%2012C22%206.486%2017.514%202%2012%202ZM12%2020C7.589%2020%204%2016.411%204%2012C4%207.589%207.589%204%2012%204C16.411%204%2020%207.589%2020%2012C20%2016.411%2016.411%2020%2012%2020Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M13%207H11V12.414L14.293%2015.707L15.707%2014.293L13%2011.586V7Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Icon
                        className="form_dropdown-icon"
                        widget={{
                          type: "icon",
                          icon: "dropdown-toggle",
                        }}
                      />
                      <_Builtin.Block
                        className="text-color-secondary text-weight-medium"
                        tag="div"
                        fsSelectcustomElement="label"
                      >
                        {"Dropdown"}
                      </_Builtin.Block>
                    </_Builtin.DropdownToggle>
                    <_Builtin.DropdownList
                      className="form_dropdown-list"
                      tag="nav"
                    >
                      <_Builtin.FormSelect
                        className="form_input is-select-input hide"
                        name="Timeline"
                        data-name="Timeline"
                        required={false}
                        multiple={false}
                        id="Timeline-3"
                        options={[
                          {
                            t: "Let's discuss",
                            v: "",
                          },
                          {
                            t: "4 - 8 Weeks",
                            v: "4 - 8 Weeks",
                          },
                          {
                            t: "2 - 4 Months ",
                            v: "2 - 4 Months ",
                          },
                          {
                            t: "4+ Months",
                            v: "4+ Months",
                          },
                          {
                            t: "ASAP! (For when you need it done yesterday)",
                            v: "ASAP! (For when you need it done yesterday)",
                          },
                        ]}
                      />
                      <_Builtin.Link
                        className="form_dropdown-link"
                        button={false}
                        block=""
                        options={{
                          href: "#",
                        }}
                      >
                        {"Text Link"}
                      </_Builtin.Link>
                      <_Builtin.Link
                        className="form_dropdown-link"
                        button={false}
                        fsSelectcustomElement="clear"
                        block="inline"
                        options={{
                          href: "#",
                        }}
                      >
                        <_Builtin.Block tag="div">
                          {"Clear selection"}
                        </_Builtin.Block>
                        <_Builtin.HtmlEmbed
                          className="icon-wrapper"
                          content=""
                          value="%3Csvg%20width%3D%2220%22%20height%3D%2214%22%20viewBox%3D%220%200%2020%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8%205.99974H5.101L5.102%205.99074C5.23257%205.35138%205.48813%204.74409%205.854%204.20374C6.39845%203.40156%207.16215%202.7729%208.054%202.39274C8.356%202.26474%208.671%202.16674%208.992%202.10174C9.65789%201.96674%2010.3441%201.96674%2011.01%202.10174C11.967%202.29784%2012.8451%202.77116%2013.535%203.46274L14.951%202.05074C14.3128%201.41238%2013.5578%200.902783%2012.727%200.549742C12.3033%200.370371%2011.8628%200.233695%2011.412%200.141742C10.4818%20-0.0472473%209.52316%20-0.0472473%208.593%200.141742C8.14185%200.234076%207.70101%200.371085%207.277%200.550742C6.02753%201.08084%204.95793%201.96083%204.197%203.08474C3.68489%203.84259%203.32676%204.69373%203.143%205.58974C3.115%205.72474%203.1%205.86274%203.08%205.99974H0L4%209.99974L8%205.99974ZM12%207.99974H14.899L14.898%208.00774C14.6367%209.2895%2013.8812%2010.4168%2012.795%2011.1457C12.2548%2011.5119%2011.6475%2011.7675%2011.008%2011.8977C10.3424%2012.0327%209.65656%2012.0327%208.991%2011.8977C8.35163%2011.7672%207.74435%2011.5116%207.204%2011.1457C6.93862%2010.9662%206.69085%2010.762%206.464%2010.5357L5.05%2011.9497C5.68851%2012.5879%206.44392%2013.0972%207.275%2013.4497C7.699%2013.6297%208.142%2013.7667%208.59%2013.8577C9.51982%2014.0468%2010.4782%2014.0468%2011.408%2013.8577C13.2005%2013.4857%2014.7773%2012.4292%2015.803%2010.9127C16.3146%2010.1555%2016.6724%209.30501%2016.856%208.40974C16.883%208.27474%2016.899%208.13674%2016.919%207.99974H20L16%203.99974L12%207.99974Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                      </_Builtin.Link>
                    </_Builtin.DropdownList>
                  </_Builtin.DropdownWrapper>
                </_Builtin.Block>
              </_Builtin.Block>
              <SocialList id="w-node-_00bc6d0b-db43-3a74-9565-f14d8d3100c2-25e97453" />
              <_Builtin.FormButton
                className="button-old is-small is-onboarding w-node-_3b6eeb0e-3233-ddbb-e2f7-41bc2efa975d-25e97453"
                id="free-quote-form"
                type="submit"
                value="Request a free quote"
                data-wait="Please wait..."
                data-form="submit-btn"
              />
            </_Builtin.Block>
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage className="form_message-success-wrapper">
            <_Builtin.Block
              className="form_message-success is-onboarding is-onboard"
              tag="div"
            >
              <_Builtin.Block tag="div">
                {"Thank you for contacting us!"}
              </_Builtin.Block>
              <SpacerXsmall />
              <_Builtin.Heading className="multi-step-form_heading" tag="h2">
                {"We will be in touch soon"}
              </_Builtin.Heading>
              <SpacerXsmall />
              <_Builtin.Paragraph className="text-color-secondary">
                {"Keep your eyes peeled for an email from one of our founders."}
              </_Builtin.Paragraph>
              <SpacerMedium />
              <_Builtin.Block
                className="button-old is-dashed is-clickable"
                tag="div"
              >
                <_Builtin.Block className="button-dash" tag="div">
                  <_Builtin.Block
                    data-w-id="519e01b2-fb00-8742-62e7-267425e974ed"
                    tag="div"
                  >
                    {"Okay, got it!"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage className="form_message-error-wrapper">
            <_Builtin.Block className="form_message-error is-light" tag="div">
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.FormErrorMessage>
        </_Builtin.FormWrapper>
        <_Builtin.NotSupported _atom="Animation" />
      </_Builtin.Block>
      <_Builtin.Block
        className="multi-step-form_background-overlay"
        data-w-id="519e01b2-fb00-8742-62e7-267425e974f4"
        tag="div"
      />
    </_Component>
  );
}
