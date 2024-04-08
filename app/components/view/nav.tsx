"use client";

import { MenuBtnLabel, BookBtn, MenuBox, MenuBtnIcon } from "@/app/styles";
import { Logo } from "@/app/icon";
import { BookMenu, NavMenu } from "../nav_bookmenu";
import { useState } from "react";
import Link from "next/link";

export const Nav = () => {


  const [openBk, setOpenBk] = useState<boolean>(false);
  const [openNm, setOpenNm] = useState<boolean>(false);

  return (
    <>
      <BookMenu open={openBk} setOpen={setOpenBk} />
      <NavMenu open={openNm} setOpen={setOpenNm} />
      <div className="navmenucontainer">
        <div className="menuflex">
          <span onClick={() => setOpenNm(true)}>
            <MenuBox>
              <MenuBtnIcon>
                <span></span>
                <span></span>
              </MenuBtnIcon>
              <MenuBtnLabel>Menu</MenuBtnLabel>
            </MenuBox>
          </span>
        </div>
        <Link href="/">
          <Logo />
        </Link>

        <div className="menuflex2">
          <BookBtn>
            <div onClick={() => setOpenBk(true)}>Make a booking</div>
          </BookBtn>
        </div>
      </div>
    </>
  );
};
