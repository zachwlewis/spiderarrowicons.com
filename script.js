document.addEventListener('DOMContentLoaded', init);

let tags = new Map();
let searchElement;
let clearElement;
let searchValue = '';
let selectedTags = [];

function init() {
	populateIcons();

	updateTags();
	populateTags();

	searchElement = document.getElementById('search');
	clearElement = document.getElementById('clear');

	// Add event listeners for search and clear buttons
	searchElement.addEventListener('input', searchIcons);
	clearElement.addEventListener('click', clearSearch);
}

function populateIcons() {
	// Populate the #icons main element with the icons array
	const iconsElement = document.getElementById('icons');
	iconsElement.innerHTML = '';
	const iconList = filteredIconsList(searchValue, selectedTags).sort((a, b) => a.name.localeCompare(b.name));
	iconList.forEach(icon => {
		const iconElement = document.createElement('div');
		iconElement.classList.add('icon');
		iconElement.innerHTML = `
			<img src="icons/${icon.icon}" alt="${icon.name}" />
			<div class="description">
				<h3>${icon.name}</h3>
				<p>${icon.description}</p>
				<ul class="tags">
					${icon.tags.map(tag => selectedTags.includes(tag) ? `<li class="tag highlight">${tag}</li>` : `<li class="tag">${tag}</li>`).join('')}
				</ul>
			</div>
		`;
		iconsElement.appendChild(iconElement);
	});
}

function updateTags() {
	// Update the tags map with all unique tags from the icons array and their counts.
	// The tags map should look like this:
	// key: "spider", value: 8

	tags = new Map();
	filteredIconsList(searchValue, selectedTags).forEach(icon => {
		icon.tags.forEach(tag => {
			if (tags.has(tag)) {
				tags.set(tag, tags.get(tag) + 1);
			} else {
				tags.set(tag, 1);
			}
		});
	});

};

function populateTags() {
	// Populate the #tags aside element with the tags map
	// Sort them by count in descending order
	const tagsElement = document.getElementById('tags');
	tagsElement.innerHTML = '';
	Array.from(tags)
		.sort((a, b) => b[1] - a[1])
		.forEach((tag,index) => {
			const tagElement = document.createElement('li');
			tagElement.classList.add('tag');
			if (selectedTags.includes(tag[0])) {
				tagElement.classList.add('highlight');
			}
			tagElement.innerHTML = `
				<input type="checkbox" id="tag-${index+1}" />
				<label for="tag-${index+1}">
					<span class="name">${tag[0]}</span>
					<span class="count">${tag[1]}</span>
				</label>
			`;
			let checkboxElement = tagElement.querySelector('input');
			checkboxElement.checked = selectedTags.includes(tag[0]);
			// set the "tag" data attribute to the tag name
			checkboxElement.dataset.tag = tag[0];
			// add an event listener to the checkbox
			checkboxElement.addEventListener('change', onTagSelectionChanged);
			tagsElement.appendChild(tagElement);
		});
};


function filteredIconsList(query, tags) {
	// Filter the icons array based on the search query and selected tags
	// Return a new array of filtered icons
	return icons.filter(icon => {
		const searchMatch = icon.name.toLowerCase().includes(query.toLowerCase());
		const tagMatch = tags.every(tag => icon.tags.includes(tag));
		return searchMatch && tagMatch;
	});
}

// create an event handler that responds to the search input
function searchIcons(event) {
	searchValue = event.target.value;
	populateIcons();
	updateTags();
	populateTags();
}

// create an event handler that responds to the clear button
function clearSearch(event) {
	selectedTags = [];
	searchElement.value = '';
	searchValue = '';
	populateIcons();
	updateTags();
	populateTags();
}

function onTagSelectionChanged(event) {
	const tag = event.target.dataset.tag;
	if (event.target.checked) {
		selectedTags.push(tag);
	} else {
		selectedTags = selectedTags.filter(t => t !== tag);
	}
	populateIcons();
	updateTags();
	populateTags();
};