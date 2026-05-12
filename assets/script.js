const resultMap = {
  freelance: {
    title: "AI/ITフリーランス案件",
    body: "実務経験があるなら、転職より先に月単価案件を確認してください。AI活用、Python、データ基盤、業務自動化は単価が伸びやすい領域です。",
    href: "https://freelance.levtech.jp/",
    label: "案件相談へ",
    offer: "levtech-freelance"
  },
  agent: {
    title: "AI職種への転職",
    body: "会社員のまま年収を上げるなら、まずはAI関連求人の幅と年収レンジを確認するのが早いです。無料相談を2社以上で比較してください。",
    href: "https://geekly.co.jp/",
    label: "転職相談へ",
    offer: "geekly"
  },
  school: {
    title: "AIスキル投資",
    body: "未経験または実績が薄い場合は、AIツール活用、Python、データ分析の小さな成果物を作ってから相談すると通過率が上がります。",
    href: "https://techacademy.jp/",
    label: "学習ルートへ",
    offer: "techacademy"
  },
  exit: {
    title: "退職して立て直す",
    body: "体力やメンタルが削られている場合は、転職活動より先に退職、失業保険、生活防衛費を整理してください。無理に現職で粘る必要はありません。",
    href: "https://musclelove-777.github.io/taishoku-navi/",
    label: "退職導線へ",
    offer: "taishoku-navi"
  }
};

function chooseRoute(values) {
  if (values.risk === "bold" && values.stage === "engineer") return "freelance";
  if (values.goal === "100" && values.stage === "engineer") return "freelance";
  if (values.stage === "beginner") return "school";
  if (values.time === "low" && values.risk === "safe") return "agent";
  if (values.stage === "employee" && values.goal !== "10") return "agent";
  if (values.risk === "safe" && values.goal === "10") return "agent";
  if (values.stage === "manager") return "agent";
  return "school";
}

function formatYen(value) {
  return `${Math.round(value).toLocaleString("ja-JP")}円`;
}

function updateRevenue() {
  const visitors = Number(document.getElementById("visitors")?.value || 0);
  const ctr = Number(document.getElementById("ctr")?.value || 0) / 100;
  const cvr = Number(document.getElementById("cvr")?.value || 0) / 100;
  const reward = Number(document.getElementById("reward")?.value || 0);
  const revenue = visitors * ctr * cvr * reward;
  const output = document.getElementById("revenue");
  if (output) output.textContent = formatYen(revenue);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("career-form");
  const result = document.getElementById("career-result");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    const route = resultMap[chooseRoute(values)];
    if (!result || !route) return;

    result.innerHTML = `
      <p class="result-label">おすすめルート</p>
      <h3>${route.title}</h3>
      <p>${route.body}</p>
      <a class="text-link" data-offer="${route.offer}" href="${route.href}" target="_blank" rel="noopener sponsored">${route.label}</a>
    `;
    wireOfferLinks(result);
  });

  ["visitors", "ctr", "cvr", "reward"].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", updateRevenue);
  });
  updateRevenue();
  wireOfferLinks(document);
});

function withUtm(url, offer) {
  try {
    const parsed = new URL(url, window.location.href);
    if (parsed.hostname.includes("musclelove-777.github.io")) return parsed.toString();
    parsed.searchParams.set("utm_source", "ai-tenshoku-compass");
    parsed.searchParams.set("utm_medium", "affiliate_click");
    parsed.searchParams.set("utm_campaign", offer || "career_offer");
    return parsed.toString();
  } catch {
    return url;
  }
}

function resolveOfferUrl(anchor) {
  const offer = anchor.dataset.offer;
  const map = window.AI_TENSHOKU_OFFERS || {};
  if (!offer || !map[offer]?.url) return anchor.href;
  return map[offer].url;
}

function recordOfferClick(anchor) {
  const offer = anchor.dataset.offer || anchor.hostname || "unknown";
  const offerMeta = (window.AI_TENSHOKU_OFFERS || {})[offer] || {};
  const payload = {
    offer,
    offerType: offerMeta.type || "unknown",
    offerStatus: offerMeta.status || "unknown",
    href: anchor.href,
    page: location.pathname,
    text: anchor.textContent.trim().slice(0, 80),
    at: new Date().toISOString()
  };
  const key = "ai_tenshoku_offer_clicks";
  const current = JSON.parse(localStorage.getItem(key) || "[]");
  current.push(payload);
  localStorage.setItem(key, JSON.stringify(current.slice(-200)));
}

function wireOfferLinks(root) {
  root.querySelectorAll("a[href^='http']").forEach((anchor) => {
    if (anchor.dataset.tracked === "true") return;
    const offer = anchor.dataset.offer || anchor.hostname;
    anchor.href = withUtm(resolveOfferUrl(anchor), offer);
    anchor.dataset.tracked = "true";
    anchor.addEventListener("click", () => recordOfferClick(anchor));
  });
}

window.aiTenshokuExportClicks = function aiTenshokuExportClicks() {
  return JSON.parse(localStorage.getItem("ai_tenshoku_offer_clicks") || "[]");
};
