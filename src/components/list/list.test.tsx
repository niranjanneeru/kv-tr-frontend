import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import ListItem from "./ListItem";
import '@testing-library/jest-dom'

describe("Test for ListItem Component", () => {
    const mockDeleteAction = jest.fn();
    const mockEditAction = jest.fn();

    const listItemProps = {
        name: "John Doe",
        id: "123",
        joining_date: "2023-01-01",
        role: "Engineer",
        statusType: "ACTIVE",
        experience: 5,
        department: "IT",
        deleteAction: mockDeleteAction,
        editAction: mockEditAction,
    };

    it("Renders without errors", () => {
        render(
            <BrowserRouter>
                <ListItem {...listItemProps} />
            </BrowserRouter>
        );
    });

    it("Renders all data correctly", () => {
        render(
            <BrowserRouter>
                <ListItem {...listItemProps} />
            </BrowserRouter>
        );

        const nameElement = screen.getByText("John Doe");
        const idElement = screen.getByText("123");
        const roleElement = screen.getByText("Engineer");
        const experienceElement = screen.getByText("5 Yr");
        const departmentElement = screen.getByText("IT");

        expect(nameElement).toBeInTheDocument();
        expect(idElement).toBeInTheDocument();
        expect(roleElement).toBeInTheDocument();
        expect(experienceElement).toBeInTheDocument();
        expect(departmentElement).toBeInTheDocument();
    });

    it("Triggers deleteAction and editAction when buttons are clicked", () => {
        render(
            <BrowserRouter>
                <ListItem {...listItemProps} />
            </BrowserRouter>
        );

        const deleteButton = screen.getByAltText("delete-each");
        const editButton = screen.getByAltText("edit-each");

        fireEvent.click(deleteButton);
        fireEvent.click(editButton);

        expect(mockDeleteAction).toHaveBeenCalledTimes(1);
        expect(mockEditAction).toHaveBeenCalledTimes(1);
    });

    it("Navigates to employee detail page when clicked", () => {
        render(
            <BrowserRouter>
                <ListItem {...listItemProps} />
            </BrowserRouter>
        );

        const listItem = screen.getByRole("row");

        fireEvent.click(listItem);

        // Adjust this expectation based on your routing logic and URL
        expect(window.location.pathname).toBe("/employee/123");
    });
});
