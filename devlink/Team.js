"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { dynamoPlainTextToText } from "./values/DynamoGateway/dynamoPlainTextToText";
import { dynamoImageToImage } from "./values/DynamoGateway/dynamoImageToImage";
import { dynamoPlainTextToListOfElements } from "./values/DynamoGateway/dynamoPlainTextToListOfElements";

export function Team({
  as: _Component = _Builtin.Block,
  heading = "Meet Our ",
}) {
  return (
    <_Component
      className="section_team"
      tag="section"
      data-momentum-hover-init=""
    >
      <_Builtin.Block
        className="padding-global padding-section-xlarge"
        tag="div"
      >
        <_Builtin.Block className="container-medium" tag="div">
          <_Builtin.Block className="team_component" tag="div">
            <_Builtin.Block className="team_content-top" tag="div">
              <_Builtin.Heading className="team_heading" tag="h2">
                {heading}
              </_Builtin.Heading>
            </_Builtin.Block>
            <_Builtin.NotSupported _atom="DynamoWrapper" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className="hide"
        content=""
        value="%3Cscript%3E%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20()%20%3D%3E%20%7B%0A%20%20if%20(window.matchMedia(%22(min-width%3A%20991px)%22).matches)%20%7B%0A%20%20%20%20function%20initMomentumBasedHover()%20%7B%0A%0A%20%20%20%20%20%20%2F%2F%20If%20this%20device%20can%E2%80%99t%20hover%20with%20a%20fine%20pointer%2C%20stop%20here%0A%20%20%20%20%20%20if%20(!window.matchMedia(%22(hover%3A%20hover)%20and%20(pointer%3A%20fine)%22).matches)%20%7Breturn%3B%7D%0A%0A%20%20%20%20%20%20%2F%2F%20Configuration%20(tweak%20these%20for%20feel)%0A%20%20%20%20%20%20const%20xyMultiplier%20%20%20%20%20%20%20%3D%2030%3B%20%20%2F%2F%20multiplies%20pointer%20velocity%20for%20x%2Fy%20movement%0A%20%20%20%20%20%20const%20rotationMultiplier%20%3D%2020%3B%20%20%2F%2F%20multiplies%20normalized%20torque%20for%20rotation%20speed%0A%20%20%20%20%20%20const%20inertiaResistance%20%20%3D%20200%3B%20%2F%2F%20higher%20%3D%20stops%20sooner%0A%0A%20%20%20%20%20%20%2F%2F%20Pre-build%20clamp%20functions%20for%20performance%0A%20%20%20%20%20%20const%20clampXY%20%20%3D%20gsap.utils.clamp(-1080%2C%201080)%3B%0A%20%20%20%20%20%20const%20clampRot%20%3D%20gsap.utils.clamp(-60%2C%2060)%3B%0A%0A%20%20%20%20%20%20%2F%2F%20Initialize%20each%20root%20container%0A%20%20%20%20%20%20document.querySelectorAll('%5Bdata-momentum-hover-init%5D').forEach(root%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20let%20prevX%20%3D%200%2C%20prevY%20%3D%200%3B%0A%20%20%20%20%20%20%20%20let%20velX%20%20%3D%200%2C%20velY%20%20%3D%200%3B%0A%20%20%20%20%20%20%20%20let%20rafId%20%3D%20null%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Track%20pointer%20velocity%20(throttled%20to%20RAF)%0A%20%20%20%20%20%20%20%20root.addEventListener('mousemove'%2C%20e%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(rafId)%20return%3B%0A%20%20%20%20%20%20%20%20%20%20rafId%20%3D%20requestAnimationFrame(()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20velX%20%3D%20e.clientX%20-%20prevX%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20velY%20%3D%20e.clientY%20-%20prevY%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20prevX%20%3D%20e.clientX%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20prevY%20%3D%20e.clientY%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20rafId%20%3D%20null%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%20%20%20%20%2F%2F%20Attach%20hover%20inertia%20to%20each%20child%20element%0A%20%20%20%20%20%20%20%20root.querySelectorAll('%5Bdata-momentum-hover-element%5D').forEach(el%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20el.addEventListener('mouseenter'%2C%20e%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20target%20%3D%20el.querySelector('%5Bdata-momentum-hover-target%5D')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(!target)%20return%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Compute%20offset%20from%20center%20to%20pointer%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20%7B%20left%2C%20top%2C%20width%2C%20height%20%7D%20%3D%20target.getBoundingClientRect()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20centerX%20%3D%20left%20%2B%20width%20%2F%202%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20centerY%20%3D%20top%20%2B%20height%20%2F%202%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20offsetX%20%3D%20e.clientX%20-%20centerX%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20offsetY%20%3D%20e.clientY%20-%20centerY%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Compute%20raw%20torque%20(px%C2%B2%2Fframe)%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20rawTorque%20%3D%20offsetX%20*%20velY%20-%20offsetY%20*%20velX%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Normalize%20torque%20so%20rotation%20%E2%88%9D%20pointer%20speed%20(deg%2Fsec)%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20leverDist%20%20%20%20%3D%20Math.hypot(offsetX%2C%20offsetY)%20%7C%7C%201%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20angularForce%20%3D%20rawTorque%20%2F%20leverDist%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Calculate%20and%20clamp%20velocities%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20velocityX%20%20%20%20%20%20%20%20%3D%20clampXY(velX%20*%20xyMultiplier)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20velocityY%20%20%20%20%20%20%20%20%3D%20clampXY(velY%20*%20xyMultiplier)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20const%20rotationVelocity%20%3D%20clampRot(angularForce%20*%20rotationMultiplier)%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20Apply%20GSAP%20inertia%20tween%0A%20%20%20%20%20%20%20%20%20%20%20%20gsap.to(target%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20inertia%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20x%3A%20%20%20%20%20%20%20%20%7B%20velocity%3A%20velocityX%2C%20%20%20%20%20%20%20%20end%3A%200%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20y%3A%20%20%20%20%20%20%20%20%7B%20velocity%3A%20velocityY%2C%20%20%20%20%20%20%20%20end%3A%200%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20rotation%3A%20%7B%20velocity%3A%20rotationVelocity%2C%20end%3A%200%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20resistance%3A%20inertiaResistance%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%2F%2Fteam%20load%0A%20%20%20%20var%20teamLoad%20%3D%20gsap.timeline(%7B%20scrollTrigger%3A%20%7B%20trigger%3A%20%22.section_team%22%20%7D%20%7D)%3B%0A%20%20%20%20teamLoad.from(%22.team_content-top%22%2C%20%7B%20y%3A%2075%2C%20opacity%3A%200%20%7D%2C%200)%3B%0A%20%20%20%20teamLoad.from(%22.team_item%22%2C%20%7B%20y%3A%20150%2C%20opacity%3A%200%2C%20stagger%3A%200.125%20%7D%2C%200.25)%3B%0A%0A%20%20%20%20initMomentumBasedHover()%3B%0A%20%20%7D%0A%7D)%3B%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
