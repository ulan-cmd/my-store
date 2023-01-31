import Accordion from "react-bootstrap/Accordion";
import React from "react";

function MyAccordion({title, desc}) {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    {desc}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default MyAccordion;