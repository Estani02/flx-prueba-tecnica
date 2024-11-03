"use client"
import Image from "next/image"
import { Layout } from "antd"

import Logo from "@/assets/images/Flexxus-Logo.png"

function Header() {
  return (
    <Layout.Header className="flex items-center justify-between bg-[#D9D9D9] px-20 py-12">
      <Image alt="Flexxus" src={Logo} />
    </Layout.Header>
  )
}

export default Header
