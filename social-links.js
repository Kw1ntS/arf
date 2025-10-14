const currentUrl = encodeURIComponent(window.location.href);
const shareText = encodeURIComponent('Check out this AR app!');

const socialLinks = [
    {
        name: 'globe',
        icon: '<i class="fas fa-globe"></i>',
        url: 'https://edu-eao.ru/',
        text: 'Visit website',
    },
    {
        name: 'vk',
        icon: '<i class="fab fa-vk"></i>',
        url: `https://vk.com/edu_eao`,
        text: 'Share on VK'
    },
    {
        name: 'youtube',
        icon: '<i class="fab fa-youtube"></i>',
        url: `https://www.youtube.com/channel/UC7fJNxPHXCehijYpYc67mow`,
        text: 'Share on youtube'
    },
    {
        name: 'telegram',
        icon: '<i class="fab fa-telegram"></i>',
        url: `https://t.me/iro_eao`,
        text: 'Share on telegram'
    }
];

function renderSocialLinks() {
    const container = document.getElementById('ctl00_MainContent_socialLinks');
    if (!container) return;

    container.className = 'social-links';
    container.innerHTML = socialLinks.map(link => {
        const attrs = [];
        if (link.id) attrs.push(`id="${link.id}"`);
        if (link.rel) attrs.push(`rel="${link.rel}"`);
        if (link.target) attrs.push(`target="${link.target}"`);
        const attrStr = attrs.length ? ' ' + attrs.join(' ') : '';

        return `<div class="share-button ${link.name}" dir="ltr">
            <a href="${link.url}"${attrStr}>${link.icon}</a>
        </div>`;
    }).join('');
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', renderSocialLinks);