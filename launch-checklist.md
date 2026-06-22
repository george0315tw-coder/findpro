# FindPro Open 正式上線流程

## 第 1 階段：網站正式化

- 補齊 SEO title、description、canonical、Open Graph。
- 建立 `robots.txt` 與 `sitemap.xml`。
- 建立正式頁面：首頁、發布需求、找專家、需求看板、專家加入、隱私權政策、服務條款、FAQ。
- 將測試網域替換成正式網域。

## 第 2 階段：資料庫與後台

- 使用 `database-schema.sql` 建立 Supabase/PostgreSQL 資料表。
- 顧客需求表單寫入 `customer_leads`。
- 專家建立服務檔案寫入 `experts` 與 `expert_service_areas`。
- 個資同意寫入 `consent_logs`。
- 媒合、邀請、回覆與開啟聯絡寫入 `match_events`。
- 後台加入登入與管理權限。

## 第 3 階段：媒合流程

- 顧客送出需求後建立案件。
- 系統依分類、地區、關鍵字推薦專家。
- 專家送出「可協助」意願。
- 顧客或管理端確認後才開啟聯絡。
- 後台追蹤案件狀態：new、matched、contacted、booked、closed。

## 第 4 階段：SEO 內容

- 建立服務分類頁，例如水電維修、洗碗機安裝、系統櫃、居家清潔。
- 建立地區頁，例如台北、新北、桃園、台中。
- 建立 FAQ 結構化內容。
- 申請 Google Search Console。
- 安裝 GA4 或其他分析工具。

## 第 5 階段：正式部署

- 部署到 Vercel 或同級平台。
- 綁定正式網域。
- 設定 HTTPS。
- 設定環境變數：資料庫 URL、API key、通知服務 key。
- 完成表單送出、後台查詢與匯出測試。

## 第 6 階段：商業化

- 專家付費曝光：精選專家、分類置頂、地區置頂。
- 顧客需求回訪與評價。
- 專家審核制度。
- 服務分類與地區 SEO 擴張。
