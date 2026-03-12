"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Button } from "./Button";

const _interactionsData = JSON.parse(
  '{"events":{"e-79":{"id":"e-79","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-80"}},"mediaQueries":["main"],"target":{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734484081985},"e-80":{"id":"e-80","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-79"}},"mediaQueries":["main"],"target":{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1734484081986},"e-104":{"id":"e-104","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-71","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-105"}},"mediaQueries":["main"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650e3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650e3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1736718773518},"e-105":{"id":"e-105","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-72","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-104"}},"mediaQueries":["main"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650e3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650e3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1736718773518},"e-110":{"id":"e-110","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-111"}},"mediaQueries":["main"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be6508f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be6508f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1736993397348},"e-111":{"id":"e-111","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-110"}},"mediaQueries":["main"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be6508f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be6508f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1736993397348},"e-112":{"id":"e-112","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be6512a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be6512a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1736993409252},"e-113":{"id":"e-113","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-112"}},"mediaQueries":["main"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be6512a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be6512a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1736993409252},"e-170":{"id":"e-170","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-171"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"26098fda-820f-abaf-231e-299a3a4a273f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26098fda-820f-abaf-231e-299a3a4a273f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1737669835895},"e-172":{"id":"e-172","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-68","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-173"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"f5281bca-efa6-2c17-a9ff-0531516d8217","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"f5281bca-efa6-2c17-a9ff-0531516d8217","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":9,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1737669927229},"e-397":{"id":"e-397","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-79","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-398"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650b2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650b2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746146068386},"e-398":{"id":"e-398","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-80","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-397"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650b2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650b2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746146068387},"e-403":{"id":"e-403","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-79","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-404"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747092873461},"e-404":{"id":"e-404","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-80","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-403"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650b3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650b3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747092873462},"e-405":{"id":"e-405","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-130","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-406"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be6507e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be6507e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747963362785},"e-407":{"id":"e-407","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-131","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-408"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be65081","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe35a73-fa43-3834-b9e4-fa8a2be65081","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747963613673},"e-507":{"id":"e-507","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-28","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-508"}},"mediaQueries":["main"],"target":{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759980473854},"e-508":{"id":"e-508","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-507"}},"mediaQueries":["main"],"target":{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"45741d23-3cc7-9514-9a7c-69402729c12e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759980473855},"e-547":{"id":"e-547","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-548"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"58834355-1b2c-bdae-0658-0d77bc7c4456","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"58834355-1b2c-bdae-0658-0d77bc7c4456","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1770250795601}},"actionLists":{"a-28":{"id":"a-28","title":"Button Primary [Hover In]","actionItemGroups":[{"actionItems":[{"id":"a-28-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-28-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-1x1-small","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270ec"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-28-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-28-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"xValue":1,"yValue":1,"locked":true}}]},{"actionItems":[{"id":"a-28-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"yValue":-4.5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-28-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-1x1-small","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270ec"]},"xValue":1.5,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-28-n-6","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f"},"xValue":0.95,"yValue":0.95,"locked":true}},{"id":"a-28-n-4","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"xValue":1.5,"yValue":1.5,"locked":true}}]}],"useFirstGroupAsInitialState":true,"createdOn":1734484085862},"a-29":{"id":"a-29","title":"Button Primary [Hover Out]","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"yValue":0,"xUnit":"PX","yUnit":"%","zUnit":"PX"}},{"id":"a-29-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-1x1-small","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270ec"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-29-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuart","duration":350,"target":{"useEventTarget":true,"id":"ac08d54f-bc77-b233-cd16-f11e6337a87f"},"xValue":1,"yValue":1,"locked":true}},{"id":"a-29-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outBack","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-background","selectorGuids":["a3e9514e-b3d4-befc-ee85-4ed621fff5e0"]},"xValue":1,"yValue":1,"locked":true}}]}],"useFirstGroupAsInitialState":false,"createdOn":1734484085862},"a-71":{"id":"a-71","title":"Pricing Card Centre [Open]","actionItemGroups":[{"actionItems":[{"id":"a-71-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".pricing_card-bottom","selectorGuids":["5ba1ce77-8955-5477-2457-0e37eeb2c90b"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-71-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".pricing_item","selectorGuids":["2af4755f-1eff-e040-06c3-3d6a12248a43"]},"globalSwatchId":"--base-color-brand--green","rValue":149,"bValue":159,"gValue":249,"aValue":1}},{"id":"a-71-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".pricing_card-top","selectorGuids":["101cf103-d36c-9cdd-5af8-a47de21687e5"]},"globalSwatchId":"--base-color-brand--green","rValue":149,"bValue":159,"gValue":249,"aValue":1}},{"id":"a-71-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650e3"},"globalSwatchId":"--base-color-brand--green","rValue":149,"bValue":159,"gValue":249,"aValue":1}},{"id":"a-71-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{},"globalSwatchId":"--base-color-brand--green","rValue":149,"bValue":159,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-71-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuart","duration":750,"target":{"useEventTarget":"CHILDREN","selector":".pricing_card-bottom","selectorGuids":["5ba1ce77-8955-5477-2457-0e37eeb2c90b"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1736718778457},"a-72":{"id":"a-72","title":"Pricing Card Centre [Close]","actionItemGroups":[{"actionItems":[{"id":"a-72-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".pricing_card-bottom","selectorGuids":["5ba1ce77-8955-5477-2457-0e37eeb2c90b"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1736718778457},"a-37":{"id":"a-37","title":"Pricing Card [Open]","actionItemGroups":[{"actionItems":[{"id":"a-37-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".pricing_card-bottom","selectorGuids":["5ba1ce77-8955-5477-2457-0e37eeb2c90b"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-37-n-10","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".pricing_item","selectorGuids":["2af4755f-1eff-e040-06c3-3d6a12248a43"]},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}},{"id":"a-37-n-9","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".pricing_card-top","selectorGuids":["101cf103-d36c-9cdd-5af8-a47de21687e5"]},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}},{"id":"a-37-n-8","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650e3"},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}}]},{"actionItems":[{"id":"a-37-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuart","duration":750,"target":{"useEventTarget":"CHILDREN","selector":".pricing_card-bottom","selectorGuids":["5ba1ce77-8955-5477-2457-0e37eeb2c90b"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-37-n-19","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".pricing_card.is-centre","selectorGuids":["b5c28a55-3536-183a-dadc-953a68d13a35","df15c64c-b3ee-cfc8-b559-0203ac4f03f1"]},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}},{"id":"a-37-n-18","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":250,"target":{"selector":".pricing_card-top.is-centre","selectorGuids":["101cf103-d36c-9cdd-5af8-a47de21687e5","8b57a4e3-718b-c951-9631-e6e2ca170eae"]},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}},{"id":"a-37-n-17","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":250,"target":{},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}},{"id":"a-37-n-16","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".pricing_card.is-centre","selectorGuids":["b5c28a55-3536-183a-dadc-953a68d13a35","df15c64c-b3ee-cfc8-b559-0203ac4f03f1"]},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}},{"id":"a-37-n-11","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".pricing_item","selectorGuids":["2af4755f-1eff-e040-06c3-3d6a12248a43"]},"globalSwatchId":"--base-color-brand--green","rValue":149,"bValue":159,"gValue":249,"aValue":1}},{"id":"a-37-n-13","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":true,"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650e3"},"globalSwatchId":"--base-color-brand--green","rValue":149,"bValue":159,"gValue":249,"aValue":1}},{"id":"a-37-n-12","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".pricing_card-top","selectorGuids":["101cf103-d36c-9cdd-5af8-a47de21687e5"]},"globalSwatchId":"--base-color-brand--green","rValue":149,"bValue":159,"gValue":249,"aValue":1}},{"id":"a-37-n-24","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":250,"target":{"selector":".divider.is-centre","selectorGuids":["96c62fd9-13f7-ff26-9b77-04df32166f8a","4eeb93ee-3a9f-0790-c8f9-5704c593266e"]},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1736718778457},"a-42":{"id":"a-42","title":"Pricing Card [Close]","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".pricing_card-bottom","selectorGuids":["5ba1ce77-8955-5477-2457-0e37eeb2c90b"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-42-n-9","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".pricing_card.is-centre","selectorGuids":["b5c28a55-3536-183a-dadc-953a68d13a35","df15c64c-b3ee-cfc8-b559-0203ac4f03f1"]},"globalSwatchId":"--base-color-brand--green","rValue":149,"bValue":159,"gValue":249,"aValue":1}},{"id":"a-42-n-8","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":250,"target":{"selector":".pricing_card-top.is-centre","selectorGuids":["101cf103-d36c-9cdd-5af8-a47de21687e5","8b57a4e3-718b-c951-9631-e6e2ca170eae"]},"globalSwatchId":"--base-color-brand--green","rValue":149,"bValue":159,"gValue":249,"aValue":1}},{"id":"a-42-n-7","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"SIBLINGS","selector":".pricing_card.is-centre","selectorGuids":["b5c28a55-3536-183a-dadc-953a68d13a35","df15c64c-b3ee-cfc8-b559-0203ac4f03f1"]},"globalSwatchId":"--base-color-brand--green","rValue":149,"bValue":159,"gValue":249,"aValue":1}},{"id":"a-42-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".pricing_item","selectorGuids":["2af4755f-1eff-e040-06c3-3d6a12248a43"]},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}},{"id":"a-42-n-3","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".pricing_card-top","selectorGuids":["101cf103-d36c-9cdd-5af8-a47de21687e5"]},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}},{"id":"a-42-n-4","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":true,"id":"dbe35a73-fa43-3834-b9e4-fa8a2be650e3"},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}},{"id":"a-42-n-5","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"ease","duration":250,"target":{},"globalSwatchId":"--base-color-brand--green","rValue":149,"bValue":159,"gValue":249,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1736718778457},"a-67":{"id":"a-67","title":"How it works [Load in]","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-style-h2","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27142"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-67-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card-stack_paragraph-wrapper","selectorGuids":["cdea23ad-526c-4ec5-ea82-af5bfb42fdc2"]},"value":0,"unit":""}},{"id":"a-67-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-style-h2","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27142"]},"value":0,"unit":""}},{"id":"a-67-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card-stack_paragraph-wrapper","selectorGuids":["cdea23ad-526c-4ec5-ea82-af5bfb42fdc2"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-67-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".card-stack_paragraph-wrapper","selectorGuids":["cdea23ad-526c-4ec5-ea82-af5bfb42fdc2"]},"value":1,"unit":""}},{"id":"a-67-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".card-stack_paragraph-wrapper","selectorGuids":["cdea23ad-526c-4ec5-ea82-af5bfb42fdc2"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-67-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".heading-style-h2","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27142"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-67-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".heading-style-h2","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27142"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737669839945},"a-68":{"id":"a-68","title":"What to Expect [Load In]","actionItemGroups":[{"actionItems":[{"id":"a-68-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"value":0,"unit":""}},{"id":"a-68-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"value":0,"unit":""}},{"id":"a-68-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"value":0,"unit":""}},{"id":"a-68-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"value":0,"unit":""}},{"id":"a-68-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-68-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"value":1,"unit":""}},{"id":"a-68-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-weight-semibold.text-color-orange","selectorGuids":["07815991-952a-8d98-0e00-e4c25af270f5","f9391184-ff3c-383e-284b-3f09a7890a15"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-14","actionTypeId":"TRANSFORM_MOVE","config":{"delay":100,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":100,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_heading","selectorGuids":["d8d543eb-cef4-40e4-11ee-579e18a8a03e"]},"value":1,"unit":""}},{"id":"a-68-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":300,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":300,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".points_list-wrapper","selectorGuids":["6fb04225-ccfa-6e62-ceed-9438b5df3a5e"]},"value":1,"unit":""}},{"id":"a-68-n-12","actionTypeId":"TRANSFORM_MOVE","config":{"delay":400,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-68-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".text-size-medium.text-weight-medium.text-color-primary-light","selectorGuids":["07815991-952a-8d98-0e00-e4c25af2715c","afbb2dff-21c4-bc48-833d-98501a3565fc","f796b52c-6845-6cb1-d35b-84778b8ef4b8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737670691540},"a-79":{"id":"a-79","title":"Pricing Card [Toggle]","actionItemGroups":[{"actionItems":[{"id":"a-79-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price.is-default","selectorGuids":["f2011a2c-99c9-b1ae-072e-3bc97d22036a","3979af03-3c4d-a5ad-1032-088c84def925"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-79-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price.is-retainer","selectorGuids":["f2011a2c-99c9-b1ae-072e-3bc97d22036a","098025ec-cec4-85b3-b0f3-163f9cfd4981"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-79-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".pricing_price.is-retainer","selectorGuids":["f2011a2c-99c9-b1ae-072e-3bc97d22036a","098025ec-cec4-85b3-b0f3-163f9cfd4981"]},"yValue":-5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-79-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":200,"target":{"selector":".pricing_price.is-default","selectorGuids":["f2011a2c-99c9-b1ae-072e-3bc97d22036a","3979af03-3c4d-a5ad-1032-088c84def925"]},"yValue":-5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-79-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price.is-default","selectorGuids":["f2011a2c-99c9-b1ae-072e-3bc97d22036a","3979af03-3c4d-a5ad-1032-088c84def925"]},"yValue":5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1739226873662},"a-80":{"id":"a-80","title":"Pricing Card [Toggle Off]","actionItemGroups":[{"actionItems":[{"id":"a-80-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price.is-default","selectorGuids":["f2011a2c-99c9-b1ae-072e-3bc97d22036a","3979af03-3c4d-a5ad-1032-088c84def925"]},"yValue":5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-80-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price.is-retainer","selectorGuids":["f2011a2c-99c9-b1ae-072e-3bc97d22036a","098025ec-cec4-85b3-b0f3-163f9cfd4981"]},"yValue":-5,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-80-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outBack","duration":200,"target":{"selector":".pricing_price.is-retainer","selectorGuids":["f2011a2c-99c9-b1ae-072e-3bc97d22036a","098025ec-cec4-85b3-b0f3-163f9cfd4981"]},"yValue":-10,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-80-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outBack","duration":200,"target":{"selector":".pricing_price.is-default","selectorGuids":["f2011a2c-99c9-b1ae-072e-3bc97d22036a","3979af03-3c4d-a5ad-1032-088c84def925"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-80-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price.is-retainer","selectorGuids":["f2011a2c-99c9-b1ae-072e-3bc97d22036a","098025ec-cec4-85b3-b0f3-163f9cfd4981"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1739226873662},"a-130":{"id":"a-130","title":"Currency NZD [Toggle]","actionItemGroups":[{"actionItems":[{"id":"a-130-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price-wrapper.is-usd","selectorGuids":["e36d732e-3df2-6473-01f8-163844c77050","9f5008dd-66ce-2ae6-794b-2cb09e75b727"]},"value":"none"}},{"id":"a-130-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-size-tiny.text-color-secondary-light.is-usd","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27118","d570b2de-9ada-15dc-cb9a-4f49c9588db3","e7490f12-92d8-2d7b-c57c-ede4d82f7952"]},"value":"none"}},{"id":"a-130-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price-wrapper.is-nzd","selectorGuids":["e36d732e-3df2-6473-01f8-163844c77050","03486887-de8e-7a77-2197-a26c6456cbc8"]},"value":"flex"}},{"id":"a-130-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-size-tiny.text-color-secondary-light.is-nzd","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27118","d570b2de-9ada-15dc-cb9a-4f49c9588db3","4619035f-fd1e-ea55-aec6-6440fa4ad1ad"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1747963400698},"a-131":{"id":"a-131","title":"Currency USD [Toggle]","actionItemGroups":[{"actionItems":[{"id":"a-131-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price-wrapper.is-nzd","selectorGuids":["e36d732e-3df2-6473-01f8-163844c77050","03486887-de8e-7a77-2197-a26c6456cbc8"]},"value":"none"}},{"id":"a-131-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-size-tiny.text-color-secondary-light.is-nzd","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27118","d570b2de-9ada-15dc-cb9a-4f49c9588db3","4619035f-fd1e-ea55-aec6-6440fa4ad1ad"]},"value":"none"}},{"id":"a-131-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".pricing_price-wrapper.is-usd","selectorGuids":["e36d732e-3df2-6473-01f8-163844c77050","9f5008dd-66ce-2ae6-794b-2cb09e75b727"]},"value":"flex"}},{"id":"a-131-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".text-size-tiny.text-color-secondary-light.is-usd","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27118","d570b2de-9ada-15dc-cb9a-4f49c9588db3","e7490f12-92d8-2d7b-c57c-ede4d82f7952"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1747963400698}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Pricing({
  as: _Component = _Builtin.Block,
  headingTag = "h1",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="section_pricing" tag="section">
      <_Builtin.Block
        className="padding-global padding-section-small z-index-2"
        tag="div"
      >
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="pricing_component" tag="div">
            <_Builtin.Block
              className="pricing_content-top"
              id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be6507b-2be65077"
              tag="div"
            >
              <_Builtin.Block className="pricing_currency-wrapper" tag="div">
                <_Builtin.Block className="pricing_currency-toggle" tag="div">
                  <_Builtin.Block
                    className="pricing_currency-toggle-button is-active"
                    data-w-id="dbe35a73-fa43-3834-b9e4-fa8a2be6507e"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">{"NZD"}</_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className="pricing_currency-toggle-button"
                    data-w-id="dbe35a73-fa43-3834-b9e4-fa8a2be65081"
                    tag="div"
                  >
                    <_Builtin.Block tag="div">{"USD"}</_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Paragraph className="text-size-tiny text-color-secondary-light is-nzd">
                  {"NZD prices have been applied"}
                </_Builtin.Paragraph>
                <_Builtin.Paragraph className="text-size-tiny text-color-secondary-light is-usd">
                  {"USD prices have been applied"}
                </_Builtin.Paragraph>
              </_Builtin.Block>
              <_Builtin.Heading className="heading-style-h2" tag={headingTag}>
                {"Transparent Pricing"}
              </_Builtin.Heading>
              <_Builtin.Block className="pricing_paragraph-wrapper" tag="div">
                <_Builtin.Paragraph className="text-size-medium text-color-primary-light">
                  {
                    "We understand the confusion - every agency quotes varying numbers. That's why we've crafted this straightforward rubric to demystify the costs."
                  }
                </_Builtin.Paragraph>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="pricing_content-placeholder"
              id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be6508d-2be65077"
              tag="div"
            >
              <_Builtin.Block
                className="pricing_content-bottom"
                id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be6508e-2be65077"
                tag="div"
              >
                <_Builtin.Block
                  className="pricing_card is-left"
                  id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be6508f-2be65077"
                  data-w-id="dbe35a73-fa43-3834-b9e4-fa8a2be6508f"
                  tag="div"
                >
                  <_Builtin.Block className="pricing_card-top" tag="div">
                    <_Builtin.Heading
                      className="text-size-large text-weight-normal text-generalsans"
                      tag="h2"
                    >
                      {"OnDemand Contract"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className="pricing_price-wrapper is-nzd"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="pricing_price is-dollar-sign"
                        tag="div"
                      >
                        {"$"}
                      </_Builtin.Block>
                      <_Builtin.Block className="pricing_price-mask" tag="div">
                        <_Builtin.Block
                          className="pricing_price is-default"
                          tag="div"
                        >
                          {"150"}
                          <_Builtin.Span className="pricing_per-hour">
                            {"p/h"}
                          </_Builtin.Span>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="pricing_price is-retainer"
                          tag="div"
                        >
                          {"120"}
                          <_Builtin.Span className="pricing_per-hour">
                            {"p/h"}
                          </_Builtin.Span>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="pricing_price-wrapper is-usd"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="pricing_price is-dollar-sign"
                        tag="div"
                      >
                        {"$"}
                      </_Builtin.Block>
                      <_Builtin.Block className="pricing_price-mask" tag="div">
                        <_Builtin.Block
                          className="pricing_price is-default"
                          tag="div"
                        >
                          {"88"}
                          <_Builtin.Span className="pricing_per-hour">
                            {"p/h"}
                          </_Builtin.Span>
                        </_Builtin.Block>
                        <_Builtin.Block
                          className="pricing_price is-retainer"
                          tag="div"
                        >
                          {"70"}
                          <_Builtin.Span className="pricing_per-hour">
                            {"p/h"}
                          </_Builtin.Span>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Paragraph className="text-color-primary-light text-weight-medium">
                      {"Flexible support, when you need it."}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block className="divider" tag="div" />
                  <_Builtin.Block className="pricing_toggle-wrapper" tag="div">
                    <_Builtin.FormWrapper className="pricing_toggle-form">
                      <_Builtin.FormForm
                        name="email-form-2"
                        data-name="Email Form 2"
                        method="get"
                        id="email-form-2"
                      >
                        <_Builtin.FormCheckboxWrapper className="toggle-field">
                          <_Builtin.FormCheckboxInput
                            className="toggle"
                            data-w-id="dbe35a73-fa43-3834-b9e4-fa8a2be650b2"
                            type="checkbox"
                            required={true}
                            checked={false}
                            form={{
                              type: "checkbox-input",
                              name: "",
                            }}
                            inputType="custom"
                            customClassName="w-checkbox-input--inputType-custom"
                          />
                          <_Builtin.FormInlineLabel
                            className="toggle-label"
                            data-w-id="dbe35a73-fa43-3834-b9e4-fa8a2be650b3"
                          >
                            {"Save 20% with a retainer"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormCheckboxWrapper>
                      </_Builtin.FormForm>
                      <_Builtin.FormSuccessMessage>
                        <_Builtin.Block tag="div">
                          {"Thank you! Your submission has been received!"}
                        </_Builtin.Block>
                      </_Builtin.FormSuccessMessage>
                      <_Builtin.FormErrorMessage>
                        <_Builtin.Block tag="div">
                          {
                            "Oops! Something went wrong while submitting the form."
                          }
                        </_Builtin.Block>
                      </_Builtin.FormErrorMessage>
                    </_Builtin.FormWrapper>
                  </_Builtin.Block>
                  <_Builtin.Block className="pricing_card-bottom" tag="div">
                    <_Builtin.List
                      className="pricing_list"
                      tag="ol"
                      unstyled={true}
                    >
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be650bd-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>
                            {"Website Strategy"}
                          </_Builtin.Strong>
                          {" for optimal performance and conversions"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be650c3-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>{"Website Design"}</_Builtin.Strong>
                          {" that resonates with your brand and audience"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be650c9-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>
                            {"Webflow Development "}
                          </_Builtin.Strong>
                          {"for crafting websites with ease"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be650cf-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>
                            {"Custom Development & Automations"}
                          </_Builtin.Strong>
                          {" for unique solutions to meet your business needs"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be650d5-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>
                            {"Website Maintenance"}
                          </_Builtin.Strong>
                          {" ensuring your website always performs"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be650db-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>{"Consulting "}</_Builtin.Strong>
                          {"to ensure you are kept in the loop"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                    </_Builtin.List>
                  </_Builtin.Block>
                  <Button
                    classProp="is-dark is-book-call"
                    text="Book a call"
                    tag="button"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="pricing_card is-centre"
                  id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be650e3-2be65077"
                  data-w-id="dbe35a73-fa43-3834-b9e4-fa8a2be650e3"
                  tag="div"
                >
                  <_Builtin.Block
                    className="pricing_card-top is-centre"
                    tag="div"
                  >
                    <_Builtin.Heading
                      className="text-size-large text-weight-normal text-generalsans"
                      tag="h2"
                    >
                      {"Basic Websites"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className="pricing_price-wrapper is-nzd"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="pricing_price is-dollar-sign"
                        tag="div"
                      >
                        {"$"}
                      </_Builtin.Block>
                      <_Builtin.Block className="pricing_price" tag="div">
                        {"4000"}
                        <_Builtin.Span className="pricing_plus-sign">
                          {"+ "}
                        </_Builtin.Span>
                      </_Builtin.Block>
                      <_Builtin.Block className="pricing_price is-pp" tag="div">
                        {"Per project"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="pricing_price-wrapper is-usd"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="pricing_price is-dollar-sign"
                        tag="div"
                      >
                        {"$"}
                      </_Builtin.Block>
                      <_Builtin.Block className="pricing_price" tag="div">
                        {"2850"}
                        <_Builtin.Span className="pricing_plus-sign">
                          {"+ "}
                        </_Builtin.Span>
                      </_Builtin.Block>
                      <_Builtin.Block className="pricing_price is-pp" tag="div">
                        {"Per project"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Paragraph className="text-color-primary-light text-weight-medium">
                      {"Tailored sites for small teams with big ambition."}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block className="divider is-centre" tag="div" />
                  <_Builtin.Block className="pricing_card-bottom" tag="div">
                    <_Builtin.List
                      className="pricing_list"
                      tag="ol"
                      unstyled={true}
                    >
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be650fe-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>
                            {"Website Strategy"}
                          </_Builtin.Strong>
                          {" for optimal performance and conversions"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be65104-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>{"Website Design"}</_Builtin.Strong>
                          {" that resonates with your brand and audience"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be6510a-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>
                            {"Webflow Development "}
                          </_Builtin.Strong>
                          {"for crafting websites with ease"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-e0b85bcb-43d0-eef7-3beb-675b5f8487e7-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>{"4-10 "}</_Builtin.Strong>
                          {"pages"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be65110-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>{"SEO "}</_Builtin.Strong>
                          {"making sure your audience finds you online"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be65116-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>
                            {"Custom Development & Automations"}
                          </_Builtin.Strong>
                          {" for unique solutions to meet your business needs"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be6511c-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>
                            {"Website Maintenance"}
                          </_Builtin.Strong>
                          {" ensuring your website always performs"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be65122-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>{"Consulting "}</_Builtin.Strong>
                          {"to ensure you are kept in the loop"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                    </_Builtin.List>
                  </_Builtin.Block>
                  <Button
                    classProp="is-dark is-form-link"
                    text="Get a quote"
                    tag="button"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="pricing_card is-right"
                  id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be6512a-2be65077"
                  data-w-id="dbe35a73-fa43-3834-b9e4-fa8a2be6512a"
                  tag="div"
                >
                  <_Builtin.Block className="pricing_card-top" tag="div">
                    <_Builtin.Heading
                      className="text-size-large text-weight-normal text-generalsans"
                      tag="h2"
                    >
                      {"Large Scale Websites"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className="pricing_price-wrapper is-nzd"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="pricing_price is-dollar-sign"
                        tag="div"
                      >
                        {"$"}
                      </_Builtin.Block>
                      <_Builtin.Block className="pricing_price" tag="div">
                        {"25k"}
                        <_Builtin.Span className="pricing_plus-sign">
                          {"+"}
                        </_Builtin.Span>
                      </_Builtin.Block>
                      <_Builtin.Block className="pricing_price is-pp" tag="div">
                        {"Per project"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className="pricing_price-wrapper is-usd"
                      tag="div"
                    >
                      <_Builtin.Block
                        className="pricing_price is-dollar-sign"
                        tag="div"
                      >
                        {"$"}
                      </_Builtin.Block>
                      <_Builtin.Block className="pricing_price" tag="div">
                        {"15K"}
                        <_Builtin.Span className="pricing_plus-sign">
                          {"+"}
                        </_Builtin.Span>
                      </_Builtin.Block>
                      <_Builtin.Block className="pricing_price is-pp" tag="div">
                        {"Per project"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Paragraph className="text-color-primary-light text-weight-medium">
                      {"Custom builds for complex needs."}
                    </_Builtin.Paragraph>
                  </_Builtin.Block>
                  <_Builtin.Block className="divider" tag="div" />
                  <_Builtin.Block className="pricing_card-bottom" tag="div">
                    <_Builtin.List
                      className="pricing_list"
                      tag="ol"
                      unstyled={true}
                    >
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be65145-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>
                            {"Everything in Basic"}
                          </_Builtin.Strong>
                          {" dialed up"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be6514b-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>{"Custom Features"}</_Builtin.Strong>
                          {" tailored to your business"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-_7bb4e7f0-f263-0c3d-b5a9-6b5b6a1f1ac4-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>{"10+"}</_Builtin.Strong>
                          {" pages"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be65151-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>
                            {"Advanced functionality"}
                          </_Builtin.Strong>
                          {" including memberships, portals, and more"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be65157-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>
                            {"Hosting + Server Management"}
                          </_Builtin.Strong>
                          {" so you can focus on what matters"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                      <_Builtin.ListItem
                        className="pricing_item"
                        id="w-node-dbe35a73-fa43-3834-b9e4-fa8a2be6515d-2be65077"
                      >
                        <_Builtin.HtmlEmbed
                          className="icon-1x1-small"
                          content=""
                          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2014%2010%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M13.2943%201.49946L5.60304%209.66187C5.53495%209.73476%205.43937%209.77871%205.33753%209.78405C5.23569%209.78939%205.13604%209.75567%205.06071%209.69029L0.737361%205.97131C0.661467%205.90662%200.61591%205.81546%200.610806%205.71808C0.605706%205.62077%200.641484%205.52534%200.710198%205.453L1.21811%204.91397C1.2862%204.84116%201.38178%204.79713%201.48362%204.79179C1.58545%204.78646%201.68511%204.82025%201.76044%204.88555L5.23355%207.87316L12.1629%200.519292C12.3067%200.371365%2012.5468%200.358779%2012.7053%200.490869L13.2671%200.981154C13.343%201.0459%2013.3886%201.13706%2013.3937%201.23439C13.3988%201.33171%2013.363%201.42713%2013.2943%201.49946Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                        />
                        <_Builtin.Block tag="div">
                          <_Builtin.Strong>
                            {"Digital Branding"}
                          </_Builtin.Strong>
                          {" to craft the perfect user experience"}
                        </_Builtin.Block>
                      </_Builtin.ListItem>
                    </_Builtin.List>
                  </_Builtin.Block>
                  <Button
                    classProp="is-dark is-book-call"
                    text="Book a call"
                    tag="button"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className="pricing_overlay" tag="div" />
    </_Component>
  );
}
