export const REPORT_CONTENT = `MÔ TẢ TÍNH NĂNG CHI TIẾT
Preny AI  ·  Sale AI  ·  Botcake
Tổng hợp đầy đủ tính năng từng nền tảng theo tài liệu cung cấp
Không đánh giá chủ quan · Không xếp hạng · Chỉ mô tả tính năng thực tế

Mục Lục
Phần 1 — Preny AI: Kênh tích hợp, Huấn luyện AI, Cài đặt nâng cao, Remarketing, Tính năng khác
Phần 2 — Sale AI: Kênh tích hợp, Huấn luyện, Dashboard & Báo cáo chuyên sâu, Tính năng chính
Phần 3 — Botcake: Kênh tích hợp, Dashboard, Quản lý khách hàng, Automation, AI Agent, E-commerce, Marketing
Phần 4 — Gợi ý bổ sung tính năng cho Botcake (dựa trên Preny AI & Sale AI)
 
Phần 1: Preny AI

Preny AI
Nền tảng chatbot tập trung vào Facebook, Zalo OA, TikTok Business, Lazada & Instagram

1. Các Kênh Tích Hợp
•	Facebook: Tìm page và tích hợp bot. Quy tắc: 1 page = 1 bot, nhưng 1 bot có thể kết nối nhiều page.
•	Instagram: Hỗ trợ tích hợp chatbot trên nền tảng Instagram.
•	Zalo OA (Official Account): Hỗ trợ Zalo Business/Official Account. Tương tự Facebook: 1 OA = 1 bot.
•	TikTok Business: Tích hợp chatbot trên tài khoản TikTok Business.
•	Lazada: Hỗ trợ tích hợp trên sàn thương mại điện tử Lazada.
•	Website: Tích hợp trực tiếp vào trang web doanh nghiệp.
Lý do giới hạn 1 page/1 bot: Dữ liệu mỗi bot riêng biệt, tránh chồng chéo thông tin.
2. Quy Trình Huấn Luyện Preny AI Chat
2.1 Upload dữ liệu huấn luyện
•	File Google Sheet / Excel: Dữ liệu huấn luyện được upload dưới dạng file Excel chứa thông tin sản phẩm/dịch vụ (knowledge base).
•	Kịch bản chốt sales: Cũng được nhập liệu bằng Google Sheet.
•	Thư viện hình ảnh: Cho phép upload ảnh sản phẩm lên để bot gửi kèm trong tư vấn trực quan (ví dụ: xe hơi).
•	Cơ chế học: Sau khi upload, bot học dữ liệu và sẵn sàng trả lời. Ví dụ: nhập câu hỏi "Một buổi tập bao nhiêu tiếng?" → bot nhận ra và trả lời đúng dù khách hỏi theo nhiều cách khác nhau.
•	Số lượng kịch bản/dữ liệu: Không giới hạn — càng nhiều, bot càng thông minh.
2.2 Cấu hình tổng quan doanh nghiệp
•	Tên doanh nghiệp & username: Thiết lập thông tin cơ bản của doanh nghiệp.
•	Ngôn ngữ: Mặc định tiếng Việt. Hỗ trợ đa ngôn ngữ với chức năng auto-detect tiếng Anh/Ngoại ngữ từ tin nhắn khách. Lưu ý: đa ngôn ngữ đôi khi hơi lệch dữ liệu gốc, khuyến nghị dùng chế độ "chính xác" để đảm bảo độ tin cậy cao.
3. Cài Đặt Nâng Cao & Tối Ưu Trải Nghiệm
3.1 Tốc độ trả lời (Typing Simulation)
•	Delay typing: Bot xử lý siêu nhanh nhưng được thêm độ trễ typing 8–12 giây (có thể chỉnh nhanh/chậm) để giống người thật, tăng trải nghiệm tự nhiên.
3.2 Luồng tư vấn (Consultation Flows)
•	Luồng đơn giản: Cung cấp thông tin → Chuyển sale. Phù hợp ngành khoa học, nhà hàng.
•	Luồng chốt sale: Hướng dẫn mua hàng tự động. Phù hợp thời trang, mỹ phẩm, thương mại điện tử nhiều sản phẩm. Giảm tải cho chủ shop.
3.3 Temperature (Độ sáng tạo AI)
•	Thấp (khuyến nghị): Trả lời chính xác 100% dữ liệu đã dạy, phù hợp câu hỏi quen thuộc.
•	Cao (>1, không khuyến nghị): Sáng tạo, kéo dữ liệu web/AI ngoài (như ChatGPT) — có thể lệch hoặc không chính xác.
3.4 Cài đặt khác
•	Bot không trả lời khi người dùng nhập: Có thể tắt bot với các trường: Số điện thoại, Địa chỉ.
•	Cài đặt cách xưng hô: Tùy chỉnh cách bot xưng (ví dụ: mình/bạn, em/anh/chị).
•	Lên lịch và thời gian phản hồi: Thiết lập thời gian nhắn tự động (phút) và khung giờ hoạt động.
•	Mô hình AI lớn (GPT/Claude): Bật để bot sáng tạo câu trả lời dựa trên dữ liệu + kiến thức web. Tắt nếu cần giá chính xác (tránh lệch thông tin khuyến mãi).
•	Im lặng với nền tảng khác: Tắt bot khi có tin từ các nền tảng đối thủ để tránh xung đột dữ liệu.
4. Tính Năng Remarketing
•	Zalo ZBS: Gửi tin nhắn remarketing qua Zalo ZBS.
•	Facebook Messenger (FMM): Gửi tin nhắn hàng loạt qua Facebook API. Chi phí: 200–300đ/tin nhắn (tương đương Facebook Ads). Nạp tiền qua ví Facebook Ads Manager.
•	Email: Hỗ trợ remarketing qua Email.
•	SMS: Hỗ trợ remarketing qua SMS.
5. Các Tính Năng Khác
•	Bình luận tự động theo bài (Auto Comment): Tính năng tự động trả lời bình luận trên bài viết Facebook.
•	Thống kê tin nhắn: Thống kê số lượng tin nhắn.
•	Ticket hỗ trợ khách hàng: Cung cấp hệ thống ticket hỗ trợ khách hàng sau bán hàng.
•	Kịch bản tư vấn (Lũy kế chốt sale): Xây dựng kịch bản như funnel: Dẫn dắt khách theo tình huống (hỏi → trả lời → hướng dẫn chọn dịch vụ → chốt). Tùy chỉnh theo ngành: bất động sản (xin số), sức khỏe (tư vấn triệu chứng).
•	Đặc thù ngành có giá trị cao: Chatbot thiết kế linh hoạt cho bất động sản, phòng khám, tư vấn: bot xin số điện thoại/email để nhân viên gọi lại, sau đó im lặng tránh làm phiền.
•	Lịch sử chỉnh sửa (Audit log): Lưu lịch sử chỉnh sửa cài đặt.
•	Quản lý tags: Hệ thống quản lý thẻ phân loại khách hàng.
•	Phân quyền nhân viên: Chủ shop có thể phân quyền cho nhân viên (nhân viên trực, chăm sóc khách hàng) truy cập tin nhắn cụ thể.
 
Phần 2: Sale AI

Sale AI
Nền tảng AI tập trung vào website, phân tích hành vi & báo cáo chuyên sâu

1. Các Kênh Tích Hợp
•	Telegram: Hỗ trợ kết nối bot trên Telegram.
•	Facebook Page: Tích hợp bot với Facebook Page.
•	Shopee: Hỗ trợ kết nối với sàn Shopee.
•	Shopify: Hỗ trợ tích hợp với nền tảng Shopify.
•	Zalo OA: Hỗ trợ Zalo Official Account.
•	Zalo Personal: Hỗ trợ tích hợp Zalo cá nhân (Zalo Personal).
•	WhatsApp Personal: Hỗ trợ tích hợp WhatsApp cá nhân.
2. Huấn Luyện AI & Dữ Liệu
•	Định dạng hỗ trợ: PDF, DOCX, CSV, URL website và văn bản thuần (plain text).
•	Danh mục dữ liệu huấn luyện
–	FAQ (Câu hỏi thường gặp)
–	Policy (Chính sách)
–	Service (Dịch vụ)
–	Company Info (Thông tin doanh nghiệp)
–	Conversation Sample (Mẫu hội thoại)
–	Sales Script (Kịch bản bán hàng)
–	General (Tổng hợp)
–	Other (Khác)
3. Các Tính Năng Chính
•	Upload và quản lý sản phẩm: Tính năng upload sản phẩm và theo dõi đơn hàng.
•	Quản lý tag và hệ thống phân quyền: Phân loại khách hàng bằng tag và kiểm soát quyền truy cập nhân viên.
•	Đồng bộ CRM: Tự động đồng bộ dữ liệu sang CRM.
4. Dashboard & Báo Cáo Chuyên Sâu
4.1 Chỉ số kinh doanh tổng hợp
•	Revenue (Doanh thu): Theo dõi doanh thu theo kỳ, so sánh với kỳ trước.
•	Successful Orders: Số đơn hàng thành công theo kỳ.
•	New Messages: Số tin nhắn mới theo kỳ.
•	Conversations: Tổng số cuộc hội thoại.
4.2 Chỉ số chất lượng hội thoại AI
•	Conversation Rating: Đánh giá từng phiên hội thoại. Mục tiêu: ≥ 4.0/5. Nếu thấp → cần xem lại luồng tư vấn.
•	Average Exchanges: Số lượt tin nhắn để giải quyết vấn đề. Mục tiêu: ≤ 8 tin/phiên. Nếu cao → luồng tư vấn vòng vo, cần tối ưu kịch bản.
•	Drop-off Rate: Tỉ lệ khách rời bỏ giữa chừng. Mục tiêu: < 30%. Nếu cao → luồng tư vấn gây khó chịu.
•	Staff Transfer Rate: Tỉ lệ % cuộc hội thoại chuyển sang nhân viên thật. Mục tiêu: < 15%. Nếu cao → AI chưa đủ năng lực xử lý.
•	Messages / User: Số tin nhắn trung bình mỗi người dùng.
•	Total Ratings: Tổng số đánh giá từ khách hàng.
•	Staff Transfer: Tổng số phiên được chuyển cho nhân viên.
4.3 Chỉ số lưu lượng truy cập
•	Total Visits: Tổng lượt truy cập (tính cả số lần/khách hàng).
•	Visitors: Tổng khách truy cập: phân loại anonymous (chưa nhận diện) và identified (đã nhận diện).
•	Conversion Rate: Tỉ lệ chuyển đổi anonymous → khách hàng có danh tính.
•	Time on Site: Tổng thời gian trên site và trung bình mỗi khách.
•	Total Page Views: Tổng lượt xem trang và trung bình mỗi khách.
•	Customers with Phone: Số khách hàng đã để lại số điện thoại (leads).
•	Device Distribution: Phân phối thiết bị: Desktop / Mobile.
4.4 Chỉ số tương tác sản phẩm
•	Products Sent (Display): Số sản phẩm được bot gửi ra trong hội thoại.
•	View Details: Số lần khách xem chi tiết sản phẩm.
•	Add to Cart: Số lần thêm vào giỏ hàng.
•	Interaction Trend: Biểu đồ theo dõi xu hướng tương tác sản phẩm theo thời gian.
•	Top 5 sản phẩm được thêm vào giỏ nhiều nhất: Ranking sản phẩm theo hành vi giỏ hàng.
4.5 AI Analysis (Phân tích hành vi bằng AI)
•	Overview: Tổng quan hành vi khách hàng trong kỳ (ví dụ: số sự kiện, mức độ tương tác sản phẩm).
•	Buying Intent: Đánh giá mức độ ý định mua hàng hiện tại của nhóm khách.
•	Recommendations: Gợi ý hành động cụ thể: tăng banner, retargeting, ưu đãi... dựa trên dữ liệu thực tế.
•	Knowledge Gaps: Xác định khoảng trống kiến thức của AI so với câu hỏi khách.
 
Phần 3: Botcake

Botcake
Nền tảng chatbot toàn diện với AI Agent, E-commerce và tự động hóa Marketing

1. Các Kênh Tích Hợp
•	Facebook Messenger: Tích hợp đầy đủ với Facebook Fanpage.
•	Zalo OA: Hỗ trợ Zalo Official Account.
•	Google API: Tích hợp các dịch vụ Google.
•	WhatsApp: Hỗ trợ WhatsApp.
•	TikTok Business: Tích hợp TikTok Business.
•	Google Site Search: Tích hợp tìm kiếm trên website Google Sites.
•	Botcake AI: Nền tảng AI riêng của Botcake.
2. Dashboard & Thống Kê
•	Thống kê người đăng ký: Theo 3 chỉ số: Lượt đăng ký mới / Lượt hủy đăng ký / Lượt đăng ký thực. Tùy chỉnh khoảng thời gian: 1 ngày / 7 ngày / tháng...
•	Thống kê theo giới tính và nguồn: Phân tích cơ cấu khách hàng.
•	Tổng số khách hàng đã đăng ký: Và số lượng tính năng Chatbot đã tạo.
•	Biểu đồ tin nhắn và bình luận: Thống kê lượng tin nhắn và số bình luận đã trả lời từ Botcake theo thời gian.
•	Thống kê bình luận & đánh giá khách hàng: Bao gồm thống kê thẻ hội thoại.
3. Quản Lý Khách Hàng
•	Lọc và tìm kiếm: Tìm kiếm đối tượng cụ thể theo tên, lọc theo tag hoặc kịch bản chăm sóc.
•	Tải danh sách: Tải về danh sách khách hàng sau khi đã lọc theo nhu cầu.
•	Đồng bộ dữ liệu: Đồng bộ dữ liệu khách hàng và tag từ Pancake.
•	Thông tin khách hàng chi tiết: Bao gồm: trạng thái đăng ký, Email, danh sách số điện thoại, PSID, các tag và kịch bản đã gắn, Custom Fields.
•	Custom Fields: Lưu trữ data khách hàng tùy chỉnh trên Botcake.
•	Facebook Custom Audience: Đẩy data khách hàng vào tệp đối tượng tùy chỉnh trên Facebook Ads Manager để chạy lại quảng cáo.
4. Tự Động Hóa (Automation)
4.1 Luồng tin nhắn
•	Tạo & quản lý luồng: Tạo, quản lý, chỉnh sửa, sao chép, xóa luồng tin nhắn. Hỗ trợ tổ chức bằng thư mục.
•	Block JSON API: Cho phép bot gọi API bên ngoài ngay trong flow: gửi data lên CRM/ERP/Google Sheet/Zapier/Make.com, lấy dữ liệu từ API về (trạng thái đơn hàng, tồn kho, tài khoản...), tích hợp AI (OpenAI, Gemini, Claude), lưu kết quả vào Custom Field. Hỗ trợ GET / POST / DELETE.
4.2 Menu
•	Menu mặc định: Hiển thị khi người dùng nhấn biểu tượng ba gạch ngang trong cửa sổ chat. Tối đa 20 mục menu.
•	Menu tùy chỉnh (cấp độ người dùng): Cá nhân hóa menu cho từng đối tượng/kịch bản cụ thể. Tự động chuyển đổi menu trong luồng bằng Action Block.
4.3 Câu hỏi thường gặp
•	FAQ tự động: Khi khách nhắn tin lần đầu, Messenger hiển thị các câu hỏi đã cài đặt. Khách click → bot tự động gửi câu trả lời theo mẫu.
4.4 Tin nhắn mở đầu
•	Welcome Message: Khách mới lần đầu nhắn tin và nhấn "Bắt đầu" sẽ nhận nội dung tin nhắn mở đầu. Có thể thiết lập: giới thiệu fanpage, khuyến mãi, sản phẩm hot, giờ mở cửa...
4.5 Tin nhắn mặc định
•	Default Message: Gửi cho khách quay lại nhắn tin. Cài đặt được chu kỳ gửi lại (ví dụ: 1 lần/24h). Hữu ích cho khách tương tác vào ban đêm hoặc ngoài giờ nhân viên trực.
4.6 Từ khóa
•	Kích hoạt theo từ khóa: Tự động trả lời khi khách nhắn nội dung chứa từ khóa. Áp dụng được cho cả khách hàng lẫn nhân viên chat.
•	Các loại điều kiện từ khóa
–	Nội dung có chứa (một hoặc nhiều từ khóa kết hợp)
–	Nội dung có chứa và không chứa
–	Nội dung là (khớp chính xác)
–	Nội dung có số điện thoại
–	Nội dung là nhãn dán (sticker/emoji)
–	Nội dung là hình ảnh
–	Nội dung là video
–	Nội dung có sản phẩm POS
–	Nội dung bắt đầu với
4.7 Kịch bản chăm sóc
•	Chăm sóc theo lộ trình cá nhân hóa: Mỗi khách nhận tin nhắn riêng biệt theo khoảng thời gian kể từ khi họ tương tác. Tránh cảm giác spam, tăng tỉ lệ chốt đơn.
•	Gắn kịch bản: Có 2 cách: gắn vào thẻ tag hoặc tạo quy luật tự động.
•	Cài điều kiện gửi: Hỗ trợ gửi trong 24h hoặc ngoài 24h (tin thông báo / tin marketing).
4.8 Quy luật (Rules)
•	Tự động hóa theo logic: Tạo nhóm khách hàng thỏa mãn điều kiện và gắn hành động tự động. Ví dụ: khách mới nhắn tin → tự động đăng ký theo dõi kịch bản chăm sóc.
5. Botcake AI Agent
5.1 Thiết lập AI Agent
•	Tạo Agent: Đặt tên, mô tả, viết hướng dẫn (Instruction) cho AI theo nhu cầu và mong muốn của shop.
•	Hai chế độ thiết lập
–	Thiết lập chi tiết: Dành cho người đã quen viết Instruction cho AI.
–	Thiết lập nhanh: Dành cho người mới, theo từng bước hướng dẫn.
•	Thay đổi model AI: Tùy chọn model AI phù hợp với nhu cầu.
•	Sản phẩm: Cấu hình tự động tạo đơn, gửi ảnh sản phẩm.
•	Kiến thức (Knowledge Base): Thêm tài liệu hướng dẫn cho AI Agent (PDF, DOCX). Hỗ trợ upload hình ảnh sản phẩm để AI phản hồi chính xác hơn.
5.2 Thông số kỹ thuật AI
•	Temperature: Điều chỉnh mức độ sáng tạo. Thấp → chính xác, nhất quán. Cao → sáng tạo, đa dạng hơn.
•	Top P: Phân phối xác suất lựa chọn từ. Cao → đa dạng. Thấp → chắc chắn, ít sáng tạo.
•	Presence Penalty: Giảm khả năng AI nhắc lại chủ đề đã có trong prompt.
•	Frequency Penalty: Giảm khả năng AI dùng lặp từ quá nhiều.
•	Max Tokens: Giới hạn độ dài phản hồi.
5.3 Logic dừng / tiếp tục AI
•	Điều kiện dừng AI: Tùy chỉnh điều kiện để AI tạm dừng tư vấn (ví dụ: khi khách phàn nàn → nhân viên tiếp nhận).
•	Tiếp tục AI: Có 2 cách: khi khách nhắn tin tiếp hoặc sau một khoảng thời gian nhất định.
5.4 Bám đuổi tự động
•	Auto Follow-up: AI tự động gửi thêm tin nhắn khi không nhận được phản hồi từ khách. Cài được: số phút chờ (tối đa 60 phút) và số tin nhắn (tối đa 5 tin).
5.5 AI trong Luồng tin nhắn
•	Block AI trong flow: Chọn Agent cụ thể hoạt động trong từng luồng. Thiết lập hướng dẫn bổ sung chỉ áp dụng cho luồng đó.
•	Sản phẩm ưu tiên tư vấn: Đặt tối đa 3 sản phẩm để AI ưu tiên tư vấn trong luồng.
•	Lưu phản hồi AI vào Custom Fields: Lưu câu trả lời của AI để dùng cho các bước sau.
•	Hành động khi thành công/thất bại: Cấu hình bước tiếp theo khi AI trả lời thành công hoặc gặp lỗi.
•	Phân biệt theo bài quảng cáo / Ads ID: AI nhận diện khách đến từ bài quảng cáo/bài viết cụ thể và tư vấn sản phẩm tương ứng.
5.6 AI tự động tạo đơn hàng
•	Tự động lên đơn POS: AI tự động tạo đơn khi khách để lại đủ thông tin.
•	Tự động Upsell/Cross-sell: Theo cấu hình POS. Hỗ trợ kiểm tra "báo xấu" khách hàng: nếu khách từng bị đánh dấu xấu (bùng hàng, xúc phạm...) AI sẽ không tạo đơn tự động.
6. Gửi Tin Nhắn & Marketing
•	Gửi tin nhắn hàng loạt: Gửi đến khách hàng cũ đã từng nhắn tin đến page.
•	Gửi trong 24h: Loại: Thông điệp quảng cáo. Gửi cho khách có tương tác trong 24h.
•	Tin nhắn thông báo (Utility Message): Gửi ngoài 24h. Cần tạo nội dung và được Facebook duyệt.
•	Tin nhắn Marketing: Gửi ngoài 24h theo chiến dịch. Cần tạo chiến dịch và đối tượng trước. Có thể tạo đối tượng từ file số điện thoại hoặc email.
•	Cài đặt nâng cao khi gửi: Chọn thời điểm gửi, chọn số lượng người nhận theo giới hạn.
7. E-commerce
•	Cấu hình chung: Cấu hình các nút hiển thị khi khách xem sản phẩm trong giỏ, phí vận chuyển, tìm kiếm sản phẩm theo thẻ, kích thước hình ảnh.
•	Quản lý sản phẩm: Tạo sản phẩm thủ công trên Botcake hoặc đồng bộ từ POS. Khách có thể thêm/xóa sản phẩm vào giỏ hàng ngay trên Messenger.
•	Quản lý đơn hàng: Xem chi tiết, lọc theo tên/SĐT, chỉnh trạng thái đơn. Thông tin bao gồm: khách hàng, thanh toán, sản phẩm, ghi chú.
8. Công Cụ Khác
•	QR Code: Tạo mã QR để dẫn khách vào một luồng tin nhắn cụ thể. Thống kê được hiệu quả từng luồng qua QR.
•	Hệ thống Tags: Gắn thẻ phân loại khách hàng, lọc và thống kê theo tag.
•	Test bot: Kiểm tra hoạt động của bot trước khi triển khai.
•	Kết nối tài khoản quảng cáo Facebook: Tích hợp Facebook Ads Manager để chạy tin nhắn Marketing và tạo Custom Audience.
 
Phần 4: Gợi Ý Bổ Sung Tính Năng Cho Botcake
Dựa trên các tính năng riêng có của Preny AI và Sale AI chưa xuất hiện trên Botcake, dưới đây là các đề xuất bổ sung. Mọi gợi ý đều xuất phát từ dữ liệu thực tế trong tài liệu cung cấp.

Học từ Preny AI
1. Upload dữ liệu huấn luyện dạng Excel / Google Sheet
Preny AI cho phép upload file Excel/Google Sheet trực tiếp làm dữ liệu huấn luyện bot. Botcake hiện chỉ hỗ trợ PDF và DOCX. Bổ sung định dạng bảng tính giúp doanh nghiệp cập nhật nhanh dữ liệu sản phẩm, giá, FAQ mà không cần chuyển đổi định dạng.
2. Thư viện ảnh sản phẩm tích hợp vào tư vấn
Preny AI có thư viện ảnh riêng, bot tự động gửi kèm ảnh sản phẩm trong quá trình tư vấn. Botcake chưa có module này dưới dạng thư viện ảnh độc lập liên kết trực tiếp với phản hồi bot.
3. Typing Simulation (Mô phỏng tốc độ gõ người thật)
Preny AI thêm độ trễ 8–12 giây khi bot trả lời để mô phỏng người thật nhập liệu. Tính năng này giúp tăng trải nghiệm tự nhiên, giảm cảm giác đang chat với máy. Botcake hiện chưa có cài đặt delay typing.
4. Remarketing đa kênh: Zalo ZBS, Email, SMS
Preny AI tích hợp remarketing trên Zalo ZBS, Email và SMS ngoài Facebook Messenger. Botcake hiện chỉ có Facebook Messenger. Mở rộng kênh remarketing giúp tiếp cận lại khách hàng trên nhiều điểm chạm hơn, đặc biệt quan trọng với thị trường Việt Nam.
5. Tính năng bình luận tự động (Auto Comment)
Preny AI cho phép bot tự động trả lời bình luận trên bài viết Facebook. Đây là điểm chạm quan trọng trong phễu chuyển đổi từ bình luận sang tin nhắn riêng tư. Botcake chưa có tính năng này.
6. Hệ thống Ticket hỗ trợ khách hàng
Preny AI cung cấp module ticket hỗ trợ sau bán hàng. Botcake chưa có module này. Bổ sung giúp shop theo dõi và xử lý các vấn đề sau bán hàng một cách có hệ thống thay vì chỉ qua luồng chat.
7. Lịch sử chỉnh sửa cài đặt (Audit Log)
Preny AI lưu lịch sử các thay đổi cài đặt. Botcake chưa có tính năng này. Audit log giúp quản lý kiểm tra ai đã chỉnh sửa gì, khi nào — quan trọng khi có nhiều nhân viên cùng quản lý hệ thống.

Học từ Sale AI
8. Báo cáo chất lượng hội thoại AI
Sale AI đo lường Conversation Rating, Drop-off Rate, Staff Transfer Rate, Average Exchanges — cho phép đánh giá khách quan hiệu quả tư vấn của AI. Botcake hiện chỉ thống kê số lượng tin nhắn cơ bản. Bổ sung các chỉ số này giúp doanh nghiệp tối ưu kịch bản dựa trên dữ liệu thực.
9. AI Analysis — Phân tích hành vi khách hàng tự động
Sale AI tích hợp AI phân tích hành vi: đánh giá buying intent, xác định điểm rơi trong hành trình, đưa ra gợi ý hành động cụ thể (retargeting, ưu đãi...). Botcake chưa có lớp phân tích này. Bổ sung giúp doanh nghiệp nhận insight tự động thay vì tự đọc và diễn giải số liệu.
10. Theo dõi tương tác sản phẩm chi tiết
Sale AI theo dõi: sản phẩm được gửi trong hội thoại, lượt xem chi tiết, thêm vào giỏ hàng, top sản phẩm theo hành vi giỏ hàng. Botcake có E-commerce nhưng chưa có lớp analytics sản phẩm theo hành vi hội thoại AI. Bổ sung giúp xác định sản phẩm nào đang bị bỏ qua trong hành trình mua.
11. Chỉ số lưu lượng và chuyển đổi website
Sale AI cung cấp: Total Visits, Visitors (anonymous vs identified), Conversion Rate (anonymous → khách hàng), Time on Site, Total Page Views, Device Distribution. Botcake chưa có nhóm chỉ số này. Đây là dữ liệu quan trọng để đánh giá hiệu quả tổng thể của bot trên website.
12. Hỗ trợ thêm kênh: Shopee, Shopify, Telegram, Zalo Personal, WhatsApp Personal
Sale AI hỗ trợ Shopee, Shopify, Telegram, Zalo Personal, WhatsApp Personal — là các kênh chưa có trên Botcake. Với thị trường Việt Nam, Shopee và Zalo Personal đặc biệt quan trọng cho hoạt động bán hàng.`;
