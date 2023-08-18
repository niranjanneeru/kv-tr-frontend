import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './TextField';
import '@testing-library/jest-dom';

describe('Test for TextField Component', () => {
	const mockChangeCallback = jest.fn();

	// const textFieldProps = {
	//     label: "Username",
	//     textType: "text",
	//     placeHolder: "Enter your username",
	//     value: "john_doe",
	//     onChangeCallback: mockChangeCallback,
	//     isLogin: true,
	//     isLabelHidden: false,
	//     disabled: false,
	// };

	it('To Match Snapshot', () => {
		const dom = render(
			<TextField
				textType='text'
				label='Username'
				placeHolder='Enter your username'
				value='john'
				isLogin={true}
				isLabelHidden={true}
				disabled={false}
				onChangeCallback={mockChangeCallback}
			/>
		);

		expect(dom).toMatchSnapshot();
	});

	it('Renders without errors', () => {
		render(
			<TextField
				textType='text'
				label='Username'
				placeHolder='Enter your username'
				value='john'
				isLogin={true}
				isLabelHidden={true}
				disabled={false}
				onChangeCallback={mockChangeCallback}
			/>
		);
	});

	it('Renders label, input, and placeholder correctly', () => {
		render(
			<TextField
				textType='text'
				label='Username'
				placeHolder='Enter your username'
				value='john'
				isLogin={true}
				isLabelHidden={true}
				disabled={false}
				onChangeCallback={mockChangeCallback}
			/>
		);

		const labelElement = screen.getByText('Username');
		const inputElement = screen.getByPlaceholderText('Enter your username');

		expect(labelElement).toBeInTheDocument();
		expect(inputElement).toBeInTheDocument();
	});

	it('Triggers onChangeCallback when input value changes', () => {
		render(
			<TextField
				textType='text'
				label='Username'
				placeHolder='Enter your username'
				value='john'
				isLogin={true}
				isLabelHidden={true}
				disabled={false}
				onChangeCallback={mockChangeCallback}
			/>
		);

		const inputElement = screen.getByPlaceholderText('Enter your username');

		fireEvent.change(inputElement, { target: { value: 'new_value' } });

		expect(mockChangeCallback).toHaveBeenCalledTimes(1);
	});

	it('Changes input type when focused and blurred', () => {
		render(
			<TextField
				textType='password'
				label='Username'
				placeHolder='Enter your username'
				value='john'
				isLogin={true}
				isLabelHidden={true}
				disabled={false}
				onChangeCallback={mockChangeCallback}
			/>
		);

		const inputElement = screen.getByPlaceholderText('Enter your username');

		fireEvent.focus(inputElement);
		expect(inputElement).toHaveAttribute('type', 'password');

		fireEvent.blur(inputElement);
		expect(inputElement).toHaveAttribute('type', 'text');
	});
});
