import { render } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

describe('Test for Header Component', () => {
	it('To Match Snapshot', () => {
		const dom = render(<Header />);

		expect(dom).toMatchSnapshot();
	});

	it('Renders without errors', () => {
		render(<Header />);
	});

	it('Renders with the correct CSS class', () => {
		render(<Header />);

		const headerElement = document.querySelector('.header-shadow-box');

		expect(headerElement).toBeInTheDocument();
	});
});
