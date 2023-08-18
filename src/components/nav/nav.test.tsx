import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import '@testing-library/jest-dom';

describe('Test for Nav Component', () => {
	it('Renders without errors', () => {
		render(<Nav />);
	});

	it('To Match Snapshot', () => {
		const dom = render(<Nav />);

		expect(dom).toMatchSnapshot();
	});

	it('Renders logo and label correctly', () => {
		render(<Nav />);

		const logoElement = screen.getByAltText('Logo');
		const labelElement = screen.getByText('Employee List');

		expect(logoElement).toBeInTheDocument();
		expect(labelElement).toBeInTheDocument();
	});

	it('Renders employee icon correctly', () => {
		render(<Nav />);

		const employeeIcon = screen.getByAltText('employee logo');

		expect(employeeIcon).toBeInTheDocument();
	});
});
