'use client'

import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {


    const [ loading, isLoading ] = useState(false)

    console.log("Template" ,loading)

  return <div>{children}</div>;
}