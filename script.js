/* ============================================
   Mock Data
   ============================================ */

const creators = [
    { name: 'Sarah Chen', handle: '@sarahpins', avatar: 1 },
    { name: 'Marcus Williams', handle: '@marcusmade', avatar: 2 },
    { name: 'Elena Rodriguez', handle: '@elenastudio', avatar: 3 },
    { name: 'James Park', handle: '@parkframes', avatar: 4 },
    { name: 'Amara Okafor', handle: '@amarafinds', avatar: 5 },
    { name: 'Lucas Silva', handle: '@lucasvisuals', avatar: 6 },
    { name: 'Sophie Laurent', handle: '@sophielaurent', avatar: 7 },
    { name: 'Raj Patel', handle: '@rajcollects', avatar: 8 },
    { name: 'Isabella Monaco', handle: '@bellamonaco', avatar: 9 },
    { name: 'David Kim', handle: '@davidcurates', avatar: 10 },
    { name: 'Olivia Banks', handle: '@oliviabanks', avatar: 11 },
    { name: 'Adrian Cross', handle: '@adriancross', avatar: 12 },
    { name: 'Nina Bergstrom', handle: '@ninasees', avatar: 13 },
    { name: 'Cairo Johnson', handle: '@cairovisual', avatar: 14 },
    { name: 'Mia Torres', handle: '@miatorres', avatar: 15 }
];

const imageCollections = [
    { id: 'silk-editorial', category: 'fashion', title: 'Silk editorial layers', width: 720, height: 1080 },
    { id: 'coastal-villa', category: 'architecture', title: 'Coastal villa courtyard', width: 960, height: 1200 },
    { id: 'gallery-wall', category: 'art', title: 'Collected gallery wall', width: 900, height: 900 },
    { id: 'desert-resort', category: 'travel', title: 'Desert resort horizon', width: 960, height: 540 },
    { id: 'orchid-room', category: 'lifestyle', title: 'Orchid room ritual', width: 720, height: 1280 },
    { id: 'marble-stairs', category: 'luxury', title: 'Marble stair moment', width: 840, height: 1120 },
    { id: 'forest-path', category: 'nature', title: 'Forest path study', width: 900, height: 1200 },
    { id: 'street-style', category: 'fashion', title: 'Street style neutral', width: 900, height: 1125 },
    { id: 'glass-house', category: 'architecture', title: 'Glass house morning', width: 960, height: 640 },
    { id: 'abstract-study', category: 'art', title: 'Abstract color study', width: 720, height: 1080 },
    { id: 'morning-table', category: 'lifestyle', title: 'Morning table setup', width: 900, height: 900 },
    { id: 'alpine-hotel', category: 'travel', title: 'Alpine hotel window', width: 720, height: 1280 },
    { id: 'velvet-suite', category: 'luxury', title: 'Velvet suite palette', width: 900, height: 1200 },
    { id: 'botanical-light', category: 'nature', title: 'Botanical light study', width: 960, height: 1200 },
    { id: 'tailored-coat', category: 'fashion', title: 'Tailored coat silhouette', width: 960, height: 540 },
    { id: 'courtyard-lines', category: 'architecture', title: 'Courtyard lines', width: 720, height: 1080 },
    { id: 'ceramic-shelf', category: 'art', title: 'Ceramic shelf edit', width: 900, height: 1125 },
    { id: 'island-window', category: 'travel', title: 'Island window light', width: 900, height: 900 },
    { id: 'linen-bedroom', category: 'lifestyle', title: 'Linen bedroom mood', width: 720, height: 1280 },
    { id: 'jewel-detail', category: 'luxury', title: 'Jewel detail macro', width: 900, height: 1200 },
    { id: 'mist-valley', category: 'nature', title: 'Mist valley overlook', width: 960, height: 540 },
    { id: 'runway-motion', category: 'fashion', title: 'Runway motion blur', width: 720, height: 1080 },
    { id: 'concrete-loft', category: 'architecture', title: 'Concrete loft calm', width: 960, height: 1200 },
    { id: 'ink-texture', category: 'art', title: 'Ink texture fragments', width: 900, height: 900 },
    { id: 'market-lane', category: 'travel', title: 'Market lane afternoon', width: 900, height: 1125 },
    { id: 'coffee-corner', category: 'lifestyle', title: 'Coffee corner edit', width: 960, height: 640 },
    { id: 'poolside-gold', category: 'luxury', title: 'Poolside gold hour', width: 720, height: 1280 },
    { id: 'wild-coast', category: 'nature', title: 'Wild coast texture', width: 900, height: 1200 },
    { id: 'atelier-fit', category: 'fashion', title: 'Atelier fitting notes', width: 900, height: 900 },
    { id: 'arched-facade', category: 'architecture', title: 'Arched facade study', width: 720, height: 1080 },
    { id: 'museum-light', category: 'art', title: 'Museum light passage', width: 960, height: 1200 },
    { id: 'train-window', category: 'travel', title: 'Train window view', width: 960, height: 540 },
    { id: 'quiet-kitchen', category: 'lifestyle', title: 'Quiet kitchen shelf', width: 900, height: 1125 },
    { id: 'watch-macro', category: 'luxury', title: 'Watch macro detail', width: 900, height: 900 },
    { id: 'canyon-shadow', category: 'nature', title: 'Canyon shadow walk', width: 720, height: 1280 },
    { id: 'monochrome-look', category: 'fashion', title: 'Monochrome lookbook', width: 960, height: 1200 },
    { id: 'minimal-room', category: 'architecture', title: 'Minimal room balance', width: 900, height: 1125 },
    { id: 'painted-paper', category: 'art', title: 'Painted paper shapes', width: 960, height: 640 },
    { id: 'old-town-steps', category: 'travel', title: 'Old town steps', width: 720, height: 1080 },
    { id: 'sunlit-ritual', category: 'lifestyle', title: 'Sunlit daily ritual', width: 900, height: 900 },
    { id: 'crystal-lobby', category: 'luxury', title: 'Crystal lobby lines', width: 960, height: 540 },
    { id: 'rain-garden', category: 'nature', title: 'Rain garden calm', width: 900, height: 1200 }
];

const categories = ['all', 'fashion', 'lifestyle', 'travel', 'architecture', 'luxury', 'art', 'nature'];
const savedPinIds = new Set([2, 5, 9, 14, 18, 23, 29, 36]);
const likedPinIds = new Set([1, 3, 6, 12, 20, 26, 31, 40]);

// Mock follow state (by creator handle)
const followedCreatorHandles = new Set(['@sarahpins', '@parkframes', '@lucasvisuals']);

function generateMockCards() {
    return imageCollections.map((imageData, index) => {
        const creator = creators[index % creators.length];
        const imageUrl = `https://picsum.photos/seed/pinpin-${imageData.id}/${imageData.width}/${imageData.height}`;

        return {
            id: index + 1,
            title: imageData.title,
            image: imageUrl,
            width: imageData.width,
            height: imageData.height,
            creator,
            likes: Math.floor(((index + 7) * 731) % 9000) + 420,
            saves: Math.floor(((index + 11) * 347) % 4200) + 180,
            category: imageData.category,
            description: `A ${imageData.category} reference collected for moodboards, visual planning, and future ideas.`
        };
    });
}

const pins = generateMockCards();
const appRoot = document.getElementById('appRoot');
const searchInput = document.querySelector('.search-input');
const bottomNavBtns = document.querySelectorAll('.bottom-nav-btn');
const logo = document.querySelector('.logo');
const createNavBtn = document.querySelector('.create-btn');
const notificationsBtn = document.querySelector('.notifications-btn');
const profileNavBtn = document.querySelector('.profile-btn');

let activeSearchTerm = '';
let activeCategory = 'all';

// Auth state (in-memory)
const authState = {
    status: 'unknown', // 'unknown' | 'authenticated' | 'guest'
    user: null
};

function isAuthenticated() {
    return authState.status === 'authenticated' && !!authState.user?.id;
}

async function apiFetchJson(url, options = {}) {
    const res = await fetch(url, {
        ...options,
        headers: {
            ...(options.headers || {})
        },
        credentials: 'include'
    });

    let body = null;
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) body = await res.json().catch(() => null);
    else body = await res.text().catch(() => null);

    return { res, body };
}

async function refreshAuth() {
    try {
        const { res, body } = await apiFetchJson('/api/auth/me', { method: 'GET' });
        if (res.ok && body?.user?.id) {
            authState.status = 'authenticated';
            authState.user = body.user;
        } else {
            authState.status = 'guest';
            authState.user = null;
        }
    } catch {
        authState.status = 'guest';
        authState.user = null;
    }
}

function requireAuthOrRedirect(targetRoute) {
    if (isAuthenticated()) return true;
    // keep routing architecture: use hash routes
    navigateTo(`/login?next=${encodeURIComponent(targetRoute || window.location.hash)}`);
    return false;
}

function getNextRouteFromQuery() {
    try {
        const hash = window.location.hash || '';
        const queryIndex = hash.indexOf('?');
        if (queryIndex === -1) return null;
        const query = hash.slice(queryIndex + 1);
        const params = new URLSearchParams(query);
        return params.get('next');
    } catch {
        return null;
    }
}

/* ============================================
   Routing
   ============================================ */

function getRoute() {
    const rawHash = window.location.hash.replace(/^#\/?/, '');
    const [path = '', query = ''] = rawHash.split('?');
    const [page = 'home', id] = path.split('/');
    return { page: page || 'home', id, query };
}

function navigateTo(route) {
    window.location.hash = route;
}

function renderRoute() {
    const { page, id } = getRoute();
    const routes = {
        home: renderHomePage,
        search: renderSearchPage,
        login: renderLoginPage,
        register: renderRegisterPage,
        create: () => requireAuthOrRedirect('/create') && renderCreatePage(),
        activity: () => requireAuthOrRedirect('/activity') && renderActivityPage(),
        profile: () => requireAuthOrRedirect('/profile') && renderProfilePage(),
        settings: () => requireAuthOrRedirect('/settings') && renderSettingsPage()
    };

    if (page === 'pin') {
        renderImageDetailPage(Number(id));
    } else {
        (routes[page] || renderHomePage)();
    }

    updateActiveNav(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateActiveNav(page) {
    const activePage = page === 'pin' ? '' : page;

    // Only bottom-nav highlights for the base pages; login/register/settings are top-level pages.
    bottomNavBtns.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.nav === activePage);
    });
}

/* ============================================
   Page Renderers
   ============================================ */

function renderHomePage() {
    const featuredCreator = creators.find((c) => c.handle === '@miatorres') || creators[0];

    const filters = [
        { label: '✨ Recommended', category: 'all' },
        { label: '🔥 Trending', category: 'all' },
        { label: '🌸 Anime', category: 'art' },
        { label: '🎮 Gaming', category: 'art' },
        { label: '🏙 Cyberpunk', category: 'art' },
        { label: '🏰 Fantasy', category: 'art' },
        { label: '🌄 Landscape', category: 'nature' },
        { label: '👗 Fashion', category: 'fashion' },
        { label: '🤖 Sci-Fi', category: 'art' },
        { label: '❤️ Following', category: 'all' }
    ];

    const creationsTodayCount = '12,487';

    appRoot.innerHTML = `
        <section class="page-shell yume-home-hero-section" aria-label="Yume home hero">
            <div class="yume-home-hero-glass surface-panel">
                <div class="yume-home-hero-content">
                    <div class="yume-home-hero-brand" aria-label="Yume brand">
                        <div class="yume-home-hero-logo" aria-hidden="true">Yume</div>
                        <div class="yume-home-hero-dream">Dream. Create. Inspire.</div>
                    </div>

                    <p class="yume-home-hero-tagline">
                        A beautiful place where AI creators generate, share and discover extraordinary artwork.
                    </p>

                    <div class="yume-home-hero-ctas" aria-label="Primary actions">
                        <button class="yume-hero-primary" type="button" data-hero-primary>
                            ✨ Generate AI Art
                        </button>
                        <button class="yume-hero-secondary" type="button" data-hero-secondary>
                            🌸 Explore Creations
                        </button>
                    </div>
                </div>

                <div class="yume-home-hero-bloom" aria-hidden="true"></div>
            </div>

            <section class="yume-home-hero-block yume-home-hero-trending" aria-label="Trending styles">
                <h2 class="yume-home-block-title">Trending</h2>
                <div class="yume-home-chip-row" role="list" aria-label="Trending styles chips">
                    <span class="yume-chip" role="listitem">#AnimeGirls</span>
                    <span class="yume-chip" role="listitem">#Fantasy</span>
                    <span class="yume-chip" role="listitem">#Cyberpunk</span>
                    <span class="yume-chip" role="listitem">#Dreamcore</span>
                    <span class="yume-chip" role="listitem">#Cute</span>
                    <span class="yume-chip" role="listitem">#ShrineMaiden</span>
                    <span class="yume-chip" role="listitem">#Landscape</span>
                    <span class="yume-chip" role="listitem">#Fashion</span>
                </div>
            </section>
        </section>

        <!-- Feed Header + Visual Filter Bar (above masonry feed) -->
        <section class="grid-container yume-feed-shell" aria-label="Feed header and filters">
            <header class="yume-feed-header">
                <div class="yume-feed-header-left">
                    <div class="yume-feed-title">Discover today's most inspiring AI creations</div>
                    <div class="yume-feed-subtitle">${creationsTodayCount} creations today</div>
                </div>
            </header>

            <div class="yume-feed-filters h-scroll" aria-label="Feed filters">
                <div class="yume-feed-filter-track">
                    ${filters.map((f) => `<button type="button" class="yume-filter-chip" data-home-filter="${f.category}">${f.label}</button>`).join('')}
                </div>
            </div>

            <!-- Existing masonry feed (preserved as-is) -->
            <div class="masonry-grid" id="masonryGrid"></div>
        </section>
    `;

    appRoot.querySelector('[data-hero-primary]')?.addEventListener('click', () => {
        if (requireAuthOrRedirect('/create')) navigateTo('/create');
    });
    appRoot.querySelector('[data-hero-secondary]')?.addEventListener('click', () => {
        activeCategory = 'all';
        navigateTo('/search');
    });
    appRoot.querySelectorAll('[data-home-filter]').forEach((button) => {
        button.addEventListener('click', () => {
            activeCategory = button.dataset.homeFilter || 'all';
            activeSearchTerm = '';
            searchInput.value = '';
            navigateTo('/search');
        });
    });

    renderCards(pins, document.getElementById('masonryGrid'));
}

function renderSearchPage() {
    const filteredPins = filterPins(activeSearchTerm, activeCategory);

    const trending = [
        { title: 'Luxury Living', seed: 'trending-luxury-living', category: 'luxury' },
        { title: 'Dream Bedrooms', seed: 'trending-dream-bedrooms', category: 'lifestyle' },
        { title: 'Fashion Inspiration', seed: 'trending-fashion-inspiration', category: 'fashion' },
        { title: 'Travel Escapes', seed: 'trending-travel-escapes', category: 'travel' },
        { title: 'Modern Architecture', seed: 'trending-modern-architecture', category: 'architecture' },
        { title: 'Fantasy Worlds', seed: 'trending-fantasy-worlds', category: 'art' }
    ];

    const featuredCollections = [
        { title: 'The Art of Luxury Living', seed: 'featured-luxury-living', category: 'luxury' },
        { title: 'Cozy Interior Spaces', seed: 'featured-cozy-interiors', category: 'lifestyle' },
        { title: 'Dream Travel Destinations', seed: 'featured-travel-dreams', category: 'travel' },
        { title: 'Modern Fashion Trends', seed: 'featured-modern-fashion', category: 'fashion' }
    ];

    const browseCategories = [
        { title: 'Fashion', category: 'fashion', seed: 'browse-fashion' },
        { title: 'Lifestyle', category: 'lifestyle', seed: 'browse-lifestyle' },
        { title: 'Travel', category: 'travel', seed: 'browse-travel' },
        { title: 'Luxury', category: 'luxury', seed: 'browse-luxury' },
        { title: 'Nature', category: 'nature', seed: 'browse-nature' },
        { title: 'Architecture', category: 'architecture', seed: 'browse-architecture' },
        { title: 'Fantasy', category: 'art', seed: 'browse-fantasy' },
        { title: 'Art', category: 'art', seed: 'browse-art' }
    ];

    appRoot.innerHTML = `
        <section class="page-shell">
            <header class="page-header">
                <div>
                    <h1 class="page-title">Search creations</h1>
                    <p class="page-subtitle">${filteredPins.length} creations in the mock feed</p>
                </div>
            </header>

            <!-- Discovery: Trending -->
            <section class="discovery-section">
                <div class="section-header">
                    <h2 class="section-title">Trending Creations</h2>
                    <p class="page-subtitle">Fresh inspiration to spark your next collection</p>
                </div>

                <div class="h-scroll" aria-label="Trending ideas">
                    <div class="h-scroll-track">
                        ${trending.slice(0, 6).map((item) => `
                            <article class="trend-card" tabindex="0" aria-label="${item.title}">
                                <div class="trend-bg">
                                    <img
                                        class="trend-image"
                                        loading="lazy"
                                        decoding="async"
                                        src="https://picsum.photos/seed/${item.seed}/900/520"
                                        alt="${item.title}"
                                    />
                                    <div class="trend-overlay">
                                        <span class="trend-pill">${capitalize(item.category)}</span>
                                        <h3 class="trend-title">${item.title}</h3>
                                    </div>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Discovery: Featured Collections -->
            <section class="discovery-section">
                <div class="section-header">
                    <h2 class="section-title">Featured Collections</h2>
                    <p class="page-subtitle">Editorial picks curated from the mock universe</p>
                </div>

                <div class="h-scroll" aria-label="Featured collections">
                    <div class="h-scroll-track">
                        ${featuredCollections.slice(0, 4).map((item) => `
                            <article class="collection-card" tabindex="0" aria-label="${item.title}">
                                <div class="collection-bg">
                                    <img
                                        class="collection-image"
                                        loading="lazy"
                                        decoding="async"
                                        src="https://picsum.photos/seed/${item.seed}/980/560"
                                        alt="${item.title}"
                                    />
                                    <div class="collection-overlay">
                                        <span class="collection-kicker">${capitalize(item.category)} collection</span>
                                        <h3 class="collection-title">${item.title}</h3>
                                        <button class="collection-cta" type="button" tabindex="-1">Explore</button>
                                    </div>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Discovery: Browse Categories -->
            <section class="discovery-section">
                <div class="section-header">
                    <h2 class="section-title">Browse Categories</h2>
                    <p class="page-subtitle">Choose a mood—then dive into the feed below</p>
                </div>

                <div class="category-grid" aria-label="Browse categories">
                    ${browseCategories.map((item) => `
                        <article class="category-thumb-card surface-panel" tabindex="0" data-category="${item.category}" aria-label="${item.title}">
                            <div class="category-thumb">
                                <img
                                    class="category-thumb-image"
                                    loading="lazy"
                                    decoding="async"
                                    src="https://picsum.photos/seed/${item.seed}/520/520"
                                    alt="${item.title}"
                                />
                                <div class="category-thumb-overlay">
                                    <span class="category-thumb-name">${item.title}</span>
                                </div>
                            </div>
                        </article>
                    `).join('')}
                </div>
            </section>

            <!-- Existing masonry feed (final section) -->
            ${filteredPins.length
                ? `<div class="masonry-grid" id="masonryGrid"></div>`
                : `<div class="empty-state surface-panel">No creations match this search yet.</div>`}
        </section>
    `;

    const grid = document.getElementById('masonryGrid');
    if (grid) renderCards(filteredPins, grid);
}

function renderCreatePage() {
    appRoot.innerHTML = `
        <section class="page-shell">
            <header class="page-header">
                <div>
                    <h1 class="page-title">Create</h1>
                    <p class="page-subtitle">Mock publishing flow for a new visual idea</p>
                </div>
            </header>
            <div class="create-layout">
                <div class="upload-zone surface-panel">
                    <div>
                        <div class="upload-icon">
                            <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                                <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <h2 class="section-title">Add an image</h2>
                        <p class="page-subtitle">This static prototype uses mock data, so uploads are represented as a preview flow.</p>
                    </div>
                </div>
                <form class="mock-form surface-panel">
                    <div class="mock-field">
                        <label for="pinTitle">Title</label>
                        <input id="pinTitle" value="Weekend moodboard detail" />
                    </div>
                    <div class="mock-field">
                        <label for="pinDescription">Description</label>
                        <textarea id="pinDescription">A saved visual reference for styling, travel plans, and future collections.</textarea>
                    </div>
                    <div class="mock-field">
                        <label for="pinCategory">Category</label>
                        <select id="pinCategory">
                            ${categories.filter((category) => category !== 'all').map((category) => `<option>${capitalize(category)}</option>`).join('')}
                        </select>
                    </div>
                    <button class="primary-action" type="button">Preview creation</button>
                </form>
            </div>
        </section>
    `;
}

function renderActivityPage() {
    const activityGroups = [
        {
            label: 'Today',
            items: [
                { pin: pins[0], action: 'saved one of your fashion references', time: '8m ago', preview: false },
                { pin: pins[4], action: 'liked your lifestyle collection', time: '24m ago', preview: false },
                { pin: pins[7], action: 'started following your style collection', time: '1h ago', preview: false },
                { pin: pins[12], action: 'added your creation to Luxury edits', time: '2h ago', preview: true }
            ]
        },
        {
            label: 'Yesterday',
            items: [
                { pin: pins[15], action: 'saved an architecture idea from your collection', time: 'Yesterday', preview: false },
                { pin: pins[18], action: 'liked your quiet bedroom reference', time: 'Yesterday', preview: false },
                { pin: pins[21], action: 'shared your runway inspiration', time: 'Yesterday', preview: false }
            ]
        },
        {
            label: 'Earlier',
            items: [
                { pin: pins[24], action: 'added your travel creation to Weekend plans', time: 'Mon', preview: false },
                { pin: pins[29], action: 'followed your architecture collection', time: 'Sun', preview: false },
                { pin: pins[32], action: 'saved your kitchen shelf idea', time: 'Sat', preview: false },
                { pin: pins[36], action: 'liked a room reference you saved', time: 'Fri', preview: true }
            ]
        }
    ];

    appRoot.innerHTML = `
        <section class="page-shell activity-page">
            <header class="page-header activity-header">
                <div>
                    <h1 class="page-title">Activity</h1>
                    <p class="page-subtitle">Recent saves, likes, and creator updates</p>
                </div>
            </header>
            <div class="activity-feed">
                ${activityGroups.map((group) => `
                    <section class="activity-group" aria-label="${group.label}">
                        <h2 class="activity-group-title">${group.label}</h2>
                        <div class="activity-list">
                            ${group.items.map(({ pin, action, time, preview }) => `
                                <article class="activity-item surface-panel" data-pin-id="${pin.id}">
                                    <img class="activity-avatar" src="https://i.pravatar.cc/96?img=${pin.creator.avatar}" alt="${pin.creator.name}">
                                    <div class="activity-copy">
                                        <p><strong>${pin.creator.name}</strong> ${action}.</p>
                                        <time>${time}</time>
                                    </div>
                                    ${preview ? `<img class="activity-thumb" src="${pin.image}" alt="${pin.title}">` : ''}
                                </article>
                            `).join('')}
                        </div>
                    </section>
                `).join('')}
            </div>
        </section>
    `;
}

function renderLoginPage() {
    const nextRoute = getNextRouteFromQuery() || '/home';

    appRoot.innerHTML = `
        <section class="page-shell">
            <header class="page-header">
                <div>
                    <h1 class="page-title">Welcome back</h1>
                    <p class="page-subtitle">Sign in to like, save, follow, and create.</p>
                </div>
            </header>

            <div class="auth-card surface-panel">
                <div class="auth-tabs" role="tablist" aria-label="Auth mode">
                    <button class="auth-tab-btn active" type="button" data-auth-tab="login">Login</button>
                    <button class="auth-tab-btn" type="button" data-auth-tab="register">Register</button>
                </div>

                <form class="auth-form" data-auth-form="login" aria-label="Login form">
                    <div class="mock-field">
                        <label for="loginEmail">Email</label>
                        <input id="loginEmail" type="email" placeholder="you@example.com" />
                    </div>
                    <div class="mock-field">
                        <label for="loginPassword">Password</label>
                        <input id="loginPassword" type="password" placeholder="••••••••" />
                    </div>

                    <button class="primary-action" type="submit">Login</button>
                </form>

                <p class="auth-hint">This prototype uses real auth endpoints but keeps browsing public.</p>

                <div class="auth-footer">
                    <button class="secondary-action" type="button" data-go-register>Go to Register</button>
                    <button class="secondary-action" type="button" data-go-home>Continue browsing</button>
                </div>
            </div>

            <div class="auth-next" style="display:none" data-next-route="${nextRoute}"></div>
        </section>
    `;

    appRoot.querySelectorAll('[data-auth-tab]').forEach((btn) => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.authTab;
            if (tab === 'register') navigateTo('/register');
        });
    });

    appRoot.querySelector('[data-go-register]').addEventListener('click', () => navigateTo('/register'));
    appRoot.querySelector('[data-go-home]').addEventListener('click', () => navigateTo('/home'));

    const form = appRoot.querySelector('[data-auth-form="login"]');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = appRoot.querySelector('#loginEmail').value.trim();
        const password = appRoot.querySelector('#loginPassword').value;

        const { res } = await apiFetchJson('/api/auth/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (res.ok) {
            await refreshAuth();
            const nextEl = appRoot.querySelector('.auth-next');
            const next = nextEl?.dataset?.nextRoute || '/home';
            window.location.hash = next;
            renderRoute();
        } else {
            alert('Login failed. Check your credentials.');
        }
    });
}

function renderRegisterPage() {
    const nextRoute = getNextRouteFromQuery() || '/home';

    appRoot.innerHTML = `
        <section class="page-shell">
            <header class="page-header">
                <div>
                    <h1 class="page-title">Create your account</h1>
                    <p class="page-subtitle">Sign up to start saving and following creators.</p>
                </div>
            </header>

            <div class="auth-card surface-panel">
                <div class="auth-tabs" role="tablist" aria-label="Auth mode">
                    <button class="auth-tab-btn" type="button" data-auth-tab="login">Login</button>
                    <button class="auth-tab-btn active" type="button" data-auth-tab="register">Register</button>
                </div>

                <form class="auth-form" data-auth-form="register" aria-label="Register form">
                    <div class="mock-field">
                        <label for="registerUsername">Username</label>
                        <input id="registerUsername" type="text" placeholder="yourhandle" />
                    </div>

                    <div class="mock-field">
                        <label for="registerEmail">Email</label>
                        <input id="registerEmail" type="email" placeholder="you@example.com" />
                    </div>

                    <div class="mock-field">
                        <label for="registerPassword">Password</label>
                        <input id="registerPassword" type="password" placeholder="Create a password" />
                    </div>

                    <button class="primary-action" type="submit">Register</button>
                </form>

                <div class="auth-footer">
                    <button class="secondary-action" type="button" data-go-login>Go to Login</button>
                    <button class="secondary-action" type="button" data-go-home>Continue browsing</button>
                </div>
            </div>

            <div class="auth-next" style="display:none" data-next-route="${nextRoute}"></div>
        </section>
    `;

    appRoot.querySelector('[data-go-login]').addEventListener('click', () => navigateTo('/login'));
    appRoot.querySelector('[data-go-home]').addEventListener('click', () => navigateTo('/home'));

    const form = appRoot.querySelector('[data-auth-form="register"]');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = appRoot.querySelector('#registerUsername').value.trim();
        const email = appRoot.querySelector('#registerEmail').value.trim();
        const password = appRoot.querySelector('#registerPassword').value;

        const { res } = await apiFetchJson('/api/auth/register', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        if (res.ok) {
            await refreshAuth();
            const nextEl = appRoot.querySelector('.auth-next');
            const next = nextEl?.dataset?.nextRoute || '/home';
            window.location.hash = next;
            renderRoute();
        } else {
            alert('Register failed. Ensure username/email are unique and fields are valid.');
        }
    });
}

function renderSettingsPage() {
    appRoot.innerHTML = `
        <section class="page-shell">
            <header class="page-header">
                <div>
                    <h1 class="page-title">Settings</h1>
                    <p class="page-subtitle">Mock settings page (auth-protected).</p>
                </div>
            </header>

            <div class="surface-panel" style="padding:20px;border-radius:18px;box-shadow:0 4px 18px rgba(0,0,0,0.04);">
                <p class="page-subtitle" style="margin-bottom:16px">
                    Signed in as <strong>${authState.user?.username || 'user'}</strong>
                </p>

                <button class="secondary-action" type="button" data-logout>Logout</button>
            </div>
        </section>
    `;

    appRoot.querySelector('[data-logout]').addEventListener('click', async () => {
        await apiFetchJson('/api/auth/logout', { method: 'POST' });
        await refreshAuth();
        navigateTo('/home');
        renderRoute();
    });
}

function renderProfilePage() {
    const profileCreator = creators.find((c) => c.handle === '@miatorres') || creators[0];

    const creationsPins = pins.filter((pin) => pin.creator.handle === profileCreator.handle);
    const savedPins = creationsPins.filter((pin) => savedPinIds.has(pin.id));
    const likedPins = creationsPins.filter((pin) => likedPinIds.has(pin.id));

    const mockFollowers = 2400;
    const mockFollowing = 321;
    const mockCreationsCount = creationsPins.length;

    const tabLabels = {
        creations: 'Creations',
        saved: 'Saved',
        liked: 'Liked'
    };

    let activeProfileTab = 'creations';

    appRoot.innerHTML = `
        <section class="page-shell">
            <header class="profile-hero surface-panel" aria-label="Creator profile">
                <div class="profile-hero-left">
                    <img
                        class="profile-avatar-xl"
                        src="https://i.pravatar.cc/220?img=${profileCreator.avatar}"
                        alt="${profileCreator.name}"
                    />
                </div>

                <div class="profile-hero-right">
                    <div class="profile-identity">
                        <div class="profile-name-xl">${profileCreator.name}</div>
                        <div class="profile-handle-xl">${profileCreator.handle}</div>
                        <p class="profile-bio">
                            Digital artist sharing luxury interiors, travel inspiration and visual stories.
                        </p>
                    </div>

                    <div class="profile-actions-row" aria-label="Profile actions">
                        <button class="secondary-action" type="button">Edit Profile</button>
                        <button class="secondary-action" type="button">Share Profile</button>
                    </div>

                    <div class="profile-stats-row" aria-label="Profile statistics">
                        <div class="profile-stat-pill">
                            <div class="profile-stat-value">${formatNumber(mockFollowers)}</div>
                            <div class="profile-stat-label">Followers</div>
                        </div>
                        <div class="profile-stat-pill">
                            <div class="profile-stat-value">${formatNumber(mockFollowing)}</div>
                            <div class="profile-stat-label">Following</div>
                        </div>
                        <div class="profile-stat-pill">
                            <div class="profile-stat-value">${formatNumber(mockCreationsCount)}</div>
                            <div class="profile-stat-label">Creations</div>
                        </div>
                    </div>

                    <div class="profile-tabs" role="tablist" aria-label="Profile tabs">
                        <button class="profile-tab-btn ${activeProfileTab === 'creations' ? 'active' : ''}" type="button" data-profile-tab="creations">
                            ${tabLabels.creations}
                        </button>
                        <button class="profile-tab-btn ${activeProfileTab === 'saved' ? 'active' : ''}" type="button" data-profile-tab="saved">
                            ${tabLabels.saved}
                        </button>
                        <button class="profile-tab-btn ${activeProfileTab === 'liked' ? 'active' : ''}" type="button" data-profile-tab="liked">
                            ${tabLabels.liked}
                        </button>
                    </div>
                </div>
            </header>

            <header class="page-header profile-list-header">
                <div>
                    <h1 class="page-title" id="profileListTitle">Creations</h1>
                    <p class="page-subtitle" id="profileListSubtitle">All pins published by this creator (mock).</p>
                </div>
            </header>

            <div class="masonry-grid" id="masonryGrid" aria-label="Creator pins"></div>
        </section>
    `;

    const grid = document.getElementById('masonryGrid');

    function renderActiveTab() {
        const profileTabTitle = document.getElementById('profileListTitle');
        const profileTabSubtitle = document.getElementById('profileListSubtitle');

        if (activeProfileTab === 'creations') {
            profileTabTitle.textContent = 'Creations';
            profileTabSubtitle.textContent = 'All pins published by this creator (mock).';
            renderCards(creationsPins, grid);
        }

        if (activeProfileTab === 'saved') {
            profileTabTitle.textContent = 'Saved';
            profileTabSubtitle.textContent = 'Pins saved by this creator (mock intersection).';
            renderCards(savedPins, grid);
        }

        if (activeProfileTab === 'liked') {
            profileTabTitle.textContent = 'Liked';
            profileTabSubtitle.textContent = 'Pins liked by this creator (mock intersection).';
            renderCards(likedPins, grid);
        }
    }

    appRoot.querySelectorAll('[data-profile-tab]').forEach((btn) => {
        btn.addEventListener('click', () => {
            activeProfileTab = btn.dataset.profileTab;

            appRoot.querySelectorAll('[data-profile-tab]').forEach((b) => {
                b.classList.toggle('active', b === btn);
            });

            renderActiveTab();
        });
    });

    renderActiveTab();

    const logoutBtn = document.createElement('button');
    logoutBtn.type = 'button';
    logoutBtn.className = 'secondary-action';
    logoutBtn.textContent = 'Logout';
    logoutBtn.style.marginTop = '16px';
    logoutBtn.addEventListener('click', async () => {
        await apiFetchJson('/api/auth/logout', { method: 'POST' });
        await refreshAuth();
        navigateTo('/home');
        renderRoute();
    });

    const hero = appRoot.querySelector('.profile-hero');
    if (hero) hero.appendChild(logoutBtn);
}

function renderImageDetailPage(pinId) {
    const pin = pins.find((item) => item.id === pinId) || pins[0];

    const relatedPins = pins
        .filter((item) => item.category === pin.category && item.id !== pin.id)
        .concat(pins.filter((item) => item.id !== pin.id))
        .slice(0, 10);

    const relatedCreatorPin = pins.find((p) => p.creator.handle !== pin.creator.handle) || pins[0];
    const suggestedCreator = relatedCreatorPin.creator;

    const isLiked = likedPinIds.has(pin.id);
    const isSaved = savedPinIds.has(pin.id);
    const isFollowing = followedCreatorHandles.has(pin.creator.handle);
    const isSuggestedFollowing = followedCreatorHandles.has(suggestedCreator.handle);

    const detailTags = [
        capitalize(pin.category),
        'Fashion',
        'Luxury',
        'Travel',
        'Lifestyle',
        'Architecture',
        'Fantasy'
    ];

    const engagementLikes = formatNumber(pin.likes);
    const engagementSaves = formatNumber(pin.saves);

    appRoot.innerHTML = `
        <section class="page-shell detail-shell">
            <article class="detail-split surface-panel">
                <div class="detail-left">
                    <div class="detail-image-wrap">
                        <img class="detail-image" src="${pin.image}" alt="${pin.title}">
                    </div>
                </div>

                <div class="detail-right">
                    <div class="detail-topbar">
                        <button class="back-btn" type="button" data-back aria-label="Back">
                            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                                <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    <section class="creator-card" aria-label="Creator">
                        <div class="creator-row">
                            <img class="creator-avatar" src="https://i.pravatar.cc/88?img=${pin.creator.avatar}" alt="${pin.creator.name}">
                            <div class="creator-copy">
                                <div class="creator-name">${pin.creator.name}</div>
                                <div class="creator-handle">${pin.creator.handle}</div>
                            </div>
                        </div>

                        <button class="follow-btn follow-creator ${isFollowing ? 'active' : ''}" type="button" data-follow>
                            ${isFollowing ? 'Following' : 'Follow'}
                        </button>
                    </section>

                    <section class="engagement-panel" aria-label="Engagement">
                        <button class="engagement-btn like-btn ${isLiked ? 'active' : ''}" type="button" data-like>
                            <span class="engagement-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="18" height="18">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
                                </svg>
                            </span>
                            <span class="engagement-text">
                                <span class="action-label">Like</span>
                                <span class="engagement-count">❤️ ${engagementLikes} Likes</span>
                            </span>
                        </button>

                        <button class="engagement-btn save-btn ${isSaved ? 'active' : ''}" type="button" data-save>
                            <span class="engagement-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="18" height="18">
                                    <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2h9A2.5 2.5 0 0 1 19 4.5V22l-7-4-7 4V4.5z" fill="currentColor"/>
                                </svg>
                            </span>
                            <span class="engagement-text">
                                <span class="action-label">${isSaved ? 'Saved' : 'Save'}</span>
                                <span class="engagement-count">📌 ${engagementSaves} Saves</span>
                            </span>
                        </button>
                    </section>

                    <section class="image-info" aria-label="Image information">
                        <h1 class="detail-title">${pin.title}</h1>
                        <p class="detail-description">${pin.description}</p>
                    </section>

                    <section class="tag-section" aria-label="Tags">
                        <div class="tag-row">
                            ${detailTags.slice(0, 4).map((t) => `<button class="tag-chip" type="button" tabindex="-1">${t}</button>`).join('')}
                        </div>
                    </section>

                    <section class="related-creator-card" aria-label="Related creator">
                        <div class="related-creator-top">
                            <div class="related-creator-label">Suggested creator</div>
                        </div>
                        <div class="related-creator-row">
                            <img class="related-creator-avatar" src="https://i.pravatar.cc/84?img=${suggestedCreator.avatar}" alt="${suggestedCreator.name}">
                            <div class="related-creator-copy">
                                <div class="related-creator-name">${suggestedCreator.name}</div>
                                <div class="related-creator-handle">${suggestedCreator.handle}</div>
                            </div>
                        </div>
                        <button class="follow-btn follow-suggested ${isSuggestedFollowing ? 'active' : ''}" type="button" data-follow-suggested>
                            ${isSuggestedFollowing ? 'Following' : 'Follow'}
                        </button>
                    </section>
                </div>
            </article>

            <section class="related-section">
                <h2 class="section-title">More Like This</h2>
                <div class="masonry-grid" id="masonryGrid"></div>
            </section>
        </section>
    `;

    const followBtn = appRoot.querySelector('[data-follow]');
    const suggestedFollowBtn = appRoot.querySelector('[data-follow-suggested]');
    const likeBtn = appRoot.querySelector('[data-like]');
    const saveBtn = appRoot.querySelector('[data-save]');

    if (followBtn) {
        followBtn.addEventListener('click', () => {
            const followingNow = !followedCreatorHandles.has(pin.creator.handle);
            if (followingNow) followedCreatorHandles.add(pin.creator.handle);
            else followedCreatorHandles.delete(pin.creator.handle);

            followBtn.classList.toggle('active', followingNow);
            followBtn.textContent = followingNow ? 'Following' : 'Follow';
        });
    }

    if (suggestedFollowBtn) {
        suggestedFollowBtn.addEventListener('click', () => {
            const followingNow = !followedCreatorHandles.has(suggestedCreator.handle);
            if (followingNow) followedCreatorHandles.add(suggestedCreator.handle);
            else followedCreatorHandles.delete(suggestedCreator.handle);

            suggestedFollowBtn.classList.toggle('active', followingNow);
            suggestedFollowBtn.textContent = followingNow ? 'Following' : 'Follow';
        });
    }

    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            const likedNow = !likedPinIds.has(pin.id);
            if (likedNow) likedPinIds.add(pin.id);
            else likedPinIds.delete(pin.id);

            likeBtn.classList.toggle('active', likedNow);
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const savedNow = !savedPinIds.has(pin.id);
            if (savedNow) savedPinIds.add(pin.id);
            else savedPinIds.delete(pin.id);

            saveBtn.classList.toggle('active', savedNow);
            const label = saveBtn.querySelector('.action-label');
            if (label) label.textContent = savedNow ? 'Saved' : 'Save';
        });
    }

    renderCards(relatedPins, document.getElementById('masonryGrid'));
}

/* ============================================
   Cards
   ============================================ */

function renderCards(cards, container) {
    container.innerHTML = '';
    cards.forEach((card) => container.appendChild(createCardElement(card)));
}

function createCardElement(card) {
    const cardDiv = document.createElement('article');
    cardDiv.className = 'card';
    cardDiv.setAttribute('data-id', card.id);
    cardDiv.setAttribute('data-category', card.category);
    cardDiv.setAttribute('tabindex', '0');

    const imageContainer = document.createElement('div');
    imageContainer.className = 'card-image-container yume-premium-image-container';
    imageContainer.style.aspectRatio = `${card.width} / ${card.height}`;

    const img = document.createElement('img');
    img.className = 'card-image';
    img.alt = `${card.title} by ${card.creator.name}`;
    img.src = card.image;
    img.width = card.width;
    img.height = card.height;
    img.loading = 'lazy';
    img.decoding = 'async';

    // Overlay wrapper
    const overlay = document.createElement('div');
    overlay.className = 'card-overlay yume-card-overlay';

    // Top-left: AI badge
    const badgeAI = document.createElement('div');
    badgeAI.className = 'yume-card-ai-badge';
    badgeAI.textContent = '✨ AI Generated';

    // Top-right: like count (placeholder-like uses card.likes)
    const likeCountTop = document.createElement('div');
    likeCountTop.className = 'yume-card-like-count';
    likeCountTop.textContent = `♥ ${formatNumber(card.likes)}`;

    // Bottom overlay (glass)
    const bottomGlass = document.createElement('div');
    bottomGlass.className = 'yume-card-bottom-glass';

    const creatorRow = document.createElement('div');
    creatorRow.className = 'yume-card-creator-row';

    const avatar = document.createElement('img');
    avatar.className = 'yume-card-creator-avatar';
    avatar.alt = `${card.creator.name} avatar`;
    avatar.src = `https://i.pravatar.cc/72?img=${card.creator.avatar}`;

    const meta = document.createElement('div');
    meta.className = 'yume-card-creator-meta';

    const creatorName = document.createElement('div');
    creatorName.className = 'yume-card-creator-name';
    creatorName.textContent = card.creator.name;

    const creatorLevel = document.createElement('div');
    creatorLevel.className = 'yume-card-creator-level';
    creatorLevel.textContent = 'Level 24';

    meta.appendChild(creatorName);
    meta.appendChild(creatorLevel);

    creatorRow.appendChild(avatar);
    creatorRow.appendChild(meta);

    const styleChip = document.createElement('div');
    styleChip.className = 'yume-card-style-chip';
    styleChip.textContent = capitalize(card.category);

    bottomGlass.appendChild(creatorRow);
    bottomGlass.appendChild(styleChip);

    // Hover action bar (lightweight; actions fade/slide in; on mobile hidden by CSS)
    const actionsBar = document.createElement('div');
    actionsBar.className = 'yume-card-actions-bar';

    // Remix (visual-only)
    const remixBtn = document.createElement('button');
    remixBtn.type = 'button';
    remixBtn.className = 'yume-card-action-btn yume-card-action-remix';
    remixBtn.textContent = '✨ Remix';
    remixBtn.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Prompt (visual-only)
    const promptBtn = document.createElement('button');
    promptBtn.type = 'button';
    promptBtn.className = 'yume-card-action-btn yume-card-action-prompt';
    promptBtn.textContent = '📄 Prompt';
    promptBtn.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Preserve existing Like/Save buttons + behavior
    const saveBtn = createPinAction(
        'Save creation',
        'save-pin-btn yume-card-save-like-btn',
        savedPinIds.has(card.id),
        `<path d="M5 4.5A2.5 2.5 0 0 1 7.5 2h9A2.5 2.5 0 0 1 19 4.5V22l-7-4-7 4V4.5z" fill="currentColor"/>`,
        card.id
    );

    const likeBtn = createPinAction(
        'Like creation',
        'like-pin-btn yume-card-save-like-btn',
        likedPinIds.has(card.id),
        `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>`,
        card.id
    );

    actionsBar.appendChild(remixBtn);
    actionsBar.appendChild(likeBtn);
    actionsBar.appendChild(saveBtn);
    actionsBar.appendChild(promptBtn);

    // Assemble overlay
    overlay.appendChild(badgeAI);
    overlay.appendChild(likeCountTop);
    overlay.appendChild(bottomGlass);
    overlay.appendChild(actionsBar);

    imageContainer.appendChild(img);
    imageContainer.appendChild(overlay);
    cardDiv.appendChild(imageContainer);

    // Preserve navigation
    cardDiv.addEventListener('click', () => navigateTo(`/pin/${card.id}`));
    cardDiv.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') navigateTo(`/pin/${card.id}`);
    });

    return cardDiv;
}

function createPinAction(label, className, active, iconPath, pinId) {
    const button = document.createElement('button');
    button.className = `pin-action-btn ${className}${active ? ' active' : ''}`;
    button.type = 'button';
    button.setAttribute('aria-label', label);
    button.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPath}</svg>`;
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        const isActive = button.classList.toggle('active');

        if (className.includes('save-pin-btn')) {
            if (isActive) savedPinIds.add(pinId);
            else savedPinIds.delete(pinId);
        }

        if (className.includes('like-pin-btn')) {
            if (isActive) likedPinIds.add(pinId);
            else likedPinIds.delete(pinId);
        }
    });
    return button;
}

/* ============================================
   Events
   ============================================ */

bottomNavBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const target = `/${btn.dataset.nav}`;
        if (btn.dataset.nav === 'create' || btn.dataset.nav === 'activity' || btn.dataset.nav === 'profile') {
            if (!requireAuthOrRedirect(target)) return;
        }
        navigateTo(target);
    });
});

logo.addEventListener('click', () => navigateTo('/home'));

createNavBtn.addEventListener('click', () => {
    if (!requireAuthOrRedirect('/create')) return;
    navigateTo('/create');
});

notificationsBtn.addEventListener('click', () => {
    if (!requireAuthOrRedirect('/activity')) return;
    navigateTo('/activity');
});

profileNavBtn.addEventListener('click', () => {
    if (!requireAuthOrRedirect('/profile')) return;
    navigateTo('/profile');
});

searchInput.addEventListener('input', (event) => {
    activeSearchTerm = event.target.value.trim();
    if (getRoute().page !== 'search') {
        navigateTo('/search');
        return;
    }
    renderSearchPage();
    updateActiveNav('search');
});

appRoot.addEventListener('click', (event) => {
    const categoryButton = event.target.closest('[data-category]');
    const activityItem = event.target.closest('.activity-item');
    const backButton = event.target.closest('[data-back]');

    if (categoryButton) {
        activeCategory = categoryButton.dataset.category;
        renderSearchPage();
        return;
    }

    if (activityItem) {
        navigateTo(`/pin/${activityItem.dataset.pinId}`);
        return;
    }

    if (backButton) {
        if (window.history.length > 1) window.history.back();
        else navigateTo('/home');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        activeSearchTerm = '';
        activeCategory = 'all';
        searchInput.value = '';
        if (getRoute().page === 'search') renderSearchPage();
    }
});

window.addEventListener('hashchange', renderRoute);

document.addEventListener('DOMContentLoaded', async () => {
    await refreshAuth();
    if (!window.location.hash) navigateTo('/home');
    renderRoute();
});

/* ============================================
   Utilities
   ============================================ */

function filterPins(searchTerm, category) {
    const term = searchTerm.toLowerCase();

    return pins.filter((pin) => {
        const matchesCategory = category === 'all' || pin.category === category;
        const searchableText = `${pin.title} ${pin.category} ${pin.creator.name} ${pin.creator.handle}`.toLowerCase();
        return matchesCategory && (!term || searchableText.includes(term));
    });
}

function formatNumber(num) {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
}

function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

