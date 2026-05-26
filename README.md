# Document Control System

Hệ thống quản lý tài liệu (Document Control) nội bộ dành cho doanh nghiệp, được xây dựng dựa trên Next.js và các công nghệ web hiện đại.

## Tính năng chính
- **Authentication**: Phân quyền người dùng (Viewer, Approver, Editor) sử dụng Clerk.
- **Database**: Sử dụng Drizzle ORM để quản lý dữ liệu an toàn.
- **Validation**: Đảm bảo dữ liệu đầu vào chính xác với Zod.
- **Testing**: Đảm bảo chất lượng mã nguồn với Vitest và Playwright.

## Cài đặt và vận hành
1. Cài đặt các dependencies:
```bash
npm install
```

2. Cấu hình file `.env.local` theo mẫu `.env`. Chú ý cấu hình `DATABASE_URL` cho đúng với hệ thống PostgreSQL của doanh nghiệp.

3. Khởi tạo Database:
```bash
npm run db:migrate
```

4. Chạy server ở chế độ phát triển:
```bash
npm run dev
```

---
*Built on top of ixartz/Next-js-Boilerplate*
