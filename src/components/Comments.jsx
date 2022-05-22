import React from 'react';

const Comments = ({comments}) => {

	return (
		<div>
			{comments.map(comm =>
				<div key={comm.id} style={{marginTop: 20}}>
					<h5>{comm.email}</h5>
					<div>{comm.body}</div>
				</div>
			)}
		</div>
	);
};

export default Comments;