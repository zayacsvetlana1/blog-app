import React from 'react';
import MyButtonActive from "../button/MyButtonActive";
import MyButton from "../button/MyButton";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
	let pagesArray = getPagesArray(totalPages)

	return (
		<div className='page__wrapper'>
			{pagesArray.map(p =>
				<div key={p} onClick={() => changePage(p)}>
					{page === p ? <MyButtonActive> {p} </MyButtonActive> : <MyButton> {p} </MyButton>}
				</div>
			)}
		</div>
	);
};

export default Pagination;