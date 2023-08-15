import { render, screen, fireEvent } from "@testing-library/react";
import DropDown from "./DropDown";
import '@testing-library/jest-dom'

describe("Test for DropDown Component", () => {
    const options = {
        option1: "Option 1",
        option2: "Option 2",
        option3: "Option 3",
    };

    it("Renders correctly with label and placeholder", () => {
        render(
            <DropDown
                label="Select an option"
                options={options}
                placeHolder="Choose an option"
                value=""
                onChangeCallback={() => { }}
            />
        );

        const labelElement = screen.getByText("Select an option");
        const placeholderOption = screen.getByText("Choose an option");

        expect(labelElement).toBeInTheDocument();
        expect(placeholderOption).toBeInTheDocument();
    });

    it("Renders options correctly", () => {
        render(
            <DropDown
                label="Select an option"
                options={options}
                placeHolder="Choose an option"
                value=""
                onChangeCallback={() => { }}
            />
        );

        const option1 = screen.getByText("Option 1");
        const option2 = screen.getByText("Option 2");
        const option3 = screen.getByText("Option 3");

        expect(option1).toBeInTheDocument();
        expect(option2).toBeInTheDocument();
        expect(option3).toBeInTheDocument();
    });
});
