import { useContext } from "react";
import { AccordionContext } from "../components/Accordion";

export default function useAccordionContext() {
    const context = useContext(AccordionContext)

    if (!context) {
        throw new Error('Accordion components need to be wrapped into <Accordion>.')
    }

    return context
}