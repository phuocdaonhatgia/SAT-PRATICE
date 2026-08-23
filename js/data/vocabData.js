/**
 * Vocabulary bank — mirrors /data/vocabulary.json.
 * Exists so the static site works offline (file://) without CORS issues.
 * Each word includes a Vietnamese meaning ("vietnamese") and a topic group ("group")
 * for the flip-card view and group filtering in the SAT Words browser.
 */
const VOCAB_DATA = [
  {
    "id": "vocab-001",
    "word": "abundant",
    "definition": "existing in large quantities; plentiful",
    "example": "The garden produced an abundant harvest of tomatoes.",
    "difficulty": "easy",
    "vietnamese": "dồi dào, phong phú",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-002",
    "word": "benevolent",
    "definition": "well-meaning and kindly",
    "example": "The benevolent donor funded the new library wing.",
    "difficulty": "easy",
    "vietnamese": "nhân từ, tốt bụng",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-003",
    "word": "candid",
    "definition": "truthful and straightforward; frank",
    "example": "Her candid feedback helped the team improve quickly.",
    "difficulty": "easy",
    "vietnamese": "thẳng thắn, bộc trực",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-004",
    "word": "diligent",
    "definition": "showing careful and persistent effort",
    "example": "The diligent student reviewed her notes every night.",
    "difficulty": "easy",
    "vietnamese": "chăm chỉ, cần cù",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-005",
    "word": "eloquent",
    "definition": "fluent and persuasive in speaking or writing",
    "example": "His eloquent speech moved the entire audience.",
    "difficulty": "easy",
    "vietnamese": "hùng biện, lưu loát",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-006",
    "word": "frugal",
    "definition": "careful with money; avoiding waste",
    "example": "Being frugal, she saved a portion of every paycheck.",
    "difficulty": "easy",
    "vietnamese": "tiết kiệm, dè sẻn",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-007",
    "word": "genuine",
    "definition": "authentic and sincere",
    "example": "His genuine concern for others made him a trusted friend.",
    "difficulty": "easy",
    "vietnamese": "chân thật, đích thực",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-008",
    "word": "humble",
    "definition": "having a modest view of one's own importance",
    "example": "Despite his success, the coach remained humble.",
    "difficulty": "easy",
    "vietnamese": "khiêm tốn",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-009",
    "word": "immense",
    "definition": "extremely large",
    "example": "The immense stadium could hold eighty thousand fans.",
    "difficulty": "easy",
    "vietnamese": "to lớn, mênh mông",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-010",
    "word": "jubilant",
    "definition": "feeling or expressing great happiness",
    "example": "The jubilant crowd celebrated the team's victory.",
    "difficulty": "easy",
    "vietnamese": "hân hoan, vui sướng",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-011",
    "word": "keen",
    "definition": "having a sharp or quick intellect or interest",
    "example": "She has a keen interest in astronomy.",
    "difficulty": "easy",
    "vietnamese": "sắc sảo, nhạy bén, hăng hái",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-012",
    "word": "lenient",
    "definition": "permissive or tolerant, not strict",
    "example": "The teacher was lenient about late homework this week.",
    "difficulty": "easy",
    "vietnamese": "khoan dung, dễ dãi",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-013",
    "word": "modest",
    "definition": "not overly proud or boastful",
    "example": "He gave a modest account of his achievements.",
    "difficulty": "easy",
    "vietnamese": "khiêm tốn, giản dị",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-014",
    "word": "novel",
    "definition": "new or unusual",
    "example": "The scientist proposed a novel solution to the problem.",
    "difficulty": "easy",
    "vietnamese": "mới lạ, độc đáo",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-015",
    "word": "optimistic",
    "definition": "hopeful and confident about the future",
    "example": "She remained optimistic despite the setback.",
    "difficulty": "easy",
    "vietnamese": "lạc quan",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-016",
    "word": "persistent",
    "definition": "continuing firmly despite difficulty",
    "example": "His persistent efforts finally paid off.",
    "difficulty": "easy",
    "vietnamese": "kiên trì, bền bỉ",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-017",
    "word": "quaint",
    "definition": "attractively unusual or old-fashioned",
    "example": "They stayed in a quaint cottage by the sea.",
    "difficulty": "easy",
    "vietnamese": "cổ kính, kỳ lạ dễ thương",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-018",
    "word": "reluctant",
    "definition": "unwilling and hesitant",
    "example": "He was reluctant to share his opinion at first.",
    "difficulty": "easy",
    "vietnamese": "miễn cưỡng, không sẵn lòng",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-019",
    "word": "sincere",
    "definition": "genuine, free from pretense",
    "example": "She offered a sincere apology for the mistake.",
    "difficulty": "easy",
    "vietnamese": "chân thành",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-020",
    "word": "thorough",
    "definition": "complete, with great attention to detail",
    "example": "The inspector gave the building a thorough review.",
    "difficulty": "easy",
    "vietnamese": "kỹ lưỡng, tỉ mỉ",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-021",
    "word": "unanimous",
    "definition": "fully in agreement",
    "example": "The board reached a unanimous decision.",
    "difficulty": "easy",
    "vietnamese": "nhất trí, đồng lòng hoàn toàn",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-022",
    "word": "vivid",
    "definition": "producing powerful, clear images in the mind",
    "example": "He gave a vivid description of the sunset.",
    "difficulty": "easy",
    "vietnamese": "sống động, rõ nét",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-023",
    "word": "wary",
    "definition": "feeling caution about possible danger",
    "example": "She was wary of the stranger's offer.",
    "difficulty": "easy",
    "vietnamese": "cảnh giác, dè chừng",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-024",
    "word": "zealous",
    "definition": "showing great energy and enthusiasm for a cause",
    "example": "The zealous volunteers worked through the night.",
    "difficulty": "easy",
    "vietnamese": "hăng hái, nhiệt thành",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-025",
    "word": "accurate",
    "definition": "correct in all details; exact",
    "example": "The report contained accurate figures.",
    "difficulty": "easy",
    "vietnamese": "chính xác",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-026",
    "word": "brief",
    "definition": "short in duration or extent",
    "example": "He gave a brief summary of the meeting.",
    "difficulty": "easy",
    "vietnamese": "ngắn gọn",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-027",
    "word": "cautious",
    "definition": "careful to avoid risk or danger",
    "example": "The cautious driver slowed down in the fog.",
    "difficulty": "easy",
    "vietnamese": "thận trọng, cẩn thận",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-028",
    "word": "dominant",
    "definition": "most powerful or influential",
    "example": "The company remained dominant in the market.",
    "difficulty": "easy",
    "vietnamese": "chiếm ưu thế, thống trị",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-029",
    "word": "essential",
    "definition": "absolutely necessary",
    "example": "Clean water is essential for survival.",
    "difficulty": "easy",
    "vietnamese": "thiết yếu, cần thiết",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-030",
    "word": "flexible",
    "definition": "able to adapt to change",
    "example": "The schedule remained flexible to accommodate everyone.",
    "difficulty": "easy",
    "vietnamese": "linh hoạt",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-031",
    "word": "gradual",
    "definition": "happening slowly over time",
    "example": "The temperature showed a gradual increase.",
    "difficulty": "easy",
    "vietnamese": "dần dần, từ từ",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-032",
    "word": "hostile",
    "definition": "unfriendly or actively opposed",
    "example": "The negotiations grew hostile toward the end.",
    "difficulty": "easy",
    "vietnamese": "thù địch, đối nghịch",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-033",
    "word": "inevitable",
    "definition": "certain to happen; unavoidable",
    "example": "Change was inevitable given the new leadership.",
    "difficulty": "easy",
    "vietnamese": "tất yếu, không thể tránh khỏi",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-034",
    "word": "joint",
    "definition": "shared or combined",
    "example": "The two companies launched a joint venture.",
    "difficulty": "easy",
    "vietnamese": "chung, liên kết",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-035",
    "word": "lucrative",
    "definition": "producing a great deal of profit",
    "example": "She turned her hobby into a lucrative business.",
    "difficulty": "easy",
    "vietnamese": "sinh lợi, có lãi cao",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-036",
    "word": "ambiguous",
    "definition": "open to more than one interpretation",
    "example": "The contract's wording was ambiguous.",
    "difficulty": "medium",
    "vietnamese": "mơ hồ, không rõ ràng",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-037",
    "word": "austere",
    "definition": "severe or strict in manner; plain, without luxury",
    "example": "The monastery had an austere design.",
    "difficulty": "medium",
    "vietnamese": "khắc khổ, giản dị nghiêm ngặt",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-038",
    "word": "cogent",
    "definition": "clear, logical, and convincing",
    "example": "She made a cogent argument for the new policy.",
    "difficulty": "medium",
    "vietnamese": "thuyết phục, lập luận rõ ràng",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-039",
    "word": "deference",
    "definition": "respectful submission to another's wishes or judgment",
    "example": "The junior staff showed deference to the director.",
    "difficulty": "medium",
    "vietnamese": "sự tôn trọng, phục tùng",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-040",
    "word": "eclectic",
    "definition": "deriving ideas or style from a diverse range of sources",
    "example": "Her taste in music is remarkably eclectic.",
    "difficulty": "medium",
    "vietnamese": "đa dạng, chiết trung",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-041",
    "word": "fickle",
    "definition": "changing frequently, especially in loyalty or affection",
    "example": "Public opinion can be fickle.",
    "difficulty": "medium",
    "vietnamese": "hay thay đổi, thất thường",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-042",
    "word": "gregarious",
    "definition": "fond of company; sociable",
    "example": "He was gregarious and made friends easily.",
    "difficulty": "medium",
    "vietnamese": "hòa đồng, thích giao du",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-043",
    "word": "hypothesis",
    "definition": "a proposed explanation based on limited evidence",
    "example": "The scientist tested her hypothesis in the lab.",
    "difficulty": "medium",
    "vietnamese": "giả thuyết",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-044",
    "word": "impartial",
    "definition": "treating all sides equally; unbiased",
    "example": "The referee remained impartial throughout the match.",
    "difficulty": "medium",
    "vietnamese": "công bằng, khách quan",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-045",
    "word": "juxtapose",
    "definition": "to place two things side by side for comparison",
    "example": "The exhibit juxtaposed old and new architecture.",
    "difficulty": "medium",
    "vietnamese": "đặt cạnh nhau để so sánh",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-046",
    "word": "laconic",
    "definition": "using very few words",
    "example": "His laconic reply left them wanting more detail.",
    "difficulty": "medium",
    "vietnamese": "nói ít, kiệm lời",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-047",
    "word": "meticulous",
    "definition": "showing great attention to detail",
    "example": "The meticulous editor caught every small error.",
    "difficulty": "medium",
    "vietnamese": "tỉ mỉ, cẩn thận",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-048",
    "word": "nostalgic",
    "definition": "feeling sentimental longing for the past",
    "example": "The song made her feel nostalgic.",
    "difficulty": "medium",
    "vietnamese": "hoài niệm, nhớ nhung",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-049",
    "word": "obscure",
    "definition": "not well known; unclear",
    "example": "The reference was too obscure for most readers.",
    "difficulty": "medium",
    "vietnamese": "mơ hồ, khó hiểu, ít người biết",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-050",
    "word": "pragmatic",
    "definition": "dealing with things sensibly and practically",
    "example": "He took a pragmatic approach to the budget.",
    "difficulty": "medium",
    "vietnamese": "thực dụng, thực tế",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-051",
    "word": "quell",
    "definition": "to suppress or put an end to",
    "example": "The manager acted quickly to quell the rumor.",
    "difficulty": "medium",
    "vietnamese": "dập tắt, trấn áp",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-052",
    "word": "resilient",
    "definition": "able to recover quickly from difficulty",
    "example": "The resilient community rebuilt after the storm.",
    "difficulty": "medium",
    "vietnamese": "kiên cường, phục hồi nhanh",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-053",
    "word": "skeptical",
    "definition": "having doubts; not easily convinced",
    "example": "She remained skeptical of the bold claim.",
    "difficulty": "medium",
    "vietnamese": "hoài nghi",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-054",
    "word": "tenacious",
    "definition": "holding firmly to a course of action or belief",
    "example": "His tenacious pursuit of the goal impressed everyone.",
    "difficulty": "medium",
    "vietnamese": "ngoan cường, kiên định",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-055",
    "word": "unprecedented",
    "definition": "never done or known before",
    "example": "The company saw unprecedented growth this year.",
    "difficulty": "medium",
    "vietnamese": "chưa từng có",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-056",
    "word": "volatile",
    "definition": "likely to change rapidly and unpredictably",
    "example": "The stock market was volatile all week.",
    "difficulty": "medium",
    "vietnamese": "biến động, dễ thay đổi",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-057",
    "word": "wistful",
    "definition": "showing a feeling of vague or regretful longing",
    "example": "He gave a wistful smile at the old photo.",
    "difficulty": "medium",
    "vietnamese": "man mác buồn, tiếc nuối",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-058",
    "word": "arbitrary",
    "definition": "based on random choice rather than reason",
    "example": "The rule seemed arbitrary and unfair.",
    "difficulty": "medium",
    "vietnamese": "tùy tiện, độc đoán",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-059",
    "word": "candor",
    "definition": "the quality of being open and honest",
    "example": "She spoke with surprising candor about her mistakes.",
    "difficulty": "medium",
    "vietnamese": "sự thẳng thắn, chân thật",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-060",
    "word": "discerning",
    "definition": "having or showing good judgment",
    "example": "A discerning reader will notice the subtle theme.",
    "difficulty": "medium",
    "vietnamese": "tinh tường, sáng suốt",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-061",
    "word": "exemplify",
    "definition": "to be a typical example of",
    "example": "Her work ethic exemplifies dedication.",
    "difficulty": "medium",
    "vietnamese": "minh họa, là ví dụ điển hình",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-062",
    "word": "frivolous",
    "definition": "not having any serious purpose or value; silly",
    "example": "The judge dismissed the frivolous lawsuit.",
    "difficulty": "medium",
    "vietnamese": "phù phiếm, không nghiêm túc",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-063",
    "word": "hinder",
    "definition": "to create difficulty for; delay progress",
    "example": "Heavy traffic hindered their arrival.",
    "difficulty": "medium",
    "vietnamese": "cản trở",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-064",
    "word": "incessant",
    "definition": "never stopping",
    "example": "The incessant rain flooded the streets.",
    "difficulty": "medium",
    "vietnamese": "không ngừng, liên miên",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-065",
    "word": "jargon",
    "definition": "specialized language used by a particular group",
    "example": "The manual was full of technical jargon.",
    "difficulty": "medium",
    "vietnamese": "biệt ngữ, thuật ngữ chuyên ngành",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-066",
    "word": "lament",
    "definition": "to express sorrow, regret, or grief",
    "example": "The coach lamented the missed opportunity.",
    "difficulty": "medium",
    "vietnamese": "than vãn, than tiếc",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-067",
    "word": "mundane",
    "definition": "lacking excitement; ordinary",
    "example": "He was tired of his mundane daily routine.",
    "difficulty": "medium",
    "vietnamese": "tầm thường, nhàm chán",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-068",
    "word": "notorious",
    "definition": "famous or well known for a negative reason",
    "example": "The city was notorious for its traffic.",
    "difficulty": "medium",
    "vietnamese": "khét tiếng (theo nghĩa xấu)",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-069",
    "word": "objective",
    "definition": "not influenced by personal feelings; unbiased",
    "example": "Journalists strive to remain objective.",
    "difficulty": "medium",
    "vietnamese": "khách quan",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-070",
    "word": "plausible",
    "definition": "seeming reasonable or probable",
    "example": "Her explanation seemed entirely plausible.",
    "difficulty": "medium",
    "vietnamese": "hợp lý, có vẻ đúng",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-071",
    "word": "acquiesce",
    "definition": "to accept something reluctantly but without protest",
    "example": "He acquiesced to their demands to avoid conflict.",
    "difficulty": "hard",
    "vietnamese": "miễn cưỡng chấp nhận",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-072",
    "word": "capricious",
    "definition": "given to sudden, unaccountable changes of mood or behavior",
    "example": "The capricious weather ruined their picnic plans.",
    "difficulty": "hard",
    "vietnamese": "thất thường, khó đoán",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-073",
    "word": "deleterious",
    "definition": "causing harm or damage",
    "example": "Excessive stress can have deleterious effects on health.",
    "difficulty": "hard",
    "vietnamese": "gây hại, có hại",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-074",
    "word": "ephemeral",
    "definition": "lasting for a very short time",
    "example": "Fame in that industry is often ephemeral.",
    "difficulty": "hard",
    "vietnamese": "phù du, ngắn ngủi",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-075",
    "word": "fastidious",
    "definition": "very attentive to detail; hard to please",
    "example": "The fastidious chef inspected every plate before it left the kitchen.",
    "difficulty": "hard",
    "vietnamese": "cầu toàn, khó tính",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-076",
    "word": "garrulous",
    "definition": "excessively talkative",
    "example": "The garrulous neighbor kept them on the porch for hours.",
    "difficulty": "hard",
    "vietnamese": "lắm lời, ba hoa",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-077",
    "word": "iconoclast",
    "definition": "a person who attacks or criticizes established beliefs",
    "example": "The artist was seen as an iconoclast in her field.",
    "difficulty": "hard",
    "vietnamese": "người phá bỏ quan niệm cũ",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-078",
    "word": "inscrutable",
    "definition": "impossible to understand or interpret",
    "example": "His inscrutable expression gave nothing away.",
    "difficulty": "hard",
    "vietnamese": "khó hiểu, bí ẩn",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-079",
    "word": "mitigate",
    "definition": "to make less severe, serious, or painful",
    "example": "The new policy aims to mitigate flood damage.",
    "difficulty": "hard",
    "vietnamese": "làm giảm nhẹ",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-080",
    "word": "obsequious",
    "definition": "excessively eager to please or obey someone",
    "example": "The obsequious assistant agreed with everything the boss said.",
    "difficulty": "hard",
    "vietnamese": "xu nịnh, bợ đỡ",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-081",
    "word": "perfunctory",
    "definition": "carried out with minimal effort or reflection",
    "example": "He gave a perfunctory nod and walked away.",
    "difficulty": "hard",
    "vietnamese": "qua loa, hời hợt",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-082",
    "word": "pragmatism",
    "definition": "an approach that judges ideas by their practical consequences",
    "example": "Her pragmatism helped the team make quick decisions.",
    "difficulty": "hard",
    "vietnamese": "chủ nghĩa thực dụng",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-083",
    "word": "quixotic",
    "definition": "extremely idealistic and unrealistic",
    "example": "His quixotic plan to sail around the world alone worried his family.",
    "difficulty": "hard",
    "vietnamese": "viển vông, phi thực tế",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-084",
    "word": "recalcitrant",
    "definition": "having an obstinately uncooperative attitude",
    "example": "The recalcitrant committee refused to consider new evidence.",
    "difficulty": "hard",
    "vietnamese": "ngoan cố, bất trị",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-085",
    "word": "sagacious",
    "definition": "having or showing keen judgment; wise",
    "example": "The sagacious advisor foresaw the market shift.",
    "difficulty": "hard",
    "vietnamese": "khôn ngoan, sáng suốt",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-086",
    "word": "taciturn",
    "definition": "reserved or uncommunicative in speech",
    "example": "The taciturn witness answered only in single words.",
    "difficulty": "hard",
    "vietnamese": "ít nói, kiệm lời",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-087",
    "word": "ubiquitous",
    "definition": "present, appearing, or found everywhere",
    "example": "Smartphones have become ubiquitous in modern life.",
    "difficulty": "hard",
    "vietnamese": "có mặt khắp nơi",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-088",
    "word": "vindicate",
    "definition": "to clear someone from blame or suspicion",
    "example": "New evidence eventually vindicated the accused.",
    "difficulty": "hard",
    "vietnamese": "minh oan, chứng minh trong sạch",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-089",
    "word": "zenith",
    "definition": "the highest point reached; the peak",
    "example": "Her career reached its zenith in the late 1990s.",
    "difficulty": "hard",
    "vietnamese": "đỉnh cao",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-090",
    "word": "abate",
    "definition": "to become less intense or widespread",
    "example": "The storm began to abate by midnight.",
    "difficulty": "hard",
    "vietnamese": "giảm bớt, suy yếu",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-091",
    "word": "cacophony",
    "definition": "a harsh, discordant mixture of sounds",
    "example": "The cacophony of car horns filled the street.",
    "difficulty": "hard",
    "vietnamese": "âm thanh hỗn tạp, chói tai",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-092",
    "word": "disparate",
    "definition": "essentially different in kind; not able to be compared",
    "example": "The committee combined disparate viewpoints into one plan.",
    "difficulty": "hard",
    "vietnamese": "khác biệt hoàn toàn, không thể so sánh",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-093",
    "word": "equanimity",
    "definition": "mental calmness and composure in a difficult situation",
    "example": "She faced the crisis with remarkable equanimity.",
    "difficulty": "hard",
    "vietnamese": "sự điềm tĩnh, bình thản",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-094",
    "word": "florid",
    "definition": "excessively ornate or elaborate",
    "example": "The florid prose overwhelmed the simple story.",
    "difficulty": "hard",
    "vietnamese": "hoa mỹ, cầu kỳ",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-095",
    "word": "gratuitous",
    "definition": "unnecessary or unjustified",
    "example": "The film included gratuitous violence that added nothing to the plot.",
    "difficulty": "hard",
    "vietnamese": "không cần thiết, vô cớ",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-096",
    "word": "hegemony",
    "definition": "dominance of one group or state over others",
    "example": "Historians studied the empire's hegemony over the region.",
    "difficulty": "hard",
    "vietnamese": "quyền bá chủ, sự thống trị",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-097",
    "word": "immutable",
    "definition": "unchanging over time; unable to be changed",
    "example": "The scientist searched for immutable laws of nature.",
    "difficulty": "hard",
    "vietnamese": "bất biến, không thể thay đổi",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-098",
    "word": "jaded",
    "definition": "tired, bored, or lacking enthusiasm, typically from overexposure",
    "example": "Years in the industry left him jaded.",
    "difficulty": "hard",
    "vietnamese": "chán chường, mệt mỏi vì quá tải",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-099",
    "word": "labyrinthine",
    "definition": "extremely complex and confusing, like a maze",
    "example": "The labyrinthine bureaucracy delayed the approval for months.",
    "difficulty": "hard",
    "vietnamese": "phức tạp như mê cung",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-100",
    "word": "myriad",
    "definition": "a very large, countless number of things",
    "example": "The festival offered a myriad of activities for visitors.",
    "difficulty": "hard",
    "vietnamese": "vô số",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-101",
    "word": "aesthetic",
    "definition": "concerned with beauty or the appreciation of beauty",
    "example": "The museum's aesthetic appeal drew large crowds.",
    "difficulty": "easy",
    "vietnamese": "liên quan đến thẩm mỹ, cái đẹp",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-102",
    "word": "apathy",
    "definition": "lack of interest, enthusiasm, or concern",
    "example": "Voter apathy led to a record-low turnout.",
    "difficulty": "easy",
    "vietnamese": "sự thờ ơ, lãnh đạm",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-103",
    "word": "benign",
    "definition": "gentle and kind; not harmful",
    "example": "The tumor turned out to be benign.",
    "difficulty": "easy",
    "vietnamese": "hiền lành, vô hại",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-104",
    "word": "coherent",
    "definition": "logical and consistent; easy to understand",
    "example": "She gave a coherent explanation of the plan.",
    "difficulty": "easy",
    "vietnamese": "mạch lạc, rõ ràng",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-105",
    "word": "credible",
    "definition": "able to be believed; trustworthy",
    "example": "The witness gave a credible account of events.",
    "difficulty": "easy",
    "vietnamese": "đáng tin cậy",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-106",
    "word": "feasible",
    "definition": "possible to do easily or conveniently",
    "example": "The engineers judged the design feasible.",
    "difficulty": "easy",
    "vietnamese": "khả thi",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-107",
    "word": "innate",
    "definition": "inborn; natural rather than learned",
    "example": "She has an innate talent for music.",
    "difficulty": "easy",
    "vietnamese": "bẩm sinh, vốn có",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-108",
    "word": "integrity",
    "definition": "the quality of being honest and having strong moral principles",
    "example": "The judge was known for her integrity.",
    "difficulty": "easy",
    "vietnamese": "tính chính trực, trung thực",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-109",
    "word": "prudent",
    "definition": "acting with care and thought for the future",
    "example": "It was prudent to save part of the bonus.",
    "difficulty": "easy",
    "vietnamese": "thận trọng, khôn ngoan",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-110",
    "word": "tangible",
    "definition": "able to be touched or clearly perceived; real",
    "example": "The project produced tangible results.",
    "difficulty": "easy",
    "vietnamese": "cụ thể, hữu hình",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-111",
    "word": "ambivalent",
    "definition": "having mixed or contradictory feelings",
    "example": "He felt ambivalent about changing careers.",
    "difficulty": "medium",
    "vietnamese": "mâu thuẫn, lưỡng lự về cảm xúc",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-112",
    "word": "anomaly",
    "definition": "something that deviates from what is standard or expected",
    "example": "The data point was a statistical anomaly.",
    "difficulty": "medium",
    "vietnamese": "sự bất thường, dị thường",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-113",
    "word": "complacent",
    "definition": "showing smug self-satisfaction; unaware of danger",
    "example": "Success made the team complacent.",
    "difficulty": "medium",
    "vietnamese": "tự mãn, dễ dãi với bản thân",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-114",
    "word": "cynical",
    "definition": "believing that people are motivated purely by self-interest",
    "example": "His cynical remarks annoyed the volunteers.",
    "difficulty": "medium",
    "vietnamese": "hoài nghi, yếm thế",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-115",
    "word": "empirical",
    "definition": "based on observation or experiment rather than theory",
    "example": "The study relied on empirical evidence.",
    "difficulty": "medium",
    "vietnamese": "dựa trên thực nghiệm",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-116",
    "word": "enigma",
    "definition": "something puzzling or hard to understand",
    "example": "Her sudden resignation remained an enigma.",
    "difficulty": "medium",
    "vietnamese": "điều bí ẩn, khó hiểu",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-117",
    "word": "indifferent",
    "definition": "having no particular interest or concern",
    "example": "He seemed indifferent to the outcome.",
    "difficulty": "medium",
    "vietnamese": "thờ ơ, không quan tâm",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-118",
    "word": "ostentatious",
    "definition": "designed to impress or attract notice; showy",
    "example": "The ostentatious mansion had gold gates.",
    "difficulty": "medium",
    "vietnamese": "phô trương, khoe khoang",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-119",
    "word": "pervasive",
    "definition": "spreading widely throughout an area or group",
    "example": "A pervasive smell of smoke filled the hall.",
    "difficulty": "medium",
    "vietnamese": "lan rộng khắp nơi",
    "group": "Mức độ, Số lượng & Thời gian"
  },
  {
    "id": "vocab-120",
    "word": "subtle",
    "definition": "so delicate as to be difficult to notice",
    "example": "There was a subtle change in her tone.",
    "difficulty": "medium",
    "vietnamese": "tinh tế, khó nhận ra",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-121",
    "word": "idiosyncratic",
    "definition": "peculiar or individual to a particular person",
    "example": "His idiosyncratic style set him apart.",
    "difficulty": "hard",
    "vietnamese": "đặc trưng riêng, kỳ quặc cá nhân",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-122",
    "word": "magnanimous",
    "definition": "generous or forgiving, especially toward a rival",
    "example": "She was magnanimous in victory.",
    "difficulty": "hard",
    "vietnamese": "cao thượng, khoan dung",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-123",
    "word": "obstinate",
    "definition": "stubbornly refusing to change one's opinion",
    "example": "The obstinate mule wouldn't move.",
    "difficulty": "hard",
    "vietnamese": "cứng đầu, bướng bỉnh",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-124",
    "word": "precarious",
    "definition": "not securely held; dangerously uncertain",
    "example": "The company was in a precarious financial position.",
    "difficulty": "hard",
    "vietnamese": "bấp bênh, nguy hiểm",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-125",
    "word": "sardonic",
    "definition": "grimly mocking or cynical",
    "example": "He gave a sardonic smile at the news.",
    "difficulty": "hard",
    "vietnamese": "châm biếm, mỉa mai",
    "group": "Giao tiếp & Ngôn từ"
  },
  {
    "id": "vocab-126",
    "word": "spurious",
    "definition": "not being what it purports to be; false",
    "example": "The report was based on spurious claims.",
    "difficulty": "hard",
    "vietnamese": "giả mạo, không có căn cứ",
    "group": "Tư duy, Đánh giá & Nhận thức"
  },
  {
    "id": "vocab-127",
    "word": "stoic",
    "definition": "enduring hardship without complaint",
    "example": "She remained stoic throughout the surgery.",
    "difficulty": "hard",
    "vietnamese": "điềm tĩnh, chịu đựng không than vãn",
    "group": "Cảm xúc & Thái độ"
  },
  {
    "id": "vocab-128",
    "word": "vindictive",
    "definition": "having a strong desire for revenge",
    "example": "His vindictive comments surprised his old friend.",
    "difficulty": "hard",
    "vietnamese": "hay thù hận, muốn trả thù",
    "group": "Tính cách & Phẩm chất"
  },
  {
    "id": "vocab-129",
    "word": "wane",
    "definition": "to decrease gradually in size, strength, or importance",
    "example": "Public interest in the case began to wane.",
    "difficulty": "hard",
    "vietnamese": "suy giảm, tàn lụi dần",
    "group": "Thay đổi, Xung đột & Hành vi"
  },
  {
    "id": "vocab-130",
    "word": "hackneyed",
    "definition": "lacking originality; overused",
    "example": "The speech was full of hackneyed phrases.",
    "difficulty": "hard",
    "vietnamese": "sáo rỗng, nhàm chán vì lặp lại",
    "group": "Giao tiếp & Ngôn từ"
  }
];
