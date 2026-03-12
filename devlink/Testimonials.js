"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { SpacerMedium } from "./SpacerMedium";
import { SpacerXxlarge } from "./SpacerXxlarge";
import { TestimonialCard } from "./TestimonialCard";
import { dynamoRichTextToRichTextChildren } from "./values/DynamoGateway/dynamoRichTextToRichTextChildren";
import { dynamoImageToImage } from "./values/DynamoGateway/dynamoImageToImage";
import { dynamoPlainTextToListOfElements } from "./values/DynamoGateway/dynamoPlainTextToListOfElements";

const _interactionsData = JSON.parse(
  '{"events":{"e-506":{"id":"e-506","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-163","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"34cc7c99-42ea-c17c-ea57-799f54c00a42","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"34cc7c99-42ea-c17c-ea57-799f54c00a42","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-163-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":true,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1753658764153}},"actionLists":{"a-163":{"id":"a-163","title":"CTA Testimonials Background [Transition]","continuousParameterGroups":[{"id":"a-163-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-163-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".section_cta","selectorGuids":["e57c583f-0dab-698b-5e1a-7eb02237e7f8"]},"globalSwatchId":"--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}},{"id":"a-163-n-3","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".section_testimonials","selectorGuids":["c135211c-9488-5d7c-e955-71b9b8e15def"]},"globalSwatchId":"--base-color-brand--white","rValue":255,"bValue":243,"gValue":249,"aValue":1}}]},{"keyframe":50,"actionItems":[{"id":"a-163-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".section_cta","selectorGuids":["e57c583f-0dab-698b-5e1a-7eb02237e7f8"]},"globalSwatchId":"--background-color--background-alternate","rValue":186,"bValue":230,"gValue":201,"aValue":1}},{"id":"a-163-n-4","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".section_testimonials","selectorGuids":["c135211c-9488-5d7c-e955-71b9b8e15def"]},"globalSwatchId":"--background-color--background-alternate","rValue":186,"bValue":230,"gValue":201,"aValue":1}}]}]}],"createdOn":1753658786036}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Testimonials({
  as: _Component = _Builtin.Block,
  variant = "Base",
  topSpacing = false,
  headingText = "People Like You Who Asked Themselves “What IF ?”",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Base: "",
    White: "w-variant-0046bd2e-15fd-604d-f028-ae229baf1ff9",
    Home: "w-variant-fcaae0ee-4934-4cac-91e3-93895dc9425c",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={`section_testimonials ${_activeStyleVariant}`}
      tag="section"
    >
      <_Builtin.HtmlEmbed
        className={`hide ${_activeStyleVariant}`}
        content=""
        value="%3C!--%20Swiper%20Init%20--%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fswiper%4011%2Fswiper-bundle.min.js%22%3E%3C%2Fscript%3E%0A%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A%2F%2Funpkg.com%2Fswiper%4011%2Fswiper-bundle.min.css%22%3E%0A%0A%3Cscript%3E%0A%20%20document.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%2F%2F%20Testimonial%20slider%20initialization%0A%20%20%20%20if%20(document.querySelector(%22%23testimonials-slider%22))%20%7B%0A%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20new%20Swiper(%22%23testimonials-slider%22%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20loop%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20slidesPerView%3A%201%2C%0A%20%20%20%20%20%20%20%20%20%20centeredSlides%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20spaceBetween%3A%208%2C%0A%20%20%20%20%20%20%20%20%20%20grabCursor%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20pagination%3A%20%7B%20el%3A%20%22.swiper-pagination%22%2C%20clickable%3A%20true%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20autoplay%3A%20%7B%20delay%3A%202200%2C%20disableOnInteraction%3A%20false%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20speed%3A%20600%2C%0A%20%20%20%20%20%20%20%20%20%20breakpoints%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20478%3A%20%7B%20slidesPerView%3A%202%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20991%3A%20%7B%20slidesPerView%3A%203%2C%20spaceBetween%3A%2016%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%201366%3A%20%7B%20slidesPerView%3A%203%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20a11y%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20slideRole%3A%20'listitem'%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%20catch%20(error)%20%7B%0A%20%20%20%20%20%20%20%20console.error(%22Failed%20to%20initialize%20Swiper%22%2C%20error)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
      />
      <_Builtin.Block
        className={`testimonials_component ${_activeStyleVariant}`}
        tag="div"
      >
        <_Builtin.Block
          className={`testimonials_heading-wrapper ${_activeStyleVariant}`}
          tag="div"
        >
          <_Builtin.Block
            className={`max-width-large ${_activeStyleVariant}`}
            tag="div"
          >
            {topSpacing ? (
              <_Builtin.Block
                className={`testimonials_top-spacer ${_activeStyleVariant}`}
                tag="div"
              />
            ) : null}
            <_Builtin.Block
              className={`testimonials_star-wrapper ${_activeStyleVariant}`}
              tag="div"
            >
              <_Builtin.HtmlEmbed
                className={`icon-embed-small ${_activeStyleVariant}`}
                content=""
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2034%2032%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M15.6543%201.2891C16.0423%20-0.0626469%2017.9577%20-0.0626488%2018.3457%201.28909L21.0186%2010.6029C21.1959%2011.2205%2021.7707%2011.6382%2022.4129%2011.6159L32.0968%2011.2799C33.5023%2011.2311%2034.0942%2013.0529%2032.9285%2013.8395L24.8965%2019.2598C24.3639%2019.6192%2024.1443%2020.295%2024.364%2020.8988L27.676%2030.005C28.1567%2031.3266%2026.6071%2032.4525%2025.4987%2031.5869L17.8617%2025.623C17.3553%2025.2276%2016.6447%2025.2276%2016.1383%2025.623L8.50131%2031.5869C7.39293%2032.4525%205.84326%2031.3266%206.32395%2030.005L9.63603%2020.8988C9.85565%2020.295%209.63607%2019.6192%209.10349%2019.2598L1.07148%2013.8395C-0.0942297%2013.0529%200.497689%2011.2311%201.90315%2011.2799L11.5871%2011.6159C12.2293%2011.6382%2012.8041%2011.2205%2012.9814%2010.6029L15.6543%201.2891Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.HtmlEmbed
                className={`icon-embed-small ${_activeStyleVariant}`}
                content=""
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2034%2032%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M15.6543%201.2891C16.0423%20-0.0626469%2017.9577%20-0.0626488%2018.3457%201.28909L21.0186%2010.6029C21.1959%2011.2205%2021.7707%2011.6382%2022.4129%2011.6159L32.0968%2011.2799C33.5023%2011.2311%2034.0942%2013.0529%2032.9285%2013.8395L24.8965%2019.2598C24.3639%2019.6192%2024.1443%2020.295%2024.364%2020.8988L27.676%2030.005C28.1567%2031.3266%2026.6071%2032.4525%2025.4987%2031.5869L17.8617%2025.623C17.3553%2025.2276%2016.6447%2025.2276%2016.1383%2025.623L8.50131%2031.5869C7.39293%2032.4525%205.84326%2031.3266%206.32395%2030.005L9.63603%2020.8988C9.85565%2020.295%209.63607%2019.6192%209.10349%2019.2598L1.07148%2013.8395C-0.0942297%2013.0529%200.497689%2011.2311%201.90315%2011.2799L11.5871%2011.6159C12.2293%2011.6382%2012.8041%2011.2205%2012.9814%2010.6029L15.6543%201.2891Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.HtmlEmbed
                className={`icon-embed-small ${_activeStyleVariant}`}
                content=""
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2034%2032%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M15.6543%201.2891C16.0423%20-0.0626469%2017.9577%20-0.0626488%2018.3457%201.28909L21.0186%2010.6029C21.1959%2011.2205%2021.7707%2011.6382%2022.4129%2011.6159L32.0968%2011.2799C33.5023%2011.2311%2034.0942%2013.0529%2032.9285%2013.8395L24.8965%2019.2598C24.3639%2019.6192%2024.1443%2020.295%2024.364%2020.8988L27.676%2030.005C28.1567%2031.3266%2026.6071%2032.4525%2025.4987%2031.5869L17.8617%2025.623C17.3553%2025.2276%2016.6447%2025.2276%2016.1383%2025.623L8.50131%2031.5869C7.39293%2032.4525%205.84326%2031.3266%206.32395%2030.005L9.63603%2020.8988C9.85565%2020.295%209.63607%2019.6192%209.10349%2019.2598L1.07148%2013.8395C-0.0942297%2013.0529%200.497689%2011.2311%201.90315%2011.2799L11.5871%2011.6159C12.2293%2011.6382%2012.8041%2011.2205%2012.9814%2010.6029L15.6543%201.2891Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.HtmlEmbed
                className={`icon-embed-small ${_activeStyleVariant}`}
                content=""
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2034%2032%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M15.6543%201.2891C16.0423%20-0.0626469%2017.9577%20-0.0626488%2018.3457%201.28909L21.0186%2010.6029C21.1959%2011.2205%2021.7707%2011.6382%2022.4129%2011.6159L32.0968%2011.2799C33.5023%2011.2311%2034.0942%2013.0529%2032.9285%2013.8395L24.8965%2019.2598C24.3639%2019.6192%2024.1443%2020.295%2024.364%2020.8988L27.676%2030.005C28.1567%2031.3266%2026.6071%2032.4525%2025.4987%2031.5869L17.8617%2025.623C17.3553%2025.2276%2016.6447%2025.2276%2016.1383%2025.623L8.50131%2031.5869C7.39293%2032.4525%205.84326%2031.3266%206.32395%2030.005L9.63603%2020.8988C9.85565%2020.295%209.63607%2019.6192%209.10349%2019.2598L1.07148%2013.8395C-0.0942297%2013.0529%200.497689%2011.2311%201.90315%2011.2799L11.5871%2011.6159C12.2293%2011.6382%2012.8041%2011.2205%2012.9814%2010.6029L15.6543%201.2891Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
              <_Builtin.HtmlEmbed
                className={`icon-embed-small ${_activeStyleVariant}`}
                content=""
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2034%2032%22%20fill%3D%22none%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20aria-hidden%3D%22true%22%20role%3D%22img%22%3E%0A%3Cpath%20d%3D%22M15.6543%201.2891C16.0423%20-0.0626469%2017.9577%20-0.0626488%2018.3457%201.28909L21.0186%2010.6029C21.1959%2011.2205%2021.7707%2011.6382%2022.4129%2011.6159L32.0968%2011.2799C33.5023%2011.2311%2034.0942%2013.0529%2032.9285%2013.8395L24.8965%2019.2598C24.3639%2019.6192%2024.1443%2020.295%2024.364%2020.8988L27.676%2030.005C28.1567%2031.3266%2026.6071%2032.4525%2025.4987%2031.5869L17.8617%2025.623C17.3553%2025.2276%2016.6447%2025.2276%2016.1383%2025.623L8.50131%2031.5869C7.39293%2032.4525%205.84326%2031.3266%206.32395%2030.005L9.63603%2020.8988C9.85565%2020.295%209.63607%2019.6192%209.10349%2019.2598L1.07148%2013.8395C-0.0942297%2013.0529%200.497689%2011.2311%201.90315%2011.2799L11.5871%2011.6159C12.2293%2011.6382%2012.8041%2011.2205%2012.9814%2010.6029L15.6543%201.2891Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
            <SpacerMedium />
            <_Builtin.Heading
              className={`text-align-center ${_activeStyleVariant}`}
              tag="h2"
              id="testimonial-heading"
            >
              {headingText}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
        <SpacerXxlarge />
        <_Builtin.NotSupported _atom="DynamoWrapper" />
        <_Builtin.Block
          className={`swiper-pagination ${_activeStyleVariant}`}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  );
}
