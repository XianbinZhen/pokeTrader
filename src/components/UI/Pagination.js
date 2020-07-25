import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, previousPage, lastPage, firstPage } from '../../redux';

const Pagination = () => {
	const { page } = useSelector((state) => state.page);
	const dispatch = useDispatch();

	return (
		<div>
			<button className="btn btn-blue mx-2" onClick={() => dispatch(firstPage())}>
				First page
			</button>

			<button className="btn btn-blue mx-2" onClick={() => dispatch(previousPage())}>
				Previous
			</button>
			<label>Page: {Math.ceil((page - 1) / 20) + 1}</label>
			<button className="btn btn-blue mx-2" onClick={() => dispatch(nextPage())}>
				Next
			</button>
			<button className="btn btn-blue mx-2" onClick={() => dispatch(lastPage())}>
				Last page
			</button>
		</div>
	);
};

export default Pagination;
