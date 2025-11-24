// Template data
const templates = [
  { id: 1, title: "AI Automation Company Website", category: "business", description: "A modern website for AI or automation startups. Shows services, products, and success stories with futuristic blue gradients and smooth effects.", pages: 5 },
  { id: 2, title: "SaaS Dashboard Website", category: "business", description: "Ideal for SaaS or software tools. Highlights features, pricing, and product screenshots in a clean, scroll-based single-page design.", pages: 1 },
  { id: 3, title: "Cybersecurity Company Website", category: "business", description: "Dark and techy design for cybersecurity firms. Focuses on safety, protection services, certifications, and client trust.", pages: 7 },
  { id: 4, title: "Fitness and Gym Website", category: "business", description: "Perfect for gyms and fitness centers. Displays training programs, trainers, schedules, and membership plans in one strong layout.", pages: 1 },
  { id: 5, title: "Restaurant and Café Website", category: "restaurant", description: "Warm, inviting theme for restaurants or cafés. Features menu, photos, reviews, and easy table reservation.", pages: 6 },
  { id: 6, title: "Travel Agency Website", category: "business", description: "Vibrant site for travel planners and agencies. Includes destinations, tour packages, booking details, and customer feedback.", pages: 6 },
  { id: 7, title: "Restaurant & Café Website", category: "restaurant", description: "Cozy single-page site for small cafés or diners. Focused on attractive visuals, menu highlights, and contact options.", pages: 1 },
  { id: 8, title: "Bakery Website", category: "restaurant", description: "Bright and cheerful theme for bakeries and dessert shops. Shows popular items, offers, and online order links.", pages: 5 },
  { id: 9, title: "Music Streaming Platform Website", category: "creative", description: "Stylish dark theme for music platforms. Includes playlists, albums, artist profiles, and a clean streaming interface.", pages: 7 },
  { id: 10, title: "Real Estate Agency Website", category: "business", description: "Professional layout for property businesses. Lists properties with photos, details, pricing, and contact info.", pages: 7 },
  { id: 11, title: "Fitness Coaching Website", category: "business", description: "Perfect for personal trainers. Displays programs, testimonials, and booking forms in a motivating design.", pages: 1 },
  { id: 12, title: "NGO / Charity Website", category: "business", description: "Heartwarming site for charities or NGOs. Highlights causes, donation links, and volunteer information.", pages: 1 },
  { id: 13, title: "Travel Agency Website", category: "business", description: "Adventure-themed design for travel brands. Features tour packages, galleries, and easy booking options.", pages: 5 },
  { id: 14, title: "Hotel Booking Website", category: "business", description: "Modern hotel website with booking forms. Displays rooms, amenities, pricing, and reviews clearly.", pages: 5 },
  { id: 15, title: "Law Firm Website", category: "business", description: "Clean, corporate layout for legal firms. Includes practice areas, lawyer profiles, and consultation forms.", pages: 6 },
  { id: 16, title: "News Portal Website", category: "blog", description: "Professional layout for news or magazine sites. Displays headlines, categories, trending stories, and archives.", pages: 7 },
  { id: 17, title: "Wedding Planner Website", category: "creative", description: "Elegant and romantic design for wedding services. Highlights past events, packages, and booking details.", pages: 1 },
  { id: 18, title: "Travel Blog Website", category: "blog", description: "Designed for travel bloggers. Showcases destinations, stories, and photography with a modern blog layout.", pages: 6 },
  { id: 19, title: "School Website", category: "business", description: "Bright and welcoming design for schools. Displays courses, admissions, notices, and events.", pages: 7 },
  { id: 20, title: "College Website", category: "business", description: "Professional and informative site for colleges. Covers courses, faculty, admissions, and campus life in detail.", pages: 7 },
  { id: 21, title: "Online Course Platform", category: "business", description: "User-friendly platform for online education. Lists courses, instructors, enroll options, and student feedback.", pages: 6 },
  { id: 22, title: "Bookstore Website", category: "ecommerce", description: "Simple and neat website for bookstores. Features categories, search, featured books, and easy checkout.", pages: 6 }
];

let currentFilter = 'all';

// Default configuration
const defaultConfig = {
  hero_title: "Website Templates",
  hero_tagline: "Ready-made designs for every business.",
  brand_name: "WebCliq"
};

// Attempt to map preview images to templates (homepage glimpse)
const templateImages = {
  1: "WebCliq Template Pictures/Template 01/1-home.png",
  2: "WebCliq Template Pictures/Template 02/2-home.png",
  3: "WebCliq Template Pictures/Template 03/3-home.png",
  4: "WebCliq Template Pictures/Template 04/4-home.png",
  5: "WebCliq Template Pictures/Template 05/5-home.png",
  6: "WebCliq Template Pictures/Template 06/6-home.png",
  7: "WebCliq Template Pictures/Template 07/7-HOME.png",
  8: "WebCliq Template Pictures/Template 08/8 -Home.png",
  9: "WebCliq Template Pictures/Template 09/9-home.png",
  10: "WebCliq Template Pictures/Template 10/10-HOME.png",
  11: "WebCliq Template Pictures/Template 11/11-HOME.png",
  12: "WebCliq Template Pictures/Template 12/12-Home.png",
  13: "WebCliq Template Pictures/Template 13/13-home.png",
  14: "WebCliq Template Pictures/Template 14/14-home.png",
  15: "WebCliq Template Pictures/Template 15/15-home.png",
  16: "WebCliq Template Pictures/Template 16/16-home.png",
  17: "WebCliq Template Pictures/Template 17/17-home.png",
  18: "WebCliq Template Pictures/Template 18/18-home.png",
  19: "WebCliq Template Pictures/Template 19/19-Home.png",
  20: "WebCliq Template Pictures/Template 20/20-Home.png",
  21: "WebCliq Template Pictures/Template 21/21-Home.png",
  22: "WebCliq Template Pictures/Template 22/22-Home.png",
};

function getTemplatePreviewSrc(t) {
  const src = templateImages[t.id];
  return src || "";
}

// Render templates
function renderTemplates(filter = 'all') {
  const grid = document.getElementById('templates-grid');
  const filteredTemplates = filter === 'all' ? templates : templates.filter(t => t.category === filter);

  grid.innerHTML = '';

  filteredTemplates.forEach((template, index) => {
    const card = document.createElement('div');
    card.className = 'template-card fade-in';
    card.style.animationDelay = `${index * 0.1}s`;

    const previewSrc = getTemplatePreviewSrc(template);
    card.innerHTML = `
      <div class="template-preview">
        ${previewSrc ? `<img src="${previewSrc}" alt="${template.title} homepage preview" onerror="this.style.display='none'" />` : ''}
        <span class="template-badge">${template.category}</span>
        <div class="template-actions">
          <button class="template-action" onclick="viewDemo(${template.id})">🔍 Preview</button>
          <a class="template-action" href="#contact">💬 Contact</a>
        </div>
      </div>
      <div class="template-info">
        <div class="template-category">${template.category}</div>
        <h3 class="template-title">${template.title}</h3>
        <p class="template-description">${template.description}</p>
        <div class="template-meta">
          <span>📄</span>
          <span>${template.pages} Page${template.pages > 1 ? 's' : ''}</span>
        </div>
        <button class="view-demo-btn" onclick="viewDemo(${template.id})">View Demo</button>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Filter functionality
function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.category;
      currentFilter = category;
      renderTemplates(category);
    });
  });
}

// Modal and slider functionality
let currentSlide = 0;
let currentTemplate = null;

// Map of template pages to their image paths for accurate previews
const templatePageImages = {
  1: [
    "WebCliq Template Pictures/Template 01/1-home.png",
    "WebCliq Template Pictures/Template 01/1-about.png",
    "WebCliq Template Pictures/Template 01/1-services.png",
    "WebCliq Template Pictures/Template 01/1-blog.png",
    "WebCliq Template Pictures/Template 01/1-contact.png",
  ],
  2: ["WebCliq Template Pictures/Template 02/2-home.png"],
  3: [
    "WebCliq Template Pictures/Template 03/3-home.png",
    "WebCliq Template Pictures/Template 03/3-about.png",
    "WebCliq Template Pictures/Template 03/3-team.png",
    "WebCliq Template Pictures/Template 03/3-blog1.png",
    "WebCliq Template Pictures/Template 03/3-blog2.png",
    "WebCliq Template Pictures/Template 03/3-blog3.png",
    "WebCliq Template Pictures/Template 03/3-privacypolicy.png",
  ],
  4: ["WebCliq Template Pictures/Template 04/4-home.png"],
  5: [
    "WebCliq Template Pictures/Template 05/5-home.png",
    "WebCliq Template Pictures/Template 05/5-menu.png",
    "WebCliq Template Pictures/Template 05/5-gallery.png",
    "WebCliq Template Pictures/Template 05/5-reservation.png",
    "WebCliq Template Pictures/Template 05/5-about.png",
    "WebCliq Template Pictures/Template 05/5-contact.png",
  ],
  6: [
    "WebCliq Template Pictures/Template 06/6-home.png",
    "WebCliq Template Pictures/Template 06/6-destination.png",
    "WebCliq Template Pictures/Template 06/6-packages.png",
    "WebCliq Template Pictures/Template 06/6-gallery.png",
    "WebCliq Template Pictures/Template 06/6-reviews.png",
    "WebCliq Template Pictures/Template 06/6-contact.png",
  ],
  7: ["WebCliq Template Pictures/Template 07/7-HOME.png"],
  8: [
    "WebCliq Template Pictures/Template 08/8 -Home.png",
    "WebCliq Template Pictures/Template 08/8-Menu.png",
    "WebCliq Template Pictures/Template 08/8-gallery.png",
    "WebCliq Template Pictures/Template 08/8-about.png",
    "WebCliq Template Pictures/Template 08/8-order.png",
  ],
  9: [
    "WebCliq Template Pictures/Template 09/9-home.png",
    "WebCliq Template Pictures/Template 09/9-trending.png",
    "WebCliq Template Pictures/Template 09/9-playlist.png",
    "WebCliq Template Pictures/Template 09/9-artist.png",
    "WebCliq Template Pictures/Template 09/9-subscription.png",
    "WebCliq Template Pictures/Template 09/9_genre.png",
    "WebCliq Template Pictures/Template 09/9-contact.png",
  ],
  10: [
    "WebCliq Template Pictures/Template 10/10-HOME.png",
    "WebCliq Template Pictures/Template 10/10-LISTINGS.png",
    "WebCliq Template Pictures/Template 10/10-Agents.png",
    "WebCliq Template Pictures/Template 10/10-gallery.png",
    "WebCliq Template Pictures/Template 10/10-neighbourhoods.png",
    "WebCliq Template Pictures/Template 10/10-blog.png",
    "WebCliq Template Pictures/Template 10/10-Contact.png",
  ],
  11: ["WebCliq Template Pictures/Template 11/11-HOME.png"],
  12: ["WebCliq Template Pictures/Template 12/12-Home.png"],
  13: [
    "WebCliq Template Pictures/Template 13/13-home.png",
    "WebCliq Template Pictures/Template 13/13-destinations.png",
    "WebCliq Template Pictures/Template 13/13-packages.png",
    "WebCliq Template Pictures/Template 13/13-booking.png",
    "WebCliq Template Pictures/Template 13/13-blog.png",
  ],
  14: [
    "WebCliq Template Pictures/Template 14/14-home.png",
    "WebCliq Template Pictures/Template 14/14-rooms.png",
    "WebCliq Template Pictures/Template 14/14-gallery.png",
    "WebCliq Template Pictures/Template 14/14-booking.png",
    "WebCliq Template Pictures/Template 14/14-contact.png",
  ],
  15: [
    "WebCliq Template Pictures/Template 15/15-home.png",
    "WebCliq Template Pictures/Template 15/15-practice areas.png",
    "WebCliq Template Pictures/Template 15/15-attorneys.png",
    "WebCliq Template Pictures/Template 15/15-case studies.png",
    "WebCliq Template Pictures/Template 15/15-carrers.png",
    "WebCliq Template Pictures/Template 15/15-contact.png",
  ],
  16: [
    "WebCliq Template Pictures/Template 16/16-home.png",
    "WebCliq Template Pictures/Template 16/16-world.png",
    "WebCliq Template Pictures/Template 16/16-politics.png",
    "WebCliq Template Pictures/Template 16/16-tech.png",
    "WebCliq Template Pictures/Template 16/16-sports.png",
    "WebCliq Template Pictures/Template 16/16-entertainment.png",
    "WebCliq Template Pictures/Template 16/16-contact.png",
  ],
  17: ["WebCliq Template Pictures/Template 17/17-home.png"],
  18: [
    "WebCliq Template Pictures/Template 18/18-home.png",
    "WebCliq Template Pictures/Template 18/18-destination.png",
    "WebCliq Template Pictures/Template 18/18-gallery.png",
    "WebCliq Template Pictures/Template 18/18-stories.png",
    "WebCliq Template Pictures/Template 18/18-blog.png",
    "WebCliq Template Pictures/Template 18/18-contact.png",
  ],
  19: [
    "WebCliq Template Pictures/Template 19/19-Home.png",
    "WebCliq Template Pictures/Template 19/19-Admissions.png",
    "WebCliq Template Pictures/Template 19/19-Academics.png",
    "WebCliq Template Pictures/Template 19/19-Gallery.png",
    "WebCliq Template Pictures/Template 19/19-About.png",
    "WebCliq Template Pictures/Template 19/19-Contact.png",
    "WebCliq Template Pictures/Template 19/19-Parent Login.png",
  ],
  20: [
    "WebCliq Template Pictures/Template 20/20-Home.png",
    "WebCliq Template Pictures/Template 20/20-Departments.png",
    "WebCliq Template Pictures/Template 20/20-Admissions.png",
    "WebCliq Template Pictures/Template 20/20-Events.png",
    "WebCliq Template Pictures/Template 20/20-Contact.png",
  ],
  21: [
    "WebCliq Template Pictures/Template 21/21-Home.png",
    "WebCliq Template Pictures/Template 21/21-Cources.png",
    "WebCliq Template Pictures/Template 21/21-Instructors.png",
    "WebCliq Template Pictures/Template 21/21-Pricing.png",
    "WebCliq Template Pictures/Template 21/21-Sign Up.png",
    "WebCliq Template Pictures/Template 21/21-Dashboard.png",
    "WebCliq Template Pictures/Template 21/21-Contact.png",
  ],
  22: [
    "WebCliq Template Pictures/Template 22/22-Home.png",
    "WebCliq Template Pictures/Template 22/22-Genres.png",
    "WebCliq Template Pictures/Template 22/22-Authors.png",
    "WebCliq Template Pictures/Template 22/22-Books.png",
    "WebCliq Template Pictures/Template 22/22-Cart.png",
    "WebCliq Template Pictures/Template 22/22-Contact.png",
  ],
};

function viewDemo(templateId) {
  currentTemplate = templates.find(t => t.id === templateId);
  if (!currentTemplate) return;
  currentSlide = 0;
  openModal();
}

function openModal() {
  const modal = document.getElementById('previewModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDescription = document.getElementById('modalDescription');
  const pagesCount = document.getElementById('pagesCount');

  modalTitle.textContent = currentTemplate.title;
  modalCategory.textContent = currentTemplate.category;
  modalDescription.textContent = currentTemplate.description;
  pagesCount.textContent = `${currentTemplate.pages} Page${currentTemplate.pages > 1 ? 's' : ''}`;

  generateSlides();
  generateDots();
  // Ensure scrollable preview container and responsive max-height
  const sliderContainer = document.querySelector('.slider-container');
  if (sliderContainer) {
    sliderContainer.style.overflowY = 'auto';
    sliderContainer.style.overflowX = 'hidden';
    sliderContainer.style.maxHeight = (window.innerWidth <= 600) ? '80vh' : '90vh';
  }
  const sliderTrackEl = document.getElementById('sliderTrack');
  if (sliderTrackEl) sliderTrackEl.style.willChange = 'transform';
  updateSlider();

  // Use fit mode to allow full-image scrolling inside the preview
  modal.classList.remove('fullscreen-cover');
  modal.classList.add('fullscreen-fit');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('previewModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function generateSlides() {
  const sliderTrack = document.getElementById('sliderTrack');
  sliderTrack.innerHTML = '';
  const pages = templatePageImages[currentTemplate.id] || [templateImages[currentTemplate.id]].filter(Boolean);
  const total = pages.length;
  for (let i = 0; i < total; i++) {
    const slide = document.createElement('div');
    slide.className = 'slide';
    const src = pages[i];
    const eager = i === 0 ? 'eager' : 'lazy';
    slide.innerHTML = `<img src="${src}" alt="${currentTemplate.title} page ${i + 1}" loading="${eager}" decoding="async" onerror="this.style.display='none'">`;
    sliderTrack.appendChild(slide);
  }
}

function generateDots() {
  const dotsContainer = document.getElementById('sliderDots');
  dotsContainer.innerHTML = '';
  for (let i = 0; i < currentTemplate.pages; i++) {
    const dot = document.createElement('div');
    dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }
}

function updateSlider() {
  const sliderTrack = document.getElementById('sliderTrack');
  const dots = document.querySelectorAll('.slider-dot');
  sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  dots.forEach((dot, index) => { dot.classList.toggle('active', index === currentSlide); });
  // Reset vertical scroll to top when slide changes
  const container = document.querySelector('.slider-container');
  if (container) container.scrollTop = 0;
}
function nextSlide() { if (currentSlide < currentTemplate.pages - 1) { currentSlide++; updateSlider(); } }
function prevSlide() { if (currentSlide > 0) { currentSlide--; updateSlider(); } }
function goToSlide(index) { currentSlide = index; updateSlider(); }

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); } });
document.getElementById('previewModal').addEventListener('click', (e) => { if (e.target.classList.contains('modal-overlay')) { closeModal(); } });

// Configuration update function
async function onConfigChange(config) {
  const heroTitle = document.getElementById('hero-title');
  const heroTagline = document.getElementById('hero-tagline');
  const brandName = document.getElementById('brand-name');
  if (heroTitle) heroTitle.textContent = config.hero_title || defaultConfig.hero_title;
  if (heroTagline) heroTagline.textContent = config.hero_tagline || defaultConfig.hero_tagline;
  if (brandName) brandName.textContent = config.brand_name || defaultConfig.brand_name;
}

// Contact form functionality
function populateTemplateSelect() {
  const select = document.getElementById('template');
  if (!select) return;
  select.innerHTML = '<option value="">Select a template</option>' + templates.map(t => `<option value="${t.id}">${t.title}</option>`).join('');
}

function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      template: formData.get('template'),
      message: formData.get('message')
    };
    showFormMessage("Thank you for your message! We'll get back to you within 24 hours.", 'success');
    contactForm.reset();
  });
}

// Show form message function
function showFormMessage(message, type) {
  const notification = document.createElement('div');
  notification.style.cssText = `position:fixed;top:20px;right:20px;background:${type==='success'?'rgba(16,185,129,.9)':'rgba(239,68,68,.9)'};border:1px solid ${type==='success'?'#10b981':'#ef4444'};border-radius:12px;padding:1rem 1.5rem;color:white;text-align:left;z-index:1000;backdrop-filter:blur(20px);box-shadow:0 10px 25px rgba(0,0,0,.3);animation:slideIn .3s ease-out;max-width:400px;`;
  notification.innerHTML = `<div style="display:flex;align-items:center;gap:.5rem;"><span style="font-size:1.2rem;">${type==='success'?'✅':'❌'}</span><span>${message}</span></div>`;
  document.body.appendChild(notification);
  setTimeout(() => { if (notification.parentElement) { notification.style.animation = 'slideOut .3s ease-out forwards'; setTimeout(() => notification.remove(), 300); } }, 5000);
}

// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    const colors = ['rgba(59,130,246,.6)', 'rgba(139,92,246,.6)', 'rgba(16,185,129,.6)'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particlesContainer.appendChild(particle);
  }
}

// Add scroll-triggered animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.template-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(card);
  });
}

// Initialize the page
function init() {
  renderTemplates();
  setupFilters();
  createParticles();
  populateTemplateSelect();
  setupContactForm();
  setupHeaderToggle();
  setTimeout(setupScrollAnimations, 100);
}

// Initialize Element SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig: defaultConfig,
    onConfigChange: onConfigChange,
    mapToCapabilities: (config) => ({ recolorables: [], borderables: [], fontEditable: undefined, fontSizeable: undefined }),
    mapToEditPanelValues: (config) => new Map([
      ["hero_title", config.hero_title || defaultConfig.hero_title],
      ["hero_tagline", config.hero_tagline || defaultConfig.hero_tagline],
      ["brand_name", config.brand_name || defaultConfig.brand_name]
    ])
  });
}

document.addEventListener('DOMContentLoaded', init);

// Mobile header toggle
function setupHeaderToggle() {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.header-toggle');
  const nav = document.getElementById('site-nav') || document.querySelector('.header-nav');

  if (!header || !toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}
