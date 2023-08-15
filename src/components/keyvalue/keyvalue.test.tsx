import { render, screen } from "@testing-library/react";
import KeyValue from "./KeyValue";
import '@testing-library/jest-dom'

describe("Test for KeyValue Component", () => {
    it("Renders without errors", () => {
        render(<KeyValue label="Label" value="Value" status={false}/>);
    });

    it("Renders label and value correctly", () => {
        render(<KeyValue label="Label" value="Value" status={false}/>);

        const labelElement = screen.getByText("Label");
        const valueElement = screen.getByText("Value");

        expect(labelElement).toBeInTheDocument();
        expect(valueElement).toBeInTheDocument();
    });
});
