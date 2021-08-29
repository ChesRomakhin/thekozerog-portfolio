import React from "react";
import Logo from "./logo";
import NavLink from "./nav-link";
import styled from "@emotion/styled";

const StyledHeader = styled.header(
  {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignContent: "space-between",
    alignItems: "center",
  }
)

const HeaderSection = () => (<StyledHeader>
  <Logo/>
  <NavLink toPage={"/"}>Portfolio</NavLink>
  <NavLink toPage={"/about"}>About</NavLink>
</StyledHeader>)

export default HeaderSection;