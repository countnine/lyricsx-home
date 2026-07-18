/* Lightweight i18n for the Musebase landing page.
 * - Default language is English (matches the HTML source).
 * - If no saved choice, uses navigator.language (ko* -> Korean).
 * - EN/KO toggle persists the choice in localStorage.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "musebase-lang";

  var dict = {
    en: {
      "nav.features": "Features",
      "nav.download": "Download",

      "hero.badge": "Free & Open Source",
      "hero.title": "Real-time, bilingual lyrics on your Windows desktop",
      "hero.subtitle": "Musebase automatically finds the lyrics of whatever you're playing, syncs them line by line, and shows the original alongside a translation — right on your desktop.",
      "hero.download": "Download for Windows",
      "hero.meta": "Free · Windows 10 (2004+) / 11 · No .NET install required",

      "features.title": "Everything you need to sing along",
      "feat.detect.title": "Automatic playback detection",
      "feat.detect.desc": "Built on Windows SMTC. Works with Spotify, Apple Music, YouTube Music and any player that supports media keys.",
      "feat.search.title": "Multi-source lyrics search",
      "feat.search.desc": "Searches LRCLIB, NetEase, Kugou and QQ Music, then auto-picks the best match using quality ranking.",
      "feat.bilingual.title": "Bilingual display",
      "feat.bilingual.desc": "Shows the original line with its translation stacked below, so you can follow both at once.",
      "feat.deepl.title": "Machine translation built in",
      "feat.deepl.desc": "When a source has no translation, lines are machine-translated on the fly — LibreTranslate free out of the box, or DeepL with your own free API key.",
      "feat.overlay.title": "Desktop overlay",
      "feat.overlay.desc": "Transparent, click-through, always on top. Karaoke-style progress fill and drag to reposition.",
      "feat.cache.title": "Offline cache",
      "feat.cache.desc": "Found lyrics and translations are stored in SQLite for instant, offline display on replay.",
      "feat.tray.title": "Tray controls",
      "feat.tray.desc": "Toggle the overlay, nudge sync offset by ±0.5s, search manually, and launch on startup.",
      "feat.update.title": "Automatic updates",
      "feat.update.desc": "Delta updates via Velopack keep you on the latest version automatically.",

      "demo.title": "See it in action",
      "demo.sub": "Lyrics fade in over your desktop and fill line by line as the song plays.",

      "download.title": "Get Musebase",
      "download.version": "Latest release: v0.13.0",
      "download.setup": "Download Installer",
      "download.setup.desc": "Setup.exe · recommended · auto-updates",
      "download.portable": "Portable ZIP",
      "download.portable.desc": "No install · run from anywhere",
      "download.req": "Windows 10 20H1 (2004) or later / Windows 11. Self-contained — no .NET installation required.",
      "download.all": "All versions & release notes →",

      "footer.built": "A Windows native rewrite of the macOS app LyricsX.",
      "footer.original": "Original LyricsX",
      "footer.license": "Licensed under MPL-2.0"
    },
    ko: {
      "nav.features": "기능",
      "nav.download": "다운로드",

      "hero.badge": "무료 · 오픈소스",
      "hero.title": "Windows 데스크톱에 실시간 이중언어 가사를",
      "hero.subtitle": "Musebase는 재생 중인 곡의 가사를 자동으로 찾아 한 줄씩 동기화하고, 원문과 번역을 함께 데스크톱에 표시합니다.",
      "hero.download": "Windows용 다운로드",
      "hero.meta": "무료 · Windows 10 (2004+) / 11 · .NET 설치 불필요",

      "features.title": "따라 부르는 데 필요한 모든 것",
      "feat.detect.title": "자동 재생 감지",
      "feat.detect.desc": "Windows SMTC 기반. Spotify, Apple Music, YouTube Music 등 미디어 키를 지원하는 모든 플레이어에 대응합니다.",
      "feat.search.title": "다중 소스 가사 검색",
      "feat.search.desc": "LRCLIB, NetEase, Kugou, QQ Music에서 검색한 뒤 품질 랭킹으로 최적 가사를 자동 선택합니다.",
      "feat.bilingual.title": "이중언어 표시",
      "feat.bilingual.desc": "원문 아래에 번역을 나란히 보여주어 두 언어를 동시에 따라갈 수 있습니다.",
      "feat.deepl.title": "기계번역 내장",
      "feat.deepl.desc": "가사 소스에 번역이 없을 때 즉시 기계번역합니다 — 설치 직후엔 LibreTranslate(무료·키 불필요), 무료 API 키를 입력하면 DeepL로 전환됩니다.",
      "feat.overlay.title": "데스크톱 오버레이",
      "feat.overlay.desc": "투명 · 클릭스루 · 항상 위. 카라오케 스타일 진행 채움과 드래그 위치 이동을 지원합니다.",
      "feat.cache.title": "오프라인 캐시",
      "feat.cache.desc": "찾은 가사와 번역을 SQLite에 저장해, 다시 재생할 때 즉시·오프라인으로 표시합니다.",
      "feat.tray.title": "트레이 제어",
      "feat.tray.desc": "오버레이 토글, 싱크 오프셋 ±0.5초 조정, 수동 검색, 시작 시 자동 실행을 제공합니다.",
      "feat.update.title": "자동 업데이트",
      "feat.update.desc": "Velopack 델타 업데이트로 항상 최신 버전을 자동 유지합니다.",

      "demo.title": "실제 동작 보기",
      "demo.sub": "곡이 재생되면 가사가 데스크톱 위로 페이드 인 되며 한 줄씩 채워집니다.",

      "download.title": "Musebase 받기",
      "download.version": "최신 릴리스: v0.13.0",
      "download.setup": "설치 프로그램 다운로드",
      "download.setup.desc": "Setup.exe · 권장 · 자동 업데이트",
      "download.portable": "포터블 ZIP",
      "download.portable.desc": "설치 불필요 · 어디서나 실행",
      "download.req": "Windows 10 20H1(2004) 이상 / Windows 11. self-contained — .NET 설치가 필요 없습니다.",
      "download.all": "모든 버전 · 릴리스 노트 →",

      "footer.built": "macOS 앱 LyricsX의 Windows 네이티브 재작성판입니다.",
      "footer.original": "원본 LyricsX",
      "footer.license": "MPL-2.0 라이선스"
    }
  };

  function resolveInitialLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved === "en" || saved === "ko") return saved;
    var nav = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    return nav.indexOf("ko") === 0 ? "ko" : "en";
  }

  function applyLang(lang) {
    var table = dict[lang] || dict.en;
    document.documentElement.setAttribute("lang", lang);
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (table[key] != null) nodes[i].textContent = table[key];
    }
    var buttons = document.querySelectorAll(".lang-toggle button");
    for (var j = 0; j < buttons.length; j++) {
      var isActive = buttons[j].getAttribute("data-lang") === lang;
      buttons[j].setAttribute("aria-pressed", isActive ? "true" : "false");
    }
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
  }

  function init() {
    applyLang(resolveInitialLang());
    var buttons = document.querySelectorAll(".lang-toggle button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        setLang(this.getAttribute("data-lang"));
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
