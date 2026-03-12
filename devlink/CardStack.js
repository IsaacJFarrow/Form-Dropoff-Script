"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-146":{"id":"e-146","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-62","affectedElements":{},"duration":0}},"mediaQueries":["main"],"target":{"id":"26098fda-820f-abaf-231e-299a3a4a276a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26098fda-820f-abaf-231e-299a3a4a276a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-62-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1690982554510},"e-170":{"id":"e-170","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-171"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"26098fda-820f-abaf-231e-299a3a4a273f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"26098fda-820f-abaf-231e-299a3a4a273f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1737669835895},"e-546":{"id":"e-546","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-62","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"58834355-1b2c-bdae-0658-0d77bc7c4481","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"58834355-1b2c-bdae-0658-0d77bc7c4481","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-62-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1770244403916},"e-547":{"id":"e-547","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-548"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"58834355-1b2c-bdae-0658-0d77bc7c4456","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"58834355-1b2c-bdae-0658-0d77bc7c4456","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1770250795601}},"actionLists":{"a-62":{"id":"a-62","title":"How it Work Card [Scroll] [Desktop]","continuousParameterGroups":[{"id":"a-62-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-62-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".card-stack_card.card-1","selectorGuids":["3a01a215-beda-c441-b57b-efbd3efb37ff","3a01a215-beda-c441-b57b-efbd3efb380f"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-62-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".card-stack_card.card-1","selectorGuids":["3a01a215-beda-c441-b57b-efbd3efb37ff","3a01a215-beda-c441-b57b-efbd3efb380f"]},"xValue":0,"yValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":22,"actionItems":[{"id":"a-62-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".card-stack_card.card-1","selectorGuids":["3a01a215-beda-c441-b57b-efbd3efb37ff","3a01a215-beda-c441-b57b-efbd3efb380f"]},"zValue":-30,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-62-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".card-stack_card.card-2","selectorGuids":["3a01a215-beda-c441-b57b-efbd3efb37ff","3a01a215-beda-c441-b57b-efbd3efb380c"]},"zValue":3,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-62-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".card-stack_card.card-1","selectorGuids":["3a01a215-beda-c441-b57b-efbd3efb37ff","3a01a215-beda-c441-b57b-efbd3efb380f"]},"xValue":-10,"yValue":-100,"xUnit":"vw","yUnit":"vh","zUnit":"PX"}},{"id":"a-62-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".card-stack_card.card-2","selectorGuids":["3a01a215-beda-c441-b57b-efbd3efb37ff","3a01a215-beda-c441-b57b-efbd3efb380c"]},"xValue":0,"yValue":0,"zValue":null,"xUnit":"vw","yUnit":"vh","zUnit":"px"}}]},{"keyframe":44,"actionItems":[{"id":"a-62-n-7","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".card-stack_card.card-2","selectorGuids":["3a01a215-beda-c441-b57b-efbd3efb37ff","3a01a215-beda-c441-b57b-efbd3efb380c"]},"zValue":-30,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-62-n-8","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".card-stack_card.card-2","selectorGuids":["3a01a215-beda-c441-b57b-efbd3efb37ff","3a01a215-beda-c441-b57b-efbd3efb380c"]},"xValue":-10,"yValue":-100,"zValue":null,"xUnit":"vw","yUnit":"vh","zUnit":"vh"}},{"id":"a-62-n-9","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".card-stack_card.card-3","selectorGuids":["3a01a215-beda-c441-b57b-efbd3efb37ff","3a01a215-beda-c441-b57b-efbd3efb380d"]},"zValue":6,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-62-n-10","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".card-stack_card.card-3","selectorGuids":["3a01a215-beda-c441-b57b-efbd3efb37ff","3a01a215-beda-c441-b57b-efbd3efb380d"]},"xValue":0,"yValue":0,"xUnit":"vw","yUnit":"vh","zUnit":"PX"}}]},{"keyframe":66,"actionItems":[{"id":"a-62-n-11","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".card-stack_card.card-3","selectorGuids":["3a01a215-beda-c441-b57b-efbd3efb37ff","3a01a215-beda-c441-b57b-efbd3efb380d"]},"xValue":-10,"yValue":-100,"xUnit":"vw","yUnit":"vh","zUnit":"PX"}},{"id":"a-62-n-12","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".card-stack_card.card-3","selectorGuids":["3a01a215-beda-c441-b57b-efbd3efb37ff","3a01a215-beda-c441-b57b-efbd3efb380d"]},"zValue":-30,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}]}],"createdOn":1690982559519},"a-67":{"id":"a-67","title":"How it works [Load in]","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-style-h2","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27142"]},"yValue":2,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-67-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card-stack_paragraph-wrapper","selectorGuids":["cdea23ad-526c-4ec5-ea82-af5bfb42fdc2"]},"value":0,"unit":""}},{"id":"a-67-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".heading-style-h2","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27142"]},"value":0,"unit":""}},{"id":"a-67-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".card-stack_paragraph-wrapper","selectorGuids":["cdea23ad-526c-4ec5-ea82-af5bfb42fdc2"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]},{"actionItems":[{"id":"a-67-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".card-stack_paragraph-wrapper","selectorGuids":["cdea23ad-526c-4ec5-ea82-af5bfb42fdc2"]},"value":1,"unit":""}},{"id":"a-67-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".card-stack_paragraph-wrapper","selectorGuids":["cdea23ad-526c-4ec5-ea82-af5bfb42fdc2"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-67-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".heading-style-h2","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27142"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-67-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":1000,"target":{"useEventTarget":"CHILDREN","selector":".heading-style-h2","selectorGuids":["07815991-952a-8d98-0e00-e4c25af27142"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1737669839945}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CardStack({
  as: _Component = _Builtin.Block,
  heading = "How it Works",
  subheading = (
    <>
      {
        "Four easy steps, making it effortless to uncover actionable insights about your website. "
      }
      <br />
    </>
  ),
  card1Heading = "Share Your Website",
  card1Paragraph = "Fill out the form, link us your website, and hit submit. We’ll send you a quick email to confirm we’re on it.",
  card2Heading = "We Get to Work",
  card2Paragraph = "Give us 2-3 work days to plan and record your personalised audit. Sit back while we do the heavy lifting.",
  card3Heading = "Watch and Learn",
  card3Paragraph = "Get a detailed screen recording of your site, breaking down what’s working, what’s not, and exactly where you can improve",
  card4Heading = "Take the Next Step (Or Not!)",
  card4Paragraph = "Use the insights however you like, whether you tackle it yourself, work with your agency, or let us help you make it happen.",
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="section_card-stack" tag="section">
      <_Builtin.Block className="padding-global" tag="div">
        <_Builtin.Block className="container-large" tag="div">
          <_Builtin.Block className="card-stack_component" tag="div">
            <_Builtin.Block className="card-stack_content" tag="div">
              <_Builtin.Block
                className="card-stack_content-left"
                data-w-id="58834355-1b2c-bdae-0658-0d77bc7c4456"
                tag="div"
              >
                <_Builtin.Block
                  className="margin-bottom margin-medium"
                  tag="div"
                >
                  <_Builtin.Heading className="heading-style-h2" tag="h2">
                    {heading}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Block
                  className="card-stack_paragraph-wrapper"
                  tag="div"
                >
                  <_Builtin.Paragraph className="text-size-large text-color-primary-light">
                    {subheading}
                  </_Builtin.Paragraph>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className="card-stack_content-right"
                id="w-node-_58834355-1b2c-bdae-0658-0d77bc7c4460-bc7c4451"
                tag="div"
              >
                <_Builtin.Block className="card-stack_card card-1" tag="div">
                  <_Builtin.Block className="card-stack_icon-wrapper" tag="div">
                    <_Builtin.HtmlEmbed
                      className="card-stack_icon"
                      content=""
                      value="%3Csvg%20width%3D%2248%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M40%208H12C9.794%208%208%209.794%208%2012V22H12V16L24.8%2025.6C25.1463%2025.8593%2025.5673%2025.9995%2026%2025.9995C26.4327%2025.9995%2026.8537%2025.8593%2027.2%2025.6L40%2016V34H24V38H40C42.206%2038%2044%2036.206%2044%2034V12C44%209.794%2042.206%208%2040%208ZM26%2021.5L13.332%2012H38.668L26%2021.5Z%22%20fill%3D%22%23EB5B30%22%2F%3E%0A%3Cpath%20d%3D%22M4%2024H18V28H4V24ZM8%2030H20V34H8V30ZM14%2036H22V40H14V36Z%22%20fill%3D%22%23EB5B30%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="card-stack_card-content" tag="div">
                    <_Builtin.Heading tag="h3">{card1Heading}</_Builtin.Heading>
                    <_Builtin.Paragraph>{card1Paragraph}</_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="card-stack_card card-2" tag="div">
                  <_Builtin.Block className="card-stack_icon-wrapper" tag="div">
                    <_Builtin.HtmlEmbed
                      className="card-stack_icon"
                      content=""
                      value="%3Csvg%20width%3D%2248%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M24%204C12.972%204%204%2012.972%204%2024C4%2035.028%2012.972%2044%2024%2044C35.028%2044%2044%2035.028%2044%2024C44%2012.972%2035.028%204%2024%204ZM24%2040C15.178%2040%208%2032.822%208%2024C8%2015.178%2015.178%208%2024%208C32.822%208%2040%2015.178%2040%2024C40%2032.822%2032.822%2040%2024%2040Z%22%20fill%3D%22%23EB5B30%22%2F%3E%0A%3Cpath%20d%3D%22M26%2014H22V26H34V22H26V14Z%22%20fill%3D%22%23EB5B30%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="card-stack_card-content" tag="div">
                    <_Builtin.Heading tag="h3">{card2Heading}</_Builtin.Heading>
                    <_Builtin.Paragraph>{card2Paragraph}</_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="card-stack_card card-3" tag="div">
                  <_Builtin.Block className="card-stack_icon-wrapper" tag="div">
                    <_Builtin.HtmlEmbed
                      className="card-stack_icon"
                      content=""
                      value="%3Csvg%20width%3D%2248%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M43.1859%2014.406C42.9581%2013.5608%2042.5129%2012.79%2041.8947%2012.1704C41.2764%2011.5507%2040.5066%2011.1037%2039.6619%2010.874C36.5299%2010.014%2023.9999%2010%2023.9999%2010C23.9999%2010%2011.4719%209.98601%208.33793%2010.808C7.49378%2011.0483%206.72557%2011.5016%206.10706%2012.1243C5.48855%2012.747%205.0405%2013.5183%204.80593%2014.364C3.97993%2017.496%203.97193%2023.992%203.97193%2023.992C3.97193%2023.992%203.96393%2030.52%204.78393%2033.62C5.24393%2035.334%206.59393%2036.688%208.30993%2037.15C11.4739%2038.01%2023.9699%2038.024%2023.9699%2038.024C23.9699%2038.024%2036.4999%2038.038%2039.6319%2037.218C40.4769%2036.9887%2041.2474%2036.5428%2041.8672%2035.9244C42.487%2035.306%2042.9347%2034.5365%2043.1659%2033.692C43.9939%2030.562%2043.9999%2024.068%2043.9999%2024.068C43.9999%2024.068%2044.0399%2017.538%2043.1859%2014.406ZM19.9919%2030.01L20.0019%2018.01L30.4159%2024.02L19.9919%2030.01Z%22%20fill%3D%22%23EB5B30%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="card-stack_card-content" tag="div">
                    <_Builtin.Heading tag="h3">{card3Heading}</_Builtin.Heading>
                    <_Builtin.Paragraph>{card3Paragraph}</_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block className="card-stack_card card-4" tag="div">
                  <_Builtin.Block className="card-stack_icon-wrapper" tag="div">
                    <_Builtin.HtmlEmbed
                      className="card-stack_icon"
                      content=""
                      value="%3Csvg%20width%3D%2251%22%20height%3D%2252%22%20viewBox%3D%220%200%2051%2052%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M21.8095%2022.6236L29.4387%2030.978L41.3582%2020.0929L45.7317%2024.882L46.2755%2012.8943L34.2878%2012.3506L38.6613%2017.1397L29.695%2025.3278L22.0658%2016.9735L5.96911%2031.6731L8.66605%2034.6264L21.8095%2022.6236Z%22%20fill%3D%22%23EB5B30%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block className="card-stack_card-content" tag="div">
                    <_Builtin.Heading tag="h3">{card4Heading}</_Builtin.Heading>
                    <_Builtin.Paragraph>{card4Paragraph}</_Builtin.Paragraph>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className="card-stack_ix-trigger"
              data-w-id="58834355-1b2c-bdae-0658-0d77bc7c4481"
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
