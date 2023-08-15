import { render, screen, fireEvent } from "@testing-library/react";
import Popup from "./Popup";
import Button from "../button/Button";
import '@testing-library/jest-dom'

describe("Test for Popup Component", () => {
    const mockOnConfirmAction = jest.fn();
    const mockOnCancelAction = jest.fn();

    const popupProps = {
        show: true,
        title: "Confirmation",
        desc: "Are you sure?",
        OnConfirmAction: mockOnConfirmAction,
        OnCancelAction: mockOnCancelAction,
    };

    it("Renders without errors when show is true", () => {
        render(<Popup {...popupProps} />);
    });

    it("Doesn't render when show is false", () => {
        render(<Popup {...popupProps} show={false} />);
        const popupMain = screen.queryByTestId("popup-main");

        expect(popupMain).not.toBeInTheDocument();
    });

    it("Renders title, description, and buttons correctly", () => {
        render(<Popup {...popupProps} />);

        const titleElement = screen.getByText("Confirmation");
        const descElement = screen.getByText("Are you sure?");
        const confirmButton = screen.getByText("Confirm");
        const cancelButton = screen.getByText("Cancel");

        expect(titleElement).toBeInTheDocument();
        expect(descElement).toBeInTheDocument();
        expect(confirmButton).toBeInTheDocument();
        expect(cancelButton).toBeInTheDocument();
    });

    it("Triggers OnConfirmAction and OnCancelAction when buttons are clicked", () => {
        render(<Popup {...popupProps} />);

        const confirmButton = screen.getByText("Confirm");
        const cancelButton = screen.getByText("Cancel");

        fireEvent.click(confirmButton);
        fireEvent.click(cancelButton);

        expect(mockOnConfirmAction).toHaveBeenCalledTimes(1);
        expect(mockOnCancelAction).toHaveBeenCalledTimes(1);
    });
});
