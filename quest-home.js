/**
 * ╔═══════════════════════════════════════════════════════════════════════════╗
 * ║ 🛡️ DCV - NEXSUS PANEL: DISCORD QUEST, HYPESQUAD & UTILITY ASSISTANT        ║
 * ║ 👤 COPYRIGHT (C) 2026 NEXSUS. ALL RIGHTS RESERVED.                         ║
 * ║ ⚡ GELİŞTİRİCİ: NEXSUS                                                   ║
 * ╚═══════════════════════════════════════════════════════════════════════════╝
 */
(function() {
    'use strict';

    /**
     * 🛡️ NEXSUS ADVANCED MULTI-LAYER CRYPTO ENGINE (v2.0.1.1)
     * LAYER 1: XOR Key Shift Matrix
     * LAYER 2: Polishing Bit Rotator
     * LAYER 3: Interleaved Array Padding
     * LAYER 4: Memory Obfuscated Base64 Stream
     * LAYER 5: Anti-Tamper Dynamic Signature Verification
     */
    var PROT_AUTHOR = "NEXSUS";
    var PROT_FRIEND = "DCV";
    var PROT_YT = "";
    var PROT_DC = "";
    var PROT_VER = "2.0.2.1";

    // 🌐 NEXSUS DYNAMIC LIVE GITHUB REMOTE LOADER
    if (typeof window !== 'undefined' && !window.__NEXSUS_REMOTE_CHECKED) {
        window.__NEXSUS_REMOTE_CHECKED = true;
        try {
            const GITHUB_LIVE_URL = "https://raw.githubusercontent.com/cirpanemir039-ops/DCV-NEXSUS-Panel/main/quest-home.js";
            fetch(GITHUB_LIVE_URL + "?t=" + Date.now(), { cache: "no-store" })
                .then(res => res.ok ? res.text() : null)
                .then(remoteCode => {
                    if (remoteCode && remoteCode.includes("PROT_VER")) {
                        const match = remoteCode.match(/var\s+PROT_VER\s*=\s*["']([^"']+)["']/);
                        const remoteVer = match ? match[1] : null;
                        if (remoteVer && remoteVer !== PROT_VER && !window.__NEXSUS_LOADED_VER) {
                            console.log("%c[DCV-NEXSUS] 🚀 Yeni canlı sürüm algılandı (v" + remoteVer + ")! GitHub üzerinden anında güncelleniyor...", "color:#10b981; font-weight:bold;");
                            window.__NEXSUS_LOADED_VER = remoteVer;
                            const oldRoot = document.getElementById("discord-quest-ui-root");
                            if (oldRoot) oldRoot.remove();
                            const oldTrigger = document.getElementById("dqu-floating-trigger");
                            if (oldTrigger) oldTrigger.remove();
                            const oldStyles = document.querySelectorAll('style[id^="discord-quest-"]');
                            oldStyles.forEach(s => s.remove());

                            const script = document.createElement('script');
                            script.type = 'text/javascript';
                            script.textContent = remoteCode;
                            (document.head || document.documentElement || document.body).appendChild(script);
                        }
                    }
                })
                .catch(() => {});
        } catch(e) {}
    }

    // Auto-detect browser language: default to TR if Turkish, else EN
    var initialLang = (typeof navigator !== 'undefined' && (navigator.language || "").toLowerCase().startsWith("tr")) ? "tr" : "en";
    var savedLang = (typeof localStorage !== 'undefined' && localStorage.getItem('dqu_lang')) || initialLang;

    var I18N = {
        tr: {
            title: "NEXSUS CORE v2.0",
            tabQuests: "🎯 Görevler",
            tabHypeSquad: "🛡️ HypeSquad",
            tabUpdates: "📢 Güncellemeler",
            tabPrivacy: "🔒 Gizlilik",
            tabAchievements: "🏆 Başarımlar",
            tabBadges: "🏷️ Rozetler",
            tabBeta: "🧪 Beta",
            tabNotes: "📝 Notlar",
            tabGames: "🎮 Oyunlar",
            tabClicker: "⚡ Clicker",
            tabLogs: "📜 Konsol",
            tabSettings: "⚙️ Ayarlar",
            tabProfile: "📊 Hesabım",
            tabDecorations: "🎨 Dekorasyon",
            tabTimer: "⏰ Zamanlayıcı",
            tabSoundboard: "🎵 Ambians",
            tabSnake: "🐍 Snake",
            tabGifting: "🎁 Hediye Rozeti",
            startBtn: "⚡ NEXSUS ENGINE ÇALIŞTIR",
            stopBtn: "⏸️ Durdur",
            totalTimeCalc: "Siber İlerleme Hesaplanıyor...",
            summaryLabel: "⏱️ Genel İlerleme",
            savedTime: "⚡ Tasarruf:",
            completedCount: "✅ Biten:",
            activeQuests: "Aktif:",
            clearLogs: "Konsolu Temizle",
            modeLabel: "Siber Koruma Modu:",
            modeValue: "Güvenli Siber Akış",
            langLabel: "Sistem Dili / Language:",
            soundLabel: "Siber Ses Efektleri:",
            notifyLabel: "Sistem Bildirimleri:",
            themeLabel: "NEXSUS Temaları:",
            creatorText: "NEXSUS Core Engine v2.0 — Siber Otomasyon Mimarisi ⚡",
            ytChannel: "",
            dcServer: "",
            refreshBtn: "Senkronize Et",
            closeTitle: "HUD Küçült",
            terminalHeader: "Terminal Günlükleri:",
            filterAll: "Tümü",
            filterActive: "Devam Edenler",
            filterDone: "Tamamlananlar",
            emptyQuestsPlaceholder: '🚀 Görevleri başlatmak için aşağıdaki <strong>"⚡ Görevleri Otomatik Başlat"</strong> butonuna 1 kere basın.',
            hsTitle: "HypeSquad Evini Seç veya Rozeti Yönet",
            hsSub: "⚡ Özel Özellik: Discord ayarlarından kaldırılan HypeSquad ev rozetlerini yalnızca bu panelden 1-tıkla profilinize alabilirsiniz!",
            hsBraveryDesc: "Cesur, gözü pek ve maceracı ruhlar.",
            hsBrillianceDesc: "Kendine güvenen, azimli ve kararlı zihinler.",
            hsBalanceDesc: "Nazik, uyumlu ve dengeli dostlar.",
            hsApplyBtn: "✨ Seçili Evin Rozetini Al",
            hsRemoveBtn: "🗑️ Rozeti Çıkar / Sil",
            hsRemoveDisabledMsg: "⚠️ Üzgünüz! HypeSquad rozet çıkarma işlemi Discord sunucuları tarafından şu an kısıtlanmıştır veya geçici olarak hizmet dışıdır.",
            hsSuccessMsg: "✓ HypeSquad rozeti başarıyla güncellendi!",
            hsRemoveToastTitle: "HypeSquad Uyarısı",
            privTitle: "🔒 Profil Gizlilik Seviyeni Seç",
            privSub: "Discord profilinin başkaları tarafından nasıl göründüğünü tek tıkla özelleştir.",
            priv1Name: "🔒 Özel Profil",
            priv1Desc: "Sadece eklediğin arkadaşların profil ayrıntılarını görebilir.",
            priv2Name: "👥 Kısıtlı Görünüm",
            priv2Desc: "Arkadaşların ve ortak küçük sunuculardaki üyeler görebilir.",
            priv3Name: "🌐 Herkese Açık",
            priv3Desc: "Tüm kullanıcılar rozetlerini, oyunlarını ve detaylarını görebilir.",
            privApplyBtn: "✨ Gizlilik Ayarını Uygula",
            privSuccessMsg: "✓ Profil gizliliği başarıyla güncellendi!",
            achTitle: "🏆 16 Katmanlı Başarım Tablosu",
            achSub: "Paneli kullandıkça özel kilitli başarımları aç ve profil ustası ol!",
            achUnlocked: "BAŞARIM KAZANILDI",
            achLocked: "KİLİTLİ",
            achFirstStep: "🚀 İlk Adım",
            achFirstStepDesc: "Görev motorunu ilk kez başarıyla çalıştır.",
            achQuestHunter: "🏆 Görev Avcısı",
            achQuestHunterDesc: "Tüm aktif görevleri %100 başarıyla tamamla.",
            achOrbsCollector: "🔮 Orbs Koleksiyoncusu",
            achOrbsCollectorDesc: "Eklenti ile 2,000+ Orbs puanı kazan.",
            achHypeMember: "🛡️ HypeSquad Ruhlu",
            achHypeMemberDesc: "Panelden HypeSquad evine katıl ve rozetini al.",
            achPrivacyMaster: "🔒 Gizlilik Koruyucusu",
            achPrivacyMasterDesc: "Profil gizlilik ayarını başarıyla değiştir.",
            achClick100: "🖱️ Tık Ustası",
            achClick100Desc: "Clicker oyununda 100 tıklamaya ulaş.",
            achClick500: "👑 NEXSUS Efsanesi",
            achClick500Desc: "Clicker oyununda 500 tıklamaya ulaş.",
            achSnake50: "🐍 Yılan Başı",
            achSnake50Desc: "Retro Snake oyununda 50 skor yap.",
            achSnake200: "🐍 Retro Yılan Kralı",
            achSnake200Desc: "Retro Snake oyununda 200 rekor skora ulaş.",
            achAmbientRelax: "🎵 Ambians Ustası",
            achAmbientRelaxDesc: "Ayarlar sayfasından sentetik ambians seslerini dene.",
            achThemeCustomizer: "🎨 Tema Mimarı",
            achThemeCustomizerDesc: "Panel tema renklerini 3 kez değiştir.",
            achNotesMaster: "📝 Not Defteri",
            achNotesMasterDesc: "Hızlı notlar sekmesine ilk notunu yaz ve kaydet.",
            achBilingualUser: "🌐 Çift Dil Uzmanı",
            achBilingualUserDesc: "Panel dilini TR / EN arasında değiştir.",
            achSecretCahit: "🤫 Gizli NEXSUS Modu!",
            achSecretCahitDesc: "Başlık çubuğuna 5 kez hızlıca tıkla.",
            achGiftingGuide: "🎁 Hediye Uzmanı",
            achGiftingGuideDesc: "Hediye rozetleri mağazasını incele.",
            achBetaLeaker: "🧪 Beta Takipçisi",
            achBetaLeakerDesc: "Beta duyuru merkezini ziyaret et.",
            clickerTitle: "⚡ NEXSUS Cyber Clicker",
            clickerSub: "Görevler arka planda tamamlanırken tıkla, puan topla ve rütbe atla!",
            clickerScoreLabel: "Toplam Tıklama",
            clickerRankLabel: "Mevcut Rütbe",
            clickerBtn: "⚡ TIKLA & SKOR KAZAN!",
            rankBeginner: "🌱 Acemi Siber Oyuncu",
            rankPro: "⚡ Usta Clicker",
            rankLegend: "👑 NEXSUS Efsanesi",
            viewQuest: "👁️ Görevi Görüntüle",
            questFoundTitle: "👁️ Görev Bulundu!",
            questFoundMsg: "Discord sayfasında parlatılarak vurgulandı.",
            questNotFoundTitle: "⚠️ Görev Ekranda Bulunamadı",
            questNotFoundMsg: "Lütfen Discord Ayarlar -> Görevler sekmesini açıp tekrar deneyin.",
            infoBoxHeader: "💡 Görev İpuçları & Kullanım Rehberi",
            infoBoxVideo: "📌 Video İzleme Görevleri: API isteğinin alınabilmesi için videoyu ilk 1 saniye kendiniz başlatıp izleyin, ardından sistem otomatik tamamlayacaktır.",
            infoBoxMobile: "📱 Mobil İzleme Görevleri: Karekodu bir kez görüntüleyin (veya mobil bağlantıyı açın), ardından sistem otomatik devam edecektir.",
            modalTitle: "⚡ NEXSUS CORE v2.0 — Kullanım Bilgilendirmesi",
            modalIntro: "Hoş geldiniz! Görevlerin sorunsuz ve takılmadan tamamlanabilmesi için lütfen şu hususlara dikkat edin:",
            modalBtn: "Tamam, Anladım! 👍",
            giftTitle: "🎁 Hediye Rozetleri",
            giftSub: "Hediye göndererek profil rozetini yükselt! Her rozet farklı sayıda hediye gerektirir.",
            giftInfoCheap: "En uygun yol:",
            giftInfoNitro: "Nitro Basic hediye et — sadece",
            giftInfoCosmetic: "Kozmetik hediyeler minimum",
            giftInfoFrom: "'dan başlar.",
            giftReq1: "1 Hediye",
            giftReq2: "2 Hediye",
            giftReq3: "3 Hediye",
            giftReq6: "6 Hediye",
            giftReq10: "10 Hediye",
            giftReq20: "20 Hediye",
            giftTooltip1: "🎁 Bu rozeti almak için toplam <strong>1 hediye</strong> göndermeniz gerekiyor.",
            giftTooltip2: "🎁 Bu rozeti almak için toplam <strong>2 hediye</strong> göndermeniz gerekiyor.",
            giftTooltip3: "🎁 Bu rozeti almak için toplam <strong>3 hediye</strong> göndermeniz gerekiyor.",
            giftTooltip6: "🎁 Bu rozeti almak için toplam <strong>6 hediye</strong> göndermeniz gerekiyor.",
            giftTooltip10: "🎁 Bu rozeti almak için toplam <strong>10 hediye</strong> göndermeniz gerekiyor.",
            giftTooltip20: "🎁 Bu rozeti almak için toplam <strong>20 hediye</strong> göndermeniz gerekiyor. En yüksek seviye! 👑",
            badgesTitle: "🏷️ Tüm Discord Rozetleri",
            badgesSub: "Discord'daki tüm rozetler ve nasıl alınacakları.",
            badgeNitroSection: "💎 Discord Nitro & Boost Rozetleri",
            badgeHsSection: "🛡️ HypeSquad Ev Rozetleri",
            badgeOtherSection: "🌟 Özel & Nadir Topluluk Rozetleri",
            howNitro1: "1 Ay boyunca aktif Discord Nitro aboneliği.",
            howNitro2: "2 Ay boyunca aktif Discord Nitro aboneliği.",
            howNitro3: "3 Ay boyunca kesintisiz Nitro aboneliği.",
            howNitro6: "6 Ay boyunca kesintisiz Nitro aboneliği.",
            howNitro12: "1 Yıl (12 Ay) boyunca kesintisiz Nitro aboneliği.",
            howNitro24: "2 Yıl (24 Ay) boyunca kesintisiz Nitro aboneliği.",
            howNitro36: "3 Yıl (36 Ay) boyunca kesintisiz Nitro aboneliği.",
            howNitro48: "4 Yıl (48 Ay) boyunca kesintisiz Nitro aboneliği.",
            howHsSelect: "Paneldeki HypeSquad sekmesinden anında seçilebilir.",
            howActiveDev: "Discord Geliştirici Portalında aktif bir bota sahip olmak.",
            howEarlySupporter: "10 Ekim 2018 öncesinde Nitro satın almış olmak.",
            howBug1: "Discord Hata Avcısı programında geçerli açık bildirmek.",
            howBug2: "Discord Hata Avcısı programında kritik açıklar bildirmek.",
            howPartner: "Discord Partner Programına kabul edilmiş bir sunucu sahibi olmak.",
            howStaff: "Resmi Discord Inc. çalışanı olmak.",
            howQuest: "Discord Görevlerini panelimizle tamamlayarak kazanılır.",
            howHsEvents: "HypeSquad Etkinlik Yöneticisi başvurusu onaylananlar.",
            howOrigUser: "Yeni kullanıcı adı sistemine ilk geçen eski hesaplar.",
            howAutoMod: "Sunucusunda AutoMod kuralını başarıyla yapılandıranlar.",
            howOrbs: "Discord görevlerinden Orbs puanı toplayarak açılır.",
            howMeadow: "Özel Discord bahar etkinliğine katılanlar.",
            howCommands: "Slash komutlarını yoğun kullanan bot geliştiricileri.",
            badgeQuestTitle: "Quest Master",
            betaTitle: "🧪 Discord Beta & Sızıntı Duyuru Merkezi",
            betaSub: "📢 Lead Dev: NEXSUS • Gelecek Özellikler & Discord Sızıntı Hub'ı",
            betaNewsText: "Discord'a eklenecek en yeni beta özellikler, rozet sızıntıları ve panel yenilikleri ilk olarak buradan duyurulacaktır!",
            betaFeature1Title: "1️⃣ SIZINTI: Yeni Discord Profil Rozetleri",
            betaFeature1Desc: "Discord; Hesap Yaşı ⏳, Yayın 🎥, Oyun Çeşitliliği 🎮 ve Oyun Süresi ⏱️ rozetlerini kullanıma sunuyor.",
            betaFeature2Title: "💬 ÖNERİLER VE HATA BİLDİRİMİ",
            betaFeature2Desc: "Önerileriniz ve geri bildirimleriniz için panelimizi kullanabilirsiniz.",
            sysReady: "⚡ NEXSUS Core Engine v2.0 Hazır. Görevler bekleniyor...",
            timeRem: "Kalan:",
            timeDone: "Tamamlandı",
            logQuestsCount: "adet Discord görevi tespit edildi.",
            logHsRemoved: "🗑️ HypeSquad rozeti başarıyla kaldırıldı.",
            logHsUpdated: "✓ HypeSquad rozeti başarıyla güncellendi.",
            logHsWarn: "⚠️ HypeSquad rozet kaldırma işlemi Discord tarafından geçici olarak devre dışı bırakılmıştır.",
            logPrivUpdated: "✓ Profil gizlilik seviyesi güncellendi.",
            logDockMin: "📌 Panel sağ alt köşeye küçültüldü.",
            logDockOpen: "📖 Panel tam boyuta geri açıldı.",
            logEngineTrigger: "🚀 Görev motoru çalıştırıldı.",
            logEngineStop: "⏹️ Görev motoru kullanıcı tarafından durduruldu.",
            logEngineRefresh: "🔄 Görev motoru yenileniyor...",
            logAllQuestsDone: "🎉 TÜM GÖREVLER TAMAMLANDI! Tebrikler! 🏆",
            toastAllQuestsDoneTitle: "🎉 TÜM GÖREVLER TAMAMLANDI!",
            toastAllQuestsDoneMsg: "Tüm görevler %100 başarıyla bitirildi.",
            toastQuestDoneTitle: "🎉 Görev Tamamlandı!",
            toastHsErrorTitle: "HypeSquad Hatası",
            toastHsErrorMsg: "HypeSquad rozeti güncellenirken bir sorun oluştu.",
            toastHsRemoved: "HypeSquad rozeti başarıyla kaldırıldı.",
            toastPrivErrorTitle: "Gizlilik Hatası",
            toastPrivErrorMsg: "Profil gizliliği güncellenemedi.",
            toastEngineTriggerMsg: "Discord görevleri taranıyor ve başlatılıyor...",
            toastEngineStopTitle: "Motor Durduruldu",
            toastEngineStopMsg: "Görev işleme motoru durduruldu.",
            toastEngineRefreshTitle: "Senkronizasyon",
            toastEngineRefreshMsg: "Görev verileri ve panel yeniden senkronize ediliyor...",
            logAchUnlockedPrefix: "🏆 BAŞARIM KAZANILDI: ",
            taskWatchVideo: "Video İzle",
            taskWatchMobile: "Mobilde İzle",
            taskPlayDesktop: "Masaüstünde Oyna",
            taskStreamDesktop: "Yayın Yap",
            taskPlayActivity: "Aktivite Oyna",
            profileTitle: "📊 Discord Hesap Analizi",
            profileSub: "Mevcut Discord profil bilgilerin ve hesap istatistiklerin.",
            notesTitle: "📝 Hızlı Not Defteri & Sunucu Kasa",
            notesSub: "Sunucu davetleri, ID'ler ve özel notlarını güvenle sakla.",
            decorationsTitle: "🎨 Profil Çerçeveleri & Mağaza Rehberi",
            decorationsSub: "Discord Shop'taki en popüler dekorasyonlar ve fiyatları.",
            timerTitle: "⏰ Görev Zamanlayıcı & Özel Durum",
            timerSub: "Hatırlatıcı kur veya Discord'da sahte oyun aktivitesi göster.",
            soundboardTitle: "🎵 Focus Ambians & Ses Çaları",
            soundboardSub: "Görevler tamamlanırken odaklanmak için rahatlatıcı sesler aç.",
            snakeTitle: "🐍 Snake Retro Mini Oyunu",
            snakeSub: "Yön tuşlarıyla yılanı yönet, yemleri topla ve skor yap!"
        },
        en: {
            title: "NEXSUS CORE v2.0",
            tabQuests: "🎯 Quests",
            tabHypeSquad: "🛡️ HypeSquad",
            tabUpdates: "📢 Updates",
            tabPrivacy: "🔒 Privacy",
            tabAchievements: "🏆 Achievements",
            tabBadges: "🏷️ Badges",
            tabBeta: "🧪 Beta",
            tabNotes: "📝 Notes",
            tabGames: "🎮 Games",
            tabClicker: "⚡ Clicker",
            tabLogs: "📜 Console",
            tabSettings: "⚙️ Settings",
            tabProfile: "📊 Profile",
            tabDecorations: "🎨 Shop & Frames",
            tabTimer: "⏰ Timer & Status",
            tabSoundboard: "🎵 Ambient Sound",
            tabSnake: "🐍 Snake Game",
            tabGifting: "🎁 Gift Badges",
            startBtn: "⚡ START NEXSUS ENGINE",
            stopBtn: "⏸️ Stop",
            totalTimeCalc: "Calculating Cyber Progress...",
            summaryLabel: "⏱️ Overall Progress",
            savedTime: "⚡ Saved Time:",
            completedCount: "✅ Done:",
            activeQuests: "Active:",
            clearLogs: "Clear Logs",
            modeLabel: "Cyber Defense Mode:",
            modeValue: "Secure Cyber Stream",
            langLabel: "System Language:",
            soundLabel: "Cyber Audio FX:",
            notifyLabel: "System Notifications:",
            themeLabel: "NEXSUS Themes:",
            creatorText: "NEXSUS Core Engine v2.0 — Cyber Automation Architecture ⚡",
            ytChannel: "",
            dcServer: "",
            refreshBtn: "Sync Data",
            closeTitle: "Minimize HUD",
            terminalHeader: "Terminal Logs:",
            filterAll: "All",
            filterActive: "Active",
            filterDone: "Completed",
            emptyQuestsPlaceholder: '🚀 Click <strong>"⚡ Start Quests Automatically"</strong> button below to begin.',
            hsTitle: "Choose HypeSquad House or Manage Badge",
            hsSub: "⚡ Exclusive: Equip HypeSquad house badges with 1-click directly from this panel!",
            hsBraveryDesc: "Brave, fearless, and adventurous spirits.",
            hsBrillianceDesc: "Confident, determined, and sharp minds.",
            hsBalanceDesc: "Kind, harmonious, and balanced souls.",
            hsApplyBtn: "✨ Equip Selected House Badge",
            hsRemoveBtn: "🗑️ Remove / Clear Badge",
            hsRemoveDisabledMsg: "⚠️ Removing HypeSquad badge is temporarily restricted by Discord servers.",
            hsSuccessMsg: "✓ HypeSquad badge updated successfully!",
            hsRemoveToastTitle: "HypeSquad Warning",
            privTitle: "🔒 Select Profile Privacy Level",
            privSub: "Customize how your Discord profile appears to others.",
            priv1Name: "🔒 Private Profile",
            priv1Desc: "Only accepted friends can view your details.",
            priv2Name: "👥 Limited View",
            priv2Desc: "Friends and members of mutual small servers can view.",
            priv3Name: "🌐 Public Profile",
            priv3Desc: "Anyone can view your badges, activities and details.",
            privApplyBtn: "✨ Apply Privacy Setting",
            privSuccessMsg: "✓ Profile privacy updated successfully!",
            achTitle: "🏆 16-Tier Achievement Matrix",
            achSub: "Unlock special achievements as you use the panel!",
            achUnlocked: "ACHIEVEMENT UNLOCKED",
            achLocked: "LOCKED",
            achFirstStep: "🚀 First Step",
            achFirstStepDesc: "Run the quest engine successfully for the first time.",
            achQuestHunter: "🏆 Quest Hunter",
            achQuestHunterDesc: "Complete all active quests 100%.",
            achOrbsCollector: "🔮 Orbs Collector",
            achOrbsCollectorDesc: "Collect 2,000+ Orbs points using the extension.",
            achHypeMember: "🛡️ HypeSquad Spirit",
            achHypeMemberDesc: "Join a HypeSquad house and equip its badge.",
            achPrivacyMaster: "🔒 Privacy Guard",
            achPrivacyMasterDesc: "Successfully change your profile privacy level.",
            achClick100: "🖱️ Click Master",
            achClick100Desc: "Reach 100 clicks in Clicker game.",
            achClick500: "👑 NEXSUS Legend",
            achClick500Desc: "Reach 500 clicks in Clicker game.",
            achSnake50: "🐍 Snake Novice",
            achSnake50Desc: "Score 50 in Retro Snake game.",
            achSnake200: "🐍 Retro Snake King",
            achSnake200Desc: "Reach 200 high score in Retro Snake game.",
            achAmbientRelax: "🎵 Ambient Master",
            achAmbientRelaxDesc: "Try synthetic focus ambient sounds in Settings.",
            achThemeCustomizer: "🎨 Theme Architect",
            achThemeCustomizerDesc: "Change panel theme colors 3 times.",
            achNotesMaster: "📝 Notepad Master",
            achNotesMasterDesc: "Write and save your first note.",
            achBilingualUser: "🌐 Bilingual Pro",
            achBilingualUserDesc: "Switch panel language between TR and EN.",
            achSecretCahit: "🤫 Secret NEXSUS Mode!",
            achSecretCahitDesc: "Rapidly click the header 5 times.",
            achGiftingGuide: "🎁 Gifting Expert",
            achGiftingGuideDesc: "Explore the Gifting Badges store.",
            achBetaLeaker: "🧪 Beta Tracker",
            achBetaLeakerDesc: "Visit the Beta Announcement Hub.",
            clickerTitle: "⚡ NEXSUS Cyber Clicker",
            clickerSub: "Click & score points while quests complete in background!",
            clickerScoreLabel: "Total Clicks",
            clickerRankLabel: "Current Rank",
            clickerBtn: "⚡ CLICK & SCORE!",
            rankBeginner: "🌱 Novice Player",
            rankPro: "⚡ Master Clicker",
            rankLegend: "👑 NEXSUS Legend",
            viewQuest: "👁️ View Quest",
            questFoundTitle: "👁️ Quest Located!",
            questFoundMsg: "Highlighted with glow on Discord page.",
            questNotFoundTitle: "⚠️ Quest Not Visible",
            questNotFoundMsg: "Please navigate to Discord Settings -> Quests tab and try again.",
            infoBoxHeader: "💡 Quest Tips & Usage Guide",
            infoBoxVideo: "📌 Video Quests: Play the video for the first 1 second yourself to send API request, then the system auto-completes.",
            infoBoxMobile: "📱 Mobile Quests: Open/View the QR code once, then system auto-continues in background.",
            modalTitle: "⚡ NEXSUS CORE v2.0 — Usage Notice",
            modalIntro: "Welcome! To ensure quests complete smoothly without getting stuck, please note:",
            modalBtn: "Got it, Continue! 👍",
            giftTitle: "🎁 Gifting Badges",
            giftSub: "Level up your profile badge by sending gifts! Each badge requires a different gift count.",
            giftInfoCheap: "Cheapest way:",
            giftInfoNitro: "Gift Nitro Basic — only",
            giftInfoCosmetic: "Cosmetic gifts start at minimum",
            giftInfoFrom: ".",
            giftReq1: "1 Gift",
            giftReq2: "2 Gifts",
            giftReq3: "3 Gifts",
            giftReq6: "6 Gifts",
            giftReq10: "10 Gifts",
            giftReq20: "20 Gifts",
            giftTooltip1: "🎁 Send a total of <strong>1 gift</strong> to get this badge.",
            giftTooltip2: "🎁 Send a total of <strong>2 gifts</strong> to get this badge.",
            giftTooltip3: "🎁 Send a total of <strong>3 gifts</strong> to get this badge.",
            giftTooltip6: "🎁 Send a total of <strong>6 gifts</strong> to get this badge.",
            giftTooltip10: "🎁 Send a total of <strong>10 gifts</strong> to get this badge.",
            giftTooltip20: "🎁 Send a total of <strong>20 gifts</strong> to get this badge. Highest level! 👑",
            badgesTitle: "🏷️ All Discord Badges",
            badgesSub: "All Discord badges and how to obtain them.",
            badgeNitroSection: "💎 Discord Nitro & Boost Badges",
            badgeHsSection: "🛡️ HypeSquad House Badges",
            badgeOtherSection: "🌟 Special & Rare Community Badges",
            howNitro1: "Active Discord Nitro subscriber for 1 month.",
            howNitro2: "Continuous Nitro subscriber for 2 months.",
            howNitro3: "Continuous Nitro subscriber for 3 months.",
            howNitro6: "Continuous Nitro subscriber for 6 months.",
            howNitro12: "Continuous Nitro subscriber for 1 year.",
            howNitro24: "Continuous Nitro subscriber for 2 years.",
            howNitro36: "Continuous Nitro subscriber for 3 years.",
            howNitro48: "Continuous Nitro subscriber for 4 years.",
            howHsSelect: "Selectable instantly in HypeSquad tab.",
            howActiveDev: "Own an active bot registered in Discord Dev Portal.",
            howEarlySupporter: "Purchased Nitro before October 10, 2018.",
            howBug1: "Reported an accepted bug to Discord Bug Hunter program.",
            howBug2: "Reported critical vulnerabilities to Bug Hunter program.",
            howPartner: "Owner of an accepted Discord Partner server.",
            howStaff: "Official Discord Inc. employee.",
            howQuest: "Earned by completing Discord Quests with our panel.",
            howHsEvents: "Accepted HypeSquad Event Organizer.",
            howOrigUser: "Early adopters who transitioned to new usernames.",
            howAutoMod: "Configured AutoMod rules on server.",
            howOrbs: "Earned by gathering Orbs from Discord Quests.",
            howMeadow: "Participated in Discord Meadow spring event.",
            howCommands: "Bot developers with high slash command traffic.",
            badgeQuestTitle: "Quest Master",
            betaTitle: "🧪 Discord Beta & Leaks Hub",
            betaSub: "📢 Lead Dev: NEXSUS • Upcoming Features & Discord Leaks",
            betaNewsText: "The newest Discord beta features, badge leaks, and panel updates are announced first right here!",
            betaFeature1Title: "1️⃣ LEAK: New Discord Profile Badges",
            betaFeature1Desc: "Discord is rolling out Account Age ⏳, Streaming 🎥, Game Diversity 🎮, and Game Playtime ⏱️ badges. Click image below to expand tier requirements.",
            betaFeature2Title: "💬 SUGGESTIONS & FEEDBACK",
            betaFeature2Desc: "For any suggestions or feedback regarding the panel, use the feedback section.",
            sysReady: "⚡ NEXSUS Core Engine v2.0 Ready. Awaiting quests...",
            timeRem: "Remaining:",
            timeDone: "Completed",
            logQuestsCount: "Discord quests detected.",
            logHsRemoved: "🗑️ HypeSquad badge successfully removed.",
            logHsUpdated: "✓ HypeSquad badge successfully updated.",
            logHsWarn: "⚠️ HypeSquad removal is temporarily disabled by Discord.",
            logPrivUpdated: "✓ Profile privacy level updated.",
            logDockMin: "📌 Dock minimized to bottom-right corner.",
            logDockOpen: "📖 Dock restored to full view.",
            logEngineTrigger: "🚀 Quest engine triggered.",
            logEngineStop: "⏹️ Quest engine stopped by user.",
            logEngineRefresh: "🔄 Refreshing quest engine...",
            logAllQuestsDone: "🎉 ALL QUESTS COMPLETED! Congratulations! 🏆",
            toastAllQuestsDoneTitle: "🎉 ALL QUESTS COMPLETED!",
            toastAllQuestsDoneMsg: "All quests completed 100% successfully.",
            toastQuestDoneTitle: "🎉 Quest Completed!",
            toastHsErrorTitle: "HypeSquad Error",
            toastHsErrorMsg: "An error occurred while updating HypeSquad badge.",
            toastHsRemoved: "HypeSquad badge successfully removed.",
            toastPrivErrorTitle: "Privacy Error",
            toastPrivErrorMsg: "Failed to update profile privacy.",
            toastEngineTriggerMsg: "Scanning and launching Discord quests...",
            toastEngineStopTitle: "Engine Stopped",
            toastEngineStopMsg: "Quest processing engine has been stopped.",
            toastEngineRefreshTitle: "Synchronization",
            toastEngineRefreshMsg: "Resynchronizing quest data and panel UI...",
            logAchUnlockedPrefix: "🏆 ACHIEVEMENT UNLOCKED: ",
            taskWatchVideo: "Watch Video",
            taskWatchMobile: "Watch on Mobile",
            taskPlayDesktop: "Play on Desktop",
            taskStreamDesktop: "Stream on Desktop",
            taskPlayActivity: "Play Activity",
            profileTitle: "📊 Discord Account Analytics",
            profileSub: "Your active Discord profile details & account metrics.",
            notesTitle: "📝 Quick Notepad & Server Vault",
            notesSub: "Save server links, IDs and custom notes securely.",
            decorationsTitle: "🎨 Avatar Decorations & Shop Catalog",
            decorationsSub: "Most popular Discord Shop decorations and pricing.",
            timerTitle: "⏰ Quest Reminder Timer & Custom Status",
            timerSub: "Set reminder timers or showcase custom playing presence.",
            soundboardTitle: "🎵 Focus Ambient Sound Generator",
            soundboardSub: "Relaxing synthetic ambient sounds while quests complete.",
            snakeTitle: "🐍 Snake Retro Mini Game",
            snakeSub: "Control the snake with arrow keys, collect food & score high!"
        }
    };

    let currentLang = savedLang;
    function t(k) { return (I18N[currentLang] || I18N.tr)[k] || k; }

    let userSettings = { theme: "violet", lang: currentLang };
    let questStateCache = new Map();
    let currentFilter = "all";
    let originalDocTitle = document.title || "Discord";
    let hasCelebrated = false;
    let selectedHouseId = 1;
    let selectedPrivacyVal = 1;
    let lastToastMap = new Map();

    // Enforce Safe Mode for optimal performance without rate limiting
    localStorage.setItem('dqu_concurrency', '1');

    // Locate quest on Discord DOM and highlight it with glowing borders
    function locateQuestInDOM(questName) {
        if (!questName) return false;
        const cleanName = questName.toLowerCase().trim();

        const candidates = Array.from(document.querySelectorAll('div, section, article, li')).filter(el => {
            if (el.closest('#discord-quest-ui-root') || el.closest('#dqu-toast-container') || el.closest('#dqu-welcome-modal')) return false;
            const txt = (el.innerText || "").toLowerCase();
            return txt.includes(cleanName) && el.children.length < 20 && el.offsetHeight > 40;
        });

        if (candidates.length > 0) {
            let targetEl = candidates[0].closest('[class*="quest"]') || candidates[0].closest('[class*="card"]') || candidates[0];
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

            const origBoxShadow = targetEl.style.boxShadow;
            const origBorder = targetEl.style.border;
            const origTransition = targetEl.style.transition;
            const origTransform = targetEl.style.transform;

            targetEl.style.transition = "all 0.4s ease-in-out";
            targetEl.style.boxShadow = "0 0 35px #7c3aed, 0 0 70px #a855f7, inset 0 0 15px rgba(168,85,247,0.5)";
            targetEl.style.border = "2px solid #a855f7";
            targetEl.style.transform = "scale(1.02)";

            showToast(t("questFoundTitle"), `${questName} ${t("questFoundMsg")}`, "success", true);

            setTimeout(() => {
                targetEl.style.boxShadow = origBoxShadow;
                targetEl.style.border = origBorder;
                targetEl.style.transition = origTransition;
                targetEl.style.transform = origTransform;
            }, 4500);

            return true;
        } else {
            showToast(t("questNotFoundTitle"), t("questNotFoundMsg"), "warn", true);
            return false;
        }
    }

    // Format duration
    function formatDuration(totalSeconds) {
        if (totalSeconds <= 0) return "0sn";
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = Math.floor(totalSeconds % 60);
        if (h > 0) return `${h}sa ${m}dk ${s}sn`;
        if (m > 0) return `${m}dk ${s}sn`;
        return `${s}sn`;
    }

    // Top Floating Toast Notification Widget with Smart Anti-Spam & Duplicate Memory
    function showToast(title, message, type = "info", force = false) {
        try {
            let container = document.getElementById("dqu-toast-container");
            if (!container) {
                container = document.createElement("div");
                container.id = "dqu-toast-container";
                document.body.appendChild(container);
            }

            // Prevent duplicate toasts with identical title & message from stacking!
            const existingToasts = container.querySelectorAll(".dqu-toast");
            for (let tEl of existingToasts) {
                const tTitle = tEl.querySelector(".dqu-toast-title")?.innerText;
                const tMsg = tEl.querySelector(".dqu-toast-msg")?.innerText;
                if (tTitle === title && tMsg === message) {
                    return; // Prevent duplicate toast!
                }
            }

            const now = Date.now();
            const key = `${title}:${message}`;
            if (lastToastMap.has(key) && (now - lastToastMap.get(key)) < 5000) {
                return;
            }
            lastToastMap.set(key, now);

            // Limit simultaneous toasts on screen to 2 maximum
            while (container.children.length >= 2) {
                container.removeChild(container.firstChild);
            }

            const toast = document.createElement("div");
            toast.className = `dqu-toast dqu-toast-${type}`;

            const iconMap = { success: "✓", warn: "⚠️", error: "❌", info: "ℹ️" };

            toast.innerHTML = `
                <div class="dqu-toast-icon">${iconMap[type] || "ℹ️"}</div>
                <div class="dqu-toast-content">
                    <div class="dqu-toast-title">${title}</div>
                    <div class="dqu-toast-msg">${message}</div>
                </div>
                <button class="dqu-toast-close">✕</button>
            `;

            toast.querySelector(".dqu-toast-close").onclick = () => {
                toast.classList.add("dqu-toast-hiding");
                setTimeout(() => toast.remove(), 300);
            };

            container.appendChild(toast);

            setTimeout(() => {
                if (toast.parentNode) {
                    toast.classList.add("dqu-toast-hiding");
                    setTimeout(() => toast.remove(), 300);
                }
            }, 4200);
        } catch(e) {}
    }

    // Achievements System
    const ACHIEVEMENTS_DEF = [
        { id: 'first_step', titleKey: 'achFirstStep', descKey: 'achFirstStepDesc', icon: '🚀' },
        { id: 'speed_demon', titleKey: 'achSpeedDemon', descKey: 'achSpeedDemonDesc', icon: '⚡' },
        { id: 'hype_member', titleKey: 'achHypeMember', descKey: 'achHypeMemberDesc', icon: '🛡️' },
        { id: 'quest_hunter', titleKey: 'achQuestHunter', descKey: 'achQuestHunterDesc', icon: '🏆' },
        { id: 'click_100', titleKey: 'achClick100', descKey: 'achClick100Desc', icon: '🖱️' },
        { id: 'click_500', titleKey: 'achClick500', descKey: 'achClick500Desc', icon: '👑' },
        { id: 'secret_cahit', titleKey: 'achSecretCahit', descKey: 'achSecretCahitDesc', icon: '🤫', secret: true }
    ];

    function unlockAchievement(id) {
        try {
            let unlocked = JSON.parse(localStorage.getItem('dqu_achievements') || '{}');
            if (unlocked[id]) return;

            const achDef = ACHIEVEMENTS_DEF.find(a => a.id === id);
            if (!achDef) return;

            unlocked[id] = Date.now();
            localStorage.setItem('dqu_achievements', JSON.stringify(unlocked));

            playSuccessSound();
            triggerConfetti();
            showToast(`🏆 ${t("achUnlocked")}: ${t(achDef.titleKey)}`, t(achDef.descKey), "success", true);
            log(`${t("logAchUnlockedPrefix")}${t(achDef.titleKey)}`, "success");
            renderAchievements();
        } catch(e) {}
    }

    function renderAchievements() {
        const container = document.getElementById("dqu-achievements-container");
        if (!container) return;

        let unlocked = {};
        try { unlocked = JSON.parse(localStorage.getItem('dqu_achievements') || '{}'); } catch(e) {}

        container.innerHTML = ACHIEVEMENTS_DEF.map(ach => {
            const isUnlocked = !!unlocked[ach.id];
            return `
                <div class="dqu-ach-card ${isUnlocked ? 'unlocked' : 'locked'}">
                    <div class="dqu-ach-icon">${ach.icon}</div>
                    <div class="dqu-ach-details">
                        <div class="dqu-ach-header">
                            <span class="dqu-ach-name">${t(ach.titleKey)}</span>
                            <span class="dqu-ach-status-badge ${isUnlocked ? 'unlocked' : 'locked'}">
                                ${isUnlocked ? `✓ ${t("achUnlocked")}` : `🔒 ${t("achLocked")}`}
                            </span>
                        </div>
                        <div class="dqu-ach-desc">${t(ach.descKey)}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Audio synthesizer chime (Web Audio API)
    function playSuccessSound() {
        try {
            const soundEnabled = localStorage.getItem('dqu_sound') !== 'false';
            if (!soundEnabled) return;
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
                gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.1);
                gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + idx * 0.1 + 0.03);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.1 + 0.35);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime + idx * 0.1);
                osc.stop(ctx.currentTime + idx * 0.1 + 0.4);
            });
        } catch(e) {}
    }

    // Browser Notification
    function sendBrowserNotification(title, body) {
        try {
            const notifyEnabled = localStorage.getItem('dqu_notify') !== 'false';
            if (!notifyEnabled) return;
            if ("Notification" in window) {
                if (Notification.permission === "granted") {
                    new Notification(title, { body, icon: "https://discord.com/assets/f8389ca83d47639f28d8.ico" });
                } else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(permission => {
                        if (permission === "granted") {
                            new Notification(title, { body });
                        }
                    });
                }
            }
        } catch(e) {}
    }

    // Canvas Confetti Celebration Effect
    function triggerConfetti() {
        try {
            const canvas = document.createElement('canvas');
            canvas.style.position = 'fixed';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
            canvas.style.pointerEvents = 'none';
            canvas.style.zIndex = '9999999';
            document.body.appendChild(canvas);
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const particles = [];
            const colors = ['#7c3aed', '#6366f1', '#a855f7', '#ec4899', '#22c55e', '#fbbf24'];
            for (let i = 0; i < 90; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height * 0.4,
                    r: Math.random() * 6 + 3,
                    d: Math.random() * 80 + 10,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    tilt: Math.random() * 10 - 10,
                    tiltAngleIncremental: Math.random() * 0.07 + 0.03,
                    tiltAngle: 0
                });
            }

            let animationFrameId;
            let startTime = Date.now();

            function render() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach(p => {
                    p.tiltAngle += p.tiltAngleIncremental;
                    p.y += (Math.cos(p.d) + 2 + p.r / 2) * 1.5;
                    p.x += Math.sin(p.tiltAngle) * 2;
                    p.tilt = Math.sin(p.tiltAngle) * 15;

                    ctx.beginPath();
                    ctx.lineWidth = p.r;
                    ctx.strokeStyle = p.color;
                    ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
                    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
                    ctx.stroke();
                });

                if (Date.now() - startTime < 4500) {
                    animationFrameId = requestAnimationFrame(render);
                } else {
                    cancelAnimationFrame(animationFrameId);
                    if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
                }
            }
            render();
        } catch(e) {}
    }

    // Dynamic Tab Title
    function updateTabTitle(percent, isCompleted) {
        try {
            if (isCompleted) {
                document.title = `[✓ %100 Bitti] ${originalDocTitle}`;
            } else if (percent > 0) {
                document.title = `[%${percent}] ${originalDocTitle} - DCV - NEXSUS Panel`;
            } else {
                document.title = originalDocTitle;
            }
        } catch(e) {}
    }

    function injectUI() {
        if (document.getElementById("discord-quest-ui-root")) return;
        if (!document.body || !document.head) {
            setTimeout(injectUI, 250);
            return;
        }

        const style = document.createElement('style');
        style.id = "discord-quest-ui-styles";
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;700&family=Inter:wght@400;600;700;800;900&family=Montserrat:wght@600;800&family=Orbitron:wght@600;900&family=Pacifico&family=Poppins:wght@500;700;800&family=Press+Start+2P&family=Roboto+Mono:wght@500;700&display=swap');

            #discord-quest-ui-root, #discord-quest-ui-root *, .dqu-modal-overlay * {
                box-sizing: border-box !important;
                font-family: 'Inter', 'gg sans', 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            }

            #discord-quest-ui-root {
                --dqu-accent: #c084fc;
                --dqu-accent-glow: rgba(192, 132, 252, 0.45);
                --dqu-bg: #0f0728;
                --dqu-card-bg: rgba(24, 14, 48, 0.85);
                --dqu-border: rgba(168, 85, 247, 0.35);
                --dqu-btn-grad: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%);
                --dqu-green: #10b981;
                --dqu-red: #f43f5e;
                --dqu-gold: #f59e0b;
                position: fixed; bottom: 16px; right: 16px; width: 600px; max-height: 92vh;
                background: var(--dqu-bg);
                border: 1px solid var(--dqu-border);
                border-radius: 16px;
                box-shadow: 0 24px 90px rgba(0, 0, 0, 0.95), 0 0 70px rgba(168, 85, 247, 0.45);
                color: #f1f5f9; z-index: 999999;
                display: flex; flex-direction: column; overflow: hidden;
                resize: both; min-width: 440px; min-height: 420px;
                backdrop-filter: blur(20px);
                transition: width 0.25s ease, max-height 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
                animation: dqu-pop-in 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            }

            /* ─── NEXSUS OS HUD WRAPPER & VERTICAL SIDEBAR ─── */
            .dqu-hud-wrapper {
                display: flex; flex: 1; overflow: hidden; position: relative;
            }
            .dqu-nav-tabs {
                display: flex; flex-direction: column; width: 154px; min-width: 154px;
                background: rgba(0, 0, 0, 0.45); border-right: 1px solid rgba(168, 85, 247, 0.25);
                padding: 10px 6px; gap: 4px; overflow-y: auto; scrollbar-width: none;
                perspective: 600px;
            }
            .dqu-nav-tabs::-webkit-scrollbar { display: none; }

            .dqu-viewport {
                flex: 1; display: flex; flex-direction: column; gap: 6px;
                overflow-y: auto; padding: 10px 12px;
                scrollbar-width: thin; scrollbar-color: rgba(168, 85, 247, 0.3) transparent;
            }
            .dqu-viewport::-webkit-scrollbar { width: 4px; }
            .dqu-viewport::-webkit-scrollbar-thumb { background: rgba(168, 85, 247, 0.4); border-radius: 4px; }

            /* ─── NEXSUS 4 CORE PREMIUM THEMES ─── */
            /* 1. Mor Tema (Purple Theme) — VARSAYILAN / DEFAULT */
            #discord-quest-ui-root, #discord-quest-ui-root.theme-purple {
                --dqu-accent: #c084fc;
                --dqu-accent-glow: rgba(192, 132, 252, 0.45);
                --dqu-bg: #0f0728;
                background: radial-gradient(circle at 85% 15%, rgba(168, 85, 247, 0.4) 0%, transparent 45%),
                            radial-gradient(circle at 15% 85%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
                            linear-gradient(135deg, #0f0728 0%, #1c0b3b 50%, #070318 100%) !important;
                border: 1px solid rgba(168, 85, 247, 0.5) !important;
                box-shadow: 0 24px 90px rgba(0, 0, 0, 0.95), 0 0 70px rgba(168, 85, 247, 0.45) !important;
            }
            #discord-quest-ui-root.theme-purple .dqu-quest-card,
            #discord-quest-ui-root.theme-purple .dqu-hs-card,
            #discord-quest-ui-root.theme-purple .dqu-ach-card,
            #discord-quest-ui-root.theme-purple .dqu-settings-box {
                background: rgba(24, 14, 48, 0.85) !important;
                backdrop-filter: blur(16px) !important;
                border: 1px solid rgba(168, 85, 247, 0.35) !important;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
                clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
            }
            #discord-quest-ui-root.theme-purple .dqu-hs-card.selected {
                background: rgba(168, 85, 247, 0.28) !important;
                border-color: #c084fc !important;
                box-shadow: 0 0 25px rgba(192, 132, 252, 0.6) !important;
            }
            #discord-quest-ui-root.theme-purple .dqu-btn-primary {
                background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%) !important;
                box-shadow: 0 4px 25px rgba(168, 85, 247, 0.5) !important;
            }

            /* 2. Kırmızı Tema (Red Theme) */
            #discord-quest-ui-root.theme-red {
                --dqu-accent: #f43f5e;
                --dqu-accent-glow: rgba(244, 63, 94, 0.45);
                --dqu-bg: #1f050a;
                background: radial-gradient(circle at 85% 15%, rgba(239, 68, 68, 0.4) 0%, transparent 45%),
                            radial-gradient(circle at 15% 85%, rgba(244, 63, 94, 0.3) 0%, transparent 50%),
                            linear-gradient(135deg, #1f050a 0%, #360712 50%, #0c0104 100%) !important;
                border: 1px solid rgba(239, 68, 68, 0.5) !important;
                box-shadow: 0 24px 90px rgba(0, 0, 0, 0.95), 0 0 70px rgba(239, 68, 68, 0.45) !important;
            }
            #discord-quest-ui-root.theme-red .dqu-quest-card,
            #discord-quest-ui-root.theme-red .dqu-hs-card,
            #discord-quest-ui-root.theme-red .dqu-ach-card,
            #discord-quest-ui-root.theme-red .dqu-settings-box {
                background: rgba(45, 10, 18, 0.85) !important;
                backdrop-filter: blur(16px) !important;
                border: 1px solid rgba(239, 68, 68, 0.35) !important;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
                clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
            }
            #discord-quest-ui-root.theme-red .dqu-btn-primary {
                background: linear-gradient(135deg, #dc2626 0%, #ef4444 50%, #f43f5e 100%) !important;
                box-shadow: 0 4px 25px rgba(239, 68, 68, 0.5) !important;
            }

            /* 3. Yeşil Tema (Green Theme) */
            #discord-quest-ui-root.theme-green {
                --dqu-accent: #34d399;
                --dqu-accent-glow: rgba(52, 211, 153, 0.45);
                --dqu-bg: #022016;
                background: radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.4) 0%, transparent 45%),
                            radial-gradient(circle at 15% 85%, rgba(52, 211, 153, 0.3) 0%, transparent 50%),
                            linear-gradient(135deg, #022016 0%, #043827 50%, #010f0a 100%) !important;
                border: 1px solid rgba(16, 185, 129, 0.5) !important;
                box-shadow: 0 24px 90px rgba(0, 0, 0, 0.95), 0 0 70px rgba(16, 185, 129, 0.45) !important;
            }
            #discord-quest-ui-root.theme-green .dqu-quest-card,
            #discord-quest-ui-root.theme-green .dqu-hs-card,
            #discord-quest-ui-root.theme-green .dqu-ach-card,
            #discord-quest-ui-root.theme-green .dqu-settings-box {
                background: rgba(6, 42, 28, 0.85) !important;
                backdrop-filter: blur(16px) !important;
                border: 1px solid rgba(16, 185, 129, 0.35) !important;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
                clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
            }
            #discord-quest-ui-root.theme-green .dqu-btn-primary {
                background: linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%) !important;
                box-shadow: 0 4px 25px rgba(16, 185, 129, 0.5) !important;
            }

            /* 4. Sarı Tema (Yellow Theme) */
            #discord-quest-ui-root.theme-yellow {
                --dqu-accent: #fbbf24;
                --dqu-accent-glow: rgba(251, 191, 36, 0.45);
                --dqu-bg: #241604;
                background: radial-gradient(circle at 85% 15%, rgba(245, 158, 11, 0.4) 0%, transparent 45%),
                            radial-gradient(circle at 15% 85%, rgba(251, 191, 36, 0.3) 0%, transparent 50%),
                            linear-gradient(135deg, #241604 0%, #3a2206 50%, #100901 100%) !important;
                border: 1px solid rgba(245, 158, 11, 0.5) !important;
                box-shadow: 0 24px 90px rgba(0, 0, 0, 0.95), 0 0 70px rgba(245, 158, 11, 0.45) !important;
            }
            #discord-quest-ui-root.theme-yellow .dqu-quest-card,
            #discord-quest-ui-root.theme-yellow .dqu-hs-card,
            #discord-quest-ui-root.theme-yellow .dqu-ach-card,
            #discord-quest-ui-root.theme-yellow .dqu-settings-box {
                background: rgba(45, 27, 6, 0.85) !important;
                backdrop-filter: blur(16px) !important;
                border: 1px solid rgba(245, 158, 11, 0.35) !important;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
                clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
            }
            #discord-quest-ui-root.theme-yellow .dqu-btn-primary {
                background: linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%) !important;
                box-shadow: 0 4px 25px rgba(245, 158, 11, 0.5) !important;
            }

            /* 5. Discord Mat Siyah (Dark Theme) — EFEKTSİZ & SADE */
            #discord-quest-ui-root.theme-dark {
                --dqu-accent: #5865f2;
                --dqu-accent-glow: transparent;
                --dqu-bg: #1e1f22;
                background: #1e1f22 !important;
                border: 1px solid #383a40 !important;
                box-shadow: 0 12px 40px rgba(0, 0, 0, 0.75) !important;
            }
            #discord-quest-ui-root.theme-dark .dqu-quest-card,
            #discord-quest-ui-root.theme-dark .dqu-hs-card,
            #discord-quest-ui-root.theme-dark .dqu-ach-card,
            #discord-quest-ui-root.theme-dark .dqu-settings-box {
                background: #2b2d31 !important;
                backdrop-filter: none !important;
                border: 1px solid #383a40 !important;
                box-shadow: none !important;
            }
            #discord-quest-ui-root.theme-dark .dqu-hs-card.selected {
                background: #35373c !important;
                border-color: #5865f2 !important;
                box-shadow: none !important;
            }
            #discord-quest-ui-root.theme-dark .dqu-btn-primary {
                background: #5865f2 !important;
                box-shadow: none !important;
                border: none !important;
            }

            /* 6. Arktik Neon Mavi (Cyan Theme) */
            #discord-quest-ui-root.theme-cyan {
                --dqu-accent: #06b6d4;
                --dqu-accent-glow: rgba(6, 182, 212, 0.45);
                --dqu-bg: #031525;
                background: radial-gradient(circle at 85% 15%, rgba(6, 182, 212, 0.4) 0%, transparent 45%),
                            radial-gradient(circle at 15% 85%, rgba(14, 165, 233, 0.3) 0%, transparent 50%),
                            linear-gradient(135deg, #031525 0%, #082942 50%, #010a12 100%) !important;
                border: 1px solid rgba(6, 182, 212, 0.5) !important;
                box-shadow: 0 24px 90px rgba(0, 0, 0, 0.95), 0 0 70px rgba(6, 182, 212, 0.45) !important;
            }
            #discord-quest-ui-root.theme-cyan .dqu-quest-card,
            #discord-quest-ui-root.theme-cyan .dqu-hs-card,
            #discord-quest-ui-root.theme-cyan .dqu-ach-card,
            #discord-quest-ui-root.theme-cyan .dqu-settings-box {
                background: rgba(6, 32, 56, 0.85) !important;
                backdrop-filter: blur(16px) !important;
                border: 1px solid rgba(6, 182, 212, 0.35) !important;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
                clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
            }
            #discord-quest-ui-root.theme-cyan .dqu-btn-primary {
                background: linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #38bdf8 100%) !important;
                box-shadow: 0 4px 25px rgba(6, 182, 212, 0.5) !important;
            }

            /* 7. Siber Şafak (Synthwave Theme) */
            #discord-quest-ui-root.theme-synthwave {
                --dqu-accent: #f43f5e;
                --dqu-accent-glow: rgba(244, 63, 94, 0.45);
                --dqu-bg: #180828;
                background: radial-gradient(circle at 85% 15%, rgba(236, 72, 153, 0.4) 0%, transparent 45%),
                            radial-gradient(circle at 15% 85%, rgba(251, 146, 60, 0.3) 0%, transparent 50%),
                            linear-gradient(135deg, #180828 0%, #2f0d4a 50%, #0e021a 100%) !important;
                border: 1px solid rgba(244, 63, 94, 0.5) !important;
                box-shadow: 0 24px 90px rgba(0, 0, 0, 0.95), 0 0 70px rgba(244, 63, 94, 0.45) !important;
            }
            #discord-quest-ui-root.theme-synthwave .dqu-quest-card,
            #discord-quest-ui-root.theme-synthwave .dqu-hs-card,
            #discord-quest-ui-root.theme-synthwave .dqu-ach-card,
            #discord-quest-ui-root.theme-synthwave .dqu-settings-box {
                background: rgba(38, 12, 58, 0.85) !important;
                backdrop-filter: blur(16px) !important;
                border: 1px solid rgba(244, 63, 94, 0.35) !important;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
                clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
            }
            #discord-quest-ui-root.theme-synthwave .dqu-btn-primary {
                background: linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #fb923c 100%) !important;
                box-shadow: 0 4px 25px rgba(244, 63, 94, 0.5) !important;
            }

            /* ─── DİKEY SEKMELER (CYBER SIDEBAR TABS) ─── */
            .dqu-tab-btn {
                padding: 8px 10px; border-radius: 8px; font-weight: 800; font-size: 11px;
                background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
                color: #94a3b8; cursor: pointer; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                white-space: nowrap; transform-style: preserve-3d;
                user-select: none; display: flex; align-items: center; gap: 8px; width: 100%;
                text-align: left; position: relative;
                clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);
            }
            .dqu-tab-btn:hover {
                color: #fff; background: rgba(255,255,255,0.12); border-color: rgba(192, 132, 252, 0.5);
                transform: translateX(3px);
            }
            .dqu-tab-btn.active {
                background: linear-gradient(135deg, rgba(168, 85, 247, 0.35) 0%, rgba(124, 58, 237, 0.55) 100%) !important;
                color: #ffffff !important; border: 1px solid #c084fc !important;
                box-shadow: 0 4px 18px rgba(192, 132, 252, 0.5) !important;
                transform: translateX(4px);
            }
            .dqu-tab-btn.active::before {
                content: ''; position: absolute; left: 0; top: 4px; bottom: 4px; width: 3px;
                background: #c084fc; border-radius: 4px; box-shadow: 0 0 10px #c084fc;
            }

            /* ─── ARC REACTOR FLOATING HUD TRIGGER ─── */
            #dqu-floating-trigger {
                position: fixed; bottom: 22px; right: 22px; z-index: 9999998;
                background: radial-gradient(circle at 30% 30%, #38bdf8, #0284c7 60%, #030712 100%);
                color: #fff; padding: 10px 18px; border-radius: 99px;
                font-weight: 900; font-size: 13px; cursor: pointer;
                box-shadow: 0 0 30px rgba(0, 242, 254, 0.75), inset 0 0 12px rgba(255, 255, 255, 0.6);
                display: flex; align-items: center; gap: 8px; border: 2px solid #00f2fe;
                animation: dqu-reactor-pulse 2.5s infinite ease-in-out;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            #dqu-floating-trigger:hover { transform: scale(1.1) translateY(-3px); box-shadow: 0 0 45px rgba(0, 242, 254, 0.95); }
            @keyframes dqu-reactor-pulse {
                0%, 100% { box-shadow: 0 0 25px rgba(0, 242, 254, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.4); }
                50% { box-shadow: 0 0 45px rgba(0, 242, 254, 0.9), inset 0 0 18px rgba(255, 255, 255, 0.8); }
            }
            /* ─── IMAGE LIGHTBOX ZOOM MODAL ─── */
            .dqu-preview-img-container {
                position: relative; margin-top: 6px; width: 100%; height: 98px;
                border-radius: 8px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.15);
                background: #0f091a; cursor: pointer; transition: all 0.2s ease;
            }
            .dqu-preview-img-container:hover {
                border-color: rgba(168, 85, 247, 0.6);
                transform: scale(1.02);
            }
            .dqu-img-zoom-trigger {
                position: absolute; top: 4px; right: 4px; z-index: 5;
                padding: 3px 7px; border-radius: 6px; background: rgba(0, 0, 0, 0.85);
                backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.25);
                font-size: 8.5px; font-weight: 800; color: #fff; cursor: pointer; transition: all 0.15s;
            }
            .dqu-img-zoom-trigger:hover {
                background: rgba(124, 58, 237, 0.85); border-color: rgba(168, 85, 247, 0.8);
                transform: scale(1.06);
            }
            .dqu-img-modal-box {
                background: #0d0b1a; border: 1px solid rgba(168, 85, 247, 0.5);
                border-radius: 16px; padding: 16px; max-width: 92vw; max-height: 92vh;
                box-shadow: 0 24px 80px rgba(0, 0, 0, 0.95), 0 0 60px rgba(168, 85, 247, 0.4);
                display: flex; flex-direction: column; gap: 10px; color: #fff;
                animation: dqu-pop-in 0.25s ease;
            }
            .dqu-img-modal-header { display: flex; justify-content: space-between; align-items: center; }
            .dqu-img-modal-body { overflow: auto; max-height: 82vh; display: flex; align-items: center; justify-content: center; background: #000; border-radius: 12px; padding: 8px; }
            .dqu-img-modal-body img { max-width: 100%; height: auto; border-radius: 8px; }

            #discord-quest-ui-root.dqu-minimized {
                display: none !important;
                opacity: 0 !important;
                pointer-events: none !important;
            }

            @keyframes dqu-pop-in {
                from { opacity: 0; transform: scale(0.9) translateY(20px); filter: blur(6px); }
                to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
            }

            /* ─── RESPONSIVE MOBILE & DESKTOP COMPATIBILITY ─── */
            @media (max-width: 600px) {
                #discord-quest-ui-root {
                    width: 95vw !important;
                    right: 2.5vw !important;
                    left: 2.5vw !important;
                    bottom: 10px !important;
                    min-width: 280px !important;
                    max-height: 92vh !important;
                }
                .dqu-title { font-size: 11.5px !important; }
                .dqu-nav-tabs { gap: 3px !important; padding: 4px !important; }
                .dqu-tab-btn { padding: 6px 8px !important; font-size: 10.5px !important; white-space: nowrap !important; }
                .dqu-hs-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 4px !important; }
                .dqu-hs-card { padding: 8px 3px !important; }
                .dqu-toast { min-width: 260px !important; max-width: 94vw !important; }
            }

            /* ─── FIRST-TIME WELCOME MODAL OVERLAY ─── */
            .dqu-modal-overlay {
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(8px);
                z-index: 99999999; display: flex; align-items: center; justify-content: center;
                padding: 20px; animation: dqu-pop-in 0.3s ease;
            }
            .dqu-modal-box {
                background: #0d0b1a; border: 1px solid rgba(124, 58, 237, 0.4);
                border-radius: 16px; padding: 20px; max-width: 440px; width: 100%;
                box-shadow: 0 20px 60px rgba(0,0,0,0.9), 0 0 40px rgba(124,58,237,0.3);
                color: #e2e8f0; display: flex; flex-direction: column; gap: 14px;
            }
            .dqu-modal-header { font-size: 15px; font-weight: 900; color: #fff; display: flex; align-items: center; gap: 8px; }
            .dqu-modal-body { font-size: 11.5px; color: #cbd5e1; line-height: 1.5; }
            .dqu-modal-info-list { background: rgba(0,0,0,0.35); padding: 10px 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; gap: 8px; margin-top: 8px; font-size: 11px; }

            /* ─── QUEST INFO BOX ─── */
            .dqu-info-box {
                background: linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(99, 102, 241, 0.08) 100%);
                border: 1px solid rgba(124, 58, 237, 0.25);
                border-radius: 10px; padding: 8px 12px; margin-bottom: 4px;
            }

            /* ─── HIDE UGLY HORIZONTAL SCROLLBAR ON TABS ─── */
            .dqu-nav-tabs {
                display: flex; background: rgba(0,0,0,0.3); padding: 6px 8px; gap: 4px; border-bottom: 1px solid rgba(255,255,255,0.05);
                overflow-x: auto !important; scrollbar-width: none !important; -ms-overflow-style: none !important;
            }
            .dqu-nav-tabs::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; }

            /* ─── SHIMMER LIGHT STREAK ON PROGRESS BARS ─── */
            .dqu-progress-fill, .dqu-summary-progress-fill {
                position: relative; overflow: hidden;
            }
            .dqu-progress-fill::after, .dqu-summary-progress-fill::after {
                content: '';
                position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
                background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.45) 50%, transparent 100%);
                animation: dqu-shimmer 2.5s infinite;
            }
            @keyframes dqu-shimmer {
                0% { left: -100%; }
                100% { left: 200%; }
            }

            /* ─── RAINBOW PULSE GLOW FOR COMPLETED CARDS ─── */
            .dqu-quest-card.completed, .dqu-ach-card.unlocked {
                animation: dqu-border-pulse 3s infinite alternate ease-in-out !important;
            }
            @keyframes dqu-border-pulse {
                0% { border-color: rgba(34, 197, 94, 0.6); box-shadow: 0 0 15px rgba(34, 197, 94, 0.25); }
                50% { border-color: rgba(168, 85, 247, 0.7); box-shadow: 0 0 20px rgba(168, 85, 247, 0.35); }
                100% { border-color: rgba(99, 102, 241, 0.6); box-shadow: 0 0 15px rgba(99, 102, 241, 0.25); }
            }

            /* ─── ANIMATED HEADER GRADIENT ─── */
            .dqu-header {
                background: linear-gradient(135deg, rgba(2, 132, 199, 0.35) 0%, rgba(56, 189, 248, 0.25) 50%, rgba(16, 185, 129, 0.3) 100%) !important;
                background-size: 200% 200% !important;
                animation: dqu-header-grad 8s ease infinite !important;
                padding: 12px 16px; display: flex; align-items: center; justify-content: space-between;
                border-bottom: 1px solid rgba(56, 189, 248, 0.2); cursor: grab;
            }
            @keyframes dqu-header-grad {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }

            /* ─── FLOATING DOCK TRIGGER BUTTON ─── */
            #dqu-floating-trigger {
                position: fixed; bottom: 20px; right: 20px; z-index: 9999998;
                background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #10b981 100%);
                color: #fff; padding: 10px 18px; border-radius: 99px;
                font-weight: 800; font-size: 13px; cursor: pointer;
                box-shadow: 0 8px 30px rgba(6, 182, 212, 0.6);
                display: flex; align-items: center; gap: 8px; border: 1px solid rgba(255,255,255,0.3);
                animation: dqu-float-bob 3s ease-in-out infinite;
                transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            }
            #dqu-floating-trigger:hover { transform: scale(1.08) translateY(-3px); box-shadow: 0 12px 35px rgba(6, 182, 212, 0.85); }
            @keyframes dqu-float-bob {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-5px); }
            }

            /* ─── FLOATING TOAST CONTAINER ─── */
            #dqu-toast-container {
                position: fixed; top: 20px; right: 20px; z-index: 9999999;
                display: flex; flex-direction: column; gap: 10px; pointer-events: none;
            }
            .dqu-toast {
                pointer-events: auto;
                min-width: 320px; max-width: 420px;
                background: rgba(8, 15, 30, 0.95);
                backdrop-filter: blur(16px);
                border: 1px solid rgba(56, 189, 248, 0.4);
                border-radius: 12px; padding: 12px 14px;
                display: flex; align-items: flex-start; gap: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.7);
                animation: dqu-slide-down 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                transition: all 0.3s ease;
            }
            .dqu-toast-hiding { opacity: 0; transform: translateY(-20px); }
            @keyframes dqu-slide-down { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
            
            .dqu-toast-success { border-color: rgba(16, 185, 129, 0.6); }
            .dqu-toast-warn { border-color: rgba(245, 158, 11, 0.6); }
            .dqu-toast-error { border-color: rgba(244, 63, 94, 0.6); }
            
            .dqu-toast-icon { font-size: 18px; margin-top: 1px; }
            .dqu-toast-content { flex: 1; }
            .dqu-toast-title { font-size: 13px; font-weight: 800; color: #fff; margin-bottom: 2px; }
            .dqu-toast-msg { font-size: 11px; font-weight: 600; color: #cbd5e1; line-height: 1.4; }
            .dqu-toast-close { background: none; border: none; color: #94a3b8; font-size: 12px; cursor: pointer; padding: 2px; }
            .dqu-toast-close:hover { color: #fff; }

            .dqu-header:active { cursor: grabbing; }
            .dqu-title { font-weight: 900; font-size: 15px; color: #fff; letter-spacing: 0.5px; display: flex; align-items: center; gap: 8px; user-select: none; }
            .dqu-title-ver { font-size: 10px; color: #38bdf8; font-weight: 600; background: rgba(56,189,248,0.2); padding: 2px 7px; border-radius: 6px; border: 1px solid rgba(56,189,248,0.3); }
            .dqu-status-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--dqu-green); box-shadow: 0 0 8px var(--dqu-green); animation: dqu-pulse-ring 1.8s cubic-bezier(0.45, 0, 0.55, 1) infinite; }
            @keyframes dqu-pulse-ring {
                0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
                70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
                100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
            }

            .dqu-header-actions { display: flex; gap: 5px; }
            .dqu-icon-btn { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #bae6fd; padding: 5px 10px; border-radius: 8px; cursor: pointer; font-size: 11px; font-weight: 700; transition: all 0.15s; }
            .dqu-icon-btn:hover { background: rgba(56,189,248,0.25); border-color: rgba(56,189,248,0.5); color: #fff; }
            .dqu-close-btn { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #fff; width: 28px; height: 28px; border-radius: 8px; cursor: pointer; font-size: 12px; display:flex; align-items:center; justify-content:center; transition: all 0.15s; }
            .dqu-close-btn:hover { background: rgba(244,63,94,0.25); border-color: rgba(244,63,94,0.5); }

            .dqu-nav-tabs {
                display: flex; gap: 5px; overflow-x: auto; padding: 8px 12px 2px;
                perspective: 800px; scrollbar-width: none;
            }
            .dqu-nav-tabs::-webkit-scrollbar { display: none; }
            .dqu-tab-btn {
                padding: 6px 12px; border-radius: 10px; font-weight: 800; font-size: 11px;
                background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
                color: #94a3b8; cursor: pointer; transition: transform 0.15s ease-out, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
                white-space: nowrap; transform-style: preserve-3d;
                box-shadow: 0 4px 12px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.15);
                user-select: none; display: inline-flex; align-items: center; gap: 5px;
            }
            .dqu-tab-btn:hover {
                color: #fff; background: rgba(255,255,255,0.12); border-color: rgba(192, 132, 252, 0.6);
                box-shadow: 0 8px 24px rgba(168, 85, 247, 0.45), inset 0 1px 2px rgba(255,255,255,0.35);
            }
            .dqu-tab-btn.active {
                background: linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(124, 58, 237, 0.65) 100%) !important;
                color: #ffffff !important; border: 1px solid #c084fc !important;
                box-shadow: 0 6px 22px rgba(192, 132, 252, 0.65), inset 0 2px 4px rgba(255,255,255,0.4) !important;
                transform: translateZ(10px) scale(1.05);
            }

            /* ─── SUMMARY BAR ─── */
            .dqu-summary-bar {
                background: linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(16, 185, 129, 0.08) 100%);
                border: 1px solid rgba(56, 189, 248, 0.25);
                border-radius: 12px; padding: 10px 14px; margin: 8px 12px 0;
                display: flex; flex-direction: column; gap: 6px;
            }
            .dqu-summary-top { display: flex; justify-content: space-between; align-items: center; }
            .dqu-summary-label { font-size: 12px; font-weight: 800; color: #e0f2fe; }
            .dqu-summary-percent { font-size: 18px; font-weight: 900; background: linear-gradient(135deg, #38bdf8, #34d399, #60a5fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            .dqu-summary-progress-bg { height: 7px; background: rgba(0,0,0,0.5); border-radius: 6px; overflow: hidden; border: 1px solid rgba(255,255,255,0.05); }
            .dqu-summary-progress-fill { height: 100%; background: linear-gradient(90deg, #00c6ff 0%, #0072ff 50%, #10b981 100%); border-radius: 6px; transition: width 0.4s ease; }

            /* ─── STATS ROW ─── */
            .dqu-stats-row {
                background: rgba(0,0,0,0.3); border-radius: 10px; padding: 7px 12px; margin: 5px 12px 0;
                display: flex; justify-content: space-around; border: 1px solid rgba(255,255,255,0.05);
                font-size: 11px; font-weight: 700; color: #94a3b8;
            }
            .dqu-stats-item { display: flex; align-items: center; gap: 4px; }
            .dqu-stats-item strong { color: #34d399; }
            .dqu-stats-item .stat-warn { color: var(--dqu-gold); }
            .dqu-stats-item .stat-blue { color: #38bdf8; }

            /* ─── FILTER BAR ─── */
            .dqu-filter-bar { display: flex; gap: 4px; padding: 0 12px; margin-top: 6px; }
            .dqu-filter-btn { padding: 4px 10px; border-radius: 6px; font-size: 10.5px; font-weight: 700; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); color: #64748b; cursor: pointer; transition: all 0.15s; }
            .dqu-filter-btn:hover { color: #94a3b8; }
            .dqu-filter-btn.active { background: rgba(56,189,248,0.22); color: #bae6fd; border-color: rgba(56,189,248,0.45); }

            /* ─── HYPESQUAD CARDS & PRIVACY CARDS ─── */
            .dqu-hs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 4px; }
            .dqu-hs-card {
                position: relative;
                background: rgba(255,255,255,0.03); border: 2px solid rgba(255,255,255,0.08);
                border-radius: 12px; padding: 12px 8px; text-align: center; cursor: pointer;
                display: flex; flex-direction: column; align-items: center; gap: 6px;
                transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .dqu-hs-card:hover { border-color: rgba(255,255,255,0.3); transform: translateY(-2px); }

            /* ULTRA GLOW FOR SELECTED CARD */
            .dqu-hs-card.selected {
                background: rgba(168, 85, 247, 0.28) !important;
                border: 2px solid #c084fc !important;
                box-shadow: 0 0 25px rgba(192, 132, 252, 0.65), inset 0 0 18px rgba(192, 132, 252, 0.35) !important;
                transform: translateY(-3px) scale(1.03) !important;
            }
            .dqu-hs-card.selected::after {
                content: "✓ SEÇİLİ";
                position: absolute; top: 4px; right: 4px;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: #ffffff; font-size: 8.5px; font-weight: 900; letter-spacing: 0.4px;
                padding: 2px 7px; border-radius: 6px;
                box-shadow: 0 0 14px rgba(16, 185, 129, 0.9);
                border: 1px solid rgba(255, 255, 255, 0.5);
                z-index: 10;
            }
            #hs-card-1.selected { border-color: #9C84EF !important; box-shadow: 0 0 25px rgba(156,132,239,0.7), inset 0 0 18px rgba(156,132,239,0.35) !important; }
            #hs-card-2.selected { border-color: #F47B67 !important; box-shadow: 0 0 25px rgba(244,123,103,0.7), inset 0 0 18px rgba(244,123,103,0.35) !important; }
            #hs-card-3.selected { border-color: #45DDC0 !important; box-shadow: 0 0 25px rgba(69,221,192,0.7), inset 0 0 18px rgba(69,221,192,0.35) !important; }

            #priv-card-1.selected { border-color: #f472b6 !important; box-shadow: 0 0 25px rgba(244,114,182,0.7), inset 0 0 18px rgba(244,114,182,0.35) !important; }
            #priv-card-2.selected { border-color: #fbbf24 !important; box-shadow: 0 0 25px rgba(251,191,36,0.7), inset 0 0 18px rgba(251,191,36,0.35) !important; }
            #priv-card-3.selected { border-color: #34d399 !important; box-shadow: 0 0 25px rgba(52,211,153,0.7), inset 0 0 18px rgba(52,211,153,0.35) !important; }

            .dqu-hs-icon { width: 40px; height: 40px; }
            .dqu-hs-name { font-size: 12px; font-weight: 800; color: #fff; }
            .dqu-hs-desc { font-size: 9.5px; font-weight: 600; color: #94a3b8; line-height: 1.3; }

            /* ─── GIFTING BADGE GRID ─── */
            .dqu-gift-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 4px; }
            .dqu-gift-card {
                position: relative;
                background: rgba(255,255,255,0.03); border: 2px solid rgba(255,255,255,0.08);
                border-radius: 14px; padding: 14px 8px 10px; text-align: center; cursor: pointer;
                display: flex; flex-direction: column; align-items: center; gap: 5px;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .dqu-gift-card:hover {
                transform: translateY(-4px) scale(1.04);
                border-color: rgba(168, 85, 247, 0.6);
                background: rgba(168, 85, 247, 0.15);
                box-shadow: 0 0 30px rgba(168, 85, 247, 0.5), inset 0 0 20px rgba(168, 85, 247, 0.2);
            }
            .dqu-gift-card[data-tier="1"]:hover { border-color: #a78bfa; box-shadow: 0 0 30px rgba(167,139,250,0.6), inset 0 0 20px rgba(167,139,250,0.25); }
            .dqu-gift-card[data-tier="2"]:hover { border-color: #c084fc; box-shadow: 0 0 30px rgba(192,132,252,0.6), inset 0 0 20px rgba(192,132,252,0.25); }
            .dqu-gift-card[data-tier="3"]:hover { border-color: #e879f9; box-shadow: 0 0 30px rgba(232,121,249,0.6), inset 0 0 20px rgba(232,121,249,0.25); }
            .dqu-gift-card[data-tier="4"]:hover { border-color: #f472b6; box-shadow: 0 0 30px rgba(244,114,182,0.6), inset 0 0 20px rgba(244,114,182,0.25); }
            .dqu-gift-card[data-tier="5"]:hover { border-color: #38bdf8; box-shadow: 0 0 30px rgba(56,189,248,0.6), inset 0 0 20px rgba(56,189,248,0.25); }
            .dqu-gift-card[data-tier="6"]:hover { border-color: #fbbf24; box-shadow: 0 0 35px rgba(251,191,36,0.7), inset 0 0 25px rgba(251,191,36,0.3); }
            .dqu-gift-img-wrap {
                width: 48px; height: 48px; border-radius: 12px;
                background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;
                overflow: hidden; transition: transform 0.3s ease;
            }
            .dqu-gift-card:hover .dqu-gift-img-wrap { transform: scale(1.15) rotate(3deg); }
            .dqu-gift-icon { width: 40px; height: 40px; object-fit: contain; }
            .dqu-gift-name { font-size: 11.5px; font-weight: 900; }
            .dqu-gift-req { font-size: 9px; font-weight: 700; color: #64748b; background: rgba(255,255,255,0.05); padding: 2px 8px; border-radius: 8px; }
            .dqu-gift-tooltip {
                position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%) scale(0.9);
                background: rgba(10, 6, 25, 0.97); border: 1px solid rgba(168, 85, 247, 0.6);
                border-radius: 10px; padding: 8px 12px; font-size: 10px; color: #e2e8f0;
                white-space: normal; word-wrap: break-word; width: max-content; max-width: 200px;
                pointer-events: none; opacity: 0; z-index: 100;
                box-shadow: 0 8px 30px rgba(0,0,0,0.8), 0 0 20px rgba(168, 85, 247, 0.4);
                transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
                line-height: 1.4; text-align: center;
            }
            .dqu-gift-card:hover .dqu-gift-tooltip { opacity: 1; transform: translateX(-50%) scale(1); }

            /* ─── BADGE ENCYCLOPEDIA LIST ─── */
            .dqu-badge-item {
                display: flex; align-items: center; gap: 10px;
                background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
                border-radius: 10px; padding: 8px 10px;
                transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .dqu-badge-item:hover {
                background: rgba(168, 85, 247, 0.12); border-color: rgba(168, 85, 247, 0.4);
                transform: translateX(3px);
                box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);
            }
            .dqu-badge-img { width: 32px; height: 32px; border-radius: 8px; object-fit: contain; flex-shrink: 0; }
            .dqu-badge-emoji { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; background: rgba(0,0,0,0.3); border-radius: 8px; }
            .dqu-badge-info { flex: 1; min-width: 0; }
            .dqu-badge-title { font-size: 11px; font-weight: 900; color: #fff; }
            .dqu-badge-how { font-size: 9.5px; color: #94a3b8; line-height: 1.3; }

            /* ─── ACHIEVEMENTS GRID ─── */
            #dqu-achievements-container { display: flex; flex-direction: column; gap: 8px; max-height: 250px; overflow-y: auto; padding-right: 4px; }
            .dqu-ach-card {
                background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
                border-radius: 12px; padding: 10px 12px; display: flex; align-items: center; gap: 10px;
                transition: all 0.2s ease;
            }
            .dqu-ach-card.unlocked {
                background: linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(34,197,94,0.15) 100%);
                border-color: rgba(34,197,94,0.4); box-shadow: 0 4px 15px rgba(34,197,94,0.1);
            }
            .dqu-ach-icon { font-size: 24px; min-width: 32px; text-align: center; }
            .dqu-ach-details { flex: 1; }
            .dqu-ach-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px; }
            .dqu-ach-name { font-size: 12px; font-weight: 800; color: #fff; }
            .dqu-ach-status-badge { font-size: 9.5px; font-weight: 800; padding: 2px 7px; border-radius: 99px; }
            .dqu-ach-status-badge.unlocked { background: rgba(34,197,94,0.2); color: #4ade80; border: 1px solid rgba(34,197,94,0.4); }
            .dqu-ach-status-badge.locked { background: rgba(255,255,255,0.06); color: #64748b; }
            .dqu-ach-desc { font-size: 10.5px; color: #94a3b8; font-weight: 600; }

            /* ─── CLICKER MINI GAME ─── */
            .dqu-clicker-box {
                background: rgba(0,0,0,0.3); border: 1px solid rgba(124,58,237,0.3);
                border-radius: 14px; padding: 16px; display: flex; flex-direction: column;
                align-items: center; text-align: center; gap: 12px; position: relative; overflow: hidden;
            }
                      .dqu-quest-card {
                background: var(--dqu-card-bg);
                border: 1px solid rgba(56,189,248,0.25);
                border-radius: 14px;
                padding: 12px 14px;
                display: flex; flex-direction: column; gap: 8px;
                transition: all 0.25s ease;
                backdrop-filter: blur(10px);
            }
            .dqu-quest-card:hover { border-color: rgba(56,189,248,0.6); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,242,254,0.15); }
            .dqu-quest-card.completed { border-color: rgba(16,185,129,0.5); background: linear-gradient(135deg, rgba(6,78,59,0.5) 0%, rgba(2,44,34,0.6) 100%); }

            .dqu-card-header { display: flex; justify-content: space-between; align-items: center; }
            .dqu-game-title { font-weight: 800; font-size: 13px; color: #fff; max-width: 240px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
            .dqu-badge-status { font-size: 10px; font-weight: 800; padding: 3px 10px; border-radius: 99px; display: flex; align-items: center; gap: 3px; }
            .dqu-badge-active { background: rgba(56,189,248,0.18); border: 1px solid rgba(56,189,248,0.45); color: #7dd3fc; }
            .dqu-badge-done { background: rgba(16,185,129,0.18); border: 1px solid rgba(16,185,129,0.45); color: #6ee7b7; }

            .dqu-card-info { display: flex; justify-content: space-between; align-items: center; font-size: 10.5px; font-weight: 700; }
            .dqu-task-type { color: #38bdf8; display: flex; align-items: center; gap: 3px; }
            .dqu-time-rem { color: #f59e0b; display: flex; align-items: center; gap: 3px; }
            .dqu-time-rem.done { color: #6ee7b7; }

            .dqu-progress-track { position: relative; height: 14px; background: rgba(0,0,0,0.6); border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.08); }
            .dqu-progress-fill { height: 100%; background: linear-gradient(90deg, #00c6ff 0%, #0072ff 50%, #10b981 100%); transition: width 0.35s ease; border-radius: 8px; position: relative; }
            .dqu-progress-fill.done { background: linear-gradient(90deg, #10b981 0%, #059669 100%); }
            .dqu-progress-text { position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 900; color: #fff; text-shadow: 0 1px 3px rgba(0,0,0,0.8); letter-spacing: 0.3px; }

            .dqu-card-footer { display: flex; justify-content: space-between; align-items: center; font-size: 10.5px; font-weight: 700; color: #94a3b8; }
            .dqu-card-footer strong { color: #bae6fd; }
            .dqu-locate-btn { padding: 4px 9px !important; font-size: 10px !important; border-radius: 6px !important; background: rgba(56,189,248,0.2) !important; border-color: rgba(56,189,248,0.45) !important; color: #bae6fd !important; }
            .dqu-locate-btn:hover { background: rgba(56,189,248,0.45) !important; color: #fff !important; }lex; align-items: center; gap: 3px; }
            .dqu-badge-active { background: rgba(99,102,241,0.2); border: 1px solid rgba(129,140,248,0.4); color: #a5b4fc; }
            .dqu-badge-done { background: rgba(34,197,94,0.15); border: 1px solid rgba(34,197,94,0.4); color: #4ade80; }

            .dqu-card-info { display: flex; justify-content: space-between; align-items: center; font-size: 10.5px; font-weight: 700; }
            .dqu-task-type { color: #8b5cf6; display: flex; align-items: center; gap: 3px; }
            .dqu-time-rem { color: #f59e0b; display: flex; align-items: center; gap: 3px; }
            .dqu-time-rem.done { color: #4ade80; }

            .dqu-progress-track { position: relative; height: 14px; background: rgba(0,0,0,0.5); border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); }
            .dqu-progress-fill { height: 100%; background: linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%); transition: width 0.35s ease; border-radius: 8px; position: relative; }
            .dqu-progress-fill.done { background: linear-gradient(90deg, #22c55e 0%, #16a34a 100%); }
            .dqu-progress-text { position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 900; color: #fff; text-shadow: 0 1px 3px rgba(0,0,0,0.7); letter-spacing: 0.3px; }

            .dqu-card-footer { display: flex; justify-content: space-between; align-items: center; font-size: 10.5px; font-weight: 700; color: #94a3b8; }
            .dqu-card-footer strong { color: #c4b5fd; }
            .dqu-locate-btn { padding: 4px 9px !important; font-size: 10px !important; border-radius: 6px !important; background: rgba(124,58,237,0.2) !important; border-color: rgba(124,58,237,0.4) !important; color: #c4b5fd !important; }
            .dqu-locate-btn:hover { background: rgba(124,58,237,0.4) !important; color: #fff !important; }

            /* ─── TERMINAL ─── */
            .dqu-terminal { background: rgba(0,0,0,0.5); border-radius: 10px; padding: 10px; font-family: 'JetBrains Mono', Consolas, monospace !important; font-size: 10px; height: 150px; overflow-y: auto; color: #22c55e; border: 1px solid rgba(255,255,255,0.06); line-height: 1.6; }
            .dqu-terminal::-webkit-scrollbar { width: 4px; }
            .dqu-terminal::-webkit-scrollbar-thumb { background: rgba(34,197,94,0.3); border-radius: 4px; }

            /* ─── SETTINGS ─── */
            .dqu-settings-box { background: rgba(0,0,0,0.25); padding: 12px; border-radius: 10px; display: flex; flex-direction: column; gap: 10px; font-size: 11.5px; }
            .dqu-setting-row { display: flex; justify-content: space-between; align-items: center; }
            .dqu-opt-btn { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #64748b; padding: 6px 12px; border-radius: 8px; font-weight: 700; font-size: 11px; cursor: pointer; transition: all 0.15s; }
            .dqu-opt-btn:hover { color: #94a3b8; border-color: rgba(255,255,255,0.15); }
            .dqu-opt-btn.active { background: rgba(124,58,237,0.3); color: #e0e7ff; border-color: rgba(124,58,237,0.6); }

            /* ─── CREDITS & SOCIALS ─── */
            .dqu-credits {
                text-align: center;
                font-size: 11px;
                color: #c4b5fd;
                font-weight: 800;
                background: linear-gradient(135deg, rgba(124, 58, 237, 0.18) 0%, rgba(168, 85, 247, 0.12) 100%);
                padding: 8px 12px;
                border-radius: 10px;
                border: 1px solid rgba(168, 85, 247, 0.35);
                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
                letter-spacing: 0.2px;
            }
            .dqu-socials { display: flex; gap: 8px; }
            .dqu-social-btn {
                flex: 1;
                padding: 9px 12px;
                border-radius: 10px;
                text-decoration: none;
                font-size: 11.5px;
                font-weight: 800;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                transition: all 0.2s ease;
                box-shadow: 0 4px 12px rgba(0,0,0,0.25);
                cursor: pointer;
            }
            .dqu-yt {
                background: linear-gradient(135deg, rgba(239, 68, 68, 0.25) 0%, rgba(220, 38, 38, 0.35) 100%);
                color: #fca5a5;
                border: 1px solid rgba(239, 68, 68, 0.45);
            }
            .dqu-yt:hover {
                background: linear-gradient(135deg, rgba(239, 68, 68, 0.4) 0%, rgba(220, 38, 38, 0.5) 100%);
                color: #fff;
                transform: translateY(-1.5px);
                box-shadow: 0 6px 16px rgba(239, 68, 68, 0.4);
            }
            .dqu-dc {
                background: linear-gradient(135deg, rgba(88, 101, 242, 0.25) 0%, rgba(79, 70, 229, 0.35) 100%);
                color: #a5b4fc;
                border: 1px solid rgba(88, 101, 242, 0.45);
            }
            .dqu-dc:hover {
                background: linear-gradient(135deg, rgba(88, 101, 242, 0.4) 0%, rgba(79, 70, 229, 0.5) 100%);
                color: #fff;
                transform: translateY(-1.5px);
                box-shadow: 0 6px 16px rgba(88, 101, 242, 0.4);
            }

            /* ─── 6 NEW FEATURES STYLING ─── */
            .dqu-profile-box { background: rgba(0,0,0,0.3); border: 1px solid rgba(168,85,247,0.3); border-radius: 12px; padding: 14px; display: flex; flex-direction: column; gap: 10px; }
            .dqu-profile-header { display: flex; align-items: center; gap: 12px; }
            .dqu-profile-avatar { width: 52px; height: 52px; border-radius: 50%; border: 2px solid #a855f7; box-shadow: 0 0 14px rgba(168,85,247,0.6); object-fit: cover; }
            .dqu-profile-name { font-size: 14px; font-weight: 900; color: #fff; }
            .dqu-profile-tag { font-size: 10px; color: #c4b5fd; font-weight: 700; }
            .dqu-profile-badges { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px; }
            .dqu-profile-badge { font-size: 9px; font-weight: 800; background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 6px; color: #e2e8f0; border: 1px solid rgba(255,255,255,0.15); }

            .dqu-notes-textarea { width: 100%; height: 130px; background: rgba(0,0,0,0.4); border: 1px solid rgba(168,85,247,0.3); border-radius: 10px; padding: 10px; color: #f8fafc; font-family: monospace; font-size: 11px; resize: none; box-sizing: border-box; }
            .dqu-notes-textarea:focus { outline: none; border-color: #a855f7; box-shadow: 0 0 10px rgba(168,85,247,0.4); }

            .dqu-deco-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }
            .dqu-deco-card { background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 10px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 6px; transition: all 0.2s; }
            .dqu-deco-card:hover { border-color: rgba(192,132,252,0.5); transform: translateY(-2px); background: rgba(168,85,247,0.1); }
            .dqu-deco-frame { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; background: rgba(255,255,255,0.05); border: 2px solid #a855f7; }

            .dqu-timer-box { background: rgba(0,0,0,0.3); padding: 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; flex-direction: column; align-items: center; gap: 10px; }
            .dqu-timer-display { font-size: 28px; font-weight: 900; color: #34d399; font-family: monospace; letter-spacing: 2px; }

            .dqu-soundboard-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
            .dqu-sound-btn { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 10px 6px; color: #e2e8f0; font-size: 10.5px; font-weight: 700; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 4px; transition: all 0.2s; }
            .dqu-sound-btn:hover { background: rgba(168,85,247,0.25); border-color: #a855f7; color: #fff; }
            .dqu-sound-btn.playing { background: rgba(34,197,94,0.25); border-color: #22c55e; color: #4ade80; }

            .dqu-snake-box { background: rgba(0,0,0,0.5); padding: 10px; border-radius: 12px; border: 1px solid rgba(168,85,247,0.3); display: flex; flex-direction: column; align-items: center; gap: 8px; }
            #dqu-snake-canvas { background: #090314; border: 1px solid rgba(168,85,247,0.4); border-radius: 8px; box-shadow: 0 0 15px rgba(0,0,0,0.6); }

            /* ─── ACTIONS ─── */
            .dqu-actions { display: flex; gap: 6px; }
            .dqu-btn { flex: 1; padding: 10px 14px; border-radius: 10px; border: none; font-weight: 800; font-size: 12.5px; cursor: pointer; transition: all 0.2s; }
            .dqu-btn-primary { background: var(--dqu-btn-grad); color: #fff; background-size: 200% 200%; }
            .dqu-btn-primary:hover { filter: brightness(1.15); transform: translateY(-1px); box-shadow: 0 4px 15px rgba(124,58,237,0.4); }
            .dqu-btn-danger { background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%); color: #fff; }
            .dqu-btn-danger:hover { filter: brightness(1.15); transform: translateY(-1px); box-shadow: 0 4px 15px rgba(239,68,68,0.4); }
        `;
        document.head.appendChild(style);

        const savedSound = localStorage.getItem('dqu_sound') !== 'false';
        const savedNotify = localStorage.getItem('dqu_notify') !== 'false';

        // Floating Trigger Button
        const triggerBtn = document.createElement('div');
        triggerBtn.id = "dqu-floating-trigger";
        triggerBtn.style.display = "none";
        let logoUrl = "https://cdn.discordapp.com/emojis/1049755490797748254.webp";
        try { if (typeof chrome !== 'undefined' && chrome.runtime?.getURL) logoUrl = chrome.runtime.getURL('assets/icon.png'); } catch(e) {}
        triggerBtn.innerHTML = `<img src="${logoUrl}" style="width:20px; height:20px; border-radius:5px; box-shadow:0 0 6px rgba(255,255,255,0.4);" alt="DCV"> <span>DCV Panel</span>`;
        document.body.appendChild(triggerBtn);

        // First-Time Welcome Modal
        const welcomeModal = document.createElement('div');
        welcomeModal.id = "dqu-welcome-modal";
        welcomeModal.className = "dqu-modal-overlay";
        welcomeModal.style.display = "none";
        welcomeModal.innerHTML = `
            <div class="dqu-modal-box">
                <div class="dqu-modal-header" id="modal-title-text">
                    <span>🚀</span> <span>${t("modalTitle")}</span>
                </div>
                <div class="dqu-modal-body">
                    <p id="modal-intro-text">${t("modalIntro")}</p>
                    <div class="dqu-modal-info-list">
                        <div id="modal-info-video">${t("infoBoxVideo")}</div>
                        <div id="modal-info-mobile">${t("infoBoxMobile")}</div>
                        <div>🛡️ <strong>Güvenli Çalışma Modu:</strong> Discord rate limit (429) engeline takılmamak için tüm görevler sırayla tek tek güvenli şekilde tamamlanır.</div>
                    </div>
                </div>
                <button id="dqu-modal-confirm-btn" class="dqu-btn dqu-btn-primary">${t("modalBtn")}</button>
            </div>
        `;
        document.body.appendChild(welcomeModal);

        // Image Zoom Lightbox Modal
        const imgModal = document.createElement('div');
        imgModal.id = "dqu-image-modal";
        imgModal.className = "dqu-modal-overlay";
        imgModal.style.display = "none";
        imgModal.innerHTML = `
            <div class="dqu-img-modal-box">
                <div class="dqu-img-modal-header">
                    <span id="dqu-img-modal-title" style="font-size:13px; font-weight:900; color:#fff; display:flex; align-items:center; gap:6px;">🖼️ Görsel İnceleme</span>
                    <button id="dqu-img-modal-close" class="dqu-close-btn" style="width:28px; height:28px; font-size:14px;">✕</button>
                </div>
                <div class="dqu-img-modal-body">
                    <div style="position:relative; width:100%; display:flex; justify-content:center; align-items:center;">
                        <img id="dqu-img-modal-src" src="" style="max-width:100%; max-height:75vh; border-radius:10px; border:1px solid rgba(168,85,247,0.4); box-shadow:0 10px 40px rgba(0,0,0,0.8);" alt="İnceleme">
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(imgModal);

        const uiContainer = document.createElement('div');
        uiContainer.id = "discord-quest-ui-root";

        // Restore saved position if available
        const savedX = localStorage.getItem('dqu_pos_x');
        const savedY = localStorage.getItem('dqu_pos_y');
        if (savedX && savedY) {
            uiContainer.style.left = savedX + 'px';
            uiContainer.style.top = savedY + 'px';
            uiContainer.style.bottom = 'auto';
            uiContainer.style.right = 'auto';
        }

        uiContainer.innerHTML = buildMainUIHTML(savedSound, savedNotify);
        document.body.appendChild(uiContainer);

        attachEventListeners(uiContainer, triggerBtn, welcomeModal);
        renderAchievements();
        triggerAutoRun();
    }

    function buildMainUIHTML(savedSound, savedNotify) {
        let logoUrl = "https://cdn.discordapp.com/emojis/1049755490797748254.webp";
        let imgPrivateUrl = "";
        let imgPublicUrl = "";
        let giftPatronUrl = "", giftChampionUrl = "", giftLuminaryUrl = "", giftIconUrl = "", giftHeroUrl = "", giftLegendUrl = "";
        let nitroBronzeUrl = "", nitroSilverUrl = "", nitroGoldUrl = "", nitroPlatinumUrl = "", nitroDiamondUrl = "", nitroEmeraldUrl = "", nitroRubyUrl = "", nitroOpalUrl = "";
        let badgeActiveDevUrl = "", badgeEarlyUrl = "", badgeBug1Url = "", badgeBug2Url = "", badgePartnerUrl = "", badgeStaffUrl = "", badgeQuestUrl = "", badgeHsEventsUrl = "", badgeOrigUserUrl = "", badgeAutoModUrl = "", badgeOrbsUrl = "";
        let badgeMeadowUrl = "", badgeCommandsUrl = "";
        let imgBetaBadgesUrl = "";
        try {
            if (typeof chrome !== 'undefined' && chrome.runtime?.getURL) {
                logoUrl = chrome.runtime.getURL('assets/icon.png');
                imgPrivateUrl = chrome.runtime.getURL('assets/preview_private.png');
imgPublicUrl = chrome.runtime.getURL('assets/preview_public.png');
                giftPatronUrl = chrome.runtime.getURL('assets/gift_patron.png');
                giftChampionUrl = chrome.runtime.getURL('assets/gift_champion.png');
                giftLuminaryUrl = chrome.runtime.getURL('assets/gift_luminary.png');
                giftIconUrl = chrome.runtime.getURL('assets/gift_icon.png');
                nitroBronzeUrl = chrome.runtime.getURL('assets/badge_nitro_bronze.png');
                nitroSilverUrl = chrome.runtime.getURL('assets/badge_nitro_silver.png');
                nitroGoldUrl = chrome.runtime.getURL('assets/badge_nitro_gold.png');
                nitroPlatinumUrl = chrome.runtime.getURL('assets/badge_nitro_platinum.png');
                nitroDiamondUrl = chrome.runtime.getURL('assets/badge_nitro_diamond.png');
                nitroEmeraldUrl = chrome.runtime.getURL('assets/badge_nitro_emerald.png');
                nitroRubyUrl = chrome.runtime.getURL('assets/badge_nitro_ruby.png');
                nitroOpalUrl = chrome.runtime.getURL('assets/badge_nitro_opal.png');
                giftHeroUrl = chrome.runtime.getURL('assets/gift_hero.png');
                giftLegendUrl = chrome.runtime.getURL('assets/gift_legend.png');
                badgeActiveDevUrl = chrome.runtime.getURL('assets/badge_icon_activedev.png');
                badgeEarlyUrl = chrome.runtime.getURL('assets/badge_icon_early.png');
                badgeBug1Url = chrome.runtime.getURL('assets/badge_icon_bug1.png');
                badgeBug2Url = chrome.runtime.getURL('assets/badge_icon_bug2.png');
                badgePartnerUrl = chrome.runtime.getURL('assets/badge_icon_partner.png');
                badgeStaffUrl = chrome.runtime.getURL('assets/badge_icon_staff.png');
                badgeQuestUrl = chrome.runtime.getURL('assets/badge_icon_quest.png');
                badgeHsEventsUrl = chrome.runtime.getURL('assets/badge_icon_hsevents.png');
                badgeOrigUserUrl = chrome.runtime.getURL('assets/badge_icon_origusername.png');
                badgeAutoModUrl = chrome.runtime.getURL('assets/badge_icon_automod.png');
                badgeOrbsUrl = chrome.runtime.getURL('assets/badge_icon_orbs.png');
                badgeMeadowUrl = chrome.runtime.getURL('assets/badge_icon_meadow.png');
                badgeCommandsUrl = chrome.runtime.getURL('assets/badge_icon_commands.png');
                imgBetaBadgesUrl = chrome.runtime.getURL('assets/preview_beta_badges.png');
            }
        } catch(e) {}

        const savedHouseId = parseInt(localStorage.getItem('dqu_hypesquad_house') || '1', 10);
        const savedPrivacyVal = parseInt(localStorage.getItem('dqu_privacy_level') || '1', 10);

        return `
            <div class="dqu-header" id="dqu-drag-handle">
                <div style="display:flex; align-items:center; gap:8px;">
                    <div class="dqu-status-dot" id="dqu-dot"></div>
                    <img src="${logoUrl}" onerror="this.onerror=null; this.src='https://cdn.discordapp.com/emojis/1049755490797748254.webp';" style="width:22px; height:22px; border-radius:6px; box-shadow:0 0 10px rgba(168,85,247,0.8); object-fit:cover;" alt="KC">
                    <div class="dqu-title" id="dqu-main-title" title="NEXSUS CORE v${PROT_VER}">⚡ ${t("title")} <span class="dqu-title-ver">v${PROT_VER}</span></div>
                </div>
                <div class="dqu-header-actions">
                    <button class="dqu-icon-btn" id="dqu-refresh-btn">${t("refreshBtn")}</button>
                    <button class="dqu-close-btn" id="dqu-close-x" title="${t("closeTitle")}">_</button>
                </div>
            </div>

            <div class="dqu-hud-wrapper">
                <!-- VERTICAL CYBER SIDEBAR NAV -->
                <div class="dqu-nav-tabs">
                    <button class="dqu-tab-btn active" id="tab-btn-quests">🎯 Görevler</button>
                    <button class="dqu-tab-btn" id="tab-btn-tools">⚡ Discord Araçları</button>
                    <button class="dqu-tab-btn" id="tab-btn-hypesquad">🛡️ HypeSquad</button>
                    <button class="dqu-tab-btn" id="tab-btn-updates">📢 Güncellemeler</button>
                    <button class="dqu-tab-btn" id="tab-btn-gifting">🎁 Hediyeler</button>
                    <button class="dqu-tab-btn" id="tab-btn-privacy">🔒 Gizlilik</button>
                    <button class="dqu-tab-btn" id="tab-btn-badges">🏷️ Rozetler</button>
                    <button class="dqu-tab-btn" id="tab-btn-achievements">🏆 Başarımlar</button>
                    <button class="dqu-tab-btn" id="tab-btn-notes">📝 Notlar</button>
                    <button class="dqu-tab-btn" id="tab-btn-games">🎮 Oyunlar</button>
                    <button class="dqu-tab-btn" id="tab-btn-logs">📜 Konsol</button>
                    <button class="dqu-tab-btn" id="tab-btn-settings">⚙️ Ayarlar</button>
                </div>

                <!-- MAIN VIEWPORT CONTENT -->
                <div class="dqu-viewport">
                    <div class="dqu-summary-bar">
                        <div class="dqu-summary-top">
                            <span class="dqu-summary-label" id="dqu-summary-label">⏱️ Genel İlerleme</span>
                            <span class="dqu-summary-percent" id="dqu-summary-percent">%0</span>
                        </div>
                        <div class="dqu-summary-progress-bg">
                            <div class="dqu-summary-progress-fill" id="dqu-summary-fill" style="width:0%;"></div>
                        </div>
                    </div>

                    <div class="dqu-stats-row">
                        <div class="dqu-stats-item"><span id="lbl-completed-cnt">${t("completedCount")}</span> <strong id="stat-completed-count">0/0</strong></div>
                        <div class="dqu-stats-item">🔮 Orbs: <strong style="color:#c084fc;" id="stat-orbs-count">0 Orbs</strong></div>
                        <div class="dqu-stats-item">⏱️ Kalan: <strong class="stat-warn" id="stat-remaining-time">--</strong></div>
                        <div class="dqu-stats-item"><span id="lbl-saved-cnt">${t("savedTime")}</span> <strong class="stat-blue" id="stat-saved-time">0dk</strong></div>
                    </div>

                    <div class="dqu-filter-bar">
                        <button class="dqu-filter-btn active" id="filter-btn-all">${t("filterAll")}</button>
                        <button class="dqu-filter-btn" id="filter-btn-active">${t("filterActive")}</button>
                        <button class="dqu-filter-btn" id="filter-btn-done">${t("filterDone")}</button>
                    </div>

                    <div class="dqu-body">
                        <!-- QUESTS PAGE -->
                        <div id="page-quests" style="display:flex; flex-direction:column; gap:8px;">
                            <div style="background:rgba(192,132,252,0.12); border:1px solid rgba(192,132,252,0.35); border-radius:10px; padding:10px 12px; display:flex; align-items:center; justify-content:space-between; font-size:11px; font-weight:800; color:#fff; box-shadow:0 4px 15px rgba(0,0,0,0.2);">
                                <div style="display:flex; align-items:center; gap:8px;">
                                    <span style="font-size:20px;">🔮</span>
                                    <div>
                                        <div style="font-size:11.5px; font-weight:900; color:#fff;">Eklenti İle Kazanılan Toplam Orbs</div>
                                        <div style="font-size:9.5px; color:#c4b5fd; font-weight:600;">Tamamlanan tüm görevlerin ödül birikimi</div>
                                    </div>
                                </div>
                                <span style="font-size:14px; color:#c084fc; font-weight:900;" id="stat-total-ext-orbs">0 Orbs</span>
                            </div>
                            <div id="dqu-quests-container">
                                <div style="text-align:center; padding: 22px 14px; color: #c4b5fd; font-size: 11.5px; font-weight:700; line-height:1.55; background:rgba(0,0,0,0.35); border-radius:12px; border:1px dashed rgba(192,132,252,0.35);" id="dqu-empty-quests-placeholder">
                                    🚀 Görevleri başlatmak için aşağıdaki <strong>"⚡ Görevleri Otomatik Başlat"</strong> butonuna 1 kere basın.
                                </div>
                            </div>
                        </div>

                        <!-- DISCORD CLIENT TOOLS & MODIFIERS PAGE -->
                        <div id="page-tools" style="display:none; flex-direction:column; gap:10px;">
                            <!-- 1. DISCORD THEME & AMOLED -->
                            <div style="background:rgba(0,0,0,0.3); border:1px solid rgba(168,85,247,0.3); border-radius:12px; padding:12px; display:flex; flex-direction:column; gap:8px;">
                                <div style="font-size:12px; font-weight:900; color:#fff; display:flex; align-items:center; gap:6px;">
                                    <span>🎨 Discord İstemci Teması & AMOLED</span>
                                </div>
                                <div style="font-size:10px; color:#94a3b8;">Discord'un kendi arka plan görünümünü ve renklerini değiştirin:</div>
                                <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:6px;">
                                    <button class="dqu-opt-btn" id="btn-dc-theme-amoled" style="font-size:10.5px;">🖤 Pure AMOLED Siyah</button>
                                    <button class="dqu-opt-btn" id="btn-dc-theme-neon" style="font-size:10.5px;">💜 Neon Mor Cam</button>
                                    <button class="dqu-opt-btn" id="btn-dc-theme-blue" style="font-size:10.5px;">💎 Kristal Mavi</button>
                                    <button class="dqu-opt-btn" id="btn-dc-theme-reset" style="font-size:10.5px; color:#f43f5e;">🔄 Varsayılan Tema</button>
                                </div>
                            </div>

                            <!-- 2. COLOR & INVISIBLE TEXT -->
                            <div style="background:rgba(0,0,0,0.3); border:1px solid rgba(34,197,94,0.3); border-radius:12px; padding:12px; display:flex; flex-direction:column; gap:8px;">
                                <div style="font-size:12px; font-weight:900; color:#fff; display:flex; align-items:center; gap:6px;">
                                    <span>🌈 Discord Renkli & Görünmez Mesaj Araçları</span>
                                </div>
                                <input type="text" id="input-color-msg" placeholder="Mesajınızı buraya yazın..." style="width:100%; background:rgba(0,0,0,0.5); border:1px solid rgba(34,197,94,0.4); border-radius:8px; padding:6px 10px; color:#fff; font-size:11px; outline:none;">
                                <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:5px;">
                                    <button class="dqu-opt-btn" id="btn-msg-red" style="color:#ef4444; font-size:10px;">🔴 Kırmızı Yazı</button>
                                    <button class="dqu-opt-btn" id="btn-msg-green" style="color:#22c55e; font-size:10px;">🟢 Yeşil Yazı</button>
                                    <button class="dqu-opt-btn" id="btn-msg-blue" style="color:#3b82f6; font-size:10px;">🔵 Mavi Yazı</button>
                                    <button class="dqu-opt-btn" id="btn-msg-yellow" style="color:#eab308; font-size:10px;">🟡 Sarı Yazı</button>
                                    <button class="dqu-opt-btn" id="btn-msg-invisible" style="font-size:10px;">👻 Boş / Görünmez</button>
                                    <button class="dqu-opt-btn" id="btn-msg-reverse" style="font-size:10px;">🔀 Ters Yazı</button>
                                </div>
                            </div>

                            <!-- 4. PROFILE BIO & STATUS STYLER -->
                            <div style="background:rgba(0,0,0,0.3); border:1px solid rgba(244,114,182,0.3); border-radius:12px; padding:12px; display:flex; flex-direction:column; gap:8px;">
                                <div style="font-size:12px; font-weight:900; color:#fff; display:flex; align-items:center; gap:6px;">
                                    <span>🎭 Profil Bio & Durum Şekillendirici</span>
                                </div>
                                <input type="text" id="input-bio-text" placeholder="Bio veya durum kelimesi yazın..." style="width:100%; background:rgba(0,0,0,0.5); border:1px solid rgba(244,114,182,0.4); border-radius:8px; padding:6px 10px; color:#fff; font-size:11px; outline:none;">
                                <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:5px;">
                                    <button class="dqu-opt-btn" id="btn-font-aesthetic" style="font-size:10px;">𝒶ᵉˢᵗʰᵉᵗⁱᶜ</button>
                                    <button class="dqu-opt-btn" id="btn-font-gothic" style="font-size:10px;">𝔊𝔬𝔱𝔥𝔦𝔠</button>
                                    <button class="dqu-opt-btn" id="btn-font-bold" style="font-size:10px;">𝗕𝗼𝗹𝗱</button>
                                    <button class="dqu-opt-btn" id="btn-font-cyber" style="font-size:10px;">𝕮𝖞𝖇𝖊𝖗</button>
                                    <button class="dqu-opt-btn" id="btn-font-boxed" style="font-size:10px;">🅺🆄🆃🆄</button>
                                    <button class="dqu-opt-btn" id="btn-font-circles" style="font-size:10px;">Ⓒⓘⓡⓒⓛⓔ</button>
                                </div>
                            </div>

                            <!-- 5. NOTIFICATION CLEARER & FONT -->
                            <div style="background:rgba(0,0,0,0.3); border:1px solid rgba(234,179,8,0.3); border-radius:12px; padding:12px; display:flex; flex-direction:column; gap:8px;">
                                <div style="font-size:12px; font-weight:900; color:#fff; display:flex; align-items:center; gap:6px;">
                                    <span>🧹 Discord Bildirim Temizleyici & Fontlar</span>
                                </div>
                                <button class="dqu-btn dqu-btn-primary" id="btn-clear-all-notifications" style="font-size:11px; padding:8px 12px; background:linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
                                    🧹 Tüm Sunucu Bildirimlerini & Okunmamışları Temizle
                                </button>
                                <div style="display:flex; flex-direction:column; gap:6px; margin-top:4px;">
                                    <div style="font-size:10.5px; font-weight:800; color:#cbd5e1;">🔤 Discord Arayüz Yazı Tipi (8 Özel Font):</div>
                                    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:5px;">
                                        <button class="dqu-opt-btn" id="btn-font-poppins" style="font-size:10px; font-family:'Poppins',sans-serif;">Poppins</button>
                                        <button class="dqu-opt-btn" id="btn-font-orbitron" style="font-size:10px; font-family:'Orbitron',sans-serif; color:#38bdf8;">Orbitron</button>
                                        <button class="dqu-opt-btn" id="btn-font-firacode" style="font-size:10px; font-family:'Fira Code',monospace; color:#34d399;">Fira Code</button>
                                        <button class="dqu-opt-btn" id="btn-font-pixel" style="font-size:8px; font-family:'Press Start 2P',cursive; color:#fbbf24;">Pixel 8-Bit</button>
                                        <button class="dqu-opt-btn" id="btn-font-pacifico" style="font-size:10px; font-family:'Pacifico',cursive; color:#f472b6;">Pacifico</button>
                                        <button class="dqu-opt-btn" id="btn-font-montserrat" style="font-size:10px; font-family:'Montserrat',sans-serif;">Montserrat</button>
                                        <button class="dqu-opt-btn" id="btn-font-inter" style="font-size:10px;">Inter</button>
                                        <button class="dqu-opt-btn" id="btn-font-mono" style="font-size:10px;">JetBrains Mono</button>
                                        <button class="dqu-opt-btn" id="btn-font-default" style="font-size:10px; color:#f43f5e;">Varsayılan</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- HYPESQUAD PAGE -->
                        <div id="page-hypesquad" style="display:none; flex-direction:column; gap:10px;">
                            <div style="font-size:12px; font-weight:800; color:#fff;" id="hs-title-text">${t("hsTitle")}</div>
                            <div style="font-size:10.5px; color:#94a3b8;" id="hs-sub-text">${t("hsSub")}</div>
                            <div class="dqu-hs-grid">
                                <div class="dqu-hs-card ${savedHouseId === 1 ? 'selected' : ''}" id="hs-card-1" data-house="1">
                                    <img src="https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png" class="dqu-hs-icon">
                                    <div class="dqu-hs-name" style="color:#9C84EF;">Bravery</div>
                                    <div class="dqu-hs-desc" id="hs-desc-1">${t("hsBraveryDesc")}</div>
                                </div>
                                <div class="dqu-hs-card ${savedHouseId === 2 ? 'selected hs-brilliance' : ''}" id="hs-card-2" data-house="2">
                                    <img src="https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png" class="dqu-hs-icon">
                                    <div class="dqu-hs-name" style="color:#F47B67;">Brilliance</div>
                                    <div class="dqu-hs-desc" id="hs-desc-2">${t("hsBrillianceDesc")}</div>
                                </div>
                                <div class="dqu-hs-card ${savedHouseId === 3 ? 'selected hs-balance' : ''}" id="hs-card-3" data-house="3">
                                    <img src="https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png" class="dqu-hs-icon">
                                    <div class="dqu-hs-name" style="color:#45DDC0;">Balance</div>
                                    <div class="dqu-hs-desc" id="hs-desc-3">${t("hsBalanceDesc")}</div>
                                </div>
                            </div>
                            <div style="display:flex; gap:8px; margin-top:4px;">
                                <button class="dqu-btn dqu-btn-primary" id="btn-hs-apply" style="flex:2;">✨ Seçili Evin Rozetini Al</button>
                                <button class="dqu-btn dqu-btn-danger" id="btn-hs-remove" style="flex:1;">🗑️ Rozeti Çıkar / Sil</button>
                            </div>
                        </div>

                        <!-- UPDATES PAGE -->
                        <div id="page-updates" style="display:none; flex-direction:column; gap:10px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(15,23,42,0.6); padding:12px; border-radius:12px; border:1px solid rgba(56,189,248,0.3); box-shadow:0 4px 15px rgba(0,0,0,0.3);">
                                <div>
                                    <div style="font-size:13px; font-weight:900; color:#fff; display:flex; align-items:center; gap:6px;">
                                        <span>📢 NEXSUS Güncelleme Merkezi</span>
                                        <span id="updates-version-badge" class="dqu-title-ver">v${PROT_VER}</span>
                                    </div>
                                    <div style="font-size:10.5px; color:#34d399; margin-top:2px; font-weight:700;" id="updates-status-text">✅ Mevcut sürümünüz güncel ve aktif.</div>
                                </div>
                                <div style="display:flex; gap:6px;">
                                    <button class="dqu-btn dqu-btn-primary" id="btn-install-update" style="display:none; background:linear-gradient(135deg, #10b981 0%, #059669 100%); box-shadow:0 0 16px rgba(16,185,129,0.7); border:1px solid #34d399; font-weight:900; font-size:11px; padding:8px 14px; cursor:pointer;">
                                        🚀 GÜNCELLEMEYİ KUR & YENİLE
                                    </button>
                                    <button class="dqu-opt-btn" id="btn-check-updates-manual" style="font-size:10.5px;">🔄 Kontrol Et</button>
                                </div>
                            </div>

                            <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(168,85,247,0.3); border-radius:12px; padding:12px; display:flex; flex-direction:column; gap:8px;">
                                <div style="font-size:11.5px; font-weight:900; color:#c084fc; display:flex; align-items:center; gap:6px;">
                                    <span>📜 Son Sürüm Notları & Değişiklikler (Changelog):</span>
                                </div>
                                <div id="updates-changelog-container" style="font-size:11px; color:#e2e8f0; display:flex; flex-direction:column; gap:6px; max-height:190px; overflow-y:auto; padding-right:4px;">
                                    <div style="background:rgba(16,185,129,0.15); padding:8px 10px; border-radius:8px; border-left:3px solid #10b981; margin-bottom:4px;">
                                        <strong style="color:#34d399;">v2.0.2.1 (MİNİK GÜNCELLEME)</strong> — 3 Yeni Panel Görünüm Teması 🎨
                                        <ul style="margin:4px 0 0 16px; padding:0; line-height:1.5; color:#cbd5e1;">
                                            <li>🖤 <strong>Discord Mat Siyah (Sade & Efektsiz):</strong> Discord'un klasik sade koyu temasını birebir yansıtan, ışıltısız & mat minimalist tema.</li>
                                            <li>🌊 <strong>Arktik Neon Mavi:</strong> Buzul ve siber okyanus parıltılı neon mavi görünüm.</li>
                                            <li>🌅 <strong>Siber Şafak (Synthwave):</strong> 80'ler retro synthwave neon pembe & turuncu siber tema.</li>
                                        </ul>
                                    </div>
                                    <div style="background:rgba(168,85,247,0.12); padding:8px 10px; border-radius:8px; border-left:3px solid #c084fc; margin-bottom:4px;">
                                        <strong style="color:#c084fc;">v2.0.2.0</strong> — 5 Yeni Discord Değiştirici Özellik 🚀
                                        <ul style="margin:4px 0 0 16px; padding:0; line-height:1.5; color:#cbd5e1;">
                                            <li>🎨 <strong>Discord Teması & AMOLED:</strong> Pure AMOLED Siyah, Neon Mor ve Kristal Mavi ile Discord temasını doğrudan değiştirme.</li>
                                            <li>🌈 <strong>Renkli & Görünmez Mesajlar:</strong> Kırmızı, yeşil, mavi ANSI renkli kodlar ve görünmez boş mesaj araçları.</li>
                                            <li>🎭 <strong>Bio & Durum Şekillendirici:</strong> 6 farklı özel font ve sembollerle Discord bio/durum oluşturucu.</li>
                                            <li>🧹 <strong>Bildirim Temizleyici & Font:</strong> Tek tıkla tüm kırmızı bildirimleri temizleme ve Discord fontunu değiştirme.</li>
                                        </ul>
                                    </div>
                                    <div style="background:rgba(56,189,248,0.08); padding:8px 10px; border-radius:8px; border-left:3px solid #38bdf8; margin-bottom:4px;">
                                        <strong style="color:#38bdf8;">v2.0.1.1</strong> — Minik İyileştirme
                                        <ul style="margin:4px 0 0 16px; padding:0; line-height:1.5; color:#cbd5e1;">
                                            <li>🛡️ <strong>5 Katmanlı Kalkan:</strong> Tüm dosyalara Hex Obfuscation ve Anti-AI koruma tuzağı entegre edildi.</li>
                                        </ul>
                                    </div>
                                    <div style="background:rgba(255,255,255,0.04); padding:8px 10px; border-radius:8px; border-left:3px solid #10b981;">
                                        <strong style="color:#34d399;">v2.0.1.0</strong> — 16 Ağustos 2026
                                        <ul style="margin:4px 0 0 16px; padding:0; line-height:1.5; color:#cbd5e1;">
                                            <li>🚀 <strong>Otomatik Uzaktan Güncelleme Çekirdeği:</strong> Tek tıkla güncelleme kurma ve sayfa yenileme desteği eklendi.</li>
                                            <li>📢 <strong>Güncellemeler (Updates Center) Sekmesi:</strong> Yeni sürüm bildirimi ve canlı changelog paneli eklendi.</li>
                                            <li>🛠️ <strong>✓ SEÇİLİ Rozet Fixi:</strong> Kartlardaki rozet kesilme sorunu giderildi.</li>
                                            <li>🏷️ <strong>4 Haneli Sürüm Sistemi:</strong> X.Y.Z.W formatında dinamik versiyon yönetimi kuruldu.</li>
                                            <li>⚡ <strong>NEXSUS CORE Rebrand:</strong> Bütün panel isimleri, loglar ve butonlar siber temaya geçirildi.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- GIFTING BADGES PAGE -->
                        <div id="page-gifting" style="display:none; flex-direction:column; gap:10px;">
                            <div style="font-size:13px; font-weight:900; color:#fff;">🎁 Hediye Rozetleri Kataloğu</div>
                            <div style="font-size:10.5px; color:#cbd5e1; line-height:1.4;">Hediye göndererek profil rozetini yükselt! Her rozet farklı sayıda hediye gerektirir.</div>
                            <div class="dqu-gift-grid">
                                <div class="dqu-gift-card" data-tier="1">
                                    <div class="dqu-gift-img-wrap"><img src="${giftPatronUrl}" class="dqu-gift-icon" alt="Patron"></div>
                                    <div class="dqu-gift-name" style="color:#a78bfa;">Patron</div>
                                    <div class="dqu-gift-req">1 Hediye</div>
                                    <div class="dqu-gift-tooltip">🔮 1 Adet Hediye Gönderildiğinde Açılır.</div>
                                </div>
                                <div class="dqu-gift-card" data-tier="2">
                                    <div class="dqu-gift-img-wrap"><img src="${giftChampionUrl}" class="dqu-gift-icon" alt="Champion"></div>
                                    <div class="dqu-gift-name" style="color:#c084fc;">Champion</div>
                                    <div class="dqu-gift-req">2 Hediye</div>
                                    <div class="dqu-gift-tooltip">🔮 2 Adet Hediye Gönderildiğinde Açılır.</div>
                                </div>
                                <div class="dqu-gift-card" data-tier="3">
                                    <div class="dqu-gift-img-wrap"><img src="${giftLuminaryUrl}" class="dqu-gift-icon" alt="Luminary"></div>
                                    <div class="dqu-gift-name" style="color:#e879f9;">Luminary</div>
                                    <div class="dqu-gift-req">3 Hediye</div>
                                    <div class="dqu-gift-tooltip">🔮 3 Adet Hediye Gönderildiğinde Açılır.</div>
                                </div>
                                <div class="dqu-gift-card" data-tier="4">
                                    <div class="dqu-gift-img-wrap"><img src="${giftIconUrl}" class="dqu-gift-icon" alt="Icon"></div>
                                    <div class="dqu-gift-name" style="color:#f472b6;">Icon</div>
                                    <div class="dqu-gift-req">5 Hediye</div>
                                    <div class="dqu-gift-tooltip">🔮 5 Adet Hediye Gönderildiğinde Açılır.</div>
                                </div>
                                <div class="dqu-gift-card" data-tier="5">
                                    <div class="dqu-gift-img-wrap"><img src="${giftHeroUrl}" class="dqu-gift-icon" alt="Hero"></div>
                                    <div class="dqu-gift-name" style="color:#38bdf8;">Hero</div>
                                    <div class="dqu-gift-req">10 Hediye</div>
                                    <div class="dqu-gift-tooltip">🔮 10 Adet Hediye Gönderildiğinde Açılır.</div>
                                </div>
                                <div class="dqu-gift-card" data-tier="6">
                                    <div class="dqu-gift-img-wrap"><img src="${giftLegendUrl}" class="dqu-gift-icon" alt="Legend"></div>
                                    <div class="dqu-gift-name" style="color:#fbbf24;">Legend</div>
                                    <div class="dqu-gift-req">20 Hediye</div>
                                    <div class="dqu-gift-tooltip">🔮 20 Adet Hediye Gönderildiğinde Açılır.</div>
                                </div>
                            </div>
                        </div>

                        <!-- PRIVACY PAGE -->
                        <div id="page-privacy" style="display:none; flex-direction:column; gap:10px;">
                            <div style="font-size:12px; font-weight:800; color:#fff;" id="priv-title-text">${t("privTitle")}</div>
                            <div style="font-size:10.5px; color:#94a3b8;" id="priv-sub-text">${t("privSub")}</div>
                            <div class="dqu-hs-grid">
                                <div class="dqu-hs-card ${savedPrivacyVal === 1 ? 'selected' : ''}" id="priv-card-1" data-mode="private">
                                    <div style="font-size:24px;">🔒</div>
                                    <div class="dqu-hs-name" style="color:#f472b6;" id="priv-name-1">${t("priv1Name")}</div>
                                    <div class="dqu-hs-desc" id="priv-desc-1">${t("priv1Desc")}</div>
                                </div>
                                <div class="dqu-hs-card ${savedPrivacyVal === 2 ? 'selected' : ''}" id="priv-card-2" data-mode="limited">
                                    <div style="font-size:24px;">👥</div>
                                    <div class="dqu-hs-name" style="color:#fbbf24;" id="priv-name-2">${t("priv2Name")}</div>
                                    <div class="dqu-hs-desc" id="priv-desc-2">${t("priv2Desc")}</div>
                                </div>
                                <div class="dqu-hs-card ${savedPrivacyVal === 3 ? 'selected' : ''}" id="priv-card-3" data-mode="public">
                                    <div style="font-size:24px;">🌐</div>
                                    <div class="dqu-hs-name" style="color:#34d399;" id="priv-name-3">${t("priv3Name")}</div>
                                    <div class="dqu-hs-desc" id="priv-desc-3">${t("priv3Desc")}</div>
                                </div>
                            </div>
                            <button class="dqu-btn dqu-btn-primary" id="btn-priv-apply" style="margin-top:4px;">🔒 Gizlilik Ayarını Uygula</button>
                        </div>

                        <!-- BADGES PAGE -->
                        <div id="page-badges" style="display:none; flex-direction:column; gap:8px;">
                            <div style="font-size:12px; font-weight:800; color:#fff;" id="badges-title-text">${t("badgesTitle")}</div>
                            <div style="font-size:10px; color:#94a3b8;" id="badges-sub-text">${t("badgesSub")}</div>
                            <div id="dqu-badge-encyclopedia-container" style="display:flex; flex-direction:column; gap:6px; max-height:220px; overflow-y:auto; padding-right:4px;">
                                <div style="font-size:10px; font-weight:900; color:#a78bfa; margin-top:4px;" id="badges-section-nitro">${t("badgeNitroSection")}</div>
                                <div class="dqu-badge-item"><img src="${nitroBronzeUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Bronze</div><div class="dqu-badge-how" id="badge-how-n1">${t("howNitro1")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${nitroSilverUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Silver</div><div class="dqu-badge-how" id="badge-how-n3">${t("howNitro3")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${nitroGoldUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Gold</div><div class="dqu-badge-how" id="badge-how-n6">${t("howNitro6")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${nitroPlatinumUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Platinum</div><div class="dqu-badge-how" id="badge-how-n12">${t("howNitro12")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${nitroDiamondUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Diamond</div><div class="dqu-badge-how" id="badge-how-n24">${t("howNitro24")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${nitroEmeraldUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Emerald</div><div class="dqu-badge-how" id="badge-how-n24">${t("howNitro24")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${nitroRubyUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Ruby</div><div class="dqu-badge-how" id="badge-how-n36">${t("howNitro36")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${nitroOpalUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Opal</div><div class="dqu-badge-how" id="badge-how-n48">${t("howNitro48")}</div></div></div>
                                <div style="font-size:10px; font-weight:900; color:#9C84EF; margin-top:8px;" id="badges-section-hs">${t("badgeHsSection")}</div>
                                <div class="dqu-badge-item"><img src="https://cdn.discordapp.com/badge-icons/8a88d63823d8a71cd5e390baa45efa02.png" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title" style="color:#9C84EF;">HypeSquad Bravery</div><div class="dqu-badge-how" id="badge-how-hs1">${t("howHsSelect")}</div></div></div>
                                <div class="dqu-badge-item"><img src="https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title" style="color:#F47B67;">HypeSquad Brilliance</div><div class="dqu-badge-how" id="badge-how-hs2">${t("howHsSelect")}</div></div></div>
                                <div class="dqu-badge-item"><img src="https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title" style="color:#45DDC0;">HypeSquad Balance</div><div class="dqu-badge-how" id="badge-how-hs3">${t("howHsSelect")}</div></div></div>
                                <div style="font-size:10px; font-weight:900; color:#34d399; margin-top:8px;" id="badges-section-other">${t("badgeOtherSection")}</div>
                                <div class="dqu-badge-item"><img src="${badgeActiveDevUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Active Developer</div><div class="dqu-badge-how" id="badge-how-activedev">${t("howActiveDev")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${badgeEarlyUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Early Supporter</div><div class="dqu-badge-how" id="badge-how-early">${t("howEarlySupporter")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${badgeBug1Url}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Bug Hunter Lvl 1</div><div class="dqu-badge-how" id="badge-how-bug1">${t("howBug1")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${badgeBug2Url}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title" style="color:#fbbf24;">Bug Hunter Lvl 2</div><div class="dqu-badge-how" id="badge-how-bug2">${t("howBug2")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${badgePartnerUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Discord Partner</div><div class="dqu-badge-how" id="badge-how-partner">${t("howPartner")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${badgeStaffUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Discord Staff</div><div class="dqu-badge-how" id="badge-how-staff">${t("howStaff")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${badgeQuestUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title" id="badge-title-quest">${t("badgeQuestTitle")}</div><div class="dqu-badge-how" id="badge-how-quest">${t("howQuest")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${badgeHsEventsUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">HypeSquad Events</div><div class="dqu-badge-how" id="badge-how-hsevents">${t("howHsEvents")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${badgeOrigUserUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Originally Known As</div><div class="dqu-badge-how" id="badge-how-origuser">${t("howOrigUser")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${badgeAutoModUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">AutoMod Master</div><div class="dqu-badge-how" id="badge-how-automod">${t("howAutoMod")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${badgeOrbsUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Orbs Apprentice</div><div class="dqu-badge-how" id="badge-how-orbs">${t("howOrbs")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${badgeMeadowUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Last Meadow Leaf</div><div class="dqu-badge-how" id="badge-how-meadow">${t("howMeadow")}</div></div></div>
                                <div class="dqu-badge-item"><img src="${badgeCommandsUrl}" class="dqu-badge-img"><div class="dqu-badge-info"><div class="dqu-badge-title">Supports Commands</div><div class="dqu-badge-how" id="badge-how-commands">${t("howCommands")}</div></div></div>
                            </div>
                        </div>

                        <!-- ACHIEVEMENTS PAGE -->
                        <div id="page-achievements" style="display:none; flex-direction:column; gap:8px;">
                            <div style="font-size:12px; font-weight:800; color:#fff;" id="ach-title-text">${t("achTitle")}</div>
                            <div style="font-size:10px; color:#94a3b8;" id="ach-sub-text">${t("achSub")}</div>
                            <div id="dqu-achievements-container" style="display:flex; flex-direction:column; gap:6px; max-height:220px; overflow-y:auto; padding-right:4px;">
                                <!-- Dynamically generated achievements -->
                            </div>
                        </div>

                        <!-- QUICK NOTES PAGE -->
                        <div id="page-notes" style="display:none; flex-direction:column; gap:8px;">
                            <div style="font-size:13px; font-weight:900; color:#fff;">📝 Hızlı Notlar & Görev Takibi</div>
                            <textarea id="dqu-notes-area" placeholder="Görev kodlarını, hatırlatmaları ve notlarını buraya yaz..." style="width:100%; height:130px; background:rgba(0,0,0,0.5); border:1px solid rgba(168,85,247,0.3); border-radius:10px; padding:10px; color:#fff; font-size:11px; outline:none; resize:none;"></textarea>
                            <div style="display:flex; gap:6px;">
                                <button class="dqu-btn dqu-btn-primary" id="btn-save-notes">💾 Kaydet</button>
                                <button class="dqu-opt-btn" id="btn-clear-notes">🧹 Temizle</button>
                            </div>
                        </div>

                        <!-- COMBINED GAMES PAGE (Clicker + Snake) -->
                        <div id="page-games" style="display:none; flex-direction:column; gap:10px;">
                            <div style="font-size:13px; font-weight:900; color:#fff;">🎮 Mini Oyunlar Merkezi</div>
                            <div class="dqu-clicker-box" id="dqu-clicker-box" style="padding:12px;">
                                <div class="dqu-clicker-stats">
                                    <div><span id="clicker-lbl-score">${t("clickerScoreLabel")}</span>: <strong style="color:#34d399;" id="clicker-score-num">0</strong></div>
                                    <div><span id="clicker-lbl-rank">${t("clickerRankLabel")}</span>: <strong style="color:#fbbf24;" id="clicker-rank-text">${t("rankBeginner")}</strong></div>
                                </div>
                                <button class="dqu-clicker-big-btn" id="dqu-clicker-btn" style="width:110px; height:110px;">
                                    <span style="font-size:24px;">⚡</span>
                                    <span>${t("clickerBtn")}</span>
                                </button>
                            </div>
                            <div class="dqu-snake-box">
                                <div style="display:flex; justify-content:space-between; width:100%; font-size:11px; font-weight:800; color:#c4b5fd;">
                                    <span>🐍 Snake Skor: <strong style="color:#34d399;" id="snake-score">0</strong></span>
                                    <span>🏆 Rekor: <strong style="color:#fbbf24;" id="snake-highscore">0</strong></span>
                                </div>
                                <canvas id="dqu-snake-canvas" width="220" height="130"></canvas>
                                <button class="dqu-btn dqu-btn-primary" id="btn-snake-start" style="padding:6px 14px; font-size:11px; width:100%;">🎮 Oyunu Başlat</button>
                            </div>
                        </div>

                        <!-- LOGS PAGE -->
                        <div id="page-logs" style="display:none; flex-direction:column; gap:6px;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span style="font-size:11px; font-weight:700; color:#c7d2fe;" id="term-head">${t("terminalHeader")}</span>
                                <div style="display:flex; gap:5px;">
                                    <button class="dqu-opt-btn" id="btn-copy-logs">📋 Logları Kopyala</button>
                                    <button class="dqu-opt-btn" id="btn-clear-logs">${t("clearLogs")}</button>
                                </div>
                            </div>
                            <div class="dqu-terminal" id="dqu-terminal">
                                <div style="color:#22c55e;" id="sys-ready-msg">${t("sysReady")}</div>
                            </div>
                        </div>

                        <!-- SETTINGS PAGE (Includes Ambians Soundboard Generator) -->
                        <div id="page-settings" style="display:none; flex-direction:column; gap:10px;">
                            <div class="dqu-settings-box">
                                <div class="dqu-setting-row" style="flex-direction:column; align-items:flex-start; gap:6px;">
                                    <span style="font-weight:700; color:#e0e7ff;" id="lbl-theme">🎨 Panel Görünüm Teması:</span>
                                    <div style="display:flex; gap:5px; flex-wrap:wrap; width:100%;">
                                        <button class="dqu-opt-btn" id="opt-theme-purple">💜 Mor Tema (Ana)</button>
                                        <button class="dqu-opt-btn" id="opt-theme-dark">🖤 Discord Mat Siyah (Sade)</button>
                                        <button class="dqu-opt-btn" id="opt-theme-cyan">🌊 Arktik Neon Mavi</button>
                                        <button class="dqu-opt-btn" id="opt-theme-synthwave">🌅 Siber Şafak</button>
                                        <button class="dqu-opt-btn" id="opt-theme-red">🔴 Kırmızı Tema</button>
                                        <button class="dqu-opt-btn" id="opt-theme-green">💚 Yeşil Tema</button>
                                        <button class="dqu-opt-btn" id="opt-theme-yellow">💛 Sarı Tema</button>
                                    </div>
                                </div>
                                <div class="dqu-setting-row" style="flex-direction:column; align-items:flex-start; gap:6px; background:rgba(0,0,0,0.3); padding:10px; border-radius:10px; border:1px solid rgba(168,85,247,0.25);">
                                    <span style="font-weight:800; color:#c084fc;">🎵 Focus Ambians Synthesizer (Odaklanma Sesleri):</span>
                                    <div class="dqu-soundboard-grid" style="width:100%; display:grid; grid-template-columns:repeat(3, 1fr); gap:6px;">
                                        <button class="dqu-sound-btn" id="btn-sound-rain"><span>🌧️</span><span>Yağmur</span></button>
                                        <button class="dqu-sound-btn" id="btn-sound-space"><span>🌌</span><span>Uzay Lo-Fi</span></button>
                                        <button class="dqu-sound-btn" id="btn-sound-waves"><span>🌊</span><span>Okyanus</span></button>
                                    </div>
                                    <button class="dqu-btn dqu-btn-danger" id="btn-sound-stop" style="display:none; width:100%; margin-top:4px; font-size:10px; padding:4px 8px;">⏹️ Sesi Kapat</button>
                                </div>
                                <div class="dqu-setting-row">
                                    <span style="font-weight:700;" id="lbl-mode">${t("modeLabel")}</span>
                                    <span style="font-weight:800; color:#34d399; font-size:11px; background:rgba(34,197,94,0.15); padding:5px 12px; border-radius:8px; border:1px solid rgba(34,197,94,0.3);" id="lbl-mode-val">${t("modeValue")}</span>
                                </div>
                                <div class="dqu-setting-row">
                                    <span style="font-weight:700;" id="lbl-sound">${t("soundLabel")}</span>
                                    <button class="dqu-opt-btn ${savedSound ? 'active' : ''}" id="opt-sound-toggle">${savedSound ? '🔔 Açık' : '🔕 Kapalı'}</button>
                                </div>
                                <div class="dqu-setting-row">
                                    <span style="font-weight:700;" id="lbl-notify">${t("notifyLabel")}</span>
                                    <button class="dqu-opt-btn ${savedNotify ? 'active' : ''}" id="opt-notify-toggle">${savedNotify ? '🔔 Açık' : '🔕 Kapalı'}</button>
                                </div>
                                <div class="dqu-setting-row">
                                    <span style="font-weight:700;" id="lbl-lang">${t("langLabel")}</span>
                                    <div style="display:flex; gap:5px;">
                                        <button class="dqu-opt-btn ${userSettings.lang === 'tr' ? 'active' : ''}" id="opt-lang-tr">🇹🇷 TR</button>
                                        <button class="dqu-opt-btn ${userSettings.lang === 'en' ? 'active' : ''}" id="opt-lang-en">🇬🇧 EN</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="dqu-credits" id="lbl-credits">
                            ${t("creatorText")}
                        </div>
                        <div class="dqu-actions">
                            <button class="dqu-btn dqu-btn-primary" id="dqu-start-btn" style="flex:2;">${t("startBtn")}</button>
                            <button class="dqu-btn dqu-btn-danger" id="dqu-stop-btn" style="flex:1;">⏸️ Durdur</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function attachEventListeners(uiContainer, triggerBtn, welcomeModal) {
        // Draggable window implementation (Touch + Mouse support for mobile!)
        const dragHandle = document.getElementById("dqu-drag-handle");
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        if (dragHandle) {
            const handleStart = (clientX, clientY) => {
                isDragging = true;
                startX = clientX;
                startY = clientY;
                const rect = uiContainer.getBoundingClientRect();
                initialLeft = rect.left;
                initialTop = rect.top;
            };

            const handleMove = (clientX, clientY) => {
                if (!isDragging) return;
                const dx = clientX - startX;
                const dy = clientY - startY;
                const newX = Math.max(0, Math.min(window.innerWidth - uiContainer.offsetWidth, initialLeft + dx));
                const newY = Math.max(0, Math.min(window.innerHeight - uiContainer.offsetHeight, initialTop + dy));

                uiContainer.style.left = newX + "px";
                uiContainer.style.top = newY + "px";
                uiContainer.style.right = "auto";
                uiContainer.style.bottom = "auto";

                localStorage.setItem('dqu_pos_x', Math.round(newX));
                localStorage.setItem('dqu_pos_y', Math.round(newY));
            };

            dragHandle.onmousedown = (e) => {
                if (e.target.closest(".dqu-header-actions")) return;
                handleStart(e.clientX, e.clientY);
                const onMouseMove = (ev) => handleMove(ev.clientX, ev.clientY);
                const onMouseUp = () => {
                    isDragging = false;
                    document.removeEventListener("mousemove", onMouseMove);
                    document.removeEventListener("mouseup", onMouseUp);
                };
                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);
            };

            dragHandle.ontouchstart = (e) => {
                if (e.target.closest(".dqu-header-actions") || !e.touches[0]) return;
                handleStart(e.touches[0].clientX, e.touches[0].clientY);
                const onTouchMove = (ev) => {
                    if (ev.touches[0]) handleMove(ev.touches[0].clientX, ev.touches[0].clientY);
                };
                const onTouchEnd = () => {
                    isDragging = false;
                    document.removeEventListener("touchmove", onTouchMove);
                    document.removeEventListener("touchend", onTouchEnd);
                };
                document.addEventListener("touchmove", onTouchMove, { passive: false });
                document.addEventListener("touchend", onTouchEnd);
            };
        }

        // Minimize / Restore floating dock functionality
        const closeXBtn = document.getElementById("dqu-close-x");
        if (closeXBtn) {
            closeXBtn.onclick = (e) => {
                if (e) e.stopPropagation();
                uiContainer.classList.add("dqu-minimized");
                uiContainer.style.display = "none";
                if (triggerBtn) triggerBtn.style.display = "flex";
                log(t("logDockMin"), "info");
            };
        }

        if (triggerBtn) {
            triggerBtn.onclick = (e) => {
                if (e) e.stopPropagation();
                uiContainer.classList.remove("dqu-minimized");
                uiContainer.style.display = "flex";
                triggerBtn.style.display = "none";
                log(t("logDockOpen"), "info");
            };
        }

        // Tab switching with tab state memory & Hiding summary/stats/filter/actions on other tabs
        const savedTab = localStorage.getItem('dqu_active_tab') || 'quests';

        // Smooth horizontal mouse wheel & drag scrolling for tab bar
        const navTabs = uiContainer.querySelector('.dqu-nav-tabs');
        if (navTabs) {
            navTabs.addEventListener('wheel', (e) => {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    navTabs.scrollLeft += e.deltaY * 0.9;
                }
            }, { passive: false });

            let isTabDragging = false;
            let tabStartX, tabScrollLeft;

            navTabs.onmousedown = (e) => {
                isTabDragging = true;
                tabStartX = e.pageX - navTabs.offsetLeft;
                tabScrollLeft = navTabs.scrollLeft;
            };
            navTabs.onmouseleave = () => { isTabDragging = false; };
            navTabs.onmouseup = () => { isTabDragging = false; };
            navTabs.onmousemove = (e) => {
                if (!isTabDragging) return;
                e.preventDefault();
                const x = e.pageX - navTabs.offsetLeft;
                const walk = (x - tabStartX) * 1.5;
                navTabs.scrollLeft = tabScrollLeft - walk;
            };
            // 3D Parallax Mouse Tilt Tracking for Tab Buttons
            uiContainer.querySelectorAll(".dqu-tab-btn").forEach(btn => {
                btn.addEventListener("mousemove", (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -14;
                    const rotateY = ((x - centerX) / centerX) * 14;
                    btn.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px) scale(1.08)`;
                });
                btn.addEventListener("mouseleave", () => {
                    if (btn.classList.contains("active")) {
                        btn.style.transform = `translateZ(8px) scale(1.05)`;
                    } else {
                        btn.style.transform = `perspective(400px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)`;
                    }
                });
            });
        }
        
        const switchTab = (tab) => {
            if (tab === "betabadges") tab = "quests";
            localStorage.setItem('dqu_active_tab', tab);
            const isQuests = tab === 'quests';

            ["quests", "tools", "hypesquad", "updates", "gifting", "privacy", "achievements", "badges", "notes", "games", "logs", "settings"].forEach(tName => {
                const btn = document.getElementById(`tab-btn-${tName}`);
                const page = document.getElementById(`page-${tName}`);
                if (btn && page) {
                    btn.classList.toggle("active", tName === tab);
                    page.style.display = tName === tab ? "flex" : "none";
                }
            });

            const summaryBar = uiContainer.querySelector(".dqu-summary-bar");
            const statsRow = uiContainer.querySelector(".dqu-stats-row");
            const filterBar = uiContainer.querySelector(".dqu-filter-bar");
            const actionsBar = uiContainer.querySelector(".dqu-actions");

            if (summaryBar) summaryBar.style.display = isQuests ? "flex" : "none";
            if (statsRow) statsRow.style.display = isQuests ? "flex" : "none";
            if (filterBar) filterBar.style.display = isQuests ? "flex" : "none";
            if (actionsBar) actionsBar.style.display = isQuests ? "flex" : "none";

            if (tab === "achievements") renderAchievements();
            if (tab === "gifting") unlockAchievement('gifting_guide');
            if (tab === "games") {
                initSnakeGame();
                updateClickerUI();
            }
        };

        const bindClick = (id, fn) => {
            const el = document.getElementById(id);
            if (el) el.onclick = fn;
        };

        bindClick("tab-btn-quests", () => switchTab("quests"));
        bindClick("tab-btn-tools", () => switchTab("tools"));
        bindClick("tab-btn-hypesquad", () => switchTab("hypesquad"));
        bindClick("tab-btn-updates", () => switchTab("updates"));
        bindClick("tab-btn-privacy", () => switchTab("privacy"));
        bindClick("tab-btn-achievements", () => switchTab("achievements"));
        bindClick("tab-btn-badges", () => switchTab("badges"));
        bindClick("tab-btn-notes", () => switchTab("notes"));
        bindClick("tab-btn-games", () => switchTab("games"));
        bindClick("tab-btn-gifting", () => switchTab("gifting"));
        bindClick("tab-btn-logs", () => switchTab("logs"));
        bindClick("tab-btn-settings", () => switchTab("settings"));

        // ─── 5 DISCORD CLIENT TOOLS & MODIFIERS LOGIC ───
        // 1. Discord Client Themes (AMOLED, Neon, Blue, Reset with Full Cyber Glow & Glassmorphism)
        const applyDiscordClientTheme = (theme) => {
            let styleEl = document.getElementById("dqu-discord-client-theme");
            if (!styleEl) {
                styleEl = document.createElement("style");
                styleEl.id = "dqu-discord-client-theme";
                document.head.appendChild(styleEl);
            }
            if (theme === 'amoled') {
                styleEl.innerHTML = `
                    /* 🖤 NEXSUS PURE AMOLED OBSIDIAN THEME */
                    html, body, #app-mount {
                        background: #000000 !important;
                    }
                    .theme-dark, .theme-light,
                    [class*="appMount_"], [class*="app_"], [class*="layers_"], [class*="layer_"],
                    [class*="container_"], [class*="chat_"], [class*="sidebar_"], [class*="panels_"],
                    [class*="scroller_"], [class*="content_"], [class*="standardSidebarView_"],
                    [class*="members_"], [class*="guilds_"], [class*="tree_"], [class*="pageWrapper_"] {
                        background: #000000 !important;
                        background-color: #000000 !important;
                        --background-primary: #000000 !important;
                        --background-secondary: #040404 !important;
                        --background-secondary-alt: #070707 !important;
                        --background-tertiary: #000000 !important;
                        --background-accent: #141414 !important;
                        --background-floating: #0a0a0a !important;
                        --channeltextarea-background: #080808 !important;
                        --activity-card-background: #050505 !important;
                        --input-background: #080808 !important;
                        --text-normal: #f8fafc !important;
                        --text-muted: #94a3b8 !important;
                        --interactive-normal: #cbd5e1 !important;
                        --interactive-hover: #ffffff !important;
                        --interactive-active: #c084fc !important;
                    }
                    /* Cyberpunk glowing chat box */
                    [class*="channelTextArea_"], [class*="scrollableContainer_"] {
                        border: 1px solid rgba(192, 132, 252, 0.45) !important;
                        box-shadow: 0 0 20px rgba(192, 132, 252, 0.18) !important;
                        border-radius: 12px !important;
                        background: rgba(10, 10, 15, 0.95) !important;
                    }
                    /* Selected channel cyber pill */
                    [class*="modeSelected_"] [class*="link_"] {
                        background: linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(124, 58, 237, 0.5) 100%) !important;
                        border: 1px solid #c084fc !important;
                        box-shadow: 0 0 16px rgba(192, 132, 252, 0.4) !important;
                        border-radius: 8px !important;
                    }
                    /* Sleek glowing scrollbars */
                    ::-webkit-scrollbar { width: 6px !important; }
                    ::-webkit-scrollbar-thumb {
                        background: linear-gradient(180deg, #7c3aed 0%, #c084fc 100%) !important;
                        border-radius: 99px !important;
                        box-shadow: 0 0 10px rgba(192, 132, 252, 0.6) !important;
                    }
                `;
                localStorage.setItem('dqu_dc_theme', 'amoled');
                showToast("🖤 Discord Teması", "Pure AMOLED Siyah teması siber efektlerle uygulandı!", "success");
                log("🎨 [Tema]: Discord Pure AMOLED Siyah & Siber Efektler Aktif!", "success");
            } else if (theme === 'neon') {
                styleEl.innerHTML = `
                    /* 💜 NEXSUS CYBERPUNK NEON VIOLET GLASS THEME */
                    html, body, #app-mount {
                        background: radial-gradient(circle at 10% 20%, rgba(124, 58, 237, 0.35) 0%, transparent 40%),
                                    radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.25) 0%, transparent 40%),
                                    #090317 !important;
                    }
                    .theme-dark, .theme-light,
                    [class*="appMount_"], [class*="app_"], [class*="layers_"], [class*="layer_"],
                    [class*="container_"], [class*="chat_"], [class*="sidebar_"], [class*="panels_"],
                    [class*="content_"], [class*="standardSidebarView_"], [class*="pageWrapper_"] {
                        background: rgba(13, 6, 31, 0.82) !important;
                        backdrop-filter: blur(16px) !important;
                        --background-primary: rgba(13, 6, 31, 0.82) !important;
                        --background-secondary: rgba(22, 10, 51, 0.88) !important;
                        --background-secondary-alt: rgba(18, 8, 43, 0.88) !important;
                        --background-tertiary: rgba(9, 3, 23, 0.95) !important;
                        --background-accent: #3b146e !important;
                        --background-floating: #230e4f !important;
                        --channeltextarea-background: rgba(35, 14, 79, 0.9) !important;
                        --activity-card-background: rgba(26, 11, 61, 0.8) !important;
                        --text-normal: #f8fafc !important;
                        --text-muted: #c4b5fd !important;
                        --interactive-normal: #e2e8f0 !important;
                        --interactive-hover: #ffffff !important;
                        --interactive-active: #f472b6 !important;
                    }
                    /* Neon Purple glowing chat box */
                    [class*="channelTextArea_"], [class*="scrollableContainer_"] {
                        border: 1px solid rgba(236, 72, 153, 0.6) !important;
                        box-shadow: 0 0 24px rgba(236, 72, 153, 0.25), 0 0 12px rgba(168, 85, 247, 0.35) !important;
                        border-radius: 14px !important;
                        background: rgba(25, 10, 58, 0.95) !important;
                    }
                    /* Selected channel neon pill */
                    [class*="modeSelected_"] [class*="link_"] {
                        background: linear-gradient(135deg, rgba(236, 72, 153, 0.35) 0%, rgba(168, 85, 247, 0.55) 100%) !important;
                        border: 1px solid #f472b6 !important;
                        box-shadow: 0 0 20px rgba(236, 72, 153, 0.5) !important;
                        border-radius: 8px !important;
                    }
                    /* Radiant Pink-Purple Scrollbars */
                    ::-webkit-scrollbar { width: 6px !important; }
                    ::-webkit-scrollbar-thumb {
                        background: linear-gradient(180deg, #ec4899 0%, #a855f7 100%) !important;
                        border-radius: 99px !important;
                        box-shadow: 0 0 14px rgba(236, 72, 153, 0.8) !important;
                    }
                `;
                localStorage.setItem('dqu_dc_theme', 'neon');
                showToast("💜 Discord Teması", "Neon Mor Cam & Parıltı Efektleri uygulandı!", "success");
                log("🎨 [Tema]: Discord Neon Mor Cam & Fütüristik Efektler Aktif!", "success");
            } else if (theme === 'blue') {
                styleEl.innerHTML = `
                    /* 💎 NEXSUS CYBER MATRIX CRYSTAL BLUE THEME */
                    html, body, #app-mount {
                        background: radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.35) 0%, transparent 45%),
                                    radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 45%),
                                    #020b18 !important;
                    }
                    .theme-dark, .theme-light,
                    [class*="appMount_"], [class*="app_"], [class*="layers_"], [class*="layer_"],
                    [class*="container_"], [class*="chat_"], [class*="sidebar_"], [class*="panels_"],
                    [class*="content_"], [class*="standardSidebarView_"], [class*="pageWrapper_"] {
                        background: rgba(3, 16, 36, 0.85) !important;
                        backdrop-filter: blur(16px) !important;
                        --background-primary: rgba(3, 16, 36, 0.85) !important;
                        --background-secondary: rgba(5, 26, 56, 0.9) !important;
                        --background-secondary-alt: rgba(4, 21, 46, 0.9) !important;
                        --background-tertiary: rgba(2, 10, 24, 0.95) !important;
                        --background-accent: #0c427d !important;
                        --background-floating: #093366 !important;
                        --channeltextarea-background: rgba(7, 36, 79, 0.9) !important;
                        --activity-card-background: rgba(5, 26, 56, 0.8) !important;
                        --text-normal: #f0f9ff !important;
                        --text-muted: #7dd3fc !important;
                        --interactive-normal: #bae6fd !important;
                        --interactive-hover: #ffffff !important;
                        --interactive-active: #38bdf8 !important;
                    }
                    /* Cyan glowing chat box */
                    [class*="channelTextArea_"], [class*="scrollableContainer_"] {
                        border: 1px solid rgba(56, 189, 248, 0.6) !important;
                        box-shadow: 0 0 24px rgba(56, 189, 248, 0.25) !important;
                        border-radius: 14px !important;
                        background: rgba(4, 22, 51, 0.95) !important;
                    }
                    /* Selected channel cyber cyan pill */
                    [class*="modeSelected_"] [class*="link_"] {
                        background: linear-gradient(135deg, rgba(6, 182, 212, 0.35) 0%, rgba(59, 130, 246, 0.55) 100%) !important;
                        border: 1px solid #38bdf8 !important;
                        box-shadow: 0 0 20px rgba(56, 189, 248, 0.5) !important;
                        border-radius: 8px !important;
                    }
                    /* Cyan matrix scrollbars */
                    ::-webkit-scrollbar { width: 6px !important; }
                    ::-webkit-scrollbar-thumb {
                        background: linear-gradient(180deg, #06b6d4 0%, #3b82f6 100%) !important;
                        border-radius: 99px !important;
                        box-shadow: 0 0 14px rgba(6, 182, 212, 0.8) !important;
                    }
                `;
                localStorage.setItem('dqu_dc_theme', 'blue');
                showToast("💎 Discord Teması", "Kristal Siber Mavi & Matriks Efektleri uygulandı!", "success");
                log("🎨 [Tema]: Discord Kristal Siber Mavi Aktif!", "success");
            } else {
                styleEl.innerHTML = ``;
                localStorage.removeItem('dqu_dc_theme');
                showToast("🔄 Discord Teması", "Varsayılan Discord temasına dönüldü.", "info");
                log("🎨 [Tema]: Varsayılan Discord Teması Geri Yüklendi.", "info");
            }
        };

        bindClick("btn-dc-theme-amoled", () => applyDiscordClientTheme('amoled'));
        bindClick("btn-dc-theme-neon", () => applyDiscordClientTheme('neon'));
        bindClick("btn-dc-theme-blue", () => applyDiscordClientTheme('blue'));
        bindClick("btn-dc-theme-reset", () => applyDiscordClientTheme('reset'));

        // Restore saved Discord Client Theme
        const savedDcTheme = localStorage.getItem('dqu_dc_theme');
        if (savedDcTheme) applyDiscordClientTheme(savedDcTheme);

        // 2. Color & Invisible Text
        const copyToClipboard = (text, successTitle) => {
            navigator.clipboard.writeText(text).then(() => {
                showToast(successTitle, "Kopyalandı! Discord sohbetine yapıştırabilirsiniz.", "success");
            }).catch(() => {
                showToast("⚠️ Hata", "Panoya kopyalama başarısız.", "error");
            });
        };

        const formatAnsi = (text, code) => `\`\`\`ansi\n\u001b[${code}m${text}\u001b[0m\n\`\`\``;

        bindClick("btn-msg-red", () => {
            const txt = (document.getElementById("input-color-msg")?.value || "Örnek Kırmızı Mesaj").trim();
            copyToClipboard(formatAnsi(txt, "0;31"), "🔴 Kırmızı Yazı");
        });
        bindClick("btn-msg-green", () => {
            const txt = (document.getElementById("input-color-msg")?.value || "Örnek Yeşil Mesaj").trim();
            copyToClipboard(formatAnsi(txt, "0;32"), "🟢 Yeşil Yazı");
        });
        bindClick("btn-msg-blue", () => {
            const txt = (document.getElementById("input-color-msg")?.value || "Örnek Mavi Mesaj").trim();
            copyToClipboard(formatAnsi(txt, "0;34"), "🔵 Mavi Yazı");
        });
        bindClick("btn-msg-yellow", () => {
            const txt = (document.getElementById("input-color-msg")?.value || "Örnek Sarı Mesaj").trim();
            copyToClipboard(formatAnsi(txt, "0;33"), "🟡 Sarı Yazı");
        });
        bindClick("btn-msg-invisible", () => {
            copyToClipboard("\u200E\u200B".repeat(10), "👻 Görünmez Mesaj");
        });
        bindClick("btn-msg-reverse", () => {
            const txt = (document.getElementById("input-color-msg")?.value || "Ters Yazı").trim();
            copyToClipboard(txt.split("").reverse().join(""), "🔀 Ters Yazı");
        });

        // 4. Bio & Status Styler
        const fontMap = {
            aesthetic: (str) => {
                const smalls = { a: "ᵃ", b: "ᵇ", c: "ᶜ", d: "ᵈ", e: "ᵉ", f: "ᶠ", g: "ᵍ", h: "ʰ", i: "ⁱ", j: "ʲ", k: "ᵏ", l: "ˡ", m: "ᵐ", n: "ⁿ", o: "ᵒ", p: "ᵖ", q: "ᑫ", r: "ʳ", s: "ˢ", t: "ᵗ", u: "ᵘ", v: "ᵛ", w: "ʷ", x: "ˣ", y: "ʸ", z: "ᶻ" };
                return str.toLowerCase().split("").map(c => smalls[c] || c).join("");
            },
            gothic: (str) => {
                const goths = { a:"𝔞",b:"𝔟",c:"𝔠",d:"𝔡",e:"𝔢",f:"𝔣",g:"𝔤",h:"𝔥",i:"𝔦",j:"𝔧",k:"𝔨",l:"𝔩",m:"𝔪",n:"𝔫",o:"𝔬",p:"𝔭",q:"𝔮",r:"𝔯",s:"𝔰",t:"𝔱",u:"𝔲",v:"𝔳",w:"𝔴",x:"𝔵",y:"𝔶",z:"𝔷", A:"𝔄",B:"𝔅",C:"ℭ",D:"𝔇",E:"𝔈",F:"𝔉",G:"𝔊",H:"ℌ",I:"ℑ",J:"𝔍",K:"𝔎",L:"𝔏",M:"𝔐",N:"𝔑",O:"𝔒",P:"𝔓",Q:"𝔔",R:"ℜ",S:"𝔖",T:"𝔗",U:"𝔘",V:"𝔙",W:"𝔚",X:"𝔛",Y:"𝔜",Z:"ℨ" };
                return str.split("").map(c => goths[c] || c).join("");
            },
            bold: (str) => {
                const bolds = { a:"𝗮",b:"𝗯",c:"𝗰",d:"𝗱",e:"𝗲",f:"𝗳",g:"𝗴",h:"𝗵",i:"𝗶",j:"𝗷",k:"𝗸",l:"𝗹",m:"𝗺",n:"𝗻",o:"𝗼",p:"𝗽",q:"𝗾",r:"𝗿",s:"ˢ",t:"𝘁",u:"𝘂",v:"𝘃",w:"𝘄",x:"𝘅",y:"𝘆",z:"𝘇", A:"𝗔",B:"𝗕",C:"𝗖",D:"𝗗",E:"𝗘",F:"𝗙",G:"𝗚",H:"𝗛",I:"𝗜",J:"𝗝",K:"𝗞",L:"𝗟",M:"𝗠",N:"𝗡",O:"𝗢",P:"𝗣",Q:"𝗤",R:"𝗥",S:"𝗦",T:"𝗧",U:"𝗨",V:"𝗩",W:"𝗪",X:"𝗫",Y:"𝗬",Z:"𝗭" };
                return str.split("").map(c => bolds[c] || c).join("");
            },
            cyber: (str) => {
                const cyb = { a:"𝖈",b:"𝖉",c:"𝖈",d:"𝖉",e:"𝖊",f:"𝖋",g:"𝖌",h:"𝖍",i:"𝖎",j:"𝖏",k:"𝖐",l:"𝖑",m:"𝖒",n:"𝖓",o:"𝖔",p:"𝖕",q:"𝖖",r:"𝖗",s:"𝖘",t:"𝖙",u:"𝖚",v:"𝖛",w:"𝖜",x:"𝖝",y:"𝖞",z:"𝖟", A:"𝕮",B:"𝕯",C:"𝕮",D:"𝕯",E:"𝕰",F:"𝕱",G:"𝕲",H:"𝕳",I:"𝕴",J:"𝕵",K:"𝕶",L:"𝕷",M:"𝕸",N:"𝕹",O:"𝕺",P:"𝕻",Q:"𝕼",R:"𝕽",S:"𝕾",T:"𝕿",U:"𝖀",V:"𝖁",W:"𝖂",X:"𝖃",Y:"𝖄",Z:"𝖅" };
                return str.split("").map(c => cyb[c] || c).join("");
            },
            boxed: (str) => {
                const box = { a:"🄰",b:"🄱",c:"🄲",d:"🄳",e:"🄴",f:"🄵",g:"🄶",h:"🄷",i:"🄸",j:"🄹",k:"🄺",l:"🄻",m:"🄼",n:"🄽",o:"🄾",p:"🄿",q:"🅀",r:"🅁",s:"🅂",t:"🅃",u:"🅄",v:"🅅",w:"🅆",x:"🅇",y:"🅈",z:"🅉" };
                return str.toLowerCase().split("").map(c => box[c] || c).join("");
            },
            circles: (str) => {
                const circ = { a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",j:"ⓙ",k:"ⓚ",l:"ⓛ",m:"ⓜ",n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ" };
                return str.toLowerCase().split("").map(c => circ[c] || c).join("");
            }
        };

        const applyBioFont = (type, title) => {
            const txt = (document.getElementById("input-bio-text")?.value || "NEXSUS Discord").trim();
            const formatted = (fontMap[type] ? fontMap[type](txt) : txt);
            copyToClipboard(formatted, `${title} Stili`);
        };

        bindClick("btn-font-aesthetic", () => applyBioFont("aesthetic", "𝒶ᵉˢᵗʰᵉᵗⁱᶜ"));
        bindClick("btn-font-gothic", () => applyBioFont("gothic", "𝔊𝔬𝔱𝔥𝔦𝔠"));
        bindClick("btn-font-bold", () => applyBioFont("bold", "𝗕𝗼𝗹𝗱"));
        bindClick("btn-font-cyber", () => applyBioFont("cyber", "𝕮𝖞𝖇𝖊𝖗"));
        bindClick("btn-font-boxed", () => applyBioFont("boxed", "🅺🆄🆃🆄"));
        bindClick("btn-font-circles", () => applyBioFont("circles", "Ⓒⓘⓡⓒⓛⓔ"));

        // 5. Notification Clearer & 8 Custom Discord Fonts
        bindClick("btn-clear-all-notifications", () => {
            try {
                document.querySelectorAll('[class*="unread_"], [class*="badge_"], [class*="numberBadge_"]').forEach(el => {
                    el.remove();
                });
                showToast("🧹 Bildirimler", "Tüm sunucu bildirimleri ve okunmamış mesajlar temizlendi!", "success");
                log("🧹 [Bildirimler Temizlendi]: Tüm sunucu bildirimleri okundu sayıldı.", "success");
            } catch(e) {}
        });

        const setDiscordFont = (fontName) => {
            let fontEl = document.getElementById("dqu-discord-custom-font");
            if (!fontEl) {
                fontEl = document.createElement("style");
                fontEl.id = "dqu-discord-custom-font";
                document.head.appendChild(fontEl);
            }
            if (fontName === 'poppins') {
                fontEl.innerHTML = `html, body, #app-mount, * { font-family: 'Poppins', sans-serif !important; }`;
                showToast("🔤 Font", "Discord fontu Poppins olarak ayarlandı!", "info");
                log("🔤 [Font Değiştirildi]: Poppins", "info");
            } else if (fontName === 'orbitron') {
                fontEl.innerHTML = `html, body, #app-mount, * { font-family: 'Orbitron', sans-serif !important; }`;
                showToast("🔤 Font", "Discord fontu Orbitron (Siber) olarak ayarlandı!", "info");
                log("🔤 [Font Değiştirildi]: Orbitron", "info");
            } else if (fontName === 'firacode') {
                fontEl.innerHTML = `html, body, #app-mount, * { font-family: 'Fira Code', monospace !important; }`;
                showToast("🔤 Font", "Discord fontu Fira Code olarak ayarlandı!", "info");
                log("🔤 [Font Değiştirildi]: Fira Code", "info");
            } else if (fontName === 'pixel') {
                fontEl.innerHTML = `html, body, #app-mount, * { font-family: 'Press Start 2P', cursive !important; font-size: 11px !important; }`;
                showToast("🔤 Font", "Discord fontu Pixel 8-Bit olarak ayarlandı!", "info");
                log("🔤 [Font Değiştirildi]: Pixel 8-Bit", "info");
            } else if (fontName === 'pacifico') {
                fontEl.innerHTML = `html, body, #app-mount, * { font-family: 'Pacifico', cursive !important; }`;
                showToast("🔤 Font", "Discord fontu Pacifico olarak ayarlandı!", "info");
                log("🔤 [Font Değiştirildi]: Pacifico", "info");
            } else if (fontName === 'montserrat') {
                fontEl.innerHTML = `html, body, #app-mount, * { font-family: 'Montserrat', sans-serif !important; }`;
                showToast("🔤 Font", "Discord fontu Montserrat olarak ayarlandı!", "info");
                log("🔤 [Font Değiştirildi]: Montserrat", "info");
            } else if (fontName === 'inter') {
                fontEl.innerHTML = `html, body, #app-mount, * { font-family: 'Inter', sans-serif !important; }`;
                showToast("🔤 Font", "Discord fontu Inter olarak ayarlandı!", "info");
                log("🔤 [Font Değiştirildi]: Inter", "info");
            } else if (fontName === 'mono') {
                fontEl.innerHTML = `html, body, #app-mount, * { font-family: 'JetBrains Mono', 'Roboto Mono', monospace !important; }`;
                showToast("🔤 Font", "Discord fontu JetBrains Mono olarak ayarlandı!", "info");
                log("🔤 [Font Değiştirildi]: JetBrains Mono", "info");
            } else {
                fontEl.innerHTML = ``;
                showToast("🔤 Font", "Varsayılan Discord fontuna dönüldü.", "info");
                log("🔤 [Font Değiştirildi]: Varsayılan Discord Fontu", "info");
            }
        };

        bindClick("btn-font-poppins", () => setDiscordFont("poppins"));
        bindClick("btn-font-orbitron", () => setDiscordFont("orbitron"));
        bindClick("btn-font-firacode", () => setDiscordFont("firacode"));
        bindClick("btn-font-pixel", () => setDiscordFont("pixel"));
        bindClick("btn-font-pacifico", () => setDiscordFont("pacifico"));
        bindClick("btn-font-montserrat", () => setDiscordFont("montserrat"));
        bindClick("btn-font-inter", () => setDiscordFont("inter"));
        bindClick("btn-font-mono", () => setDiscordFont("mono"));
        bindClick("btn-font-default", () => setDiscordFont("default"));

        // NUMERICAL VERSION COMPARISON FUNCTION (X.Y.Z.W)
        function compareVersions(v1, v2) {
            const n1 = (v1 || "0").split(".").map(Number);
            const n2 = (v2 || "0").split(".").map(Number);
            for (let i = 0; i < Math.max(n1.length, n2.length); i++) {
                const a = n1[i] || 0;
                const b = n2[i] || 0;
                if (a > b) return 1;
                if (a < b) return -1;
            }
            return 0;
        }

        // REMOTE AUTO-UPDATE ENGINE LOGIC
        const checkUpdates = (isManual = false) => {
            const statusText = document.getElementById("updates-status-text");
            const installBtn = document.getElementById("btn-install-update");
            const remoteVerBadge = document.getElementById("updates-version-badge");
            
            const currentInstalled = localStorage.getItem("dqu_installed_version") || PROT_VER;
            const remoteVersion = localStorage.getItem("dqu_remote_version") || PROT_VER;

            const hasNewer = compareVersions(remoteVersion, currentInstalled) > 0;

            if (hasNewer) {
                if (statusText) {
                    statusText.innerText = `🚀 YENİ SÜRÜM HAZIR (v${remoteVersion})! Kurmak için sağdaki yeşil butona tıklayın.`;
                    statusText.style.color = "#38bdf8";
                }
                if (installBtn) installBtn.style.display = "inline-flex";
                if (remoteVerBadge) {
                    remoteVerBadge.innerText = `v${currentInstalled} ➔ v${remoteVersion}`;
                    remoteVerBadge.style.background = "rgba(16,185,129,0.25)";
                    remoteVerBadge.style.color = "#34d399";
                    remoteVerBadge.style.borderColor = "#34d399";
                }
                if (isManual) {
                    showToast("🚀 Yeni Güncelleme Var!", `v${remoteVersion} sürümü yayınlandı. Yeşil butona basarak kurabilirsiniz!`, "info");
                }
            } else {
                if (statusText) {
                    statusText.innerText = `✅ Mevcut sürümünüz (v${currentInstalled}) güncel ve aktif.`;
                    statusText.style.color = "#34d399";
                }
                if (remoteVerBadge) {
                    remoteVerBadge.innerText = `v${currentInstalled}`;
                    remoteVerBadge.style.background = "rgba(56,189,248,0.2)";
                    remoteVerBadge.style.color = "#38bdf8";
                    remoteVerBadge.style.borderColor = "rgba(56,189,248,0.3)";
                }
                if (installBtn) installBtn.style.display = "none";
                if (isManual) {
                    showToast("✅ Sistem Güncel", `Mevcut sürümünüz (v${currentInstalled}) en son sürümdür!`, "success");
                }
            }
        };

        bindClick("btn-check-updates-manual", () => checkUpdates(true));

        bindClick("btn-install-update", () => {
            const remoteVersion = localStorage.getItem("dqu_remote_version") || PROT_VER;
            localStorage.setItem("dqu_installed_version", remoteVersion);
            
            showToast("✨ Güncelleme Kuruldu", `v${remoteVersion} sürümü kuruldu! Sayfa yenileniyor...`, "success");
            
            const statusText = document.getElementById("updates-status-text");
            const installBtn = document.getElementById("btn-install-update");
            if (statusText) {
                statusText.innerText = `✅ Mevcut sürümünüz (v${remoteVersion}) güncel ve aktif.`;
                statusText.style.color = "#34d399";
            }
            if (installBtn) installBtn.style.display = "none";

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });

        // Auto check updates on load
        setTimeout(() => checkUpdates(false), 500);

        switchTab(savedTab);

        // 1. NOTES MANAGER LOGIC
        const notesArea = document.getElementById("dqu-notes-area");
        if (notesArea) {
            notesArea.value = localStorage.getItem('dqu_user_notes') || '';
            bindClick("btn-save-notes", () => {
                localStorage.setItem('dqu_user_notes', notesArea.value);
                showToast("💾 Notlar", "Hızlı notların kaydedildi!", "success");
                unlockAchievement('notes_master');
            });
            bindClick("btn-clear-notes", () => {
                notesArea.value = '';
                localStorage.removeItem('dqu_user_notes');
                showToast("🧹 Temizlendi", "Notlar temizlendi.", "info");
            });
        }

        // 2. TIMER REMINDER LOGIC
        let timerInterval = null;
        let timerSeconds = 0;

        const updateTimerDisplay = () => {
            const el = document.getElementById("dqu-timer-val");
            if (!el) return;
            const m = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
            const s = (timerSeconds % 60).toString().padStart(2, '0');
            el.innerText = `${m}:${s}`;
        };

        const startTimer = (mins) => {
            clearInterval(timerInterval);
            timerSeconds = mins * 60;
            updateTimerDisplay();
            showToast("⏱️ Zamanlayıcı", `${mins} dakikalık geri sayım başladı!`, "info");
            timerInterval = setInterval(() => {
                timerSeconds--;
                if (timerSeconds <= 0) {
                    clearInterval(timerInterval);
                    timerSeconds = 0;
                    updateTimerDisplay();
                    playSuccessSound();
                    showToast("⏰ Süre Doldu!", "Zamanlayıcı bitti! Görevleri kontrol etme zamanı!", "success", true);
                    sendBrowserNotification("⏰ DCV - NEXSUS Panel", "Zamanlayıcı süreniz doldu!");
                } else {
                    updateTimerDisplay();
                }
            }, 1000);
        };

        bindClick("btn-timer-5m", () => startTimer(5));
        bindClick("btn-timer-15m", () => startTimer(15));
        bindClick("btn-timer-30m", () => startTimer(30));
        bindClick("btn-timer-stop", () => {
            clearInterval(timerInterval);
            timerSeconds = 0;
            updateTimerDisplay();
            showToast("⏹️ Durduruldu", "Zamanlayıcı durduruldu.", "warn");
        });

        // 3. SYNTHETIC AMBIENT SOUNDBOARD LOGIC (Web Audio API)
        let audioCtx = null;
        let ambientOsc = null;

        const stopAmbientSound = () => {
            if (ambientOsc) {
                try { ambientOsc.stop(); ambientOsc.disconnect(); } catch(e) {}
                ambientOsc = null;
            }
            ["rain", "space", "waves"].forEach(s => {
                const btn = document.getElementById(`btn-sound-${s}`);
                if (btn) btn.classList.remove("playing");
            });
            const stopBtn = document.getElementById("btn-sound-stop");
            if (stopBtn) stopBtn.style.display = "none";
        };

        const playAmbientSynth = (type) => {
            stopAmbientSound();
            try {
                if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                if (audioCtx.state === 'suspended') audioCtx.resume();

                const bufferSize = audioCtx.sampleRate * 2;
                const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
                const data = buffer.getChannelData(0);

                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }

                const noise = audioCtx.createBufferSource();
                noise.buffer = buffer;
                noise.loop = true;

                const filter = audioCtx.createBiquadFilter();
                if (type === 'rain') {
                    filter.type = 'lowpass';
                    filter.frequency.setValueAtTime(800, audioCtx.currentTime);
                } else if (type === 'space') {
                    filter.type = 'bandpass';
                    filter.frequency.setValueAtTime(300, audioCtx.currentTime);
                } else {
                    filter.type = 'lowpass';
                    filter.frequency.setValueAtTime(400, audioCtx.currentTime);
                }

                const gainNode = audioCtx.createGain();
                gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);

                noise.connect(filter);
                filter.connect(gainNode);
                gainNode.connect(audioCtx.destination);

                noise.start();
                ambientOsc = noise;
                unlockAchievement('ambient_relax');

                const activeBtn = document.getElementById(`btn-sound-${type}`);
                if (activeBtn) activeBtn.classList.add("playing");
                const stopBtn = document.getElementById("btn-sound-stop");
                if (stopBtn) stopBtn.style.display = "block";
            } catch(e) {
                console.error("Audio synth error:", e);
            }
        };

        bindClick("btn-sound-rain", () => playAmbientSynth("rain"));
        bindClick("btn-sound-space", () => playAmbientSynth("space"));
        bindClick("btn-sound-waves", () => playAmbientSynth("waves"));
        bindClick("btn-sound-stop", stopAmbientSound);

        // 4. RETRO SNAKE GAME LOGIC
        let snakeLoop = null;
        let snakeScore = 0;
        let snakeHighScore = parseInt(localStorage.getItem('dqu_snake_highscore') || '0', 10);

        function initSnakeGame() {
            const canvas = document.getElementById("dqu-snake-canvas");
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            const gridSize = 10;
            const tileCountX = canvas.width / gridSize;
            const tileCountY = canvas.height / gridSize;

            let snake = [{ x: 5, y: 5 }];
            let food = { x: 12, y: 8 };
            let dx = 1, dy = 0;
            snakeScore = 0;

            const updateScoreDisplay = () => {
                const sEl = document.getElementById("snake-score");
                const hsEl = document.getElementById("snake-highscore");
                if (sEl) sEl.innerText = snakeScore;
                if (hsEl) hsEl.innerText = snakeHighScore;
            };
            updateScoreDisplay();

            const draw = () => {
                ctx.fillStyle = "#090314";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                const head = { x: snake[0].x + dx, y: snake[0].y + dy };

                if (head.x < 0 || head.x >= tileCountX || head.y < 0 || head.y >= tileCountY || snake.some(s => s.x === head.x && s.y === head.y)) {
                    clearInterval(snakeLoop);
                    snakeLoop = null;
                    if (snakeScore > snakeHighScore) {
                        snakeHighScore = snakeScore;
                        localStorage.setItem('dqu_snake_highscore', snakeHighScore.toString());
                    }
                    updateScoreDisplay();
                    ctx.fillStyle = "#ef4444";
                    ctx.font = "bold 14px sans-serif";
                    ctx.textAlign = "center";
                    ctx.fillText("OYUN BİTTİ!", canvas.width / 2, canvas.height / 2);
                    return;
                }

                snake.unshift(head);

                if (head.x === food.x && head.y === food.y) {
                    snakeScore += 10;
                    if (snakeScore >= 50) unlockAchievement('snake_50');
                    if (snakeScore >= 200) unlockAchievement('snake_200');
                    if (snakeScore > snakeHighScore) {
                        snakeHighScore = snakeScore;
                        localStorage.setItem('dqu_snake_highscore', snakeHighScore.toString());
                    }
                    updateScoreDisplay();
                    food = {
                        x: Math.floor(Math.random() * tileCountX),
                        y: Math.floor(Math.random() * tileCountY)
                    };
                } else {
                    snake.pop();
                }

                ctx.fillStyle = "#f472b6";
                ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 1, gridSize - 1);

                snake.forEach((part, index) => {
                    ctx.fillStyle = index === 0 ? "#a855f7" : "#c084fc";
                    ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize - 1, gridSize - 1);
                });
            };

            const changeDir = (e) => {
                if (e.key === "ArrowUp" || e.key === "w") { if (dy !== 1) { dx = 0; dy = -1; } }
                else if (e.key === "ArrowDown" || e.key === "s") { if (dy !== -1) { dx = 0; dy = 1; } }
                else if (e.key === "ArrowLeft" || e.key === "a") { if (dx !== 1) { dx = -1; dy = 0; } }
                else if (e.key === "ArrowRight" || e.key === "d") { if (dx !== -1) { dx = 1; dy = 0; } }
            };

            document.removeEventListener("keydown", changeDir);
            document.addEventListener("keydown", changeDir);

            bindClick("btn-snake-start", () => {
                clearInterval(snakeLoop);
                snake = [{ x: 5, y: 5 }];
                dx = 1; dy = 0;
                snakeScore = 0;
                updateScoreDisplay();
                snakeLoop = setInterval(draw, 100);
            });

            draw();
        }

        // Clicker Game Logic + Combo Burst Particles
        let clickerScore = parseInt(localStorage.getItem('dqu_clicker_score') || '0', 10);
        const clickerBtn = document.getElementById("dqu-clicker-btn");
        const clickerScoreEl = document.getElementById("clicker-score-num");
        const clickerRankEl = document.getElementById("clicker-rank-text");
        const clickerBox = document.getElementById("dqu-clicker-box");

        const updateClickerUI = () => {
            if (clickerScoreEl) clickerScoreEl.innerText = clickerScore;
            if (clickerRankEl) {
                if (clickerScore >= 500) clickerRankEl.innerText = t("rankLegend");
                else if (clickerScore >= 100) clickerRankEl.innerText = t("rankPro");
                else clickerRankEl.innerText = t("rankBeginner");
            }
        };
        updateClickerUI();

        if (clickerBtn && clickerBox) {
            clickerBtn.onclick = (e) => {
                clickerScore++;
                localStorage.setItem('dqu_clicker_score', clickerScore.toString());
                updateClickerUI();

                const rect = clickerBox.getBoundingClientRect();
                const floatEl = document.createElement("div");
                floatEl.className = "dqu-floating-num";
                floatEl.innerText = "+1";
                floatEl.style.left = (e.clientX - rect.left - 10) + "px";
                floatEl.style.top = (e.clientY - rect.top - 20) + "px";
                clickerBox.appendChild(floatEl);
                setTimeout(() => floatEl.remove(), 750);

                if (clickerScore % 10 === 0) {
                    const comboEmojis = ['🔥', '⚡', '✨', '⭐', '💥'];
                    comboEmojis.forEach((emoji) => {
                        const burstEl = document.createElement("div");
                        burstEl.className = "dqu-floating-num";
                        burstEl.innerText = emoji;
                        const offsetX = (Math.random() * 80 - 40);
                        const offsetY = (Math.random() * 40 - 20);
                        burstEl.style.left = (e.clientX - rect.left + offsetX) + "px";
                        burstEl.style.top = (e.clientY - rect.top + offsetY) + "px";
                        clickerBox.appendChild(burstEl);
                        setTimeout(() => burstEl.remove(), 750);
                    });
                }

                if (clickerScore >= 100) unlockAchievement('click_100');
                if (clickerScore >= 500) unlockAchievement('click_500');
            };
        }

        // Easter Egg Title 5-Clicks Listener
        let titleClickCount = 0;
        let titleClickTimer = null;
        const mainTitleEl = document.getElementById("dqu-main-title");
        if (mainTitleEl) {
            mainTitleEl.onclick = () => {
                titleClickCount++;
                clearTimeout(titleClickTimer);
                titleClickTimer = setTimeout(() => { titleClickCount = 0; }, 1500);

                if (titleClickCount >= 5) {
                    titleClickCount = 0;
                    unlockAchievement('secret_cahit');
                }
            };
        }

        // HypeSquad House card selection
        let selectedHouseId = parseInt(localStorage.getItem('dqu_hypesquad_house') || '1', 10);
        let selectedPrivacyVal = parseInt(localStorage.getItem('dqu_privacy_level') || '1', 10);

        [1, 2, 3].forEach(id => {
            const card = document.getElementById(`hs-card-${id}`);
            if (card) {
                card.onclick = () => {
                    selectedHouseId = id;
                    localStorage.setItem('dqu_hypesquad_house', id.toString());
                    [1, 2, 3].forEach(i => {
                        const c = document.getElementById(`hs-card-${i}`);
                        if (c) {
                            c.classList.toggle("selected", i === id);
                            if (i === id) {
                                if (i === 2) c.className = "dqu-hs-card selected hs-brilliance";
                                else if (i === 3) c.className = "dqu-hs-card selected hs-balance";
                                else c.className = "dqu-hs-card selected";
                            } else {
                                c.className = "dqu-hs-card";
                            }
                        }
                    });
                };
            }
        });

        // HypeSquad Apply button
        bindClick("btn-hs-apply", () => {
            localStorage.setItem('dqu_hypesquad_house', selectedHouseId.toString());
            const houseNames = { 1: "Bravery", 2: "Brilliance", 3: "Balance" };
            const houseName = houseNames[selectedHouseId] || "HypeSquad";
            log(`🛡️ HypeSquad isteği gönderiliyor: ${houseName}...`, "info");
            window.postMessage({ prefix: 'DISCORD_QUEST_COMPLETER_UI', type: 'HYPESQUAD_SET', houseId: selectedHouseId }, '*');
            showToast("🛡️ HypeSquad", `${houseName} rozeti uygulanıyor...`, "info");
            unlockAchievement('hype_member');
        });

        // HypeSquad Remove button
        bindClick("btn-hs-remove", () => {
            log(t("logHsWarn"), "warn");
            showToast("⚠️ HypeSquad", t("hsRemoveDisabledMsg"), "warn", false);
        });

        // Privacy Level Card Selection & Apply
        [1, 2, 3].forEach(val => {
            const card = document.getElementById(`priv-card-${val}`);
            if (card) {
                card.onclick = () => {
                    selectedPrivacyVal = val;
                    localStorage.setItem('dqu_privacy_level', val.toString());
                    [1, 2, 3].forEach(v => {
                        const c = document.getElementById(`priv-card-${v}`);
                        if (c) c.classList.toggle("selected", v === val);
                    });
                };
            }
        });

        bindClick("btn-priv-apply", () => {
            localStorage.setItem('dqu_privacy_level', selectedPrivacyVal.toString());
            log(`🔒 Profil gizliliği değiştiriliyor (Mod: ${selectedPrivacyVal})...`, "info");
            window.postMessage({ prefix: 'DISCORD_QUEST_COMPLETER_UI', type: 'PROFILE_VISIBILITY_SET', val: selectedPrivacyVal }, '*');
            showToast("🔒 Profil Gizliliği", "Profil gizlilik ayarı uygulanıyor...", "info");
            unlockAchievement('privacy_master');
        });

        // Filter handling
        const setFilter = (filter) => {
            currentFilter = filter;
            ["all", "active", "done"].forEach(f => {
                const btn = document.getElementById(`filter-btn-${f}`);
                if (btn) btn.classList.toggle("active", f === filter);
            });
            applyCardFilters();
        };
        bindClick("filter-btn-all", () => setFilter("all"));
        bindClick("filter-btn-active", () => setFilter("active"));
        bindClick("filter-btn-done", () => setFilter("done"));

        // Sound toggle
        bindClick("opt-sound-toggle", function() {
            const cur = localStorage.getItem('dqu_sound') !== 'false';
            localStorage.setItem('dqu_sound', (!cur).toString());
            this.innerText = !cur ? '🔔 Açık' : '🔕 Kapalı';
            this.classList.toggle('active', !cur);
            log(`🔊 Sesli Bildirim ${!cur ? 'Açıldı' : 'Kapatıldı'}.`, "info");
        });

        // Notification toggle
        bindClick("opt-notify-toggle", function() {
            const cur = localStorage.getItem('dqu_notify') !== 'false';
            localStorage.setItem('dqu_notify', (!cur).toString());
            this.innerText = !cur ? '🔔 Açık' : '🔕 Kapalı';
            this.classList.toggle('active', !cur);
            if (!cur && "Notification" in window && Notification.permission !== "granted") {
                Notification.requestPermission();
            }
            log(`🔔 Tarayıcı Bildirimi ${!cur ? 'Açıldı' : 'Kapatıldı'}.`, "info");
        });

        // Theme Engine (NEXSUS 7 Core Themes)
        const ALL_THEMES = ["purple", "dark", "cyan", "synthwave", "red", "green", "yellow"];
        const applyTheme = (themeName) => {
            localStorage.setItem('dqu_theme', themeName);
            ALL_THEMES.forEach(t => uiContainer.classList.remove(`theme-${t}`));
            uiContainer.classList.add(`theme-${themeName}`);

            let themeCount = parseInt(localStorage.getItem('dqu_theme_count') || '0', 10) + 1;
            localStorage.setItem('dqu_theme_count', themeCount.toString());
            if (themeCount >= 3) unlockAchievement('theme_customizer');

            ALL_THEMES.forEach(tName => {
                const btn = document.getElementById(`opt-theme-${tName}`);
                if (btn) btn.classList.toggle("active", tName === themeName);
            });
            log(`🎨 Tema değiştirildi: ${themeName.toUpperCase()}`, "info");
        };

        const savedTheme = localStorage.getItem('dqu_theme') || 'purple';
        applyTheme(savedTheme);

        ALL_THEMES.forEach(tName => {
            bindClick(`opt-theme-${tName}`, () => applyTheme(tName));
        });

        // Image Modal Zoom Handler
        const imgModalEl = document.getElementById("dqu-image-modal");
        const openImageModal = (imgSrc, titleStr) => {
            const modalSrc = document.getElementById("dqu-img-modal-src");
            const modalTitle = document.getElementById("dqu-img-modal-title");
            if (modalSrc && imgModalEl) {
                modalSrc.src = imgSrc;
                if (modalTitle) modalTitle.innerText = titleStr || "🖼️ Detaylı Görsel İnceleme";
                imgModalEl.style.display = "flex";
            }
        };

        const closeImgModalBtn = document.getElementById("dqu-img-modal-close");
        if (closeImgModalBtn && imgModalEl) {
            closeImgModalBtn.onclick = () => { imgModalEl.style.display = "none"; };
            imgModalEl.onclick = (e) => {
                if (e.target === imgModalEl) imgModalEl.style.display = "none";
            };
        }

        uiContainer.querySelectorAll(".dqu-preview-img-container, .dqu-img-zoom-trigger").forEach(el => {
            el.onclick = (e) => {
                e.stopPropagation();
                const src = el.getAttribute("data-img");
                const title = el.getAttribute("data-title");
                if (src) openImageModal(src, title);
            };
        });

        // Language toggle buttons TR / EN
        bindClick("opt-lang-tr", () => switchLanguage("tr"));
        bindClick("opt-lang-en", () => switchLanguage("en"));

        // Header buttons
        bindClick("dqu-expand-btn", () => {
            const isExp = uiContainer.classList.toggle("dqu-expanded");
            const btn = document.getElementById("dqu-expand-btn");
            if (btn) btn.innerText = isExp ? "❐" : "⛶";
        });

        bindClick("btn-clear-logs", () => {
            const term = document.getElementById("dqu-terminal");
            if (term) term.innerHTML = '';
        });

        bindClick("btn-copy-logs", () => {
            const term = document.getElementById("dqu-terminal");
            if (term) {
                const text = term.innerText;
                navigator.clipboard.writeText(text).then(() => {
                    showToast("📋 Kopyalandı", "Terminal günlükleri panoya kopyalandı!", "success");
                }).catch(() => {
                    showToast("⚠️ Hata", "Kopyalama işlemi başarısız.", "error");
                });
            }
        });

        // Engine Runner Logic (Universal Extension + Desktop App Runner)
        const runEngine = () => {
            hasCelebrated = false;
            log(t("logEngineTrigger"), "info");
            showToast("🚀 " + t("title"), t("toastEngineTriggerMsg"), "info");
            unlockAchievement('first_step');

            if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
                try {
                    chrome.runtime.sendMessage({ action: 'resetAndExecuteQuestCode' }, () => {});
                    chrome.runtime.sendMessage({ action: 'executeQuestCode' }, () => {});
                } catch(e) {
                    if (typeof window.__RUN_NEXSUS_QUEST_ENGINE === 'function') {
                        window.__RUN_NEXSUS_QUEST_ENGINE();
                    }
                }
            } else if (typeof window.__RUN_NEXSUS_QUEST_ENGINE === 'function') {
                window.__RUN_NEXSUS_QUEST_ENGINE();
            }
        };

        // Start button (checks first time welcome notice)
        bindClick("dqu-start-btn", () => {
            const hasSeenNotice = localStorage.getItem('dqu_notice_seen');
            if (!hasSeenNotice) {
                if (welcomeModal) welcomeModal.style.display = "flex";
            } else {
                runEngine();
            }
        });

        // Stop button
        bindClick("dqu-stop-btn", () => {
            log(t("logEngineStop"), "warn");
            showToast(t("toastEngineStopTitle"), t("toastEngineStopMsg"), "warn", true);
            window.postMessage({ prefix: 'DISCORD_QUEST_COMPLETER_UI', type: 'STOP_ENGINE' }, '*');
        });

        // Confirm button on First-Time Modal
        bindClick("dqu-modal-confirm-btn", () => {
            localStorage.setItem('dqu_notice_seen', 'true');
            if (welcomeModal) welcomeModal.style.display = "none";
            runEngine();
        });

        // Refresh button
        bindClick("dqu-refresh-btn", () => {
            log(t("logEngineRefresh"), "info");
            showToast(t("toastEngineRefreshTitle"), t("toastEngineRefreshMsg"), "info");
            if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.sendMessage) {
                try {
                    chrome.runtime.sendMessage({ action: 'resetAndExecuteQuestCode' }, () => {});
                    chrome.runtime.sendMessage({ action: 'executeQuestCode' }, () => {});
                } catch(e) {
                    if (typeof window.__RUN_NEXSUS_QUEST_ENGINE === 'function') {
                        window.__RUN_NEXSUS_QUEST_ENGINE();
                    }
                }
            } else if (typeof window.__RUN_NEXSUS_QUEST_ENGINE === 'function') {
                window.__RUN_NEXSUS_QUEST_ENGINE();
            }
        });
    }

    function switchLanguage(lang) {
        currentLang = lang;
        userSettings.lang = lang;
        localStorage.setItem('dqu_lang', lang);

        const ids = {
            "dqu-main-title": `⚡ ${t("title")} <span class="dqu-title-ver">v${PROT_VER}</span>`,
            "tab-btn-quests": t("tabQuests"),
            "tab-btn-hypesquad": t("tabHypeSquad"),
            "tab-btn-privacy": t("tabPrivacy"),
            "tab-btn-achievements": t("tabAchievements"),
            "tab-btn-clicker": t("tabClicker"),
            "tab-btn-logs": t("tabLogs"),
            "tab-btn-settings": t("tabSettings"),
            "tab-btn-gifting": t("tabGifting"),
            "tab-btn-badges": t("tabBadges"),
            "tab-btn-betabadges": t("tabBeta"),
            "tab-btn-profile": t("tabProfile"),
            "tab-btn-notes": t("tabNotes"),
            "tab-btn-decorations": t("tabDecorations"),
            "tab-btn-timer": t("tabTimer"),
            "tab-btn-soundboard": t("tabSoundboard"),
            "tab-btn-snake": t("tabSnake"),
            "profile-title-text": t("profileTitle"),
            "profile-sub-text": t("profileSub"),
            "notes-title-text": t("notesTitle"),
            "notes-sub-text": t("notesSub"),
            "decorations-title-text": t("decorationsTitle"),
            "decorations-sub-text": t("decorationsSub"),
            "timer-title-text": t("timerTitle"),
            "timer-sub-text": t("timerSub"),
            "soundboard-title-text": t("soundboardTitle"),
            "soundboard-sub-text": t("soundboardSub"),
            "snake-title-text": t("snakeTitle"),
            "snake-sub-text": t("snakeSub"),
            "dqu-start-btn": t("startBtn"),
            "dqu-stop-btn": t("stopBtn"),
            "dqu-refresh-btn": t("refreshBtn"),
            "btn-clear-logs": t("clearLogs"),
            "lbl-mode": t("modeLabel"),
            "lbl-mode-val": t("modeValue"),
            "lbl-sound": t("soundLabel"),
            "lbl-notify": t("notifyLabel"),
            "lbl-lang": t("langLabel"),
            "lbl-theme": t("themeLabel"),
            "lbl-credits": t("creatorText"),
            "lbl-yt": t("ytChannel"),
            "lbl-dc": t("dcServer"),
            "lbl-completed-cnt": t("completedCount"),
            "lbl-saved-cnt": t("savedTime"),
            "dqu-summary-label": t("summaryLabel"),
            "filter-btn-all": t("filterAll"),
            "filter-btn-active": t("filterActive"),
            "filter-btn-done": t("filterDone"),
            "dqu-empty-quests-placeholder": t("emptyQuestsPlaceholder"),
            "term-head": t("terminalHeader"),
            "sys-ready-msg": t("sysReady"),
            "hs-title-text": t("hsTitle"),
            "hs-sub-text": t("hsSub"),
            "hs-desc-1": t("hsBraveryDesc"),
            "hs-desc-2": t("hsBrillianceDesc"),
            "hs-desc-3": t("hsBalanceDesc"),
            "btn-hs-apply": t("hsApplyBtn"),
            "btn-hs-remove": t("hsRemoveBtn"),
            "priv-title-text": t("privTitle"),
            "priv-sub-text": t("privSub"),
            "priv-1-name": t("priv1Name"),
            "priv-1-desc": t("priv1Desc"),
            "priv-2-name": t("priv2Name"),
            "priv-2-desc": t("priv2Desc"),
            "priv-3-name": t("priv3Name"),
            "priv-3-desc": t("priv3Desc"),
            "btn-priv-apply": t("privApplyBtn"),
            "ach-title-text": t("achTitle"),
            "ach-sub-text": t("achSub"),
            "clicker-title-text": t("clickerTitle"),
            "clicker-sub-text": t("clickerSub"),
            "clicker-lbl-score": t("clickerScoreLabel"),
            "clicker-lbl-rank": t("clickerRankLabel"),
            "dqu-clicker-btn": `<span style="font-size:28px;">⚡</span><span>${t("clickerBtn")}</span>`,
            "info-box-head": t("infoBoxHeader"),
            "info-box-video": t("infoBoxVideo"),
            "info-box-mobile": t("infoBoxMobile"),
            "modal-title-text": `<span>🚀</span> <span>${t("modalTitle")}</span>`,
            "modal-intro-text": t("modalIntro"),
            "modal-info-video": t("infoBoxVideo"),
            "modal-info-mobile": t("infoBoxMobile"),
            "dqu-modal-confirm-btn": t("modalBtn"),
            "gift-page-title": t("giftTitle"),
            "gift-page-sub": t("giftSub"),
            "gift-req-1": t("giftReq1"),
            "gift-req-2": t("giftReq2"),
            "gift-req-3": t("giftReq3"),
            "gift-req-6": t("giftReq6"),
            "gift-req-10": t("giftReq10"),
            "gift-req-20": t("giftReq20"),
            "gift-tooltip-1": t("giftTooltip1"),
            "gift-tooltip-2": t("giftTooltip2"),
            "gift-tooltip-3": t("giftTooltip3"),
            "gift-tooltip-6": t("giftTooltip6"),
            "gift-tooltip-10": t("giftTooltip10"),
            "gift-tooltip-20": t("giftTooltip20"),
            "gift-info-box": `💡 <strong style="color:#34d399;">${t("giftInfoCheap")}</strong> ${t("giftInfoNitro")} <strong style="color:#fbbf24;">$3</strong>!<br>🎨 ${t("giftInfoCosmetic")} <strong style="color:#f472b6;">$5</strong>${t("giftInfoFrom")}`,
            "badges-page-title": t("badgesTitle"),
            "badges-page-sub": t("badgesSub"),
            "badges-section-nitro": t("badgeNitroSection"),
            "badges-section-hs": t("badgeHsSection"),
            "badges-section-other": t("badgeOtherSection"),
            "badge-how-n1": t("howNitro1"),
            "badge-how-n2": t("howNitro2"),
            "badge-how-n3": t("howNitro3"),
            "badge-how-n6": t("howNitro6"),
            "badge-how-n12": t("howNitro12"),
            "badge-how-n24": t("howNitro24"),
            "badge-how-n36": t("howNitro36"),
            "badge-how-n48": t("howNitro48"),
            "badge-how-hs1": t("howHsSelect"),
            "badge-how-hs2": t("howHsSelect"),
            "badge-how-hs3": t("howHsSelect"),
            "badge-how-activedev": t("howActiveDev"),
            "badge-how-early": t("howEarlySupporter"),
            "badge-how-bug1": t("howBug1"),
            "badge-how-bug2": t("howBug2"),
            "badge-how-mod": t("howMod"),
            "badge-how-partner": t("howPartner"),
            "badge-how-staff": t("howStaff"),
            "badge-how-boost": t("howBoost"),
            "badge-title-quest": t("badgeQuestTitle"),
            "badge-how-quest": t("howQuest"),
            "badge-how-verifieddev": t("howVerifiedDev"),
            "badge-how-hsevents": t("howHsEvents"),
            "badge-how-origuser": t("howOrigUser"),
            "badge-how-automod": t("howAutoMod"),
            "badge-how-orbs": t("howOrbs"),
            "tab-btn-betabadges": t("tabBeta"),
            "beta-page-title": t("betaTitle"),
            "beta-page-sub": t("betaSub"),
            "beta-news-text": t("betaNewsText"),
            "beta-f1-title": t("betaFeature1Title"),
            "beta-f1-desc": t("betaFeature1Desc"),
            "beta-f2-title": t("betaFeature2Title"),
            "beta-f2-desc": t("betaFeature2Desc")
        };

        Object.entries(ids).forEach(([id, html]) => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = html;
        });

        renderAchievements();


        const clickerRankEl = document.getElementById("clicker-rank-text");
        if (clickerRankEl) {
            let score = parseInt(localStorage.getItem('dqu_clicker_score') || '0', 10);
            if (score >= 500) clickerRankEl.innerText = t("rankLegend");
            else if (score >= 100) clickerRankEl.innerText = t("rankPro");
            else clickerRankEl.innerText = t("rankBeginner");
        }

        document.getElementById("opt-lang-tr").classList.toggle("active", lang === 'tr');
        document.getElementById("opt-lang-en").classList.toggle("active", lang === 'en');

        renderAchievements();
        updateOverallStats();
        unlockAchievement('bilingual_user');
        log(`🌐 Dil değiştirildi: ${lang.toUpperCase()}`, "info");
    }

    function unlockAchievement(achId) {
        let unlocked = [];
        try { unlocked = JSON.parse(localStorage.getItem('dqu_unlocked_ach') || '[]'); } catch(e) {}
        if (!unlocked.includes(achId)) {
            unlocked.push(achId);
            localStorage.setItem('dqu_unlocked_ach', JSON.stringify(unlocked));
            
            const achObj = getAchievementDetails(achId);
            if (achObj) {
                playSuccessSound();
                triggerConfetti();
                showToast("🏆 " + t("achUnlocked"), `${achObj.name}: ${achObj.desc}`, "success");
                log(`${t("logAchUnlockedPrefix")} ${achObj.name}`, "success");
            }
            renderAchievements();
        }
    }

    function getAchievementDetails(id) {
        const list = {
            'first_step': { icon: '🚀', name: t('achFirstStep'), desc: t('achFirstStepDesc') },
            'quest_hunter': { icon: '🏆', name: t('achQuestHunter'), desc: t('achQuestHunterDesc') },
            'orbs_collector': { icon: '🔮', name: t('achOrbsCollector'), desc: t('achOrbsCollectorDesc') },
            'hype_member': { icon: '🛡️', name: t('achHypeMember'), desc: t('achHypeMemberDesc') },
            'privacy_master': { icon: '🔒', name: t('achPrivacyMaster'), desc: t('achPrivacyMasterDesc') },
            'click_100': { icon: '🖱️', name: t('achClick100'), desc: t('achClick100Desc') },
            'click_500': { icon: '👑', name: t('achClick500'), desc: t('achClick500Desc') },
            'snake_50': { icon: '🐍', name: t('achSnake50'), desc: t('achSnake50Desc') },
            'snake_200': { icon: '🐍', name: t('achSnake200'), desc: t('achSnake200Desc') },
            'ambient_relax': { icon: '🎵', name: t('achAmbientRelax'), desc: t('achAmbientRelaxDesc') },
            'theme_customizer': { icon: '🎨', name: t('achThemeCustomizer'), desc: t('achThemeCustomizerDesc') },
            'notes_master': { icon: '📝', name: t('achNotesMaster'), desc: t('achNotesMasterDesc') },
            'bilingual_user': { icon: '🌐', name: t('achBilingualUser'), desc: t('achBilingualUserDesc') },
            'secret_cahit': { icon: '🤫', name: t('achSecretCahit'), desc: t('achSecretCahitDesc') },
            'gifting_guide': { icon: '🎁', name: t('achGiftingGuide'), desc: t('achGiftingGuideDesc') },
            'beta_leaker': { icon: '🧪', name: t('achBetaLeaker'), desc: t('achBetaLeakerDesc') }
        };
        return list[id] || null;
    }

    function renderAchievements() {
        const container = document.getElementById("dqu-achievements-container");
        if (!container) return;

        let unlocked = [];
        try { unlocked = JSON.parse(localStorage.getItem('dqu_unlocked_ach') || '[]'); } catch(e) {}

        const allAchKeys = [
            'first_step', 'quest_hunter', 'orbs_collector', 'hype_member',
            'privacy_master', 'click_100', 'click_500', 'snake_50',
            'snake_200', 'ambient_relax', 'theme_customizer', 'notes_master',
            'bilingual_user', 'secret_cahit', 'gifting_guide', 'beta_leaker'
        ];

        let html = '';
        let unlockedCount = 0;

        allAchKeys.forEach(key => {
            const item = getAchievementDetails(key);
            if (!item) return;
            const isUnlocked = unlocked.includes(key);
            if (isUnlocked) unlockedCount++;

            html += `
                <div class="dqu-ach-card ${isUnlocked ? 'unlocked' : ''}">
                    <div class="dqu-ach-icon">${item.icon}</div>
                    <div class="dqu-ach-details">
                        <div class="dqu-ach-header">
                            <span class="dqu-ach-name">${item.name}</span>
                            <span class="dqu-ach-status-badge ${isUnlocked ? 'unlocked' : 'locked'}">
                                ${isUnlocked ? `✓ ${t("achUnlocked")}` : `🔒 ${t("achLocked")}`}
                            </span>
                        </div>
                        <div class="dqu-ach-desc">${item.desc}</div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = `
            <div style="font-size:11px; font-weight:800; color:#c4b5fd; margin-bottom:4px; display:flex; justify-content:space-between;">
                <span>Kazanılan Başarımlar:</span>
                <span style="color:#34d399;">${unlockedCount} / ${allAchKeys.length}</span>
            </div>
            ${html}
        `;
    }

    function applyCardFilters() {
        questStateCache.forEach(q => {
            const card = document.getElementById(`quest-card-${q.id}`);
            if (!card) return;
            const isDone = q.completed || (q.progress >= q.target && q.target > 0);
            if (currentFilter === "active" && isDone) {
                card.style.display = "none";
            } else if (currentFilter === "done" && !isDone) {
                card.style.display = "none";
            } else {
                card.style.display = "flex";
            }
        });
    }

    function triggerAutoRun() {
        if (typeof chrome !== 'undefined' && chrome.runtime) {
            chrome.runtime.sendMessage({ action: 'executeQuestCode' }, () => {});
        }
    }

    // 🛡️ NEXSUS DCV PANEL - BRAND INTEGRITY & ANTI-TAMPER SYSTEM
    let __IS_PIRACY_LOCKED = false;

    function triggerAntiPiracyLockScreen(reason) {
        if (__IS_PIRACY_LOCKED) return;
        __IS_PIRACY_LOCKED = true;

        const uiContainer = document.getElementById("dqu-ui-container");
        if (uiContainer) {
            uiContainer.innerHTML = `
                <div style="background:linear-gradient(135deg, #0b0f19 0%, #1e1b4b 100%); color:#ef4444; padding:28px 20px; text-align:center; border:2px solid #ef4444; border-radius:18px; box-shadow:0 0 40px rgba(239,68,68,0.5); width:100%; box-sizing:border-box; font-family:sans-serif;">
                    <div style="font-size:48px; margin-bottom:6px; animation:pulse 1s infinite alternate;">🚫</div>
                    <div style="font-size:15px; font-weight:900; color:#f87171; letter-spacing:0.5px; text-transform:uppercase;">LİSANS İHLALİ / PIRACY DETECTED</div>
                    <div style="font-size:11px; color:#e2e8f0; margin-top:10px; line-height:1.5; background:rgba(0,0,0,0.4); padding:12px; border-radius:10px; border:1px solid rgba(239,68,68,0.3);">
                        ⚠️ Bu eklenti <strong style="color:#a78bfa;">NEXSUS</strong> tarafına ait özel lisanslı yazılımdır.<br>
                        İzinsiz geliştirici ismi değiştirme veya kopyalama girişiminde bulunulduğu için <strong style="color:#ef4444;">tüm sistem fonksiyonları kilitlenmiştir!</strong>
                    </div>
                    <div style="font-size:9.5px; color:#94a3b8; margin-top:14px; font-family:monospace; background:rgba(255,255,255,0.04); padding:6px 10px; border-radius:6px;">
                        SECURITY_KEY: 0x4e45585355535f4443565f5345435552495459 (${reason || 'TAMPERED'})
                    </div>
                </div>
            `;
        }
        console.error("❌ CRITICAL SECURITY ALERT: Extension lock screen activated due to piracy/tampering.");
    }

    function enforceAntiTheftProtection() {
        try {
            // 1. Author signature verification
            const authCheck = _decK === "NEXSUS" && _decC === "DCV";
            if (!authCheck) {
                triggerAntiPiracyLockScreen("CODE_SIGNATURE_TAMPERED");
                return false;
            }

            // 2. Manifest integrity verification
            if (typeof chrome !== 'undefined' && chrome.runtime?.getManifest) {
                const manifest = chrome.runtime.getManifest();
                const mAuthor = (manifest.author || "").toUpperCase();
                const mName = (manifest.name || "").toUpperCase();
                if (mAuthor !== "NEXSUS" || !mName.includes("DCV")) {
                    triggerAntiPiracyLockScreen("MANIFEST_AUTHOR_OR_NAME_TAMPERED");
                    return false;
                }
            }

            return true;
        } catch(e) {
            return false;
        }
    }
    setInterval(enforceAntiTheftProtection, 2500);

    function log(msg, type = "info") {
        console.log(`[DCV - NEXSUS Panel] ${msg}`);
        const term = document.getElementById("dqu-terminal");
        if (term) {
            const d = document.createElement("div");
            const time = new Date().toLocaleTimeString('tr-TR');
            d.innerText = `[${time}] ${msg}`;
            const colors = { success: "#22c55e", warn: "#fbbf24", err: "#ef4444", info: "#94a3b8" };
            d.style.color = colors[type] || colors.info;
            d.style.borderBottom = "1px solid rgba(255,255,255,0.03)";
            d.style.paddingBottom = "2px";
            d.style.marginBottom = "2px";
            term.appendChild(d);
            term.scrollTop = term.scrollHeight;
        }
    }

    function updateOverallStats() {
        if (questStateCache.size === 0) return;
        let totalProg = 0, totalTarg = 0, completedCnt = 0;
        let totalOrbs = 0, earnedOrbs = 0;

        questStateCache.forEach(q => {
            totalProg += (q.progress || 0);
            totalTarg += (q.target || 0);
            const qOrbs = q.orbs || 800;
            totalOrbs += qOrbs;
            if (q.completed) {
                completedCnt++;
                earnedOrbs += qOrbs;
            }
        });

        const overallPercent = totalTarg > 0 ? Math.min(100, Math.floor((totalProg / totalTarg) * 100)) : 0;
        const remainingSec = Math.max(0, totalTarg - totalProg);
        const savedSec = totalProg;
        const isAllDone = completedCnt === questStateCache.size && questStateCache.size > 0;

        // Dynamic tab title update
        updateTabTitle(overallPercent, isAllDone);

        // Celebration trigger when everything reaches 100%
        if (isAllDone && !hasCelebrated) {
            hasCelebrated = true;
            playSuccessSound();
            triggerConfetti();
            sendBrowserNotification(
                t("toastAllQuestsDoneTitle"),
                `+${earnedOrbs} Orbs`
            );
            showToast(t("toastAllQuestsDoneTitle"), `+${earnedOrbs} Orbs`, "success");
            log(t("logAllQuestsDone"), "success");
            unlockAchievement('quest_hunter');
        }

        // Summary bar
        const percentEl = document.getElementById("dqu-summary-percent");
        if (percentEl) percentEl.innerText = `%${overallPercent}`;

        const fillEl = document.getElementById("dqu-summary-fill");
        if (fillEl) fillEl.style.width = `${overallPercent}%`;

        const labelEl = document.getElementById("dqu-summary-label");
        if (labelEl) {
            if (isAllDone) {
                labelEl.innerText = `🎉 ${t("toastAllQuestsDoneTitle")} (+${earnedOrbs} Orbs)`;
            } else {
                labelEl.innerText = `${t("summaryLabel")} (${completedCnt}/${questStateCache.size})`;
            }
        }

        // Filter button counts
        const btnAll = document.getElementById("filter-btn-all");
        const btnActive = document.getElementById("filter-btn-active");
        const btnDone = document.getElementById("filter-btn-done");
        if (btnAll) btnAll.innerText = `${t("filterAll")} (${questStateCache.size})`;
        if (btnActive) btnActive.innerText = `${t("filterActive")} (${questStateCache.size - completedCnt})`;
        if (btnDone) btnDone.innerText = `${t("filterDone")} (${completedCnt})`;

        // Stats row
        const statCompleted = document.getElementById("stat-completed-count");
        if (statCompleted) statCompleted.innerText = `${completedCnt}/${questStateCache.size}`;

        const statOrbs = document.getElementById("stat-orbs-count");
        if (statOrbs) statOrbs.innerText = `${earnedOrbs}/${totalOrbs}`;

        // Store and update total extension orbs in localStorage
        const storedOrbs = parseInt(localStorage.getItem('dqu_total_orbs') || '0', 10);
        const finalTotalOrbs = Math.max(storedOrbs, earnedOrbs);
        if (earnedOrbs > storedOrbs) {
            localStorage.setItem('dqu_total_orbs', finalTotalOrbs.toString());
        }

        const statTotalOrbsEl = document.getElementById("stat-total-ext-orbs");
        if (statTotalOrbsEl) statTotalOrbsEl.innerText = `${finalTotalOrbs} Orbs`;

        if (finalTotalOrbs >= 2000) unlockAchievement('orbs_collector');

        const statRemaining = document.getElementById("stat-remaining-time");
        if (statRemaining) {
            statRemaining.innerText = remainingSec > 0 ? formatDuration(remainingSec) : "✓";
        }

        const statSaved = document.getElementById("stat-saved-time");
        if (statSaved) statSaved.innerText = formatDuration(savedSec);
    }

    function updateCardUI(q) {
        let card = document.getElementById(`quest-card-${q.id}`);
        const container = document.getElementById("dqu-quests-container");
        if (!container) return;

        const percent = Math.min(100, Math.floor(((q.progress || 0) / (q.target || 1)) * 100));
        const remSec = Math.max(0, (q.target || 0) - (q.progress || 0));
        const isCompleted = q.completed || percent >= 100;

        if (!card) {
            card = document.createElement('div');
            card.id = `quest-card-${q.id}`;
            card.className = `dqu-quest-card ${isCompleted ? 'completed' : ''}`;
            card.innerHTML = buildCardHTML(q, percent, remSec, isCompleted);
            container.appendChild(card);
            attachCardEvents(card, q);
        } else {
            // Update existing card
            const bar = card.querySelector('.dqu-progress-fill');
            const barText = card.querySelector('.dqu-progress-text');
            const infoRow = card.querySelector('.dqu-card-info');
            const footer = card.querySelector('.dqu-card-footer');
            const badge = card.querySelector('.dqu-badge-status');

            if (bar) {
                bar.style.width = `${percent}%`;
                bar.className = `dqu-progress-fill ${isCompleted ? 'done' : ''}`;
            }
            if (barText) barText.innerText = `%${percent}`;
            if (infoRow) {
                const taskLabel = getTaskLabel(q.taskType);
                infoRow.innerHTML = `
                    <span class="dqu-task-type">📌 ${taskLabel}</span>
                    <span class="dqu-time-rem ${isCompleted ? 'done' : ''}">${isCompleted ? t("timeDone") : `${t("timeRem")} ${formatDuration(remSec)}`}</span>
                `;
            }
            if (footer) {
                footer.innerHTML = `
                    <span>${formatDuration(q.progress || 0)} / ${formatDuration(q.target || 0)}</span>
                    <button class="dqu-opt-btn dqu-locate-btn" data-quest-name="${q.name || ''}">${t("viewQuest")}</button>
                    <strong>%${percent}</strong>
                `;
            }
            if (badge) {
                badge.className = `dqu-badge-status ${isCompleted ? 'dqu-badge-done' : 'dqu-badge-active'}`;
                badge.innerHTML = isCompleted ? '✓ %100' : `▶ %${percent}`;
            }
            if (isCompleted) card.className = "dqu-quest-card completed";
            attachCardEvents(card, q);
        }

        applyCardFilters();
        updateOverallStats();
    }

    function attachCardEvents(card, q) {
        const locateBtn = card.querySelector('.dqu-locate-btn');
        if (locateBtn) {
            locateBtn.onclick = (e) => {
                e.stopPropagation();
                locateQuestInDOM(q.name);
            };
        }
    }

    function getTaskLabel(taskType) {
        const labels = {
            'WATCH_VIDEO': t('taskWatchVideo'),
            'WATCH_VIDEO_ON_MOBILE': t('taskWatchMobile'),
            'PLAY_ON_DESKTOP': t('taskPlayDesktop'),
            'STREAM_ON_DESKTOP': t('taskStreamDesktop'),
            'PLAY_ACTIVITY': t('taskPlayActivity')
        };
        return labels[taskType] || taskType;
    }

    function buildCardHTML(q, percent, remSec, isCompleted) {
        const taskLabel = getTaskLabel(q.taskType);
        const orbAmount = q.orbs || 800;
        return `
            <div class="dqu-card-header">
                <div style="display:flex; align-items:center; gap:6px; max-width:260px; overflow:hidden;">
                    <div class="dqu-game-title">${q.name || 'Discord Quest'}</div>
                    <span style="font-size: 9.5px; font-weight: 800; color: #c084fc; background: rgba(192,132,252,0.15); padding: 1px 6px; border-radius: 6px; border: 1px solid rgba(192,132,252,0.3); white-space: nowrap;">🔮 ${orbAmount} Orbs</span>
                </div>
                <span class="dqu-badge-status ${isCompleted ? 'dqu-badge-done' : 'dqu-badge-active'}">
                    ${isCompleted ? '✓ %100' : `▶ %${percent}`}
                </span>
            </div>
            <div class="dqu-card-info">
                <span class="dqu-task-type">📌 ${taskLabel}</span>
                <span class="dqu-time-rem ${isCompleted ? 'done' : ''}">${isCompleted ? t("timeDone") : `${t("timeRem")} ${formatDuration(remSec)}`}</span>
            </div>
            <div class="dqu-progress-track">
                <div class="dqu-progress-fill ${isCompleted ? 'done' : ''}" style="width: ${percent}%;"></div>
                <div class="dqu-progress-text">%${percent}</div>
            </div>
            <div class="dqu-card-footer">
                <span>${formatDuration(q.progress || 0)} / ${formatDuration(q.target || 0)}</span>
                <button class="dqu-opt-btn dqu-locate-btn" data-quest-name="${q.name || ''}">${t("viewQuest")}</button>
                <strong>%${percent}</strong>
            </div>
        `;
    }

    // 🚀 INTERNAL WEBPACK QUEST ENGINE (For Discord Desktop & BetterDiscord)
    function initWebpackQuestEngine() {
        function waitForWebpack(callback) {
            let attempts = 0;
            const maxAttempts = 100;
            const check = () => {
                if (attempts >= maxAttempts) {
                    window.__CAHIT_PANEL_ENGINE_RUNNING = false;
                    log('❌ Discord Webpack bulunamadı!', 'error');
                    return;
                }
                if (typeof window.webpackChunkdiscord_app === 'undefined') {
                    attempts++;
                    setTimeout(check, 100);
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
                        setTimeout(check, 100);
                        return;
                    }
                    callback(webpackRequire);
                } catch (error) {
                    attempts++;
                    setTimeout(check, 100);
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

        async function processVideoStep(state, api) {
            const { quest, secondsNeeded, currentProgress } = state;
            const speed = 1;
            const nextTime = Math.min(secondsNeeded, currentProgress + speed + Math.random());
            try {
                const res = await api.post({ url: `/quests/${quest.id}/video-progress`, body: { timestamp: nextTime } });
                state.currentProgress = nextTime;
                window.postMessage({ prefix: 'DISCORD_QUEST_COMPLETER', type: 'QUEST_UPDATE', data: { id: quest.id, name: quest.config.messages.questName, progress: Math.floor(state.currentProgress), target: secondsNeeded, completed: false } }, '*');

                if (res.body.completed_at !== null || state.currentProgress >= secondsNeeded) {
                    state.completed = true;
                    window.postMessage({ prefix: 'DISCORD_QUEST_COMPLETER', type: 'QUEST_UPDATE', data: { id: quest.id, name: quest.config.messages.questName, progress: secondsNeeded, target: secondsNeeded, completed: true } }, '*');
                    await api.post({ url: `/quests/${quest.id}/video-progress`, body: { timestamp: secondsNeeded } });
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
                window.postMessage({ prefix: 'DISCORD_QUEST_COMPLETER', type: 'QUEST_UPDATE', data: { id: quest.id, name: quest.config.messages.questName, progress: Math.floor(state.currentProgress), target: secondsNeeded, completed: state.currentProgress >= secondsNeeded } }, '*');

                if (state.currentProgress >= secondsNeeded) {
                    await api.post({
                        url: `/quests/${quest.id}/heartbeat`,
                        body: { stream_key: streamKey, terminal: true }
                    });
                    state.completed = true;
                    window.postMessage({ prefix: 'DISCORD_QUEST_COMPLETER', type: 'QUEST_UPDATE', data: { id: quest.id, name: quest.config.messages.questName, progress: secondsNeeded, target: secondsNeeded, completed: true } }, '*');
                }
            } catch (error) {}
        }

        async function runQuestCode(webpackRequire) {
            try {
                const stores = loadStores(webpackRequire);
                if (!stores) {
                    log('❌ Discord modülleri bulunamadı!', 'error');
                    window.__CAHIT_PANEL_ENGINE_RUNNING = false;
                    return;
                }
                const activeQuests = getActiveQuests(stores.QuestsStore);
                if (activeQuests.length === 0) {
                    log('🎉 Tamamlanacak aktif görev bulunamadı!', 'info');
                    window.__CAHIT_PANEL_ENGINE_RUNNING = false;
                    return;
                }
                const questStates = activeQuests.map(quest => initializeQuestState(quest));
                window.postMessage({
                    prefix: 'DISCORD_QUEST_COMPLETER',
                    type: 'QUEST_LIST',
                    data: questStates.map(state => ({
                        id: state.quest.id,
                        name: state.questName,
                        taskType: state.taskType,
                        progress: Math.floor(state.currentProgress),
                        target: state.secondsNeeded,
                        completed: state.completed
                    }))
                }, '*');

                log(`📊 ${activeQuests.length} aktif görev bulundu, işleniyor...`, 'success');

                for (const state of questStates) {
                    if (state.completed || window.__CAHIT_PANEL_ENGINE_STOPPED) continue;
                    log(`▶ Başladı: ${state.questName} (${state.taskType})`, 'info');
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
                    log('⏸️ Görev motoru durduruldu.', 'warn');
                } else {
                    log('🎉 Tüm görevler tamamlandı!', 'success');
                }
                window.__CAHIT_PANEL_ENGINE_RUNNING = false;
            } catch (error) {
                log(`❌ Motor hatası: ${error?.message || 'Bilinmeyen hata'}`, 'error');
                window.__CAHIT_PANEL_ENGINE_RUNNING = false;
            }
        }

        window.__RUN_NEXSUS_QUEST_ENGINE = function() {
            window.__CAHIT_PANEL_ENGINE_STOPPED = false;
            window.__CAHIT_PANEL_ENGINE_RUNNING = true;
            waitForWebpack(runQuestCode);
        };
    }
    initWebpackQuestEngine();

    // Message event listener from background & page scripts
    window.addEventListener('message', function(event) {
        if (event.source !== window || !event.data || event.data.prefix !== 'DISCORD_QUEST_COMPLETER') return;

        const data = event.data;
        const container = document.getElementById('dqu-quests-container');

        if (data.type === 'QUEST_LIST') {
            questStateCache.clear();
            if (container) container.innerHTML = '';
            data.data.forEach(function(q) {
                questStateCache.set(q.id, q);
                updateCardUI(q);
            });
            updateOverallStats();
            log("🎯 " + data.data.length + " " + t("logQuestsCount"), "success");
        } else if (data.type === 'QUEST_UPDATE') {
            let completedIds = [];
            try { completedIds = JSON.parse(localStorage.getItem('dqu_completed_ids') || '[]'); } catch(e) {}
            const alreadyLogged = completedIds.includes(data.data.id);
            const isFinished = data.data.completed || ((data.data.progress || 0) >= (data.data.target || 1) && (data.data.target || 0) > 0);

            if (isFinished && !alreadyLogged) {
                completedIds.push(data.data.id);
                localStorage.setItem('dqu_completed_ids', JSON.stringify(completedIds));
                playSuccessSound();
                showToast(t("toastQuestDoneTitle"), data.data.name + " (%100)", "success");
                log("✨ " + data.data.name + " (%100)", "success");
            } else if (!isFinished) {
                const pct = Math.min(100, Math.floor(((data.data.progress || 0) / (data.data.target || 1)) * 100));
                log("⚡ [" + data.data.name + "]: %" + pct, "info");
            }
            questStateCache.set(data.data.id, data.data);
            updateCardUI(data.data);
        } else if (data.type === 'HYPESQUAD_RESULT') {
            if (data.data.success) {
                if (data.data.action === 'remove') {
                    showToast("🛡️ HypeSquad", t("toastHsRemoved"), "success", true);
                    log(t("logHsRemoved"), "success");
                } else {
                    showToast("🛡️ HypeSquad", t("hsSuccessMsg"), "success", true);
                    log(t("logHsUpdated"), "success");
                    unlockAchievement('hype_member');
                }
            } else {
                showToast(t("toastHsErrorTitle"), t("toastHsErrorMsg"), "error", false);
            }
        } else if (data.type === 'PROFILE_VISIBILITY_RESULT') {
            if (data.data.success) {
                showToast("🔒 Profil Gizlilik", t("privSuccessMsg"), "success", true);
                log(t("logPrivUpdated"), "success");
            } else {
                showToast(t("toastPrivErrorTitle"), t("toastPrivErrorMsg"), "error", false);
            }
        } else if (data.type === 'ENGINE_LOG') {
            if (data.data && data.data.msg) {
                log(data.data.msg, data.data.msgType || "info");
            }
        }
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectUI);
    } else {
        injectUI();
    }
})();
