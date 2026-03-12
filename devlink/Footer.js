"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { SpacerMedium } from "./SpacerMedium";
import { Button } from "./Button";

const _interactionsData = JSON.parse(
  '{"events":{"e-446":{"id":"e-446","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-140","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6719702b25f42f173940b51d|7242c584-fde5-12de-8bc8-a18139583dd2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6719702b25f42f173940b51d|7242c584-fde5-12de-8bc8-a18139583dd2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-140-p","smoothing":50,"startsEntering":false,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1749091718943}},"actionLists":{"a-140":{"id":"a-140","title":"Home hero Logo [Colour Change]","continuousParameterGroups":[{"id":"a-140-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-140-n","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-3","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-background","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-4","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---button-border","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-5","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---button-text","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-9","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---button-background-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-10","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-text-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button-old.is-small.is-navbar","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27158","07815991-952a-8d98-0e00-e4c25af27167","85ece59c-fc6f-f49a-345a-9b3486342800"]},"value":0,"unit":""}},{"id":"a-140-n-16","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---home-logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}}]},{"keyframe":99,"actionItems":[{"id":"a-140-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button-old.is-small.is-navbar","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27158","07815991-952a-8d98-0e00-e4c25af27167","85ece59c-fc6f-f49a-345a-9b3486342800"]},"value":0,"unit":""}}]},{"keyframe":100,"actionItems":[{"id":"a-140-n-2","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-background","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-6","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-7","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---button-border","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-8","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---button-text","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-11","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":0,"green":83,"blue":255,"alpha":1},"target":{"objectId":"--_navbar---button-background-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-12","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"unit":"-","red":255,"green":249,"blue":243,"alpha":1},"target":{"objectId":"--_navbar---button-text-hover","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}},{"id":"a-140-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".button-old.is-small.is-navbar","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27158","07815991-952a-8d98-0e00-e4c25af27167","85ece59c-fc6f-f49a-345a-9b3486342800"]},"value":1,"unit":""}},{"id":"a-140-n-17","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{"red":15,"green":39,"blue":86,"alpha":1},"target":{"objectId":"--_navbar---home-logo-colour","useEventTarget":true,"id":"6719702b25f42f173940b51d|b655d593-7395-e808-95e2-b7c64f4b739f"}}}]}]}],"createdOn":1749091598251}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="footer_component" tag="footer">
      <_Builtin.HtmlEmbed
        className="hide"
        content=""
        value="%3Cscript%3E%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20if%20(window.matchMedia(%22(min-width%3A%20991px)%22).matches)%20%7B%0A%20%20%20%20%20%20const%20footerLoad%20%3D%20gsap.timeline(%7B%0A%20%20%20%20%20%20%20%20scrollTrigger%3A%20%7B%20trigger%3A%20%22.footer_component%22%2C%20start%3A%20%22-%3D400%20center%22%2C%20id%3A%20%22footerLoad%22%20%7D%2C%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20const%20footerSplit%20%3D%20new%20SplitText(%22.footer_top-wrapper%20%3E%20h2%22%2C%20%7B%0A%20%20%20%20%20%20%20%20type%3A%20%22lines%22%2C%0A%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20footerLoad.from(%0A%20%20%20%20%20%20%20%20footerSplit.lines%2C%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20scale%3A%200.8%2C%0A%20%20%20%20%20%20%20%20%20%20opacity%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20y%3A%20100%2C%0A%20%20%20%20%20%20%20%20%20%20stagger%3A%200.125%2C%0A%20%20%20%20%20%20%20%20%20%20ease%3A%20%22power3.out%22%2C%0A%20%20%20%20%20%20%20%20%20%20duration%3A%201%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%200%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20footerLoad.from(%0A%20%20%20%20%20%20%20%20%22.footer_top-wrapper%20%3E%20p%22%2C%0A%20%20%20%20%20%20%20%20%7B%20scale%3A%200.8%2C%20opacity%3A%200%2C%20y%3A%20100%2C%20ease%3A%20%22power3.out%22%2C%20duration%3A%201%20%7D%2C%0A%20%20%20%20%20%20%20%20%22%3C0.25%22%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20footerLoad.from(%0A%20%20%20%20%20%20%20%20%22.footer_form_component%22%2C%0A%20%20%20%20%20%20%20%20%7B%20scale%3A%200.8%2C%20opacity%3A%200%2C%20y%3A%20100%2C%20ease%3A%20%22power3.out%22%2C%20duration%3A%201%20%7D%2C%0A%20%20%20%20%20%20%20%20%22%3C0.125%22%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20footerLoad.from(%0A%20%20%20%20%20%20%20%20%22.footer_links-wrapper%20%3E%20a%22%2C%0A%20%20%20%20%20%20%20%20%7B%20opacity%3A%200%2C%20stagger%3A%200.125%2C%20ease%3A%20%22power4.out%22%2C%20duration%3A%200.5%20%7D%2C%0A%20%20%20%20%20%20%20%20%22%3C0.5%22%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%20%20footerLoad.from(%0A%20%20%20%20%20%20%20%20%22.footer_contact-wrapper%20%3E%20.footer_contact-item%22%2C%0A%20%20%20%20%20%20%20%20%7B%20y%3A%2050%2C%20opacity%3A%200%2C%20stagger%3A%200.125%2C%20ease%3A%20%22power4.out%22%2C%20duration%3A%201%20%7D%2C%0A%20%20%20%20%20%20%20%20%22%3C0.5%22%0A%20%20%20%20%20%20)%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
      />
      <_Builtin.Block className="padding-global" tag="div">
        <_Builtin.Block className="container-medium is-relative" tag="div">
          <_Builtin.NotSupported _atom="Animation" />
          <_Builtin.Block className="footer_top-wrapper" tag="div">
            <_Builtin.Heading
              id="w-node-_3c6f8965-ca7f-eb23-6132-3e8f0f101bfc-0f101bf7"
              tag="h2"
            >
              {"Download our 30 Day Digital Launch Toolkit"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className="text-color-primary-light text-weight-medium">
              {
                "The 30 Day Website Launch Toolkit makes sure you’ve got everything in place in 2025, so when people look you up, you look ready for business."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <SpacerMedium />
          <_Builtin.FormWrapper
            className="footer_form_component"
            id="footer-form"
          >
            <_Builtin.FormForm
              className="footer_form"
              name="wf-form-eBook-Footer-Form"
              data-name="eBook Footer Form"
              method="get"
              id="wf-form-eBook-Footer-Form"
            >
              <_Builtin.FormTextInput
                className="form_input is-footer"
                name="Footer-Email"
                maxLength={256}
                data-name="Footer Email"
                placeholder="Enter your Email"
                disabled={false}
                type="email"
                required={true}
                autoFocus={false}
                id="Footer-Email"
              />
              <_Builtin.FormButton
                className="button-old is-form-submit is-footer hide"
                id="w-node-_3c6f8965-ca7f-eb23-6132-3e8f0f101c06-0f101bf7"
                type="submit"
                value="Submit"
                data-wait="Please wait..."
                msCodeSubmitOld="2"
              />
              <Button
                attributeName="ms-code-submit-new"
                attributeVaue="2"
                text="Get your eBook"
                iconVisibility={true}
                variant="Icon"
                tag="button"
              />
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage className="form_message-success-wrapper">
              <_Builtin.Block className="form_message-success" tag="div">
                <_Builtin.Block tag="div">
                  {
                    "Thanks! Your eBook is on the way to the email you provided."
                  }
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage className="form_message-error-wrapper">
              <_Builtin.Block className="form_message-error" tag="div">
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
          <_Builtin.Block className="footer_links-wrapper" tag="div">
            <Button
              classProp="is-dark is-secondary"
              text="Home"
              tag="a"
              link="/"
            />
            <Button
              classProp="is-dark is-secondary"
              text="About Us"
              tag="a"
              link="/about"
            />
            <Button
              classProp="is-dark is-secondary"
              text="Contact Us"
              tag="a"
              link="/contact"
            />
            <Button
              classProp="is-dark is-secondary"
              text="Pricing"
              tag="a"
              link="/pricing"
            />
            <Button
              classProp="is-dark is-secondary"
              text="Our Work"
              tag="a"
              link="/case-studies"
            />
            <Button
              classProp="is-dark is-secondary"
              text="Resources"
              tag="a"
              link="/resources"
            />
            <Button
              classProp="is-dark is-secondary"
              text="Strategy"
              tag="a"
              link="/services/website-strategy"
            />
            <Button
              classProp="is-dark is-secondary"
              text="Web Design"
              tag="a"
              link="/services/web-design"
            />
            <Button
              classProp="is-dark is-secondary"
              text="Branding"
              tag="a"
              link="/services/digital-branding"
            />
            <Button
              classProp="is-dark is-secondary"
              text="Web Development"
              tag="a"
              link="/services/web-development"
            />
            <Button
              classProp="is-dark is-secondary"
              text="Webflow Development"
              tag="a"
              link="/services/webflow-development"
            />
            <Button
              classProp="is-dark is-secondary"
              text="New Business Package"
              tag="a"
              link="/website-package"
            />
            <Button
              classProp="is-dark is-secondary"
              text="Website Audit"
              tag="a"
              link="/website-audit"
            />
          </_Builtin.Block>
          <_Builtin.Block className="footer_bottom-wrapper" tag="div">
            <_Builtin.Block className="footer_contact-wrapper" tag="div">
              <_Builtin.Block
                className="footer_contact-item"
                id="w-node-_3c6f8965-ca7f-eb23-6132-3e8f0f101c26-0f101bf7"
                tag="div"
              >
                <_Builtin.Paragraph className="text-size-large text-weight-semibold text-color-primary-light">
                  {"Contact:"}
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className="footer_contact-link-wrapper"
                  tag="div"
                >
                  <_Builtin.Link
                    className="footer_contact-link"
                    button={false}
                    id="footer-phone-link"
                    block="inline"
                    options={{
                      href: "tel:02108396041",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-wrapper"
                      content=""
                      value="%3Csvg%20width%3D%2224%22%20height%3D%2225%22%20viewBox%3D%220%200%2024%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M17.7073%2013.1672C17.6145%2013.0743%2017.5043%2013.0005%2017.383%2012.9502C17.2617%2012.8999%2017.1317%2012.874%2017.0003%2012.874C16.869%2012.874%2016.739%2012.8999%2016.6176%2012.9502C16.4963%2013.0005%2016.3861%2013.0743%2016.2933%2013.1672L14.6993%2014.7612C13.9603%2014.5412%2012.5813%2014.0412%2011.7073%2013.1672C10.8333%2012.2932%2010.3333%2010.9142%2010.1133%2010.1752L11.7073%208.58122C11.8003%208.48844%2011.874%208.37823%2011.9243%208.25692C11.9746%208.1356%2012.0005%208.00556%2012.0005%207.87422C12.0005%207.74289%2011.9746%207.61285%2011.9243%207.49153C11.874%207.37022%2011.8003%207.26001%2011.7073%207.16722L7.70733%203.16722C7.61455%203.07428%207.50434%203.00054%207.38303%202.95023C7.26171%202.89992%207.13167%202.87402%207.00033%202.87402C6.869%202.87402%206.73896%202.89992%206.61764%202.95023C6.49633%203.00054%206.38612%203.07428%206.29333%203.16722L3.58133%205.87922C3.20133%206.25922%202.98733%206.78122%202.99533%207.31422C3.01833%208.73822%203.39533%2013.6842%207.29333%2017.5822C11.1913%2021.4802%2016.1373%2021.8562%2017.5623%2021.8802H17.5903C18.1183%2021.8802%2018.6173%2021.6722%2018.9953%2021.2942L21.7073%2018.5822C21.8003%2018.4894%2021.874%2018.3792%2021.9243%2018.2579C21.9746%2018.1366%2022.0005%2018.0066%2022.0005%2017.8752C22.0005%2017.7439%2021.9746%2017.6138%2021.9243%2017.4925C21.874%2017.3712%2021.8003%2017.261%2021.7073%2017.1682L17.7073%2013.1672ZM17.5803%2019.8792C16.3323%2019.8582%2012.0623%2019.5232%208.70733%2016.1672C5.34133%2012.8012%205.01533%208.51622%204.99533%207.29322L7.00033%205.28822L9.58633%207.87422L8.29333%209.16722C8.1758%209.28467%208.08938%209.42956%208.04189%209.58879C7.9944%209.74802%207.98733%209.91658%208.02133%2010.0792C8.04533%2010.1942%208.63233%2012.9212%2010.2923%2014.5812C11.9523%2016.2412%2014.6793%2016.8282%2014.7943%2016.8522C14.9569%2016.8872%2015.1256%2016.8807%2015.285%2016.8333C15.4444%2016.786%2015.5893%2016.6993%2015.7063%2016.5812L17.0003%2015.2882L19.5863%2017.8742L17.5803%2019.8792Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block className="text-weight-normal" tag="div">
                      {"0210 839 6041"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="footer_contact-link"
                    button={false}
                    id="footer-email-link"
                    block="inline"
                    options={{
                      href: "mailto:isaac@whatifweb.co.nz",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-wrapper"
                      content=""
                      value="%3Csvg%20width%3D%2224%22%20height%3D%2225%22%20viewBox%3D%220%200%2024%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M20%204.87402H4C2.897%204.87402%202%205.77102%202%206.87402V18.874C2%2019.977%202.897%2020.874%204%2020.874H20C21.103%2020.874%2022%2019.977%2022%2018.874V6.87402C22%205.77102%2021.103%204.87402%2020%204.87402ZM20%206.87402V7.38502L12%2013.608L4%207.38602V6.87402H20ZM4%2018.874V9.91802L11.386%2015.663C11.5611%2015.8006%2011.7773%2015.8753%2012%2015.8753C12.2227%2015.8753%2012.4389%2015.8006%2012.614%2015.663L20%209.91802L20.002%2018.874H4Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                    <_Builtin.Block className="text-weight-normal" tag="div">
                      {"Isaac@whatifweb.co.nz"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className="footer_contact-item"
                id="w-node-_3c6f8965-ca7f-eb23-6132-3e8f0f101c32-0f101bf7"
                tag="div"
              >
                <_Builtin.Paragraph className="text-size-large text-weight-semibold text-color-primary-light">
                  {"Address:"}
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className="footer_contact-link-wrapper"
                  tag="div"
                >
                  <_Builtin.Link
                    className="footer_contact-link"
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.google.com/maps/place/What+IF+Web/@-43.5367444,172.6498981,17z/data=!3m1!4b1!4m6!3m5!1s0x82403aca72ae1627:0xeca13453a78f49c8!8m2!3d-43.5367444!4d172.652473!16s%2Fg%2F11q409jm_w?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.Block className="text-weight-normal" tag="div">
                      {"16 / 400 St Asaph Street"}
                      <br />
                      {"Christchurch, New Zealand"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className="footer_contact-item"
                id="w-node-c781daae-be8e-7223-3dcd-09988dfb9fd1-0f101bf7"
                tag="div"
              >
                <_Builtin.Paragraph className="text-size-large text-weight-semibold text-color-primary-light">
                  {"Social:"}
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className="footer_contact-link-wrapper is-horizontal"
                  tag="div"
                >
                  <_Builtin.Link
                    className="footer_contact-link"
                    button={false}
                    ariaLabel="Linkedin profile"
                    block="inline"
                    options={{
                      href: "https://www.linkedin.com/company/what-if-web",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-wrapper"
                      content=""
                      value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.5%203.24268C3.67157%203.24268%203%203.91425%203%204.74268V19.7427C3%2020.5711%203.67157%2021.2427%204.5%2021.2427H19.5C20.3284%2021.2427%2021%2020.5711%2021%2019.7427V4.74268C21%203.91425%2020.3284%203.24268%2019.5%203.24268H4.5ZM8.52076%207.2454C8.52639%208.20165%207.81061%208.79087%206.96123%208.78665C6.16107%208.78243%205.46357%208.1454%205.46779%207.24681C5.47201%206.40165%206.13998%205.72243%207.00764%205.74212C7.88795%205.76181%208.52639%206.40728%208.52076%207.2454ZM12.2797%2010.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217%2017.9847%2012.4214%2017.6047%2012.4211%2017.2246C12.4203%2016.2108%2012.4194%2015.1959%2012.4246%2014.1824C12.426%2013.9363%2012.4372%2013.6804%2012.5005%2013.4455C12.7381%2012.568%2013.5271%2012.0013%2014.4074%2012.1406C14.9727%2012.2291%2015.3467%2012.5568%2015.5042%2013.0898C15.6013%2013.423%2015.6449%2013.7816%2015.6491%2014.129C15.6605%2015.1766%2015.6589%2016.2242%2015.6573%2017.2719C15.6567%2017.6417%2015.6561%2018.0117%2015.6561%2018.3815V18.5629H18.328V18.3576C18.328%2017.9056%2018.3278%2017.4537%2018.3275%2017.0018C18.327%2015.8723%2018.3264%2014.7428%2018.3294%2013.6129C18.3308%2013.1024%2018.276%2012.599%2018.1508%2012.1054C17.9638%2011.3713%2017.5771%2010.7638%2016.9485%2010.3251C16.5027%2010.0129%2016.0133%209.81178%2015.4663%209.78928C15.404%209.78669%2015.3412%209.7833%2015.2781%209.77989C14.9984%209.76477%2014.7141%209.74941%2014.4467%209.80334C13.6817%209.95662%2013.0096%2010.3068%2012.5019%2010.9241C12.4429%2010.9949%2012.3852%2011.0668%2012.2991%2011.1741L12.2797%2011.1984V10.0044ZM5.68164%2018.5671H8.33242V10.01H5.68164V18.5671Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="footer_contact-link"
                    button={false}
                    aria-label="Instagram profile"
                    block="inline"
                    options={{
                      href: "https://www.instagram.com/whatifwebdesign/",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-wrapper"
                      content=""
                      value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16%203.24268H8C5.23858%203.24268%203%205.48126%203%208.24268V16.2427C3%2019.0041%205.23858%2021.2427%208%2021.2427H16C18.7614%2021.2427%2021%2019.0041%2021%2016.2427V8.24268C21%205.48126%2018.7614%203.24268%2016%203.24268ZM19.25%2016.2427C19.2445%2018.0353%2017.7926%2019.4872%2016%2019.4927H8C6.20735%2019.4872%204.75549%2018.0353%204.75%2016.2427V8.24268C4.75549%206.45003%206.20735%204.99817%208%204.99268H16C17.7926%204.99817%2019.2445%206.45003%2019.25%208.24268V16.2427ZM16.75%208.49268C17.3023%208.49268%2017.75%208.04496%2017.75%207.49268C17.75%206.9404%2017.3023%206.49268%2016.75%206.49268C16.1977%206.49268%2015.75%206.9404%2015.75%207.49268C15.75%208.04496%2016.1977%208.49268%2016.75%208.49268ZM12%207.74268C9.51472%207.74268%207.5%209.7574%207.5%2012.2427C7.5%2014.728%209.51472%2016.7427%2012%2016.7427C14.4853%2016.7427%2016.5%2014.728%2016.5%2012.2427C16.5027%2011.0484%2016.0294%209.90225%2015.1849%209.05776C14.3404%208.21327%2013.1943%207.74002%2012%207.74268ZM9.25%2012.2427C9.25%2013.7615%2010.4812%2014.9927%2012%2014.9927C13.5188%2014.9927%2014.75%2013.7615%2014.75%2012.2427C14.75%2010.7239%2013.5188%209.49268%2012%209.49268C10.4812%209.49268%209.25%2010.7239%209.25%2012.2427Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className="footer_contact-link"
                    button={false}
                    aria-label="Facebook profile"
                    block="inline"
                    options={{
                      href: "https://www.facebook.com/whatifwebdesign",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className="icon-wrapper"
                      content=""
                      value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22%2012.3038C22%206.74719%2017.5229%202.24268%2012%202.24268C6.47715%202.24268%202%206.74719%202%2012.3038C2%2017.3255%205.65684%2021.4879%2010.4375%2022.2427V15.2121H7.89844V12.3038H10.4375V10.0872C10.4375%207.56564%2011.9305%206.1728%2014.2146%206.1728C15.3088%206.1728%2016.4531%206.36931%2016.4531%206.36931V8.84529H15.1922C13.95%208.84529%2013.5625%209.6209%2013.5625%2010.4166V12.3038H16.3359L15.8926%2015.2121H13.5625V22.2427C18.3432%2021.4879%2022%2017.3257%2022%2012.3038Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.NotSupported _atom="Animation" />
            <_Builtin.Block
              className="footer_accolades-wrapper"
              id="w-node-_6389b3ea-0a82-710b-7b52-c125f605efb1-0f101bf7"
              tag="div"
            >
              <_Builtin.Paragraph className="text-size-large text-weight-semibold text-color-primary-light">
                {"Our Awards and Certificates"}
              </_Builtin.Paragraph>
              <_Builtin.Link
                button={false}
                aria-label="Web Excellence Awards"
                block="inline"
                options={{
                  href: "https://we-awards.com/winner/what-if-web/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className="footer_accolade is-web-excellence"
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Web Excellence Awards logo"
                  src="https://cdn.prod.website-files.com/6719702b25f42f173940b521/682d55dcce5a4dfd6e900924_wea-wiw.svg"
                />
              </_Builtin.Link>
              <_Builtin.Block
                className="footer_accolades"
                id="w-node-_89abec33-3a21-1161-f193-689b5de98329-0f101bf7"
                tag="div"
              >
                <_Builtin.Link
                  className="footer_accolade-item"
                  button={false}
                  block="inline"
                  options={{
                    href: "https://finsweet.com/client-first/certification/certified-experts/cf-00384",
                    target: "_blank",
                  }}
                >
                  <_Builtin.Image
                    className="footer_accolade"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Client First Agency Badge"
                    src="https://cdn.prod.website-files.com/6719702b25f42f173940b521/68251a44625ffb85f54b5397_client-first-agency-badge.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className="footer_accolade-item"
                  button={false}
                  block="inline"
                  options={{
                    href: "https://contra.com/whatifweb/work",
                    target: "_blank",
                  }}
                >
                  <_Builtin.Image
                    className="footer_accolade"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Relume Experts Badge"
                    src="https://cdn.prod.website-files.com/6719702b25f42f173940b521/68251b41a91c142005ff56e8_relume-experts-badge.svg"
                  />
                </_Builtin.Link>
                <_Builtin.Link
                  className="footer_accolade-item"
                  button={false}
                  block="inline"
                  options={{
                    href: "https://webflow.com/@what-if-web",
                    target: "_blank",
                  }}
                >
                  <_Builtin.Image
                    className="footer_accolade"
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Webflow Premium Partner Badge"
                    src="https://cdn.prod.website-files.com/6719702b25f42f173940b521/68251aa1428b2a6d2d0beedf_webflow-premium-partner-badge.svg"
                  />
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="footer_legals-wrapper"
              id="w-node-bbf20708-b678-8631-fa35-7de8a44c5ad4-0f101bf7"
              tag="div"
            >
              <_Builtin.HtmlEmbed
                content=""
                value="%3Cdiv%3E%0A%20%20%26copy%3B%20What%20IF%20Web%0A%20%20%3Cscript%3E%0A%20%20%20%20document.write(new%20Date().getFullYear())%3B%0A%20%20%3C%2Fscript%3E.%20%0A%20%20All%20Rights%20Reserved.%0A%3C%2Fdiv%3E"
              />
              <_Builtin.Link
                className="footer_legal-text"
                button={false}
                block=""
                options={{
                  href: "/legal/privacy-policy",
                }}
              >
                {"Privacy Policy"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
