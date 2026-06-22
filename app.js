const categories = [
  "水電維修",
  "家電維修",
  "廚具與洗碗機安裝",
  "系統櫃與木作",
  "居家清潔",
  "冷氣清洗與空調",
  "室內裝潢",
  "木工油漆",
  "搬家與大型家具",
  "防水抓漏",
  "門窗玻璃",
  "資訊系統與網站",
  "設計與攝影",
  "商業顧問與會計",
  "教育課程",
  "運動健身"
];

const demoStats = {
  openRequests: 128,
  experts: 2460
};

const cityDistricts = {
  台北市: ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"],
  新北市: ["板橋區", "三重區", "中和區", "永和區", "新莊區", "新店區", "土城區", "蘆洲區", "汐止區", "樹林區", "淡水區", "林口區"],
  桃園市: ["桃園區", "中壢區", "平鎮區", "八德區", "楊梅區", "蘆竹區", "龜山區", "龍潭區", "大溪區", "大園區"],
  台中市: ["中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "豐原區", "沙鹿區"],
  台南市: ["中西區", "東區", "南區", "北區", "安平區", "安南區", "永康區", "歸仁區", "新化區", "仁德區"],
  高雄市: ["新興區", "前金區", "苓雅區", "鹽埕區", "鼓山區", "左營區", "三民區", "前鎮區", "鳳山區", "楠梓區"],
  基隆市: ["仁愛區", "信義區", "中正區", "中山區", "安樂區", "暖暖區", "七堵區"],
  新竹市: ["東區", "北區", "香山區"],
  新竹縣: ["竹北市", "竹東鎮", "新埔鎮", "關西鎮", "湖口鄉", "新豐鄉"],
  苗栗縣: ["苗栗市", "頭份市", "竹南鎮", "苑裡鎮", "後龍鎮", "通霄鎮"],
  彰化縣: ["彰化市", "員林市", "和美鎮", "鹿港鎮", "溪湖鎮", "二林鎮"],
  南投縣: ["南投市", "埔里鎮", "草屯鎮", "竹山鎮", "集集鎮", "名間鄉"],
  雲林縣: ["斗六市", "斗南鎮", "虎尾鎮", "西螺鎮", "土庫鎮", "北港鎮"],
  嘉義市: ["東區", "西區"],
  嘉義縣: ["太保市", "朴子市", "民雄鄉", "水上鄉", "中埔鄉", "大林鎮"],
  屏東縣: ["屏東市", "潮州鎮", "東港鎮", "恆春鎮", "萬丹鄉", "內埔鄉"],
  宜蘭縣: ["宜蘭市", "羅東鎮", "蘇澳鎮", "頭城鎮", "礁溪鄉", "冬山鄉"],
  花蓮縣: ["花蓮市", "吉安鄉", "新城鄉", "壽豐鄉", "鳳林鎮", "玉里鎮"],
  台東縣: ["台東市", "成功鎮", "關山鎮", "卑南鄉", "鹿野鄉", "池上鄉"],
  澎湖縣: ["馬公市", "湖西鄉", "白沙鄉", "西嶼鄉"],
  金門縣: ["金城鎮", "金湖鎮", "金沙鎮", "金寧鄉"],
  連江縣: ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"]
};

const seedExperts = [
  {
    id: crypto.randomUUID(),
    name: "阿宏水電廚具安裝",
    category: "廚具與洗碗機安裝",
    location: "台北市、新北市",
    mode: "到府服務",
    contact: "LINE: kitchen-hong",
    price: "場勘 $800 起，施工另報價",
    bio: "擅長洗碗機進排水、插座迴路、廚房櫃體微調與小型水電整合。"
  },
  {
    id: crypto.randomUUID(),
    name: "禾木系統櫃修整",
    category: "系統櫃與木作",
    location: "雙北、桃園",
    mode: "到府服務",
    contact: "hello@woodfix.example",
    price: "依尺寸與現場報價",
    bio: "處理系統櫃裁切、門片調整、檯面開孔、五金更換與局部修補。"
  },
  {
    id: crypto.randomUUID(),
    name: "明亮居家水電",
    category: "水電維修",
    location: "台北市、基隆",
    mode: "到府服務",
    contact: "02-2345-6789",
    price: "基本檢修 $600 起",
    bio: "漏水、插座、燈具、加壓馬達、浴室廚房排水與小型電路檢測。"
  },
  {
    id: crypto.randomUUID(),
    name: "快潔冷氣清洗",
    category: "冷氣清洗與空調",
    location: "新北市、桃園",
    mode: "到府服務",
    contact: "LINE: cool-clean",
    price: "分離式冷氣 $2,000 起",
    bio: "冷氣清洗、保養、漏水檢查與空調簡易維修。"
  },
  {
    id: crypto.randomUUID(),
    name: "清爽家務團隊",
    category: "居家清潔",
    location: "台北市",
    mode: "到府服務",
    contact: "clean@example.com",
    price: "每小時 $500 起",
    bio: "一般居家、搬家前後、廚房重油污、浴室水垢與定期清潔。"
  },
  {
    id: crypto.randomUUID(),
    name: "一頁式網站工作室",
    category: "資訊系統與網站",
    location: "全台遠端",
    mode: "遠端諮詢",
    contact: "web@example.com",
    price: "$8,000 起",
    bio: "小型官網、接案表單、名單收集、SEO 基礎設定與自動化串接。"
  }
];

const seedRequests = [
  {
    id: crypto.randomUUID(),
    title: "系統櫃加裝洗碗機，需要改水電與裁切",
    category: "廚具與洗碗機安裝",
    location: "台北市中山區",
    budget: "$10,000 - $30,000",
    time: "週六 上午 9:00-12:00",
    contact: "demo-customer@example.com",
    detail: "已有洗碗機型號，櫃體寬度接近但需要確認進排水與插座位置。",
    createdAt: new Date().toISOString()
  }
];

const store = {
  get experts() {
    return read("findpro_experts", seedExperts);
  },
  set experts(value) {
    write("findpro_experts", value);
  },
  get requests() {
    return read("findpro_requests", seedRequests);
  },
  set requests(value) {
    write("findpro_requests", value);
  },
  get matches() {
    return read("findpro_matches", []);
  },
  set matches(value) {
    write("findpro_matches", value);
  },
  get members() {
    return read("findpro_members", []);
  },
  set members(value) {
    write("findpro_members", value);
  }
};

let currentMatchRequest = {
  title: "媒合搜尋",
  category: "全部分類",
  location: "",
  detail: "",
  time: "不限",
  city: "",
  district: "",
  weekday: "不限",
  timeSlot: "不限"
};

let pendingLeadRequest = null;
let pendingInviteExpertId = null;
let pendingAssistRequestId = null;
let pendingAuthAction = null;
let pendingAuthPayload = null;
let currentMember = null;
const privacyNoticeVersion = "findpro-privacy-notice-2026-06-16";

const $ = (selector) => document.querySelector(selector);

function read(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) {
    localStorage.setItem(key, JSON.stringify(fallback));
    return fallback;
  }
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatNumber(value) {
  return new Intl.NumberFormat("zh-TW").format(value);
}

function fillCategorySelect(select, includeAll = false) {
  select.innerHTML = [
    includeAll ? `<option value="全部分類">全部分類</option>` : "",
    ...categories.map((item) => `<option value="${item}">${item}</option>`)
  ].join("");
}

function fillCitySelect(citySelector, districtSelector, includeAll = false) {
  const citySelect = $(citySelector);
  citySelect.innerHTML = [
    `<option value="">${includeAll ? "不限縣市" : "請選擇縣市"}</option>`,
    ...Object.keys(cityDistricts).map((city) => `<option value="${city}">${city}</option>`)
  ].join("");
  fillDistrictSelect(districtSelector, "", includeAll);
}

function fillDistrictSelect(districtSelector, city, includeAll = false) {
  const districtSelect = $(districtSelector);
  const districts = cityDistricts[city] || [];
  districtSelect.innerHTML = [
    `<option value="">${includeAll ? "不限區域" : city ? "請選擇區域" : "請先選擇縣市"}</option>`,
    ...districts.map((district) => `<option value="${district}">${district}</option>`)
  ].join("");
  districtSelect.disabled = !city;
}

function renderExpertAreaPicker(city) {
  const picker = $("#expertAreaPicker");
  const districts = cityDistricts[city] || [];
  if (!city) {
    picker.innerHTML = `<p class="muted">請先選擇縣市，再勾選可服務區域。</p>`;
    return;
  }

  picker.innerHTML = `
    <label class="check-pill check-all">
      <input type="checkbox" id="expertAllDistricts" name="allDistricts" value="全區" />
      <span>${escapeHtml(city)}全區</span>
    </label>
    <div class="area-options">
      ${districts
        .map(
          (district) => `
        <label class="check-pill">
          <input type="checkbox" name="districts" value="${district}" />
          <span>${district}</span>
        </label>`
        )
        .join("")}
    </div>
  `;
}

function syncExpertAreaSelection(event) {
  const all = $("#expertAllDistricts");
  if (!all) return;
  const districtChecks = [...document.querySelectorAll('#expertAreaPicker input[name="districts"]')];
  if (event?.target === all) {
    districtChecks.forEach((item) => {
      item.checked = all.checked;
      item.disabled = all.checked;
    });
    return;
  }
  if (districtChecks.some((item) => item.checked)) all.checked = false;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function tokenize(value = "") {
  return value
    .toLowerCase()
    .split(/[\s,，。；;、／/]+/)
    .filter((word) => word.length >= 2);
}

function inferCategory(text) {
  const lower = text.toLowerCase();
  const keywordRules = [
    { keywords: ["洗碗機", "廚具"], category: "廚具與洗碗機安裝" },
    { keywords: ["系統櫃", "櫃體", "木作"], category: "系統櫃與木作" },
    { keywords: ["漏水", "抓漏", "壁癌", "防水"], category: "防水抓漏" },
    { keywords: ["冷氣", "空調"], category: "冷氣清洗與空調" },
    { keywords: ["清潔", "打掃"], category: "居家清潔" },
    { keywords: ["插座", "電線", "水管", "水電"], category: "水電維修" },
    { keywords: ["網站", "系統", "表單"], category: "資訊系統與網站" }
  ];
  return keywordRules.find((rule) => rule.keywords.some((keyword) => lower.includes(keyword)))?.category || "";
}

function scoreExpert(expert, request) {
  const haystack = `${expert.name} ${expert.category} ${expert.location} ${expert.mode} ${expert.bio}`.toLowerCase();
  const requestText = `${request.title || ""} ${request.category || ""} ${request.location || ""} ${request.detail || ""} ${request.time || ""}`.toLowerCase();
  let score = 30;

  if (request.category && request.category !== "全部分類" && expert.category === request.category) score += 42;
  if (request.location) {
    const city = request.location.slice(0, 3);
    const district = request.location.slice(3);
    if (expert.location.includes(`${city}全區`)) score += 30;
    else if (district && expert.location.includes(`${city}${district}`)) score += 30;
    else if (expert.location.includes(city)) score += 16;
    else if (expert.location.includes(request.location.slice(0, 2))) score += 8;
  }

  tokenize(requestText).forEach((word) => {
    if (haystack.includes(word)) score += 7;
  });

  return Math.min(score, 98);
}

function getMatches(request, limit = 6) {
  return store.experts
    .map((expert) => ({ ...expert, score: scoreExpert(expert, request) }))
    .filter((expert) => expert.score >= 24)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function renderStats() {
  $("#heroRequestCount").textContent = `${formatNumber(demoStats.openRequests + store.requests.length)}+`;
  $("#heroExpertCount").textContent = `${formatNumber(demoStats.experts + store.experts.length)}+`;
}

function getContactParts(data = {}) {
  return {
    email: (data.email || "").trim(),
    line: (data.line || data.lineId || data.line_id || "").trim(),
    phone: (data.phone || "").trim()
  };
}

function hasContact(data = {}) {
  const contact = getContactParts(data);
  return Boolean(contact.email || contact.line || contact.phone);
}

function mergeContactWithMember(data = {}) {
  const memberContact = currentMember ? getContactParts(currentMember) : {};
  return {
    ...data,
    email: data.email || memberContact.email || "",
    line: data.line || memberContact.line || "",
    phone: data.phone || memberContact.phone || ""
  };
}

function formatContact(data = {}) {
  const contact = getContactParts(data);
  return [
    contact.email ? `Email: ${contact.email}` : "",
    contact.line ? `LINE: ${contact.line}` : "",
    contact.phone ? `電話: ${contact.phone}` : ""
  ].filter(Boolean);
}

function demoHashPassword(value = "") {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return `demo_${(hash >>> 0).toString(16)}`;
}

function getMemberById(memberId) {
  return store.members.find((member) => member.id === memberId) || null;
}

function findExistingMember(data = {}) {
  const email = (data.email || "").trim().toLowerCase();
  if (!email) return null;
  return store.members.find((member) => (member.email || "").toLowerCase() === email) || null;
}

function loadCurrentMember() {
  currentMember = getMemberById(localStorage.getItem("findpro_current_member_id"));
}

function saveCurrentMember(member) {
  currentMember = member;
  localStorage.setItem("findpro_current_member_id", member.id);
  renderMemberState();
}

function renderMemberState() {
  const loginButton = $("#openAuthModal");
  const logoutButton = $("#logoutMember");
  if (!loginButton || !logoutButton) return;
  if (currentMember) {
    loginButton.textContent = `會員：${currentMember.email || currentMember.displayName || "已登入"}`;
    logoutButton.hidden = false;
  } else {
    loginButton.textContent = "登入 / 註冊";
    logoutButton.hidden = true;
  }
}

function fillAuthFormFromPayload(payload = {}) {
  const form = $("#authForm");
  if (!form) return;
  const data = payload.data || {};
  form.elements.email.value = (data.email || currentMember?.email || "").trim();
  form.elements.password.value = "";
}

function openAuthModal(message = "請用 Email 建立會員，之後再補 LINE、電話與其他資料。", payload = {}) {
  $("#authPurpose").textContent = message;
  fillAuthFormFromPayload(payload);
  $("#authModal").classList.add("show");
  $("#authModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeAuthModal(clearPending = true) {
  $("#authModal").classList.remove("show");
  $("#authModal").setAttribute("aria-hidden", "true");
  $("#authForm").reset();
  if (clearPending) {
    pendingAuthAction = null;
    pendingAuthPayload = null;
  }
  document.body.classList.remove("modal-open");
}

function fillMemberProfileForm() {
  if (!currentMember) return;
  const form = $("#memberProfileForm");
  form.elements.email.value = currentMember.email || "";
  form.elements.displayName.value = currentMember.displayName || "";
  form.elements.phone.value = currentMember.phone || "";
  form.elements.line.value = currentMember.line || "";
  form.elements.address.value = currentMember.address || "";
}

function openMemberProfileModal() {
  if (!currentMember) {
    openAuthModal();
    return;
  }
  fillMemberProfileForm();
  $("#memberProfileModal").classList.add("show");
  $("#memberProfileModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeMemberProfileModal() {
  $("#memberProfileModal").classList.remove("show");
  $("#memberProfileModal").setAttribute("aria-hidden", "true");
  $("#memberProfileForm").reset();
  document.body.classList.remove("modal-open");
}

function requireMember(action, payload = {}, message = "請先用 Email 註冊 / 登入，FindPro 才能替你保留需求與媒合紀錄。") {
  if (currentMember) return true;
  pendingAuthAction = action;
  pendingAuthPayload = payload;
  openAuthModal(message, payload);
  return false;
}

function continueAfterAuth(action, payload = {}) {
  if (action === "publish-request") {
    const data = mergeContactWithMember(payload.data || {});
    openLeadConsentModal(buildRequestFromForm(data));
    return;
  }
  if (action === "invite-pro") {
    prefillRequestFromSearch(payload.expertId);
    return;
  }
  if (action === "open-expert") {
    pendingAssistRequestId = null;
    openExpertModal();
    return;
  }
  if (action === "assist-request") {
    const request = findRequestById(payload.requestId);
    if (!request) {
      toast("找不到這筆需求，請重新整理後再試一次。");
      return;
    }
    pendingAssistRequestId = request.id;
    openExpertModal();
    toast("請先建立或更新專家檔案，送出後才會通知顧客確認。");
  }
}

function findRequestById(requestId) {
  return store.requests.find((request) => request.id === requestId);
}

function findExpertById(expertId) {
  return store.experts.find((expert) => expert.id === expertId);
}

function updateRequestStatus(requestId, leadStatus) {
  store.requests = store.requests.map((request) =>
    request.id === requestId ? { ...request, leadStatus, updatedAt: new Date().toISOString() } : request
  );
}

function createMatchEvent({ request, expert, eventType, status, note, matchScore, contactReleased = false }) {
  if (!request) return null;
  const event = {
    id: crypto.randomUUID(),
    requestId: request.id,
    customerMemberId: request.customerMemberId || "",
    requestTitle: request.title,
    requestCategory: request.category,
    requestLocation: request.location,
    requestTime: request.time,
    customerAlias: getCustomerAlias(request),
    expertId: expert?.id || "",
    expertMemberId: expert?.expertMemberId || "",
    expertName: expert?.name || "待指定專家",
    expertCategory: expert?.category || "",
    expertLocation: expert?.location || "",
    expertContact: expert?.contact || "",
    matchScore: Number.isFinite(matchScore) ? matchScore : expert ? scoreExpert(expert, request) : null,
    eventType,
    status,
    note,
    contactReleased,
    createdAt: new Date().toISOString()
  };
  store.matches = [event, ...store.matches];
  return event;
}

function renderExperts() {
  const experts = getMatches(currentMatchRequest, 9);
  $("#expertList").innerHTML = experts.length
    ? experts.map(renderExpertCard).join("")
    : `<p class="muted">目前沒有符合條件的專家，建議放寬分類、地區或改成發布需求。</p>`;
}

function getExpertContactMethods(contact = "") {
  const methods = [];
  if (/line/i.test(contact)) methods.push("LINE");
  if (/@|email/i.test(contact)) methods.push("信箱");
  if (/電話|tel|phone|\d{2,4}[-\s]?\d{3,4}/i.test(contact)) methods.push("手機");
  const uniqueMethods = [...new Set(methods)];
  return uniqueMethods.length ? uniqueMethods : ["站內訊息"];
}

function renderExpertCard(expert) {
  const initials = expert.name.slice(0, 2);
  const contactMethods = getExpertContactMethods(expert.contact);
  return `
    <article class="expert-card">
      <div class="card-cover">
        <span>${escapeHtml(initials)}</span>
        <strong>${expert.score}% 媒合</strong>
      </div>
      <div class="card-body">
        <div class="expert-card-section">
          <span class="section-label">服務項目</span>
          <div class="tag-row">
            <span class="tag">${escapeHtml(expert.category)}</span>
            <span class="tag">${escapeHtml(expert.mode)}</span>
          </div>
        </div>
        <h3>${escapeHtml(expert.name)}</h3>
        <div class="expert-card-section">
          <span class="section-label">服務介紹</span>
          <p>${escapeHtml(expert.bio)}</p>
        </div>
        <div class="card-metrics">
          <span>服務地區<br><strong>${escapeHtml(expert.location)}</strong></span>
          <span>起始價格<br><strong>${escapeHtml(expert.price)}</strong></span>
        </div>
        <div class="expert-card-section">
          <span class="section-label">聯繫方式</span>
          <div class="contact-methods">
            ${contactMethods.map((method) => `<span>${escapeHtml(method)}</span>`).join("")}
          </div>
        </div>
      </div>
      <div class="card-footer">
        <small>雙方同意後開啟站內訊息</small>
        <button class="small-btn" type="button" data-match-action="invite-pro" data-expert-id="${escapeHtml(expert.id)}" data-name="${escapeHtml(expert.name)}">邀請報價</button>
      </div>
    </article>`;
}

function getCustomerAlias(request) {
  const surnames = ["林", "陳", "王", "黃", "張", "李", "劉", "吳"];
  const titles = ["先生", "小姐"];
  const seed = String(request.id || request.title || "").split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return `${surnames[seed % surnames.length]}***${titles[seed % titles.length]}`;
}

function renderRequestCard(request) {
  const customerAlias = getCustomerAlias(request);
  return `
    <article class="request-card">
      <div class="card-cover request-cover">
        <span>${escapeHtml(request.category.slice(0, 2))}</span>
        <strong>線上需求</strong>
      </div>
      <div class="card-body">
        <div class="tag-row">
          <span class="tag">${escapeHtml(request.category)}</span>
        </div>
        <h3>${escapeHtml(request.title)}</h3>
        <p class="request-customer">${escapeHtml(customerAlias)} 發布</p>
        <p class="request-detail">${escapeHtml(request.detail)}</p>
        <div class="card-metrics">
          <span>服務地區<br><strong>${escapeHtml(request.location)}</strong></span>
          <span>希望時間<br><strong>${escapeHtml(request.time)}</strong></span>
        </div>
      </div>
      <div class="card-footer">
        <small>送出可協助意願後，等待顧客確認</small>
        <button class="small-btn" type="button" data-match-action="help-request" data-request-id="${escapeHtml(request.id)}" data-title="${escapeHtml(request.title)}">我可協助此需求</button>
      </div>
    </article>`;
}

function renderRequests() {
  const category = $("#requestFilter").value;
  const requests = store.requests.filter((request) => category === "全部分類" || request.category === category);
  $("#requestList").innerHTML = requests.length
    ? requests.map(renderRequestCard).join("")
    : `<p class="muted">目前沒有符合條件的需求。</p>`;
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  window.setTimeout(() => el.classList.remove("show"), 2600);
}

function buildRequestFromForm(data) {
  const requestData = mergeContactWithMember(data);
  const contacts = formatContact(requestData);

  return {
    id: crypto.randomUUID(),
    ...requestData,
    budget: "待報價",
    location: `${requestData.city}${requestData.district}`,
    time: `${requestData.weekday} ${requestData.timeSlot}`,
    contact: contacts.join("｜"),
    customerMemberId: currentMember?.id || "",
    customerDisplayName: currentMember?.displayName || "",
    consent: {
      privacyNoticeVersion,
      serviceConsent: false,
      marketingConsent: false,
      consentedAt: null
    },
    leadStatus: "new",
    source: "customer_request_form",
    createdAt: new Date().toISOString()
  };
}

function renderLeadConsentSummary(request) {
  $("#leadConsentSummary").innerHTML = `
    <div class="summary-row"><span>發布會員</span><strong>${escapeHtml(request.customerDisplayName || "尚未登入")}</strong></div>
    <div class="summary-row"><span>需求標題</span><strong>${escapeHtml(request.title)}</strong></div>
    <div class="summary-row"><span>服務分類</span><strong>${escapeHtml(request.category)}</strong></div>
    <div class="summary-row"><span>服務地區</span><strong>${escapeHtml(request.location)}</strong></div>
    <div class="summary-row"><span>希望時間</span><strong>${escapeHtml(request.time)}</strong></div>
    <div class="summary-row"><span>聯絡方式</span><strong>${escapeHtml(request.contact)}</strong></div>
  `;
}

function openLeadConsentModal(request) {
  pendingLeadRequest = request;
  renderLeadConsentSummary(request);
  $("#privacyConsent").checked = false;
  $("#marketingConsent").checked = false;
  $("#leadConsentModal").classList.add("show");
  $("#leadConsentModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeLeadConsentModal() {
  $("#leadConsentModal").classList.remove("show");
  $("#leadConsentModal").setAttribute("aria-hidden", "true");
  pendingLeadRequest = null;
  document.body.classList.remove("modal-open");
}

function publishPendingLead() {
  if (!pendingLeadRequest) return;
  if (!$("#privacyConsent").checked) {
    toast("請先勾選個資蒐集與媒合使用同意。");
    return;
  }

  const request = {
    ...pendingLeadRequest,
    consent: {
      privacyNoticeVersion,
      serviceConsent: true,
      marketingConsent: $("#marketingConsent").checked,
      consentedAt: new Date().toISOString()
    }
  };

  store.requests = [request, ...store.requests];
  $("#requestForm").reset();
  fillDistrictSelect("#requestDistrict", "");
  closeLeadConsentModal();
  renderAll();
  const invitedExpert = pendingInviteExpertId ? findExpertById(pendingInviteExpertId) : null;
  if (invitedExpert) {
    createMatchEvent({
      request,
      expert: invitedExpert,
      eventType: "invited",
      status: "待專家回覆",
      note: "顧客從找專家結果主動送出邀請。",
      matchScore: scoreExpert(invitedExpert, request)
    });
    pendingInviteExpertId = null;
    toast(`已發布需求，並送出邀請給 ${invitedExpert.name}。`);
  } else {
    const matches = getMatches(request, 3);
    toast(matches.length ? `已發布，找到 ${matches.length} 位推薦專家。` : "已發布，等待更多專家加入。");
  }
  location.hash = "#board";
}

function setSelectValue(selector, value) {
  const select = $(selector);
  if (!select || !value) return;
  if ([...select.options].some((option) => option.value === value)) {
    select.value = value;
  }
}

function prefillRequestFromSearch(expertId) {
  if (!requireMember("invite-pro", { expertId }, "請先用 Email 註冊 / 登入，FindPro 才能替你送出邀請並通知專家。")) {
    return;
  }

  const expert = findExpertById(expertId);
  if (!expert) {
    toast("找不到這位專家資料，請重新搜尋。");
    return;
  }

  pendingInviteExpertId = expert.id;
  const form = $("#requestForm");
  const title = currentMatchRequest.detail
    ? currentMatchRequest.detail.slice(0, 28)
    : `邀請 ${expert.name} 協助服務`;

  form.elements.title.value = title;
  if (currentMatchRequest.category && currentMatchRequest.category !== "全部分類") {
    setSelectValue("#requestCategory", currentMatchRequest.category);
  }
  if (currentMatchRequest.city) {
    setSelectValue("#requestCity", currentMatchRequest.city);
    fillDistrictSelect("#requestDistrict", currentMatchRequest.city);
    setSelectValue("#requestDistrict", currentMatchRequest.district);
  }
  setSelectValue('#requestForm [name="weekday"]', currentMatchRequest.weekday);
  setSelectValue('#requestForm [name="timeSlot"]', currentMatchRequest.timeSlot);
  form.elements.detail.value = currentMatchRequest.detail || `我想邀請 ${expert.name} 報價，請協助確認需求與可服務時間。`;

  location.hash = "#post";
  form.scrollIntoView({ behavior: "smooth", block: "start" });
  toast("請確認需求內容並發布，FindPro 才能把邀請送給專家。");
}

function handleAi(event) {
  event.preventDefault();
  const question = $("#aiQuestion").value.trim();
  if (!question) {
    toast("請先描述你遇到的問題。");
    return;
  }
  const suggested = inferCategory(question) || "水電維修";
  $("#aiResult").innerHTML = `
    <h3>建議分類：${escapeHtml(suggested)}</h3>
    <ol>
      <li>先拍攝現場照片：問題位置、電源/水源、尺寸、品牌型號。</li>
      <li>把需求拆成「必要施工」與「希望順便處理」兩段，方便專家估價。</li>
      <li>若涉及水電、櫃體或牆面，建議找可到府場勘的專家，避免只靠文字誤判。</li>
      <li>發布需求或搜尋專家時填寫地區、可施工時間與需求細節，系統會推薦相近專家。</li>
    </ol>
    <p class="muted">這是原型內建的規則式 AI 建議；正式版可串接 OpenAI API 做更完整的診斷與追問。</p>
  `;
  $("#matchNeed").value = question;
  $("#matchCategory").value = suggested;
  toast("已同步到找專家搜尋條件。");
}

function handleExpertSearch(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const inferred = inferCategory(data.need || "");
  const category = data.category === "全部分類" && inferred ? inferred : data.category;
  currentMatchRequest = {
    title: "媒合搜尋",
    category,
    location: `${data.city || ""}${data.district || ""}`,
    detail: data.need || "",
    time: `${data.weekday || "不限"} ${data.timeSlot || "不限"}`.trim(),
    city: data.city || "",
    district: data.district || "",
    weekday: data.weekday || "不限",
    timeSlot: data.timeSlot || "不限"
  };
  if (category && category !== data.category) $("#matchCategory").value = category;
  const matches = getMatches(currentMatchRequest, 9);
  $("#matchSummary").innerHTML = `
    已依 <strong>${escapeHtml(category)}</strong>${data.city ? `、<strong>${escapeHtml(data.city + (data.district || ""))}</strong>` : ""}${data.timeSlot && data.timeSlot !== "不限" ? `、<strong>${escapeHtml(data.weekday)} ${escapeHtml(data.timeSlot)}</strong>` : ""} 與需求關鍵字排序，找到 <strong>${matches.length}</strong> 位建議專家。
  `;
  renderExperts();
}

function handleAuth(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const email = (data.email || "").trim().toLowerCase();
  const password = data.password || "";

  if (!email) {
    toast("請填寫電子郵件。");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    toast("請填寫正確的電子郵件格式。");
    return;
  }
  if (password.length < 6 || password.length > 18 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
    toast("密碼需為 6-18 字元，且包含英文字母與數字。");
    return;
  }

  const existing = findExistingMember({ email });
  const passwordDemoHash = demoHashPassword(password);
  const now = new Date().toISOString();
  let member;
  if (existing) {
    const existingHash = existing.passwordDemoHash || (existing.passwordDemo ? demoHashPassword(existing.passwordDemo) : "");
    if (existingHash && existingHash !== passwordDemoHash) {
      toast("密碼不正確，請重新輸入。");
      return;
    }
    member = {
      ...existing,
      email,
      passwordDemoHash: existingHash || passwordDemoHash,
      passwordDemo: "",
      updatedAt: now
    };
    store.members = store.members.map((item) => (item.id === member.id ? member : item));
  } else {
    member = {
      id: crypto.randomUUID(),
      memberType: "customer",
      displayName: email.split("@")[0],
      email,
      line: "",
      phone: "",
      passwordDemoHash,
      createdAt: now,
      updatedAt: now
    };
    store.members = [member, ...store.members];
  }

  const action = pendingAuthAction;
  const payload = pendingAuthPayload || {};
  pendingAuthAction = null;
  pendingAuthPayload = null;
  saveCurrentMember(member);
  closeAuthModal(false);
  toast(existing ? "已登入會員。" : "已完成註冊，可點右上角會員資料補手機與地址。");
  continueAfterAuth(action, payload);
}

function handleMemberProfile(event) {
  event.preventDefault();
  if (!currentMember) {
    openAuthModal();
    return;
  }

  const data = Object.fromEntries(new FormData(event.currentTarget));
  const updatedMember = {
    ...currentMember,
    displayName: (data.displayName || "").trim() || currentMember.displayName || currentMember.email.split("@")[0],
    phone: (data.phone || "").trim(),
    line: (data.line || "").trim(),
    address: (data.address || "").trim(),
    updatedAt: new Date().toISOString()
  };

  store.members = store.members.map((member) => (member.id === updatedMember.id ? updatedMember : member));
  saveCurrentMember(updatedMember);
  closeMemberProfileModal();
  toast("會員資料已更新。");
}

function handleRequest(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));

  if (!requireMember("publish-request", { data }, "請先用 Email 註冊 / 登入，這樣你才能查看需求狀態，也方便 FindPro 通知你專家回覆。")) {
    return;
  }

  const requestData = mergeContactWithMember(data);

  if (!hasContact(requestData)) {
    toast("請在會員資料或需求表單留下 Email、LINE 或電話其中一種。");
    openAuthModal("請先用 Email 註冊 / 登入，FindPro 才能通知你專家回覆。", { data });
    return;
  }

  openLeadConsentModal(buildRequestFromForm(requestData));
}

function handleExpert(event) {
  event.preventDefault();
  if (!requireMember("open-expert", {}, "請先用 Email 註冊 / 登入，之後才能管理專家服務檔案與媒合紀錄。")) {
    return;
  }

  const data = Object.fromEntries(new FormData(event.currentTarget));
  const districtChecks = [...document.querySelectorAll('#expertAreaPicker input[name="districts"]:checked')].map((item) => item.value);
  const allDistricts = $("#expertAllDistricts")?.checked;
  const contacts = [
    data.expertEmail ? `Email: ${data.expertEmail}` : "",
    data.expertLine ? `LINE: ${data.expertLine}` : "",
    data.expertPhone ? `電話: ${data.expertPhone}` : ""
  ].filter(Boolean);

  if (!data.city || (!allDistricts && districtChecks.length === 0)) {
    toast("請選擇服務縣市，並勾選全區或至少一個可服務區域。");
    return;
  }

  if (!contacts.length) {
    toast("請至少填寫 Email、LINE ID 或電話其中一種聯絡方式。");
    return;
  }

  const expertMember = {
    ...currentMember,
    memberType: "expert",
    updatedAt: new Date().toISOString()
  };
  store.members = store.members.map((member) => (member.id === expertMember.id ? expertMember : member));
  currentMember = expertMember;
  localStorage.setItem("findpro_current_member_id", expertMember.id);
  renderMemberState();

  const serviceAreas = allDistricts ? [`${data.city}全區`] : districtChecks.map((district) => `${data.city}${district}`);
  const expert = {
    id: crypto.randomUUID(),
    ...data,
    location: serviceAreas.join("、"),
    contact: contacts.join("｜"),
    serviceAreas,
    expertMemberId: expertMember.id,
    expertDisplayName: expertMember.displayName,
    createdAt: new Date().toISOString()
  };
  store.experts = [expert, ...store.experts];
  const assistedRequest = pendingAssistRequestId ? findRequestById(pendingAssistRequestId) : null;
  if (assistedRequest) {
    createMatchEvent({
      request: assistedRequest,
      expert,
      eventType: "expert_replied",
      status: "待顧客確認",
      note: "專家由公開需求表達可協助，等待顧客同意開通聯繫。",
      matchScore: scoreExpert(expert, assistedRequest)
    });
    updateRequestStatus(assistedRequest.id, "matched");
    pendingAssistRequestId = null;
  }
  event.currentTarget.reset();
  renderExpertAreaPicker("");
  closeExpertModal();
  renderAll();
  toast(assistedRequest ? "已建立專家檔案並送出可協助意願，等待顧客確認。" : "專家服務檔案已儲存，公開頁只會顯示摘要。");
}

function exportLeads() {
  const payload = {
    exportedAt: new Date().toISOString(),
    experts: store.experts,
    requests: store.requests,
    matches: store.matches
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `findpro-leads-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast("已匯出專家與需求名單 JSON。");
}

function openExpertModal() {
  $("#expertModal").classList.add("show");
  $("#expertModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeExpertModal() {
  $("#expertModal").classList.remove("show");
  $("#expertModal").setAttribute("aria-hidden", "true");
  pendingAssistRequestId = null;
  document.body.classList.remove("modal-open");
}

function renderAll() {
  renderStats();
  renderExperts();
  renderRequests();
}

function init() {
  loadCurrentMember();
  ["#requestCategory", "#signupCategory"].forEach((selector) => fillCategorySelect($(selector)));
  ["#matchCategory", "#requestFilter"].forEach((selector) => fillCategorySelect($(selector), true));
  fillCitySelect("#requestCity", "#requestDistrict");
  fillCitySelect("#matchCity", "#matchDistrict", true);
  $("#expertCity").innerHTML = [
    `<option value="">請選擇縣市</option>`,
    ...Object.keys(cityDistricts).map((city) => `<option value="${city}">${city}</option>`)
  ].join("");
  renderExpertAreaPicker("");
  $("#requestCity").addEventListener("change", (event) => fillDistrictSelect("#requestDistrict", event.target.value));
  $("#expertCity").addEventListener("change", (event) => renderExpertAreaPicker(event.target.value));
  $("#expertAreaPicker").addEventListener("change", syncExpertAreaSelection);
  $("#matchCity").addEventListener("change", (event) => fillDistrictSelect("#matchDistrict", event.target.value, true));
  $("#aiForm").addEventListener("submit", handleAi);
  $("#expertMatchForm").addEventListener("submit", handleExpertSearch);
  $("#authForm").addEventListener("submit", handleAuth);
  $("#memberProfileForm").addEventListener("submit", handleMemberProfile);
  $("#requestForm").addEventListener("submit", handleRequest);
  $("#expertForm").addEventListener("submit", handleExpert);
  $("#requestFilter").addEventListener("change", renderRequests);
  $("#confirmLeadConsent").addEventListener("click", publishPendingLead);
  $("#exportLeads")?.addEventListener("click", exportLeads);
  $("#openAuthModal").addEventListener("click", () => {
    if (currentMember) openMemberProfileModal();
    else openAuthModal();
  });
  $("#logoutMember").addEventListener("click", () => {
    closeMemberProfileModal();
    currentMember = null;
    localStorage.removeItem("findpro_current_member_id");
    renderMemberState();
    toast("已登出會員。");
  });
  $("#openExpertModal").addEventListener("click", () => {
    if (!requireMember("open-expert", {}, "請先用 Email 註冊 / 登入，之後才能管理專家服務檔案與媒合紀錄。")) {
      return;
    }
    pendingAssistRequestId = null;
    openExpertModal();
  });
  document.querySelectorAll("[data-close-modal]").forEach((item) => item.addEventListener("click", closeExpertModal));
  document.querySelectorAll("[data-close-lead-modal]").forEach((item) => item.addEventListener("click", closeLeadConsentModal));
  document.querySelectorAll("[data-close-auth-modal]").forEach((item) => item.addEventListener("click", () => closeAuthModal()));
  document.querySelectorAll("[data-close-profile-modal]").forEach((item) => item.addEventListener("click", closeMemberProfileModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeExpertModal();
      closeLeadConsentModal();
      closeAuthModal();
      closeMemberProfileModal();
    }
  });
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("[data-match-action]");
    if (!button) return;
    if (button.dataset.matchAction === "invite-pro") {
      prefillRequestFromSearch(button.dataset.expertId);
      return;
    }
    const request = findRequestById(button.dataset.requestId);
    if (!request) {
      toast("找不到這筆需求，請重新整理後再試一次。");
      return;
    }
    if (!requireMember("assist-request", { requestId: request.id }, "請先用 Email 註冊 / 登入，FindPro 才能把你的專家回覆與顧客需求綁定。")) {
      return;
    }
    pendingAssistRequestId = request.id;
    openExpertModal();
    toast("請先建立或更新專家檔案，送出後才會通知顧客確認。");
  });
  renderMemberState();
  renderAll();
}

init();
