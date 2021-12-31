import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
	<>
		{articles.map((art, key) => (
			<Link className="article-list-item" key={key} to={`/article/${art.name}`}>
				<h3>{art.title}</h3>
				<p>{art.content[0].substring(0, 150)}...</p>
			</Link>
		))}
	</>
);

export default ArticlesList;
