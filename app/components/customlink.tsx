"use client";

import { Dispatch, SetStateAction } from "react";
import { useLoading } from "../context/loadingcontext";
import { useRouter } from "next/navigation";
import { Sleep } from "../lib/helpers";

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

  const router = useRouter();

  const handleClick = async () => {
    await Sleep(1000)
    router.push(href)
  }

  return (
    <span
      onClick={() => {
        isLoading(true);
        setOpen(false);
        handleClick()
      }}
    >
      {name}
    </span>
  );
};
