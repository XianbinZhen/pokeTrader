import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { nextPage, previousPage, lastPage, firstPage, gotoPage } from '../../redux';

const Pagination = () => {
	const { page } = useSelector((state) => state.page);
	const dispatch = useDispatch();
	const pageNumber = Math.ceil((page - 1) / 20) + 1;
	const [ inputNumber, setInputNumber ] = useState(pageNumber);

	const handleChangePage = (e) => {
		e.preventDefault();
		setInputNumber(e.target.value);
		dispatch(gotoPage(e.target.value));
	};
	useEffect(
		() => {
			setInputNumber(pageNumber);
			return () => {
				//
			};
		},
		[ pageNumber ]
	);
	return (
		<div className="flex items-center justify-center flex-wrap">
			<div>
				<button className="btn btn-blue mx-2" onClick={() => dispatch(firstPage())}>
					First page
				</button>
				<button className="btn btn-blue m-2" onClick={() => dispatch(lastPage())}>
					Last page
				</button>
			</div>
			<div>
				<button className="btn btn-blue m-2" onClick={() => dispatch(previousPage())}>
					Previous
				</button>
				<button className="btn btn-blue m-2" onClick={() => dispatch(nextPage())}>
					Next
				</button>
			</div>
			<div className="">
				<label htmlFor="pageNumber" className="mx-2 p-2">
					Page (total 41):{' '}
				</label>
				<input
					type="number"
					min="1"
					max="41"
					onChange={handleChangePage}
					value={inputNumber}
					id="pageNumber"
					className="border w-20 text-center"
				/>
			</div>
		</div>
	);
};

export default Pagination;
