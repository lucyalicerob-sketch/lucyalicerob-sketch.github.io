/**
 * MAIN PORTFOLIO APPLICATION CONTROLLER
 * Clean, personal, and human engineering portfolio for Lucy Robinson 🎢
 */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

let currentCategoryFilter = 'all';
let isAllProjectsExpanded = false;

function initApp() {
  renderProfileInfo();
  renderPersonalStory();
  renderFeaturedProjects();
  renderAllProjects();
  renderDiaryEntries();
  renderSkills();
  renderTimeline();
  setupNavigation();
  setupThemeToggle();
  setupProjectModals();
  setupDiaryModal();
  setupBusinessCardModal();
  setupSeeMoreToggle();
  setupCoasterScrollTracker();
  setupAllCarousels();
}

/**
 * Image URL Formatter & Google Drive / Google Photos CDN Normalizer
 */
function formatImageSrc(url) {
  if (!url) return '';
  url = String(url).trim();

  // 1. Google Drive URLs (file/d/..., open?id=..., uc?id=...)
  const driveMatch = url.match(/(?:\/d\/|id=|file\/d\/|open\?id=)([a-zA-Z0-9_-]{25,})/);
  if (driveMatch && driveMatch[1]) {
    const fileId = driveMatch[1];
    return `https://lh3.googleusercontent.com/d/${fileId}=w1600`;
  }

  // 2. Google Photos / Google CDN UserContent URLs
  if (url.includes('googleusercontent.com')) {
    if (/=w\d+|-w\d+|=s\d+|-s\d+/.test(url)) {
      return url.replace(/(=w\d+|-w\d+|=s\d+|-s\d+)(.*)/, '=w1600$2');
    }
    if (!url.includes('=')) {
      return url + '=w1600';
    }
  }

  return url;
}

window.handleImgError = function(imgEl, originalSrc) {
  if (!imgEl) return;
  const src = originalSrc || imgEl.getAttribute('data-original-src') || imgEl.src || '';
  const driveMatch = src.match(/(?:\/d\/|id=|file\/d\/|open\?id=)([a-zA-Z0-9_-]{25,})/);
  if (driveMatch && driveMatch[1]) {
    const fileId = driveMatch[1];
    const stage = parseInt(imgEl.dataset.fallbackStage || '0', 10);
    if (stage === 0) {
      imgEl.dataset.fallbackStage = '1';
      imgEl.src = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1600`;
      return;
    } else if (stage === 1) {
      imgEl.dataset.fallbackStage = '2';
      imgEl.src = `https://drive.google.com/uc?export=view&id=${fileId}`;
      return;
    }
  }
};

/* --------------------------------------------------------------------------
   0. COASTER SCROLL TRACK PROGRESS BAR 🎢
   -------------------------------------------------------------------------- */
function setupCoasterScrollTracker() {
  const rail = document.getElementById('coasterScrollRail');
  if (!rail) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.pageYOffset / totalHeight) * 100;
    rail.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

/* --------------------------------------------------------------------------
   1. PROFILE & HERO RENDERING
   -------------------------------------------------------------------------- */
function renderProfileInfo() {
  const p = PORTFOLIO_DATA.profile || {};

  const brandName = document.getElementById('brandName');
  if (brandName && p.name) brandName.textContent = p.name;

  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle && p.tagline) heroTitle.innerHTML = p.tagline;

  const heroBio = document.getElementById('heroBio');
  if (heroBio && (p.bio || p.subtagline)) heroBio.textContent = p.bio || p.subtagline;

  const statusText = document.getElementById('statusPillText');
  if (statusText) {
    statusText.textContent = p.statusPillText || (p.currentStatus && p.currentStatus.company ? `STUDENT ENGINEER // Summer Intern @ ${p.currentStatus.company}` : 'STUDENT ENGINEER // Summer Intern @ TfL DLR');
  }

  const footerCopy = document.getElementById('footerCopyText');
  if (footerCopy && p.footerCopy) {
    footerCopy.textContent = p.footerCopy;
  }

  const engName = document.getElementById('aboutEngineerName');
  if (engName && p.name) engName.textContent = p.name;

  const engRole = document.getElementById('aboutEngineerRole');
  if (engRole) {
    const roleText = p.role || "MEng Mechanical Engineering";
    const uniText = (p.education && p.education.university) || (PORTFOLIO_DATA.education && PORTFOLIO_DATA.education.university) || "University of Sheffield";
    engRole.textContent = `${roleText.replace(/:+$/, "").trim()} • ${uniText}`;
  }

  const engHighlights = document.getElementById('aboutEngineerHighlights');
  if (engHighlights) {
    if (Array.isArray(p.highlights) && p.highlights.length > 0) {
      engHighlights.innerHTML = p.highlights.map(h => `<div style="margin-bottom: 6px;"><strong>${h}</strong></div>`).join('');
    } else {
      const edu = PORTFOLIO_DATA.education || (p && p.education) || {};
      const cStat = p.currentStatus || {};
      engHighlights.innerHTML = `
        <div style="margin-bottom: 6px;"><strong>🎓 ${edu.status || edu.grade || '1st Class Honours across Year 1 & 2'}</strong></div>
        <div style="margin-bottom: 6px;"><strong>🚆 Summer Intern</strong> @ ${cStat.company || 'Transport for London (TfL DLR)'} (${cStat.division || 'E&M Building Services'})</div>
        <div style="margin-bottom: 6px;"><strong>🏆 SELSA Award</strong> (Sheffield Engineering Leadership &amp; Service Award)</div>
      `;
    }
  }

  const emailBtn = document.getElementById('contactEmailBtn');
  if (emailBtn && p.socials && p.socials.email) {
    emailBtn.innerHTML = `📋 Copy Email (${p.socials.email})`;
  }

  const linkedinBtn = document.getElementById('contactLinkedInBtn');
  if (linkedinBtn && p.socials && p.socials.linkedin) {
    linkedinBtn.href = p.socials.linkedin;
  }

  const statsContainer = document.getElementById('heroStatsRow');
  if (statsContainer && p.personalStats) {
    statsContainer.innerHTML = p.personalStats.map(s => `
      <div class="stat-item">
        <span class="stat-val">${s.value}</span>
        <span class="stat-lbl">${s.label}</span>
      </div>
    `).join('');
  }

    const cvUrl = p.cvUrl || 'assets/documents/Lucy_Robinson_CV.pdf';
  ['navCvBtn', 'mobileDrawerCvBtn', 'heroCvBtn', 'contactCvBtn', 'qrCardCvBtn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = cvUrl;
  });
  renderHeroSpotlight();
}

function renderHeroSpotlight() {
  const p = PORTFOLIO_DATA.profile || {};
  const spotlight = p.heroSpotlight || { itemId: "reaching-aid-cad", customBadge: "FEATURED CAD DRAWING SET", customMeta: "BS 8888 / GD&T" };
  const targetId = spotlight.itemId || "reaching-aid-cad";

  const allProjects = [...(PORTFOLIO_DATA.featuredProjects || []), ...(PORTFOLIO_DATA.universityProjects || [])];
  const allDiaries = PORTFOLIO_DATA.diaryEntries || [];

  const proj = allProjects.find(x => x.id === targetId);
  const diary = !proj ? allDiaries.find(x => x.id === targetId) : null;

  const badgeEl = document.getElementById('heroSpotlightBadge');
  const metaEl = document.getElementById('heroSpotlightMeta');
  const imgEl = document.getElementById('heroSpotlightImg');
  const frameEl = document.getElementById('heroSpotlightImgFrame');
  const titleEl = document.getElementById('heroSpotlightTitle');
  const subEl = document.getElementById('heroSpotlightSubtitle');
  const btnEl = document.getElementById('heroSpotlightBtn');

  if (proj) {
    if (badgeEl) badgeEl.textContent = spotlight.customBadge || proj.badge || "FEATURED SHOWCASE";
    if (metaEl) metaEl.textContent = spotlight.customMeta || proj.timeline || "SolidWorks CAD";
    if (imgEl) {
      const cover = (proj.cadGallery && proj.cadGallery[0] && proj.cadGallery[0].url) || proj.coverImage;
      imgEl.src = formatImageSrc(cover);
      imgEl.alt = proj.title;
      imgEl.setAttribute('referrerpolicy', 'no-referrer');
    }
    if (titleEl) titleEl.textContent = proj.title;
    if (subEl) subEl.textContent = proj.subtitle || proj.category;
    if (btnEl) btnEl.textContent = "View CAD Drawings →";

    const clickHandler = () => openProjectArticleModal(proj.id);
    if (frameEl) frameEl.onclick = clickHandler;
    if (btnEl) btnEl.onclick = clickHandler;
  } else if (diary) {
    if (badgeEl) badgeEl.textContent = spotlight.customBadge || "FIELD NOTES SPOTLIGHT";
    if (metaEl) metaEl.textContent = spotlight.customMeta || diary.date || "Engineering Diary";
    if (imgEl) {
      imgEl.src = formatImageSrc(diary.coverPhoto);
      imgEl.alt = diary.title;
      imgEl.setAttribute('referrerpolicy', 'no-referrer');
    }
    if (titleEl) titleEl.textContent = diary.title;
    if (subEl) subEl.textContent = diary.location ? `📍 ${diary.location}` : diary.category;
    if (btnEl) btnEl.textContent = "Read Field Notes →";

    const clickHandler = () => openDiaryModal(diary.id);
    if (frameEl) frameEl.onclick = clickHandler;
    if (btnEl) btnEl.onclick = clickHandler;
  }
}

/* --------------------------------------------------------------------------
   2. PERSONAL STORY & DESK MEMO RENDERING
   -------------------------------------------------------------------------- */
function renderPersonalStory() {
  const p = PORTFOLIO_DATA.profile || {};
  const story = p.personalStory || {};

  const aboutPhoto = document.getElementById('aboutPhotoImg');
  if (aboutPhoto && p.aboutPhoto) {
    aboutPhoto.src = formatImageSrc(p.aboutPhoto);
    aboutPhoto.setAttribute('referrerpolicy', 'no-referrer');
    aboutPhoto.onerror = function() { handleImgError(this, p.aboutPhoto); };
  }

  const aboutLoc = document.getElementById('aboutLocationTag');
  if (aboutLoc && p.aboutLocationTag) aboutLoc.textContent = p.aboutLocationTag;

  const aboutBadge = document.getElementById('aboutCardBadge');
  if (aboutBadge && p.aboutCardBadge) aboutBadge.textContent = p.aboutCardBadge;

  const storyHeadline = document.getElementById('storyHeadline');
  if (storyHeadline && story.headline) storyHeadline.textContent = story.headline;

  const storyBody = document.getElementById('storyBody');
  if (storyBody && story) {
    storyBody.innerHTML = `
      <p>${story.bioParagraph1 || ''}</p>
      <p>${story.bioParagraph2 || ''}</p>
      <p>${story.bioParagraph3 || ''}</p>
    `;
  }
}

/* --------------------------------------------------------------------------
   3. CONVENTION 15-SECOND QUICK SNAPSHOT
   -------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   4. vCARD (.VCF) INSTANT PHONE CONTACT EXPORT
   -------------------------------------------------------------------------- */
window.downloadVCard = function() {
  const p = PORTFOLIO_DATA.profile;
  const currentUrl = window.location.href;

  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${p.name}`,
    `TITLE:${p.role} - Themed Entertainment & Ride Systems`,
    `ORG:University of Sheffield / Transport for London (DLR)`,
    `EMAIL;TYPE=INTERNET,WORK:${p.socials.email}`,
    `TEL;TYPE=CELL:${p.socials.phone || ''}`,
    `URL:${currentUrl}`,
    `NOTE:${p.tagline}. Specialising in SolidWorks CAD, bogie mechanics, and ride systems.`,
    'END:VCARD'
  ].join('\r\n');

  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', `${p.name.replace(/\s+/g, '_')}_Contact.vcf`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  const toast = document.getElementById('copyToast');
  if (toast) {
    toast.textContent = '✓ Contact downloaded! Tap to save directly to your phone contacts.';
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 3500);
  }
};

/* --------------------------------------------------------------------------
   5. DIGITAL BUSINESS CARD & LIVE QR MODAL
   -------------------------------------------------------------------------- */
function setupBusinessCardModal() {
  const modal = document.getElementById('businessCardModal');
  const closeBtn = document.getElementById('closeBusinessCardBtn');

  if (modal && closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
}

window.openBusinessCardModal = function() {
  const modal = document.getElementById('businessCardModal');
  if (!modal) return;

  const currentUrl = window.location.href;
  const qrImg = document.getElementById('businessCardQRImg');
  if (qrImg) {
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentUrl)}&margin=10`;
    qrImg.src = qrApiUrl;
  }

  const nameEl = document.getElementById('qrCardName');
  if (nameEl) nameEl.textContent = PORTFOLIO_DATA.profile.name;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

/* --------------------------------------------------------------------------
   6. PROJECTS RENDERING
   -------------------------------------------------------------------------- */
function renderFeaturedProjects() {
  const container = document.getElementById('featuredProjectsGrid');
  if (!container) return;

  const featured = PORTFOLIO_DATA.featuredProjects;
  container.innerHTML = featured.map(project => createProjectCardHTML(project)).join('');
}

function renderAllProjects(filter = currentCategoryFilter) {
  const container = document.getElementById('allProjectsGrid');
  if (!container) return;

  currentCategoryFilter = filter;
  let allList = [...PORTFOLIO_DATA.featuredProjects, ...PORTFOLIO_DATA.universityProjects];

  if (filter !== 'all') {
    allList = allList.filter(p => p.category === filter);
  }

  container.innerHTML = allList.map(project => createProjectCardHTML(project)).join('');
}

function createProjectCardHTML(p) {
  const badgeClass = p.category === 'transit-rail' ? 'badge-teal' : (p.category === 'themed-rides' ? 'badge-red' : 'badge-blue');

  const toolsHTML = p.tools ? p.tools.map(t => `
    <span class="tool-chip">${t}</span>
  `).join('') : '';

  return `
    <div class="card project-card" data-project-id="${p.id}" onclick="openProjectArticleModal('${p.id}')">
      <div class="project-thumb-frame">
        <img src="${formatImageSrc(p.coverImage)}" alt="${p.title}" class="project-thumb" loading="lazy" referrerpolicy="no-referrer" onerror="handleImgError(this, '${p.coverImage}')">
        <div class="project-badge-overlay">
          <span class="badge ${badgeClass}">${p.badge || 'Project'}</span>
        </div>
      </div>
      <div class="project-body">
        <div class="project-meta-row">
          <span class="project-timeline">${p.timeline}</span>
          <span class="badge ${badgeClass}">${p.category.toUpperCase().replace('-', ' ')}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-subtitle">${p.subtitle}</p>
        <p class="project-summary">${p.summary}</p>

        ${toolsHTML ? `<div class="project-tools-row">${toolsHTML}</div>` : ''}

        <div class="project-card-footer">
          <span class="read-article-link">
            Read Case Study &amp; View CAD Drawings →
          </span>
        </div>
      </div>
    </div>
  `;
}

function setupSeeMoreToggle() {
  const toggleBtn = document.getElementById('btnToggleAllProjects');
  const allProjectsSection = document.getElementById('allProjectsSection');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (toggleBtn && allProjectsSection) {
    toggleBtn.addEventListener('click', () => {
      isAllProjectsExpanded = !isAllProjectsExpanded;
      allProjectsSection.style.display = isAllProjectsExpanded ? 'block' : 'none';
      toggleBtn.innerHTML = isAllProjectsExpanded 
        ? 'Hide Project Archive ↑' 
        : 'See Full Engineering Archive &amp; Machine Design Packs ↓';
      
      if (isAllProjectsExpanded) {
        allProjectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderAllProjects(cat);
    });
  });
}

/* --------------------------------------------------------------------------
   7. PROJECT ARTICLE MODAL (CASE STUDY JOURNAL WITH EMBEDDED CAD)
   -------------------------------------------------------------------------- */
function setupProjectModals() {
  const backdrop = document.getElementById('projectArticleModal');
  const closeBtn = document.getElementById('closeArticleModalBtn');

  if (backdrop && closeBtn) {
    closeBtn.addEventListener('click', () => closeProjectArticleModal());
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeProjectArticleModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProjectArticleModal();
    });
  }

  const tabBtns = document.querySelectorAll('.article-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      switchArticleTab(targetTab);
    });
  });
}

window.openProjectArticleModal = function(projectId) {
  const allList = [...PORTFOLIO_DATA.featuredProjects, ...PORTFOLIO_DATA.universityProjects];
  const project = allList.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectArticleModal');

  document.getElementById('modalProjectBadge').textContent = project.badge || 'Case Study';
  document.getElementById('modalProjectTitle').textContent = project.title;
  document.getElementById('modalProjectSubtitle').textContent = project.subtitle;
  const modalHero = document.getElementById('modalHeroImg');
  if (modalHero) {
    modalHero.src = formatImageSrc(project.coverImage);
    modalHero.setAttribute('referrerpolicy', 'no-referrer');
    modalHero.onerror = function() { handleImgError(this, project.coverImage); };
  }

  const metricsContainer = document.getElementById('modalMetricsGrid');
  if (metricsContainer && project.keyMetrics) {
    metricsContainer.innerHTML = project.keyMetrics.map(m => `
      <div style="background: var(--bg-subtle); padding: 10px 14px; border-radius: var(--radius-md); border: 1.5px solid var(--border-light); text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div style="font-family: var(--font-mono); font-size: 0.675rem; color: var(--text-muted); text-transform: uppercase; font-weight: 700; text-align: center;">${m.label}</div>
        <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; color: var(--coaster-red); text-align: center; margin-top: 2px;">${m.value}</div>
      </div>
    `).join('');
  }

  const art = project.article || {};
  const titles = art.tabTitles || {
    problem: "1. The Goal & Requirements",
    cad: "2. CAD Architecture & Mechanism Details",
    calcs: "3. Kinematics, Hand Calculations & Sizing",
    prototyping: "4. Prototyping, 3D Printing & Testing",
    takeaways: "5. What I Learned & Next Steps"
  };
  const subtitles = art.tabSubtitles || {
    problem: "Project specifications, design brief & functional requirements",
    cad: "SolidWorks parametric subassemblies, kinematic joints & tolerance analysis",
    calcs: "Hand calculations, dynamic simulation & motor torque verification",
    prototyping: "Rapid prototyping, additive manufacturing & physical test rig sequence",
    takeaways: "Engineering lessons learned, manufacturability review & next milestones"
  };

  const tabImages = art.tabImages || {};
  const gallery = project.cadGallery || [];

  function normalizeTabImages(data, defaultFig) {
    if (!data) return (defaultFig && defaultFig.url) ? [defaultFig] : [];
    if (Array.isArray(data)) {
      const filtered = data.filter(item => item && (item.url || item.title || item.caption));
      if (filtered.length > 0) return filtered;
    } else if (typeof data === 'object' && data.url) {
      return [data];
    }
    return (defaultFig && defaultFig.url) ? [defaultFig] : [];
  }

  function renderTabFigures(imgDataOrArray, defaultFig) {
    const figures = normalizeTabImages(imgDataOrArray, defaultFig);
    if (!figures || figures.length === 0) return '';

    if (figures.length === 1) {
      const fig = figures[0];
      if (!fig.url) return '';
      const safeTitle = (fig.title || 'Technical CAD / Figure').replace(/'/g, "\\'");
      const safeCaption = (fig.caption || '').replace(/'/g, "\\'");
      return `
        <div class="cad-figure-card" style="margin: 18px 0; background: var(--bg-surface); border: 1.5px solid var(--border-medium); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
          <div class="cad-figure-header" style="background: rgba(255,255,255,0.03); padding: 8px 14px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-light);">
            <span class="cad-figure-title" style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; color: var(--park-copper); text-transform: uppercase;">
              📐 ${fig.title || 'Technical CAD / Figure'}
            </span>
            <span class="badge badge-red" style="font-size: 0.7rem; cursor: pointer;" onclick="openLightboxModal('${fig.url}', '${safeTitle}', '${safeCaption}')">🔍 Enlarge ↗</span>
          </div>
          <div class="cad-figure-img-wrapper" style="background: #09090b; display: flex; justify-content: center; align-items: center; padding: 12px; cursor: pointer;" onclick="openLightboxModal('${fig.url}', '${safeTitle}', '${safeCaption}')">
            <img src="${formatImageSrc(fig.url)}" alt="${fig.title || 'Figure'}" class="cad-figure-img" style="max-height: 400px; width: 100%; object-fit: contain; border-radius: var(--radius-sm);" loading="lazy" referrerpolicy="no-referrer" onerror="handleImgError(this, '${fig.url}')">
          </div>
          ${fig.caption ? `<div class="cad-figure-caption" style="padding: 10px 14px; font-size: 0.82rem; color: var(--text-muted); background: var(--bg-subtle); border-top: 1px solid var(--border-light); font-style: italic;">${fig.caption}</div>` : ''}
        </div>
      `;
    }

    // Multiple photos grid layout (2-column responsive)
    return `
      <div class="tab-figures-gallery" style="margin: 22px 0;">
        <div style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; color: var(--park-copper); text-transform: uppercase; margin-bottom: 12px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-light); padding-bottom: 6px;">
          <span>🖼️ Section Drawings &amp; Photo Gallery (${figures.length} Figures)</span>
          <span style="font-size: 0.72rem; color: var(--text-muted); text-transform: none;">Click any image to view full screen</span>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
          ${figures.map((fig, idx) => {
            if (!fig.url) return '';
            const safeTitle = (fig.title || `Figure ${idx + 1}`).replace(/'/g, "\\'");
            const safeCaption = (fig.caption || '').replace(/'/g, "\\'");
            return `
              <div class="cad-figure-card" style="background: var(--bg-surface); border: 1.5px solid var(--border-medium); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); display: flex; flex-direction: column;">
                <div class="cad-figure-header" style="background: rgba(255,255,255,0.03); padding: 6px 12px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-light);">
                  <span class="cad-figure-title" style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--park-copper); text-transform: uppercase; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 180px;">
                    Fig ${idx + 1}: ${fig.title || 'CAD Drawing'}
                  </span>
                  <span class="badge badge-red" style="font-size: 0.65rem; cursor: pointer;" onclick="openLightboxModal('${fig.url}', '${safeTitle}', '${safeCaption}')">🔍 View ↗</span>
                </div>
                <div class="cad-figure-img-wrapper" style="background: #09090b; display: flex; justify-content: center; align-items: center; padding: 10px; flex: 1; min-height: 180px; cursor: pointer;" onclick="openLightboxModal('${fig.url}', '${safeTitle}', '${safeCaption}')">
                  <img src="${formatImageSrc(fig.url)}" alt="${fig.title || 'Figure'}" class="cad-figure-img" style="max-height: 240px; width: 100%; object-fit: contain; border-radius: var(--radius-sm);" loading="lazy" referrerpolicy="no-referrer" onerror="handleImgError(this, '${fig.url}')">
                </div>
                ${fig.caption ? `<div class="cad-figure-caption" style="padding: 8px 12px; font-size: 0.78rem; color: var(--text-muted); background: var(--bg-subtle); border-top: 1px solid var(--border-light); font-style: italic;">${fig.caption}</div>` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  const figProblem = renderTabFigures(tabImages.problem, gallery[0]);
  const figCAD = renderTabFigures(tabImages.cad, gallery[1] || gallery[0]);
  const figCalcs = renderTabFigures(tabImages.calcs, gallery[2] || gallery[1]);
  const figProto = renderTabFigures(tabImages.prototyping, gallery[3] || gallery[2]);
  const figTakeaways = renderTabFigures(tabImages.takeaways, gallery[0]);

  // Update Tab Navigation Button Labels
  const btnProb = document.getElementById('artTabBtn_problem');
  if (btnProb) btnProb.textContent = titles.problem || "1. The Goal";
  const btnCAD = document.getElementById('artTabBtn_CAD');
  if (btnCAD) btnCAD.textContent = titles.cad || "2. CAD & Drawings";
  const btnCalcs = document.getElementById('artTabBtn_calcs');
  if (btnCalcs) btnCalcs.textContent = titles.calcs || "3. Calculations";
  const btnProto = document.getElementById('artTabBtn_prototyping');
  if (btnProto) btnProto.textContent = titles.prototyping || "4. Prototyping & Testing";
  const btnTake = document.getElementById('artTabBtn_takeaways');
  if (btnTake) btnTake.textContent = titles.takeaways || "5. Takeaways";

  document.getElementById('tabPaneProblem').innerHTML = `
    <h3 style="color: var(--text-main); font-size: 1.25rem; margin-bottom: 4px;">${titles.problem}</h3>
    ${subtitles.problem ? `<div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--park-copper); margin-bottom: 16px;">${subtitles.problem}</div>` : ''}
    <p>${formatMarkdown(art.problemStatement || project.summary)}</p>
    ${figProblem}
  `;

  document.getElementById('tabPaneCAD').innerHTML = `
    <h3 style="color: var(--text-main); font-size: 1.25rem; margin-bottom: 4px;">${titles.cad}</h3>
    ${subtitles.cad ? `<div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--park-copper); margin-bottom: 16px;">${subtitles.cad}</div>` : ''}
    <p>${formatMarkdown(art.cadArchitecture || 'SolidWorks parametric model and assembly design.')}</p>
    ${figCAD}
  `;

  document.getElementById('tabPaneCalcs').innerHTML = `
    <h3 style="color: var(--text-main); font-size: 1.25rem; margin-bottom: 4px;">${titles.calcs}</h3>
    ${subtitles.calcs ? `<div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--park-copper); margin-bottom: 16px;">${subtitles.calcs}</div>` : ''}
    <p>${formatMarkdown(art.calcsAndSimulation || 'Supplementary engineering calculations and stress verification.')}</p>
    ${figCalcs}
  `;

  document.getElementById('tabPanePrototyping').innerHTML = `
    <h3 style="color: var(--text-main); font-size: 1.25rem; margin-bottom: 4px;">${titles.prototyping}</h3>
    ${subtitles.prototyping ? `<div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--park-copper); margin-bottom: 16px;">${subtitles.prototyping}</div>` : ''}
    <p>${formatMarkdown(art.prototypingAndTesting || 'Fabrication, assembly, and test procedure.')}</p>
    ${figProto}
  `;

  document.getElementById('tabPaneTakeaways').innerHTML = `
    <h3 style="color: var(--text-main); font-size: 1.25rem; margin-bottom: 4px;">${titles.takeaways}</h3>
    ${subtitles.takeaways ? `<div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--park-copper); margin-bottom: 16px;">${subtitles.takeaways}</div>` : ''}
    <p>${formatMarkdown(art.takeaways || 'Key conclusions and future development milestones.')}</p>
    ${figTakeaways}
  `;

  switchArticleTab('problem');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

function switchArticleTab(tabName) {
  const tabBtns = document.querySelectorAll('.article-tab-btn');
  const panes = document.querySelectorAll('.article-tab-pane');

  tabBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
  });

  panes.forEach(pane => {
    pane.classList.toggle('active', pane.id === `tabPane${capitalize(tabName)}`);
  });
}

function closeProjectArticleModal() {
  const modal = document.getElementById('projectArticleModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* --------------------------------------------------------------------------
   8. THE RIDE ENGINEER'S LOG (COASTER DIARY & FIELD NOTES)
   -------------------------------------------------------------------------- */
function renderDiaryEntries() {
  const container = document.getElementById('diaryGrid');
  if (!container) return;

  const entries = PORTFOLIO_DATA.diaryEntries;

  container.innerHTML = entries.map(entry => `
    <div class="card diary-card" onclick="openDiaryModal('${entry.id}')">
      ${entry.coverPhoto ? `
        <div class="diary-thumb-wrapper">
          <img src="${formatImageSrc(entry.coverPhoto)}" alt="${entry.title}" class="diary-thumb" loading="lazy" referrerpolicy="no-referrer" onerror="handleImgError(this, '${entry.coverPhoto}')">
          ${entry.location ? `<span class="diary-location-tag">📍 ${entry.location}</span>` : ''}
        </div>
      ` : ''}
      <div class="diary-card-body">
        <div class="diary-header-row">
          <span class="badge badge-red">${entry.category}</span>
          <span class="diary-date">${entry.date} • ${entry.readTime}</span>
        </div>
        <h3 class="diary-title">${entry.title}</h3>
        <p class="diary-snippet">${entry.summary}</p>
        <span class="diary-read-more">Read Field Notes &amp; Observations →</span>
      </div>
    </div>
  `).join('');
}

function setupDiaryModal() {
  const modal = document.getElementById('diaryReaderModal');
  const closeBtn = document.getElementById('closeDiaryModalBtn');
  if (modal && closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
}

window.openDiaryModal = function(entryId) {
  const entry = PORTFOLIO_DATA.diaryEntries.find(e => e.id === entryId);
  if (!entry) return;

  const modal = document.getElementById('diaryReaderModal');
  document.getElementById('modalDiaryDate').textContent = `${entry.date} • ${entry.readTime}`;
  document.getElementById('modalDiaryCategory').textContent = entry.category;
  document.getElementById('modalDiaryTitle').textContent = entry.title;

  let galleryHTML = '';
  if (entry.tripPhotos && entry.tripPhotos.length > 0) {
    galleryHTML = `
      <div class="modal-trip-gallery">
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--coaster-red); font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">
          📸 Field Photos &amp; Annotations:
        </div>
        ${entry.tripPhotos.map(photo => `
          <div class="trip-photo-figure">
            <img src="${formatImageSrc(photo.url)}" alt="${photo.caption}" class="trip-photo-img" loading="lazy" referrerpolicy="no-referrer" onerror="handleImgError(this, '${photo.url}')">
            <div class="trip-photo-caption">
              <span style="color: var(--coaster-red);">📍</span> <span>${photo.caption}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  document.getElementById('modalDiaryContent').innerHTML = `
    ${galleryHTML}
    ${formatMarkdown(entry.content)}
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

/* --------------------------------------------------------------------------
   9. SKILLS MATRIX RENDERING
   -------------------------------------------------------------------------- */
function renderSkills() {
  const s = PORTFOLIO_DATA.skills || {};

  const renderList = (items, targetId) => {
    const el = document.getElementById(targetId);
    if (!el || !items || !Array.isArray(items)) return;

    el.innerHTML = `
      <ul class="skill-bullet-list">
        ${items.map(item => `
          <li class="skill-bullet-item">
            <span class="icon">🎢</span>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    `;
  };

  renderList(s.cadModeling || s.cad, 'skillsCAD');
  renderList(s.analysisAndMath || s.analysis, 'skillsAnalysis');
  renderList(s.rideAndTransit || s.transit, 'skillsTransit');
  renderList(s.fabrication || s.fab, 'skillsFab');
  renderList(s.leadership, 'skillsLeadership');
}

/* --------------------------------------------------------------------------
   10. TIMELINE RENDERING (ALWAYS SORTED CHRONOLOGICALLY - MOST RECENT FIRST)
   -------------------------------------------------------------------------- */
function parseExperienceSortKey(item) {
  if (!item) return 0;
  const str = String(item.period || item.timeline || item.dates || '').toLowerCase();
  
  const isPresent = str.includes('present') || str.includes('current') || str.includes('now');
  const years = (str.match(/\b(19\d\d|20\d\d)\b/g) || []).map(Number);

  if (years.length === 0) {
    return isPresent ? 999900 : 0;
  }

  let seasonOffset = 0;
  if (str.includes('winter')) seasonOffset = 0.1;
  else if (str.includes('spring')) seasonOffset = 0.3;
  else if (str.includes('summer') || str.includes('june') || str.includes('july') || str.includes('august')) seasonOffset = 0.6;
  else if (str.includes('autumn') || str.includes('september') || str.includes('october') || str.includes('november')) seasonOffset = 0.8;

  if (isPresent) {
    // Current/present positions sorted by start year and season
    const startYear = Math.min(...years);
    return 300000 + (startYear * 10) + seasonOffset;
  } else {
    // Completed positions sorted by end year
    const endYear = Math.max(...years);
    return (endYear * 10) + seasonOffset;
  }
}

function sortExperienceChronologically(expList) {
  if (!Array.isArray(expList)) return [];
  return [...expList].sort((a, b) => parseExperienceSortKey(b) - parseExperienceSortKey(a));
}

function renderTimeline() {
  const container = document.getElementById('experienceTimeline');
  if (!container) return;

  const rawExp = PORTFOLIO_DATA.experience || [];
  const exp = sortExperienceChronologically(rawExp);
  const linkedinUrl = (PORTFOLIO_DATA.profile && PORTFOLIO_DATA.profile.socials && PORTFOLIO_DATA.profile.socials.linkedin) || 'https://www.linkedin.com';

  container.innerHTML = `
    ${exp.map(e => `
      <div class="timeline-entry">
        <div class="timeline-dot"></div>
        <div class="timeline-period">${e.period}</div>
        <div class="timeline-role">${e.role}</div>
        <div class="timeline-company">${e.company}${e.division ? ` (${e.division})` : ''} • ${e.location}</div>
        ${(e.summary || (e.highlights && e.highlights[0])) ? `
          <p style="font-size: 0.88rem; color: var(--text-body); margin-top: 6px; line-height: 1.55;">
            ${e.summary || e.highlights[0]}
          </p>
        ` : ''}
        ${e.photo ? `
          <div class="timeline-photo-card" style="margin-top: 10px;">
            <img src="${formatImageSrc(e.photo.url)}" alt="${e.photo.caption}" class="timeline-photo-img" loading="lazy" referrerpolicy="no-referrer" onerror="handleImgError(this, '${e.photo.url}')">
            <div class="timeline-photo-caption">📍 ${e.photo.caption}</div>
          </div>
        ` : ''}
      </div>
    `).join('')}

    <div style="margin-top: 16px; padding: 14px 18px; background: var(--bg-surface); border: 1.5px solid var(--border-light); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
      <div style="font-size: 0.85rem; color: var(--text-muted);">
        For full role history &amp; project breakdowns:
      </div>
      <a href="${linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 6px; font-weight: 700; color: var(--park-copper); font-size: 0.825rem; padding: 6px 14px;">
        <span>💼</span> View on LinkedIn →
      </a>
    </div>
  `;

  const courseContainer = document.getElementById('courseworkList');
  const eduData = PORTFOLIO_DATA.education || (PORTFOLIO_DATA.profile && PORTFOLIO_DATA.profile.education) || {};
  
  const eduTimeline = document.getElementById('eduTimeline');
  if (eduTimeline && eduData.timeline) eduTimeline.textContent = eduData.timeline;

  const eduDegree = document.getElementById('eduDegreeTitle');
  if (eduDegree && eduData.degree) eduDegree.textContent = eduData.degree;

  const eduInst = document.getElementById('eduInstitutionGrade');
  if (eduInst) {
    const inst = eduData.institution || eduData.university || "University of Sheffield";
    const grade = eduData.status || eduData.grade || "1st Class Honours (Years 1 & 2)";
    eduInst.textContent = `${inst} • ${grade}`;
  }

  const cw = eduData.coursework || [];
  if (courseContainer) {
    courseContainer.innerHTML = cw.map(c => `
      <span class="badge badge-copper" style="font-size: 0.8rem; padding: 6px 14px;">${c}</span>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   11. NAVIGATION & THEME TOGGLE
   -------------------------------------------------------------------------- */
window.toggleMobileNav = function(forceState) {
  const drawer = document.getElementById('mobileNavDrawer');
  const mobileBtn = document.getElementById('mobileMenuToggle');
  const backdrop = document.getElementById('mobileNavBackdrop');
  if (!drawer) return;

  let shouldOpen;
  if (typeof forceState === 'boolean') {
    shouldOpen = forceState;
  } else {
    shouldOpen = !drawer.classList.contains('open');
  }

  if (shouldOpen) {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    if (mobileBtn) {
      mobileBtn.innerHTML = '✕';
      mobileBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    if (mobileBtn) {
      mobileBtn.innerHTML = '☰';
      mobileBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }
};

function setupNavigation() {
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 120;
      const secId = sec.getAttribute('id');
      const navLink = document.querySelector(`.desktop-nav .nav-link[href="#${secId}"]`);

      if (navLink) {
        if (scrollY > secTop && scrollY <= secTop + secHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });
}
function setupThemeToggle() {
  const btn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('theme') || 'light';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  }
}

window.copyEmailToClipboard = function() {
  const email = PORTFOLIO_DATA.profile.socials.email;
  navigator.clipboard.writeText(email).then(() => {
    const toast = document.getElementById('copyToast');
    if (toast) {
      toast.textContent = '✓ Email copied to clipboard!';
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 2500);
    }
  });
};

function formatMarkdown(text) {
  if (!text) return '';
  
  // Handle code blocks ```python ... ```
  let formatted = text.replace(/```([a-zA-Z]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    const langLabel = lang ? lang.toUpperCase() : 'CODE';
    return `
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>🐍 ${langLabel} // SCRIPT &amp; CALCULATOR</span>
          <button class="code-block-copy-btn" onclick="navigator.clipboard.writeText(this.closest('.code-block-wrapper').querySelector('pre').innerText); this.textContent='✓ Copied!'; setTimeout(() => this.textContent='Copy Code', 2000);">Copy Code</button>
        </div>
        <pre class="code-block-pre"><code>${escapeHTML(code.trim())}</code></pre>
      </div>
    `;
  });

  return formatted
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/• (.*)/gim, '<li>$1</li>')
    .replace(/\n\n/gim, '<p></p>')
    .replace(/\n/gim, '<br>');
}

function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/* --------------------------------------------------------------------------
   CAROUSEL & 1-ROW VIEWPORT CONTROLLER
   -------------------------------------------------------------------------- */
window.slideCarousel = function(trackId, direction) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const firstChild = track.firstElementChild;
  const cardWidth = firstChild ? firstChild.offsetWidth + 24 : 340;
  track.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
};

function setupAllCarousels() {
  setupCarouselTracker('featuredProjectsGrid', 'featuredProjectsDots');
  setupCarouselTracker('diaryGrid', 'diaryDots');
  setupCarouselTracker('skillsGridTrack', 'skillsDots');
}

function setupCarouselTracker(trackId, dotsId) {
  const track = document.getElementById(trackId);
  const dotsContainer = document.getElementById(dotsId);
  if (!track || !dotsContainer) return;

  const items = Array.from(track.children);
  if (items.length <= 1) {
    dotsContainer.style.display = 'none';
    return;
  }
  dotsContainer.style.display = 'flex';

  dotsContainer.innerHTML = items.map((_, idx) => `
    <span class="carousel-dot ${idx === 0 ? 'active' : ''}" onclick="scrollCarouselToIndex('${trackId}', ${idx})"></span>
  `).join('');

  track.addEventListener('scroll', () => {
    const firstChild = track.firstElementChild;
    const cardWidth = firstChild ? firstChild.offsetWidth + 24 : 340;
    const activeIdx = Math.min(items.length - 1, Math.max(0, Math.round(track.scrollLeft / cardWidth)));
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
  });
}

window.scrollCarouselToIndex = function(trackId, idx) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const firstChild = track.firstElementChild;
  const cardWidth = firstChild ? firstChild.offsetWidth + 24 : 340;
  track.scrollTo({
    left: idx * cardWidth,
    behavior: 'smooth'
  });
};

let isSkillsExpanded = false;
window.toggleSkillsLayout = function() {
  const track = document.getElementById('skillsGridTrack');
  const btn = document.getElementById('btnToggleSkillsGrid');
  const controls = document.getElementById('skillsCarouselControls');
  const dots = document.getElementById('skillsDots');
  if (!track) return;

  isSkillsExpanded = !isSkillsExpanded;
  if (isSkillsExpanded) {
    track.classList.remove('carousel-track');
    track.classList.add('skills-grid-expanded');
    if (btn) btn.textContent = 'Collapse to 1-Row Carousel ↑';
    if (controls) controls.style.display = 'none';
    if (dots) dots.style.display = 'none';
  } else {
    track.classList.add('carousel-track');
    track.classList.remove('skills-grid-expanded');
    if (btn) btn.textContent = 'See All Skill Categories in Full Grid ↓';
    if (controls) controls.style.display = 'flex';
    if (dots) dots.style.display = 'flex';
  }
};


/* --------------------------------------------------------------------------
   LIGHTBOX FULL-SCREEN IMAGE VIEWER
   -------------------------------------------------------------------------- */
window.openLightboxModal = function(imgUrl, title, caption) {
  let modal = document.getElementById('globalLightboxModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'globalLightboxModal';
    modal.className = 'modal-backdrop';
    modal.style.zIndex = '99999';
    modal.style.background = 'rgba(0, 0, 0, 0.9)';
    modal.innerHTML = `
      <div style="position: relative; max-width: 92vw; max-height: 92vh; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: auto;">
        <button type="button" id="closeLightboxBtn" style="position: absolute; top: -40px; right: 0; background: rgba(255,255,255,0.15); border: none; color: #fff; font-size: 1.5rem; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">✕</button>
        <div id="lightboxTitle" style="font-family: var(--font-mono); color: var(--park-copper); font-size: 0.9rem; font-weight: 700; margin-bottom: 8px; text-transform: uppercase; text-align: center;"></div>
        <img id="lightboxImg" src="" alt="Full preview" style="max-width: 90vw; max-height: 75vh; object-fit: contain; border-radius: var(--radius-sm); box-shadow: 0 10px 40px rgba(0,0,0,0.8); background: #09090b;">
        <div id="lightboxCaption" style="color: #cbd5e1; font-size: 0.85rem; margin-top: 10px; max-width: 800px; text-align: center; font-style: italic;"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.id === 'closeLightboxBtn') {
        modal.classList.remove('open');
        modal.style.display = 'none';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        modal.classList.remove('open');
        modal.style.display = 'none';
      }
    });
  }

  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const captionEl = document.getElementById('lightboxCaption');

  if (imgEl) imgEl.src = formatImageSrc(imgUrl);
  if (titleEl) titleEl.textContent = title || 'Technical Drawing / Figure';
  if (captionEl) captionEl.textContent = caption || '';

  modal.classList.add('open');
  modal.style.display = 'flex';
};


/* --------------------------------------------------------------------------
   CACHE RESET & LIVE UPDATE DETECTION ENGINE
   -------------------------------------------------------------------------- */
window.forceClearCacheAndReload = function() {
  try {
    localStorage.removeItem('lucy_portfolio_studio_data');
    localStorage.removeItem('lucy_portfolio_data_version');
    sessionStorage.clear();
  } catch(e) {}

  const banner = document.getElementById('liveUpdateBanner');
  if (banner) banner.style.display = 'none';

  // Floating confirmation toast
  const toast = document.createElement('div');
  toast.style.position = 'fixed';
  toast.style.top = '24px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.background = '#22c55e';
  toast.style.color = '#ffffff';
  toast.style.fontWeight = '700';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '9999px';
  toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
  toast.style.zIndex = '100000';
  toast.style.fontSize = '0.9rem';
  toast.textContent = '🔄 Cache cleared! Downloading newest portfolio updates...';
  document.body.appendChild(toast);

  setTimeout(() => {
    window.location.href = window.location.pathname + '?reload=' + Date.now();
  }, 450);
};

window.dismissUpdateBanner = function() {
  const banner = document.getElementById('liveUpdateBanner');
  if (banner) banner.style.display = 'none';
  sessionStorage.setItem('lucy_update_banner_dismissed', 'true');
};

function checkLiveSiteVersionAndNotify() {
  if (sessionStorage.getItem('lucy_update_banner_dismissed') === 'true') return;
  const currentVersion = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.dataVersion) ? PORTFOLIO_DATA.dataVersion : 'v1';
  const savedVersion = localStorage.getItem('lucy_portfolio_data_version');

  const banner = document.getElementById('liveUpdateBanner');
  if (!banner) return;

  // If this is a returning visitor whose cached version was older
  if (savedVersion && savedVersion !== currentVersion) {
    banner.style.display = 'block';
  }
}

// Attach version check to initApp
if (typeof initApp === 'function') {
  const originalInitApp = initApp;
  initApp = function() {
    originalInitApp();
    checkLiveSiteVersionAndNotify();
  };
}
