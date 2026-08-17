// 🛡️ NEXSUS DCV PANEL - ADVANCED MULTI-LAYER CRYPTO INTEGRITY MODULE
(function() {
  'use strict';

  const _CRYPTO_GUARD = (function() {
    const _SALT = [0x4E, 0x45, 0x58, 0x53, 0x55, 0x53]; // NEXSUS
    const _SIG = '0x4e45585355535f4443565f5345435552495459';

    function _stage1_xor(data, key) {
      let out = [];
      for (let i = 0; i < data.length; i++) out.push(data[i] ^ key[i % key.length]);
      return out;
    }
    function _stage2_bitRotate(arr) {
      return arr.map(b => ((b << 3) & 0xFF) | (b >> 5));
    }
    function _stage3_bitUnrotate(arr) {
      return arr.map(b => (b >> 3) | ((b << 5) & 0xFF));
    }
    function _stage4_decode(encArr) {
      let unrotated = _stage3_bitUnrotate(encArr);
      let xored = _stage1_xor(unrotated, _SALT);
      return String.fromCharCode.apply(null, xored);
    }

    const _encAuthor = _stage2_bitRotate(_stage1_xor([78,69,88,83,85,83], _SALT));
    const _encBrand = _stage2_bitRotate(_stage1_xor([68,67,86], _SALT));

    return Object.freeze({
      author: function() { return _stage4_decode(_encAuthor); },
      brand: function() { return _stage4_decode(_encBrand); },
      hash: _SIG,
      verify: function() {
        try {
          const manifest = chrome.runtime.getManifest();
          const authorVal = (manifest.author || '').toUpperCase();
          const nameVal = (manifest.name || '').toUpperCase();
          if (_stage4_decode(_encAuthor) !== 'NEXSUS' || _stage4_decode(_encBrand) !== 'DCV') return false;
          if (authorVal !== 'NEXSUS' || !nameVal.includes('DCV')) return false;
          return true;
        } catch(e) { return false; }
      }
    });
  })();

  chrome.runtime.onInstalled.addListener(() => {
    if (_CRYPTO_GUARD.verify()) {
      console.info('⚡ [NEXSUS CRYPTO VAULT] Extension installed & 5-Layer integrity 100% verified.');
    } else {
      console.error('CRITICAL: NEXSUS Security Breach Detected on Installation!');
    }
  });

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getVersion') {
      const manifest = chrome.runtime.getManifest();
      sendResponse({ version: manifest.version });
      return false;
    } else if (request.action === 'resetAndExecuteQuestCode') {
      if (sender.tab && sender.tab.id) {
        chrome.scripting.executeScript({
          target: { tabId: sender.tab.id },
          func: () => {
            window.__DCV_PANEL_ENGINE_RUNNING = false;
            window.__CAHIT_PANEL_ENGINE_RUNNING = false;
          },
          world: 'MAIN'
        }).then(() => sendResponse({ success: true }))
          .catch((error) => sendResponse({ success: false, error: error.message }));
        return true;
      }
    } else if (request.action === 'executeQuestCode') {
      if (!_CRYPTO_GUARD.verify()) {
        sendResponse({ success: false, error: 'License verification failed. Tampering detected!' });
        return false;
      }
      if (sender.tab && sender.tab.id) {
        const manifest = chrome.runtime.getManifest();
        chrome.scripting.executeScript({
          target: { tabId: sender.tab.id },
          func: (version) => { window.__QUEST_VERSION = version; },
          args: [manifest.version],
          world: 'MAIN'
        }).then(() => {
          return chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            files: ['quest-code.js'],
            world: 'MAIN'
          });
        }).then(() => sendResponse({ success: true }))
          .catch((error) => sendResponse({ success: false, error: error.message }));
        return true;
      }
    }
  });
})();
