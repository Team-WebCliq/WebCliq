const defaultConfig = {
  company_name: "WebCliq",
  tagline: "Your web, one click away.",
  hero_title: "Website Templates",
  hero_subtitle: "Ready-made designs for every business.",
  about_title: "About WebCliq",
  about_text: "We're passionate web designers and developers dedicated to making professional websites accessible to everyone. At WebCliq, we believe that every business deserves a stunning online presence without the complexity and high costs traditionally associated with web development.",
  contact_email: "teamwebcliq@gmail.com",
  contact_phone: "+91 92112 13717"
};

const templates = [
  { id: 1, name: "AI Automation Company", category: "business", icon: "🤖", pages: 5, description: "A modern website for AI or automation startups. Shows services, products, and success stories with futuristic blue gradients and smooth effects." },
  { id: 2, name: "SaaS Dashboard", category: "business", icon: "📊", pages: 1, description: "Ideal for SaaS or software tools. Highlights features, pricing, and product screenshots in a clean, scroll-based single-page design." },
  { id: 3, name: "Cybersecurity Company", category: "business", icon: "🔐", pages: 7, description: "Dark and techy design for cybersecurity firms. Focuses on safety, protection services, certifications, and client trust." },
  { id: 4, name: "Fitness and Gym", category: "business", icon: "💪", pages: 1, description: "Perfect for gyms and fitness centers. Displays training programs, trainers, schedules, and membership plans in one strong layout." },
  { id: 5, name: "Restaurant and Café", category: "restaurant", icon: "🍽️", pages: 6, description: "Warm, inviting theme for restaurants or cafés. Features menu, photos, reviews, and easy table reservation." },
  { id: 6, name: "Travel Agency", category: "business", icon: "✈️", pages: 6, description: "Vibrant site for travel planners and agencies. Includes destinations, tour packages, booking details, and customer feedback." },
  { id: 7, name: "Restaurant & Café Single", category: "restaurant", icon: "☕", pages: 1, description: "Cozy single-page site for small cafés or diners. Focused on attractive visuals, menu highlights, and contact options." },
  { id: 8, name: "Bakery Website", category: "restaurant", icon: "🧁", pages: 5, description: "Bright and cheerful theme for bakeries and dessert shops. Shows popular items, offers, and online order links." },
  { id: 9, name: "Music Streaming Platform", category: "creative", icon: "🎵", pages: 7, description: "Stylish dark theme for music platforms. Includes playlists, albums, artist profiles, and a clean streaming interface." },
  { id: 10, name: "Real Estate Agency", category: "business", icon: "🏢", pages: 7, description: "Professional layout for property businesses. Lists properties with photos, details, pricing, and contact info." },
  { id: 11, name: "Fitness Coaching", category: "business", icon: "🏋️", pages: 1, description: "Perfect for personal trainers. Displays programs, testimonials, and booking forms in a motivating design." },
  { id: 12, name: "NGO / Charity", category: "business", icon: "❤️", pages: 1, description: "Heartwarming site for charities or NGOs. Highlights causes, donation links, and volunteer information." },
  { id: 13, name: "Travel Agency Adventure", category: "business", icon: "🗺️", pages: 5, description: "Adventure-themed design for travel brands. Features tour packages, galleries, and easy booking options." },
  { id: 14, name: "Hotel Booking", category: "business", icon: "🏨", pages: 5, description: "Modern hotel website with booking forms. Displays rooms, amenities, pricing, and reviews clearly." },
  { id: 15, name: "Law Firm", category: "business", icon: "⚖️", pages: 6, description: "Clean, corporate layout for legal firms. Includes practice areas, lawyer profiles, and consultation forms." },
  { id: 16, name: "News Portal", category: "blog", icon: "📰", pages: 7, description: "Professional layout for news or magazine sites. Displays headlines, categories, trending stories, and archives." },
  { id: 17, name: "Wedding Planner", category: "creative", icon: "💍", pages: 1, description: "Elegant and romantic design for wedding services. Highlights past events, packages, and booking details." },
  { id: 18, name: "Travel Blog", category: "blog", icon: "🌍", pages: 6, description: "Designed for travel bloggers. Showcases destinations, stories, and photography with a modern blog layout." },
  { id: 19, name: "School Website", category: "business", icon: "🏫", pages: 7, description: "Bright and welcoming design for schools. Displays courses, admissions, notices, and events." },
  { id: 20, name: "College Website", category: "business", icon: "🎓", pages: 7, description: "Professional and informative site for colleges. Covers courses, faculty, admissions, and campus life in detail." },
  { id: 21, name: "Online Course Platform", category: "business", icon: "📚", pages: 6, description: "User-friendly platform for online education. Lists courses, instructors, enroll options, and student feedback." },
  { id: 22, name: "Bookstore Website", category: "ecommerce", icon: "📖", pages: 6, description: "Simple and neat website for bookstores. Features categories, search, featured books, and easy checkout." }
];

const templateImages = {
  1: [
    'WebCliq Template Pictures/Template 01/1-home.png',
    'WebCliq Template Pictures/Template 01/1-about.png',
    'WebCliq Template Pictures/Template 01/1-services.png',
    'WebCliq Template Pictures/Template 01/1-blog.png',
    'WebCliq Template Pictures/Template 01/1-contact.png'
  ],
  2: [
    'WebCliq Template Pictures/Template 02/2-home.png'
  ],
  3: [
    'WebCliq Template Pictures/Template 03/3-home.png',
    'WebCliq Template Pictures/Template 03/3-about.png',
    'WebCliq Template Pictures/Template 03/3-team.png',
    'WebCliq Template Pictures/Template 03/3-privacypolicy.png',
    'WebCliq Template Pictures/Template 03/3-blog1.png',
    'WebCliq Template Pictures/Template 03/3-blog2.png',
    'WebCliq Template Pictures/Template 03/3-blog3.png'
  ],
  4: [
    'WebCliq Template Pictures/Template 04/4-home.png'
  ],
  5: [
    'WebCliq Template Pictures/Template 05/5-home.png',
    'WebCliq Template Pictures/Template 05/5-menu.png',
    'WebCliq Template Pictures/Template 05/5-gallery.png',
    'WebCliq Template Pictures/Template 05/5-reservation.png',
    'WebCliq Template Pictures/Template 05/5-about.png',
    'WebCliq Template Pictures/Template 05/5-contact.png'
  ],
  6: [
    'WebCliq Template Pictures/Template 06/6-home.png',
    'WebCliq Template Pictures/Template 06/6-destination.png',
    'WebCliq Template Pictures/Template 06/6-packages.png',
    'WebCliq Template Pictures/Template 06/6-gallery.png',
    'WebCliq Template Pictures/Template 06/6-reviews.png',
    'WebCliq Template Pictures/Template 06/6-contact.png'
  ],
  7: [
    'WebCliq Template Pictures/Template 07/7-HOME.png'
  ],
  8: [
    'WebCliq Template Pictures/Template 08/8 -Home.png',
    'WebCliq Template Pictures/Template 08/8-about.png',
    'WebCliq Template Pictures/Template 08/8-Menu.png',
    'WebCliq Template Pictures/Template 08/8-gallery.png',
    'WebCliq Template Pictures/Template 08/8-order.png'
  ],
  9: [
    'WebCliq Template Pictures/Template 09/9-home.png',
    'WebCliq Template Pictures/Template 09/9-trending.png',
    'WebCliq Template Pictures/Template 09/9-playlist.png',
    'WebCliq Template Pictures/Template 09/9-artist.png',
    'WebCliq Template Pictures/Template 09/9_genre.png',
    'WebCliq Template Pictures/Template 09/9-subscription.png',
    'WebCliq Template Pictures/Template 09/9-contact.png'
  ],
  10: [
    'WebCliq Template Pictures/Template 10/10-HOME.png',
    'WebCliq Template Pictures/Template 10/10-LISTINGS.png',
    'WebCliq Template Pictures/Template 10/10-Agents.png',
    'WebCliq Template Pictures/Template 10/10-neighbourhoods.png',
    'WebCliq Template Pictures/Template 10/10-gallery.png',
    'WebCliq Template Pictures/Template 10/10-blog.png',
    'WebCliq Template Pictures/Template 10/10-Contact.png'
  ],
  11: [
    'WebCliq Template Pictures/Template 11/11-HOME.png'
  ],
  12: [
    'WebCliq Template Pictures/Template 12/12-Home.png'
  ],
  13: [
    'WebCliq Template Pictures/Template 13/13-home.png',
    'WebCliq Template Pictures/Template 13/13-destinations.png',
    'WebCliq Template Pictures/Template 13/13-packages.png',
    'WebCliq Template Pictures/Template 13/13-booking.png',
    'WebCliq Template Pictures/Template 13/13-blog.png'
  ],
  14: [
    'WebCliq Template Pictures/Template 14/14-home.png',
    'WebCliq Template Pictures/Template 14/14-rooms.png',
    'WebCliq Template Pictures/Template 14/14-gallery.png',
    'WebCliq Template Pictures/Template 14/14-booking.png',
    'WebCliq Template Pictures/Template 14/14-contact.png'
  ],
  15: [
    'WebCliq Template Pictures/Template 15/15-home.png',
    'WebCliq Template Pictures/Template 15/15-practice areas.png',
    'WebCliq Template Pictures/Template 15/15-attorneys.png',
    'WebCliq Template Pictures/Template 15/15-case studies.png',
    'WebCliq Template Pictures/Template 15/15-carrers.png',
    'WebCliq Template Pictures/Template 15/15-contact.png'
  ],
  16: [
    'WebCliq Template Pictures/Template 16/16-home.png',
    'WebCliq Template Pictures/Template 16/16-world.png',
    'WebCliq Template Pictures/Template 16/16-politics.png',
    'WebCliq Template Pictures/Template 16/16-tech.png',
    'WebCliq Template Pictures/Template 16/16-entertainment.png',
    'WebCliq Template Pictures/Template 16/16-sports.png',
    'WebCliq Template Pictures/Template 16/16-contact.png'
  ],
  17: [
    'WebCliq Template Pictures/Template 17/17-home.png'
  ],
  18: [
    'WebCliq Template Pictures/Template 18/18-home.png',
    'WebCliq Template Pictures/Template 18/18-destination.png',
    'WebCliq Template Pictures/Template 18/18-gallery.png',
    'WebCliq Template Pictures/Template 18/18-stories.png',
    'WebCliq Template Pictures/Template 18/18-blog.png',
    'WebCliq Template Pictures/Template 18/18-contact.png'
  ],
  19: [
    'WebCliq Template Pictures/Template 19/19-Home.png',
    'WebCliq Template Pictures/Template 19/19-About.png',
    'WebCliq Template Pictures/Template 19/19-Academics.png',
    'WebCliq Template Pictures/Template 19/19-Admissions.png',
    'WebCliq Template Pictures/Template 19/19-Gallery.png',
    'WebCliq Template Pictures/Template 19/19-Parent Login.png',
    'WebCliq Template Pictures/Template 19/19-Contact.png'
  ],
  20: [
    'WebCliq Template Pictures/Template 20/20-Home.png',
    'WebCliq Template Pictures/Template 20/20-Departments.png',
    'WebCliq Template Pictures/Template 20/20-Admissions.png',
    'WebCliq Template Pictures/Template 20/20-Events.png',
    'WebCliq Template Pictures/Template 20/20-Contact.png'
  ],
  21: [
    'WebCliq Template Pictures/Template 21/21-Home.png',
    'WebCliq Template Pictures/Template 21/21-Cources.png',
    'WebCliq Template Pictures/Template 21/21-Instructors.png',
    'WebCliq Template Pictures/Template 21/21-Pricing.png',
    'WebCliq Template Pictures/Template 21/21-Dashboard.png',
    'WebCliq Template Pictures/Template 21/21-Sign Up.png',
    'WebCliq Template Pictures/Template 21/21-Contact.png'
  ],
  22: [
    'WebCliq Template Pictures/Template 22/22-Home.png',
    'WebCliq Template Pictures/Template 22/22-Genres.png',
    'WebCliq Template Pictures/Template 22/22-Authors.png',
    'WebCliq Template Pictures/Template 22/22-Books.png',
    'WebCliq Template Pictures/Template 22/22-Cart.png',
    'WebCliq Template Pictures/Template 22/22-Contact.png'
  ]
};

const templateHomeImage = {
  1: 'WebCliq Template Pictures/Template 01/1-home.png',
  2: 'WebCliq Template Pictures/Template 02/2-home.png',
  3: 'WebCliq Template Pictures/Template 03/3-home.png',
  4: 'WebCliq Template Pictures/Template 04/4-home.png',
  5: 'WebCliq Template Pictures/Template 05/5-home.png',
  6: 'WebCliq Template Pictures/Template 06/6-home.png',
  7: 'WebCliq Template Pictures/Template 07/7-HOME.png',
  8: 'WebCliq Template Pictures/Template 08/8 -Home.png',
  9: 'WebCliq Template Pictures/Template 09/9-home.png',
  10: 'WebCliq Template Pictures/Template 10/10-HOME.png',
  11: 'WebCliq Template Pictures/Template 11/11-HOME.png',
  12: 'WebCliq Template Pictures/Template 12/12-Home.png',
  13: 'WebCliq Template Pictures/Template 13/13-home.png',
  14: 'WebCliq Template Pictures/Template 14/14-home.png',
  15: 'WebCliq Template Pictures/Template 15/15-home.png',
  16: 'WebCliq Template Pictures/Template 16/16-home.png',
  17: 'WebCliq Template Pictures/Template 17/17-home.png',
  18: 'WebCliq Template Pictures/Template 18/18-home.png',
  19: 'WebCliq Template Pictures/Template 19/19-Home.png',
  20: 'WebCliq Template Pictures/Template 20/20-Home.png',
  21: 'WebCliq Template Pictures/Template 21/21-Home.png',
  22: 'WebCliq Template Pictures/Template 22/22-Home.png'
};

function openPreview(id) {
  try {
    sessionStorage.setItem('indexScroll', String(window.scrollY || 0));
  } catch {}
  location.href = `preview.html?id=${id}`;
}

function renderTemplates(filter = 'all') {
  const container = document.getElementById('templates-container');
  if (!container) return;
  const filtered = filter === 'all' ? templates : templates.filter(t => t.category === filter);
  container.innerHTML = filtered.map(template => (
    `<div class="template-card" data-category="${template.category}" onclick="openPreview(${template.id})">
      <div class="template-preview">
        <img src="${templateHomeImage[template.id]}" alt="${template.name}" />
      </div>
      <div class="template-info">
        <h3>${template.name}</h3>
        <span class="template-category">${template.category} • ${template.pages} page${template.pages > 1 ? 's' : ''}</span>
        <p style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.6); margin: 0.8rem 0; line-height: 1.5;">${template.description}</p>
        <button class="view-demo-btn" onclick="openPreview(${template.id})">View Demo</button>
      </div>
    </div>`
  )).join('');
}

function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  if (!buttons.length) return;
  buttons.forEach(btn => {
    btn.addEventListener('click', e => {
      buttons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const category = e.currentTarget.dataset.category;
      renderTemplates(category);
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  if (!form.hasAttribute('action')) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msg = document.getElementById('success-message');
      if (msg) {
        msg.style.display = 'block';
        setTimeout(() => { msg.style.display = 'none'; }, 5000);
      }
      form.reset();
    });
  }
}

function onConfigChange(config) {
  const c = config || {};
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setText('company-name', c.company_name || defaultConfig.company_name);
  setText('tagline', c.tagline || defaultConfig.tagline);
  setText('hero-title', c.hero_title || defaultConfig.hero_title);
  setText('hero-subtitle', c.hero_subtitle || defaultConfig.hero_subtitle);
  setText('about-title', c.about_title || defaultConfig.about_title);
  setText('about-text', c.about_text || defaultConfig.about_text);
  const emailVal = c.contact_email || defaultConfig.contact_email;
  const phoneVal = c.contact_phone || defaultConfig.contact_phone;
  const emailEl = document.getElementById('contact-email');
  const phoneEl = document.getElementById('contact-phone');
  if (emailEl) {
    emailEl.textContent = emailVal;
    if (emailEl.tagName === 'A') emailEl.setAttribute('href', `mailto:${emailVal}`);
  }
  if (phoneEl) {
    phoneEl.textContent = phoneVal;
    if (phoneEl.tagName === 'A') phoneEl.setAttribute('href', `tel:${phoneVal}`);
  }
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('mobile-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
  });
  window.closeMobileMenu = function() {
    toggle.classList.remove('active');
    nav.classList.remove('active');
  };
}

function renderPreviewPage() {
  const container = document.getElementById('preview-container');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const template = templates.find(t => t.id === id);
  const images = templateImages[id] || [];
  const titleEl = document.getElementById('preview-title');
  const descEl = document.getElementById('preview-description');
  if (titleEl && template) titleEl.textContent = template.name;
  if (descEl && template) descEl.textContent = template.description;
  container.innerHTML = images.map(src => `<img src="${src}" alt="${template ? template.name : 'Template'}" />`).join('');
}

function init() {
  initMobileMenu();
  initFilters();
  renderTemplates();
  initContactForm();
  renderPreviewPage();
  try {
    const y = sessionStorage.getItem('indexScroll');
    const skipTop = window.location.hash === '#top';
    if (y && document.getElementById('templates-container') && !skipTop) {
      window.scrollTo(0, parseInt(y, 10) || 0);
      sessionStorage.removeItem('indexScroll');
    }
  } catch {}
  if (window.elementSdk) {
    window.elementSdk.init({
      defaultConfig,
      onConfigChange,
      mapToCapabilities: () => ({ recolorables: [], borderables: [], fontEditable: undefined, fontSizeable: undefined }),
      mapToEditPanelValues: (config) => new Map([
        ["company_name", config.company_name || defaultConfig.company_name],
        ["tagline", config.tagline || defaultConfig.tagline],
        ["hero_title", config.hero_title || defaultConfig.hero_title],
        ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
        ["about_title", config.about_title || defaultConfig.about_title],
        ["about_text", config.about_text || defaultConfig.about_text],
        ["contact_email", config.contact_email || defaultConfig.contact_email],
        ["contact_phone", config.contact_phone || defaultConfig.contact_phone]
      ])
    });
  }
}

document.addEventListener('DOMContentLoaded', init);
