"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { SpacerXlarge } from "./SpacerXlarge";

const _interactionsData = JSON.parse(
  '{"events":{"e-446":{"id":"e-446","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-140","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6719702b25f42f173940b51d|7242c584-fde5-12de-8bc8-a18139583dd2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6719702b25f42f173940b51d|7242c584-fde5-12de-8bc8-a18139583dd2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-140-p","smoothing":50,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1749091718943},"e-463":{"id":"e-463","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-146","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-464"}},"mediaQueries":["main"],"target":{"id":"34cc7c99-42ea-c17c-ea57-799f54c00a36","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34cc7c99-42ea-c17c-ea57-799f54c00a36","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1749686165766},"e-506":{"id":"e-506","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-163","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"34cc7c99-42ea-c17c-ea57-799f54c00a42","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34cc7c99-42ea-c17c-ea57-799f54c00a42","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-163-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":true,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1753658764153}},"actionLists":{"a-140":{"id":"a-140","title":"Home hero Logo [Colour Change]","continuousParameterGroups":[{"id":"a-140-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-140-n","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-3","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-background","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-4","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---button-border","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-5","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---button-text","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-9","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---button-background-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-10","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-text-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button-old.is-small.is-navbar","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27158","07815991-952a-8d98-0e00-e4c25af27167","85ece59c-fc6f-f49a-345a-9b3486342800"]},"value":0,"unit":""}},{"id":"a-140-n-16","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---home-logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}}]},{"keyframe":99,"actionItems":[{"id":"a-140-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button-old.is-small.is-navbar","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27158","07815991-952a-8d98-0e00-e4c25af27167","85ece59c-fc6f-f49a-345a-9b3486342800"]},"value":0,"unit":""}}]},{"keyframe":100,"actionItems":[{"id":"a-140-n-2","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-background","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-6","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-7","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---button-border","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-8","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---button-text","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-11","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---button-background-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-12","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-text-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button-old.is-small.is-navbar","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27158","07815991-952a-8d98-0e00-e4c25af27167","85ece59c-fc6f-f49a-345a-9b3486342800"]},"value":1,"unit":""}},{"id":"a-140-n-17","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---home-logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}}]}]}],"createdOn":1749091598251},"a-146":{"id":"a-146","title":"CTA Form [Height]","actionItemGroups":[{"actionItems":[{"id":"a-146-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".cta_component","selectorGuids":["73e17a60-4e2a-fbba-7866-56db424965fd"]},"heightValue":400,"widthUnit":"PX","heightUnit":"dvh","locked":false}},{"id":"a-146-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".section_cta","selectorGuids":["e57c583f-0dab-698b-5e1a-7eb02237e7f8"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}}]},{"actionItems":[{"id":"a-146-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".cta_component","selectorGuids":["73e17a60-4e2a-fbba-7866-56db424965fd"]},"heightValue":120,"widthUnit":"PX","heightUnit":"dvh","locked":false}},{"id":"a-146-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".section_cta","selectorGuids":["e57c583f-0dab-698b-5e1a-7eb02237e7f8"]},"heightValue":120,"widthUnit":"PX","heightUnit":"dvh","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1749686168119},"a-163":{"id":"a-163","title":"CTA Testimonials Background [Transition]","continuousParameterGroups":[{"id":"a-163-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-163-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".section_cta","selectorGuids":["e57c583f-0dab-698b-5e1a-7eb02237e7f8"]},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}},{"id":"a-163-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".section_testimonials","selectorGuids":["c135211c-9488-5d7c-e955-71b9b8e15def"]},"globalSwatchId":"--base-color-brand--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}}]},{"keyframe":50,"actionItems":[{"id":"a-163-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".section_cta","selectorGuids":["e57c583f-0dab-698b-5e1a-7eb02237e7f8"]},"globalSwatchId":"--background-color--background-alternate","rValue":186,"bValue":230,"gValue":201,"aValue":1}},{"id":"a-163-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".section_testimonials","selectorGuids":["c135211c-9488-5d7c-e955-71b9b8e15def"]},"globalSwatchId":"--background-color--background-alternate","rValue":186,"bValue":230,"gValue":201,"aValue":1}}]}]}],"createdOn":1753658786036}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function OldCtaSection({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="section_cta" tag="section" id="cta-section">
      <_Builtin.Block className="padding-global" tag="div">
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="cta_component" tag="div">
            <_Builtin.FormWrapper className="cta_form-block" id="email-form">
              <_Builtin.FormForm
                className="cta_form"
                name="wf-form-CTA-Free-Work-Form"
                data-name="CTA Free Work Form"
                method="get"
                fsFormsubmitElement="form"
                id="wf-form-CTA-Free-Work-Form"
              >
                <_Builtin.Block className="cta_graphic hide" tag="div">
                  <_Builtin.Block className="cta_graphic-content" tag="div">
                    <_Builtin.Image
                      className="cta_pattern"
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://cdn.prod.website-files.com/6719702b25f42f173940b521/6747c70c6763c41e452ee2c6_dots-background.svg"
                    />
                    <_Builtin.NotSupported _atom="Animation" />
                  </_Builtin.Block>
                  <_Builtin.Image
                    className="icon-1x1-huge is-cta-icon"
                    width="auto"
                    height="auto"
                    loading="lazy"
                    id="cta-star-1"
                    alt="Star icon"
                    src="https://cdn.prod.website-files.com/6719702b25f42f173940b521/6747cb5a24751b6b825ff36d_Soft%20Star.svg"
                  />
                  <_Builtin.Image
                    className="icon-1x1-medium is-cta-icon"
                    width="auto"
                    height="auto"
                    loading="lazy"
                    id="cta-star-2"
                    alt=""
                    src="https://cdn.prod.website-files.com/6719702b25f42f173940b521/6747cc5fd437d0fdbb48956e_Soft%20Star%20Small.svg"
                  />
                </_Builtin.Block>
                <_Builtin.Block className="cta_heading-wrapper" tag="div">
                  <_Builtin.Heading
                    className="cta_heading"
                    tag="h2"
                    id="cta-form-heading"
                  >
                    <_Builtin.Span className="cta_heading-span is-1">
                      {"Did "}
                      <_Builtin.Strong className="cta_burst-wrapper">
                        {"Someone"}
                      </_Builtin.Strong>
                    </_Builtin.Span>
                    {""}
                    <_Builtin.Span className="cta_heading-span is-2">
                      {"Say "}
                      <_Builtin.Strong
                        className="text-color-orange"
                        id="cta-form-orange"
                      >
                        {"Free Audit?"}
                      </_Builtin.Strong>
                    </_Builtin.Span>
                  </_Builtin.Heading>
                  <_Builtin.HtmlEmbed
                    className="cta_burst-lines"
                    content=""
                    value="%3Csvg%20width%3D%22141%22%20height%3D%22113%22%20viewBox%3D%220%200%20141%20113%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M7.1055%2048.6394C5.14541%2044.6488%203.38408%2040.607%201.80664%2036.4565%22%20stroke%3D%22%230F2756%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M27.9356%2048.9303C31.6131%2033.2648%2034.823%2017.6076%2037.1269%201.60013%22%20stroke%3D%22%230F2756%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M51.6856%2055.809C66.9524%2043.2059%2082.3059%2030.7751%2096.7653%2017.2762%22%20stroke%3D%22%230F2756%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M63.5664%2077.9678C88.8152%2078.3032%20114.069%2078.5225%20139.323%2078.6533%22%20stroke%3D%22%230F2756%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M62.1855%2097.8091C69.4278%20102.088%2076.6108%20106.437%2083.7864%20110.812%22%20stroke%3D%22%230F2756%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E"
                  />
                </_Builtin.Block>
                <_Builtin.Block className="cta_form_input-wrapper" tag="div">
                  <_Builtin.FormTextInput
                    className="form_input is-cta"
                    name="Email-Address"
                    maxLength={256}
                    data-name="Email Address"
                    placeholder="Send us your email"
                    disabled={false}
                    type="email"
                    required={true}
                    autoFocus={false}
                    id="Email-Address"
                  />
                  <_Builtin.FormButton
                    className="button-old is-cta-form-submit"
                    type="submit"
                    value="Submit"
                    data-wait="Please wait"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className="max-width-medium align-center"
                  tag="div"
                >
                  <_Builtin.Paragraph
                    className="text-align-center text-color-primary"
                    id="cta-form-bottom"
                  >
                    {
                      "Curious how your site stacks up? Claim your free website audit – a no-fluff, actionable doc highlighting what’s working, what’s not, and where you’ve got room to grow. "
                    }
                    <_Builtin.Link
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Learn more about our audit here."}
                    </_Builtin.Link>
                  </_Builtin.Paragraph>
                </_Builtin.Block>
                <_Builtin.Block
                  className="cta_form-trigger"
                  data-w-id="34cc7c99-42ea-c17c-ea57-799f54c00a36"
                  tag="div"
                  fsFormsubmitElement="ix-trigger"
                />
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage className="cta_form-success">
                <_Builtin.Heading className="cta_heading" tag="h2">
                  {"We've received your "}
                  <_Builtin.Span className="text-color-orange">
                    {"request"}
                  </_Builtin.Span>
                </_Builtin.Heading>
                <SpacerXlarge />
                <_Builtin.Paragraph className="cta_subheading">
                  {
                    "Keep an eye on your inbox, we’ll be in touch to organise your free work soon!"
                  }
                </_Builtin.Paragraph>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage className="form_message-error is-light">
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className="cta_transition"
        data-w-id="34cc7c99-42ea-c17c-ea57-799f54c00a42"
        tag="div"
      />
    </_Component>
  );
}
