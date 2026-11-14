import data from './data.json' with { type: 'json' };


const M = ~0;
const neg = (n) => n * M;
const sub = (a, b) => a + b * M;
const H_CHAR = String.fromCharCode(45);

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600;700&family=Montserrat:wght@600;700;800&display=swap";
document.head.appendChild(fontLink);

const setCss = (el, rules) => {
  Object.keys(rules).forEach((k) => { el.style[k] = rules[k]; });
};

setCss(document.body, {
  fontFamily: "'Inter', sans" + H_CHAR + "serif",
  userSelect: "none"
});

setCss(document.getElementById("topHudBar"), {
  justifyContent: "space" + H_CHAR + "between",
  alignItems: "center",
  borderRadius: "14px",
  backdropFilter: "blur(18px)",
  boxShadow: "0 12px 34px rgba(0,0,0,0.65)",
  zIndex: "25"
});

setCss(document.getElementById("brandBlock"), { alignItems: "center" });
setCss(document.getElementById("liveBeacon"), {
  borderRadius: "50%",
  boxShadow: "0 0 14px #10B981"
});
setCss(document.getElementById("subHeader"), {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "10.5px",
  fontWeight: "700",
  letterSpacing: "1.4px"
});
setCss(document.getElementById("mainHeader"), {
  fontFamily: "'Montserrat', sans" + H_CHAR + "serif",
  fontSize: "19px",
  fontWeight: "800",
  letterSpacing: "0.6px"
});

document.querySelectorAll(".telemetryItem").forEach((el) => {
  setCss(el, { borderLeftWidth: "1px" });
});
document.querySelectorAll(".tLabel").forEach((el) => {
  setCss(el, {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "10px",
    fontWeight: "600",
    letterSpacing: "1px"
  });
});
document.querySelectorAll(".tVal").forEach((el) => {
  setCss(el, {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "15px",
    fontWeight: "700"
  });
});

setCss(document.getElementById("controlDock"), {
  borderRadius: "10px",
  backdropFilter: "blur(16px)",
  boxShadow: "0 8px 24px rgba(0,0,0,0.55)",
  zIndex: "25",
  flexWrap: "wrap",
  alignItems: "center"
});

document.querySelectorAll("button").forEach((btn) => {
  setCss(btn, {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "10.5px",
    fontWeight: "700",
    borderRadius: "7px",
    letterSpacing: "0.4px"
  });
});

setCss(document.getElementById("studioDrawer"), {
  borderRadius: "14px",
  backdropFilter: "blur(24px)",
  boxShadow: "0 24px 60px rgba(0,0,0,0.88)",
  zIndex: "40"
});
setCss(document.getElementById("optionsBar"), {
  flexWrap: "wrap",
  alignItems: "center",
  borderBottomWidth: "1px"
});
setCss(document.getElementById("vaultStatusTitle"), {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "11.5px",
  fontWeight: "700",
  letterSpacing: "0.8px"
});
setCss(document.getElementById("vaultStatusSub"), {
  fontSize: "12px"
});
setCss(document.getElementById("vaultGridContainer"), {
  gridTemplateColumns: "repeat(auto" + H_CHAR + "fill, minmax(195px, 1fr))"
});

setCss(document.getElementById("stageWrap"), {
  alignItems: "stretch",
  justifyContent: "space" + H_CHAR + "between",
  zIndex: "20"
});

setCss(document.getElementById("storyCard"), {
  flex: "1",
  borderRadius: "16px",
  backdropFilter: "blur(20px)",
  boxShadow: "0 18px 44px rgba(0,0,0,0.72)"
});

setCss(document.getElementById("badgePhase"), {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "11px",
  fontWeight: "700",
  borderRadius: "5px",
  letterSpacing: "1px"
});
setCss(document.getElementById("badgeTitle"), {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "11.5px",
  fontWeight: "700",
  letterSpacing: "0.8px",
  alignSelf: "center"
});
setCss(document.getElementById("badgeVoiceState"), {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "10.5px",
  fontWeight: "700",
  letterSpacing: "0.8px",
  alignSelf: "center"
});
setCss(document.getElementById("storyHeadline"), {
  fontFamily: "'Montserrat', sans" + H_CHAR + "serif",
  fontSize: "20px",
  fontWeight: "700",
  letterSpacing: "0.2px"
});
setCss(document.getElementById("storyBody"), {
  fontFamily: "'Inter', sans" + H_CHAR + "serif",
  fontSize: "15.5px",
  lineHeight: "1.52",
  fontWeight: "400"
});

setCss(document.getElementById("scienceCard"), {
  width: "300px",
  borderRadius: "16px",
  backdropFilter: "blur(20px)",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: "0 18px 44px rgba(0,0,0,0.72)"
});
setCss(document.getElementById("scienceTag"), {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "10px",
  fontWeight: "700",
  letterSpacing: "1.2px"
});
setCss(document.getElementById("scienceMetric"), {
  fontFamily: "'Montserrat', sans" + H_CHAR + "serif",
  fontSize: "23px",
  fontWeight: "800"
});
setCss(document.getElementById("scienceDesc"), {
  fontFamily: "'Inter', sans" + H_CHAR + "serif",
  fontSize: "12.8px",
  lineHeight: "1.45"
});

setCss(document.getElementById("scrubberBar"), { zIndex: "20" });

/* ============================================================================
   10 CORE NASA IMAGE SLOTS + PERMANENT INDEXEDDB VAULT + AUTO MATTE
   (Pale Blue Dot, Titan, Io, and Triton are rendered via photorealistic shaders!)
============================================================================ */
const rawAssets = {
  voyager: {
    label: "Voyager 1 Probe",
    files: ["assets/voyager.png"],
    mode: "lightFlood",
    canvas: null,
    rawImg: null,
    dataUrl: null,
    ready: false
  },
  earth: {
    label: "Earth Blue Marble",
    files: ["assets/earth.png"],
    mode: "autoGlobe",
    canvas: null,
    rawImg: null,
    dataUrl: null,
    ready: false
  },
  moon: {
    label: "The Moon",
    files: ["assets/moon.png"],
    mode: "darkPlanet",
    canvas: null,
    rawImg: null,
    dataUrl: null,
    ready: false
  },
  reflector: {
    label: "Apollo Retroreflector",
    files: ["assets/reflector.png"],
    mode: "darkObjectFlood",
    canvas: null,
    rawImg: null,
    dataUrl: null,
    ready: false
  },
  record: {
    label: "Golden Record Cover",
    files: ["assets/record.png"],
    mode: "darkRecord",
    canvas: null,
    rawImg: null,
    dataUrl: null,
    ready: false
  },
  jupiter: {
    label: "Jupiter (PIA00343)",
    files: ["assets/PIA00343.jpg"],
    mode: "darkPlanet",
    canvas: null,
    rawImg: null,
    dataUrl: null,
    ready: false
  },
  saturn: {
    label: "Saturn (PIA01364)",
    files: ["assets/PIA01364.jpg"],
    mode: "darkSaturn",
    canvas: null,
    rawImg: null,
    dataUrl: null,
    ready: false
  },
  uranus: {
    label: "Uranus (PIA18182)",
    files: ["assets/PIA18182.png"],
    mode: "darkPlanet",
    canvas: null,
    rawImg: null,
    dataUrl: null,
    ready: false
  },
  neptune: {
    label: "Neptune (PIA01492)",
    files: ["assets/PIA01492.png"],
    mode: "darkPlanet",
    canvas: null,
    rawImg: null,
    dataUrl: null,
    ready: false
  },
  galaxy: {
    label: "Andromeda Galaxy",
    files: ["assets/galaxy.png"],
    mode: "galaxyBlend",
    canvas: null,
    rawImg: null,
    dataUrl: null,
    ready: false
  }
};

const DB_NAME = "VoyagerBroadcastVaultV5";
const STORE_NAME = "MattedAssets";

const openVaultDB = () => new Promise((resolve) => {
  if (!window.indexedDB) { resolve(null); return; }
  const req = window.indexedDB.open(DB_NAME, 1);
  req.onupgradeneeded = (e) => {
    const db = e.target.result;
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME);
    }
  };
  req.onsuccess = (e) => resolve(e.target.result);
  req.onerror = () => resolve(null);
});

const saveAssetToDB = async (key, dataUrl) => {
  const db = await openVaultDB();
  if (!db) return;
  const tx = db.transaction(STORE_NAME, "readwrite");
  tx.objectStore(STORE_NAME).put(dataUrl, key);
};

const loadAllAssetsFromDB = async () => {
  const db = await openVaultDB();
  if (!db) return {};
  return new Promise((resolve) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const out = {};
    const keysReq = store.getAllKeys();
    keysReq.onsuccess = () => {
      const keys = keysReq.result || [];
      if (keys.length === 0) { resolve(out); return; }
      let remaining = keys.length;
      keys.forEach((k) => {
        const gReq = store.get(k);
        gReq.onsuccess = () => {
          if (gReq.result) out[k] = gReq.result;
          remaining = sub(remaining, 1);
          if (remaining === 0) resolve(out);
        };
        gReq.onerror = () => {
          remaining = sub(remaining, 1);
          if (remaining === 0) resolve(out);
        };
      });
    };
    keysReq.onerror = () => resolve(out);
  });
};

const clearVaultDB = async () => {
  const db = await openVaultDB();
  if (!db) return;
  const tx = db.transaction(STORE_NAME, "readwrite");
  tx.objectStore(STORE_NAME).clear();
};

const removeImageBackground = (img, mode) => {
  const srcW = img.naturalWidth || img.width;
  const srcH = img.naturalHeight || img.height;
  const maxDim = 700;
  const scale = Math.min(1, maxDim / Math.max(srcW, srcH));
  const w = Math.max(1, Math.round(srcW * scale));
  const h = Math.max(1, Math.round(srcH * scale));

  const off = document.createElement("canvas");
  off.width = w;
  off.height = h;
  const octx = off.getContext("2d");
  octx.drawImage(img, 0, 0, w, h);

  try {
    const imgData = octx.getImageData(0, 0, w, h);
    const d = imgData.data;

    if (mode === "galaxyBlend") {
      const cx = w * 0.5;
      const cy = h * 0.5;
      const rx = w * 0.48;
      const ry = h * 0.48;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          const nx = sub(x, cx) / rx;
          const ny = sub(y, cy) / ry;
          const ellip = Math.sqrt(nx * nx + ny * ny);
          const lum = Math.max(d[i], d[i + 1], d[i + 2]);
          if (ellip > 1.0 || lum < 14) {
            d[i + 3] = 0;
          } else {
            const radialFade = ellip > 0.65 ? sub(1.0, ellip) / 0.35 : 1.0;
            const lumFade = lum < 45 ? sub(lum, 14) / 31 : 1.0;
            d[i + 3] = Math.floor(255 * radialFade * lumFade);
          }
        }
      }
      octx.putImageData(imgData, 0, 0);
      return { canvas: off, dataUrl: off.toDataURL("image/png"), tainted: false };
    }

    if (mode === "autoGlobe" || mode === "darkPlanet" || mode === "darkRecord") {
      const cornerLum = (d[0] + d[1] + d[2]) * 0.333;
      const isWhiteBg = cornerLum > 200;

      let minX = w, maxX = 0, minY = h, maxY = 0;
      for (let y = 0; y < h; y += 2) {
        for (let x = 0; x < w; x += 2) {
          const i = (y * w + x) * 4;
          const lum = (d[i] + d[i + 1] + d[i + 2]) * 0.333;
          const isFg = isWhiteBg ? (lum < 238) : (lum > 22);
          if (isFg) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }

      if (maxX <= minX || maxY <= minY) {
        minX = 0; maxX = w; minY = 0; maxY = h;
      }

      const cx = (minX + maxX) * 0.5;
      const cy = (minY + maxY) * 0.5;
      const radius = Math.min(sub(maxX, minX), sub(maxY, minY)) * 0.492;
      const softR = sub(radius, 3.5);

      const sqSize = Math.max(32, Math.round(radius * 2.08));
      const sqCanvas = document.createElement("canvas");
      sqCanvas.width = sqSize;
      sqCanvas.height = sqSize;
      const sqCtx = sqCanvas.getContext("2d");

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          const dx = sub(x, cx);
          const dy = sub(y, cy);
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > radius) {
            d[i + 3] = 0;
          } else if (dist > softR) {
            d[i + 3] = Math.floor(255 * (sub(radius, dist) / 3.5));
          }
        }
      }

      octx.putImageData(imgData, 0, 0);
      const halfSq = sqSize * 0.5;
      sqCtx.drawImage(off, sub(halfSq, cx), sub(halfSq, cy));
      return { canvas: sqCanvas, dataUrl: sqCanvas.toDataURL("image/png"), tainted: false };
    }

    if (mode === "lightFlood" || mode === "darkObjectFlood" || mode === "darkSaturn") {
      const visited = new Uint8Array(w * h);
      const queue = new Int32Array(w * h);
      let head = 0;
      let tail = 0;

      const pushSeed = (x, y) => {
        const p = y * w + x;
        if (!visited[p]) {
          visited[p] = 1;
          queue[tail] = p;
          tail += 1;
        }
      };

      for (let x = 0; x < w; x++) {
        pushSeed(x, 0);
        pushSeed(x, sub(h, 1));
      }
      for (let y = 0; y < h; y++) {
        pushSeed(0, y);
        pushSeed(sub(w, 1), y);
      }

      const bgR = d[0];
      const bgG = d[1];
      const bgB = d[2];

      const isBgPixel = (pIdx) => {
        const i = pIdx * 4;
        const r = d[i];
        const g = d[i + 1];
        const b = d[i + 2];
        if (mode === "lightFlood") {
          const diffR = Math.abs(sub(r, bgR));
          const diffG = Math.abs(sub(g, bgG));
          const diffB = Math.abs(sub(b, bgB));
          const sat = sub(Math.max(r, g, b), Math.min(r, g, b));
          return diffR < 16 && diffG < 16 && diffB < 16 && sat < 12 && r > 226;
        }
        return Math.max(r, g, b) < 22;
      };

      while (head < tail) {
        const curr = queue[head];
        head += 1;
        d[curr * 4 + 3] = 0;

        const cx = curr % w;
        const cy = Math.floor(curr / w);

        if (cx > 0) {
          const left = sub(curr, 1);
          if (!visited[left] && isBgPixel(left)) { visited[left] = 1; queue[tail] = left; tail += 1; }
        }
        if (cx < sub(w, 1)) {
          const right = curr + 1;
          if (!visited[right] && isBgPixel(right)) { visited[right] = 1; queue[tail] = right; tail += 1; }
        }
        if (cy > 0) {
          const up = sub(curr, w);
          if (!visited[up] && isBgPixel(up)) { visited[up] = 1; queue[tail] = up; tail += 1; }
        }
        if (cy < sub(h, 1)) {
          const down = curr + w;
          if (!visited[down] && isBgPixel(down)) { visited[down] = 1; queue[tail] = down; tail += 1; }
        }
      }

      if (mode === "lightFlood") {
        for (let p = 0; p < w * h; p++) {
          if (!visited[p]) {
            const i = p * 4;
            if (Math.abs(sub(d[i], bgR)) <= 4 && Math.abs(sub(d[i + 1], bgG)) <= 4 && Math.abs(sub(d[i + 2], bgB)) <= 4) {
              d[i + 3] = 0;
            }
          }
        }
      } else if (mode === "darkSaturn") {
        for (let p = 0; p < w * h; p++) {
          const i = p * 4;
          const lum = Math.max(d[i], d[i + 1], d[i + 2]);
          if (lum < 14) d[i + 3] = 0;
          else if (lum < 34) d[i + 3] = Math.floor(255 * (sub(lum, 14) / 20));
        }
      }

      for (let y = 1; y < sub(h, 1); y++) {
        for (let x = 1; x < sub(w, 1); x++) {
          const p = y * w + x;
          const i = p * 4;
          if (d[i + 3] > 0) {
            let emptyN = 0;
            if (d[sub(p, 1) * 4 + 3] === 0) emptyN += 1;
            if (d[(p + 1) * 4 + 3] === 0) emptyN += 1;
            if (d[sub(p, w) * 4 + 3] === 0) emptyN += 1;
            if (d[(p + w) * 4 + 3] === 0) emptyN += 1;
            if (emptyN > 0) {
              d[i + 3] = Math.floor(d[i + 3] * (1 + neg(emptyN * 0.15)));
            }
          }
        }
      }

      octx.putImageData(imgData, 0, 0);
      return { canvas: off, dataUrl: off.toDataURL("image/png"), tainted: false };
    }

    octx.putImageData(imgData, 0, 0);
    return { canvas: off, dataUrl: off.toDataURL("image/png"), tainted: false };
  } catch (err) {
    return { canvas: null, dataUrl: null, tainted: true };
  }
};

const hydrateFromDataUrl = (key, dataUrl) => new Promise((resolve) => {
  const img = new Image();
  img.onload = () => {
    const off = document.createElement("canvas");
    off.width = img.naturalWidth || img.width;
    off.height = img.naturalHeight || img.height;
    off.getContext("2d").drawImage(img, 0, 0);
    rawAssets[key].canvas = off;
    rawAssets[key].rawImg = img;
    rawAssets[key].dataUrl = dataUrl;
    rawAssets[key].ready = true;
    resolve();
  };
  img.onerror = () => resolve();
  img.src = dataUrl;
});

const renderVaultGridUI = () => {
  const keys = Object.keys(rawAssets);
  let savedCount = 0;
  keys.forEach((k) => {
    if (rawAssets[k].canvas) savedCount += 1;
  });

  const optBtn = document.getElementById("btnStudioOptions");
  optBtn.textContent = "⚙ STUDIO OPTIONS (" + savedCount + "/" + keys.length + " ASSETS)";

  const grid = document.getElementById("vaultGridContainer");
  if (!grid) return;
  grid.innerHTML = "";

  keys.forEach((k) => {
    const item = rawAssets[k];
    const slot = document.createElement("div");
    slot.className = "vaultSlot";
    setCss(slot, {
      borderRadius: "8px",
      alignItems: "center",
      borderColor: item.canvas ? "rgba(16, 185, 129, 0.55)" : "rgba(148, 163, 184, 0.22)"
    });

    const thumb = document.createElement("div");
    setCss(thumb, {
      width: "38px",
      height: "38px",
      borderRadius: "6px",
      background: "#04070E",
      border: "1px solid rgba(148,163,184,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    });

    if (item.dataUrl) {
      const tImg = document.createElement("img");
      tImg.src = item.dataUrl;
      setCss(tImg, { maxWidth: "34px", maxHeight: "34px" });
      thumb.appendChild(tImg);
    } else {
      thumb.textContent = item.ready ? "⚡" : "○";
      thumb.style.color = item.ready ? "#F59E0B" : "#64748B";
    }

    const meta = document.createElement("div");
    const title = document.createElement("div");
    title.textContent = item.label;
    setCss(title, {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "10.5px",
      fontWeight: "700",
      color: "#F8FAFC"
    });

    const status = document.createElement("div");
    if (item.canvas) {
      status.textContent = "✓ SAVED IN VAULT";
      status.style.color = "#10B981";
    } else if (item.ready) {
      status.textContent = "⚡ LOADED (DROP TO SAVE)";
      status.style.color = "#F59E0B";
    } else {
      status.textContent = "○ " + item.files[0];
      status.style.color = "#94A3B8";
    }
    setCss(status, {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "9px",
      marginTop: "2px"
    });

    meta.appendChild(title);
    meta.appendChild(status);
    slot.appendChild(thumb);
    slot.appendChild(meta);
    grid.appendChild(slot);
  });
};

const initializeAssetPipeline = async () => {
  if (window.BAKED_ASSETS) {
    const bakedKeys = Object.keys(window.BAKED_ASSETS);
    for (let i = 0; i < bakedKeys.length; i++) {
      const k = bakedKeys[i];
      if (rawAssets[k] && window.BAKED_ASSETS[k]) {
        await hydrateFromDataUrl(k, window.BAKED_ASSETS[k]);
      }
    }
  }

  const dbMap = await loadAllAssetsFromDB();
  const dbKeys = Object.keys(dbMap);
  for (let i = 0; i < dbKeys.length; i++) {
    const k = dbKeys[i];
    if (rawAssets[k] && !rawAssets[k].canvas && dbMap[k]) {
      await hydrateFromDataUrl(k, dbMap[k]);
    }
  }

  renderVaultGridUI();

  Object.keys(rawAssets).forEach((key) => {
    const item = rawAssets[key];
    if (item.canvas) return;

    const tryCandidate = (idx) => {
      if (idx >= item.files.length || item.canvas) return;
      const img = new Image();
      img.onload = () => {
        item.rawImg = img;
        item.ready = true;
        const res = removeImageBackground(img, item.mode);
        if (!res.tainted && res.canvas && res.dataUrl) {
          item.canvas = res.canvas;
          item.dataUrl = res.dataUrl;
          saveAssetToDB(key, res.dataUrl);
        }
        renderVaultGridUI();
      };
      img.onerror = () => {
        tryCandidate(idx + 1);
      };
      img.src = item.files[idx];
    };

    tryCandidate(0);
  });
};

const matchFileToKey = (filename) => {
  const lower = filename.toLowerCase();
  if (lower.indexOf("earth") !== M) return "earth";
  if (lower.indexOf("voyager") !== M) return "voyager";
  if (lower.indexOf("moon") !== M) return "moon";
  if (lower.indexOf("reflector") !== M || lower.indexOf("prism") !== M) return "reflector";
  if (lower.indexOf("record") !== M || lower.indexOf("golden") !== M) return "record";
  if (lower.indexOf("00343") !== M || lower.indexOf("jupiter") !== M) return "jupiter";
  if (lower.indexOf("01364") !== M || lower.indexOf("saturn") !== M) return "saturn";
  if (lower.indexOf("18182") !== M || lower.indexOf("uranus") !== M) return "uranus";
  if (lower.indexOf("01492") !== M || lower.indexOf("neptune") !== M) return "neptune";
  if (lower.indexOf("galaxy") !== M || lower.indexOf("andromeda") !== M || lower.indexOf("17563") !== M) return "galaxy";
  return null;
};

const processUserFiles = (fileList) => {
  Array.from(fileList).forEach((f) => {
    const key = matchFileToKey(f.name);
    if (!key) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const item = rawAssets[key];
        item.rawImg = img;
        item.ready = true;
        const res = removeImageBackground(img, item.mode);
        if (res.canvas && res.dataUrl) {
          item.canvas = res.canvas;
          item.dataUrl = res.dataUrl;
          saveAssetToDB(key, res.dataUrl);
        }
        renderVaultGridUI();
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(f);
  });
};

const bakeStandaloneHtmlFile = () => {
  const mapToBake = {};
  Object.keys(rawAssets).forEach((k) => {
    if (rawAssets[k].dataUrl) {
      mapToBake[k] = rawAssets[k].dataUrl;
    }
  });

  const scriptEl = document.getElementById("bakedAssetScript");
  scriptEl.textContent = "window.BAKED_ASSETS = " + JSON.stringify(mapToBake) + ";";

  const fullHtml = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
  const blob = new Blob([fullHtml], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "voyager_broadcast_final.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

document.getElementById("btnStudioOptions").addEventListener("click", () => {
  const dr = document.getElementById("studioDrawer");
  const open = dr.style.display === "block";
  dr.style.display = open ? "none" : "block";
  renderVaultGridUI();
});
document.getElementById("btnCloseOptions").addEventListener("click", () => {
  document.getElementById("studioDrawer").style.display = "none";
});
document.getElementById("btnAddFiles").addEventListener("click", () => {
  document.getElementById("assetPicker").click();
});
document.getElementById("btnBake").addEventListener("click", bakeStandaloneHtmlFile);
document.getElementById("btnClearVault").addEventListener("click", async () => {
  await clearVaultDB();
  Object.keys(rawAssets).forEach((k) => {
    rawAssets[k].canvas = null;
    rawAssets[k].dataUrl = null;
    rawAssets[k].ready = false;
  });
  renderVaultGridUI();
});

document.getElementById("assetPicker").addEventListener("change", (e) => {
  if (e.target.files && e.target.files.length > 0) {
    processUserFiles(e.target.files);
  }
});

window.addEventListener("dragover", (e) => { e.preventDefault(); });
window.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    processUserFiles(e.dataTransfer.files);
  }
});

initializeAssetPipeline();

/* ============================================================================
   PUNCHY, CURIOUS, FACT VERIFIED STORY PLAYLISTS
============================================================================ */
const cutFullScenes = data.cut30Scenes;
const cut30Scenes = cutFullScenes.slice(0,4);



const canvas = document.getElementById("cosmosCanvas");
const ctx = canvas.getContext("2d");
let W = window.innerWidth;
let H = window.innerHeight;
canvas.width = W;
canvas.height = H;

window.addEventListener("resize", () => {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
});

const starLayers = [
  Array.from({ length: 170 }, () => ({ x: Math.random(), y: Math.random(), r: 0.75, v: 0.00005, a: 0.45, c: "#E2E8F0" })),
  Array.from({ length: 100 }, () => ({ x: Math.random(), y: Math.random(), r: 1.35, v: 0.00014, a: 0.78, c: "#F8FAFC" })),
  Array.from({ length: 42 }, () => ({ x: Math.random(), y: Math.random(), r: 2.2, v: 0.00028, a: 0.95, c: "#38BDF8" }))
];

const nebulaClouds = Array.from({ length: 6 }, (_, i) => ({
  x: (i + 0.5) / 6,
  y: 0.25 + (i % 3) * 0.18,
  rad: 195 + (i * 35),
  col: i % 2 === 0 ? "rgba(10, 136, 111, 0.055)" : "rgba(25, 114, 120, 0.06)"
}));

const tritonPlumeParticles = Array.from({ length: 44 }, (_, i) => ({
  phase: i / 44,
  jitter: (Math.random() + neg(0.5)) * 5
}));

/* ============================================================================
   PLAYBACK TIMELINE & 5 SPEED VOICEOVER ENGINE (1, 1.05, 1.15, 1.25, 1.5)
============================================================================ */
let activePlaylist = cut30Scenes;
let isPlaying = true;
let elapsedSec = 0;
let lastFrameTime = performance.now();
let currentIdx = M;
let sceneTransitionProg = 1;
let soundActive = true;
let voiceActive = true;
let cleanMode = false;

const speedPresets = [1, 1.05, 1.15, 1.25, 1.5];
let speedIdx = 2;
let voiceRate = 1.15;

let curatedVoices = [];
let selectedVoiceIdx = 0;

const rankVoice = (v) => {
  const nm = (v.name || "") + " " + (v.lang || "");
  let score = 0;
  if (nm.indexOf("en") !== M) score += 20;
  if (nm.indexOf("Natural") !== M || nm.indexOf("Online") !== M || nm.indexOf("Neural") !== M) score += 100;
  if (nm.indexOf("Guy") !== M || nm.indexOf("Andrew") !== M || nm.indexOf("Brian") !== M || nm.indexOf("Aria") !== M || nm.indexOf("Christopher") !== M) score += 60;
  if (nm.indexOf("Google US English") !== M || nm.indexOf("Google UK English Male") !== M) score += 80;
  if (nm.indexOf("Daniel") !== M || nm.indexOf("Samantha") !== M || nm.indexOf("Alex") !== M) score += 50;
  if (nm.indexOf("David") !== M || nm.indexOf("Zira") !== M) score = sub(score, 25);
  return score;
};

const loadNaturalVoices = () => {
  if (!("speechSynthesis" in window)) return;
  const raw = window.speechSynthesis.getVoices();
  if (!raw || raw.length === 0) return;

  const englishVoices = raw.filter((v) => (v.lang || "").toLowerCase().indexOf("en") === 0);
  const pool = englishVoices.length > 0 ? englishVoices : raw;
  curatedVoices = pool.slice().sort((a, b) => sub(rankVoice(b), rankVoice(a)));
  selectedVoiceIdx = 0;

  if (curatedVoices.length > 0) {
    const cleanName = curatedVoices[0].name.replace(/Microsoft |Google |Online \(Natural\) |Desktop /g, "").slice(0, 14);
    document.getElementById("btnVoiceCycle").textContent = "🗣 VOICE: " + cleanName.toUpperCase();
  }
};

if ("speechSynthesis" in window) {
  loadNaturalVoices();
  window.speechSynthesis.onvoiceschanged = loadNaturalVoices;
}

const formatSpeedLabel = (r) => (r === 1 ? "1X" : (r === 1.5 ? "1.5X" : r.toFixed(2) + "X"));

const speakSceneVoiceover = (scriptText) => {
  if (!voiceActive || !("speechSynthesis" in window)) {
    document.getElementById("badgeVoiceState").textContent = "○ VOICEOVER MUTED";
    return;
  }
  window.speechSynthesis.cancel();
  if (!isPlaying) return;

  const utter = new SpeechSynthesisUtterance(scriptText);
  if (curatedVoices.length > 0 && curatedVoices[selectedVoiceIdx]) {
    utter.voice = curatedVoices[selectedVoiceIdx];
  }

  utter.rate = voiceRate;
  utter.pitch = 0.96;
  utter.volume = 1.0;

  utter.onstart = () => {
    document.getElementById("badgeVoiceState").textContent = "● SPEAKING (" + formatSpeedLabel(voiceRate) + ")";
    document.getElementById("badgeVoiceState").style.color = "#10B981";
  };
  utter.onend = () => {
    document.getElementById("badgeVoiceState").textContent = "● " + formatSpeedLabel(voiceRate) + " SYNC READY";
    document.getElementById("badgeVoiceState").style.color = "#38BDF8";
  };

  window.speechSynthesis.speak(utter);
};

/* ============================================================================
   MAXIMUM REAL SPACE SONIFICATION ENGINE
============================================================================ */
let audioCtx = null;
let masterGain = null;
let spaceDelay = null;
let noiseFilter = null;

const initMaximumSpaceAudio = () => {
  if (audioCtx) return;
  const AudioClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioClass) return;
  audioCtx = new AudioClass();

  masterGain = audioCtx.createGain();
  masterGain.gain.value = soundActive ? 0.88 : 0.0;
  masterGain.connect(audioCtx.destination);

  spaceDelay = audioCtx.createDelay(2.5);
  spaceDelay.delayTime.value = 0.46;
  const fb = audioCtx.createGain();
  fb.gain.value = 0.42;
  const df = audioCtx.createBiquadFilter();
  df.type = "lowpass";
  df.frequency.value = 1600;
  spaceDelay.connect(df);
  df.connect(fb);
  fb.connect(spaceDelay);
  df.connect(masterGain);

  const bufSize = audioCtx.sampleRate * 4;
  const noiseBuf = audioCtx.createBuffer(1, bufSize, audioCtx.sampleRate);
  const out = noiseBuf.getChannelData(0);
  let lastOut = 0.0;
  for (let i = 0; i < bufSize; i++) {
    const white = Math.random() * 2 + neg(1);
    out[i] = (lastOut + (0.02 * white)) / 1.02;
    lastOut = out[i];
    out[i] *= 3.2;
  }

  const whiteSource = audioCtx.createBufferSource();
  whiteSource.buffer = noiseBuf;
  whiteSource.loop = true;

  noiseFilter = audioCtx.createBiquadFilter();
  noiseFilter.type = "bandpass";
  noiseFilter.frequency.value = 180;
  noiseFilter.Q.value = 3.5;

  const windLfo = audioCtx.createOscillator();
  const windLfoGain = audioCtx.createGain();
  windLfo.frequency.value = 0.08;
  windLfoGain.gain.value = 95;
  windLfo.connect(windLfoGain);
  windLfoGain.connect(noiseFilter.frequency);
  windLfo.start();

  const noiseGain = audioCtx.createGain();
  noiseGain.gain.value = 0.065;
  whiteSource.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(masterGain);
  whiteSource.start();

  const organFilter = audioCtx.createBiquadFilter();
  organFilter.type = "lowpass";
  organFilter.frequency.value = 260;
  const organGain = audioCtx.createGain();
  organGain.gain.value = 0.048;
  organFilter.connect(organGain);
  organGain.connect(masterGain);

  const chordFreqs = [36.71, 73.42, 110.0, 146.83, 220.0];
  chordFreqs.forEach((f, idx) => {
    const o = audioCtx.createOscillator();
    o.type = idx < 2 ? "sine" : (idx % 2 === 0 ? "sawtooth" : "triangle");
    o.frequency.value = f + idx * 0.12;
    o.connect(organFilter);
    o.start();
  });
};

const triggerSynthTone = (freqStart, freqEnd, oscType, delaySec, durSec, peakVol, useEcho) => {
  if (!audioCtx || !soundActive) return;
  const t0 = audioCtx.currentTime + delaySec;
  const osc = audioCtx.createOscillator();
  const flt = audioCtx.createBiquadFilter();
  const g = audioCtx.createGain();

  flt.type = "lowpass";
  flt.frequency.setValueAtTime(2800, t0);

  osc.type = oscType;
  osc.frequency.setValueAtTime(freqStart, t0);
  if (freqEnd !== freqStart) {
    osc.frequency.exponentialRampToValueAtTime(freqEnd, t0 + durSec);
  }

  g.gain.setValueAtTime(0.0001, t0);
  g.gain.linearRampToValueAtTime(peakVol, t0 + 0.05);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + durSec);

  osc.connect(flt);
  flt.connect(g);
  g.connect(masterGain);
  if (useEcho && spaceDelay) g.connect(spaceDelay);

  osc.start(t0);
  osc.stop(t0 + durSec + 0.06);
};

const playSpaceSonification = (visualType) => {
  initMaximumSpaceAudio();
  if (!audioCtx || !soundActive) return;
  if (audioCtx.state === "suspended") audioCtx.resume();

  triggerSynthTone(2525, 2525, "sine", 0.0, 0.11, 0.024, true);

  if (visualType === "signalWave") {
    if (noiseFilter) noiseFilter.frequency.setTargetAtTime(160, audioCtx.currentTime, 0.5);
    triggerSynthTone(45, 36.71, "sine", 0.0, 2.6, 0.14, false);
    triggerSynthTone(587.33, 587.33, "sine", 0.14, 1.1, 0.04, true);
    triggerSynthTone(880.0, 440.0, "sine", 0.55, 1.6, 0.035, true);
  } else if (visualType === "lunarLaser") {
    if (noiseFilter) noiseFilter.frequency.setTargetAtTime(110, audioCtx.currentTime, 0.5);
    triggerSynthTone(1318.5, 1318.5, "triangle", 0.05, 0.6, 0.04, true);
    triggerSynthTone(1760.0, 1760.0, "sine", 0.22, 0.8, 0.038, true);
    triggerSynthTone(2637.0, 1318.5, "sine", 0.45, 1.2, 0.03, true);
  } else if (visualType === "goldenRecord") {
    for (let p = 0; p < 6; p++) {
      triggerSynthTone(1200 + p * 80, 900, "sine", p * 0.18, 0.06, 0.022, true);
    }
    triggerSynthTone(293.66, 293.66, "triangle", 0.1, 2.2, 0.05, true);
    triggerSynthTone(440.0, 440.0, "sine", 0.35, 2.4, 0.045, true);
  } else if (visualType === "jupiterIo") {
    if (noiseFilter) noiseFilter.frequency.setTargetAtTime(380, audioCtx.currentTime, 0.4);
    triggerSynthTone(62.0, 41.2, "sawtooth", 0.0, 2.8, 0.08, false);
    triggerSynthTone(146.83, 110.0, "triangle", 0.2, 1.9, 0.05, true);
  } else if (visualType === "titanSlingshot") {
    if (noiseFilter) noiseFilter.frequency.setTargetAtTime(290, audioCtx.currentTime, 0.4);
    triggerSynthTone(146.83, 440.0, "sine", 0.05, 2.1, 0.055, true);
    triggerSynthTone(220.0, 659.25, "triangle", 0.25, 2.2, 0.038, true);
  } else if (visualType === "uranusNeptune") {
    if (noiseFilter) noiseFilter.frequency.setTargetAtTime(520, audioCtx.currentTime, 0.3);
    triggerSynthTone(523.25, 261.63, "sine", 0.05, 1.8, 0.04, true);
    triggerSynthTone(783.99, 392.0, "sine", 0.3, 2.0, 0.035, true);
  } else if (visualType === "paleBlueDot") {
    triggerSynthTone(1800, 120, "sawtooth", 0.02, 0.05, 0.06, false);
    triggerSynthTone(1900, 3100, "sine", 0.35, 2.2, 0.032, true);
    triggerSynthTone(2050, 3180, "sine", 0.55, 1.9, 0.024, true);
  } else {
    if (noiseFilter) noiseFilter.frequency.setTargetAtTime(140, audioCtx.currentTime, 0.8);
    triggerSynthTone(73.42, 73.42, "sine", 0.0, 3.0, 0.08, true);
    triggerSynthTone(164.81, 164.81, "sine", 0.25, 2.8, 0.045, true);
    triggerSynthTone(329.63, 329.63, "sine", 0.5, 3.2, 0.035, true);
  }
};

const jumpToChapter = (targetIdx) => {
  initMaximumSpaceAudio();
  const clamped = Math.max(0, Math.min(sub(activePlaylist.length, 1), targetIdx));
  let jumpSec = 0;
  for (let i = 0; i < clamped; i++) jumpSec += activePlaylist[i].duration;
  elapsedSec = jumpSec;
  lastFrameTime = performance.now();
  isPlaying = true;
  document.getElementById("btnPlay").textContent = "⏸ PAUSE";
  currentIdx = M;
};

const buildScrubber = () => {
  const bar = document.getElementById("scrubberBar");
  bar.innerHTML = "";
  activePlaylist.forEach((sc, idx) => {
    const step = document.createElement("div");
    step.className = "chapterStep";
    setCss(step, {
      flex: "" + sc.duration,
      borderRadius: "6px",
      alignItems: "center"
    });

    const fill = document.createElement("div");
    fill.className = "chapterFill";
    fill.id = "fillStep" + idx;

    const lbl = document.createElement("div");
    lbl.className = "chapterLabel";
    lbl.id = "lblStep" + idx;
    lbl.textContent = sc.short;
    setCss(lbl, {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: "10px",
      fontWeight: "700",
      letterSpacing: "0.6px",
      whiteSpace: "nowrap"
    });

    step.appendChild(fill);
    step.appendChild(lbl);
    step.addEventListener("click", () => jumpToChapter(idx));
    bar.appendChild(step);
  });
};

const formatTime = (sec) => {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return (m < 10 ? "0" + m : "" + m) + ":" + (s < 10 ? "0" + s : "" + s);
};

const totalSeconds = () => activePlaylist.reduce((acc, s) => acc + s.duration, 0);

const restartShow = () => {
  initMaximumSpaceAudio();
  elapsedSec = 0;
  lastFrameTime = performance.now();
  isPlaying = true;
  document.getElementById("btnPlay").textContent = "⏸ PAUSE";
  currentIdx = M;
};

const togglePlayPause = () => {
  initMaximumSpaceAudio();
  if (elapsedSec >= totalSeconds()) {
    restartShow();
    return;
  }
  isPlaying = !isPlaying;
  lastFrameTime = performance.now();
  document.getElementById("btnPlay").textContent = isPlaying ? "⏸ PAUSE" : "▶ RESUME";
  if ("speechSynthesis" in window) {
    if (!isPlaying) {
      window.speechSynthesis.cancel();
      document.getElementById("badgeVoiceState").textContent = "⏸ PAUSED";
    } else if (voiceActive && currentIdx >= 0) {
      speakSceneVoiceover(activePlaylist[currentIdx].voiceScript);
    }
  }
};

window.addEventListener("pointerdown", () => { initMaximumSpaceAudio(); }, { once: true });

document.getElementById("btnPlay").addEventListener("click", togglePlayPause);
document.getElementById("btnRestart").addEventListener("click", restartShow);
document.getElementById("btnPrev").addEventListener("click", () => jumpToChapter(sub(currentIdx, 1)));
document.getElementById("btnNext").addEventListener("click", () => jumpToChapter(currentIdx + 1));

document.getElementById("btnCut30").addEventListener("click", () => {
  activePlaylist = cut30Scenes;
  document.getElementById("btnCut30").className = "secondaryActive";
  document.getElementById("btnCutFull").className = "";
  buildScrubber();
  restartShow();
});

document.getElementById("btnCutFull").addEventListener("click", () => {
  activePlaylist = cutFullScenes;
  document.getElementById("btnCutFull").className = "secondaryActive";
  document.getElementById("btnCut30").className = "";
  buildScrubber();
  restartShow();
});

document.getElementById("btnSound").addEventListener("click", (e) => {
  initMaximumSpaceAudio();
  soundActive = !soundActive;
  if (masterGain && audioCtx) {
    masterGain.gain.setTargetAtTime(soundActive ? 0.88 : 0.0, audioCtx.currentTime, 0.05);
  }
  e.target.textContent = soundActive ? "🔊 NASA SONIFICATION: ON" : "🔇 NASA SONIFICATION: OFF";
  e.target.className = soundActive ? "secondaryActive" : "";
});

document.getElementById("btnNarration").addEventListener("click", (e) => {
  voiceActive = !voiceActive;
  e.target.textContent = voiceActive ? "🎙 VOICEOVER: ON" : "🎙 VOICEOVER: OFF";
  e.target.className = voiceActive ? "secondaryActive" : "";
  if (!voiceActive && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    document.getElementById("badgeVoiceState").textContent = "○ VOICEOVER MUTED";
  } else if (voiceActive && currentIdx >= 0 && isPlaying) {
    speakSceneVoiceover(activePlaylist[currentIdx].voiceScript);
  }
});

document.getElementById("btnSpeed").addEventListener("click", (e) => {
  speedIdx = (speedIdx + 1) % speedPresets.length;
  voiceRate = speedPresets[speedIdx];
  e.target.textContent = "⏱ SPEED: " + formatSpeedLabel(voiceRate);
  if (voiceActive && currentIdx >= 0 && isPlaying) {
    speakSceneVoiceover(activePlaylist[currentIdx].voiceScript);
  }
});

document.getElementById("btnVoiceCycle").addEventListener("click", (e) => {
  if (curatedVoices.length === 0) loadNaturalVoices();
  if (curatedVoices.length === 0) return;
  selectedVoiceIdx = (selectedVoiceIdx + 1) % curatedVoices.length;
  const v = curatedVoices[selectedVoiceIdx];
  const shortName = v.name.replace(/Microsoft |Google |Online \(Natural\) |Desktop /g, "").slice(0, 14);
  e.target.textContent = "🗣 VOICE: " + shortName.toUpperCase();
  if (voiceActive && currentIdx >= 0 && isPlaying) {
    speakSceneVoiceover(activePlaylist[currentIdx].voiceScript);
  }
});

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
};

const toggleCleanView = () => {
  cleanMode = !cleanMode;
  const dock = document.getElementById("controlDock");
  dock.style.opacity = cleanMode ? "0" : "1";
  dock.style.pointerEvents = cleanMode ? "none" : "auto";
  if (cleanMode) document.getElementById("studioDrawer").style.display = "none";
};

document.getElementById("btnFullscreen").addEventListener("click", toggleFullscreen);
document.getElementById("btnClean").addEventListener("click", toggleCleanView);

window.addEventListener("keydown", (e) => {
  if (e.key === "h" || e.key === "H") toggleCleanView();
  if (e.key === "f" || e.key === "F") toggleFullscreen();
  if (e.key === "r" || e.key === "R") restartShow();
  if (e.key === "ArrowRight") jumpToChapter(currentIdx + 1);
  if (e.key === "ArrowLeft") jumpToChapter(sub(currentIdx, 1));
  if (e.key === " ") {
    e.preventDefault();
    togglePlayPause();
  }
});

/* ============================================================================
   ZERO OVERLAP GLASS CALLOUT ENGINE & PHOTOREALISTIC PLANETARY SHADERS
============================================================================ */
const drawGlassCallout = (targetX, targetY, targetR, boxX, boxY, title, subtitle, accentColor, timeMs) => {
  ctx.save();
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 1.5;

  if (targetR > 0) {
    ctx.save();
    ctx.translate(targetX, targetY);
    ctx.rotate(timeMs * 0.0005);
    ctx.beginPath();
    ctx.arc(0, 0, targetR, 0, Math.PI * 0.4);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, targetR, Math.PI, Math.PI * 1.4);
    ctx.stroke();
    ctx.restore();
  }

  ctx.font = "700 11px 'JetBrains Mono', monospace";
  const w1 = ctx.measureText(title).width;
  ctx.font = "500 10px 'JetBrains Mono', monospace";
  const w2 = subtitle ? ctx.measureText(subtitle).width : 0;
  const boxW = Math.max(w1, w2) + 24;
  const boxH = subtitle ? 42 : 26;

  const clampedX = Math.max(36, Math.min(sub(W, boxW + 36), sub(boxX, boxW * 0.5)));
  const clampedY = Math.max(145, Math.min(sub(H, 240 + boxH), boxY));

  const pillCenterX = clampedX + boxW * 0.5;
  const pillCenterY = clampedY + boxH * 0.5;
  const dx = sub(pillCenterX, targetX);
  const dy = sub(pillCenterY, targetY);
  const dist = Math.max(1, Math.sqrt(dx * dx + dy * dy));
  const startX = targetX + (dx / dist) * targetR;
  const startY = targetY + (dy / dist) * targetR;

  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(pillCenterX, pillCenterY);
  ctx.strokeStyle = accentColor;
  ctx.globalAlpha = 0.65;
  ctx.stroke();
  ctx.globalAlpha = 1.0;

  ctx.fillStyle = "rgba(6, 10, 22, 0.92)";
  ctx.fillRect(clampedX, clampedY, boxW, boxH);
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 1.2;
  ctx.strokeRect(clampedX, clampedY, boxW, boxH);

  ctx.fillStyle = accentColor;
  ctx.fillRect(clampedX, clampedY, 3, boxH);

  ctx.fillStyle = accentColor;
  ctx.font = "700 11px 'JetBrains Mono', monospace";
  ctx.fillText(title, clampedX + 12, clampedY + 16);

  if (subtitle) {
    ctx.fillStyle = "#CBD5E1";
    ctx.font = "500 10px 'JetBrains Mono', monospace";
    ctx.fillText(subtitle, clampedX + 12, clampedY + 32);
  }
  ctx.restore();
};

const drawSphereAsset = (assetKey, x, y, radius, fallbackColor, rimColor, rotSpeed, timeMs) => {
  ctx.save();
  if (rimColor) {
    const halo = ctx.createRadialGradient(x, y, radius * 0.82, x, y, radius * 1.36);
    halo.addColorStop(0, rimColor);
    halo.addColorStop(1, "rgba(4, 7, 14, 0)");
    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.arc(x, y, radius * 1.36, 0, Math.PI * 2);
    ctx.fill();
  }

  const item = rawAssets[assetKey];
  const src = item ? (item.canvas || (item.ready ? item.rawImg : null)) : null;

  if (src) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.clip();
    ctx.translate(x, y);
    if (rotSpeed) ctx.rotate(Math.sin(timeMs * rotSpeed) * 0.05);
    ctx.drawImage(src, neg(radius * 1.02), neg(radius * 1.02), radius * 2.04, radius * 2.04);

    /* Subtle 3D spherical night terminator shading for realism */
    const shade = ctx.createRadialGradient(neg(radius * 0.32), neg(radius * 0.32), radius * 0.2, radius * 0.2, radius * 0.2, radius * 1.15);
    shade.addColorStop(0, "rgba(255,255,255,0.06)");
    shade.addColorStop(0.7, "rgba(0,0,0,0)");
    shade.addColorStop(1, "rgba(0,0,0,0.48)");
    ctx.fillStyle = shade;
    ctx.fillRect(neg(radius), neg(radius), radius * 2, radius * 2);
    ctx.restore();
  } else {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = fallbackColor;
    ctx.fill();
  }
  ctx.restore();
};

/* Built-in Photorealistic Titan Shader (No upload required!) */
const drawRealisticTitan = (x, y, radius, timeMs) => {
  ctx.save();
  /* Outer nitrogen-methane photochemical haze glow (cyan + amber) */
  const atmo = ctx.createRadialGradient(x, y, radius * 0.85, x, y, radius * 1.52);
  atmo.addColorStop(0, "rgba(245, 158, 11, 0.55)");
  atmo.addColorStop(0.55, "rgba(56, 189, 248, 0.22)");
  atmo.addColorStop(1, "rgba(4, 7, 14, 0)");
  ctx.fillStyle = atmo;
  ctx.beginPath();
  ctx.arc(x, y, radius * 1.52, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.clip();

  const baseGrad = ctx.createRadialGradient(sub(x, radius * 0.3), sub(y, radius * 0.3), radius * 0.1, x, y, radius);
  baseGrad.addColorStop(0, "#FBBF24");
  baseGrad.addColorStop(0.55, "#D97706");
  baseGrad.addColorStop(0.88, "#9A3412");
  baseGrad.addColorStop(1, "#431407");
  ctx.fillStyle = baseGrad;
  ctx.fillRect(sub(x, radius), sub(y, radius), radius * 2, radius * 2);

  /* Subtle atmospheric banding & north polar hood */
  ctx.rotate(neg(0.12));
  for (let b = neg(3); b <= 3; b++) {
    ctx.fillStyle = b % 2 === 0 ? "rgba(254, 243, 199, 0.08)" : "rgba(120, 53, 15, 0.12)";
    ctx.fillRect(sub(x, radius * 1.5), y + b * (radius * 0.22), radius * 3, radius * 0.12);
  }
  ctx.restore();

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(56, 189, 248, 0.38)";
  ctx.lineWidth = 1.6;
  ctx.stroke();
};

/* Built-in Photorealistic Io Shader + Umbrella Plume (No upload required!) */
const drawRealisticIoAndPlume = (x, y, radius, timeMs) => {
  ctx.save();
  /* Smooth Umbrella Volcanic Plume on upper-right limb (Linda Morabito March 8, 1979 discovery) */
  const ventAngle = neg(0.55);
  const vx = x + Math.cos(ventAngle) * radius * 0.92;
  const vy = y + Math.sin(ventAngle) * radius * 0.92;

  ctx.save();
  ctx.translate(vx, vy);
  ctx.rotate(ventAngle + Math.PI * 0.5);

  const pulse = 1 + Math.sin(timeMs * 0.004) * 0.08;
  const pH = 34 * pulse;
  const pW = 46 * pulse;

  const plumeGrad = ctx.createRadialGradient(0, neg(pH * 0.35), 2, 0, neg(pH * 0.5), pW);
  plumeGrad.addColorStop(0, "rgba(224, 242, 254, 0.85)");
  plumeGrad.addColorStop(0.45, "rgba(56, 189, 248, 0.45)");
  plumeGrad.addColorStop(0.8, "rgba(16, 185, 129, 0.15)");
  plumeGrad.addColorStop(1, "rgba(4, 7, 14, 0)");

  ctx.fillStyle = plumeGrad;
  ctx.beginPath();
  ctx.moveTo(neg(3), 0);
  ctx.quadraticCurveTo(neg(pW * 0.85), neg(pH * 1.15), neg(pW * 0.92), neg(pH * 0.15));
  ctx.quadraticCurveTo(0, neg(pH * 1.45), pW * 0.92, neg(pH * 0.15));
  ctx.quadraticCurveTo(pW * 0.85, neg(pH * 1.15), 3, 0);
  ctx.closePath();
  ctx.fill();

  /* Central volcanic fountain stem */
  ctx.strokeStyle = "rgba(254, 240, 138, 0.75)";
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.moveTo(0, 2);
  ctx.lineTo(0, neg(pH * 0.82));
  ctx.stroke();
  ctx.restore();

  /* Io Sulfur Disk */
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.clip();

  const ioGrad = ctx.createRadialGradient(sub(x, radius * 0.28), sub(y, radius * 0.28), radius * 0.1, x, y, radius);
  ioGrad.addColorStop(0, "#FEF08A");
  ioGrad.addColorStop(0.45, "#FACC15");
  ioGrad.addColorStop(0.78, "#EA580C");
  ioGrad.addColorStop(1, "#451A03");
  ctx.fillStyle = ioGrad;
  ctx.fillRect(sub(x, radius), sub(y, radius), radius * 2, radius * 2);

  /* Volcanic caldera patches (Pele, Loki) */
  const spots = [
    { dx: neg(0.25), dy: 0.15, r: 0.22, col: "rgba(154, 52, 18, 0.45)" },
    { dx: 0.22, dy: neg(0.2), r: 0.16, col: "rgba(69, 26, 3, 0.55)" },
    { dx: neg(0.1), dy: neg(0.35), r: 0.18, col: "rgba(254, 249, 195, 0.35)" }
  ];
  spots.forEach((sp) => {
    ctx.beginPath();
    ctx.arc(x + sp.dx * radius, y + sp.dy * radius, sp.r * radius, 0, Math.PI * 2);
    ctx.fillStyle = sp.col;
    ctx.fill();
  });
  ctx.restore();
  ctx.restore();

  return { vx, vy };
};

/* Built-in Photorealistic Triton Shader + Geyser Plume */
const drawRealisticTriton = (x, y, radius, timeMs) => {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.clip();

  const trGrad = ctx.createRadialGradient(sub(x, radius * 0.3), sub(y, radius * 0.3), radius * 0.1, x, y, radius);
  trGrad.addColorStop(0, "#F1F5F9");
  trGrad.addColorStop(0.5, "#CBD5E1");
  trGrad.addColorStop(0.82, "#94A3B8");
  trGrad.addColorStop(1, "#1E293B");
  ctx.fillStyle = trGrad;
  ctx.fillRect(sub(x, radius), sub(y, radius), radius * 2, radius * 2);
  ctx.restore();

  /* 8 km vertical nitrogen geyser drifting 160 km downwind */
  tritonPlumeParticles.forEach((gp) => {
    const t = (timeMs * 0.00045 + gp.phase) % 1;
    const gx = x + (t > 0.22 ? sub(t, 0.22) * 82 : 0);
    const gy = sub(y, radius + Math.min(0.22, t) * 90) + gp.jitter * t;
    ctx.beginPath();
    ctx.arc(gx, gy, 2.1, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(56, 189, 248, " + sub(0.88, t * 0.78) + ")";
    ctx.fill();
  });
};

const drawSaturnAsset = (x, y, heightPx, timeMs) => {
  ctx.save();
  const item = rawAssets.saturn;
  const src = item.canvas || (item.ready ? item.rawImg : null);
  if (src) {
    const sw = src.width || src.naturalWidth || 800;
    const sh = src.height || src.naturalHeight || 1000;
    const drawH = heightPx;
    const drawW = drawH * (sw / sh);

    ctx.translate(x, y + Math.sin(timeMs * 0.0012) * 3.5);
    if (!item.canvas) {
      ctx.globalCompositeOperation = "screen";
    }
    ctx.drawImage(src, neg(drawW * 0.5), neg(drawH * 0.5), drawW, drawH);
    ctx.globalCompositeOperation = "source" + H_CHAR + "over";
  } else {
    ctx.beginPath();
    ctx.ellipse(x, y, 125, 30, 0.2, 0, Math.PI * 2);
    ctx.strokeStyle = "#F59E0B";
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, 46, 0, Math.PI * 2);
    ctx.fillStyle = "#D97706";
    ctx.fill();
  }
  ctx.restore();
};

const drawVoyagerCraft = (x, y, sizePx, tiltRad, timeMs) => {
  ctx.save();
  const hoverY = y + Math.sin(timeMs * 0.0022) * 5;
  const hoverRot = tiltRad + Math.cos(timeMs * 0.0016) * 0.032;
  ctx.translate(x, hoverY);
  ctx.rotate(hoverRot);

  for (let p = 0; p < 2; p++) {
    const pr = 18 + ((timeMs * 0.04 + p * 26) % 50);
    ctx.beginPath();
    ctx.arc(neg(10), neg(8), pr, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(16, 185, 129, " + sub(0.45, (pr / 75) * 0.42) + ")";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  const asset = rawAssets.voyager;
  if (asset.canvas) {
    ctx.drawImage(asset.canvas, neg(sizePx * 0.5), neg(sizePx * 0.5), sizePx, sizePx);
  } else {
    const s = sizePx / 150;
    ctx.scale(s, s);
    ctx.strokeStyle = "#94A3B8";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(62, 46);
    ctx.moveTo(0, 0);
    ctx.lineTo(neg(78), neg(34));
    ctx.moveTo(0, 0);
    ctx.lineTo(18, neg(48));
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(0, 0, 16, 32, 0, 0, Math.PI * 2);
    ctx.fillStyle = "#E2E8F0";
    ctx.fill();
    ctx.strokeStyle = "#10B981";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(6, 5, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#F59E0B";
    ctx.fill();
  }
  ctx.restore();
};

const drawViewportFrame = (now) => {
  const padX = 28;
  const topY = 138;
  const botY = sub(H, 212);

  ctx.strokeStyle = "rgba(148, 163, 184, 0.045)";
  ctx.lineWidth = 1;
  for (let gx = padX + 95; gx < sub(W, padX); gx += 120) {
    ctx.beginPath();
    ctx.moveTo(gx, topY);
    ctx.lineTo(gx, botY);
    ctx.stroke();
  }

  ctx.strokeStyle = "rgba(16, 185, 129, 0.36)";
  ctx.lineWidth = 1.6;
  const len = 18;
  ctx.beginPath();
  ctx.moveTo(padX, topY + len);
  ctx.lineTo(padX, topY);
  ctx.lineTo(padX + len, topY);

  ctx.moveTo(sub(W, padX + len), topY);
  ctx.lineTo(sub(W, padX), topY);
  ctx.lineTo(sub(W, padX), topY + len);

  ctx.moveTo(padX, sub(botY, len));
  ctx.lineTo(padX, botY);
  ctx.lineTo(padX + len, botY);

  ctx.moveTo(sub(W, padX + len), botY);
  ctx.lineTo(sub(W, padX), botY);
  ctx.lineTo(sub(W, padX), sub(botY, len));
  ctx.stroke();

  ctx.fillStyle = "rgba(148, 163, 184, 0.48)";
  ctx.font = "600 10px 'JetBrains Mono', monospace";
  ctx.fillText("DSN TELEMETRY LOCK // RA 17H 12M 58S // DEC +12 DEG 05M // VOICE SPEED " + formatSpeedLabel(voiceRate), padX + 24, topY + 14);

  const waveX = sub(W, padX + 180);
  ctx.beginPath();
  for (let i = 0; i < 155; i += 3) {
    const wy = topY + 12 + Math.sin(i * 0.14 + neg(now * 0.01)) * 4.5;
    if (i === 0) ctx.moveTo(waveX + i, wy);
    else ctx.lineTo(waveX + i, wy);
  }
  ctx.strokeStyle = "#10B981";
  ctx.lineWidth = 1.4;
  ctx.stroke();
};

const renderSceneGraphics = (type, prog, now) => {
  const cx = W * 0.5;
  const cy = H * 0.41;

  nebulaClouds.forEach((nb, i) => {
    const nx = nb.x * W + Math.sin(now * 0.0002 + i) * 35;
    const ny = nb.y * H;
    const g = ctx.createRadialGradient(nx, ny, 10, nx, ny, nb.rad);
    g.addColorStop(0, nb.col);
    g.addColorStop(1, "rgba(4, 7, 14, 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  });

  drawViewportFrame(now);

  ctx.save();
  const easeT = 1 + neg(Math.pow(sub(1, Math.min(1, sceneTransitionProg)), 3));
  const zoomScale = 0.93 + easeT * 0.07;
  ctx.translate(cx, cy);
  ctx.scale(zoomScale, zoomScale);
  ctx.translate(neg(cx), neg(cy));

  if (type === "signalWave") {
    const ex = W * 0.17;
    const vx = W * 0.81;

    ctx.strokeStyle = "rgba(148, 163, 184, 0.22)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(ex, cy + 92);
    ctx.lineTo(vx, cy + 92);
    ctx.stroke();

    const markers = [
      { p: 0.0, t: "0 AU // EARTH" },
      { p: 0.20, t: "30.1 AU // NEPTUNE (4H 06M)" },
      { p: 0.68, t: "121.6 AU // HELIOPAUSE (16H 47M)" },
      { p: 1.0, t: "173.15 AU // 1 LIGHT DAY (24H)" }
    ];
    markers.forEach((mk) => {
      const mx = ex + sub(vx, ex) * mk.p;
      ctx.fillStyle = mk.p === 1.0 ? "#F59E0B" : "#64748B";
      ctx.fillRect(sub(mx, 1), cy + 86, 2, 12);
      ctx.font = "600 10px 'JetBrains Mono', monospace";
      ctx.fillText(mk.t, sub(mx, 44), cy + 112);
    });

    for (let w = 0; w < 3; w++) {
      ctx.beginPath();
      for (let x = ex + 60; x < sub(vx, 72); x += 4) {
        const norm = sub(x, ex + 60) / sub(vx, ex + 132);
        const env = Math.sin(norm * Math.PI);
        const yOff = Math.sin(norm * 36 + neg(now * 0.008) + w * 1.1) * (28 * env);
        if (x === ex + 60) ctx.moveTo(x, cy + yOff);
        else ctx.lineTo(x, cy + yOff);
      }
      ctx.strokeStyle = w === 0 ? "#10B981" : "rgba(10, 136, 111, 0.35)";
      ctx.lineWidth = w === 0 ? 2.8 : 1.2;
      ctx.stroke();
    }

    const packetX = ex + 60 + sub(vx, ex + 132) * ((now * 0.00038) % 1);
    ctx.beginPath();
    ctx.arc(packetX, cy, 7.5, 0, Math.PI * 2);
    ctx.fillStyle = "#F59E0B";
    ctx.fill();

    drawSphereAsset("earth", ex, cy, 50, "#0284C7", "rgba(56, 189, 248, 0.42)", 0.0003, now);
    drawVoyagerCraft(vx, cy, 182, 0.05, now);

    drawGlassCallout(ex, cy, 52, ex + 30, sub(cy, 115), "EARTH DSN GOLDSTONE", "22 WATT COMMAND UPLINK", "#38BDF8", now);
    drawGlassCallout(vx, cy, 58, sub(vx, 40), sub(cy, 115), "VOYAGER 1 (25.902 BILLION KM)", "24H ONE WAY // 48H ROUND TRIP", "#10B981", now);
  } else if (type === "lunarLaser") {
    const ex = W * 0.18;
    const mx = W * 0.79;
    const my = cy;

    drawSphereAsset("earth", ex, cy, 54, "#0369A1", "rgba(56, 189, 248, 0.42)", 0.0003, now);
    drawSphereAsset("moon", mx, my, 64, "#475569", "rgba(148, 163, 184, 0.25)", 0.0001, now);

    /* Landing target pin on the Moon */
    const pinX = sub(mx, 28);
    const pinY = sub(my, 8);
    ctx.beginPath();
    ctx.arc(pinX, pinY, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#F59E0B";
    ctx.fill();

    /* Pulsed Laser Beam from Earth to Moon Landing Pin */
    ctx.beginPath();
    ctx.moveTo(ex + 52, cy);
    ctx.lineTo(pinX, pinY);
    ctx.strokeStyle = "rgba(16, 185, 129, 0.42)";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    const cycle = (now * 0.00095) % 2;
    const t = cycle < 1 ? cycle : sub(2, cycle);
    const lx = ex + 52 + sub(pinX, ex + 52) * t;
    const ly = cy + sub(pinY, cy) * t;

    ctx.beginPath();
    ctx.arc(lx, ly, 8, 0, Math.PI * 2);
    ctx.fillStyle = cycle < 1 ? "#10B981" : "#F59E0B";
    ctx.fill();

    /* Separate Magnified Circular Inset Pod at Center Top so reflector.png NEVER overlaps the Moon! */
    const podX = W * 0.50;
    const podY = sub(cy, 58);
    const podR = 52;

    ctx.beginPath();
    ctx.moveTo(pinX, pinY);
    ctx.lineTo(podX + podR * 0.7, podY + podR * 0.5);
    ctx.strokeStyle = "rgba(245, 158, 11, 0.55)";
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.save();
    ctx.beginPath();
    ctx.arc(podX, podY, podR, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(8, 14, 28, 0.94)";
    ctx.fill();
    ctx.clip();

    const refAsset = rawAssets.reflector;
    const refSrc = refAsset.canvas || (refAsset.ready ? refAsset.rawImg : null);
    if (refSrc) {
      ctx.drawImage(refSrc, sub(podX, 46), sub(podY, 36), 92, 72);
    } else {
      ctx.fillStyle = "#F59E0B";
      ctx.fillRect(sub(podX, 18), sub(podY, 18), 36, 36);
    }
    ctx.restore();

    ctx.beginPath();
    ctx.arc(podX, podY, podR, 0, Math.PI * 2);
    ctx.strokeStyle = "#F59E0B";
    ctx.lineWidth = 2;
    ctx.stroke();

    drawGlassCallout(podX, podY, podR, podX, cy + 42, "APOLLO RETROREFLECTOR (384,400 KM)", "1.28S ONE WAY // 2.56S ROUND TRIP", "#F59E0B", now);
  } else if (type === "goldenRecord") {
    /* Authentic 3D Orbital Animation for Earth & Moon in Chapter 1 */
    const sysX = W * 0.21;
    const sysY = cy + 6;
    const orbitRx = 92;
    const orbitRy = 28;
    const orbitTilt = neg(0.22);
    const moonAngle = now * 0.0011;

    const rawMx = Math.cos(moonAngle) * orbitRx;
    const rawMy = Math.sin(moonAngle) * orbitRy;
    const rotMx = rawMx * Math.cos(orbitTilt) + neg(rawMy * Math.sin(orbitTilt));
    const rotMy = rawMx * Math.sin(orbitTilt) + rawMy * Math.cos(orbitTilt);
    const moonX = sysX + rotMx;
    const moonY = sysY + rotMy;
    const moonInFront = Math.sin(moonAngle) >= 0;
    const moonScale = 14 * (1 + Math.sin(moonAngle) * 0.22);

    /* Draw back half of elliptical orbit ring */
    ctx.save();
    ctx.translate(sysX, sysY);
    ctx.rotate(orbitTilt);
    ctx.beginPath();
    ctx.ellipse(0, 0, orbitRx, orbitRy, 0, Math.PI, Math.PI * 2);
    ctx.strokeStyle = "rgba(56, 189, 248, 0.26)";
    ctx.lineWidth = 1.4;
    ctx.stroke();
    ctx.restore();

    if (!moonInFront) {
      drawSphereAsset("moon", moonX, moonY, moonScale, "#64748B", "rgba(148,163,184,0.2)", 0, now);
    }

    drawSphereAsset("earth", sysX, sysY, 46, "#0284C7", "rgba(56, 189, 248, 0.45)", 0.0005, now);

    /* Draw front half of elliptical orbit ring */
    ctx.save();
    ctx.translate(sysX, sysY);
    ctx.rotate(orbitTilt);
    ctx.beginPath();
    ctx.ellipse(0, 0, orbitRx, orbitRy, 0, 0, Math.PI);
    ctx.strokeStyle = "rgba(56, 189, 248, 0.55)";
    ctx.lineWidth = 1.6;
    ctx.stroke();
    ctx.restore();

    if (moonInFront) {
      drawSphereAsset("moon", moonX, moonY, moonScale, "#64748B", "rgba(148,163,184,0.3)", 0, now);
    }

    drawGlassCallout(sysX, sysY, 48, sysX, sub(sysY, 112), "FIRST EARTH & MOON PORTRAIT", "11.66M KM // SEPT 18, 1977", "#38BDF8", now);

    /* Center Zone: Spinning Golden Record */
    const recX = W * 0.52;
    ctx.save();
    ctx.translate(recX, cy);

    for (let ring = 0; ring < 3; ring++) {
      const rr = 104 + ((now * 0.022 + ring * 20) % 54);
      ctx.beginPath();
      ctx.arc(0, 0, rr, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(245, 158, 11, 0.22)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }

    ctx.rotate(now * 0.00038);
    const recAsset = rawAssets.record;
    const recSrc = recAsset.canvas || (recAsset.ready ? recAsset.rawImg : null);
    if (recSrc) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, 98, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(recSrc, neg(100), neg(100), 200, 200);
      ctx.restore();
      ctx.beginPath();
      ctx.arc(0, 0, 98, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(251, 191, 36, 0.7)";
      ctx.lineWidth = 2;
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, 98, 0, Math.PI * 2);
      ctx.fillStyle = "#F59E0B";
      ctx.fill();
    }
    ctx.restore();

    drawVoyagerCraft(W * 0.81, cy, 172, neg(0.08), now);
    drawGlassCallout(recX, cy, 100, recX, cy + 108, "VOYAGER GOLDEN RECORD", "115 IMAGES // 55 LANGUAGES // 14 PULSARS", "#F59E0B", now);
  } else if (type === "jupiterIo") {
    const jx = W * 0.22;
    ctx.beginPath();
    ctx.ellipse(jx, cy, 155, 92, Math.sin(now * 0.0004) * 0.04, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(56, 189, 248, 0.22)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    drawSphereAsset("jupiter", jx, cy, 90, "#C2410C", "rgba(234, 88, 12, 0.35)", 0.0002, now);
    drawGlassCallout(jx, cy, 92, jx, sub(cy, 128), "JUPITER FLYBY (MARCH 5, 1979)", "678.43M KM // 37M 43S LIGHT TIME", "#F59E0B", now);

    const ix = W * 0.53;
    const iy = cy + 8;
    const plumeAnchor = drawRealisticIoAndPlume(ix, iy, 32, now);

    drawVoyagerCraft(W * 0.82, sub(cy, 8), 162, 0.1, now);
    drawGlassCallout(plumeAnchor.vx, plumeAnchor.vy, 22, ix + 25, sub(cy, 112), "IO VOLCANIC PLUME: 300 KM HIGH", "LINDA MORABITO DISCOVERY (MAR 8, 1979)", "#10B981", now);
  } else if (type === "titanSlingshot") {
    const sx = W * 0.24;
    const sy = cy + 4;

    drawSaturnAsset(sx, sy, 275, now);

    const tx = W * 0.54;
    const ty = cy + 12;

    /* Trajectory lines drawn BEFORE callout pills so no line ever crosses text! */
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(W * 0.14, cy + 68);
    ctx.lineTo(W * 0.85, cy + 32);
    ctx.strokeStyle = "rgba(148, 163, 184, 0.38)";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#94A3B8";
    ctx.font = "600 10px 'JetBrains Mono', monospace";
    ctx.fillText("SKIPPED PLUTO PATH", W * 0.70, cy + 50);

    ctx.beginPath();
    ctx.moveTo(W * 0.14, cy + 68);
    ctx.quadraticCurveTo(tx + 12, ty + 48, W * 0.80, sub(cy, 92));
    ctx.strokeStyle = "#10B981";
    ctx.lineWidth = 3;
    ctx.stroke();

    drawRealisticTitan(tx, ty, 28, now);
    drawVoyagerCraft(W * 0.80, sub(cy, 92), 160, neg(0.32), now);

    /* Callout placed cleanly ABOVE Titan, completely clear of the green trajectory curve below! */
    drawGlassCallout(tx, ty, 32, tx, sub(cy, 115), "TITAN FLYBY (1.52B KM FROM EARTH)", "3,915 KM ALTITUDE // 35 DEG NORTH EXIT", "#F59E0B", now);
  } else if (type === "uranusNeptune") {
    const ux = W * 0.20;
    drawSphereAsset("uranus", ux, cy, 46, "#38BDF8", "rgba(56, 189, 248, 0.35)", 0.0002, now);
    ctx.beginPath();
    ctx.ellipse(ux, cy, 16, 78, 0.08, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(226, 232, 240, 0.75)";
    ctx.lineWidth = 2;
    ctx.stroke();
    drawGlassCallout(ux, cy, 48, ux, sub(cy, 115), "URANUS (JAN 24, 1986)", "98 DEG SIDEWAYS AXIAL TILT", "#38BDF8", now);

    drawVoyagerCraft(W * 0.46, sub(cy, 20), 152, 0.06, now);

    const nx = W * 0.72;
    drawSphereAsset("neptune", nx, cy + 12, 50, "#2563EB", "rgba(37, 99, 235, 0.4)", 0.0002, now);

    const trx = W * 0.83;
    const tryY = sub(cy, 24);
    drawRealisticTriton(trx, tryY, 18, now);

    drawGlassCallout(trx, tryY, 22, sub(trx, 40), sub(cy, 118), "TRITON GEYSERS (4.426B KM)", "8 KM VERTICAL // 160 KM DOWNWIND", "#10B981", now);
  } else if (type === "paleBlueDot") {
    /* Zone 1 (Left 23%): Procedural Pale Blue Dot Sunbeam (No boxy square photo!) */
    const px = W * 0.23;
    ctx.save();
    ctx.translate(px, cy);
    ctx.rotate(0.22);

    const drawRay = (xOffset, widthPx, alpha) => {
      const g = ctx.createLinearGradient(xOffset + neg(widthPx * 0.5), 0, xOffset + widthPx * 0.5, 0);
      g.addColorStop(0, "rgba(248, 250, 252, 0)");
      g.addColorStop(0.5, "rgba(248, 250, 252, " + alpha + ")");
      g.addColorStop(1, "rgba(248, 250, 252, 0)");
      ctx.fillStyle = g;
      ctx.fillRect(xOffset + neg(widthPx * 0.5), neg(145), widthPx, 290);
    };

    drawRay(neg(48), 22, 0.08);
    drawRay(0, 44, 0.24);
    drawRay(52, 18, 0.07);
    ctx.restore();

    ctx.beginPath();
    ctx.arc(px, cy, 4.2, 0, Math.PI * 2);
    ctx.fillStyle = "#60A5FA";
    ctx.fill();

    drawGlassCallout(px, cy, 20, px, sub(cy, 118), "PALE BLUE DOT (6.055B KM // 5H 36M)", "0.12 PIXEL EARTH // CAMERAS OFF 34M LATER", "#60A5FA", now);

    /* Zone 2 (Center 53%): Self-Contained Framed Plasma Wave Telemetry Monitor (Zero text overlap!) */
    const monW = 275;
    const monH = 135;
    const monX = sub(W * 0.53, monW * 0.5);
    const monY = sub(cy, monH * 0.5);

    ctx.fillStyle = "rgba(6, 11, 24, 0.90)";
    ctx.fillRect(monX, monY, monW, monH);
    ctx.strokeStyle = "rgba(16, 185, 129, 0.5)";
    ctx.lineWidth = 1.4;
    ctx.strokeRect(monX, monY, monW, monH);

    ctx.fillStyle = "#10B981";
    ctx.font = "700 10.5px 'JetBrains Mono', monospace";
    ctx.fillText("PWS SPECTROGRAM // APRIL 2013 RING", monX + 14, monY + 20);

    for (let b = 0; b < 26; b++) {
      const hBar = 10 + Math.abs(Math.sin(now * 0.008 + b * 0.42)) * 58;
      ctx.fillStyle = b > 14 ? "#F59E0B" : "#10B981";
      ctx.fillRect(monX + 16 + b * 9.4, sub(monY + 102, hBar), 6, hBar);
    }

    ctx.fillStyle = "#94A3B8";
    ctx.font = "500 9.5px 'JetBrains Mono', monospace";
    ctx.fillText("2.6 TO 3.1 KHZ // 40X DENSER INTERSTELLAR GAS", monX + 14, monY + 122);

    /* Zone 3 (Right 82%): Voyager 1 in Interstellar Space */
    drawVoyagerCraft(W * 0.82, cy, 165, neg(0.1), now);
  } else if (type === "galaxyCollide") {
    /* Zone 1 (Left 24%): Voyager 1 Gliding Into Eternity */
    const vx = W * 0.24;
    drawVoyagerCraft(vx, cy, 180, 0.06, now);
    drawGlassCallout(vx, cy, 58, vx, sub(cy, 118), "GLIESE 445 FLYBY IN 40,272 YEARS", "1.7 LIGHT YEARS // RADIO SILENT IN 2030S", "#10B981", now);

    /* Zone 2 (Right 68%): ONE Majestic Andromeda Galaxy Drifting Smoothly (Fixed double spinning bug!) */
    const gx = W * 0.68;
    const gy = cy;
    const galAsset = rawAssets.galaxy;
    const galSrc = galAsset.canvas || (galAsset.ready ? galAsset.rawImg : null);

    if (galSrc) {
      ctx.save();
      ctx.translate(gx, gy);
      /* Gentle, authentic cosmic drift instead of fast spinning */
      ctx.rotate(neg(0.18) + Math.sin(now * 0.00015) * 0.03);
      ctx.globalCompositeOperation = "screen";
      ctx.drawImage(galSrc, neg(210), neg(145), 420, 290);
      ctx.globalCompositeOperation = "source" + H_CHAR + "over";
      ctx.restore();
    } else {
      ctx.beginPath();
      ctx.ellipse(gx, gy, 140, 75, neg(0.25), 0, Math.PI * 2);
      ctx.strokeStyle = "#F59E0B";
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    drawGlassCallout(gx, gy, 65, gx, sub(cy, 118), "ANDROMEDA GALACTIC MERGER", "3 BILLION YRS // OUTLIVES THE STARS", "#F59E0B", now);
  }

  ctx.restore();
};

const animateFrame = (now) => {
  const dt = Math.min(0.1, Math.max(0, sub(now, lastFrameTime) * 0.001));
  lastFrameTime = now;

  ctx.fillStyle = "#04070E";
  ctx.fillRect(0, 0, W, H);

  const warpBoost = sceneTransitionProg < 0.45 ? (1 + sub(0.45, sceneTransitionProg) * 14) : 1;

  starLayers.forEach((layer) => {
    layer.forEach((st) => {
      st.x = (st.x + st.v * warpBoost) % 1;
      ctx.fillStyle = st.c;
      ctx.globalAlpha = st.a;
      if (warpBoost > 1.5) {
        ctx.fillRect(st.x * W, st.y * H, st.r * warpBoost * 1.8, st.r);
      } else {
        ctx.beginPath();
        ctx.arc(st.x * W, st.y * H, st.r, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  });
  ctx.globalAlpha = 1.0;

  const tot = totalSeconds();
  if (isPlaying) {
    elapsedSec += dt;
    if (elapsedSec >= tot) {
      elapsedSec = tot;
      isPlaying = false;
      document.getElementById("btnPlay").textContent = "▶ REPLAY";
    }
  }

  let acc = 0;
  let found = 0;
  for (let i = 0; i < activePlaylist.length; i++) {
    if (elapsedSec < acc + activePlaylist[i].duration || i === sub(activePlaylist.length, 1)) {
      found = i;
      break;
    }
    acc += activePlaylist[i].duration;
  }

  if (found !== currentIdx) {
    currentIdx = found;
    sceneTransitionProg = 0;
    const sc = activePlaylist[currentIdx];

    const card = document.getElementById("storyCard");
    card.style.opacity = "0.2";
    setTimeout(() => { card.style.opacity = "1"; }, 50);

    document.getElementById("badgePhase").textContent = sc.phase;
    document.getElementById("badgeTitle").textContent = sc.subtitle;
    document.getElementById("storyHeadline").textContent = sc.headline;
    document.getElementById("storyBody").textContent = sc.summary;
    document.getElementById("valDist").textContent = sc.dist;
    document.getElementById("valDelay").textContent = sc.delay;
    document.getElementById("valStatus").textContent = sc.status;
    document.getElementById("scienceMetric").textContent = sc.metricBig;
    document.getElementById("scienceDesc").textContent = sc.metricSub;

    playSpaceSonification(sc.visual);
    speakSceneVoiceover(sc.voiceScript);
  }

  sceneTransitionProg = Math.min(1, sceneTransitionProg + dt * 1.4);
  const localProg = Math.min(1, Math.max(0, sub(elapsedSec, acc) / activePlaylist[currentIdx].duration));

  activePlaylist.forEach((_, idx) => {
    const fillEl = document.getElementById("fillStep" + idx);
    const lblEl = document.getElementById("lblStep" + idx);
    if (!fillEl || !lblEl) return;
    if (idx < currentIdx) {
      fillEl.style.width = "100%";
      lblEl.style.color = "#10B981";
    } else if (idx === currentIdx) {
      fillEl.style.width = (localProg * 100) + "%";
      lblEl.style.color = "#F8FAFC";
    } else {
      fillEl.style.width = "0%";
      lblEl.style.color = "#64748B";
    }
  });

  renderSceneGraphics(activePlaylist[currentIdx].visual, localProg, now);
  document.getElementById("valClock").textContent = formatTime(elapsedSec) + " / " + formatTime(tot);

  requestAnimationFrame(animateFrame);
};

buildScrubber();
requestAnimationFrame(animateFrame);