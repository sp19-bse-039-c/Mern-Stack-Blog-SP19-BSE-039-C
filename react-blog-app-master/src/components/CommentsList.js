import React, {useEffect} from "react"

const CommentsList = ({ comments }) => {
	return(
	<>
		<h3>Comments:</h3>
		{comments.map((comment, key) => (
			<div key={key} className="comment">
				<h4>{comment.username}</h4>
				<p>
					<i>{comment.comment}</i>
				</p>
			</div>
		))}
	</>);
}
export default CommentsList
