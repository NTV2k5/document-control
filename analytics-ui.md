# BÁO CÁO PHÂN TÍCH CHI TIẾT THIẾT KẾ UI/UX & ĐẶC TẢ COMPONENT FRONTEND
## DỰ ÁN: GDU PORTAL - DOCUMENT CONTROL (HỆ THỐNG QUẢN LÝ TÀI LIỆU SỐ)

---

## I. TỔNG QUAN HỆ THỐNG & LAYOUT ARCHITECTURE

### 1. Cấu trúc Layout Tổng Thể (Master Layout Architecture)
Hệ thống áp dụng kiến trúc **Dashboard Layout 3 khối chính (Three-Pane Layout)** đồng bộ xuyên suốt tất cả các module:
* **Sidebar (Bên trái):** Chiếm chiều rộng cố định (`260px`). Cấu trúc gồm:
    * *Top:* Hệ thống nhận diện thương hiệu (`Document Control - ADMIN`).
    * *Navigation Group:* Overview, Published Documents, University Hubs, My Hubs, Tickets.
    * *Management Group:* Sharing, Shared, Recycle Bin, Settings.
    * *Bottom Widget:* Thông tin tài khoản (`Dr. Sarah Jenkins`), thanh chỉ báo dung lượng (`Storage Usage: 4.2 TB / 10 TB`) kèm nút `Sign Out`.
* **Header (Phía trên):** Chiếm chiều cao cố định (`64px`), bao gồm:
    * Thanh tìm kiếm nâng cao (Global Search Bar) chứa placeholder động theo ngữ cảnh.
    * Nút bộ lọc nhanh (`Filter`), Nút kích hoạt lệnh tìm kiếm (`Search`).
    * Bộ chuyển đổi ngôn ngữ (`VN / EN`).
    * Icon thông báo tích hợp Badge trạng thái (`Notification Bell`).
* **Main Content Window (Trung tâm):** Vùng hiển thị động, áp dụng Flexible Box / Grid Layout co giãn linh hoạt theo độ phân giải màn hình. Ở một số màn hình quản lý (Published Documents), vùng này sẽ tự động chia đôi để hiển thị thêm **Right Drawer Panel (Bên phải)** phục vụ hiển thị chi tiết Metadata (Detail View).

---

## II. BÓC TÁCH CHI TIẾT VÀ ĐẶC TẢ KỸ THUẬT TỪNG MÀN HÌNH UI

### 1. Màn hình Mẫu 01: Overview Dashboard (Bảng điều khiển trung tâm)
* **Thành phần UI đặc biệt:**
    * `TrendingBar`: Thanh tag trượt chứa các từ khóa xu hướng hot toàn trường (`#AIEthics`, `#QuantumComputing`, `#ModernArchitecture`, v.v.).
    * `HeroBanner`: Biểu ngữ lớn trực quan về GDU Portal tích hợp nút `Get Started` và tính năng AI chuyên sâu qua nút `AI Assist`.
    * `TrendingNowWidget`: Khối hiển thị Top 5 văn bản được quan tâm nhất, xếp hạng số thứ tự lớn từ `01` đến `05`.
    * `MetricCardGroup`: 3 thẻ đo lường động: *Published Files*, *My Files*, *Sharing Files* hiển thị số liệu lớn và phần trăm tăng trưởng so với tháng trước (`+12% this month`).
    * `AnalyticsChartGroup`:
        * Biểu đồ cột (`Engagement Analytics`): Thống kê lượt xem file theo các ngày trong tuần (22th Jan -> Today).
        * Biểu đồ phân tách (`File Distribution`): Thống kê số lượng theo định dạng (Documents: 428, Videos: 312, Images: 544, Others: 120).
    * `ImportantBanner`: Thanh cảnh báo khẩn cấp màu đỏ (`Important - Unread`) hiển thị văn bản cập nhật an ninh mạng kèm nhãn hành động bắt buộc (`3 Urgent Actions`).
    * `LatestPublishedGrid` & `RecentlyInteracted`: Khối hiển thị thẻ tài liệu theo dạng ngang và dọc, có đính kèm nhãn phân loại tài liệu (*Regulation*, *Policy*, *Guideline*).

### 2. Màn hình Mẫu 02 & 03: Published Documents (Quản lý văn bản đã ban hành)
* **Thành phần UI đặc biệt:**
    * `TabControl`: Bộ lọc phân nhóm dữ liệu hàng đầu: *ALL (24)*, *ACADEMIC DOCS (12)*, *FINANCIAL (8)*.
    * `ViewToggle`: Nút chuyển đổi trạng thái hiển thị linh hoạt giữa **Grid View (Mẫu 02)** và **List View (Mẫu 03)**.
    * `DocumentGridCard` / `DataTable`:
        * *Grid View:* Card màu trắng, viền bo tròn, hiển thị định dạng tệp (PDF/Excel), thẻ trạng thái `APPROVED`, người tạo, ngày tạo, thẻ tag nội bộ và số lượt xem.
        * *List View:* Bảng dữ liệu chuẩn Enterprise gồm các cột: `Type`, `Document Name`, `Creator`, `Date`, `Views`, `Status`, `Actions`.
    * `DetailDrawerPanel` (Bên phải): Khi click chọn một tài liệu, bảng này sẽ trượt ra (Drawer component) để hiển thị:
        * Tab phân chia thông tin chi tiết: *Detail*, *Activity*, *Version*.
        * Vùng `Preview Restricted`: Trạng thái chặn xem trước đối với tài liệu bảo mật nội bộ, kèm nút `View Fullscreen`.
        * Metadata chi tiết: Danh sách người nhận (Recipients), Ngày khởi tạo, Thư mục cha (`Nhân sự (Human Resources)`), Danh sách Thẻ Tag.
        * Nút hành động chân trang: `Download` (Outline Button) và `Edit Details` (Filled Button).

### 3. Màn hình Mẫu 04 & 05: University Hubs & My Hubs (Quản lý kho tài liệu)
* **Thành phần UI đặc biệt:**
    * `CategorySummaryBar`: 4 thẻ phân loại tệp tin khối lượng lớn (Images, Videos, Documents, Other) có thanh màu hiển thị tỉ lệ phần trăm dung lượng đã sử dụng bên dưới.
    * `HubsSection`: Phân nhóm quản lý theo mô hình phân cấp:
        * *Departments (Phòng ban):* Kho dữ liệu của các khoa (`Computer Science`, `Faculty of Arts`, `Molecular Biology`, `Mathematics`).
        * *Active Projects (Dự án hoạt động):* (`AI Research Lab`, `Campus Sustainability`,...).
    * `ActionContextMenu` (Dropdown Menu chuột phải / Click ba dấu chấm): Menu chức năng gồm: *Rename*, *Download All*, *Move Directory*, *Share Access*, *Archive/Delete*.
    * `ActionBar` (Chỉ có ở My Hubs): Cụm nút thao tác nhanh phía trên gồm `Create Folder` (Filled) và `Add File` (Outline).

### 4. Màn hình Mẫu 06 & 07: Tickets System & Ticket Detail (Quy trình phối hợp nghiệp vụ)
* **Thành phần UI đặc biệt:**
    * `TicketMetricOverview`: 4 khối chỉ số hiệu năng xử lý tác vụ: *Total Tickets*, *Pending Tasks*, *Resolved Today*, *Avg. Response (Hour)*.
    * `FilterBadgeRow`: Hàng nút lọc trạng thái có gắn kèm số lượng Badge đỏ trực quan: *ALL*, *PENDING (1)*, *IN PROGRESS*, *COMPLETED*, *OVERDUE*, *DECLINED*, *REQUIRED FILE SCANNED (0)*.
    * `TicketTable`: Bảng quản lý ticket chi tiết cao. Định danh ID dạng (`MT20.000036`). Cột tiêu đề hiển thị song song Tên tác vụ xử lý (ví dụ: *Thủ tục nhập học bổ sung*, *Dịch thuật văn bản pháp lý*) kèm Badge phân loại phòng ban nghiệp vụ xử lý nhỏ phía dưới (*ADMISSION*, *LEGAL*).
    * `TicketDetailModal` (Màn hình Mẫu 07): Hộp thoại Overlay Pop-up chia làm 2 phân khu lớn:
        * *Trái (Ticket Information):* Hiển thị trạng thái màu (`COMPLETED`), nội dung yêu cầu, người được chỉ định xử lý (`Phan Gia Tâm`), tệp tin đính kèm và hạn chót (`Deadline`).
        * *Phải (Activity History Timeline):* Biểu đồ luồng thời gian (Timeline Component) hiển thị lịch sử log thao tác của từng nhân sự từ lúc tạo ticket -> duyệt ticket -> tải lên văn bản đã đóng dấu (`stamped_contract_final_2025.pdf`) -> đóng ticket.

### 5. Màn hình Mẫu 08: My Profile / Account Settings (Quản lý thông tin cá nhân)
* **Thành phần UI đặc biệt:**
    * `ProfileHeaderCard`: Khối hiển thị ảnh đại diện lớn, Chức vụ (`Dean of Information Systems`), Trạng thái hoạt động (`Active`), Email trường, Số điện thoại và Địa điểm văn phòng làm việc.
    * `PersonalInformationForm`: Biểu mẫu nhập thông tin cấu trúc 2 cột song song (First Name, Last Name, Employee ID, Department) và vùng nhập văn bản tiểu sử chuyên môn dài (`Professional Bio`).
    * `StorageAnalyticsWidget`: Biểu đồ vòng (Doughnut Chart) bóc tách dữ liệu sử dụng bộ nhớ cá nhân thực tế (Documents: 65%, Media Assets: 35%).
    * `RecentActivityTimeline`: Nhật ký bảo mật thu nhỏ lưu vết thao tác cá nhân (Cập nhật hồ sơ, Đăng nhập từ thiết bị mới, Thay đổi mật khẩu).

---

## III. CHI TIẾT CÁC COMPONENT TÁI SỬ DỤNG (REUSABLE COMPONENTS SYSTEM)

Để tối ưu hóa lượng code (đáp ứng tiêu chuẩn DRY), hệ thống được module hóa thành các component có khả năng tái sử dụng cao ở 3 cấp độ:

### 1. Global Layout Component (Cấp độ toàn cục)
* **`SidebarNavigation`:** Xuất hiện ở tất cả màn hình. Nhận route hiện tại thông qua URL để thay đổi trạng thái `Active` cho các menu item.
* **`GlobalHeader`:** Dùng chung cho toàn bộ dashboard, tái sử dụng thanh Search, các nút Filter/Search, cụm chuyển ngôn ngữ và Notifications.
* **`StorageWidget`:** Khối hiển thị dung lượng (`4.2 TB / 10 TB`) ở chân Sidebar. Nhận `props` dữ liệu bộ nhớ từ API để hiển thị thanh tiến trình trực quan.

### 2. Atom Components (Component nguyên tử)
* **`BadgeStatus`:** Component nhãn trạng thái động đa năng.
    * *Vị trí tái sử dụng:* Thẻ tài liệu ở trang *Published Documents* (`APPROVED`), danh sách tác vụ ở trang *Tickets* (`PENDING`, `IN PROGRESS`, `COMPLETED`), và trong Pop-up *Ticket Detail*.
    * *Logic:* Nhận biến `status` để tự động tính toán class CSS (màu nền và chữ) tương ứng từ Tailwind token.
* **`TagLabel`:** Thẻ tag văn bản thu nhỏ.
    * *Vị trí tái sử dụng:* `TrendingBar` đầu trang, nhãn chuyên mục trên card (`REGULATION`, `POLICY`), và danh sách tag phân loại trong bảng Detail Drawer bên phải.
* **`ActionDropdownMenu`:** Menu chức năng ẩn dưới nút 3 dấu chấm (`...`).
    * *Vị trí tái sử dụng:* Trên góc các thẻ Folder/Card, cuối mỗi dòng của bảng dữ liệu `DataTable` và `TicketTable`. 
    * *Logic:* Trả về menu tùy chọn hành động tương ứng (*Rename, Download, Share, Move, Delete*) dựa trên kiểu đối tượng truyền vào (File, Folder hoặc Ticket).

### 3. Molecule & Organism Components (Component phức hợp)
* **`DataTable`:** Bảng quản trị dữ liệu chuẩn Enterprise.
    * *Vị trí tái sử dụng:* Trang *Published Documents (List View)* và danh sách tác vụ trang *Tickets*.
    * *Logic:* Nhận vào mảng cấu hình `columns` và mảng dữ liệu `data` để render, tích hợp sẵn phân trang (Pagination) động ở chân bảng.
* **`FileCategorySummary`:** Hàng thẻ phân loại định dạng tệp tin.
    * *Vị trí tái sử dụng:* Nằm ở phần đầu của cả hai trang *University Hubs* và *My Hubs*. Layout 4 card (Images, Videos, Documents, Other) giống nhau, chỉ nhận `props` khác nhau về Icon, Số lượng item, Dung lượng GB và Mã màu của thanh Progress.
* **`ActivityTimeline`:** Component dòng lịch sử thời gian dạng dọc.
    * *Vị trí tái sử dụng:* Phân khu *Activity History* trong hộp thoại *Ticket Detail* và khối nhật ký bảo mật *Recent Activity* tại trang hồ sơ cá nhân *My Profile*.
* **`DocumentRightDrawer`:** Bảng trượt chi tiết thông tin file từ bên phải.
    * *Vị trí tái sử dụng:* Click vào bất kỳ file nào ở cả hai chế độ hiển thị (Grid View & List View) thuộc trang *Published Documents* đều kích hoạt lại đúng component drawer này.

---

## IV. DESIGN SYSTEM SPECIFICATIONS (ĐẶC TẢ HỆ THỐNG THIẾT KẾ)

Để đảm bảo Frontend khi triển khai sử dụng Tailwind CSS/Shadcn UI khớp 100% pixel với Figma:

### 1. Bảng màu chuẩn hóa (Color Palette)
* **Primary Navy/Blue (Màu thương hiệu chính):** `#0052CC` (Sử dụng cho các nút hành động chính, nút Active trên Sidebar, Badge kích hoạt).
* **Dark Navy (Sidebar Background & Widget nền):** `#0B2545` hoặc `#1E293B` phiên bản tối (Ứng dụng cho khối hiển thị dung lượng và nền các khối bổ trợ).
* **Status / Badge Colors:**
    * `Success (Approved/Completed):` Nền xanh lục nhạt, chữ xanh lục đậm (`#10B981` / `#059669`).
    * `Pending:` Nền vàng nhạt, chữ cam/vàng đậm (`#FBBF24`).
    * `In Progress:` Nền xanh dương nhạt, chữ xanh dương đậm (`#3B82F6`).
    * `Important / Destructive / Overdue:` Nền đỏ nhạt, chữ đỏ đậm (`#EF4444`).
* **Surface / Background (Nền tảng):** Nền chính của Workspace dùng màu xám siêu nhạt siêu trong (`#F8FAFC` hoặc `#F1F5F9`) kết hợp các Card chứa nội dung màu trắng thuần (`#FFFFFF`) có đổ bóng nhẹ (`box-shadow: 0 1px 3px rgba(0,0,0,0.05)`).

### 2. Định hình Typography & Component Spacing
* **Font Family:** `Inter, system-ui, sans-serif` đem lại độ hiển thị văn bản hành chính sắc nét nhất.
* **Bán kính bo góc (Border Radius):** Đồng bộ `border-radius: 12px` hoặc `16px` cho tất cả các dạng Card, Thẻ tài liệu, và Khung bộ lọc. Các nút bấm nhỏ dùng `border-radius: 8px`.

---

## V. ANALYSIS & DANH SÁCH COMPONENT CẦN PHÁT TRIỂN

1.  **Xây dựng bộ thư viện UI Nguyên tử (Atom Components):**
    * `BadgeStatus`: Component hiển thị trạng thái động đa năng (Approved, Pending, In Progress, Overdue, Legal, Admission).
    * `ContextDropdown`: Component menu khi tương tác với các nút hành động `...` trên danh sách hoặc thẻ thư mục.
2.  **Xây dựng bộ Phức hợp (Complex Components):**
    * `DocumentRightDrawer`: Bảng chi tiết tài liệu trượt từ bên phải sang, cần xử lý logic ẩn/hiển thị mượt mà bằng Framer Motion hoặc CSS Transition.
    * `ActivityTimeline`: Component dòng thời gian dùng chung cho cả màn hình chi tiết Ticket (Mẫu 07) lẫn màn hình Profile Log hoạt động (Mẫu 08).
3.  **Xử lý các màn hình Figma còn thiếu:**
    * *Màn hình Đăng nhập (Login View):* Cần thiết kế màn hình đăng nhập đồng bộ sử dụng chung nền hệ thống, form nhập chuẩn mã số cán bộ/sinh viên GDU, và nút đăng nhập qua tài khoản Google/Office 365 của nhà trường.
    * *Trạng thái Skeleton Loading:* Đặc biệt quan trọng cho màn hình `Published Documents` (Mẫu 03) và `Tickets` (Mẫu 06) khi tải danh sách từ API để nâng cao trải nghiệm người dùng.


### Cấu trúc thư mục dự kiến trong Next.js (App Router)
```text
src/
├── components/          # Components phân cấp
│   ├── ui/              # Atom components (Badge, Button, Dropdown - Shadcn UI)
│   ├── layout/          # Sidebar, GlobalHeader, StorageWidget
│   ├── shared/          # DataTable, ActivityTimeline, FileCategorySummary
│   └── document/        # DocumentRightDrawer, FileCard, FolderCard
├── app/                 # Next.js Pages & Routing
│   ├── (auth)/          # Group route cho Đăng nhập
│   │   └── login/page.tsx
│   ├── (dashboard)/     # Group route hệ thống chính
│   │   ├── overview/page.tsx
│   │   ├── published/page.tsx
│   │   ├── university-hubs/page.tsx
│   │   ├── my-hubs/page.tsx
│   │   └── tickets/page.tsx
├── hooks/               # Custom hooks xử lý logic API & Interactions
├── services/            # API Client (Axios / Fetch call)
└── types/               # Type Definitions (TypeScript) cho hệ thống dữ liệu GDU