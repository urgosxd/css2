import React from "react"
import { LayoutWrapper } from "../elements"
import { Menu, User } from "@styled-icons/entypo"
import Navbar from "./nav"

export const Layout = ({ data, children, isHome }) => {
  return (
    <LayoutWrapper>
      <Navbar />
      {children}
    </LayoutWrapper>
  )
}
