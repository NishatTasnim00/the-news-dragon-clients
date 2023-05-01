import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const categoryNews = useLoaderData();  
    // console.log(categoryNews);
    const { id } = useParams()
	return (
		<div>
			<h4>THIS IS CATEGORY : {categoryNews.length}</h4>
			{
				categoryNews.map( news =>
					<NewsCard key={news._id}
					news={news}></NewsCard>
				)
			}
		</div>
	);
};

export default Category;
