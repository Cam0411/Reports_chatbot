import {
  MessageSquare,
  BarChart3,
  Bot,
  Plug,
  GraduationCap,
  Settings,
  Megaphone,
  MoreHorizontal,
  LayoutDashboard,
  Users,
  Workflow,
  ShoppingCart,
  Lightbulb,
  FileSpreadsheet,
  Image as ImageIcon,
  Keyboard,
  Share2,
  ThumbsUp,
  History,
  Activity,
  LineChart,
  Target,
  Globe,
  Database,
  Star
} from "lucide-react";

export const prenyAiData = {
  id: "preny",
  name: "Preny AI",
  description: "Nền tảng chatbot tập trung vào Facebook, Zalo OA, TikTok Business, Lazada & Instagram",
  gradient: "from-blue-600 to-indigo-600",
  icon: Bot,
  features: [
    {
      title: "1. Các Kênh Tích Hợp",
      icon: Plug,
      items: [
        "Facebook: Tìm page và tích hợp bot. Quy tắc: 1 page = 1 bot, 1 bot kết nối nhiều page.",
        "Instagram: Hỗ trợ tích hợp chatbot trên nền tảng.",
        "Zalo OA: Hỗ trợ Zalo Business/Official Account.",
        "TikTok Business: Tích hợp chatbot trên tài khoản.",
        "Lazada: Hỗ trợ tích hợp trên sàn TMĐT Lazada.",
        "Website: Tích hợp trực tiếp vào trang web doanh nghiệp."
      ]
    },
    {
      title: "2. Quy Trình Huấn Luyện AI",
      icon: GraduationCap,
      items: [
        "Upload Google Sheet / Excel: Dữ liệu sản phẩm/dịch vụ (knowledge base) và kịch bản chốt sales.",
        "Thư viện hình ảnh: Cho phép upload ảnh sản phẩm để bot gửi kèm tư vấn trực quan.",
        "Cơ chế học: Nhận diện nội dung, trả lời đúng dù khách hỏi theo nhiều cách.",
        "Số lượng dữ liệu: Không giới hạn — càng nhiều, bot càng thông minh.",
        "Cấu hình doanh nghiệp: Tùy chỉnh tên, username, ngôn ngữ (hỗ trợ auto-detect ngoại ngữ)."
      ]
    },
    {
      title: "3. Cài Đặt Nâng Cao",
      icon: Settings,
      items: [
        "Tốc độ trả lời (Typing): Thêm độ trễ 8–12 giây mô phỏng người thật.",
        "Luồng tư vấn: Đơn giản (thông tin → sale) hoặc chốt sale tự động.",
        "Temperature (Độ sáng tạo): Thấp (chính xác 100%) hoặc Cao (sáng tạo, kéo dữ liệu web).",
        "Cài đặt khác: Tắt bot khi nhập SĐT/Địa chỉ, cách xưng hô, hẹn giờ, im lặng với nền tảng khác."
      ]
    },
    {
      title: "4. Remarketing",
      icon: Megaphone,
      items: [
        "Zalo ZBS: Gửi tin nhắn remarketing qua Zalo ZBS.",
        "Facebook Messenger (FMM): Gửi hàng loạt qua FB API (Chi phí: 200–300đ/tin).",
        "Email: Hỗ trợ remarketing qua Email.",
        "SMS: Hỗ trợ remarketing qua SMS."
      ]
    },
    {
      title: "5. Các Tính Năng Khác",
      icon: MoreHorizontal,
      items: [
        "Bình luận tự động theo bài (Auto Comment).",
        "Thống kê tin nhắn: Báo cáo số lượng tin nhắn.",
        "Ticket hỗ trợ: Cung cấp hệ thống ticket hỗ trợ sau bán hàng.",
        "Kịch bản tư vấn (Lũy kế chốt sale): Xây dựng phễu dẫn dắt khách theo tình huống.",
        "Đặc thù ngành giá trị cao: Xin SĐT/Email rồi im lặng chờ nhân viên tư vấn.",
        "Quản lý: Lịch sử chỉnh sửa (Audit log), Tags, và Phân quyền nhân viên."
      ]
    }
  ]
};

export const saleAiData = {
  id: "sale",
  name: "Sale AI",
  description: "Nền tảng AI tập trung vào website, phân tích hành vi & báo cáo chuyên sâu",
  gradient: "from-emerald-500 to-teal-600",
  icon: BarChart3,
  features: [
    {
      title: "1. Các Kênh Tích Hợp",
      icon: Plug,
      items: [
        "Facebook Page & Telegram.",
        "Sàn TMĐT: Shopee & Shopify.",
        "Zalo Ecosystem: Zalo OA & Zalo Personal.",
        "WhatsApp Personal."
      ]
    },
    {
      title: "2. Huấn Luyện AI & Dữ Liệu",
      icon: Database,
      items: [
        "Định dạng hỗ trợ: PDF, DOCX, CSV, URL website và văn bản thuần (plain text).",
        "Danh mục dữ liệu: FAQ, Policy, Service, Company Info, Conversation Sample, Sales Script...",
        "Quản lý: Upload và quản lý sản phẩm, theo dõi đơn hàng.",
        "Hệ thống: Quản lý tag, phân quyền, tự động đồng bộ sang CRM."
      ]
    },
    {
      title: "3. Chỉ số chất lượng hội thoại",
      icon: Activity,
      items: [
        "Conversation Rating: Đánh giá phiên hội thoại (Mục tiêu: ≥ 4.0/5).",
        "Average Exchanges: Số lượt tin nhắn giải quyết vấn đề (Mục tiêu: ≤ 8 tin/phiên).",
        "Drop-off Rate: Tỉ lệ khách rời bỏ (Mục tiêu: < 30%).",
        "Staff Transfer Rate: Tỉ lệ chuyển nhân viên thật (Mục tiêu: < 15%).",
        "Messages / User, Total Ratings, Staff Transfer."
      ]
    },
    {
      title: "4. Phân tích lưu lượng & sản phẩm",
      icon: LineChart,
      items: [
        "Lưu lượng: Total Visits, Visitors (anonymous vs identified), Conversion Rate, Time on Site, Device.",
        "Tương tác sản phẩm: Products Sent, View Details, Add to Cart, Interaction Trend, Top 5 giỏ hàng.",
        "AI Analysis: Overview, Buying Intent (ý định mua hàng), Recommendations (gợi ý retargeting), Knowledge Gaps."
      ]
    }
  ]
};

export const botcakeData = {
  id: "botcake",
  name: "Botcake",
  description: "Nền tảng chatbot toàn diện với AI Agent, E-commerce và tự động hóa Marketing",
  gradient: "from-purple-600 to-fuchsia-600",
  icon: MessageSquare,
  features: [
    {
      title: "1. Các Kênh Tích Hợp",
      icon: Plug,
      items: [
        "Facebook Messenger & Zalo OA.",
        "Google API & Google Site Search.",
        "WhatsApp & TikTok Business.",
        "Botcake AI: Nền tảng AI riêng của Botcake."
      ]
    },
    {
      title: "2. Dashboard & Khách Hàng",
      icon: Users,
      items: [
        "Thống kê: Đăng ký mới/hủy, theo giới tính nguồn, lượng tin nhắn phản hồi.",
        "Quản lý: Lọc/tìm kiếm theo thẻ, tải danh sách.",
        "Hồ sơ khách đầy đủ: Trạng thái, Email, SĐT, PSID, Custom Fields.",
        "Đồng bộ: Pancake, Facebook Custom Audience."
      ]
    },
    {
      title: "3. Tự Động Hóa (Automation)",
      icon: Workflow,
      items: [
        "Tạo & quản lý luồng tin nhắn đa dạng.",
        "Block JSON API: Gửi/nhận data CRM, Make.com, AI (OpenAI/Gemini/Claude).",
        "Menu linh hoạt (mặc định & cá nhân hóa), FAQ tự động.",
        "Tin nhắn mặc định, Kích hoạt theo từ khóa (khớp nội dung, SĐT, hình ảnh, video...).",
        "Kịch bản chăm sóc cá nhân hóa, Rules tự động theo logic."
      ]
    },
    {
      title: "4. Botcake AI Agent",
      icon: Bot,
      items: [
        "Tạo Agent: Đặt tên, viết Hướng dẫn (Instruction), Knowledge Base (PDF, DOCX).",
        "Thông số kỹ thuật: Temperature, Top P, Penalty, Max Tokens.",
        "Bám đuổi tự động (Auto Follow-up) chờ phản hồi.",
        "Block AI trong luồng xác định, sản phẩm ưu tiên, lưu phản hồi vào Custom Fields.",
        "Tự động tạo đơn POS, Upsell/Cross-sell thông minh."
      ]
    },
    {
      title: "5. E-commerce & Marketing",
      icon: ShoppingCart,
      items: [
        "Tin nhắn Marketing: Gửi hàng loạt, gửi trong 24h, Utility Message ngoài 24h.",
        "Quản lý E-commerce: Cấu hình hiển thị phí ship, quản lý đồng bộ sản phẩm/đơn hàng.",
        "Công cụ khác: QR Code (dẫn vào luồng), Hệ thống Tags nhóm khách hàng, Test bot."
      ]
    }
  ]
};

export const suggestionsData = [
  {
    source: "Học từ Preny AI",
    sourceColor: "text-blue-500",
    items: [
      {
        title: "1. Upload File Excel / Google Sheet",
        description: "Bổ sung định dạng bảng tính giúp shop cập nhật nhanh dữ liệu sản phẩm, giá, FAQ thay vì chỉ PDF/DOCX hiện tại.",
        icon: FileSpreadsheet
      },
      {
        title: "2. Thư viện ảnh sản phẩm tích hợp",
        description: "Bot tự động gửi kèm ảnh sản phẩm trong quá trình tư vấn để tăng tính trực quan. Botcake chưa có module này độc lập.",
        icon: ImageIcon
      },
      {
        title: "3. Typing Simulation",
        description: "Giả lập tốc độ gõ phím với độ trễ 8-12 giây, tạo cảm giác chat tự nhiên với người thật.",
        icon: Keyboard
      },
      {
        title: "4. Remarketing Đa Kênh",
        description: "Mở rộng remarketing qua Zalo ZBS, Email, SMS bên cạnh Messenger để tiếp cận nhiều điểm chạm hơn.",
        icon: Share2
      },
      {
        title: "5. Auto Comment",
        description: "Tự động trả lời bình luận trên bài viết FB, tối ưu phễu chuyển đổi từ comment sang tin nhắn riêng tư.",
        icon: ThumbsUp
      },
      {
        title: "6. Hệ thống Ticket",
        description: "Module hỗ trợ tiếp nhận và xử lý các vấn đề sau bán hàng bài bản hơn việc chỉ theo dõi qua luồng chat.",
        icon: MessageSquare
      },
      {
        title: "7. Audit Log (Lịch sử chỉnh sửa cài đặt)",
        description: "Lưu lịch sử thay đổi để kiểm tra ai đã chỉnh sửa hệ thống khi nào, rất quan trọng khi nhiều nhân viên cùng quản lý.",
        icon: History
      }
    ]
  },
  {
    source: "Học từ Sale AI",
    sourceColor: "text-emerald-500",
    items: [
      {
        title: "8. Báo cáo Chất Lượng Hội Thoại",
        description: "Đo lường Conversation Rating, Drop-off Rate, Staff Transfer Rate để đánh giá và tối ưu kịch bản khách quan dựa trên số liệu.",
        icon: Target
      },
      {
        title: "9. Phân Tích Hành Vi (AI Analysis)",
        description: "AI tự động đánh giá Buying Intent, xác định điểm rơi hành trình và đưa ra gợi ý hành động như tung thẻ retargeting, ưu đãi.",
        icon: Lightbulb
      },
      {
        title: "10. Analytics Sản Phẩm Chi Tiết",
        description: "Theo dõi sản phẩm được gửi, lượt xem chi tiết, thêm giỏ hàng. Tìm ra sản phẩm nào đang bị bỏ qua trong hành trình.",
        icon: ShoppingCart
      },
      {
        title: "11. Lưu Lượng & Chuyển Đổi Website",
        description: "Theo dõi Total Visits, Conversion Rate, Time on Site trên widget chat website, giúp đánh giá hiệu quả tổng thể của bot.",
        icon: Globe
      },
      {
        title: "12. Bổ Sung Kênh Tích Hợp",
        description: "Thêm Shopee, Shopify, Telegram, Zalo Personal, WhatsApp Personal - cực kỳ quan trọng cho bán hàng đại trà tại Việt Nam.",
        icon: Plug
      }
    ]
  }
];

