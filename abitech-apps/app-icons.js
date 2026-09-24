// Shared catalog artwork: recognizable app functions, consistent in every view.
// Existing generated PNGs stay on disk; uploaded custom logos still take priority.
window.AppIcons = (() => {
  const byId = {
    'app-food-1': 'utensils-crossed',
    'app-shop-1': 'shopping-bag',
    'app-life-1': 'layout-grid',
    'app-chat-1': 'message-circle',
    'app-fit-1': 'dumbbell',
    'app-groc-1': 'shopping-basket',
    'app-mov-1': 'clapperboard',
    'app-furn-1': 'armchair',
    'app-learn-1': 'graduation-cap',
    'app-pet-1': 'paw-print',
    'app-plant-1': 'leaf',
    'app-salon-1': 'scissors',
    'app-ai-dream': 'moon-star',
    'app-ai-roast': 'flame',
    'app-ai-startup': 'rocket',
    'app-ai-story': 'scroll-text',
    'app-ai-debate': 'swords',
    'app-ai-fridge': 'flask-conical',
    'app-ai-wander': 'compass',
    'app-ai-excuse': 'drama',
    'app-ai-haiku': 'flower-2',
    'app-ai-interview': 'briefcase',
    'app-ai-kokoro': 'audio-lines',
    'app-ai-supertonic': 'audio-waveform',
    'app-ai-whisper': 'mic',
    'app-ai-sentiment': 'smile',
    'app-ai-sorter': 'tags',
    'app-ai-digest': 'file-text',
    'app-ai-polyglot': 'languages',
    'app-ai-vision': 'scan-eye',
    'app-ai-caption': 'image',
    'app-ai-match': 'search',
    'app-ai-meeting': 'clipboard-list',
    'app-ai-triage': 'inbox',
    'app-ai-subtitle': 'captions',
    'app-ai-reader': 'book-open',
    'app-ai-redactor': 'eraser',
    'app-ai-answer': 'lightbulb',
    'app-ai-listing': 'store',
    'app-ai-journal': 'bookmark',
    'app-ai-contract': 'file-check',
    'app-ai-reviews': 'star',
    'app-ai-voicecloner': 'mic',
    'app-ai-ocryolo': 'scan-eye',
    'app-ai-dualtranslate': 'languages',
    'app-ai-counsel': 'scale'
  };
  const byCategory = {
    'ai apps': 'sparkles',
    social: 'messages-square', entertainment: 'play',
    'food & drink': 'utensils-crossed', shopping: 'shopping-bag',
    lifestyle: 'layout-grid', 'health & fitness': 'dumbbell',
    education: 'graduation-cap'
  };
  const escape = value => String(value || '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);

  function iconName(app) {
    return byId[app.id] || (app.iconName && app.iconName !== 'box' ? app.iconName :
      byCategory[String(app.category || '').toLowerCase()]) || 'app-window';
  }

  function render(app, iconClass = 'w-10 h-10') {
    const name = iconName(app);
    const logo = String(app.logoUrl || '');
    // Recognize only this catalog's original local artwork, not external logos.
    const bundledLogo = byId[app.id] &&
      logo.replace(/^\.\//, '').split(/[?#]/)[0] === `app-logos/${app.id}.png`;
    const customLogo = logo && !bundledLogo;
    return `<span role="img" aria-label="${escape(app.title)} icon" data-app-icon="${escape(name)}"
        class="relative isolate flex w-full h-full items-center justify-center overflow-hidden squircle bg-gradient-to-br ${escape(app.iconBg || 'from-slate-600 to-slate-800')} text-white">
      <span aria-hidden="true" class="absolute -top-1/2 -left-1/4 w-full h-full rounded-full bg-white/10"></span>
      <span aria-hidden="true" class="absolute -bottom-1/2 -right-1/4 w-full h-full rounded-full border border-white/15"></span>
      <i data-lucide="${escape(name)}" aria-hidden="true" class="relative ${escape(iconClass)} stroke-[1.8] drop-shadow-sm"></i>
      ${customLogo ? `<img src="${escape(logo)}" alt="" loading="lazy" class="absolute inset-0 w-full h-full object-cover" onerror="this.remove()" />` : ''}
    </span>`;
  }
  return { iconName, render };
})();
