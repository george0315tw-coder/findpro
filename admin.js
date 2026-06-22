const storageKeys = {
  requests: "findpro_requests",
  experts: "findpro_experts",
  matches: "findpro_matches",
  members: "findpro_members"
};

const $ = (selector) => document.querySelector(selector);

function readList(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function writeList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("zh-TW", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function parseContactFields(item = {}, prefix = "") {
  const email = item.email || item[`${prefix}Email`] || "";
  const line = item.line || item.lineId || item.line_id || item[`${prefix}Line`] || "";
  const phone = item.phone || item[`${prefix}Phone`] || "";
  const contact = item.contact || "";
  const labeledPhone = contact.match(/(?:電話|手機|Phone|Tel):?\s*([0-9+\-\s()]{7,})/i)?.[1]?.trim();
  const barePhone = contact.match(/(?:\+?886[-\s]?)?0\d{1,3}[-\s]?\d{3,4}[-\s]?\d{3,4}/)?.[0] || "";

  return {
    email: email || contact.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] || "",
    line: line || contact.match(/LINE(?: ID)?:\s*([^｜,，\s]+)/i)?.[1] || "",
    phone: phone || labeledPhone || barePhone || ""
  };
}

const leadStatusLabels = {
  new: "待專家回覆",
  matched: "待顧客確認",
  contacted: "已開通聯繫",
  booked: "已確認預約",
  closed: "已結案",
  archived: "已封存"
};

const eventTypeLabels = {
  recommended: "系統推薦",
  invited: "顧客邀請",
  expert_replied: "專家可協助",
  customer_selected: "顧客確認",
  contact_opened: "開通聯繫",
  closed: "結案"
};

function displayLeadStatus(status) {
  return leadStatusLabels[status] || status || "待專家回覆";
}

function displayEventType(type) {
  return eventTypeLabels[type] || type || "-";
}

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  window.setTimeout(() => el.classList.remove("show"), 2400);
}

function getData() {
  return {
    requests: readList(storageKeys.requests),
    experts: readList(storageKeys.experts),
    matches: readList(storageKeys.matches),
    members: readList(storageKeys.members)
  };
}

function renderStats() {
  const { requests, experts, matches, members } = getData();
  const marketing = requests.filter((item) => item.consent?.marketingConsent).length;
  const consented = requests.filter((item) => item.consent?.serviceConsent).length;
  const released = matches.filter((item) => item.contactReleased).length;
  $("#adminStats").innerHTML = `
    <article class="stat-card"><span>顧客需求</span><strong>${requests.length}</strong></article>
    <article class="stat-card"><span>專家名單</span><strong>${experts.length}</strong></article>
    <article class="stat-card"><span>會員數</span><strong>${members.length}</strong></article>
    <article class="stat-card"><span>媒合事件</span><strong>${matches.length}</strong></article>
    <article class="stat-card"><span>已開通聯繫</span><strong>${released}</strong></article>
    <article class="stat-card"><span>個資同意</span><strong>${consented}</strong></article>
    <article class="stat-card"><span>行銷同意</span><strong>${marketing}</strong></article>
  `;
}

function renderRequests() {
  const { requests } = getData();
  const rows = requests.map((item) => {
    const contact = parseContactFields(item);
    return `
      <tr>
        <td><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.detail || "")}</small></td>
        <td>${escapeHtml(item.category)}</td>
        <td>${escapeHtml(item.location)}</td>
        <td>${escapeHtml(item.time)}</td>
        <td>${escapeHtml(contact.email || "-")}</td>
        <td>${escapeHtml(contact.line || "-")}</td>
        <td>${escapeHtml(contact.phone || "-")}</td>
        <td>${item.consent?.serviceConsent ? "已同意" : "未記錄"}<small>${item.consent?.marketingConsent ? "行銷同意" : "未同意行銷"}</small></td>
        <td>${escapeHtml(displayLeadStatus(item.leadStatus || "new"))}<small>${formatDate(item.createdAt)}</small></td>
      </tr>
    `;
  }).join("");

  $("#requestTable").innerHTML = `
    <thead>
      <tr>
        <th>需求</th>
        <th>分類</th>
        <th>地區</th>
        <th>希望時間</th>
        <th>Email</th>
        <th>LINE</th>
        <th>電話</th>
        <th>同意紀錄</th>
        <th>狀態</th>
      </tr>
    </thead>
    <tbody>${rows || `<tr><td colspan="9">尚未有顧客需求資料。請先到前台發布一筆需求。</td></tr>`}</tbody>
  `;
}

function renderExperts() {
  const { experts } = getData();
  const rows = experts.map((item) => {
    const contact = parseContactFields(item, "expert");
    return `
      <tr>
        <td><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.bio || "")}</small></td>
        <td>${escapeHtml(item.category)}</td>
        <td>${escapeHtml(item.location)}</td>
        <td>${escapeHtml(item.mode)}</td>
        <td>${escapeHtml(item.price)}</td>
        <td>${escapeHtml(contact.email || "-")}</td>
        <td>${escapeHtml(contact.line || "-")}</td>
        <td>${escapeHtml(contact.phone || "-")}</td>
        <td>${escapeHtml(item.ad_plan || item.adPlan || "none")}</td>
        <td>${formatDate(item.createdAt)}</td>
      </tr>
    `;
  }).join("");

  $("#expertTable").innerHTML = `
    <thead>
      <tr>
        <th>專家</th>
        <th>服務項目</th>
        <th>服務地區</th>
        <th>方式</th>
        <th>價格</th>
        <th>Email</th>
        <th>LINE</th>
        <th>電話</th>
        <th>曝光方案</th>
        <th>建立時間</th>
      </tr>
    </thead>
    <tbody>${rows || `<tr><td colspan="10">尚未有專家資料。請先建立專家服務檔案。</td></tr>`}</tbody>
  `;
}

function renderMatches() {
  const { matches } = getData();
  const rows = matches.map((item) => {
    const canRelease = !item.contactReleased && item.eventType !== "contact_opened";
    return `
      <tr>
        <td><strong>${escapeHtml(item.requestTitle || "-")}</strong><small>${escapeHtml(item.requestLocation || "")} ${escapeHtml(item.requestTime || "")}</small></td>
        <td>${escapeHtml(item.customerAlias || "匿名顧客")}</td>
        <td><strong>${escapeHtml(item.expertName || "待指定專家")}</strong><small>${escapeHtml(item.expertCategory || "")}</small></td>
        <td>${escapeHtml(displayEventType(item.eventType))}</td>
        <td>${escapeHtml(item.status || "-")}<small>${item.matchScore ? `媒合 ${item.matchScore}%` : "尚未評分"}</small></td>
        <td>${item.contactReleased ? "已開通" : "未開通"}</td>
        <td>${formatDate(item.createdAt)}</td>
        <td>
          ${
            canRelease
              ? `<button class="small-btn" type="button" data-open-contact="${escapeHtml(item.id)}">顧客同意開通</button>`
              : `<span class="muted">已完成</span>`
          }
        </td>
      </tr>
    `;
  }).join("");

  $("#matchTable").innerHTML = `
    <thead>
      <tr>
        <th>需求</th>
        <th>顧客</th>
        <th>專家</th>
        <th>事件</th>
        <th>狀態</th>
        <th>聯繫</th>
        <th>建立時間</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>${rows || `<tr><td colspan="8">尚未有媒合事件。顧客送出邀請，或專家從需求卡表達可協助後，會出現在這裡。</td></tr>`}</tbody>
  `;
}

function renderMembers() {
  const { members } = getData();
  const rows = members.map((item) => `
    <tr>
      <td><strong>${escapeHtml(item.displayName || "-")}</strong><small>${escapeHtml(item.memberType || "customer")}</small></td>
      <td>${escapeHtml(item.email || "-")}</td>
      <td>${escapeHtml(item.line || "-")}</td>
      <td>${escapeHtml(item.phone || "-")}</td>
      <td>${escapeHtml(item.address || "-")}</td>
      <td>${formatDate(item.createdAt)}</td>
      <td>${formatDate(item.updatedAt)}</td>
    </tr>
  `).join("");

  $("#memberTable").innerHTML = `
    <thead>
      <tr>
        <th>會員</th>
        <th>Email</th>
        <th>LINE</th>
        <th>電話</th>
        <th>地址</th>
        <th>建立時間</th>
        <th>更新時間</th>
      </tr>
    </thead>
    <tbody>${rows || `<tr><td colspan="7">尚未有會員資料。前台完成快速註冊 / 登入後，會出現在這裡。</td></tr>`}</tbody>
  `;
}

function openContactForMatch(matchId) {
  const matches = readList(storageKeys.matches);
  const nextMatches = matches.map((item) =>
    item.id === matchId
      ? {
          ...item,
          eventType: "contact_opened",
          status: "已開通聯繫",
          contactReleased: true,
          contactedAt: new Date().toISOString()
        }
      : item
  );
  const changed = nextMatches.find((item) => item.id === matchId);
  writeList(storageKeys.matches, nextMatches);

  if (changed?.requestId) {
    const requests = readList(storageKeys.requests).map((item) =>
      item.id === changed.requestId ? { ...item, leadStatus: "contacted", updatedAt: new Date().toISOString() } : item
    );
    writeList(storageKeys.requests, requests);
  }

  renderStats();
  renderRequests();
  renderMatches();
  toast("已標記顧客同意，聯繫狀態已開通。");
}

function switchTab(tabName) {
  document.querySelectorAll("[data-admin-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.adminTab === tabName);
  });
  $("#adminRequestsPanel").hidden = tabName !== "requests";
  $("#adminExpertsPanel").hidden = tabName !== "experts";
  $("#adminMatchesPanel").hidden = tabName !== "matches";
  $("#adminMembersPanel").hidden = tabName !== "members";
}

function exportData() {
  const payload = {
    exportedAt: new Date().toISOString(),
    ...getData()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `findpro-admin-export-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  toast("已匯出後台資料。");
}

function init() {
  renderStats();
  renderRequests();
  renderExperts();
  renderMatches();
  renderMembers();
  document.querySelectorAll("[data-admin-tab]").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.adminTab));
  });
  $("#matchTable").addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-contact]");
    if (button) openContactForMatch(button.dataset.openContact);
  });
  $("#adminExport").addEventListener("click", exportData);
}

init();
