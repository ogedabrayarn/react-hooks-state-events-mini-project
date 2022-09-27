import React from "react";
import { CATEGORIES } from "../data";
import { useState } from "react";

function CategoryFilter() {
	const [categories, setCategory] = useState(CATEGORIES);

	function updateCategories() {
		let newlist = categories.filter((category) => ({ category } === category));
		setCategory(newlist);
	}

	return (
		<div className="categories">
			<h5>Category filters</h5>
			{CATEGORIES.map((category) => (
				<button key={category} onClick={() => updateCategories(category)}>
					{category}
				</button>
			))}
		</div>
	);
}

export default CategoryFilter;