import { EscapeButton, EscapeContainerOuter, Escapeh2 } from "./styles"
import Image from "next/image"


export const Escape = () => {
    return (
        <EscapeContainerOuter>
            <Image src="/assets/escape-hero-image.jpg" alt="" width={0} height={0} sizes="100vww" />
            <Escapeh2>Escape</Escapeh2>
            <EscapeButton>Treat someone</EscapeButton>
        </EscapeContainerOuter>
    )
}