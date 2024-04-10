"use client";

import { Dispatch, SetStateAction } from "react";
import { useLoading } from "../context/loadingcontext";
import { useRouter } from "next/navigation";
import { Sleep } from "../lib/helpers";
import { usePathname } from "next/navigation";

export const CustomLink = ({
  href,
  setOpen,
  name,
}: {
  href: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  name: string;
}) => {
  const { isLoading } = useLoading();

  const pathname = usePathname()


  const router = useRouter();

  const handleClick = async () => {
    await Sleep(1000)
    console.log(href, pathname)
    if(href === pathname) return 
    isLoading(true);
    router.push(href)
  }

  return (
    <span
      onClick={() => {
        setOpen(false);
        handleClick()
      }}
    >
      {name}
    </span>
  );
};
