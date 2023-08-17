import './style.css';

const ListHeader = ({ showAction = true }) => {
	return (
		<tr className='list-header'>
			<th>Employee Name</th>
			<th>Employee ID</th>
			<th>Joining Date</th>
			<th>Role</th>
			<th>Status</th>
			<th>Experience</th>
			<th>Department</th>
			{showAction && <th>Action</th>}
		</tr>
	);
};

export default ListHeader;
