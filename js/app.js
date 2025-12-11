// Content file mappings
const contentFiles = {
    'quotes': 'quotes/quotable-library.md',
    'stories': 'stories/transformation-stories.md',
    'social': 'social/linkedin-posts.md',
    'playbook': 'playbook/lead-magnet-playbook.md',
    'emails': 'emails/6-email-launch-sequence.md'
};

// Program names for display
const programNames = {
    'creative-pros': 'Creative Professionals',
    'pr-comms': 'PR & Communications',
    'sales-leaders': 'Sales Leaders',
    'journalists': 'Journalists',
    'healthcare-pros': 'Healthcare Professionals',
    'hr-pros': 'HR Professionals',
    'legal-pros': 'Legal Professionals'
};

// Content type names for display
const contentTypeNames = {
    'quotes': 'Quotable Library',
    'stories': 'Transformation Stories',
    'social': 'LinkedIn Posts',
    'playbook': 'Lead Magnet Playbook',
    'emails': '6-Email Launch Sequence'
};

// Toggle program submenu
function toggleProgram(programId) {
    const menu = document.getElementById(`${programId}-menu`);
    const allMenus = document.querySelectorAll('.submenu');

    // Close all other menus
    allMenus.forEach(m => {
        if (m.id !== `${programId}-menu`) {
            m.classList.remove('active');
        }
    });

    // Toggle current menu
    menu.classList.toggle('active');
}

// Load instructor toolkit content
async function loadToolkitContent(contentPath) {
    const contentDisplay = document.getElementById('content-display');

    // Show loading state
    contentDisplay.innerHTML = '<div class="loading">Loading content...</div>';

    // Build file path
    const filePath = `content/instructor-toolkit/${contentPath}.md`;

    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('File not found');

        const markdown = await response.text();

        // Create title from path
        const pathParts = contentPath.split('/');
        const fileName = pathParts[pathParts.length - 1];
        const title = fileName
            .replace(/-/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());

        displayMarkdown(markdown, `Instructor Toolkit - ${title}`);
    } catch (error) {
        showError(`Failed to load instructor toolkit content from ${filePath}`);
    }
}

// Load and display content
async function loadContent(program, contentType) {
    const contentDisplay = document.getElementById('content-display');

    // Special case for overview
    if (program === 'overview') {
        try {
            const response = await fetch('content/README.md');
            if (!response.ok) throw new Error('Failed to load overview');
            const markdown = await response.text();
            displayMarkdown(markdown, 'Marketing Hub Overview');
        } catch (error) {
            showError('Failed to load overview content.');
        }
        return;
    }

    // Show loading state
    contentDisplay.innerHTML = '<div class="loading">Loading content</div>';

    // Build file path
    const filePath = `content/${program}/${contentFiles[contentType]}`;

    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('File not found');

        const markdown = await response.text();
        const title = `${programNames[program]} - ${contentTypeNames[contentType]}`;
        displayMarkdown(markdown, title);
    } catch (error) {
        showError(`Failed to load content from ${filePath}`);
    }
}

// Display markdown content
function displayMarkdown(markdown, title) {
    const contentDisplay = document.getElementById('content-display');

    // Convert markdown to HTML
    const html = marked.parse(markdown);

    // Create content with copy button
    contentDisplay.innerHTML = `
        <div class="content-header">
            <h2 style="color: #667eea; margin-bottom: 1rem;">${title}</h2>
            <button class="copy-btn" onclick="copyToClipboard()">📋 Copy All Content</button>
        </div>
        <div class="markdown-content" id="markdown-body">
            ${html}
        </div>
    `;

    // Scroll to top
    contentDisplay.scrollTop = 0;
}

// Show error message
function showError(message) {
    const contentDisplay = document.getElementById('content-display');
    contentDisplay.innerHTML = `
        <div class="error">
            <h3>⚠️ Error</h3>
            <p>${message}</p>
        </div>
    `;
}

// Copy content to clipboard
async function copyToClipboard() {
    const markdownBody = document.getElementById('markdown-body');
    const text = markdownBody.innerText;

    try {
        await navigator.clipboard.writeText(text);

        // Show feedback
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✅ Copied!';
        btn.style.background = '#48bb78';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '#667eea';
        }, 2000);
    } catch (error) {
        alert('Failed to copy content. Please select and copy manually.');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('AI Upgrade Marketing Hub loaded successfully');

    // Configure marked options
    marked.setOptions({
        breaks: true,
        gfm: true,
        headerIds: true,
        mangle: false
    });
});
