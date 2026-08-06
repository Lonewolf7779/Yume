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
    // Column 1: Tall (1.5), Square (1.0), Wide (0.75) -> Sum: 3.25
    { id: '1', category: 'portrait', title: 'Golden Hour', width: 800, height: 1200 },
    { id: '2', category: 'architecture', title: 'Modern Living', width: 800, height: 800 },
    { id: '3', category: 'automotive', title: 'Neon Supercar', width: 800, height: 600 },
    
    // Column 2: Square (1.0), Wide (0.75), Tall (1.5) -> Sum: 3.25
    { id: '4', category: 'portrait', title: 'Editorial Look', width: 800, height: 800 },
    { id: '5', category: 'automotive', title: 'Cyber Drive', width: 800, height: 600 },
    { id: '6', category: 'architecture', title: 'Concrete Loft', width: 800, height: 1200 },
    
    // Column 3: Wide (0.75), Tall (1.5), Square (1.0) -> Sum: 3.25
    { id: '7', category: 'automotive', title: 'Street Racing', width: 800, height: 600 },
    { id: '8', category: 'portrait', title: 'Cinematic Light', width: 800, height: 1200 },
    { id: '9', category: 'architecture', title: 'Forest Glass', width: 800, height: 800 },
    
    // Column 4: Tall (1.5), Wide (0.75), Square (1.0) -> Sum: 3.25
    { id: '10', category: 'portrait', title: 'Natural Skin', width: 800, height: 1200 },
    { id: '11', category: 'architecture', title: 'Warm Light', width: 800, height: 600 },
    { id: '12', category: 'automotive', title: 'Matte Black', width: 800, height: 800 },
    
    // Column 5: Square (1.0), Tall (1.5), Wide (0.75) -> Sum: 3.25
    { id: '13', category: 'architecture', title: 'Luxury Minimal', width: 800, height: 800 },
    { id: '14', category: 'portrait', title: 'Studio Flash', width: 800, height: 1200 },
    { id: '15', category: 'automotive', title: 'Wet Reflections', width: 800, height: 600 },
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

const aiArtImages = [
    { title: 'Golden Hour Portrait', category: 'portrait', url: 'img/real_portrait.jpg' },
    { title: 'Neon Hypercar at Night', category: 'automotive', url: 'img/real_supercar.jpg' },
    { title: 'Modern Luxury Interior', category: 'architecture', url: 'img/real_architecture.jpg' },
    { title: 'Editorial Fashion Shot', category: 'portrait', url: 'img/real_portrait.jpg' },
    { title: 'Sleek Cyber Supercar', category: 'automotive', url: 'img/real_supercar.jpg' },
    { title: 'Minimalist Concrete Living', category: 'architecture', url: 'img/real_architecture.jpg' },
    { title: 'Cinematic Lighting Portrait', category: 'portrait', url: 'img/real_portrait.jpg' },
    { title: 'Wet Street Reflections', category: 'automotive', url: 'img/real_supercar.jpg' },
    { title: 'Forest View Architecture', category: 'architecture', url: 'img/real_architecture.jpg' },
    { title: 'Natural Skin Texture', category: 'portrait', url: 'img/real_portrait.jpg' },
    { title: 'Hypercar Matte Black', category: 'automotive', url: 'img/real_supercar.jpg' },
    { title: 'Luxury Warm Lighting', category: 'architecture', url: 'img/real_architecture.jpg' }
];

function generateMockCards() {
    return imageCollections.slice(0, 15).map((imageData, index) => {
        const creator = creators[index % creators.length];
        const aiArt = aiArtImages[index % aiArtImages.length];

        return {
            id: index + 1,
            title: aiArt.title,
            image: aiArt.url,
            width: imageData.width,
            height: imageData.height,
            creator,
            likes: Math.floor(((index + 7) * 731) % 9000) + 420,
            saves: Math.floor(((index + 11) * 347) % 4200) + 180,
            category: aiArt.category,
            description: `Generated with Yume AI Pro Engine (${aiArt.category} photography).`
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
        create: renderCreatePage,
        studio: renderStudioPage,
        explore: renderExplorePage,
        notifications: renderNotificationsPage,
        profile: renderProfilePage,
        settings: renderSettingsPage
    };

    if (page === 'pin' || page === 'image-detail') {
        if (typeof renderImageDetailPage === 'function') renderImageDetailPage(id);
    } else {
        if (routes[page]) {
            routes[page]();
        } else {
            renderHomePage();
        }
    }

    updateActiveNav(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateActiveNav(page) {
    const activePage = page === 'pin' ? 'discover' : page;

    // Desktop left rail active state
    document.querySelectorAll('[data-rail-nav]').forEach((link) => {
        const target = link.dataset.railNav;
        link.classList.toggle('active', target === activePage || (target === 'home' && activePage === 'discover'));
    });

    // Mobile bottom nav active state
    bottomNavBtns.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.nav === activePage || (btn.dataset.nav === 'home' && activePage === 'discover'));
    });

    // Top utility breadcrumb
    const breadcrumb = document.querySelector('[data-utility-breadcrumb]');
    if (breadcrumb) {
        const titles = {
            home: 'Discover',
            search: 'Explore',
            create: 'Create Studio',
            library: 'My Library',
            activity: 'Notifications',
            profile: 'Profile',
            settings: 'Settings',
            admin: 'Admin Centre',
            login: 'Log In',
            register: 'Create Account'
        };
        breadcrumb.textContent = titles[page] || 'Yume';
    }

    // Role-gated admin rail item
    const adminRailItem = document.querySelector('.admin-rail-item');
    if (adminRailItem) {
        adminRailItem.style.display = isAdmin() ? 'flex' : 'none';
    }

    // User footer update
    const userAvatar = document.querySelector('[data-user-avatar]');
    const userName = document.querySelector('[data-user-name]');
    const userStatus = document.querySelector('[data-user-status]');
    const utilityLoginBtn = document.querySelector('[data-utility-login]');

    if (isAuthenticated()) {
        if (userAvatar) userAvatar.src = `https://i.pravatar.cc/80?img=${(authState.user.id % 20) + 1}`;
        if (userName) userName.textContent = authState.user.username || 'Creator';
        if (userStatus) userStatus.textContent = authState.user.role === 'admin' ? 'Admin Creator' : 'Pro Creator';
        if (utilityLoginBtn) {
            utilityLoginBtn.textContent = 'Account';
            utilityLoginBtn.onclick = () => navigateTo('/profile');
        }
    } else {
        if (userAvatar) userAvatar.src = 'https://i.pravatar.cc/80?img=33';
        if (userName) userName.textContent = 'Guest Creator';
        if (userStatus) userStatus.textContent = 'Sign in';
        if (utilityLoginBtn) {
            utilityLoginBtn.textContent = 'Log in';
            utilityLoginBtn.onclick = () => navigateTo('/login');
        }
    }
}

/* ============================================
   Page Renderers
   ============================================ */

const defaultAvatarSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23ff7eb5'/%3E%3Ccircle cx='50' cy='38' r='20' fill='%23ffffff'/%3E%3Cpath d='M20,85 C20,65 33,56 50,56 C67,56 80,65 80,85 Z' fill='%23ffffff'/%3E%3C/svg%3E";

const refBentoSuites = {
    portrait: {
        cols: [
            { type: 'tall', img: 'img/real_portrait.jpg', handle: '@golden_hour', likes: '2.5K', avatar: defaultAvatarSvg },
            { 
                stacked: [
                    { type: 'medium', img: 'img/real_portrait.jpg', handle: '@fashion_lens', likes: '3.1K', avatar: defaultAvatarSvg },
                    { type: 'small', img: 'img/real_portrait.jpg', handle: '@editorial.pro', likes: '2.2K', avatar: defaultAvatarSvg }
                ] 
            },
            { type: 'tall', img: 'img/real_portrait.jpg', handle: '@sony_shooter', likes: '4.7K', avatar: defaultAvatarSvg },
            { 
                stacked: [
                    { type: 'medium', img: 'img/real_portrait.jpg', handle: '@bokeh_master', likes: '3.8K', avatar: defaultAvatarSvg },
                    { type: 'small', img: 'img/real_portrait.jpg', handle: '@raw_portraits', likes: '3.3K', avatar: defaultAvatarSvg }
                ] 
            },
            { type: 'tall', img: 'img/real_portrait.jpg', handle: '@studio_light', likes: '2.9K', avatar: defaultAvatarSvg }
        ]
    },
    automotive: {
        cols: [
            { type: 'tall', img: 'img/real_supercar.jpg', handle: '@hyper_rides', likes: '4.2K', avatar: defaultAvatarSvg },
            { 
                stacked: [
                    { type: 'medium', img: 'img/real_supercar.jpg', handle: '@neon_streets', likes: '5.1K', avatar: defaultAvatarSvg },
                    { type: 'small', img: 'img/real_supercar.jpg', handle: '@speed_hunters', likes: '3.6K', avatar: defaultAvatarSvg }
                ] 
            },
            { type: 'tall', img: 'img/real_supercar.jpg', handle: '@carbon_fiber', likes: '6.3K', avatar: defaultAvatarSvg },
            { 
                stacked: [
                    { type: 'medium', img: 'img/real_supercar.jpg', handle: '@night_drive', likes: '2.8K', avatar: defaultAvatarSvg },
                    { type: 'small', img: 'img/real_supercar.jpg', handle: '@exotic_cars', likes: '4.1K', avatar: defaultAvatarSvg }
                ] 
            },
            { type: 'tall', img: 'img/real_supercar.jpg', handle: '@supercar_daily', likes: '3.9K', avatar: defaultAvatarSvg }
        ]
    },
    architecture: {
        cols: [
            { type: 'tall', img: 'img/real_architecture.jpg', handle: '@arch_digest', likes: '5.8K', avatar: defaultAvatarSvg },
            { 
                stacked: [
                    { type: 'medium', img: 'img/real_architecture.jpg', handle: '@minimal_living', likes: '3.4K', avatar: defaultAvatarSvg },
                    { type: 'small', img: 'img/real_architecture.jpg', handle: '@concrete_home', likes: '4.9K', avatar: defaultAvatarSvg }
                ] 
            },
            { type: 'tall', img: 'img/real_architecture.jpg', handle: '@luxury_spaces', likes: '7.1K', avatar: defaultAvatarSvg },
            { 
                stacked: [
                    { type: 'medium', img: 'img/real_architecture.jpg', handle: '@interior_pro', likes: '4.5K', avatar: defaultAvatarSvg },
                    { type: 'small', img: 'img/real_architecture.jpg', handle: '@forest_view', likes: '3.2K', avatar: defaultAvatarSvg }
                ] 
            },
            { type: 'tall', img: 'img/real_architecture.jpg', handle: '@modern_homes', likes: '6.0K', avatar: defaultAvatarSvg }
        ]
    }
};

function updateRefBentoGrid(suiteKey) {
    const suite = refBentoSuites[suiteKey] || refBentoSuites.shrine;
    const container = document.getElementById('refBentoGrid');
    if (!container) return;

    // We flatten the old nested structure to extract images, as we are adopting the new True Masonry layout.
    const flatItems = [];
    if (suite.cols) {
        suite.cols.forEach(col => {
            if (col.stacked) col.stacked.forEach(c => flatItems.push(c));
            else flatItems.push(col);
        });
    }

    // Ensure we have exactly 13 items to fill the 7-row grid perfectly. Loop if necessary.
    const items = [];
    for (let i = 0; i < 13; i++) {
        items.push(flatItems[i % flatItems.length]);
    }

    const spanMap = [
        'span-row-2', 'span-large', 'span-row-2',
        'span-col-2', 'span-row-2', 'span-row-2',
        'span-row-2', 'span-row-3', 'span-large',
        'span-row-2', '', '', ''
    ];

    container.className = 'landing-ref-grid'; // Use the new grid class
    container.innerHTML = items.map((card, index) => `
        <div class="landing-showcase-item ${spanMap[index] || ''}" data-landing-create>
            <img src="${card.img}" alt="${card.handle}" class="ref-bento-img" />
            <div class="landing-showcase-text" style="font-size: 16px; display: flex; flex-direction: column; gap: 8px;">
                <span>${card.handle}</span>
                <span style="font-size: 12px; opacity: 0.7;">♡ ${card.likes}</span>
            </div>
        </div>
    `).join('');

    container.style.opacity = '1';

    container.querySelectorAll('[data-landing-create]').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (!requireAuthOrRedirect('/create')) return;
            navigateTo('/create');
        });
    });
}

function renderHomePage() {
    appRoot.innerHTML = `
        <!-- 1. Floating Public Header Bar -->
        <header class="public-landing-header">
            <nav class="public-navbar">
                <div class="orb-icon">Y<span class="plus">⁺</span></div>
                <div class="nav-expanded-content">
                    <a class="public-brand" href="#/home">
                        <span class="public-brand-text">Yume<sup class="public-brand-plus">⁺</sup></span>
                    </a>
                    <div class="public-nav-links">
                        <a href="#showcaseSection" class="public-nav-link">Gallery</a>
                        <a href="#promptSection" class="public-nav-link">Prompts</a>
                        <a href="#howItWorksSection" class="public-nav-link">How It Works</a>
                        <a href="#featuresSection" class="public-nav-link">Features</a>
                        <a href="#pricingSection" class="public-nav-link">Pricing</a>
                    </div>
                    <div class="public-nav-actions">
                        <button type="button" class="public-login-btn" data-landing-login>Log in</button>
                        <button type="button" class="public-cta-btn" data-landing-create>✦ Start Creating Free</button>
                    </div>
                </div>
            </nav>
        </header>

        <!-- 2. Hero Showcase Section (Exact Reference Layout Match) -->
        <section class="hero-showcase">
            <div class="hero-left-content">
                <p class="hero-eyebrow">WHERE AI CREATORS ARE BORN</p>
                <h1 class="hero-headline">
                    Become the<br>
                    <span class="pink-gradient-text">AI creator</span><br>
                    people<br>
                    remember<span class="pink-dot">.</span>
                </h1>
                <p class="hero-subtitle">
                    Turn your imagination or photos into stunning ultra-realistic images and professional photography in seconds. Private library by default.
                </p>

                <div class="hero-cta-group">
                    <button class="hero-primary-btn" type="button" data-landing-create>✦ Start Creating Free</button>
                    <a class="hero-secondary-btn" href="#showcaseSection">Explore Gallery &rarr;</a>
                </div>

                <div class="hero-social-proof">
                    <div class="avatar-stack">
                        <img src="https://i.pravatar.cc/80?img=33" alt="Creator avatar" />
                        <img src="https://i.pravatar.cc/80?img=47" alt="Creator avatar" />
                        <img src="https://i.pravatar.cc/80?img=12" alt="Creator avatar" />
                        <img src="https://i.pravatar.cc/80?img=65" alt="Creator avatar" />
                    </div>
                    <div class="proof-copy">
                        <strong id="heroUserCount">0</strong>
                        <span>Creators building their worlds</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. Interactive Prompt Preview & Sample Chips -->
        <section class="landing-section prompt-preview-section" id="promptSection">
            <div class="landing-section-header">
                <span class="section-badge">Instant Generation Hook</span>
                <h2 class="section-title">Try Popular Prompts & See Quality Instantly</h2>
                <p class="section-subtitle">Click any sample prompt chip below to preview ultra-realistic 8K images generated with Yume.</p>
            </div>

            <div class="prompt-chips-wrapper">
                <button type="button" class="prompt-chip active" data-suite-key="portrait" data-prompt-text="Ultra photorealistic portrait of a young woman with flowing auburn hair, golden hour sunlight streaming through, soft bokeh background of autumn leaves, wearing a cream cashmere sweater, shot on Sony A7R IV, 85mm f/1.4 lens, natural skin texture, cinematic color grading, editorial fashion photography">📸 Golden Hour Portrait</button>
                <button type="button" class="prompt-chip" data-suite-key="automotive" data-prompt-text="Ultra photorealistic shot of a sleek modern hypercar parked on a wet city street at night, neon reflections on puddles, cinematic lighting, highly detailed reflections, shot on medium format camera, 8k resolution">🏎️ Neon Night Hypercar</button>
                <button type="button" class="prompt-chip" data-suite-key="architecture" data-prompt-text="Ultra photorealistic interior design photography of a modern luxury living room, minimalist aesthetic, concrete walls, floor to ceiling windows showing a forest, warm natural lighting, high end furniture, 8k resolution, architectural digest style">🏢 Modern Luxury Interior</button>
            </div>

            <div class="prompt-box-card">
                <div class="prompt-box-input-row">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    <input type="text" id="landingPromptInput" class="landing-prompt-input" value="Ultra photorealistic portrait of a young woman with flowing auburn hair, golden hour sunlight streaming through, soft bokeh background of autumn leaves, wearing a cream cashmere sweater, shot on Sony A7R IV, 85mm f/1.4 lens, natural skin texture, cinematic color grading, editorial fashion photography" />
                    <button type="button" class="landing-generate-btn" data-landing-create>✦ Generate Image</button>
                </div>

                <!-- 5-Column Bento Masonry Display Below Prompt Input Bar -->
                <div class="prompt-preview-result-wrap">
                    <div id="refBentoGrid" class="ref-bento-grid"></div>
                </div>
            </div>
        </section>

        <!-- 4. Curated Style & Wallpaper Gallery Showcase -->
        <section class="landing-section showcase-section" id="showcaseSection">
            <div class="landing-section-header">
                <span class="section-badge">Created with Yume</span>
                <h2 class="section-title">Explore Community Wallpapers & Styles</h2>
                <p class="section-subtitle">Discover wallpapers and character art created by creators worldwide. One-click remix any prompt.</p>
            </div>

            <div class="landing-showcase-grid" id="publicShowcaseGrid">
                <!-- Populated dynamically by populatePublicShowcase() -->
            </div>
        </section>

        <!-- 5. How Yume Works (3 Simple Steps) -->
        <section class="landing-section how-it-works-section" id="howItWorksSection">
            <div class="landing-section-header">
                <span class="section-badge">Simple & Intuitive</span>
                <h2 class="section-title">How Yume Works in 3 Steps</h2>
                <p class="section-subtitle">From imagination to desktop wallpaper in under 10 seconds.</p>
            </div>

            <div class="steps-flow">
                <div class="step-flow-item">
                    <div class="step-flow-content">
                        <div class="step-flow-bg-number">01</div>
                        <h3 class="step-flow-title">Describe or Upload</h3>
                        <p class="step-flow-desc">Write your prompt in plain English or upload an existing photo to transform into realistic art.</p>
                    </div>
                    <div class="step-flow-visual">
                        <img src="img/real_supercar.jpg" alt="Cyberpunk Supercar Prompt" />
                    </div>
                </div>
                <div class="step-flow-item">
                    <div class="step-flow-content">
                        <div class="step-flow-bg-number">02</div>
                        <h3 class="step-flow-title">Select Style & Ratio</h3>
                        <p class="step-flow-desc">Choose Desktop Wallpaper (16:9), Mobile Phone (9:16), or Avatar (1:1) with custom realistic style presets.</p>
                    </div>
                    <div class="step-flow-visual">
                        <img src="img/real_portrait.jpg" alt="Select style and ratio" />
                    </div>
                </div>
                <div class="step-flow-item">
                    <div class="step-flow-content">
                        <div class="step-flow-bg-number">03</div>
                        <h3 class="step-flow-title">Keep Private or Share</h3>
                        <p class="step-flow-desc">All creations are saved 100% private in your library. Publish to the community only when you choose.</p>
                    </div>
                    <div class="step-flow-visual">
                        <img src="img/real_architecture.jpg" alt="Keep private or share" />
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. Core Value Highlights -->
        <section class="landing-section features-section" id="featuresSection">
            <div class="landing-section-header">
                <span class="section-badge">Built for Creators</span>
                <h2 class="section-title">Why Creators Choose Yume</h2>
                <p class="section-subtitle">Designed from the ground up for privacy, quality, and creative control.</p>
            </div>

            <div class="delicate-features-container">
                <div class="delicate-feature-item">
                    <div class="delicate-feature-number">01</div>
                    <div class="delicate-feature-text">
                        <h3 class="delicate-feature-title">Private Library</h3>
                        <p class="delicate-feature-desc">Your uploaded photos and generated wallpapers stay strictly private until you consciously choose to publish them.</p>
                    </div>
                </div>
                <div class="delicate-feature-item">
                    <div class="delicate-feature-number">02</div>
                    <div class="delicate-feature-text">
                        <h3 class="delicate-feature-title">Yume Pro Engine</h3>
                        <p class="delicate-feature-desc">Powered by state-of-the-art AI models for flawless anatomy, intricate clothing textures, and breathtaking lighting.</p>
                    </div>
                </div>
                <div class="delicate-feature-item">
                    <div class="delicate-feature-number">03</div>
                    <div class="delicate-feature-text">
                        <h3 class="delicate-feature-title">4K Upscaling</h3>
                        <p class="delicate-feature-desc">Export crystal clear 4K resolutions perfect for dual-monitor setups, iPad wallpapers, and high-DPI mobile screens.</p>
                    </div>
                </div>
                <div class="delicate-feature-item">
                    <div class="delicate-feature-number">04</div>
                    <div class="delicate-feature-text">
                        <h3 class="delicate-feature-title">One-Click Remix</h3>
                        <p class="delicate-feature-desc">Love a wallpaper in the community showcase? One-click remix to copy its exact prompt, seed, and settings into your studio.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7. Pricing & Free Credits -->
        <section class="landing-section pricing-section" id="pricingSection">
            <div class="landing-section-header">
                <span class="section-badge">Transparent Pricing</span>
                <h2 class="section-title">Start Free, Upgrade for Power</h2>
                <p class="section-subtitle">No credit card required to start creating today.</p>
            </div>

            <div class="pricing-strip-container">
                <div class="pricing-tier">
                    <div class="tier-name">Free</div>
                    <div class="tier-price">$0<span>/mo</span></div>
                    <ul class="tier-features-list">
                        <li>50 Daily Free Credits</li>
                        <li>Standard Resolution Exports</li>
                        <li>Access to Yume Studio</li>
                        <li>Private Library Access</li>
                        <li>Community Showcase Access</li>
                    </ul>
                    <button class="tier-btn" data-landing-create>Start Free</button>
                </div>
                <div class="pricing-tier">
                    <div class="tier-name">Creator</div>
                    <div class="tier-price">$5<span>/mo</span></div>
                    <ul class="tier-features-list">
                        <li>300 Daily Fast Credits</li>
                        <li>High Resolution Exports</li>
                        <li>Advanced Prompt Tuning</li>
                        <li>1-Click Community Remixing</li>
                        <li>Image to Image Generation</li>
                    </ul>
                    <button class="tier-btn" data-landing-create>Upgrade</button>
                </div>
                <div class="pricing-tier popular">
                    <div class="tier-name">Pro</div>
                    <div class="tier-price">$12<span>/mo</span></div>
                    <ul class="tier-features-list">
                        <li>Unlimited Fast Credits</li>
                        <li>4K Ultra HD Upscaling</li>
                        <li>FLUX.2 PRO Engine Access</li>
                        <li>Priority Generation Queue</li>
                        <li>Commercial Rights Included</li>
                        <li>Custom Aspect Ratios</li>
                    </ul>
                    <button class="tier-btn" data-landing-create>Go Pro</button>
                </div>
                <div class="pricing-tier">
                    <div class="tier-name">Studio</div>
                    <div class="tier-price">$29<span>/mo</span></div>
                    <ul class="tier-features-list">
                        <li>Dedicated GPU Instances</li>
                        <li>Enterprise API Access</li>
                        <li>Team Collaboration Tools</li>
                        <li>White-label Generation</li>
                        <li>Unlimited 4K Upscaling</li>
                        <li>Dedicated Account Support</li>
                    </ul>
                    <button class="tier-btn" data-landing-create>Get Studio</button>
                </div>
            </div>
        </section>

        <!-- 8. Final High-Impact CTA Banner -->
        <section class="landing-section cta-banner-section">
            <div class="cta-banner-content">
                <h2 class="cta-banner-title">Ready to create your custom wallpaper?</h2>
                <p class="cta-banner-subtitle">Join <span data-user-count>0</span> creators building their visual worlds on Yume today.</p>
                <button type="button" class="cta-banner-btn" data-landing-create>✦ Start Creating Free</button>
            </div>
        </section>

        <!-- 9. Editorial Footer -->
        <footer class="public-footer">
            <div class="footer-container">
                <div class="footer-brand-col">
                    <span class="footer-logo">Yume<sup class="footer-logo-plus">⁺</sup></span>
                    <p class="footer-tagline">Where AI Creators Are Born. High-quality anime wallpapers and character art.</p>
                </div>
                <div class="footer-links-col">
                    <h4>Product</h4>
                    <a href="#showcaseSection">Showcase</a>
                    <a href="#promptSection">Prompts</a>
                    <a href="#howItWorksSection">How It Works</a>
                    <a href="#pricingSection">Pricing</a>
                </div>
                <div class="footer-links-col">
                    <h4>Community</h4>
                    <a href="#">Discord</a>
                    <a href="#">Twitter / X</a>
                    <a href="#">Instagram</a>
                    <a href="#">Creator Blog</a>
                </div>
                <div class="footer-links-col">
                    <h4>Legal & Trust</h4>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Content Guidelines</a>
                    <a href="#">Security</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© 2026 Yume AI Inc. All rights reserved.</p>
            </div>
        </footer>
    `;

    fetchRegisteredUserCount();
    populatePublicShowcase();
    updateRefBentoGrid('portrait');

    document.querySelectorAll('[data-landing-create]').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (!requireAuthOrRedirect('/create')) return;
            navigateTo('/create');
        });
        if (isAuthenticated() && btn.tagName === 'BUTTON') {
            btn.textContent = '✦ Open Studio';
        }
    });

    document.querySelectorAll('[data-landing-login]').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (isAuthenticated()) navigateTo('/profile');
            else navigateTo('/login');
        });
        if (isAuthenticated()) {
            btn.textContent = 'Dashboard';
        }
    });

    document.querySelectorAll('.prompt-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.prompt-chip').forEach((c) => c.classList.remove('active'));
            chip.classList.add('active');
            const input = document.getElementById('landingPromptInput');
            if (input) input.value = chip.dataset.promptText;
            updateRefBentoGrid(chip.dataset.suiteKey);
        });
    });

    const landingGenBtn = document.querySelector('.landing-generate-btn');
    if (landingGenBtn) {
        landingGenBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const activeChip = document.querySelector('.prompt-chip.active');
            const key = activeChip ? activeChip.dataset.suiteKey : 'shrine';
            updateRefBentoGrid(key);
        });
    }
}

async function fetchRegisteredUserCount() {
    try {
        const response = await fetch('/api/stats/users');
        if (!response.ok) return;
        const data = await response.json();
        const userCount = Number(data.userCount || 0);
        const countElements = document.querySelectorAll('#heroUserCount, [data-user-count]');
        countElements.forEach((el) => {
            if (userCount >= 1000) {
                el.textContent = (userCount / 1000).toFixed(1) + 'K+';
            } else {
                el.textContent = userCount.toLocaleString();
            }
        });
    } catch {
        // Fallback remains 0
    }
}

async function populatePublicShowcase() {
    const grid = document.getElementById('publicShowcaseGrid');
    if (!grid) return;

    let items = [];
    try {
        const { res, body } = await apiFetchJson('/api/generations/public?limit=13');
        if (res.ok && body?.generations?.length > 0) {
            items = body.generations.map((g, idx) => ({
                url: g.images[0]?.url,
                title: g.prompt || `AI Generation ${idx + 1}`
            }));
        }
    } catch (e) {
        console.error('Failed to load public generations', e);
    }

    // Fallback to local curated showcase if backend doesn't have enough
    while (items.length < 13) {
        const art = aiArtImages[items.length % aiArtImages.length];
        items.push({
            url: art.url,
            title: art.title
        });
    }

    // 13 items mapped into our 7-row perfectly rectangular asymmetric true masonry grid
    const spanMap = [
        'span-row-2', 'span-large', 'span-row-2',
        'span-col-2', 'span-row-2', 'span-row-2',
        'span-row-2', 'span-row-3', 'span-large',
        'span-row-2', '', '', ''
    ];

    grid.innerHTML = items.slice(0, 13).map((item, index) => `
        <div class="landing-showcase-item ${spanMap[index] || ''}">
            <img src="${item.url}" alt="${item.title}">
            <div class="landing-showcase-text">${index + 1}${['st', 'nd', 'rd'][((index + 1) % 10) - 1] || 'th'} item</div>
        </div>
    `).join('');
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

document.querySelectorAll('[data-rail-create], [data-utility-create], .yume-start-creating-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        if (!requireAuthOrRedirect('/create')) return;
        navigateTo('/create');
    });
});

document.querySelector('[data-utility-search]')?.addEventListener('input', (event) => {
    activeSearchTerm = event.target.value.trim();
    if (getRoute().page !== 'search') {
        navigateTo('/search');
        return;
    }
    renderSearchPage();
    updateActiveNav('search');
});

document.querySelector('[data-rail-user-footer]')?.addEventListener('click', () => {
    if (isAuthenticated()) navigateTo('/profile');
    else navigateTo('/login');
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

