# FindPro 後台名單資料欄位結構草案

## customer_leads

| 欄位 | 型別 | 說明 |
| --- | --- | --- |
| id | uuid | 顧客需求唯一識別碼 |
| lead_status | enum | new, matched, contacted, booked, closed, archived |
| source | string | customer_request_form, ai_search, admin_import |
| title | string | 需求標題 |
| category | string | 服務分類 |
| city | string | 縣市 |
| district | string | 區域 |
| location | string | 顯示用地區 |
| weekday | string | 希望星期 |
| time_slot | string | 希望時段 |
| budget | string | 預算 |
| detail | text | 需求描述 |
| email | string | 顧客 Email |
| line_id | string | 顧客 LINE ID |
| phone | string | 顧客電話 |
| public_contact_visible | boolean | 預設 false，公開頁不可顯示私人聯絡方式 |
| privacy_notice_version | string | 同意的個資告知版本 |
| service_consent | boolean | 服務必要個資同意 |
| marketing_consent | boolean | 行銷同意，獨立於服務同意 |
| consented_at | datetime | 同意時間 |
| matched_expert_ids | uuid[] | 已推薦或已邀請專家 |
| selected_expert_id | uuid | 顧客選定的專家 |
| admin_note | text | 管理者備註 |
| created_at | datetime | 建立時間 |
| updated_at | datetime | 更新時間 |

## members

| 欄位 | 型別 | 說明 |
| --- | --- | --- |
| id | uuid | 會員唯一識別碼 |
| member_type | enum | customer, expert, admin |
| email | string | 會員 Email |
| password_hash | string | 正式版由後端 Auth / 加密雜湊保存 |
| line_id | string | 會員 LINE ID |
| phone | string | 會員電話 |
| address | string | 會員聯絡地址 |
| display_name | string | 顯示名稱 |
| created_at | datetime | 建立時間 |
| updated_at | datetime | 更新時間 |

## experts

| 欄位 | 型別 | 說明 |
| --- | --- | --- |
| id | uuid | 專家唯一識別碼 |
| profile_status | enum | pending, active, suspended, archived |
| name | string | 專家或店家名稱 |
| category | string | 主要服務 |
| service_areas | json | 多縣市、多區域或全區設定 |
| mode | string | 到府、遠端、到府與遠端 |
| price | string | 起始價格 |
| bio | text | 專長與說明 |
| email | string | 專家 Email |
| line_id | string | 專家 LINE ID |
| phone | string | 專家電話 |
| public_contact_visible | boolean | 預設 false |
| ad_plan | enum | none, featured, category_top, city_top |
| ad_started_at | datetime | 廣告開始時間 |
| ad_ended_at | datetime | 廣告結束時間 |
| created_at | datetime | 建立時間 |
| updated_at | datetime | 更新時間 |

## lead_purchases

| 欄位 | 型別 | 說明 |
| --- | --- | --- |
| id | uuid | 購買紀錄唯一識別碼 |
| lead_id | uuid | 被購買的顧客需求 |
| expert_id | uuid | 購買名單的專家 |
| purchase_status | enum | pending, paid, refunded, cancelled |
| price_amount | integer | 金額 |
| currency | string | 幣別，預設 TWD |
| contact_released | boolean | 是否已開放聯絡資料 |
| purchased_at | datetime | 付款時間 |
| created_at | datetime | 建立時間 |

## match_events

| 欄位 | 型別 | 說明 |
| --- | --- | --- |
| id | uuid | 媒合事件識別碼 |
| lead_id | uuid | 對應顧客需求 |
| expert_id | uuid | 對應專家 |
| match_score | integer | 媒合分數 |
| event_type | enum | recommended, invited, expert_replied, customer_selected, contact_opened |
| match_status | enum | pending_expert_reply, pending_customer_confirm, contact_opened, booked, closed |
| contact_released | boolean | 是否已開放聯絡 |
| customer_confirmed_at | datetime | 顧客同意媒合時間 |
| contact_opened_at | datetime | 聯繫資料開通時間 |
| note | string | 媒合備註 |
| created_at | datetime | 事件時間 |
