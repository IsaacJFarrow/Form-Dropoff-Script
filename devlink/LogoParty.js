"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { LogoBanner } from "./LogoBanner";

export function LogoParty({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="section_logo-party" tag="section">
      <LogoBanner sort={logoBannerSort} filters={logoBannerFilters} />
    </_Component>
  );
}
