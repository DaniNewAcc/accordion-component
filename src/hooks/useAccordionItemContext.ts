import { useContext } from "react";
import { AccordionItemContext } from "../components/AccordionItem";

export default function useAccordionItemContext() {
    const context = useContext(AccordionItemContext)

    if (!context) {
        throw new Error('AccordionItem components need to be wrapped into <Accordion.Item>.')
    }

    return context
}