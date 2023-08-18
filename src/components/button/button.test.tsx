import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import '@testing-library/jest-dom';

describe('Test for Button Component', () => {
	it('If Label is correct', () => {
		render(<Button label='create' buttonType='submit' onClickCallback={() => {}} />);
		const dom = screen.getByTestId('button-create-id');

		expect(dom).toHaveTextContent('create');
	});

	it('If Type is correct', () => {
		render(<Button label='create' buttonType='submit' onClickCallback={() => {}} />);
		const dom = screen.getByTestId('button-create-id');

		expect(dom).toHaveAttribute('type', 'submit');
		expect(dom).not.toHaveAttribute('type', 'cancel');
	});

	it('To Match Snapshot', () => {
		render(<Button label='create' buttonType='submit' onClickCallback={() => {}} />);
		const dom = screen.getByTestId('button-create-id');

		expect(dom).toMatchSnapshot();
	});

	it('If Callback works', () => {
		const cb = jest.fn();

		render(<Button label='create' buttonType='submit' onClickCallback={cb} />);
		const dom = screen.getByTestId('button-create-id');

		fireEvent.click(dom);

		// dom.click();

		expect(cb).toHaveBeenCalled();
		expect(cb).not.toBeCalledTimes(2);
	});
});
