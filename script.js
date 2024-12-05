document.addEventListener('DOMContentLoaded', init);

let tags = new Map();
let searchElement;
let clearElement;
let searchValue = '';
let selectedTags = [];
let arachnophobiaMode = localStorage.getItem('arachnophobiaMode') === 'true';
let aichmophobiaMode = localStorage.getItem('aichmophobiaMode') === 'true';
let iconophobiaMode = localStorage.getItem('iconophobiaMode') === 'true';

const REDACTED_WORD = '[REDACTED]';

function init() {
	populateIcons();

	updateTags();
	populateTags();


	searchElement = document.getElementById('search');
	clearElement = document.getElementById('clear');

	// Add event listeners for search and clear buttons
	searchElement.addEventListener('input', searchIcons);
	clearElement.addEventListener('click', clearSearch);

	// a11y
	updateRedactedWords(document.body, arachnophobiaMode, aichmophobiaMode);
	if (arachnophobiaMode) {
		document.body.classList.add('arachnophobia-mode');
	}
	if (aichmophobiaMode) {
		document.body.classList.add('aichmophobia-mode');
	}
	if (iconophobiaMode) {
		document.body.classList.add('iconophobia-mode');
	}

	document.getElementById('arachnophobia').checked = arachnophobiaMode;
	document.getElementById('aichmophobia').checked = aichmophobiaMode;
	document.getElementById('iconophobia').checked = iconophobiaMode;

	document.getElementById('arachnophobia').addEventListener('click', toggleArachnophobiaMode);
	document.getElementById('aichmophobia').addEventListener('click', toggleAichmophobiaMode);
	document.getElementById('iconophobia').addEventListener('click', toggleIconophobiaMode);
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
			<div class="icon-wrap"><img src="icons/${icon.icon}" alt="${icon.name}" /></div>
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
	updateRedactedWords(document.body, arachnophobiaMode, aichmophobiaMode);

}

// create an event handler that responds to the clear button
function clearSearch(event) {
	selectedTags = [];
	searchElement.value = '';
	searchValue = '';
	populateIcons();
	updateTags();
	populateTags();
	updateRedactedWords(document.body, arachnophobiaMode, aichmophobiaMode);

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
	updateRedactedWords(document.body, arachnophobiaMode, aichmophobiaMode);

};

// a11y

function updateRedactedWords(node, redactSpider, redactArrow) {
	if (node.nodeType === Node.TEXT_NODE) {
        // Skip empty or irrelevant text nodes
        if (node.textContent.trim().length > 0) {
            // Store original content for restoration
            if (!node._originalText) {
                node._originalText = node.textContent;
            }
            // Replace all instances of "spider" (case insensitive)
			let newContent = node._originalText;
			if (redactSpider) {
				newContent = newContent.replace(/🕷/gi, "✨");
            	newContent = newContent.replace(/spider/gi, "------");
            	newContent = newContent.replace(/arachnid/gi, "--------");
			}

			if (redactArrow) {
				newContent = newContent.replace(/🏹/gi, "🎀");
				newContent = newContent.replace(/arrow/gi, "-----");
			}

			node.textContent = newContent;
        }
    } else {
        // Recursively process child nodes
        node.childNodes.forEach(child => updateRedactedWords(child, redactSpider, redactArrow));
    }
}

const toggleArachnophobiaMode = () => {
	document.body.classList.toggle('arachnophobia-mode');
	arachnophobiaMode = !arachnophobiaMode;
	localStorage.setItem('arachnophobiaMode', arachnophobiaMode);
	updateRedactedWords(document.body, arachnophobiaMode, aichmophobiaMode);

}

const toggleAichmophobiaMode = () => {
	document.body.classList.toggle('aichmophobia-mode');
	aichmophobiaMode = !aichmophobiaMode;
	localStorage.setItem('aichmophobiaMode', aichmophobiaMode);
	updateRedactedWords(document.body, arachnophobiaMode, aichmophobiaMode);
}

const toggleIconophobiaMode = () => {
	document.body.classList.toggle('iconophobia-mode');
	iconophobiaMode = !iconophobiaMode;
	localStorage.setItem('iconophobiaMode', iconophobiaMode);
}