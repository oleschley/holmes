// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_recipes.js` rather than `recipes.js`, because
// we don't want to create an `/blog/recipes` route — the leading
// underscore tells Sapper not to do that.

import fs from 'fs'
import marked from 'marked'

const recipes = [
	{
		title: 'Chicken Ticka Masala',
		slug: 'chicken-ticka-masala',
		content: '/app/_content/recipes/chicken-ticka-masala.md'
	},
	{
		title: 'Ssamjang Sauce',
		slug: 'ssamjang-sauce',
		content: '/app/_content/recipes/ssamjang-sauce.md'
	}
];

recipes.forEach(recipe => {
	recipe.content = marked(fs.readFileSync(recipe.content, 'utf-8'));
});

export default recipes;
