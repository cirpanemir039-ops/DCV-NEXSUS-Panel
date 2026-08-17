(function() {
  'use strict';

  // 🛡️ NEXSUS 5-LAYER CRYPTO ENGINE INTEGRITY CHECK
  const _NEXSUS_QUEST_VAULT = (function() {
    const _SALT = [0x4E, 0x45, 0x58, 0x53, 0x55, 0x53];
    const _SIG = "0x4e45585355535f4443565f5345435552495459";
    function _xor(d, k) { let o=[]; for(let i=0;i<d.length;i++) o.push(d[i]^k[i%k.length]); return o; }
    function _rot(a) { return a.map(b => ((b << 3) & 0xFF) | (b >> 5)); }
    function _unrot(a) { return a.map(b => (b >> 3) | ((b << 5) & 0xFF)); }
    function _dec(a) { return String.fromCharCode.apply(null, _xor(_unrot(a), _SALT)); }
    return Object.freeze({
      author: function() { return _dec(_rot(_xor([78,69,88,83,85,83], _SALT))); },
      brand: function() { return _dec(_rot(_xor([68,67,86], _SALT))); }
    });
  })();

  if (_NEXSUS_QUEST_VAULT.author() !== 'NEXSUS') {
    throw new Error('NEXSUS Security Violation: Quest engine integrity failed!');
  }

  // Prevent double-execution
  if (window.__DCV_PANEL_ENGINE_RUNNING || window.__CAHIT_PANEL_ENGINE_RUNNING) {
    window.postMessage({ prefix: 'DISCORD_QUEST_COMPLETER', type: 'ENGINE_LOG', data: { msg: '⚠️ Motor zaten çalışıyor!', msgType: 'warn' } }, '*');
    return;
  }
  window.__DCV_PANEL_ENGINE_RUNNING = true;
  window.__CAHIT_PANEL_ENGINE_RUNNING = true;
  window.__CAHIT_PANEL_ENGINE_STOPPED = false;

  function sendUpdate(type, data) {
    window.postMessage({ prefix: 'DISCORD_QUEST_COMPLETER', type: type, data: data }, '*');
  }

  function engineLog(msg, msgType) {
    sendUpdate('ENGINE_LOG', { msg: msg, msgType: msgType || 'info' });
  }

  // ========== ORJİNAL GÖREV MANTIGI - BİREBİR KOPYALANDI ==========

  function waitForWebpack(callback) {
    const checkInterval = 100;
    const maxAttempts = 100;
    let attempts = 0;

    const check = () => {
      if (attempts >= maxAttempts) {
        window.__CAHIT_PANEL_ENGINE_RUNNING = false;
        engineLog('❌ Webpack bulunamadı!', 'err');
        return;
      }

      if (typeof window.webpackChunkdiscord_app === 'undefined') {
        attempts++;
        setTimeout(check, checkInterval);
        return;
      }

      try {
        const originalJQuery = window.$;
        delete window.$;

        const webpackRequire = window.webpackChunkdiscord_app.push([[Symbol()], {}, (require) => require]);
        window.webpackChunkdiscord_app.pop();

        if (originalJQuery) window.$ = originalJQuery;

        if (!webpackRequire || !webpackRequire.c || Object.keys(webpackRequire.c).length < 10) {
          attempts++;
          setTimeout(check, checkInterval);
          return;
        }

        callback(webpackRequire);
      } catch (error) {
        attempts++;
        setTimeout(check, checkInterval);
      }
    };

    check();
  }

  function findModule(webpackRequire, filter) {
    for (const module of Object.values(webpackRequire.c)) {
      if (module?.exports) {
        const exports = module.exports;
        if (exports.A && filter(exports.A)) return exports.A;
        if (exports.Ay && filter(exports.Ay)) return exports.Ay;
        if (exports.ZP && filter(exports.ZP)) return exports.ZP;
        if (filter(exports)) return exports;
      }
    }
    return null;
  }

  function loadStores(webpackRequire) {
    try {
      const QuestsStore = findModule(webpackRequire, m => m.__proto__?.getQuest);
      const ChannelStore = findModule(webpackRequire, m => m.__proto__?.getAllThreadsForParent);
      const GuildChannelStore = findModule(webpackRequire, m => m.getSFWDefaultChannel);
      const api = findModule(webpackRequire, m => m.Bo?.get || m.tn?.get);

      if (!QuestsStore || !api) return null;

      return { QuestsStore, ChannelStore, GuildChannelStore, api: api.Bo || api.tn || api };
    } catch (error) {
      return null;
    }
  }

  function getActiveQuests(QuestsStore) {
    const supportedTasks = ["WATCH_VIDEO", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP", "PLAY_ACTIVITY", "WATCH_VIDEO_ON_MOBILE"];

    return [...QuestsStore.quests.values()].filter(quest => {
      const isExpired = new Date(quest.config.expiresAt).getTime() <= Date.now();
      const isCompleted = !!quest.userStatus?.completedAt;
      const isEnrolled = !!quest.userStatus?.enrolledAt;
      const taskConfig = quest.config.taskConfig ?? quest.config.taskConfigV2;
      const hasSupportedTask = supportedTasks.some(type => taskConfig.tasks[type] !== null);
      
      return isEnrolled && !isCompleted && !isExpired && hasSupportedTask;
    });
  }

  function initializeQuestState(quest) {
    const taskConfig = quest.config.taskConfig ?? quest.config.taskConfigV2;
    const supportedTasks = ["WATCH_VIDEO", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP", "PLAY_ACTIVITY", "WATCH_VIDEO_ON_MOBILE"];
    const taskType = supportedTasks.find(type => taskConfig.tasks[type] != null);
    
    const taskData = taskConfig.tasks[taskType];
    const secondsNeeded = taskData?.target ?? 0;
    const currentProgress = quest.userStatus?.progress?.[taskType]?.value ?? quest.userStatus?.streamProgressSeconds ?? 0;

    return {
      quest,
      taskType,
      secondsNeeded,
      currentProgress,
      completed: currentProgress >= secondsNeeded,
      enrolledAt: new Date(quest.userStatus.enrolledAt).getTime(),
      questName: quest.config.messages.questName
    };
  }

  const notifyUI = (quest, progress, target, completed) => {
    sendUpdate('QUEST_UPDATE', { id: quest.id, name: quest.config.messages.questName, progress, target, completed });
  };

  async function processVideoStep(state, api) {
    const { quest, secondsNeeded, currentProgress } = state;
    const speed = 1;
    
    const nextTime = Math.min(secondsNeeded, currentProgress + speed + Math.random());
    
    try {
      const res = await api.post({ url: `/quests/${quest.id}/video-progress`, body: { timestamp: nextTime } });
      state.currentProgress = nextTime;
      notifyUI(quest, Math.floor(state.currentProgress), secondsNeeded, false);
      engineLog(`🎥 Video [${state.questName}]: ${Math.floor(state.currentProgress)} / ${secondsNeeded}s`, 'info');

      if (res.body.completed_at !== null || state.currentProgress >= secondsNeeded) {
        state.completed = true;
        notifyUI(quest, secondsNeeded, secondsNeeded, true);
        await api.post({ url: `/quests/${quest.id}/video-progress`, body: { timestamp: secondsNeeded } });
        engineLog(`✨ ${state.questName} Tamamlandı!`, 'success');
      }
    } catch (error) {}
  }

  async function processHeartbeatStep(state, stores) {
    const { api, ChannelStore, GuildChannelStore } = stores;
    const { quest, taskType, secondsNeeded } = state;

    let channelId = ChannelStore?.getSortedPrivateChannels()[0]?.id;
    if (!channelId && GuildChannelStore) {
      const guilds = Object.values(GuildChannelStore.getAllGuilds());
      const voice = guilds.find(g => g?.VOCAL?.length > 0);
      if (voice) channelId = voice.VOCAL[0].channel.id;
    }

    const streamKey = channelId ? `call:${channelId}:1` : `call:${quest.id}:1`;

    try {
      const response = await api.post({
        url: `/quests/${quest.id}/heartbeat`,
        body: { stream_key: streamKey, terminal: false }
      });

      const serverProgress = response.body?.progress?.[taskType]?.value ?? 0;
      state.currentProgress = serverProgress;
      notifyUI(quest, Math.floor(state.currentProgress), secondsNeeded, state.currentProgress >= secondsNeeded);
      engineLog(`▶ İlerleme [${state.questName}]: ${Math.floor(state.currentProgress)} / ${secondsNeeded}s`, 'info');

      if (state.currentProgress >= secondsNeeded) {
        await api.post({
          url: `/quests/${quest.id}/heartbeat`,
          body: { stream_key: streamKey, terminal: true }
        });
        state.completed = true;
        notifyUI(quest, secondsNeeded, secondsNeeded, true);
        engineLog(`✨ ${state.questName} Tamamlandı!`, 'success');
      }
    } catch (error) {}
  }

  async function runQuestCode(webpackRequire) {
    try {
      const version = window.__QUEST_VERSION || 'unknown';
      if ('__QUEST_VERSION' in window) {
        try { delete window.__QUEST_VERSION; } catch (e) {}
      }
      engineLog(`🚀 DCV - NEXSUS Panel Motor v${version} başlatılıyor...`, 'info');

      const stores = loadStores(webpackRequire);
      if (!stores) {
        engineLog('❌ Discord modülleri bulunamadı!', 'err');
        window.__CAHIT_PANEL_ENGINE_RUNNING = false;
        return;
      }

      const activeQuests = getActiveQuests(stores.QuestsStore);
      if (activeQuests.length === 0) {
        engineLog('🎉 Tamamlanacak aktif görev bulunamadı!', 'info');
        window.__CAHIT_PANEL_ENGINE_RUNNING = false;
        return;
      }

      const questStates = activeQuests.map(quest => initializeQuestState(quest));

      sendUpdate('QUEST_LIST', questStates.map(state => ({
        id: state.quest.id,
        name: state.questName,
        taskType: state.taskType,
        progress: Math.floor(state.currentProgress),
        target: state.secondsNeeded,
        completed: state.completed
      })));

      engineLog(`📊 ${activeQuests.length} aktif görev bulundu, işleniyor...`, 'success');

      for (const state of questStates) {
        if (state.completed || window.__CAHIT_PANEL_ENGINE_STOPPED) continue;

        engineLog(`▶ Başladı: ${state.questName} (${state.taskType})`, 'info');

        while (!state.completed && !window.__CAHIT_PANEL_ENGINE_STOPPED) {
          const isVideo = state.taskType.startsWith("WATCH_VIDEO");

          if (isVideo) {
            await processVideoStep(state, stores.api);
            if (!state.completed && !window.__CAHIT_PANEL_ENGINE_STOPPED) await new Promise(r => setTimeout(r, 1000 + (Math.random() * 500)));
          } else {
            await processHeartbeatStep(state, stores);
            if (!state.completed && !window.__CAHIT_PANEL_ENGINE_STOPPED) await new Promise(r => setTimeout(r, 20000 + (Math.random() * 2000)));
          }
        }
      }

      if (window.__CAHIT_PANEL_ENGINE_STOPPED) {
        engineLog('⏸️ Görev motoru durduruldu.', 'warn');
      } else {
        engineLog('🎉 Tüm görevler tamamlandı!', 'success');
      }

      window.__CAHIT_PANEL_ENGINE_RUNNING = false;
    } catch (error) {
      engineLog(`❌ Motor hatası: ${error?.message || 'Bilinmeyen hata'}`, 'err');
      window.__CAHIT_PANEL_ENGINE_RUNNING = false;
    }
  }

  // ========== EK ÖZELLİKLER (HypeSquad, Stop, vb.) ==========

  window.addEventListener('message', async ({ source, data }) => {
    if (source !== window || !data || data.prefix !== 'DISCORD_QUEST_COMPLETER_UI') return;

    if (data.type === 'STOP_ENGINE') {
      window.__CAHIT_PANEL_ENGINE_STOPPED = true;
      window.__CAHIT_PANEL_ENGINE_RUNNING = false;
      engineLog('⛔ Görev motoru durduruldu.', 'warn');
      sendUpdate('ENGINE_STOPPED_CONFIRM', {});

    } else if (data.type === 'HYPESQUAD_SET' || data.type === 'HYPESQUAD_REMOVE') {
      try {
        // HTTPUtils chunk bulucu - Cahit Hypesquad Get and Remove.txt algoritması
        const wreq = window.webpackChunkdiscord_app.push([[Symbol()], {}, (r) => r]);
        window.webpackChunkdiscord_app.pop();

        let api = null;

        // 1. HTTPUtils chunk ara
        if (wreq && wreq.m) {
          for (const [id, func] of Object.entries(wreq.m)) {
            if (func.toString().includes('HTTPUtils')) {
              const mod = wreq(id);
              if (mod) {
                api = Object.values(mod).find(e => e?.get && (e?.post || e?.del));
                if (api) break;
              }
            }
          }
        }

        // 2. Fallback: loadStores API
        if (!api) {
          const stores = loadStores(wreq);
          if (stores && stores.api) api = stores.api;
        }

        if (!api) {
          sendUpdate('HYPESQUAD_RESULT', { success: false, action: data.type, error: 'API Not Found' });
          return;
        }

        if (data.type === 'HYPESQUAD_SET') {
          const houseId = parseInt(data.houseId) || 1;
          try {
            await api.post({ url: '/hypesquad/online', body: { house_id: houseId } });
            sendUpdate('HYPESQUAD_RESULT', { success: true, action: 'set', houseId });
          } catch(e) {
            sendUpdate('HYPESQUAD_RESULT', { success: false, action: 'set', houseId });
          }
        } else if (data.type === 'HYPESQUAD_REMOVE') {
          try {
            if (typeof api.del === 'function') {
              await api.del({ url: '/hypesquad/online' });
            } else if (typeof api.delete === 'function') {
              await api.delete({ url: '/hypesquad/online' });
            }
            sendUpdate('HYPESQUAD_RESULT', { success: true, action: 'remove' });
          } catch(e) {
            sendUpdate('HYPESQUAD_RESULT', { success: false, action: 'remove' });
          }
        }
      } catch (err) {
        sendUpdate('HYPESQUAD_RESULT', { success: false, action: data.type, error: err?.message || 'Failed' });
      }
    }
  });

  waitForWebpack(runQuestCode);
})();
