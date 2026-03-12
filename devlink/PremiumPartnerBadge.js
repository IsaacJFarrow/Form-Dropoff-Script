"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function PremiumPartnerBadge({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="premium-partner-badge-wrapper" tag="div">
      <_Builtin.Link
        className="premium-partner-link"
        button={false}
        block="inline"
        options={{
          href: "https://webflow.com/@what-if-web",
          target: "_blank",
        }}
      >
        <_Builtin.Image
          className="premium-partner-badge"
          loading="lazy"
          width="auto"
          height="auto"
          alt="Webflow Premium Partner Badge Black"
          src="https://cdn.prod.website-files.com/6719702b25f42f173940b521/6792e7aa552fd12ed7851f22_premium_partner_badge_vertical_black.svg"
        />
      </_Builtin.Link>
    </_Component>
  );
}
