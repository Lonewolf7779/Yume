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
let generationPollingTimer = null;
let generationLibraryFilter = 'all';
let latestGenerationLibrary = [];

// Auth state (in-memory)
const authState = {
    status: 'unknown', // 'unknown' | 'authenticated' | 'guest'
    user: null
};

function isAuthenticated() {
    return authState.status === 'authenticated' && !!authState.user?.id;
}

function isAdmin() {
    return isAuthenticated() && authState.user?.role === 'admin';
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
    if (page !== 'create') stopGenerationPolling();
    const routes = {
        home: renderHomePage,
        search: renderSearchPage,
        login: renderLoginPage,
        register: renderRegisterPage,
        create: () => requireAuthOrRedirect('/create') && renderCreatePage(),
        activity: () => requireAuthOrRedirect('/activity') && renderActivityPage(),
        profile: () => requireAuthOrRedirect('/profile') && renderProfilePage(),
        settings: () => requireAuthOrRedirect('/settings') && renderSettingsPage(),
        admin: () => requireAdminOrRedirect('/admin') && renderAdminPage()
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
        <!-- Hero Showcase Section (Exact Match to User Design Mock) -->
        <section class="hero-showcase">
            <div class="hero-showcase-backdrop"></div>
            <div class="hero-left-content">
                <p class="hero-eyebrow">WHERE AI CREATORS ARE BORN</p>
                <h1 class="hero-headline">
                    Become the<br>
                    <span class="pink-gradient-text">AI creator</span><br>
                    people<br>
                    remember<span class="pink-dot">.</span>
                </h1>
                <p class="hero-subtitle">
                    Your imagination deserves more than a prompt. It deserves a legacy.
                </p>

                <div class="hero-cta-group">
                    <button class="hero-primary-btn" type="button" data-hero-create>✦ Start Creating ✦</button>
                    <button class="hero-secondary-btn" type="button" data-hero-explore>Explore Gallery &rarr;</button>
                </div>

                <div class="hero-social-proof">
                    <div class="avatar-stack">
                        <img src="https://i.pravatar.cc/80?img=33" alt="Creator avatar" />
                        <img src="https://i.pravatar.cc/80?img=47" alt="Creator avatar" />
                        <img src="https://i.pravatar.cc/80?img=12" alt="Creator avatar" />
                        <img src="https://i.pravatar.cc/80?img=65" alt="Creator avatar" />
                    </div>
                    <div class="proof-copy">
                        <strong>50K+</strong>
                        <span>Creators building their worlds</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Feed Header + Visual Filter Bar -->
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

            <!-- Existing masonry feed -->
            <div class="masonry-grid" id="masonryGrid"></div>
        </section>
    `;

    appRoot.querySelector('[data-hero-create]')?.addEventListener('click', () => {
        if (requireAuthOrRedirect('/create')) navigateTo('/create');
    });
    appRoot.querySelector('[data-hero-explore]')?.addEventListener('click', () => {
        const grid = document.getElementById('masonryGrid');
        if (grid) grid.scrollIntoView({ behavior: 'smooth' });
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


let studioMode = 'generate'; // 'generate' | 'transform'
let userUploads = [];
let selectedSourceUploadId = null;

function renderCreatePage() {
    stopGenerationPolling();
    generationLibraryFilter = 'all';
    latestGenerationLibrary = [];
    selectedSourceUploadId = null;

    appRoot.innerHTML = `
        <section class="page-shell studio-page">
            <div class="studio-orb studio-orb-one" aria-hidden="true"></div>
            <div class="studio-orb studio-orb-two" aria-hidden="true"></div>
            <header class="studio-hero">
                <div>
                    <p class="studio-kicker">YUME LAB · CREATION STUDIO</p>
                    <h1 class="studio-title">Make the image<br><em>only you can imagine.</em></h1>
                    <p class="studio-subtitle">Build original AI characters from prompts or transform your personal photos with Flux AI. All creations are kept strictly private.</p>
                </div>
                <div class="studio-hero-mark" aria-hidden="true"><span>✦</span><span>✦</span><span>✦</span></div>
            </header>

            <div class="studio-mode-tabs" role="tablist" aria-label="Creation mode">
                <button type="button" class="studio-mode-tab active" data-studio-mode="generate" role="tab" aria-selected="true">
                    <span>✨ AI Image Generator</span>
                </button>
                <button type="button" class="studio-mode-tab" data-studio-mode="transform" role="tab" aria-selected="false">
                    <span>📷 Personal Photo Transformation</span>
                </button>
            </div>

            <div class="studio-layout">
                <form class="generation-studio surface-panel" data-generation-form>
                    <!-- Mode A: Text-to-Image Header -->
                    <div class="studio-panel-heading" data-mode-heading="generate">
                        <div><p class="studio-label">01 · DESCRIBE YOUR DREAM</p><h2>Prompt canvas</h2></div>
                        <span class="studio-model-pill">fal · Flux 1.1 Pro</span>
                    </div>

                    <!-- Mode B: Photo Transformation Header -->
                    <div class="studio-panel-heading" data-mode-heading="transform" style="display:none;">
                        <div><p class="studio-label">01 · SELECT YOUR PHOTO</p><h2>Personal Photo Library</h2></div>
                        <span class="studio-model-pill">fal · Flux Redux</span>
                    </div>

                    <!-- Mode B Photo Upload Section -->
                    <div class="photo-upload-section" data-mode-section="transform" style="display:none;">
                        <div class="upload-consent-box">
                            <label class="consent-checkbox-row">
                                <input type="checkbox" id="photoConsentCheck" data-photo-consent />
                                <span class="consent-text">I confirm that I own this photo or have explicit permission to use and transform it.</span>
                            </label>
                            <p class="consent-notice">Notice: Uploaded photos are stored privately. When transforming, your photo will be processed securely and sent to Fal AI for transformation.</p>
                        </div>

                        <div class="upload-dropzone" data-upload-dropzone>
                            <div class="upload-icon">📷</div>
                            <div class="upload-title">Choose a personal photo to upload</div>
                            <div class="upload-subtitle">JPEG, PNG, WebP (max 10MB). EXIF/location metadata will be stripped automatically.</div>
                            <input type="file" id="photoFileInput" data-photo-file accept="image/png, image/jpeg, image/webp" style="display:none;" />
                        </div>

                        <div class="selected-photo-badge" data-selected-photo-badge style="display:none;">
                            <img class="selected-photo-preview" data-selected-photo-img src="" alt="Selected photo" />
                            <div class="selected-photo-meta">
                                <strong>Selected Photo for Transformation</strong>
                                <span data-selected-photo-filename>photo.webp</span>
                            </div>
                            <button type="button" class="secondary-action" data-clear-photo-selection>Change</button>
                        </div>

                        <div class="studio-control-group" style="margin-top:20px;">
                            <div class="studio-control-copy"><p class="studio-label">YOUR UPLOADED PHOTOS</p><h3>Select a photo to transform</h3></div>
                            <div class="upload-gallery-grid" data-upload-gallery>
                                <div class="generation-library-loading"><span></span><span></span></div>
                            </div>
                        </div>
                    </div>

                    <!-- Prompt Textarea -->
                    <div class="studio-control-group">
                        <div class="studio-control-copy" data-prompt-heading="transform" style="display:none;">
                            <p class="studio-label">02 · DESCRIBE THE TRANSFORMATION</p><h3>Transformation prompt</h3>
                        </div>
                        <label class="sr-only" for="generationPrompt">Image prompt</label>
                        <textarea id="generationPrompt" class="generation-prompt" data-generation-prompt maxlength="1600" placeholder="A luminous anime heroine standing in a rain-soaked neon alley, cinematic light, intricate details..." required></textarea>
                        <div class="prompt-footer"><span>Be specific about subject, style, lighting, and transformation details.</span><span data-prompt-count>0 / 1,600</span></div>
                    </div>

                    <div class="studio-control-group" data-mode-section="generate">
                        <div class="studio-control-copy"><p class="studio-label">02 · START WITH A SPARK</p><h3>Prompt starters</h3></div>
                        <div class="prompt-preset-grid">
                            <button type="button" class="prompt-preset" data-prompt-preset="An elegant anime girl, long silver hair, shrine courtyard at dusk, cherry blossom petals, dreamy cinematic light, detailed illustration">Anime muse <span>↗</span></button>
                            <button type="button" class="prompt-preset" data-prompt-preset="A fashion editorial portrait, soft studio flash, sculptural fabric, warm cream background, magazine photography, refined detail">Editorial glow <span>↗</span></button>
                            <button type="button" class="prompt-preset" data-prompt-preset="A futuristic city at blue hour, rain reflections, elevated train, atmospheric fog, cinematic wide angle, ultra detailed">Neo city <span>↗</span></button>
                            <button type="button" class="prompt-preset" data-prompt-preset="A quiet fantasy library hidden inside an ancient tree, glowing lanterns, moss, magical realism, rich texture, inviting mood">Dream world <span>↗</span></button>
                        </div>
                    </div>

                    <div class="studio-control-group">
                        <div class="studio-control-copy"><p class="studio-label">03 · FRAME THE STORY</p><h3>Image format</h3></div>
                        <div class="aspect-ratio-grid" role="radiogroup" aria-label="Image format">
                            <button type="button" class="aspect-button" data-image-size="square" role="radio" aria-checked="false"><span class="ratio-icon ratio-square"></span><span>Square</span><small>1:1</small></button>
                            <button type="button" class="aspect-button active" data-image-size="portrait_4_3" role="radio" aria-checked="true"><span class="ratio-icon ratio-portrait"></span><span>Portrait</span><small>4:3</small></button>
                            <button type="button" class="aspect-button" data-image-size="landscape_4_3" role="radio" aria-checked="false"><span class="ratio-icon ratio-landscape"></span><span>Landscape</span><small>4:3</small></button>
                        </div>
                    </div>

                    <details class="generation-advanced">
                        <summary>Fine tune <span>Optional reproducible seed</span></summary>
                        <label class="seed-label" for="generationSeed">Seed<input id="generationSeed" data-generation-seed inputmode="numeric" pattern="[0-9]*" placeholder="Leave empty for surprise" /></label>
                    </details>

                    <div class="studio-submit-row">
                        <button class="generate-art-button" type="submit" data-generate-button><span class="generate-art-icon">✦</span><span data-generate-button-label>Generate with Flux</span><span class="generate-art-arrow">→</span></button>
                        <p class="studio-status" data-studio-status aria-live="polite">Ready when your idea is.</p>
                    </div>
                </form>

                <aside class="studio-side-note surface-panel" aria-label="Generation notes">
                    <div class="studio-side-icon">✦</div><h2>From thought<br>to visual.</h2>
                    <p>Each result lands in your private library. Re-use prompts to evolve an idea instead of starting over.</p>
                    <div class="studio-side-rule"></div><p class="studio-side-small">Generations are saved privately to your account.</p>
                </aside>
            </div>

            <section class="creation-library" aria-labelledby="creationLibraryTitle">
                <div class="creation-library-header">
                    <div><p class="studio-kicker">YOUR PRIVATE COLLECTION</p><h2 id="creationLibraryTitle">Creation library</h2></div>
                    <div class="generation-filter-bar" role="group" aria-label="Filter creations">
                        <button type="button" class="generation-filter active" data-generation-filter="all">All</button>
                        <button type="button" class="generation-filter" data-generation-filter="working">In progress</button>
                        <button type="button" class="generation-filter" data-generation-filter="completed">Ready</button>
                    </div>
                </div>
                <div class="generation-library-grid" data-generation-library aria-live="polite"><div class="generation-library-loading"><span></span><span></span><span></span></div></div>
            </section>
        </section>
    `;

    const form = appRoot.querySelector('[data-generation-form]');
    const promptInput = appRoot.querySelector('[data-generation-prompt]');
    const seedInput = appRoot.querySelector('[data-generation-seed]');
    const promptCount = appRoot.querySelector('[data-prompt-count]');
    const generateButton = appRoot.querySelector('[data-generate-button]');
    const generateButtonLabel = appRoot.querySelector('[data-generate-button-label]');
    const library = appRoot.querySelector('[data-generation-library]');
    const consentCheckbox = appRoot.querySelector('[data-photo-consent]');
    const photoFileInput = appRoot.querySelector('[data-photo-file]');
    const dropzone = appRoot.querySelector('[data-upload-dropzone]');
    const uploadGallery = appRoot.querySelector('[data-upload-gallery]');
    const selectedBadge = appRoot.querySelector('[data-selected-photo-badge]');
    const selectedImg = appRoot.querySelector('[data-selected-photo-img]');
    const selectedFilename = appRoot.querySelector('[data-selected-photo-filename]');

    const updatePromptCount = () => {
        promptCount.textContent = `${promptInput.value.length.toLocaleString()} / 1,600`;
    };
    updatePromptCount();
    promptInput.addEventListener('input', updatePromptCount);

    // Mode Tab Switcher logic
    appRoot.querySelectorAll('[data-studio-mode]').forEach((tabBtn) => {
        tabBtn.addEventListener('click', () => {
            studioMode = tabBtn.dataset.studioMode;
            appRoot.querySelectorAll('[data-studio-mode]').forEach((btn) => {
                const active = btn === tabBtn;
                btn.classList.toggle('active', active);
                btn.setAttribute('aria-selected', String(active));
            });

            const isTransform = studioMode === 'transform';

            appRoot.querySelectorAll('[data-mode-heading="generate"]').forEach((el) => el.style.display = isTransform ? 'none' : 'flex');
            appRoot.querySelectorAll('[data-mode-heading="transform"]').forEach((el) => el.style.display = isTransform ? 'flex' : 'none');
            appRoot.querySelectorAll('[data-mode-section="generate"]').forEach((el) => el.style.display = isTransform ? 'none' : 'block');
            appRoot.querySelectorAll('[data-mode-section="transform"]').forEach((el) => el.style.display = isTransform ? 'block' : 'none');
            appRoot.querySelectorAll('[data-prompt-heading="transform"]').forEach((el) => el.style.display = isTransform ? 'block' : 'none');

            if (isTransform) {
                promptInput.placeholder = "Transform this photo into an anime hero with glowing aura, cybernetic armor, and detailed background...";
                generateButtonLabel.textContent = 'Transform Photo with Flux Redux';
                loadUserUploads();
            } else {
                promptInput.placeholder = "A luminous anime heroine standing in a rain-soaked neon alley, cinematic light, intricate details...";
                generateButtonLabel.textContent = 'Generate with Flux';
            }
        });
    });

    // Load User Uploads gallery
    const loadUserUploads = async () => {
        if (!uploadGallery) return;
        try {
            const { res, body } = await apiFetchJson('/api/uploads');
            if (res.ok && Array.isArray(body?.uploads)) {
                userUploads = body.uploads;
                renderUploadGallery();
            } else {
                uploadGallery.innerHTML = '<div class="generation-empty"><p>No uploaded photos yet.</p></div>';
            }
        } catch {
            uploadGallery.innerHTML = '<div class="generation-empty"><p>Could not load uploaded photos.</p></div>';
        }
    };

    const renderUploadGallery = () => {
        if (!uploadGallery) return;
        if (userUploads.length === 0) {
            uploadGallery.innerHTML = '<div class="generation-empty"><span>No photos uploaded yet. Upload your first photo above!</span></div>';
            return;
        }

        uploadGallery.innerHTML = userUploads.map((upload) => {
            const isSelected = selectedSourceUploadId === upload.id;
            return `
                <div class="upload-thumb-card ${isSelected ? 'selected' : ''}" data-select-upload="${upload.id}">
                    <img class="upload-thumb-img" src="${upload.view_url}" alt="${escapeHtml(upload.original_filename)}" loading="lazy" />
                    <div class="upload-thumb-overlay">
                        <button type="button" class="upload-delete-btn" data-delete-upload="${upload.id}" title="Delete photo">✕</button>
                        <span class="upload-thumb-name">${escapeHtml(upload.original_filename)}</span>
                    </div>
                </div>
            `;
        }).join('');
    };

    // Click handlers for upload gallery items
    uploadGallery?.addEventListener('click', async (event) => {
        const deleteBtn = event.target.closest('[data-delete-upload]');
        const selectCard = event.target.closest('[data-select-upload]');

        if (deleteBtn) {
            event.stopPropagation();
            const uploadId = Number(deleteBtn.dataset.deleteUpload);
            if (!Number.isSafeInteger(uploadId) || !window.confirm('Delete this photo upload from your private library?')) return;

            const { res, body } = await apiFetchJson(`/api/uploads/${uploadId}`, { method: 'DELETE' });
            if (res.ok) {
                if (selectedSourceUploadId === uploadId) {
                    selectedSourceUploadId = null;
                    if (selectedBadge) selectedBadge.style.display = 'none';
                }
                userUploads = userUploads.filter((u) => u.id !== uploadId);
                renderUploadGallery();
                setStudioStatus('Photo upload deleted.', 'ready');
            } else {
                setStudioStatus(body?.error || 'Failed to delete photo.', 'error');
            }
            return;
        }

        if (selectCard) {
            const uploadId = Number(selectCard.dataset.selectUpload);
            const upload = userUploads.find((u) => u.id === uploadId);
            if (!upload) return;

            selectedSourceUploadId = uploadId;
            renderUploadGallery();

            if (selectedBadge && selectedImg && selectedFilename) {
                selectedImg.src = upload.view_url;
                selectedFilename.textContent = upload.original_filename;
                selectedBadge.style.display = 'flex';
            }
            setStudioStatus(`Photo selected for transformation. Enter your transformation prompt below.`, 'ready');
        }
    });

    // Clear photo selection button
    appRoot.querySelector('[data-clear-photo-selection]')?.addEventListener('click', () => {
        selectedSourceUploadId = null;
        if (selectedBadge) selectedBadge.style.display = 'none';
        renderUploadGallery();
        setStudioStatus('Photo selection cleared.', 'ready');
    });

    // Dropzone file picker trigger
    dropzone?.addEventListener('click', () => {
        if (!consentCheckbox.checked) {
            alert('Explicit consent required: Please check the consent checkbox confirming you own or have permission to use this photo before uploading.');
            consentCheckbox.focus();
            return;
        }
        photoFileInput.click();
    });

    // Handle File Input Upload
    photoFileInput?.addEventListener('change', async () => {
        const file = photoFileInput.files?.[0];
        if (!file) return;

        if (!consentCheckbox.checked) {
            alert('Explicit user consent is required before uploading personal photos.');
            return;
        }

        const formData = new FormData();
        formData.append('consent', 'true');
        formData.append('photo', file);

        setStudioStatus('Uploading and sanitizing personal photo (stripping EXIF metadata)…', 'working');

        try {
            const res = await fetch('/api/uploads', {
                method: 'POST',
                body: formData,
                credentials: 'include'
            });
            const body = await res.json();

            if (res.ok && body.upload) {
                setStudioStatus('Photo uploaded successfully! Selected for transformation.', 'success');
                selectedSourceUploadId = body.upload.id;

                if (selectedBadge && selectedImg && selectedFilename) {
                    selectedImg.src = body.upload.view_url;
                    selectedFilename.textContent = body.upload.original_filename;
                    selectedBadge.style.display = 'flex';
                }

                await loadUserUploads();
            } else {
                setStudioStatus(body.error || 'Failed to upload photo.', 'error');
            }
        } catch {
            setStudioStatus('Upload network error. Please try again.', 'error');
        } finally {
            photoFileInput.value = '';
        }
    });

    appRoot.querySelectorAll('[data-prompt-preset]').forEach((button) => {
        button.addEventListener('click', () => {
            const preset = button.dataset.promptPreset || '';
            promptInput.value = promptInput.value.trim() ? `${promptInput.value.trim()}, ${preset}` : preset;
            updatePromptCount();
            promptInput.focus();
            setStudioStatus('Prompt starter added — make it yours.', 'ready');
        });
    });

    appRoot.querySelectorAll('[data-image-size]').forEach((button) => {
        button.addEventListener('click', () => {
            appRoot.querySelectorAll('[data-image-size]').forEach((option) => {
                const active = option === button;
                option.classList.toggle('active', active);
                option.setAttribute('aria-checked', String(active));
            });
        });
    });

    appRoot.querySelectorAll('[data-generation-filter]').forEach((button) => {
        button.addEventListener('click', () => {
            generationLibraryFilter = button.dataset.generationFilter || 'all';
            appRoot.querySelectorAll('[data-generation-filter]').forEach((option) => option.classList.toggle('active', option === button));
            renderGenerationLibrary(library, latestGenerationLibrary);
        });
    });

    library.addEventListener('click', async (event) => {
        const reuseButton = event.target.closest('[data-generation-reuse]');
        const deleteButton = event.target.closest('[data-generation-delete]');

        if (reuseButton) {
            const generation = latestGenerationLibrary.find((item) => String(item.id) === reuseButton.dataset.generationReuse);
            if (!generation) return;
            promptInput.value = generation.prompt || '';
            updatePromptCount();
            promptInput.focus();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setStudioStatus('Prompt loaded — adjust it and create a new variation.', 'ready');
            return;
        }

        if (deleteButton) {
            const generationId = Number(deleteButton.dataset.generationDelete);
            if (!Number.isSafeInteger(generationId) || !window.confirm('Remove this creation from your Yume library?')) return;
            deleteButton.disabled = true;
            const { res, body } = await apiFetchJson(`/api/generations/${generationId}`, { method: 'DELETE' });
            if (!res.ok) {
                deleteButton.disabled = false;
                setStudioStatus(body?.error || 'Could not remove that creation.', 'error');
                return;
            }
            latestGenerationLibrary = latestGenerationLibrary.filter((item) => item.id !== generationId);
            renderGenerationLibrary(library, latestGenerationLibrary);
            setStudioStatus('Creation removed from your library.', 'ready');
        }
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const prompt = promptInput.value.trim();
        const imageSize = appRoot.querySelector('[data-image-size].active')?.dataset.imageSize || 'portrait_4_3';

        if (prompt.length < 3) {
            setStudioStatus('Give the image a little more detail before generating.', 'error');
            promptInput.focus();
            return;
        }

        if (studioMode === 'transform' && !selectedSourceUploadId) {
            setStudioStatus('Please select or upload a personal photo to transform.', 'error');
            return;
        }

        generateButton.disabled = true;
        generateButtonLabel.textContent = studioMode === 'transform' ? 'Starting photo transformation…' : 'Sending your idea…';
        setStudioStatus(studioMode === 'transform' ? 'Submitting photo transformation request to Fal…' : 'Opening a private generation request…', 'working');

        try {
            const endpoint = studioMode === 'transform' ? '/api/generations/transform' : '/api/generations';
            const payload = studioMode === 'transform'
                ? { sourceUploadId: selectedSourceUploadId, prompt, imageSize, seed: seedInput.value.trim() }
                : { prompt, imageSize, seed: seedInput.value.trim() };

            const { res, body } = await apiFetchJson(endpoint, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                setStudioStatus(body?.error || 'The generation could not start.', 'error');
                await loadGenerationLibrary();
                return;
            }
            setStudioStatus('Your request is in the Fal queue. This usually takes a moment.', 'working');
            await loadGenerationLibrary();
            pollGenerationUntilSettled(body.generation.id);
        } catch {
            setStudioStatus('Could not reach Yume’s generation service. Please try again.', 'error');
        } finally {
            generateButton.disabled = false;
            generateButtonLabel.textContent = studioMode === 'transform' ? 'Transform Photo with Flux Redux' : 'Generate with Flux';
        }
    });

    loadGenerationLibrary({ resumePolling: true });
}

function stopGenerationPolling() {
    if (generationPollingTimer) window.clearTimeout(generationPollingTimer);
    generationPollingTimer = null;
}

function isGenerationStudioVisible() {
    return Boolean(appRoot.querySelector('[data-generation-form]'));
}

function setStudioStatus(message, tone = 'ready') {
    const status = appRoot.querySelector('[data-studio-status]');
    if (!status) return;
    status.textContent = message;
    status.dataset.tone = tone;
}

async function loadGenerationLibrary({ resumePolling = false } = {}) {
    const library = appRoot.querySelector('[data-generation-library]');
    if (!library) return;
    try {
        const { res, body } = await apiFetchJson('/api/generations');
        if (!res.ok) {
            library.innerHTML = `<div class="generation-empty"><strong>Your library is unavailable right now.</strong><span>${escapeHtml(body?.error || 'Try refreshing the page.')}</span></div>`;
            return;
        }
        latestGenerationLibrary = Array.isArray(body?.generations) ? body.generations : [];
        renderGenerationLibrary(library, latestGenerationLibrary);
        if (resumePolling) {
            const pending = latestGenerationLibrary.find((item) => ['queued', 'processing'].includes(item.status));
            if (pending) pollGenerationUntilSettled(pending.id);
        }
    } catch {
        library.innerHTML = '<div class="generation-empty"><strong>Your library is unavailable right now.</strong><span>Check your connection and try again.</span></div>';
    }
}

function renderGenerationLibrary(library, generations) {
    if (!library) return;
    const visible = generations.filter((generation) => {
        if (generationLibraryFilter === 'working') return ['queued', 'processing'].includes(generation.status);
        if (generationLibraryFilter === 'completed') return generation.status === 'completed';
        return true;
    });

    if (!visible.length) {
        const copy = generations.length ? 'No creations match this view yet.' : 'Your first image will appear here, ready to revisit whenever inspiration strikes.';
        library.innerHTML = `<div class="generation-empty"><div class="generation-empty-icon">✦</div><strong>${generationLibraryFilter === 'all' ? 'A clean canvas is waiting.' : 'Nothing here yet.'}</strong><span>${copy}</span></div>`;
        return;
    }

    library.innerHTML = visible.map((generation) => {
        const image = generation.images?.[0];
        const imageUrl = getSafeExternalUrl(image?.url);
        const pending = ['queued', 'processing'].includes(generation.status);
        const failed = generation.status === 'failed';
        const statusLabel = generation.status === 'completed' ? 'Ready' : failed ? 'Needs attention' : generation.status === 'queued' ? 'Queued' : 'Creating';
        const visual = imageUrl
            ? `<img class="generation-card-image" src="${imageUrl}" alt="Generated creation" loading="lazy" />`
            : `<div class="generation-image-placeholder ${pending ? 'is-pending' : failed ? 'is-failed' : ''}"><div class="generation-placeholder-orb"></div><span>${pending ? 'Making your visual…' : failed ? 'Generation stopped' : 'No preview returned'}</span></div>`;

        return `
            <article class="generation-card ${pending ? 'is-pending' : ''} ${failed ? 'is-failed' : ''}">
                <div class="generation-card-visual">${visual}<span class="generation-status status-${escapeHtml(generation.status)}">${statusLabel}</span>${pending ? '<div class="generation-sheen" aria-hidden="true"></div>' : ''}</div>
                <div class="generation-card-body">
                    <p class="generation-card-prompt">${escapeHtml(generation.prompt)}</p>
                    <div class="generation-card-meta"><span>Flux 1.1 Pro</span><time datetime="${escapeHtml(String(generation.createdAt || ''))}">${escapeHtml(formatGenerationDate(generation.createdAt))}</time></div>
                    ${failed && generation.error ? `<p class="generation-card-error">${escapeHtml(generation.error)}</p>` : ''}
                    <div class="generation-card-actions">
                        <button type="button" data-generation-reuse="${generation.id}">Use prompt</button>
                        ${imageUrl ? `<a href="${imageUrl}" target="_blank" rel="noopener noreferrer" download>Open / save</a>` : ''}
                        <button type="button" class="generation-delete" data-generation-delete="${generation.id}">Remove</button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

async function pollGenerationUntilSettled(generationId) {
    stopGenerationPolling();
    const checkStatus = async () => {
        if (!isGenerationStudioVisible()) return;
        try {
            const { res, body } = await apiFetchJson(`/api/generations/${generationId}`);
            if (!res.ok) {
                setStudioStatus(body?.error || 'We could not check that generation yet.', 'error');
                return;
            }
            await loadGenerationLibrary();
            const status = body?.generation?.status;
            if (['queued', 'processing'].includes(status)) {
                setStudioStatus(status === 'queued' ? 'Your idea is queued with Flux…' : 'Flux is drawing your visual…', 'working');
                generationPollingTimer = window.setTimeout(checkStatus, 2400);
                return;
            }
            generationPollingTimer = null;
            if (status === 'completed') setStudioStatus('Your creation is ready in the library below.', 'success');
            else setStudioStatus(body?.generation?.error || 'This generation did not finish. You can refine the prompt and try again.', 'error');
        } catch {
            setStudioStatus('Still trying to reach the image service…', 'working');
            generationPollingTimer = window.setTimeout(checkStatus, 3500);
        }
    };
    await checkStatus();
}

function getSafeExternalUrl(value) {
    if (typeof value !== 'string') return '';
    try {
        const url = new URL(value);
        return ['https:', 'http:'].includes(url.protocol) ? escapeHtml(url.href) : '';
    } catch {
        return '';
    }
}

function formatGenerationDate(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? 'Just now' : new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric' }).format(date);
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

                ${isAdmin() ? '<button class="secondary-action" type="button" data-go-admin>Admin centre</button>' : ''}
                <button class="secondary-action" type="button" data-logout>Logout</button>
            </div>
        </section>
    `;

    appRoot.querySelector('[data-go-admin]')?.addEventListener('click', () => navigateTo('/admin'));

    appRoot.querySelector('[data-logout]').addEventListener('click', async () => {
        await apiFetchJson('/api/auth/logout', { method: 'POST' });
        await refreshAuth();
        navigateTo('/home');
        renderRoute();
    });
}

function renderAdminAccessDenied() {
    appRoot.innerHTML = `
        <section class="page-shell admin-access-denied">
            <div class="admin-denied-card surface-panel">
                <div class="admin-denied-icon">✦</div>
                <p class="studio-kicker">ADMIN CONTROL CENTRE</p>
                <h1>Private space.</h1>
                <p>This account does not have administrator access. Ask the site owner to add your email to the server-only <code>ADMIN_EMAILS</code> setting.</p>
                <button class="secondary-action" type="button" data-admin-back>Back to Yume</button>
            </div>
        </section>
    `;
    appRoot.querySelector('[data-admin-back]')?.addEventListener('click', () => navigateTo('/home'));
}

function requireAdminOrRedirect(targetRoute) {
    if (!isAuthenticated()) {
        navigateTo(`/login?next=${encodeURIComponent(targetRoute || '/admin')}`);
        return false;
    }
    if (isAdmin()) return true;
    renderAdminAccessDenied();
    return false;
}

function renderAdminLoading() {
    appRoot.innerHTML = `
        <section class="page-shell admin-page">
            <header class="admin-header">
                <div><p class="studio-kicker">YUME OPERATIONS</p><h1>Control centre</h1><p>Loading your live workspace…</p></div>
            </header>
            <div class="admin-metric-grid admin-loading-grid">
                <div></div><div></div><div></div><div></div>
            </div>
        </section>
    `;
}

async function renderAdminPage() {
    renderAdminLoading();

    try {
        const [overviewResult, usersResult, generationsResult] = await Promise.all([
            apiFetchJson('/api/admin/overview'),
            apiFetchJson('/api/admin/users?limit=30'),
            apiFetchJson('/api/admin/generations?limit=30')
        ]);

        if (!overviewResult.res.ok || !usersResult.res.ok || !generationsResult.res.ok) {
            if (overviewResult.res.status === 401 || overviewResult.res.status === 403) {
                await refreshAuth();
                renderAdminAccessDenied();
                return;
            }
            throw new Error(overviewResult.body?.error || usersResult.body?.error || generationsResult.body?.error || 'The control centre could not load.');
        }

        if (getRoute().page !== 'admin') return;
        renderAdminWorkspace(
            overviewResult.body,
            usersResult.body.users || [],
            generationsResult.body.generations || []
        );
    } catch (error) {
        appRoot.innerHTML = `
            <section class="page-shell admin-page">
                <div class="admin-denied-card surface-panel">
                    <div class="admin-denied-icon">!</div>
                    <p class="studio-kicker">ADMIN CONTROL CENTRE</p>
                    <h1>Couldn’t load the workspace.</h1>
                    <p>${escapeHtml(error?.message || 'Please refresh and try again.')}</p>
                    <button class="secondary-action" type="button" data-admin-retry>Try again</button>
                </div>
            </section>
        `;
        appRoot.querySelector('[data-admin-retry]')?.addEventListener('click', renderAdminPage);
    }
}

function renderAdminWorkspace(overview, users, generations) {
    const metrics = overview.metrics || {};
    const latestGenerations = generations.length ? generations : (overview.latestGenerations || []);
    const recentActivity = overview.recentActivity || [];

    appRoot.innerHTML = `
        <section class="page-shell admin-page">
            <header class="admin-header">
                <div>
                    <p class="studio-kicker">YUME OPERATIONS · PRIVATE</p>
                    <h1>Control centre</h1>
                    <p>Watch creation activity, spot failures, and shape the team without leaving Yume.</p>
                </div>
                <div class="admin-header-actions">
                    <span class="admin-live-indicator"><i></i> Live database</span>
                    <button class="secondary-action" type="button" data-admin-refresh>Refresh</button>
                </div>
            </header>

            <section class="admin-metric-grid" aria-label="Yume activity summary">
                ${adminMetricCard('People', metrics.totalUsers, `${metrics.newUsers7d || 0} new this week`, 'pink')}
                ${adminMetricCard('Creations', metrics.totalGenerations, `${metrics.generationsToday || 0} today`, 'violet')}
                ${adminMetricCard('In progress', metrics.processingGenerations, `${metrics.activeCreators24h || 0} active creators today`, 'blue')}
                ${adminMetricCard('Needs attention', metrics.failedGenerations, `${metrics.completedGenerations || 0} completed overall`, 'orange')}
            </section>

            <section class="admin-overview-grid">
                <div class="admin-panel surface-panel admin-generation-panel">
                    <div class="admin-panel-heading">
                        <div><p class="studio-label">LIVE ACTIVITY</p><h2>Generation monitor</h2></div>
                        <div class="admin-filter-bar" role="group" aria-label="Filter generation activity">
                            <button type="button" class="admin-filter active" data-admin-generation-filter="">All</button>
                            <button type="button" class="admin-filter" data-admin-generation-filter="processing">Working</button>
                            <button type="button" class="admin-filter" data-admin-generation-filter="failed">Failed</button>
                        </div>
                    </div>
                    <div class="admin-generation-list" data-admin-generation-list>
                        ${renderAdminGenerationRows(latestGenerations)}
                    </div>
                </div>

                <aside class="admin-panel surface-panel admin-health-panel">
                    <p class="studio-label">SYSTEM SNAPSHOT</p>
                    <h2>Good to know</h2>
                    <div class="admin-health-stack">
                        <div><span class="admin-health-dot healthy"></span><p><strong>App data</strong><small>PostgreSQL is responding through Yume.</small></p></div>
                        <div><span class="admin-health-dot ${metrics.processingGenerations ? 'watch' : 'healthy'}"></span><p><strong>Flux queue</strong><small>${metrics.processingGenerations || 0} active request${metrics.processingGenerations === 1 ? '' : 's'}.</small></p></div>
                        <div><span class="admin-health-dot ${metrics.failedGenerations ? 'alert' : 'healthy'}"></span><p><strong>Failures</strong><small>${metrics.failedGenerations || 0} generation${metrics.failedGenerations === 1 ? '' : 's'} need review.</small></p></div>
                    </div>
                    <p class="admin-health-note">Provider keys remain server-only. A “failed” result means the creator can refine their prompt and retry.</p>
                </aside>
            </section>

            <section class="admin-panel surface-panel admin-users-panel">
                <div class="admin-panel-heading">
                    <div><p class="studio-label">PEOPLE & ACCESS</p><h2>Recent members</h2></div>
                    <span class="admin-panel-caption">Moderator access is managed here. Admin access stays in the private server setting.</span>
                </div>
                <div class="admin-table-wrap">
                    <table class="admin-user-table">
                        <thead><tr><th>Member</th><th>Joined</th><th>Creations</th><th>Access</th></tr></thead>
                        <tbody>
                            ${users.length ? users.map(renderAdminUserRow).join('') : '<tr><td colspan="4" class="admin-empty-row">No members yet.</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </section>

            <section class="admin-panel surface-panel admin-audit-panel">
                <div class="admin-panel-heading">
                    <div><p class="studio-label">ACCOUNTABILITY</p><h2>Recent admin actions</h2></div>
                </div>
                <div class="admin-audit-list">
                    ${recentActivity.length ? recentActivity.map(renderAdminAuditItem).join('') : '<div class="admin-empty-row">No privileged actions recorded yet.</div>'}
                </div>
            </section>
        </section>
    `;

    appRoot.querySelector('[data-admin-refresh]')?.addEventListener('click', renderAdminPage);
    appRoot.querySelectorAll('[data-admin-generation-filter]').forEach((button) => {
        button.addEventListener('click', async () => {
            const filter = button.dataset.adminGenerationFilter || '';
            const list = appRoot.querySelector('[data-admin-generation-list]');
            if (!list) return;
            appRoot.querySelectorAll('[data-admin-generation-filter]').forEach((item) => item.classList.toggle('active', item === button));
            list.innerHTML = '<div class="admin-list-loading">Refreshing generation activity…</div>';
            const { res, body } = await apiFetchJson(`/api/admin/generations?limit=30&status=${encodeURIComponent(filter)}`);
            list.innerHTML = res.ok
                ? renderAdminGenerationRows(body.generations || [])
                : '<div class="admin-list-loading">Could not load that view.</div>';
        });
    });

    appRoot.querySelectorAll('[data-admin-role]').forEach((select) => {
        select.addEventListener('change', async () => {
            const userId = Number(select.dataset.adminRole);
            const previousRole = select.dataset.previousRole || 'user';
            const nextRole = select.value;
            if (!Number.isSafeInteger(userId) || !window.confirm(`Change this member’s access to ${nextRole}?`)) {
                select.value = previousRole;
                return;
            }

            select.disabled = true;
            const { res, body } = await apiFetchJson(`/api/admin/users/${userId}/role`, {
                method: 'PATCH',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ role: nextRole })
            });
            if (!res.ok) {
                select.disabled = false;
                select.value = previousRole;
                window.alert(body?.error || 'Could not change that access level.');
                return;
            }
            renderAdminPage();
        });
    });
}

function adminMetricCard(label, value, note, tone) {
    return `
        <article class="admin-metric-card tone-${tone}">
            <p>${escapeHtml(label)}</p>
            <strong>${formatNumber(Number(value || 0))}</strong>
            <span>${escapeHtml(note)}</span>
        </article>
    `;
}

function renderAdminGenerationRows(generations) {
    if (!generations.length) return '<div class="admin-empty-row">No generations in this view.</div>';
    return generations.map((generation) => {
        const status = generation.status || 'queued';
        return `
            <article class="admin-generation-row">
                <span class="admin-generation-state state-${escapeHtml(status)}">${escapeHtml(status)}</span>
                <div class="admin-generation-copy">
                    <strong>${escapeHtml(generation.prompt || 'Untitled generation')}</strong>
                    <span>${escapeHtml(generation.user?.username || 'Unknown creator')} · ${escapeHtml(formatAdminDate(generation.createdAt))}</span>
                    ${generation.error ? `<small>${escapeHtml(generation.error)}</small>` : ''}
                </div>
                <span class="admin-generation-format">${escapeHtml(generation.imageSize || '')}</span>
            </article>
        `;
    }).join('');
}

function renderAdminUserRow(user) {
    const role = user.role || 'user';
    const lockedAdmin = user.isConfiguredAdmin || role === 'admin';
    return `
        <tr>
            <td><div class="admin-member"><span class="admin-member-avatar">${escapeHtml((user.username || '?').slice(0, 1).toUpperCase())}</span><div><strong>${escapeHtml(user.username)}</strong><small>${escapeHtml(user.email)}</small></div></div></td>
            <td>${escapeHtml(formatAdminDate(user.createdAt))}</td>
            <td>${formatNumber(Number(user.generatedCount || 0))}</td>
            <td>
                ${lockedAdmin
                    ? '<span class="admin-role-badge">Admin</span>'
                    : `<select data-admin-role="${user.id}" data-previous-role="${escapeHtml(role)}" aria-label="Access level for ${escapeHtml(user.username)}"><option value="user" ${role === 'user' ? 'selected' : ''}>Member</option><option value="moderator" ${role === 'moderator' ? 'selected' : ''}>Moderator</option></select>`}
            </td>
        </tr>
    `;
}

function renderAdminAuditItem(entry) {
    const actor = entry.actor?.username || 'An admin';
    const target = entry.target?.username || 'a member';
    const nextRole = entry.metadata?.nextRole ? ` → ${entry.metadata.nextRole}` : '';
    return `
        <article class="admin-audit-item">
            <div class="admin-audit-mark">✦</div>
            <p><strong>${escapeHtml(actor)}</strong> updated access for <strong>${escapeHtml(target)}</strong>${escapeHtml(nextRole)}.<span>${escapeHtml(formatAdminDate(entry.createdAt))}</span></p>
        </article>
    `;
}

function formatAdminDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return 'Just now';
    return new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(date);
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

logo?.addEventListener('click', () => navigateTo('/home'));

document.querySelector('.yume-brand')?.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/home');
});

createNavBtn?.addEventListener('click', () => {
    if (!requireAuthOrRedirect('/create')) return;
    navigateTo('/create');
});

notificationsBtn?.addEventListener('click', () => {
    if (!requireAuthOrRedirect('/activity')) return;
    navigateTo('/activity');
});

profileNavBtn?.addEventListener('click', () => {
    if (!requireAuthOrRedirect('/profile')) return;
    navigateTo('/profile');
});

searchInput?.addEventListener('input', (event) => {
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

    // Floating header buttons
    document.querySelector('[data-nav-create]')?.addEventListener('click', () => {
        if (requireAuthOrRedirect('/create')) navigateTo('/create');
    });

    document.querySelector('[data-nav-login]')?.addEventListener('click', () => {
        if (currentUser) navigateTo('/profile');
        else navigateTo('/login');
    });

    document.querySelectorAll('[data-nav-target]').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.dataset.navTarget;
            if (target === 'home') navigateTo('/home');
            else if (target === 'search') navigateTo('/search');
            else if (target === 'profile') navigateTo('/profile');
            else if (target === 'pricing' || target === 'about') navigateTo('/search');
        });
    });
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

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function formatNumber(num) {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
}

function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

