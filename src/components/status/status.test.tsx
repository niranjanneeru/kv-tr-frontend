import { render, screen } from '@testing-library/react';
import Status from './Status';
import '@testing-library/jest-dom';

describe('Test for Status Component', () => {
	const statusProps = {
		statusType: 'ACTIVE',
		inTable: true
	};

	it('To Match Snapshot', () => {
		const dom = render(<Status {...statusProps} />);

		expect(dom).toMatchSnapshot();
	});

	it('Renders without errors', () => {
		render(<Status {...statusProps} />);
	});

	it('Renders correct label and background color', () => {
		render(<Status {...statusProps} />);

		const statusComponent = screen.getByText('Active');

		expect(statusComponent).toBeInTheDocument();
		expect(statusComponent).toHaveStyle({ backgroundColor: '#D3F4BE' });
	});

	it('Renders different label and background color when inTable is false', () => {
		render(<Status statusType='INACTIVE' inTable={false} />);

		const statusComponent = screen.getByText('In Active');

		expect(statusComponent).toBeInTheDocument();
		expect(statusComponent).toHaveStyle({ backgroundColor: '#FFBFBF' });
	});
});
