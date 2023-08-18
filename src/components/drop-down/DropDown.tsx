import './style.css';

const DropDown = ({ label, options, placeHolder, value, onChangeCallback }) => {
	console.log(value);

	return (
		<div className='input-group'>
			<label className='dropdown-label'>{label}</label>
			<select className='normal-input' id='status' onChange={onChangeCallback}>
				{value === '' && (
					<option value='' selected disabled hidden>
						{placeHolder}
					</option>
				)}
				{Object.keys(options).map((key) => {
					return (
						<option key={key} value={key} selected={value !== '' && key === value ? true : false}>
							{options[key]}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default DropDown;
