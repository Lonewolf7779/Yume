/* ============================================
   Yume SPA Views & App Shell (Low-Fidelity Architecture)
   ============================================ */

function renderAppShell(content, activeSidebarItem = '') {
    return `
        <div class="app-workspace">
            <!-- Minimal Top Nav -->
            <header class="workspace-header">
                <div class="workspace-brand" onclick="navigateTo('/home')" style="cursor:pointer;">Yume<sup class="public-brand-plus">⁺</sup></div>
                <div class="workspace-header-actions">
                    <button class="workspace-btn" onclick="navigateTo('/create')">✦ Create</button>
                    <button class="icon-btn" onclick="navigateTo('/notifications')">🔔</button>
                    <button class="avatar-btn" onclick="navigateTo('/profile')">
                        <img src="https://i.pravatar.cc/80?img=33" alt="User">
                    </button>
                </div>
            </header>
            
            <div class="workspace-body">
                <!-- Sidebar (Reserved space for future modules) -->
                <aside class="workspace-sidebar">
                    <nav class="sidebar-nav">
                        <div class="sidebar-group">
                            <div class="sidebar-label">WORKSPACE</div>
                            <a href="#/studio" class="sidebar-link ${activeSidebarItem === 'studio' ? 'active' : ''}">Studio Home</a>
                            <a href="#/create" class="sidebar-link ${activeSidebarItem === 'create' ? 'active' : ''}">Generation</a>
                            <a href="#/explore" class="sidebar-link ${activeSidebarItem === 'explore' ? 'active' : ''}">Explore</a>
                            <a href="#/search" class="sidebar-link ${activeSidebarItem === 'search' ? 'active' : ''}">Search</a>
                        </div>
                        <div class="sidebar-group">
                            <div class="sidebar-label">FUTURE MODULES</div>
                            <a href="javascript:void(0)" class="sidebar-link disabled">Characters</a>
                            <a href="javascript:void(0)" class="sidebar-link disabled">Universes</a>
                            <a href="javascript:void(0)" class="sidebar-link disabled">Collections</a>
                            <a href="javascript:void(0)" class="sidebar-link disabled">Challenges</a>
                            <a href="javascript:void(0)" class="sidebar-link disabled">Marketplace</a>
                            <a href="javascript:void(0)" class="sidebar-link disabled">Learning</a>
                        </div>
                        <div class="sidebar-group">
                            <div class="sidebar-label">ACCOUNT</div>
                            <a href="#/profile" class="sidebar-link ${activeSidebarItem === 'profile' ? 'active' : ''}">Profile</a>
                            <a href="#/settings" class="sidebar-link ${activeSidebarItem === 'settings' ? 'active' : ''}">Settings</a>
                        </div>
                    </nav>
                </aside>
                
                <!-- Main Content Area -->
                <main class="workspace-content">
                    ${content}
                </main>
            </div>
        </div>
    `;
}

function renderLoginPage() {
    appRoot.innerHTML = `
        <div class="auth-layout">
            <div class="auth-card">
                <h2>Welcome Back</h2>
                <p>Log in to access your Studio.</p>
                <div class="auth-placeholder-form">
                    <div class="placeholder-input">Email</div>
                    <div class="placeholder-input">Password</div>
                    <button class="placeholder-btn primary" onclick="navigateTo('/studio')">Log In</button>
                </div>
                <p class="auth-switch">Don't have an account? <a href="#/register">Register</a></p>
                <div style="margin-top:20px;text-align:center;"><a href="#/home">← Back to Landing</a></div>
            </div>
        </div>
    `;
}

function renderRegisterPage() {
    appRoot.innerHTML = `
        <div class="auth-layout">
            <div class="auth-card">
                <h2>Join Yume</h2>
                <p>Create your creator account.</p>
                <div class="auth-placeholder-form">
                    <div class="placeholder-input">Username</div>
                    <div class="placeholder-input">Email</div>
                    <div class="placeholder-input">Password</div>
                    <button class="placeholder-btn primary" onclick="navigateTo('/studio')">Create Account</button>
                </div>
                <p class="auth-switch">Already have an account? <a href="#/login">Log In</a></p>
                <div style="margin-top:20px;text-align:center;"><a href="#/home">← Back to Landing</a></div>
            </div>
        </div>
    `;
}

function renderStudioPage() {
    const content = `
        <div class="view-header">
            <h1>Good morning, Creator.</h1>
            <div class="placeholder-search-bar">Search your workspace...</div>
        </div>
        
        <div class="studio-dashboard">
            <div class="dashboard-stats-row">
                <div class="stat-card"><h3>1,204</h3><p>Generations</p></div>
                <div class="stat-card"><h3>85</h3><p>Followers</p></div>
                <div class="stat-card"><h3>320K</h3><p>Views</p></div>
            </div>
            
            <div class="section-title-row">
                <h2>Recent Creations</h2>
                <button class="placeholder-text-btn" onclick="navigateTo('/profile')">View All</button>
            </div>
            
            <div class="placeholder-masonry">
                <div class="placeholder-box tall"></div>
                <div class="placeholder-box square"></div>
                <div class="placeholder-box wide"></div>
                <div class="placeholder-box tall"></div>
                <div class="placeholder-box square"></div>
                <div class="placeholder-box tall"></div>
            </div>
        </div>
    `;
    appRoot.innerHTML = renderAppShell(content, 'studio');
}

function renderExplorePage() {
    const content = `
        <div class="explore-hero">
            <h1>Discover Infinite Worlds</h1>
            <div class="placeholder-search-bar large">Search characters, styles, or prompts...</div>
            <div class="trending-tags">
                <span class="tag">Cyberpunk</span>
                <span class="tag">Studio Ghibli</span>
                <span class="tag">Hyperrealistic</span>
                <span class="tag">Anime Key Visual</span>
            </div>
        </div>
        <div class="placeholder-masonry massive">
            <div class="placeholder-box tall"></div>
            <div class="placeholder-box square"></div>
            <div class="placeholder-box wide"></div>
            <div class="placeholder-box tall"></div>
            <div class="placeholder-box square"></div>
            <div class="placeholder-box tall"></div>
            <div class="placeholder-box wide"></div>
            <div class="placeholder-box tall"></div>
            <div class="placeholder-box square"></div>
            <div class="placeholder-box wide"></div>
            <div class="placeholder-box tall"></div>
            <div class="placeholder-box square"></div>
        </div>
    `;
    appRoot.innerHTML = renderAppShell(content, 'explore');
}

function renderProfilePage() {
    const content = `
        <div class="profile-cover placeholder-cover"></div>
        <div class="profile-header-info">
            <div class="profile-avatar placeholder-avatar"></div>
            <div class="profile-details">
                <h1>Creator Name</h1>
                <p>@creator_handle • Pro Member</p>
                <div class="profile-actions">
                    <button class="placeholder-btn outline">Edit Profile</button>
                    <button class="placeholder-btn primary">Share</button>
                </div>
            </div>
        </div>
        
        <div class="profile-tabs">
            <div class="tab active">Creations</div>
            <div class="tab">Collections</div>
            <div class="tab">Liked</div>
        </div>
        
        <div class="placeholder-masonry">
            <div class="placeholder-box square"></div>
            <div class="placeholder-box square"></div>
            <div class="placeholder-box square"></div>
            <div class="placeholder-box square"></div>
        </div>
    `;
    appRoot.innerHTML = renderAppShell(content, 'profile');
}

function renderCreatePage() {
    const content = `
        <div class="create-layout">
            <!-- Generation Panel -->
            <div class="create-sidebar">
                <h2>Generation Settings</h2>
                <div class="form-group">
                    <label>Model Engine</label>
                    <div class="placeholder-dropdown">FLUX.2 PRO</div>
                </div>
                <div class="form-group">
                    <label>Aspect Ratio</label>
                    <div class="ratio-selector">
                        <div class="ratio-box active">1:1</div>
                        <div class="ratio-box">16:9</div>
                        <div class="ratio-box">9:16</div>
                    </div>
                </div>
                <div class="form-group">
                    <label>Reference Image (Optional)</label>
                    <div class="placeholder-upload-zone">
                        <span>Drop image to use as reference</span>
                    </div>
                </div>
            </div>
            
            <!-- Main Workspace -->
            <div class="create-main">
                <div class="prompt-area">
                    <textarea class="placeholder-textarea" placeholder="Describe what you want to create..."></textarea>
                    <div class="prompt-actions">
                        <button class="placeholder-btn primary massive">✦ Generate (1 Credit)</button>
                    </div>
                </div>
                
                <div class="generation-preview-area">
                    <div class="placeholder-canvas">
                        <p>Your generation will appear here</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    appRoot.innerHTML = renderAppShell(content, 'create');
}

function renderSearchPage() {
    const content = `
        <div class="search-layout">
            <div class="search-filters">
                <h3>Filters</h3>
                <div class="form-group">
                    <label>Category</label>
                    <div class="placeholder-dropdown">All</div>
                </div>
                <div class="form-group">
                    <label>Sort By</label>
                    <div class="placeholder-dropdown">Trending</div>
                </div>
            </div>
            <div class="search-results">
                <div class="placeholder-search-bar">Search...</div>
                <div class="placeholder-masonry">
                    <div class="placeholder-box square"></div>
                    <div class="placeholder-box square"></div>
                    <div class="placeholder-box square"></div>
                </div>
            </div>
        </div>
    `;
    appRoot.innerHTML = renderAppShell(content, 'search');
}

function renderNotificationsPage() {
    const content = `
        <div class="settings-layout">
            <div class="settings-main">
                <h2>Notifications</h2>
                <div class="notification-list">
                    <div class="notification-item">
                        <div class="placeholder-avatar small"></div>
                        <div class="notif-content">
                            <p><strong>@sarahpins</strong> remixed your creation.</p>
                            <span>2 hours ago</span>
                        </div>
                    </div>
                    <div class="notification-item">
                        <div class="placeholder-avatar small"></div>
                        <div class="notif-content">
                            <p>Your generation <strong>"Neon Hypercar"</strong> reached 1,000 views!</p>
                            <span>5 hours ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    appRoot.innerHTML = renderAppShell(content, '');
}

function renderSettingsPage() {
    const content = `
        <div class="settings-layout">
            <div class="settings-sidebar">
                <div class="settings-tab active">Account</div>
                <div class="settings-tab">Subscription</div>
                <div class="settings-tab">API Keys</div>
                <div class="settings-tab">Preferences</div>
            </div>
            <div class="settings-main">
                <h2>Account Settings</h2>
                <div class="form-group">
                    <label>Display Name</label>
                    <div class="placeholder-input">Creator Name</div>
                </div>
                <div class="form-group">
                    <label>Email Address</label>
                    <div class="placeholder-input">creator@example.com</div>
                </div>
                <button class="placeholder-btn primary">Save Changes</button>
            </div>
        </div>
    `;
    appRoot.innerHTML = renderAppShell(content, 'settings');
}

function renderImageDetailPage(id) {
    const content = `
        <div class="image-detail-layout">
            <div class="image-detail-main">
                <div class="placeholder-canvas huge">
                    <p>Image ID: ${id || '123'}</p>
                </div>
            </div>
            <div class="image-detail-sidebar">
                <div class="detail-creator-row">
                    <div class="placeholder-avatar small"></div>
                    <div>
                        <strong>Creator Name</strong>
                        <p>@creator</p>
                    </div>
                </div>
                
                <div class="detail-prompt-box">
                    <h3>Prompt</h3>
                    <p>Ultra photorealistic portrait of a young woman with flowing auburn hair, golden hour sunlight...</p>
                </div>
                
                <div class="detail-metadata">
                    <div class="meta-item"><span>Engine:</span> FLUX.2 PRO</div>
                    <div class="meta-item"><span>Seed:</span> 982734982</div>
                    <div class="meta-item"><span>Resolution:</span> 1024x1024</div>
                </div>
                
                <button class="placeholder-btn primary full-width">Remix This Prompt</button>
            </div>
        </div>
    `;
    appRoot.innerHTML = renderAppShell(content, '');
}
