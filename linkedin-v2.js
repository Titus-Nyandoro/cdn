// LinkedIn Embed URLs
const linkedinFeeds = [
    'https://www.linkedin.com/embed/feed/update/urn:li:share:7204539529389617152',
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7201718196129730560',
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6652950789012627456', 
    'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7163173473773576192', 
    // Add more LinkedIn embed URLs here
];

// Function to create the grid
function createLinkedInGrid() {
    const container = document.getElementById('linkedin-grid-container');

    // Create the grid layout
    let gridHTML = '<div class="linkedin-grid">';
    linkedinFeeds.forEach(url => {
        gridHTML += `
            <div class="grid-item">S
                <iframe src="${url}" height="312" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
            </div>
        `;
    });
    gridHTML += '</div>';

    // Insert the grid into the container
    container.innerHTML = gridHTML;
}

// Run the function when the page loads
window.onload = createLinkedInGrid;
