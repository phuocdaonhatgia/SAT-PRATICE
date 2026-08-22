/**
 * Mock vocabulary bank — mirrors /data/vocabulary.json.
 * Exists so the static site works offline (file://) without CORS issues.
 */
const VOCAB_DATA = [
  {
    "id": "vocab-001",
    "word": "abundant",
    "definition": "existing in large quantities; plentiful",
    "example": "The garden produced an abundant harvest of tomatoes.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-002",
    "word": "benevolent",
    "definition": "well-meaning and kindly",
    "example": "The benevolent donor funded the new library wing.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-003",
    "word": "candid",
    "definition": "truthful and straightforward; frank",
    "example": "Her candid feedback helped the team improve quickly.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-004",
    "word": "diligent",
    "definition": "showing careful and persistent effort",
    "example": "The diligent student reviewed her notes every night.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-005",
    "word": "eloquent",
    "definition": "fluent and persuasive in speaking or writing",
    "example": "His eloquent speech moved the entire audience.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-006",
    "word": "frugal",
    "definition": "careful with money; avoiding waste",
    "example": "Being frugal, she saved a portion of every paycheck.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-007",
    "word": "genuine",
    "definition": "authentic and sincere",
    "example": "His genuine concern for others made him a trusted friend.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-008",
    "word": "humble",
    "definition": "having a modest view of one's own importance",
    "example": "Despite his success, the coach remained humble.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-009",
    "word": "immense",
    "definition": "extremely large",
    "example": "The immense stadium could hold eighty thousand fans.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-010",
    "word": "jubilant",
    "definition": "feeling or expressing great happiness",
    "example": "The jubilant crowd celebrated the team's victory.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-011",
    "word": "keen",
    "definition": "having a sharp or quick intellect or interest",
    "example": "She has a keen interest in astronomy.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-012",
    "word": "lenient",
    "definition": "permissive or tolerant, not strict",
    "example": "The teacher was lenient about late homework this week.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-013",
    "word": "modest",
    "definition": "not overly proud or boastful",
    "example": "He gave a modest account of his achievements.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-014",
    "word": "novel",
    "definition": "new or unusual",
    "example": "The scientist proposed a novel solution to the problem.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-015",
    "word": "optimistic",
    "definition": "hopeful and confident about the future",
    "example": "She remained optimistic despite the setback.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-016",
    "word": "persistent",
    "definition": "continuing firmly despite difficulty",
    "example": "His persistent efforts finally paid off.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-017",
    "word": "quaint",
    "definition": "attractively unusual or old-fashioned",
    "example": "They stayed in a quaint cottage by the sea.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-018",
    "word": "reluctant",
    "definition": "unwilling and hesitant",
    "example": "He was reluctant to share his opinion at first.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-019",
    "word": "sincere",
    "definition": "genuine, free from pretense",
    "example": "She offered a sincere apology for the mistake.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-020",
    "word": "thorough",
    "definition": "complete, with great attention to detail",
    "example": "The inspector gave the building a thorough review.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-021",
    "word": "unanimous",
    "definition": "fully in agreement",
    "example": "The board reached a unanimous decision.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-022",
    "word": "vivid",
    "definition": "producing powerful, clear images in the mind",
    "example": "He gave a vivid description of the sunset.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-023",
    "word": "wary",
    "definition": "feeling caution about possible danger",
    "example": "She was wary of the stranger's offer.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-024",
    "word": "zealous",
    "definition": "showing great energy and enthusiasm for a cause",
    "example": "The zealous volunteers worked through the night.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-025",
    "word": "accurate",
    "definition": "correct in all details; exact",
    "example": "The report contained accurate figures.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-026",
    "word": "brief",
    "definition": "short in duration or extent",
    "example": "He gave a brief summary of the meeting.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-027",
    "word": "cautious",
    "definition": "careful to avoid risk or danger",
    "example": "The cautious driver slowed down in the fog.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-028",
    "word": "dominant",
    "definition": "most powerful or influential",
    "example": "The company remained dominant in the market.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-029",
    "word": "essential",
    "definition": "absolutely necessary",
    "example": "Clean water is essential for survival.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-030",
    "word": "flexible",
    "definition": "able to adapt to change",
    "example": "The schedule remained flexible to accommodate everyone.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-031",
    "word": "gradual",
    "definition": "happening slowly over time",
    "example": "The temperature showed a gradual increase.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-032",
    "word": "hostile",
    "definition": "unfriendly or actively opposed",
    "example": "The negotiations grew hostile toward the end.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-033",
    "word": "inevitable",
    "definition": "certain to happen; unavoidable",
    "example": "Change was inevitable given the new leadership.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-034",
    "word": "joint",
    "definition": "shared or combined",
    "example": "The two companies launched a joint venture.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-035",
    "word": "lucrative",
    "definition": "producing a great deal of profit",
    "example": "She turned her hobby into a lucrative business.",
    "difficulty": "easy"
  },
  {
    "id": "vocab-036",
    "word": "ambiguous",
    "definition": "open to more than one interpretation",
    "example": "The contract's wording was ambiguous.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-037",
    "word": "austere",
    "definition": "severe or strict in manner; plain, without luxury",
    "example": "The monastery had an austere design.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-038",
    "word": "cogent",
    "definition": "clear, logical, and convincing",
    "example": "She made a cogent argument for the new policy.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-039",
    "word": "deference",
    "definition": "respectful submission to another's wishes or judgment",
    "example": "The junior staff showed deference to the director.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-040",
    "word": "eclectic",
    "definition": "deriving ideas or style from a diverse range of sources",
    "example": "Her taste in music is remarkably eclectic.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-041",
    "word": "fickle",
    "definition": "changing frequently, especially in loyalty or affection",
    "example": "Public opinion can be fickle.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-042",
    "word": "gregarious",
    "definition": "fond of company; sociable",
    "example": "He was gregarious and made friends easily.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-043",
    "word": "hypothesis",
    "definition": "a proposed explanation based on limited evidence",
    "example": "The scientist tested her hypothesis in the lab.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-044",
    "word": "impartial",
    "definition": "treating all sides equally; unbiased",
    "example": "The referee remained impartial throughout the match.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-045",
    "word": "juxtapose",
    "definition": "to place two things side by side for comparison",
    "example": "The exhibit juxtaposed old and new architecture.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-046",
    "word": "laconic",
    "definition": "using very few words",
    "example": "His laconic reply left them wanting more detail.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-047",
    "word": "meticulous",
    "definition": "showing great attention to detail",
    "example": "The meticulous editor caught every small error.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-048",
    "word": "nostalgic",
    "definition": "feeling sentimental longing for the past",
    "example": "The song made her feel nostalgic.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-049",
    "word": "obscure",
    "definition": "not well known; unclear",
    "example": "The reference was too obscure for most readers.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-050",
    "word": "pragmatic",
    "definition": "dealing with things sensibly and practically",
    "example": "He took a pragmatic approach to the budget.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-051",
    "word": "quell",
    "definition": "to suppress or put an end to",
    "example": "The manager acted quickly to quell the rumor.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-052",
    "word": "resilient",
    "definition": "able to recover quickly from difficulty",
    "example": "The resilient community rebuilt after the storm.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-053",
    "word": "skeptical",
    "definition": "having doubts; not easily convinced",
    "example": "She remained skeptical of the bold claim.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-054",
    "word": "tenacious",
    "definition": "holding firmly to a course of action or belief",
    "example": "His tenacious pursuit of the goal impressed everyone.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-055",
    "word": "unprecedented",
    "definition": "never done or known before",
    "example": "The company saw unprecedented growth this year.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-056",
    "word": "volatile",
    "definition": "likely to change rapidly and unpredictably",
    "example": "The stock market was volatile all week.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-057",
    "word": "wistful",
    "definition": "showing a feeling of vague or regretful longing",
    "example": "He gave a wistful smile at the old photo.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-058",
    "word": "arbitrary",
    "definition": "based on random choice rather than reason",
    "example": "The rule seemed arbitrary and unfair.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-059",
    "word": "candor",
    "definition": "the quality of being open and honest",
    "example": "She spoke with surprising candor about her mistakes.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-060",
    "word": "discerning",
    "definition": "having or showing good judgment",
    "example": "A discerning reader will notice the subtle theme.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-061",
    "word": "exemplify",
    "definition": "to be a typical example of",
    "example": "Her work ethic exemplifies dedication.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-062",
    "word": "frivolous",
    "definition": "not having any serious purpose or value; silly",
    "example": "The judge dismissed the frivolous lawsuit.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-063",
    "word": "hinder",
    "definition": "to create difficulty for; delay progress",
    "example": "Heavy traffic hindered their arrival.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-064",
    "word": "incessant",
    "definition": "never stopping",
    "example": "The incessant rain flooded the streets.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-065",
    "word": "jargon",
    "definition": "specialized language used by a particular group",
    "example": "The manual was full of technical jargon.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-066",
    "word": "lament",
    "definition": "to express sorrow, regret, or grief",
    "example": "The coach lamented the missed opportunity.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-067",
    "word": "mundane",
    "definition": "lacking excitement; ordinary",
    "example": "He was tired of his mundane daily routine.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-068",
    "word": "notorious",
    "definition": "famous or well known for a negative reason",
    "example": "The city was notorious for its traffic.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-069",
    "word": "objective",
    "definition": "not influenced by personal feelings; unbiased",
    "example": "Journalists strive to remain objective.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-070",
    "word": "plausible",
    "definition": "seeming reasonable or probable",
    "example": "Her explanation seemed entirely plausible.",
    "difficulty": "medium"
  },
  {
    "id": "vocab-071",
    "word": "acquiesce",
    "definition": "to accept something reluctantly but without protest",
    "example": "He acquiesced to their demands to avoid conflict.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-072",
    "word": "capricious",
    "definition": "given to sudden, unaccountable changes of mood or behavior",
    "example": "The capricious weather ruined their picnic plans.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-073",
    "word": "deleterious",
    "definition": "causing harm or damage",
    "example": "Excessive stress can have deleterious effects on health.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-074",
    "word": "ephemeral",
    "definition": "lasting for a very short time",
    "example": "Fame in that industry is often ephemeral.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-075",
    "word": "fastidious",
    "definition": "very attentive to detail; hard to please",
    "example": "The fastidious chef inspected every plate before it left the kitchen.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-076",
    "word": "garrulous",
    "definition": "excessively talkative",
    "example": "The garrulous neighbor kept them on the porch for hours.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-077",
    "word": "iconoclast",
    "definition": "a person who attacks or criticizes established beliefs",
    "example": "The artist was seen as an iconoclast in her field.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-078",
    "word": "inscrutable",
    "definition": "impossible to understand or interpret",
    "example": "His inscrutable expression gave nothing away.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-079",
    "word": "mitigate",
    "definition": "to make less severe, serious, or painful",
    "example": "The new policy aims to mitigate flood damage.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-080",
    "word": "obsequious",
    "definition": "excessively eager to please or obey someone",
    "example": "The obsequious assistant agreed with everything the boss said.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-081",
    "word": "perfunctory",
    "definition": "carried out with minimal effort or reflection",
    "example": "He gave a perfunctory nod and walked away.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-082",
    "word": "pragmatism",
    "definition": "an approach that judges ideas by their practical consequences",
    "example": "Her pragmatism helped the team make quick decisions.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-083",
    "word": "quixotic",
    "definition": "extremely idealistic and unrealistic",
    "example": "His quixotic plan to sail around the world alone worried his family.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-084",
    "word": "recalcitrant",
    "definition": "having an obstinately uncooperative attitude",
    "example": "The recalcitrant committee refused to consider new evidence.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-085",
    "word": "sagacious",
    "definition": "having or showing keen judgment; wise",
    "example": "The sagacious advisor foresaw the market shift.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-086",
    "word": "taciturn",
    "definition": "reserved or uncommunicative in speech",
    "example": "The taciturn witness answered only in single words.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-087",
    "word": "ubiquitous",
    "definition": "present, appearing, or found everywhere",
    "example": "Smartphones have become ubiquitous in modern life.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-088",
    "word": "vindicate",
    "definition": "to clear someone from blame or suspicion",
    "example": "New evidence eventually vindicated the accused.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-089",
    "word": "zenith",
    "definition": "the highest point reached; the peak",
    "example": "Her career reached its zenith in the late 1990s.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-090",
    "word": "abate",
    "definition": "to become less intense or widespread",
    "example": "The storm began to abate by midnight.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-091",
    "word": "cacophony",
    "definition": "a harsh, discordant mixture of sounds",
    "example": "The cacophony of car horns filled the street.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-092",
    "word": "disparate",
    "definition": "essentially different in kind; not able to be compared",
    "example": "The committee combined disparate viewpoints into one plan.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-093",
    "word": "equanimity",
    "definition": "mental calmness and composure in a difficult situation",
    "example": "She faced the crisis with remarkable equanimity.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-094",
    "word": "florid",
    "definition": "excessively ornate or elaborate",
    "example": "The florid prose overwhelmed the simple story.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-095",
    "word": "gratuitous",
    "definition": "unnecessary or unjustified",
    "example": "The film included gratuitous violence that added nothing to the plot.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-096",
    "word": "hegemony",
    "definition": "dominance of one group or state over others",
    "example": "Historians studied the empire's hegemony over the region.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-097",
    "word": "immutable",
    "definition": "unchanging over time; unable to be changed",
    "example": "The scientist searched for immutable laws of nature.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-098",
    "word": "jaded",
    "definition": "tired, bored, or lacking enthusiasm, typically from overexposure",
    "example": "Years in the industry left him jaded.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-099",
    "word": "labyrinthine",
    "definition": "extremely complex and confusing, like a maze",
    "example": "The labyrinthine bureaucracy delayed the approval for months.",
    "difficulty": "hard"
  },
  {
    "id": "vocab-100",
    "word": "myriad",
    "definition": "a very large, countless number of things",
    "example": "The festival offered a myriad of activities for visitors.",
    "difficulty": "hard"
  }
];
