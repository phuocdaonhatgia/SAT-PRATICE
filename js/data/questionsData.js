/**
 * questionsData.js — mock SAT question bank (spec mục 15 QuestionProvider).
 * Includes the original hand-written question set plus a cleaned subset of
 * OCR-imported questions (badly garbled OCR entries were filtered out —
 * see /tmp removal script; original import had 1882 OCR questions, ~1822 of
 * those were unusable garbled text and have been removed).
 */
const QUESTIONS_DATA = [
  {
    "id": "rw-mainidea-01",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Main Idea",
    "difficulty": "easy",
    "passage": "In the early 2000s, urban planners largely dismissed rooftop gardens as a niche hobby. Today, cities from Toronto to Singapore mandate green roofs on new commercial buildings, citing benefits ranging from reduced energy costs to improved air quality.",
    "question": "Which choice best states the main idea of the text?",
    "choices": [
      {
        "id": "A",
        "text": "Rooftop gardens have shifted from a fringe interest to a mainstream urban policy."
      },
      {
        "id": "B",
        "text": "Toronto and Singapore compete over green building regulations."
      },
      {
        "id": "C",
        "text": "Green roofs are primarily valued for their aesthetic appeal."
      },
      {
        "id": "D",
        "text": "Energy costs have declined sharply due to rooftop gardens alone."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The text traces a shift from being \"dismissed... as a niche hobby\" to being \"mandated,\" which directly supports choice A's framing of a shift from fringe to mainstream.",
    "hint1": "What change does the passage describe from the first sentence to the second?",
    "hint2": "Look at the verbs \"dismissed\" versus \"mandate\" — what does that shift suggest?",
    "hint3": "The correct choice should capture the before-and-after contrast, not just one detail from the passage.",
    "tags": [
      "reading-writing",
      "Information and Ideas",
      "Main Idea"
    ]
  },
  {
    "id": "rw-mainidea-02",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Main Idea",
    "difficulty": "medium",
    "passage": "Coral reefs cover less than one percent of the ocean floor, yet they support roughly a quarter of all marine species. Marine biologists often describe reefs as 'underwater rainforests' — not for their scale, but for the density of life they sustain relative to their size.",
    "question": "Which choice best states the main idea of the text?",
    "choices": [
      {
        "id": "A",
        "text": "Coral reefs are physically larger than rainforests."
      },
      {
        "id": "B",
        "text": "Coral reefs support a disproportionately large share of marine biodiversity relative to their size."
      },
      {
        "id": "C",
        "text": "Marine biologists disagree about how to classify coral reefs."
      },
      {
        "id": "D",
        "text": "Rainforests and coral reefs face identical environmental threats."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The passage emphasizes the contrast between the reefs' small physical footprint (\"less than one percent\") and outsized biological importance (\"roughly a quarter of all marine species\"), which choice B captures.",
    "hint1": "What two numbers does the passage compare?",
    "hint2": "Why does the passage call reefs \"underwater rainforests\" if they aren't large in size?",
    "hint3": "The best answer should reflect the size-versus-impact contrast, not a literal size comparison.",
    "tags": [
      "reading-writing",
      "Information and Ideas",
      "Main Idea"
    ]
  },
  {
    "id": "rw-mainidea-03",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Main Idea",
    "difficulty": "hard",
    "passage": "Economists have long debated whether minimum wage increases reduce employment. Recent studies using more granular county-level data have complicated the traditional model, finding that modest increases often coincide with stable or even rising employment in low-wage sectors, though effects vary sharply by local labor market conditions.",
    "question": "Which choice best states the main idea of the text?",
    "choices": [
      {
        "id": "A",
        "text": "Minimum wage increases always raise employment in the long run."
      },
      {
        "id": "B",
        "text": "Newer, more detailed research has challenged the assumption that minimum wage increases straightforwardly reduce employment, though results depend on local context."
      },
      {
        "id": "C",
        "text": "County-level data is inherently less reliable than national data."
      },
      {
        "id": "D",
        "text": "Economists have reached a consensus that minimum wage has no effect on employment."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The passage says newer data has \"complicated the traditional model\" and that effects \"vary sharply by local labor market conditions\" — this nuance matches B, while A, C, and D overstate or misstate the findings.",
    "hint1": "Does the passage say the debate is settled, or still ongoing?",
    "hint2": "Notice the qualifying phrase at the end of the passage — what does it tell you about certainty?",
    "hint3": "Avoid choices with absolute words like \"always\" or \"no effect\" when the passage itself hedges.",
    "tags": [
      "reading-writing",
      "Information and Ideas",
      "Main Idea"
    ]
  },
  {
    "id": "rw-inference-01",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Inference",
    "difficulty": "easy",
    "passage": "Maria checked the trailhead sign twice before starting her hike, then packed an extra liter of water despite the mild forecast.",
    "question": "Which choice most logically completes the inference about Maria implied by the text?",
    "choices": [
      {
        "id": "A",
        "text": "Maria is inexperienced with hiking and unaware of basic safety."
      },
      {
        "id": "B",
        "text": "Maria tends to prepare cautiously even when conditions seem favorable."
      },
      {
        "id": "C",
        "text": "Maria distrusts the accuracy of weather forecasts entirely."
      },
      {
        "id": "D",
        "text": "Maria plans to hike a significantly longer trail than posted."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Checking the sign twice and packing extra water \"despite the mild forecast\" both suggest a cautious, prepared disposition, supporting B.",
    "hint1": "What two actions does Maria take before her hike?",
    "hint2": "Why would someone over-prepare for conditions described as \"mild\"?",
    "hint3": "The inference should describe a personality trait suggested by her behavior, not a fact stated directly.",
    "tags": [
      "reading-writing",
      "Information and Ideas",
      "Inference"
    ]
  },
  {
    "id": "rw-inference-02",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Inference",
    "difficulty": "medium",
    "passage": "The novelist rewrote the opening chapter eleven times, yet in interviews she insisted the final version had simply 'arrived,' as though no effort had shaped it.",
    "question": "Which inference is best supported by the text?",
    "choices": [
      {
        "id": "A",
        "text": "The novelist is being fully transparent about her writing process in interviews."
      },
      {
        "id": "B",
        "text": "The novelist prefers her readers not know how laborious her revision process actually was."
      },
      {
        "id": "C",
        "text": "The novelist believes revision is unnecessary for good writing."
      },
      {
        "id": "D",
        "text": "The novelist rewrote the chapter because her publisher demanded it."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The contrast between eleven rewrites and her claim that the chapter simply \"arrived\" suggests she downplays the effort involved — best matching B.",
    "hint1": "Compare what she did (eleven rewrites) with what she says (it \"arrived\").",
    "hint2": "Why might a writer want the finished product to seem effortless?",
    "hint3": "Look for the choice that explains the gap between her actions and her public statement.",
    "tags": [
      "reading-writing",
      "Information and Ideas",
      "Inference"
    ]
  },
  {
    "id": "rw-inference-03",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Inference",
    "difficulty": "hard",
    "passage": "The committee approved the budget unanimously, though three members submitted written objections to specific line items just one week earlier.",
    "question": "Which inference is best supported by the text?",
    "choices": [
      {
        "id": "A",
        "text": "The committee members changed their minds about the budget entirely."
      },
      {
        "id": "B",
        "text": "Unanimous approval can coexist with unresolved individual disagreements about details."
      },
      {
        "id": "C",
        "text": "The written objections were later found to be factually incorrect."
      },
      {
        "id": "D",
        "text": "The budget was approved despite lacking majority support."
      }
    ],
    "correctAnswer": "B",
    "explanation": "A unanimous vote following specific objections suggests members set aside disagreements on details to support the overall outcome — matching B; the passage never says objections were withdrawn or wrong.",
    "hint1": "Does a unanimous vote necessarily mean everyone agreed on every detail?",
    "hint2": "What's the difference between agreeing with the whole budget and agreeing with every line item?",
    "hint3": "Choose the option that doesn't add facts the passage never states.",
    "tags": [
      "reading-writing",
      "Information and Ideas",
      "Inference"
    ]
  },
  {
    "id": "rw-inference-04",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Inference",
    "difficulty": "medium",
    "passage": "After losing the contract, the firm quietly hired three new sales directors within a month, though its public statements continued to describe the loss as 'a minor setback.'",
    "question": "Which inference is best supported by the text?",
    "choices": [
      {
        "id": "A",
        "text": "The firm's public statements accurately reflect its internal assessment of the loss."
      },
      {
        "id": "B",
        "text": "The firm privately views the loss as more serious than its public statements suggest."
      },
      {
        "id": "C",
        "text": "The firm plans to exit the sales industry entirely."
      },
      {
        "id": "D",
        "text": "The new sales directors were hired before the contract was lost."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Quietly hiring three new sales directors right after the loss suggests the firm sees the setback as significant, even though its public statements downplay it — supporting B.",
    "hint1": "Compare the firm's actions (hiring) to its words (\"minor setback\").",
    "hint2": "Would a firm typically hire three directors over something truly minor?",
    "hint3": "Look for the choice that explains the gap between behavior and public statement.",
    "tags": [
      "reading-writing",
      "Information and Ideas",
      "Inference"
    ]
  },
  {
    "id": "rw-inference-05",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Inference",
    "difficulty": "hard",
    "passage": "The city council debated the new zoning proposal for six hours, adjourned without a vote, and scheduled the next session for a date after the mayor's term ends.",
    "question": "Which inference is best supported by the text?",
    "choices": [
      {
        "id": "A",
        "text": "The council intends to delay the decision until leadership changes."
      },
      {
        "id": "B",
        "text": "The zoning proposal was rejected outright."
      },
      {
        "id": "C",
        "text": "The mayor personally requested the delay."
      },
      {
        "id": "D",
        "text": "The council reached unanimous agreement but forgot to vote."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Scheduling the next session for after the mayor's term ends, following a long debate with no vote, suggests a deliberate delay tied to a leadership change — matching A; the passage gives no evidence for C or D, and B contradicts \"adjourned without a vote.\"",
    "hint1": "What is notable about the timing of the next scheduled session?",
    "hint2": "Does \"adjourned without a vote\" mean rejected, or simply undecided?",
    "hint3": "Choose the inference that best explains the specific timing detail, without adding facts not stated.",
    "tags": [
      "reading-writing",
      "Information and Ideas",
      "Inference"
    ]
  },
  {
    "id": "rw-evidence-01",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Evidence",
    "difficulty": "easy",
    "passage": "Claim: Public libraries increase civic engagement in their communities. Supporting note: A 2019 survey found that residents who visited a public library at least monthly were 22 percent more likely to vote in local elections than non-visitors.",
    "question": "Which choice best supports the claim that public libraries increase civic engagement?",
    "choices": [
      {
        "id": "A",
        "text": "Libraries have expanded their operating hours in the past decade."
      },
      {
        "id": "B",
        "text": "Frequent library visitors voted in local elections at a notably higher rate than non-visitors."
      },
      {
        "id": "C",
        "text": "Library budgets are funded primarily through local taxes."
      },
      {
        "id": "D",
        "text": "Public libraries offer free wifi to visitors."
      }
    ],
    "correctAnswer": "B",
    "explanation": "The claim is about civic engagement, and B directly ties library visits to a civic engagement outcome (voting), making it the strongest evidence.",
    "hint1": "What specific behavior counts as \"civic engagement\" here?",
    "hint2": "Which answer choice actually mentions voting?",
    "hint3": "Evidence should measure the exact outcome named in the claim, not a related but different fact.",
    "tags": [
      "reading-writing",
      "Information and Ideas",
      "Evidence"
    ]
  },
  {
    "id": "rw-evidence-02",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Evidence",
    "difficulty": "medium",
    "passage": "Claim: Remote work has not significantly harmed employee productivity in most white-collar industries. Data: A multi-company study tracking output before and after a shift to remote work found productivity changes of less than 3 percent in either direction across 85 percent of participating firms.",
    "question": "Which choice best supports the claim?",
    "choices": [
      {
        "id": "A",
        "text": "Most firms in the study saw productivity remain roughly stable after switching to remote work."
      },
      {
        "id": "B",
        "text": "Employees reported higher job satisfaction while working remotely."
      },
      {
        "id": "C",
        "text": "Remote work reduced office real estate costs for many firms."
      },
      {
        "id": "D",
        "text": "A minority of firms saw productivity change by more than 3 percent."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The claim is about productivity not being \"significantly harmed,\" and A restates the core data point (stable productivity in 85% of firms) that most directly supports it.",
    "hint1": "The claim is specifically about productivity — which choices are actually about something else?",
    "hint2": "What percentage of firms does the passage say saw only minor change?",
    "hint3": "Choose the option that most precisely restates the data tied to productivity, not a side effect.",
    "tags": [
      "reading-writing",
      "Information and Ideas",
      "Evidence"
    ]
  },
  {
    "id": "rw-evidence-03",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Evidence",
    "difficulty": "hard",
    "passage": "Claim: The decline in a city's downtown foot traffic is primarily driven by the rise of remote work rather than the growth of e-commerce. Data available: parking garage usage records, transit ridership by time of day, retail sales by category, and residential relocation patterns.",
    "question": "Which type of evidence, if it showed a sharp weekday-only decline concentrated in commuting hours, would most directly support the claim?",
    "choices": [
      {
        "id": "A",
        "text": "Retail sales by category"
      },
      {
        "id": "B",
        "text": "Transit ridership by time of day"
      },
      {
        "id": "C",
        "text": "Residential relocation patterns"
      },
      {
        "id": "D",
        "text": "Parking garage usage on weekends"
      }
    ],
    "correctAnswer": "B",
    "explanation": "A decline concentrated in commuting hours points to fewer people traveling to work downtown — a pattern remote work would produce — which transit ridership by time of day would directly reveal, supporting B over data less tied to commuting behavior.",
    "hint1": "The claim is about commuting behavior specifically — which data source captures time-of-day commuting patterns?",
    "hint2": "Retail sales relates more to e-commerce than to commuting; does that support or undercut the claim?",
    "hint3": "Match the \"weekday-only, commuting hours\" detail in the question to the data type built around time of day.",
    "tags": [
      "reading-writing",
      "Information and Ideas",
      "Evidence"
    ]
  },
  {
    "id": "rw-wic-01",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "difficulty": "easy",
    "passage": "Despite the CEO's assurances, investors remained wary, parsing every word of the earnings call for signs the company's optimism was unfounded.",
    "question": "As used in the text, \"parsing\" most nearly means",
    "choices": [
      {
        "id": "A",
        "text": "ignoring"
      },
      {
        "id": "B",
        "text": "examining closely"
      },
      {
        "id": "C",
        "text": "rewriting"
      },
      {
        "id": "D",
        "text": "dismissing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Parsing every word\" in the context of scrutinizing a statement for hidden meaning matches \"examining closely.\"",
    "hint1": "What are the investors doing to each word of the call?",
    "hint2": "Does \"wary\" suggest they're paying more or less attention than usual?",
    "hint3": "Replace \"parsing\" with each choice and see which keeps the sentence's meaning of careful scrutiny.",
    "tags": [
      "reading-writing",
      "Craft and Structure",
      "Words in Context"
    ]
  },
  {
    "id": "rw-wic-02",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "difficulty": "medium",
    "passage": "The critic's review was measured, neither the effusive praise nor the scathing dismissal that the film's polarizing marketing campaign might have led readers to expect.",
    "question": "As used in the text, \"measured\" most nearly means",
    "choices": [
      {
        "id": "A",
        "text": "lengthy"
      },
      {
        "id": "B",
        "text": "calculated in inches"
      },
      {
        "id": "C",
        "text": "restrained and balanced"
      },
      {
        "id": "D",
        "text": "inaccurate"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The sentence contrasts \"measured\" with two extremes (\"effusive praise\" and \"scathing dismissal\"), indicating a balanced, restrained tone — matching C.",
    "hint1": "What two extremes does the sentence contrast \"measured\" with?",
    "hint2": "If something avoids both extremes, what quality does it have?",
    "hint3": "\"Measured\" here describes tone, not a literal physical measurement.",
    "tags": [
      "reading-writing",
      "Craft and Structure",
      "Words in Context"
    ]
  },
  {
    "id": "rw-wic-03",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "difficulty": "hard",
    "passage": "The senator's concession speech was notable less for its content than for its register — a deliberate softening of the combative tone that had defined her campaign.",
    "question": "As used in the text, \"register\" most nearly means",
    "choices": [
      {
        "id": "A",
        "text": "an official written record"
      },
      {
        "id": "B",
        "text": "a style or manner of expression"
      },
      {
        "id": "C",
        "text": "a cash-handling device"
      },
      {
        "id": "D",
        "text": "a musical range"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Register\" here refers to the speech's tone or style (\"a deliberate softening of the combative tone\"), matching the linguistic sense of \"manner of expression.\"",
    "hint1": "The sentence contrasts \"content\" with \"register\" — so register must refer to something other than what was said.",
    "hint2": "The next clause describes tone — how does that relate to \"register\"?",
    "hint3": "Consider \"register\" as it's used to describe a style of speaking or writing, not its other common meanings.",
    "tags": [
      "reading-writing",
      "Craft and Structure",
      "Words in Context"
    ]
  },
  {
    "id": "rw-textstruct-01",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Text Structure",
    "difficulty": "easy",
    "passage": "First, preheat the oven. Next, combine the dry ingredients separately from the wet. Finally, fold the two mixtures together gently to avoid overmixing.",
    "question": "Which choice best describes the structure of the text?",
    "choices": [
      {
        "id": "A",
        "text": "A sequence of chronological steps"
      },
      {
        "id": "B",
        "text": "A comparison of two competing methods"
      },
      {
        "id": "C",
        "text": "A cause-and-effect argument"
      },
      {
        "id": "D",
        "text": "A personal anecdote"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The words \"First,\" \"Next,\" and \"Finally\" signal a chronological, step-by-step structure — matching A.",
    "hint1": "What words at the start of each sentence hint at order?",
    "hint2": "Is the passage describing one process over time, or comparing two different things?",
    "hint3": "Sequence words like \"first/next/finally\" almost always signal choice A's structure type.",
    "tags": [
      "reading-writing",
      "Craft and Structure",
      "Text Structure"
    ]
  },
  {
    "id": "rw-textstruct-02",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Text Structure",
    "difficulty": "medium",
    "passage": "Proponents argue that automation increases long-term productivity. Critics counter that short-term job losses outweigh these gains. The passage then presents data suggesting both effects occur simultaneously, at different speeds.",
    "question": "Which choice best describes the structure of the text?",
    "choices": [
      {
        "id": "A",
        "text": "It presents two opposing views and then offers evidence that partially reconciles them."
      },
      {
        "id": "B",
        "text": "It presents a single argument supported entirely by anecdote."
      },
      {
        "id": "C",
        "text": "It refutes one viewpoint using purely historical examples."
      },
      {
        "id": "D",
        "text": "It summarizes a debate without offering any additional evidence."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The text lays out \"proponents\" and \"critics,\" then introduces data suggesting both are partly right — a structure of opposing views followed by reconciling evidence, matching A.",
    "hint1": "How many viewpoints does the passage introduce before the data appears?",
    "hint2": "Does the final sentence side entirely with one view, or blend both?",
    "hint3": "Look for the choice that accounts for all three parts: view one, view two, and the reconciling data.",
    "tags": [
      "reading-writing",
      "Craft and Structure",
      "Text Structure"
    ]
  },
  {
    "id": "rw-textstruct-03",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Text Structure",
    "difficulty": "hard",
    "passage": "The essay opens with a vivid anecdote about a single failed harvest, then zooms outward to decades of regional rainfall data, before returning in its final paragraph to the same farmer introduced at the start.",
    "question": "Which choice best describes the structure of the text?",
    "choices": [
      {
        "id": "A",
        "text": "A structure that moves from the specific to the general and back to the specific, framing broad data within a personal story."
      },
      {
        "id": "B",
        "text": "A purely chronological account of one farmer's life."
      },
      {
        "id": "C",
        "text": "A structure that presents two farmers' contrasting experiences."
      },
      {
        "id": "D",
        "text": "An argument that dismisses statistical evidence in favor of anecdote."
      }
    ],
    "correctAnswer": "A",
    "explanation": "The essay begins with an individual anecdote, expands to broad regional data, and returns to the same individual — a specific-general-specific \"frame\" structure matching A.",
    "hint1": "Trace where the essay starts, where it goes in the middle, and where it ends.",
    "hint2": "Does the essay end with new information or return to something from the beginning?",
    "hint3": "The right answer should describe movement between scale (individual vs. broad data), not just chronology.",
    "tags": [
      "reading-writing",
      "Craft and Structure",
      "Text Structure"
    ]
  },
  {
    "id": "rw-transitions-01",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Transitions",
    "difficulty": "easy",
    "passage": "The bridge has stood for over a century. ______, engineers now warn that decades of heavy traffic have weakened its central supports.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      {
        "id": "A",
        "text": "For example,"
      },
      {
        "id": "B",
        "text": "However,"
      },
      {
        "id": "C",
        "text": "Similarly,"
      },
      {
        "id": "D",
        "text": "As a result,"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The second sentence contrasts the bridge's long history with a new warning about weakness, requiring a contrast transition — \"However.\"",
    "hint1": "Does the second sentence agree with or contrast the first?",
    "hint2": "Look for a word that signals a turn or contrast, not an example or similarity.",
    "hint3": "\"As a result\" would imply the first sentence caused the second — is that the relationship here?",
    "tags": [
      "reading-writing",
      "Expression of Ideas",
      "Transitions"
    ]
  },
  {
    "id": "rw-transitions-02",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Transitions",
    "difficulty": "medium",
    "passage": "The lab's initial trials showed promising results in mice. ______, researchers caution that results in animal models frequently fail to replicate in human trials.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      {
        "id": "A",
        "text": "Nonetheless,"
      },
      {
        "id": "B",
        "text": "In addition,"
      },
      {
        "id": "C",
        "text": "Specifically,"
      },
      {
        "id": "D",
        "text": "Consequently,"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The second sentence tempers the optimism of the first with a caution, so a concessive transition like \"Nonetheless\" fits best.",
    "hint1": "Is the second sentence adding a new example, or qualifying the first sentence's claim?",
    "hint2": "A \"caution\" following \"promising results\" suggests what kind of relationship?",
    "hint3": "\"In addition\" would only work if the second sentence added a similar, non-contrasting point.",
    "tags": [
      "reading-writing",
      "Expression of Ideas",
      "Transitions"
    ]
  },
  {
    "id": "rw-transitions-03",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Transitions",
    "difficulty": "hard",
    "passage": "Some economists attribute the price spike entirely to supply chain disruptions. ______, others point to the simultaneous surge in consumer demand as an equally significant factor, suggesting no single cause fully explains the trend.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      {
        "id": "A",
        "text": "Therefore,"
      },
      {
        "id": "B",
        "text": "In contrast,"
      },
      {
        "id": "C",
        "text": "For instance,"
      },
      {
        "id": "D",
        "text": "Likewise,"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The sentence sets up two competing explanations from different groups of economists, so a contrast transition (\"In contrast\") is needed, not a similarity or example word.",
    "hint1": "Are the two groups of economists agreeing or disagreeing about the cause?",
    "hint2": "\"Likewise\" would suggest the second group agrees — does the sentence support that?",
    "hint3": "Look for the choice that signals two different, competing explanations.",
    "tags": [
      "reading-writing",
      "Expression of Ideas",
      "Transitions"
    ]
  },
  {
    "id": "rw-transitions-04",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Transitions",
    "difficulty": "medium",
    "passage": "The new policy was intended to reduce paperwork for small businesses. ______, several business owners report spending more time on compliance forms than before.",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      {
        "id": "A",
        "text": "Similarly,"
      },
      {
        "id": "B",
        "text": "However,"
      },
      {
        "id": "C",
        "text": "For example,"
      },
      {
        "id": "D",
        "text": "Therefore,"
      }
    ],
    "correctAnswer": "B",
    "explanation": "The second sentence contradicts the stated intent of the policy, requiring the contrast transition \"However.\"",
    "hint1": "Does the outcome described match or contradict the policy's stated intention?",
    "hint2": "\"Similarly\" and \"For example\" both signal agreement or illustration — does that fit here?",
    "hint3": "Choose the transition that signals an unexpected, contrasting result.",
    "tags": [
      "reading-writing",
      "Expression of Ideas",
      "Transitions"
    ]
  },
  {
    "id": "rw-rhetsyn-01",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Rhetorical Synthesis",
    "difficulty": "easy",
    "passage": "Notes: Bees pollinate roughly one-third of crops consumed by humans. A 2021 study found a 30% decline in wild bee populations in the study region over the past decade. Researchers cite pesticide use, habitat loss, and disease as primary contributors.",
    "question": "The student wants to emphasize the economic stakes of declining bee populations. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "id": "A",
        "text": "Bees pollinate about one-third of the crops people eat, so a 30% decline in wild bee populations poses a direct risk to food production."
      },
      {
        "id": "B",
        "text": "Researchers identified pesticide use, habitat loss, and disease as contributors to bee decline."
      },
      {
        "id": "C",
        "text": "A 2021 study tracked wild bee populations over a ten-year period."
      },
      {
        "id": "D",
        "text": "Bees are important pollinators for many types of plants."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Choice A connects the crop-pollination statistic with the population decline, directly framing the economic/food-supply stakes, which best matches the stated goal.",
    "hint1": "Which note directly ties bees to something with clear economic value (food)?",
    "hint2": "Does the goal ask about causes of the decline, or about its consequences?",
    "hint3": "The best choice should combine two notes to make an economic-stakes point, not just restate one fact.",
    "tags": [
      "reading-writing",
      "Expression of Ideas",
      "Rhetorical Synthesis"
    ]
  },
  {
    "id": "rw-rhetsyn-02",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Rhetorical Synthesis",
    "difficulty": "medium",
    "passage": "Notes: City A introduced a bike-share program in 2018. Bike commuting in City A rose 40% within two years. City B introduced a similar program in 2019 but saw only an 8% rise. City B's program had far fewer docking stations per capita than City A's.",
    "question": "The student wants to explain why City A's program outperformed City B's. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "id": "A",
        "text": "City A introduced its bike-share program a year before City B did."
      },
      {
        "id": "B",
        "text": "City A's much larger rise in bike commuting compared with City B's may be explained by its higher number of docking stations per capita."
      },
      {
        "id": "C",
        "text": "Bike commuting increased in both City A and City B after their programs launched."
      },
      {
        "id": "D",
        "text": "City B's program began in 2019, one year after City A's."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Choice B connects the outcome gap (40% vs. 8%) to the docking-station difference, which directly explains the \"why,\" while the others state facts without connecting cause and effect.",
    "hint1": "The goal asks \"why\" — which choice offers an explanation rather than just a timeline?",
    "hint2": "What structural difference between the two programs does the last note mention?",
    "hint3": "Look for the choice that links the outcome (rise in commuting) to a specific cause (docking stations).",
    "tags": [
      "reading-writing",
      "Expression of Ideas",
      "Rhetorical Synthesis"
    ]
  },
  {
    "id": "rw-rhetsyn-03",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Rhetorical Synthesis",
    "difficulty": "hard",
    "passage": "Notes: Company X shifted to a four-day workweek in a 2022 pilot. Self-reported employee burnout scores dropped 25%. Overall output, measured by completed projects per quarter, remained statistically unchanged. The pilot included only salaried employees, not hourly workers.",
    "question": "The student wants to present a balanced summary of the pilot's key findings while noting a limitation of the study. Which choice most effectively uses the notes to accomplish this goal?",
    "choices": [
      {
        "id": "A",
        "text": "Company X's four-day workweek pilot reduced reported burnout by 25% without harming output, though the findings applied only to salaried employees."
      },
      {
        "id": "B",
        "text": "Company X's pilot proved that a four-day workweek always increases employee happiness."
      },
      {
        "id": "C",
        "text": "Burnout scores and completed projects were both tracked during the 2022 pilot."
      },
      {
        "id": "D",
        "text": "Hourly workers were excluded from Company X's four-day workweek pilot."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Choice A summarizes both key outcomes (burnout, output) and includes the stated limitation (salaried employees only), matching the full goal, while the others omit a piece or overstate the finding.",
    "hint1": "The goal has two parts — a balanced summary AND a limitation. Which choices include both?",
    "hint2": "Does choice B's word \"always\" match how confidently the notes state the finding?",
    "hint3": "The correct choice should combine the two outcome notes with the scope note about salaried employees.",
    "tags": [
      "reading-writing",
      "Expression of Ideas",
      "Rhetorical Synthesis"
    ]
  },
  {
    "id": "rw-boundaries-01",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Boundaries",
    "difficulty": "easy",
    "passage": "The museum's new wing features rare fossils; ______ visitors can view a full dinosaur skeleton for the first time.",
    "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "id": "A",
        "text": "fossils, visitors"
      },
      {
        "id": "B",
        "text": "fossils. Visitors"
      },
      {
        "id": "C",
        "text": "fossils visitors"
      },
      {
        "id": "D",
        "text": "fossils; visitors,"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Two independent clauses need to be separated by a period (or semicolon) — \"fossils. Visitors\" correctly creates two complete sentences.",
    "hint1": "Are there two complete sentences here, or one sentence with a dependent clause?",
    "hint2": "What punctuation correctly separates two independent clauses?",
    "hint3": "Check whether a comma alone (choice A) would create a run-on/comma splice.",
    "tags": [
      "reading-writing",
      "Standard English Conventions",
      "Boundaries",
      "Grammar"
    ]
  },
  {
    "id": "rw-boundaries-02",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Boundaries",
    "difficulty": "medium",
    "passage": "The committee reviewed three proposals ______ only one met the funding criteria.",
    "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "id": "A",
        "text": " , and"
      },
      {
        "id": "B",
        "text": " and"
      },
      {
        "id": "C",
        "text": " , but"
      },
      {
        "id": "D",
        "text": " but,"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The two clauses are in a contrasting relationship (\"reviewed three\" vs. \"only one met criteria\"), which requires a comma before the coordinating conjunction \"but.\"",
    "hint1": "Do the two clauses agree with each other, or contrast?",
    "hint2": "When joining two independent clauses with a coordinating conjunction, what punctuation is needed before it?",
    "hint3": "Compare the choices with and without the comma before \"but.\"",
    "tags": [
      "reading-writing",
      "Standard English Conventions",
      "Boundaries",
      "Grammar"
    ]
  },
  {
    "id": "rw-boundaries-03",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Boundaries",
    "difficulty": "hard",
    "passage": "The report, which took the team eight months to complete ______ was released without a single public comment period.",
    "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "id": "A",
        "text": ","
      },
      {
        "id": "B",
        "text": ";"
      },
      {
        "id": "C",
        "text": "(no punctuation)"
      },
      {
        "id": "D",
        "text": "—"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The nonrestrictive clause \"which took the team eight months to complete\" needs a closing comma to match the comma that opens it after \"report,\".",
    "hint1": "Look earlier in the sentence — is there already a comma opening a descriptive clause?",
    "hint2": "Nonrestrictive (extra, non-essential) clauses need punctuation on both sides.",
    "hint3": "Which option matches the punctuation mark that opened the clause?",
    "tags": [
      "reading-writing",
      "Standard English Conventions",
      "Boundaries",
      "Grammar"
    ]
  },
  {
    "id": "rw-form-01",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Form, Structure, and Sense",
    "difficulty": "easy",
    "passage": "Each of the students ______ required to submit a final project.",
    "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "id": "A",
        "text": "are"
      },
      {
        "id": "B",
        "text": "is"
      },
      {
        "id": "C",
        "text": "were"
      },
      {
        "id": "D",
        "text": "have been"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"Each\" is singular, so it takes the singular verb \"is,\" regardless of the plural noun \"students\" in the prepositional phrase.",
    "hint1": "What is the actual subject of the sentence — \"each\" or \"students\"?",
    "hint2": "Does \"each\" typically take a singular or plural verb?",
    "hint3": "Ignore the prepositional phrase \"of the students\" when checking subject-verb agreement.",
    "tags": [
      "reading-writing",
      "Standard English Conventions",
      "Form, Structure, and Sense",
      "Grammar"
    ]
  },
  {
    "id": "rw-form-02",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Form, Structure, and Sense",
    "difficulty": "medium",
    "passage": "By the time the fire department arrived, the warehouse ______ completely destroyed.",
    "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "id": "A",
        "text": "is"
      },
      {
        "id": "B",
        "text": "had been"
      },
      {
        "id": "C",
        "text": "will be"
      },
      {
        "id": "D",
        "text": "being"
      }
    ],
    "correctAnswer": "B",
    "explanation": "\"By the time... arrived\" signals an action completed before another past action, requiring the past perfect \"had been.\"",
    "hint1": "Which happened first — the fire department arriving, or the warehouse being destroyed?",
    "hint2": "What verb tense describes an action completed before another past event?",
    "hint3": "\"By the time\" is a strong clue phrase for past perfect tense.",
    "tags": [
      "reading-writing",
      "Standard English Conventions",
      "Form, Structure, and Sense",
      "Grammar"
    ]
  },
  {
    "id": "rw-form-03",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Form, Structure, and Sense",
    "difficulty": "hard",
    "passage": "Neither the coach nor the players ______ satisfied with the referee's final call.",
    "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "id": "A",
        "text": "was"
      },
      {
        "id": "B",
        "text": "is"
      },
      {
        "id": "C",
        "text": "were"
      },
      {
        "id": "D",
        "text": "has been"
      }
    ],
    "correctAnswer": "C",
    "explanation": "With \"neither...nor,\" the verb agrees with the nearer subject, \"players,\" which is plural, so \"were\" is correct.",
    "hint1": "With \"neither...nor,\" does the verb agree with the subject closer to it or farther from it?",
    "hint2": "Which of the two subjects, \"coach\" or \"players,\" is closer to the verb?",
    "hint3": "Is \"players\" singular or plural — what verb form matches?",
    "tags": [
      "reading-writing",
      "Standard English Conventions",
      "Form, Structure, and Sense",
      "Grammar"
    ]
  },
  {
    "id": "math-lineq-01",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Equations",
    "difficulty": "easy",
    "passage": null,
    "question": "If 3x + 5 = 20, what is the value of x?",
    "choices": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "15"
      },
      {
        "id": "D",
        "text": "25"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Subtract 5 from both sides: 3x = 15. Divide by 3: x = 5.",
    "hint1": "What operation removes the \"+5\" from the left side?",
    "hint2": "After isolating 3x, what operation gets you x alone?",
    "hint3": "Solve step by step: 3x + 5 = 20 → 3x = 15 → x = ?",
    "tags": [
      "math",
      "Algebra",
      "Linear Equations"
    ]
  },
  {
    "id": "math-lineq-02",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Equations",
    "difficulty": "medium",
    "passage": null,
    "question": "A rental car company charges a flat fee of $40 plus $0.25 per mile driven. If a customer's total bill was $92.50, how many miles did they drive?",
    "choices": [
      {
        "id": "A",
        "text": "180"
      },
      {
        "id": "B",
        "text": "210"
      },
      {
        "id": "C",
        "text": "230"
      },
      {
        "id": "D",
        "text": "250"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Subtract 40: 0.25m = 52.5. Divide by 0.25: m = 210.",
    "hint1": "Write an equation using the flat fee and per-mile rate.",
    "hint2": "Isolate the term with \"m\" by subtracting the flat fee from both sides.",
    "hint3": "Divide both sides by the per-mile rate to solve for m.",
    "tags": [
      "math",
      "Algebra",
      "Linear Equations"
    ]
  },
  {
    "id": "math-lineq-03",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Equations",
    "difficulty": "hard",
    "passage": null,
    "question": "If 2(x - 3) + 4 = 3(x + 1) - 5, what is the value of x?",
    "choices": [
      {
        "id": "A",
        "text": "-2"
      },
      {
        "id": "B",
        "text": "0"
      },
      {
        "id": "C",
        "text": "2"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Expand both sides: 2x - 2 = 3x - 2. Subtract 2x from both sides: -2 = x - 2. Add 2: x = 0.",
    "hint1": "Start by distributing the numbers outside each set of parentheses.",
    "hint2": "Combine like terms on each side before moving variables.",
    "hint3": "Move all x-terms to one side and constants to the other, then solve.",
    "tags": [
      "math",
      "Algebra",
      "Linear Equations"
    ]
  },
  {
    "id": "math-lineq-04",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Equations",
    "difficulty": "medium",
    "passage": null,
    "question": "The sum of three consecutive integers is 72. What is the largest of the three integers?",
    "choices": [
      {
        "id": "A",
        "text": "23"
      },
      {
        "id": "B",
        "text": "24"
      },
      {
        "id": "C",
        "text": "25"
      },
      {
        "id": "D",
        "text": "26"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Let the integers be n, n+1, n+2. Their sum is 3n + 3 = 72, so n = 23. The largest integer is n + 2 = 25.",
    "hint1": "How do you represent three consecutive integers algebraically?",
    "hint2": "Combine like terms to simplify the sum into one equation.",
    "hint3": "Solve for n first, then find the largest integer using n + 2.",
    "tags": [
      "math",
      "Algebra",
      "Linear Equations"
    ]
  },
  {
    "id": "math-lineq-05",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Equations",
    "difficulty": "easy",
    "passage": null,
    "question": "If 5x - 7 = 2x + 8, what is the value of x?",
    "choices": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "15"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Subtract 2x from both sides: 3x - 7 = 8. Add 7: 3x = 15. Divide by 3: x = 5.",
    "hint1": "Move all x terms to one side of the equation first.",
    "hint2": "Then move the constant terms to the other side.",
    "hint3": "Divide to isolate x completely.",
    "tags": [
      "math",
      "Algebra",
      "Linear Equations"
    ]
  },
  {
    "id": "math-sys-01",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Systems of Equations",
    "difficulty": "easy",
    "passage": null,
    "question": "If x + y = 10 and x - y = 4, what is the value of x?",
    "choices": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Adding the two equations eliminates y: 2x = 14, so x = 7.",
    "hint1": "What happens if you add the two equations together?",
    "hint2": "Which variable cancels out when you add them?",
    "hint3": "Solve for x, then check by finding y if needed.",
    "tags": [
      "math",
      "Algebra",
      "Systems of Equations"
    ]
  },
  {
    "id": "math-sys-02",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Systems of Equations",
    "difficulty": "hard",
    "passage": null,
    "question": "A system of equations is given: x + 2y = 11 and 3x - 2y = 9. What is the value of y?",
    "choices": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Adding the two equations eliminates y: 4x = 20, so x = 5. Substituting into the first equation: 5 + 2y = 11, so y = 3.",
    "hint1": "Look for a way to add or subtract the equations to eliminate one variable.",
    "hint2": "Once you solve for x, substitute it back into either original equation.",
    "hint3": "Double-check your answer by plugging both x and y into the second equation.",
    "tags": [
      "math",
      "Algebra",
      "Systems of Equations"
    ]
  },
  {
    "id": "math-quad-01",
    "subject": "math",
    "domain": "Advanced Math",
    "skill": "Quadratics",
    "difficulty": "easy",
    "passage": null,
    "question": "What are the solutions to x^2 - 9 = 0?",
    "choices": [
      {
        "id": "A",
        "text": "x = 3 only"
      },
      {
        "id": "B",
        "text": "x = -3 only"
      },
      {
        "id": "C",
        "text": "x = 3 and x = -3"
      },
      {
        "id": "D",
        "text": "x = 9 and x = -9"
      }
    ],
    "correctAnswer": "C",
    "explanation": "x^2 = 9, so x = 3 or x = -3 (difference of squares).",
    "hint1": "Rewrite the equation as x^2 = 9.",
    "hint2": "Remember that a positive number has two square roots.",
    "hint3": "Consider both the positive and negative roots.",
    "tags": [
      "math",
      "Advanced Math",
      "Quadratics"
    ]
  },
  {
    "id": "math-quad-02",
    "subject": "math",
    "domain": "Advanced Math",
    "skill": "Quadratics",
    "difficulty": "hard",
    "passage": null,
    "question": "If x^2 - 5x + 6 = 0, what are the two values of x?",
    "choices": [
      {
        "id": "A",
        "text": "1 and 6"
      },
      {
        "id": "B",
        "text": "2 and 3"
      },
      {
        "id": "C",
        "text": "-2 and -3"
      },
      {
        "id": "D",
        "text": "6 and -1"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Factor the quadratic: (x - 2)(x - 3) = 0, giving x = 2 or x = 3.",
    "hint1": "Look for two numbers that multiply to 6 and add to -5.",
    "hint2": "Rewrite the equation as a product of two binomials.",
    "hint3": "Set each factor equal to zero and solve.",
    "tags": [
      "math",
      "Advanced Math",
      "Quadratics"
    ]
  },
  {
    "id": "math-func-01",
    "subject": "math",
    "domain": "Advanced Math",
    "skill": "Functions",
    "difficulty": "easy",
    "passage": null,
    "question": "If f(x) = 2x^2 - 3, what is f(3)?",
    "choices": [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "15"
      },
      {
        "id": "D",
        "text": "18"
      }
    ],
    "correctAnswer": "C",
    "explanation": "f(3) = 2(3)^2 - 3 = 2(9) - 3 = 18 - 3 = 15.",
    "hint1": "Substitute x = 3 into the function.",
    "hint2": "Follow order of operations: square first, then multiply, then subtract.",
    "hint3": "Double-check your arithmetic at each step.",
    "tags": [
      "math",
      "Advanced Math",
      "Functions"
    ]
  },
  {
    "id": "math-func-02",
    "subject": "math",
    "domain": "Advanced Math",
    "skill": "Functions",
    "difficulty": "medium",
    "passage": null,
    "question": "The function g is defined by g(x) = 3x + k, where k is a constant. If g(4) = 17, what is the value of k?",
    "choices": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Substitute x = 4: 3(4) + k = 17, so 12 + k = 17, meaning k = 5.",
    "hint1": "Substitute the given input value into the function.",
    "hint2": "Set the resulting expression equal to the given output value.",
    "hint3": "Solve the resulting equation for k.",
    "tags": [
      "math",
      "Advanced Math",
      "Functions"
    ]
  },
  {
    "id": "math-pct-01",
    "subject": "math",
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Percentages",
    "difficulty": "easy",
    "passage": null,
    "question": "A shirt originally priced at $40 is discounted by 25%. What is the sale price?",
    "choices": [
      {
        "id": "A",
        "text": "$10"
      },
      {
        "id": "B",
        "text": "$15"
      },
      {
        "id": "C",
        "text": "$30"
      },
      {
        "id": "D",
        "text": "$35"
      }
    ],
    "correctAnswer": "C",
    "explanation": "A 25% discount means the customer pays 75% of the price: 0.75 × $40 = $30.",
    "hint1": "What percentage of the original price does the customer actually pay?",
    "hint2": "Convert that percentage to a decimal.",
    "hint3": "Multiply the original price by that decimal.",
    "tags": [
      "math",
      "Problem-Solving and Data Analysis",
      "Percentages"
    ]
  },
  {
    "id": "math-pct-02",
    "subject": "math",
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Percentages",
    "difficulty": "hard",
    "passage": null,
    "question": "A store's revenue increased from $80,000 to $92,000 over one year. What was the percent increase in revenue?",
    "choices": [
      {
        "id": "A",
        "text": "12%"
      },
      {
        "id": "B",
        "text": "13.5%"
      },
      {
        "id": "C",
        "text": "15%"
      },
      {
        "id": "D",
        "text": "18%"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Percent increase = (new - old) / old × 100 = (12,000 / 80,000) × 100 = 15%.",
    "hint1": "Find the dollar amount of the increase first.",
    "hint2": "Divide the increase by the original (starting) value.",
    "hint3": "Convert the resulting decimal to a percentage.",
    "tags": [
      "math",
      "Problem-Solving and Data Analysis",
      "Percentages"
    ]
  },
  {
    "id": "math-ratio-01",
    "subject": "math",
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Ratios",
    "difficulty": "easy",
    "passage": null,
    "question": "A recipe calls for flour and sugar in a ratio of 3:2. If a baker uses 12 cups of flour, how many cups of sugar are needed?",
    "choices": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Set up a proportion: 3/2 = 12/x. Cross-multiplying gives 3x = 24, so x = 8.",
    "hint1": "Set up a proportion using the given ratio and the known flour amount.",
    "hint2": "Cross-multiply to solve for the unknown.",
    "hint3": "Check that your answer keeps the ratio 3:2 accurate.",
    "tags": [
      "math",
      "Problem-Solving and Data Analysis",
      "Ratios"
    ]
  },
  {
    "id": "math-ratio-02",
    "subject": "math",
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Ratios",
    "difficulty": "medium",
    "passage": null,
    "question": "In a class, the ratio of students who prefer math to students who prefer science is 5:4. If there are 36 students total and every student prefers one or the other, how many prefer math?",
    "choices": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The ratio parts sum to 9 (5 + 4), and 36 ÷ 9 = 4 students per part. Students who prefer math: 5 × 4 = 20.",
    "hint1": "Add the two parts of the ratio to find the total number of \"parts.\"",
    "hint2": "Divide the total number of students by the number of parts.",
    "hint3": "Multiply that value by the math ratio number.",
    "tags": [
      "math",
      "Problem-Solving and Data Analysis",
      "Ratios"
    ]
  },
  {
    "id": "math-data-01",
    "subject": "math",
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Data Analysis",
    "difficulty": "easy",
    "passage": null,
    "question": "The mean of five numbers is 20. If four of the numbers are 15, 18, 22, and 25, what is the fifth number?",
    "choices": [
      {
        "id": "A",
        "text": "15"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "25"
      }
    ],
    "correctAnswer": "C",
    "explanation": "The sum of all five numbers is 5 × 20 = 100. The four known numbers sum to 80, so the fifth number is 100 - 80 = 20.",
    "hint1": "Use the mean formula to find the total sum of all five numbers.",
    "hint2": "Add up the four known numbers.",
    "hint3": "Subtract that sum from the total to find the missing number.",
    "tags": [
      "math",
      "Problem-Solving and Data Analysis",
      "Data Analysis"
    ]
  },
  {
    "id": "math-data-02",
    "subject": "math",
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Data Analysis",
    "difficulty": "hard",
    "passage": null,
    "question": "A survey of 200 people found that 120 preferred coffee over tea. A second survey of 150 different people found that 75 preferred coffee over tea. What percent of the combined 350 people preferred coffee?",
    "choices": [
      {
        "id": "A",
        "text": "50%"
      },
      {
        "id": "B",
        "text": "52%"
      },
      {
        "id": "C",
        "text": "55.7%"
      },
      {
        "id": "D",
        "text": "60%"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Combined coffee preference: 120 + 75 = 195 out of 350 total. 195/350 ≈ 0.557, or about 55.7%.",
    "hint1": "Combine the number of people who preferred coffee from both surveys.",
    "hint2": "Combine the total number of people from both surveys.",
    "hint3": "Divide the combined coffee count by the combined total, then convert to a percent.",
    "tags": [
      "math",
      "Problem-Solving and Data Analysis",
      "Data Analysis"
    ]
  },
  {
    "id": "math-prob-01",
    "subject": "math",
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Probability",
    "difficulty": "easy",
    "passage": null,
    "question": "A bag contains 4 red marbles, 5 blue marbles, and 3 green marbles. If one marble is drawn at random, what is the probability it is blue?",
    "choices": [
      {
        "id": "A",
        "text": "1/3"
      },
      {
        "id": "B",
        "text": "5/12"
      },
      {
        "id": "C",
        "text": "1/2"
      },
      {
        "id": "D",
        "text": "3/12"
      }
    ],
    "correctAnswer": "B",
    "explanation": "There are 12 total marbles and 5 are blue, so the probability is 5/12.",
    "hint1": "Find the total number of marbles in the bag.",
    "hint2": "Identify how many of those marbles are blue.",
    "hint3": "Probability = favorable outcomes ÷ total outcomes.",
    "tags": [
      "math",
      "Problem-Solving and Data Analysis",
      "Probability"
    ]
  },
  {
    "id": "math-prob-02",
    "subject": "math",
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Probability",
    "difficulty": "hard",
    "passage": null,
    "question": "Two fair six-sided dice are rolled. What is the probability that the sum of the two dice is exactly 8?",
    "choices": [
      {
        "id": "A",
        "text": "5/36"
      },
      {
        "id": "B",
        "text": "1/6"
      },
      {
        "id": "C",
        "text": "6/36"
      },
      {
        "id": "D",
        "text": "4/36"
      }
    ],
    "correctAnswer": "A",
    "explanation": "There are 36 total outcomes. The combinations summing to 8 are (2,6),(3,5),(4,4),(5,3),(6,2) — 5 outcomes, giving a probability of 5/36.",
    "hint1": "How many total outcomes are possible when rolling two dice?",
    "hint2": "List all the combinations that add up to 8.",
    "hint3": "Probability = number of favorable combinations ÷ total combinations.",
    "tags": [
      "math",
      "Problem-Solving and Data Analysis",
      "Probability"
    ]
  },
  {
    "id": "math-geo-01",
    "subject": "math",
    "domain": "Geometry and Trigonometry",
    "skill": "Geometry",
    "difficulty": "easy",
    "passage": null,
    "question": "A rectangle has a length of 12 and a width of 7. What is its perimeter?",
    "choices": [
      {
        "id": "A",
        "text": "19"
      },
      {
        "id": "B",
        "text": "38"
      },
      {
        "id": "C",
        "text": "84"
      },
      {
        "id": "D",
        "text": "42"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Perimeter = 2(length + width) = 2(12 + 7) = 2(19) = 38.",
    "hint1": "Recall the formula for the perimeter of a rectangle.",
    "hint2": "Add the length and width first.",
    "hint3": "Multiply that sum by 2.",
    "tags": [
      "math",
      "Geometry and Trigonometry",
      "Geometry"
    ]
  },
  {
    "id": "math-geo-02",
    "subject": "math",
    "domain": "Geometry and Trigonometry",
    "skill": "Geometry",
    "difficulty": "hard",
    "passage": null,
    "question": "A circle has a circumference of 18π. What is the area of the circle?",
    "choices": [
      {
        "id": "A",
        "text": "9π"
      },
      {
        "id": "B",
        "text": "18π"
      },
      {
        "id": "C",
        "text": "81π"
      },
      {
        "id": "D",
        "text": "324π"
      }
    ],
    "correctAnswer": "C",
    "explanation": "From C = 2πr = 18π, r = 9. Area = πr² = π(9)² = 81π.",
    "hint1": "Use the circumference formula to find the radius first.",
    "hint2": "Once you have the radius, which formula gives you area?",
    "hint3": "Substitute the radius into the area formula and simplify.",
    "tags": [
      "math",
      "Geometry and Trigonometry",
      "Geometry"
    ]
  },
  {
    "id": "math-trig-01",
    "subject": "math",
    "domain": "Geometry and Trigonometry",
    "skill": "Trigonometry",
    "difficulty": "medium",
    "passage": null,
    "question": "In a right triangle, one angle measures 30° and the hypotenuse is 10. What is the length of the side opposite the 30° angle?",
    "choices": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "5√3"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "8.66"
      }
    ],
    "correctAnswer": "A",
    "explanation": "sin(30°) = opposite/hypotenuse = 0.5, so opposite = 0.5 × 10 = 5.",
    "hint1": "Which trigonometric ratio relates the opposite side and the hypotenuse?",
    "hint2": "What is the value of sin(30°)?",
    "hint3": "Multiply that ratio by the hypotenuse length.",
    "tags": [
      "math",
      "Geometry and Trigonometry",
      "Trigonometry"
    ]
  },
  {
    "id": "math-trig-02",
    "subject": "math",
    "domain": "Geometry and Trigonometry",
    "skill": "Trigonometry",
    "difficulty": "hard",
    "passage": null,
    "question": "If cos(θ) = 3/5 and θ is in the first quadrant, what is sin(θ)?",
    "choices": [
      {
        "id": "A",
        "text": "3/5"
      },
      {
        "id": "B",
        "text": "4/5"
      },
      {
        "id": "C",
        "text": "5/3"
      },
      {
        "id": "D",
        "text": "5/4"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Using a 3-4-5 right triangle (adjacent = 3, hypotenuse = 5), the opposite side is 4, so sin(θ) = 4/5.",
    "hint1": "Think of cos(θ) = 3/5 as adjacent/hypotenuse in a right triangle.",
    "hint2": "Use the Pythagorean theorem to find the missing (opposite) side.",
    "hint3": "sin(θ) = opposite/hypotenuse — plug in your values.",
    "tags": [
      "math",
      "Geometry and Trigonometry",
      "Trigonometry"
    ]
  },
  {
    "id": "ocr-00107",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Inequalities",
    "group": "Algebra — Linear Inequalities",
    "difficulty": "unknown",
    "passage": "",
    "question": "233 dateav0 ‘Acity employee will plant two types of bushes, azaleas and boxwoods, in a park. There will be no more than 164 total",
    "choices": [
      {
        "id": "A",
        "text": "Aa+b> 164 3a>b Batb> 164 as3b"
      },
      {
        "id": "B",
        "text": "bushes planted, and the number of azaleas planted willbe at most thre times the number of boxwoods planted. Which of the following systems of inequalities best represents this situation where ais the number of azaleas that willbe planted, ‘and bis the number of boxwoods that will be planted?"
      },
      {
        "id": "C",
        "text": "ca+b< 164 Ba>b"
      },
      {
        "id": "D",
        "text": "Da+b< 164 asa"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Linear Inequalities 2.pdf",
    "sourceQuestionNumber": "2.13",
    "ocr": true
  },
  {
    "id": "ocr-00108",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Inequalities",
    "group": "Algebra — Linear Inequalities",
    "difficulty": "unknown",
    "passage": "",
    "question": "hateadiaadl 21% ostaama6 [A particular botanist classifies a species of pant as tall its typical height when fully grown is more than 100 centimeters Each of the following inequalities represents the possible heights hn centimeters, for a specific plant species when fully ‘grown, Which inequality represents the possible heights h, in centimeters, fora tall plant species?",
    "choices": [
      {
        "id": "A",
        "text": "A106 <h < 158"
      },
      {
        "id": "B",
        "text": "B.80<h< 100"
      },
      {
        "id": "C",
        "text": "Caz ch<sT"
      },
      {
        "id": "D",
        "text": "DIT <h< 85"
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Linear Inequalities 2.pdf",
    "sourceQuestionNumber": "2.14",
    "ocr": true
  },
  {
    "id": "ocr-00116",
    "subject": "math",
    "domain": "Advanced Math",
    "skill": "Equivalent Expressions",
    "group": "Advanced Math — Equivalent Expressions",
    "difficulty": "unknown",
    "passage": "",
    "question": "ta okbags | ea) 3x2 424-7)2",
    "choices": [
      {
        "id": "A",
        "text": "A 5x?- 2x43"
      },
      {
        "id": "B",
        "text": "B.5x242x-3"
      },
      {
        "id": "C",
        "text": "cK? = 2x11"
      },
      {
        "id": "D",
        "text": "Dax? +2x=11"
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Identify the given information and the exact quantity the question asks you to find.",
    "hint2": "Choose the equation, formula, or representation that connects the givens to the unknown.",
    "hint3": "Substitute carefully and check the result in the original conditions.",
    "source": "Equivalent Expressions 1.pdf",
    "sourceQuestionNumber": "1.3",
    "ocr": true
  },
  {
    "id": "ocr-00269",
    "subject": "math",
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Probability",
    "group": "Problem-Solving and Data Analysis — Probability",
    "difficulty": "unknown",
    "passage": "",
    "question": "19 abexce [store received a shipment of 1.000 MP3 players, 4 of which were",
    "choices": [
      {
        "id": "A",
        "text": "A.0008 8.004"
      },
      {
        "id": "B",
        "text": "ba wo 22080878 OO “There are n nonfiction books and 12 fiction books on a bookshelf one of"
      },
      {
        "id": "C",
        "text": "cos"
      },
      {
        "id": "D",
        "text": "defective. fan MP3 player is randomly selected from this shipment, what is ‘the probabilty that tis defective?"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Identify exactly which statistic or quantity the question asks about.",
    "hint2": "Use the table, graph, or numerical data directly before doing extra calculations.",
    "hint3": "Check that your calculation uses the correct rows, categories, or denominator.",
    "source": "Probability 1.pdf",
    "sourceQuestionNumber": "1.1",
    "ocr": true
  },
  {
    "id": "ocr-00558",
    "subject": "math",
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Evaluating Statistical Claims",
    "group": "Problem-Solving and Data Analysis — Evaluating Statistical Claims",
    "difficulty": "unknown",
    "passage": "",
    "question": "12h Theeeegeting eeeettaeel 0h nig Themed end Se ily epee em eee eptineipel fe reper et",
    "choices": [
      {
        "id": "A",
        "text": "A. Allthe 50 baobab tres that were selected in this habitat"
      },
      {
        "id": "B",
        "text": "B,Allthe baobab trees that were 19 years old in this habitat C.Allthe baobab trees that were 17 years old in South Attica"
      },
      {
        "id": "C",
        "text": "chillren per household inthe community. 36 tea0we For a baobab tee habitat in South Africa, scientist randomly selected 50 baobab trees that were 17 years old and randomly essigned them to two groups. Each group was subjected to a diferent watering pattern for 2 consecutive years to ‘observe whether the watering pattern affecte the tres’ growth rate. Based on the design of the study, what i the largest {10up to which these results can be applied?"
      },
      {
        "id": "D",
        "text": "D.Allthe baobab trees that were 17 years odin this habitat"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Identify exactly which statistic or quantity the question asks about.",
    "hint2": "Use the table, graph, or numerical data directly before doing extra calculations.",
    "hint3": "Check that your calculation uses the correct rows, categories, or denominator.",
    "source": "Evaluating Statistical Claims 3.pdf",
    "sourceQuestionNumber": "3.6",
    "ocr": true
  },
  {
    "id": "ocr-00567",
    "subject": "math",
    "domain": "Problem-Solving and Data Analysis",
    "skill": "Ratios, Rates, Proportions, and Units",
    "group": "Problem-Solving and Data Analysis — Ratios, Rates, Proportions, and Units",
    "difficulty": "unknown",
    "passage": "",
    "question": "Ratios, Rates, Proportions, and Units 1 19 eseansor Shaquan has 7 red cards and 28 blve cards. What isthe ratio of red ‘ards to blue cards that Shaquan has?",
    "choices": [
      {
        "id": "A",
        "text": "Attod"
      },
      {
        "id": "B",
        "text": "Batt"
      },
      {
        "id": "C",
        "text": "c.1%7"
      },
      {
        "id": "D",
        "text": "D.7t01"
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "List the two quantities being compared and keep their order consistent.",
    "hint2": "Set up equivalent ratios or cross-multiply.",
    "hint3": "Check the units and whether the final ratio matches what the question asks for.",
    "source": "Ratios, Rates, Proportions, and Units 1.pdf",
    "sourceQuestionNumber": "1.9",
    "ocr": true
  },
  {
    "id": "ocr-00612",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Equations",
    "group": "Algebra — Linear Equations",
    "difficulty": "unknown",
    "passage": "",
    "question": "Linear Equations in One Variable 1 19 eciocatr",
    "choices": [
      {
        "id": "A",
        "text": "Agn-2"
      },
      {
        "id": "B",
        "text": "Bant2 ©.20-3"
      },
      {
        "id": "C",
        "text": "Cathy has n CDs. Gerry has 3 more than twice the number of CDs that Cathy has. n terms of, how many GOs does Gerry have?"
      },
      {
        "id": "D",
        "text": "D.2n+3"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Linear Equations in One Variable 1.pdf",
    "sourceQuestionNumber": "1.9",
    "ocr": true
  },
  {
    "id": "ocr-00676",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Inequalities",
    "group": "Algebra — Linear Inequalities",
    "difficulty": "unknown",
    "passage": "",
    "question": "vas zecer5 For a 3.week period ina town in linos, the lowest recorded temperature was 31 degrees Fahrenhelt (“F) and the highest recorded temperature was 67°F. Which inequality is true for any recorded temperature fin \"Fin this town for this Beek petiod?",
    "choices": [
      {
        "id": "A",
        "text": "ALD os"
      },
      {
        "id": "B",
        "text": "Bt>6r"
      },
      {
        "id": "C",
        "text": "cast<e7"
      },
      {
        "id": "D",
        "text": "Dtsat"
      }
    ],
    "correctAnswer": "C",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Linear Inequalities 1.pdf",
    "sourceQuestionNumber": "1.15",
    "ocr": true
  },
  {
    "id": "ocr-00686",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Equations",
    "group": "Algebra — Linear Equations",
    "difficulty": "unknown",
    "passage": "",
    "question": "39 sees Inthe xy-plane, ne kis defined by x-+y =: Line perpendicular tone",
    "choices": [
      {
        "id": "A",
        "text": "and the y-ntrcepto ine is (033). Which of the following isan equation oft 2 Axty=3"
      },
      {
        "id": "B",
        "text": "Bxty=-3"
      },
      {
        "id": "C",
        "text": "Cx-ya3"
      },
      {
        "id": "D",
        "text": "Dx-y=-3"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Linear Equations in Two Variables 3.pdf",
    "sourceQuestionNumber": "3.9",
    "ocr": true
  },
  {
    "id": "ocr-00723",
    "subject": "math",
    "domain": "Advanced Math",
    "skill": "Equivalent Expressions",
    "group": "Advanced Math — Equivalent Expressions",
    "difficulty": "unknown",
    "passage": "",
    "question": "Equivalent Expressions 3",
    "choices": [
      {
        "id": "A",
        "text": "Ame 8.20 cz"
      },
      {
        "id": "B",
        "text": "Bi -scbteD. (ax +3)(5x? — bx +4) =20x9 -9x?—2x +12."
      },
      {
        "id": "C",
        "text": "constants, Whats the value of ab ?"
      },
      {
        "id": "D",
        "text": "Dao"
      }
    ],
    "correctAnswer": "C",
    "explanation": "",
    "hint1": "Identify the given information and the exact quantity the question asks you to find.",
    "hint2": "Choose the equation, formula, or representation that connects the givens to the unknown.",
    "hint3": "Substitute carefully and check the result in the original conditions.",
    "source": "Equivalent Expressions 3.pdf",
    "sourceQuestionNumber": "3.1",
    "ocr": true
  },
  {
    "id": "ocr-00754",
    "subject": "math",
    "domain": "Problem-Solving and Data Analysis",
    "skill": "One-Variable Data",
    "group": "Problem-Solving and Data Analysis — One-Variable Data",
    "difficulty": "unknown",
    "passage": "",
    "question": "‘The median number of bursts The mean number of bursts",
    "choices": [
      {
        "id": "A",
        "text": "Aland I"
      },
      {
        "id": "B",
        "text": "B.tenly"
      },
      {
        "id": "C",
        "text": "c.tlonly . Nether nor i 312 sepsnace"
      },
      {
        "id": "D",
        "text": "Data set A consists ofthe heights of 75 objects and has a mean of 25 meters. Dataset 8 consists ofthe heights ‘of 50 objects and has a mean of 65 meters. Data set C consists of the heights ofthe 125 objects from data sets A ‘and B. Whats the mean, in meters, of data sot C?"
      }
    ],
    "correctAnswer": "41",
    "explanation": "",
    "hint1": "Identify exactly which statistic or quantity the question asks about.",
    "hint2": "Use the table, graph, or numerical data directly before doing extra calculations.",
    "hint3": "Check that your calculation uses the correct rows, categories, or denominator.",
    "source": "One-Variable Data 3.pdf",
    "sourceQuestionNumber": "3.12",
    "ocr": true
  },
  {
    "id": "ocr-00791",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Equations",
    "group": "Algebra — Linear Equations",
    "difficulty": "unknown",
    "passage": "",
    "question": "was 2ssabais OO Inthe xy-plane, a line has a slope of 6 and passes through the point (0,8). Which ofthe folowing is an equation ofthis tine?",
    "choices": [
      {
        "id": "A",
        "text": "Ay= 6x48"
      },
      {
        "id": "B",
        "text": "B y= 6x48"
      },
      {
        "id": "C",
        "text": "Cys 6x46"
      },
      {
        "id": "D",
        "text": "Dy=8x+48"
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Linear Equations in Two Variables 1.pdf",
    "sourceQuestionNumber": "1.13",
    "ocr": true
  },
  {
    "id": "ocr-00823",
    "subject": "math",
    "domain": "Advanced Math",
    "skill": "Equivalent Expressions",
    "group": "Advanced Math — Equivalent Expressions",
    "difficulty": "unknown",
    "passage": "",
    "question": "2n albfiese +64 Whi ofthe fatowing is equvaint the expression above?",
    "choices": [
      {
        "id": "A",
        "text": "Alt af +8"
      },
      {
        "id": "B",
        "text": "Biixt at <5"
      },
      {
        "id": "C",
        "text": "Cx 3 +5"
      },
      {
        "id": "D",
        "text": "D.ie- 3 8"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Identify the given information and the exact quantity the question asks you to find.",
    "hint2": "Choose the equation, formula, or representation that connects the givens to the unknown.",
    "hint3": "Substitute carefully and check the result in the original conditions.",
    "source": "Equivalent Expressions 2.pdf",
    "sourceQuestionNumber": "2.11",
    "ocr": true
  },
  {
    "id": "ocr-00886",
    "subject": "math",
    "domain": "Geometry and Trigonometry",
    "skill": "Lines, Angles, and Triangles",
    "group": "Geometry and Trigonometry — Lines, Angles, and Triangles",
    "difficulty": "unknown",
    "passage": "",
    "question": "Note: Figure not drawn to sae Inthe figure shown, lines and s ave parallel and ine m intersects both ines. y < 65, which ofthe following must be true?",
    "choices": [
      {
        "id": "A",
        "text": "Awels"
      },
      {
        "id": "B",
        "text": "Be> 15"
      },
      {
        "id": "C",
        "text": "Carty < 180"
      },
      {
        "id": "D",
        "text": "Det y> 180 25 astecrzt “Tangle ABC is similar to wiangle XYZ, such that A, B, and C correspond to X, ¥, and Z respectively. The lenath of each side of tangle XYZ is 2 times the lenath of ts corresponding sie in viangle ABC. The measure Of side AB ts 18. Whatie the ressure of side XY?"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Draw or label the relevant lengths, angles, or shapes from the prompt.",
    "hint2": "Choose the geometric relationship or formula that connects the given information to the unknown.",
    "hint3": "Check units and use the diagram to make sure the result is geometrically reasonable.",
    "source": "Lines, Angles, and Triangles 2.pdf",
    "sourceQuestionNumber": "2.5",
    "ocr": true
  },
  {
    "id": "ocr-00901",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Inequalities",
    "group": "Algebra — Linear Inequalities",
    "difficulty": "unknown",
    "passage": "",
    "question": "‘37 Sbfsised Cc ‘The triangle inequality theorem states thatthe sum of any two sides of a triangle must be greater than the length ‘ofthe thie side. Ifa triangle has side lengths af 6 and 12, which inequality represents the possible lengths, , of ‘the thi side ofthe triangle?",
    "choices": [
      {
        "id": "A",
        "text": "Ar<is"
      },
      {
        "id": "B",
        "text": "B2>18"
      },
      {
        "id": "C",
        "text": "cé<2<l8"
      },
      {
        "id": "D",
        "text": "Die <Gore> 18"
      }
    ],
    "correctAnswer": "C",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Linear Inequalities 3.pdf",
    "sourceQuestionNumber": "3.7",
    "ocr": true
  },
  {
    "id": "ocr-00908",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Functions",
    "group": "Algebra — Linear Functions",
    "difficulty": "unknown",
    "passage": "",
    "question": "Nonlinear Functions 2 24 fesato23 rs ‘Arectangular volleyball court has an area of 162 square meters. ifthe length ofthe courtis twice the wicth, what isthe width ofthe court, in meters?",
    "choices": [
      {
        "id": "A",
        "text": "ag"
      },
      {
        "id": "B",
        "text": "B18"
      },
      {
        "id": "C",
        "text": "c27"
      },
      {
        "id": "D",
        "text": "D4"
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Nonlinear Functions 2.pdf",
    "sourceQuestionNumber": "2.1",
    "ocr": true
  },
  {
    "id": "ocr-00945",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Functions",
    "group": "Algebra — Linear Functions",
    "difficulty": "unknown",
    "passage": "",
    "question": "Nonlinear Functions 3 Question# 1",
    "choices": [
      {
        "id": "A",
        "text": "At 82 ca"
      },
      {
        "id": "B",
        "text": "Bi olerease = 26e-4F=32 The quacate funtion hs defined as shown. the xy-plane, the graph of Y=)intersects the x-ais athe points (0 Oand (2.0) where tis a"
      },
      {
        "id": "C",
        "text": "constant. What isthe value of ¢?"
      },
      {
        "id": "D",
        "text": "De"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Nonlinear Functions 3.pdf",
    "sourceQuestionNumber": "3.1",
    "ocr": true
  },
  {
    "id": "ocr-00955",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Functions",
    "group": "Algebra — Linear Functions",
    "difficulty": "unknown",
    "passage": "",
    "question": "Nonlinear Functions 3 sn 707sst09 “The function fis defined by x) = 0¢+3)x +1). The graph of fin the xy- plane isa parabola. Which of the following intervals contains the x= ‘coordinate ofthe vertex of the graph of f?",
    "choices": [
      {
        "id": "A",
        "text": "Andex<-3"
      },
      {
        "id": "B",
        "text": "B-3<x<t"
      },
      {
        "id": "C",
        "text": "CG 1<x<3"
      },
      {
        "id": "D",
        "text": "D 3<x<4"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Nonlinear Functions 3.pdf",
    "sourceQuestionNumber": "3.11",
    "ocr": true
  },
  {
    "id": "ocr-00959",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Functions",
    "group": "Algebra — Linear Functions",
    "difficulty": "unknown",
    "passage": "",
    "question": "Nonlinear Functions 3",
    "choices": [
      {
        "id": "A",
        "text": "Actonly B.tlonly"
      },
      {
        "id": "B",
        "text": "BIS otcescu ‘The functions f and g are defined by the given equations, where x > 0, Which ofthe following equations isplays, a8 a constant or coefficient, the maximum value ofthe function it defines, where 2 > 0? 1. fla) = 33(0.4)\"*> 1. g(2) = 33(0.16)(0.4)*-?"
      },
      {
        "id": "C",
        "text": "C.tand i"
      },
      {
        "id": "D",
        "text": "D. Neither I nor t"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Nonlinear Functions 3.pdf",
    "sourceQuestionNumber": "3.15",
    "ocr": true
  },
  {
    "id": "ocr-00980",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Functions",
    "group": "Algebra — Linear Functions",
    "difficulty": "unknown",
    "passage": "",
    "question": "Nonlinear Functions 3 336 AddKetet fle) = a2? +42 +6 Inthe given quadratic function, a and c are constants, The graph of y = f(z) in the xy-plane isa parabola that ‘opens upward! and has a vertex atthe point (hk), where h and are constants. it < Oand f(—9) = f(8), hich ofthe following must be true? Le<0 Wa>d",
    "choices": [
      {
        "id": "A",
        "text": "Atonly"
      },
      {
        "id": "B",
        "text": "B.tlonly"
      },
      {
        "id": "C",
        "text": "C.tand i"
      },
      {
        "id": "D",
        "text": "D. Neither | nor"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Nonlinear Functions 3.pdf",
    "sourceQuestionNumber": "3.36",
    "ocr": true
  },
  {
    "id": "ocr-00989",
    "subject": "math",
    "domain": "Algebra",
    "skill": "Linear Functions",
    "group": "Algebra — Linear Functions",
    "difficulty": "unknown",
    "passage": "",
    "question": "34s eveanaes [An auditorium has seats for 1,800 people. Tickets to attend a show atthe auditorium currently cost $4.00. For each $1.00 increase tothe ticket price, 100 fewer tickets willbe sold. Ths situation can be modeled by the equation ‘y= 1002 + 1,4002 + 7,200, where 2 represents the increase in ticket pric, in dollars, and y represents the revenue in",
    "choices": [
      {
        "id": "A",
        "text": "Ad"
      },
      {
        "id": "B",
        "text": "BT"
      },
      {
        "id": "C",
        "text": "cu 0.18"
      },
      {
        "id": "D",
        "text": "dollars, rom ticket sales. this equation is graphed inthe xy-plane, at what value of isthe maximum ofthe graph?"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Nonlinear Functions 3.pdf",
    "sourceQuestionNumber": "3.45",
    "ocr": true
  },
  {
    "id": "ocr-01015",
    "subject": "math",
    "domain": "Advanced Math",
    "skill": "Nonlinear Equations and Systems",
    "group": "Advanced Math — Nonlinear Equations and Systems",
    "difficulty": "unknown",
    "passage": "",
    "question": "v-3313 pa =0013",
    "choices": [
      {
        "id": "A",
        "text": "ately *"
      },
      {
        "id": "B",
        "text": "Bood volume, Va human can be determined using the equation ven ©\" =H, where Vpis the plasma volume and His the hematocrit (the fraction of blood volume that is ed blood cel). Which of the flowing"
      },
      {
        "id": "C",
        "text": "comet expreses the hemocttn terms ofthe bleed volime an the plasma volume? Ve"
      },
      {
        "id": "D",
        "text": "D. 0.606 22 crete"
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Nonlinear Equations and Systems 2.pdf",
    "sourceQuestionNumber": "2.12",
    "ocr": true
  },
  {
    "id": "ocr-01032",
    "subject": "math",
    "domain": "Advanced Math",
    "skill": "Nonlinear Equations and Systems",
    "group": "Advanced Math — Nonlinear Equations and Systems",
    "difficulty": "unknown",
    "passage": "",
    "question": "229 wes0a 4a? — Te = -36 ‘what isthe postive solution tothe given equation?",
    "choices": [
      {
        "id": "A",
        "text": "ad"
      },
      {
        "id": "B",
        "text": "By"
      },
      {
        "id": "C",
        "text": "cd"
      },
      {
        "id": "D",
        "text": "DT"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Identify the quantities and what the question asks you to find.",
    "hint2": "Translate the relationship into a linear equation or use slope/intercept form.",
    "hint3": "Use the given values to check the equation and make sure the result answers the exact question.",
    "source": "Nonlinear Equations and Systems 2.pdf",
    "sourceQuestionNumber": "2.29",
    "ocr": true
  },
  {
    "id": "ocr-01042",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Central Ideas and Details",
    "group": "Information and Ideas — Central Ideas and Details",
    "difficulty": "unknown",
    "passage": "",
    "question": ". Miranda played a crucial rote in influencing the content and distribution of \"Letter to the Spanish Americans.\" . âLetter to the Spanish Americans\" persuaded many people in Latin America to pursue national independence, 37 4aseses2 Ina paper about p--n planar perovskite solar cells (one of several perovskite cell architectures designed to",
    "choices": [
      {
        "id": "A",
        "text": "at capturing and storing solar power."
      },
      {
        "id": "B",
        "text": "B.Itis more expensive when manufacturing at scale than are processes for fabricating ETLs used in other perovskite solar cellarchitectures, C. typically entails a greater loss of nanoparticle solution than do ather established approaches for ETL fabrication, D.Itis somewhat imprecise and therefore limits the potential effectiveness of p-i-n planar perovskite solar cells"
      },
      {
        "id": "C",
        "text": "collect and store solar power), Lyndsey MeMllon-Browm etal. describe a method for fabricating te cell's âelectronic transport layer (ETL) using a spray coating, Conventional ETL fabrication is eccomplshed using a solution of nanoparticles, The pracess can result in loss of up to 80% ofthe solution, increasing the cost of manufacturing at scsleâan issue that may be obviated by spray coating fabrieation, which the researchers"
      },
      {
        "id": "D",
        "text": "describe as \"highly reproducible, concise, and practical* âWhat does the text most stronaly suggest about conventional ETL fabrication? {Its less suitable for manufacturing large volumes of planar p-i-n perovskite solar cells than an alternative fabrication method may be,"
      }
    ],
    "correctAnswer": "C",
    "explanation": "",
    "hint1": "Focus on what the question asks you to identify, not on every detail in the passage.",
    "hint2": "Find the sentence or evidence that most directly supports the claim you need.",
    "hint3": "Eliminate choices that add information, overstate the passage, or rely on evidence that is not actually present.",
    "source": "Central Ideas and Details 3.pdf",
    "sourceQuestionNumber": "3.6",
    "ocr": true
  },
  {
    "id": "ocr-01048",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Central Ideas and Details",
    "group": "Information and Ideas — Central Ideas and Details",
    "difficulty": "unknown",
    "passage": "",
    "question": "â312, s7ez7721 _niiclal leaves area developing renewable energy technology that mimics the process of photosynthesis in plants. These",
    "choices": [
      {
        "id": "A",
        "text": "A. energy source, âThe recent increase in the commercial use of artificial leaves as an energy source has encouraged many scientists to"
      },
      {
        "id": "B",
        "text": "B. research ways to improve the technology. Artificial leaves split water molecules into oxygen and hydrogen ges using catalysts more efficiently than plants do using the process of photosynthesis. Artificial leaves were developed to mimic the natural process of photosynthesis in plants in order to store energy for long .term commercial use 3132418672 _â_Flecironie music pioneer Wendy Carls is credited withthe music for thre feature flms: Clockwork Orange (1971), The âShining (1980), and Tron (1982). However, her musical score for A Clockwork Orange is mostly made up of her arrangements âof Ludwig van Beethover's work. Also, almost al the music thet she and Rachel Ekind composed for The Shining was unused by director Stanley Kubrick. t did not appear inthe fm, Of the thee flms, Tron isthe one in which audiences ean hear the most of Carios's original compositions,"
      },
      {
        "id": "C",
        "text": "Continued research and development in atficiateaf technology is needed before the devices can be widely used as an"
      },
      {
        "id": "D",
        "text": "devices are silicon-based solar cells coated in chemical catalysts that activate reactions that split water molecules into hydrogen and oxygen gas. The technology, while generating lots of intrest, isnot yet commercially viable as a large-scale âenergy source. To meet this challenge, scientists from many fields ae researching ways to store, transport, and distribute the energy the devices produce while other scientists are working to improve the cost and efficiency ofthe devices Which choice best states the main idea ofthe text?"
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Focus on what the question asks you to identify, not on every detail in the passage.",
    "hint2": "Find the sentence or evidence that most directly supports the claim you need.",
    "hint3": "Eliminate choices that add information, overstate the passage, or rely on evidence that is not actually present.",
    "source": "Central Ideas and Details 3.pdf",
    "sourceQuestionNumber": "3.12",
    "ocr": true
  },
  {
    "id": "ocr-01070",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Text Structure and Purpose",
    "group": "Craft and Structure — Text Structure and Purpose",
    "difficulty": "unknown",
    "passage": "",
    "question": "The stranger still stood in the exact middle of the cottage, where he had first planted himself. His singularity lmpelled.a closer scrutiny, A lean, gloomy figure, Har dark and lank, mattedly streaked over his brow. His sunken pitfalls of eyes were ringed by ingigo halo, and played with an innocuous sort of lightring: the gleam without the",
    "choices": [
      {
        "id": "A",
        "text": "another species through nonrepraductive means. The genetic material can then be transferred \"vertically\" inthe second soeciesthat i, through reproductive inheritance. Scientist Atma lvancevie and her team have hypothesized infection by invertebrate parasites as a mechanism of horizontal gene transfer between vertebrate species: while feeding. a parasite could acauite @ gene from one host, then celocae to host fromacferent vertebrate species and transfer the gene toitin turn. âWhich choice best describes the function af the underlined portion inthe text as @ whole? A. ILexplains why parasites are less susceptible to horizontal gene transfer than thelr hosts are. B. It cafes why some genes are more likely to be transferred horizontally than others ar. C Itcontrasts how horizontal ene transfer occurs among vertebrates with how It occurs amona invertebrates."
      },
      {
        "id": "B",
        "text": "bolt. The whole man was dripping. He stood in a puddle onthe bare oak floor: his strange walkng-stick vertically resting at his side âWhich choice best states the function of the undlerined sentence inthe overall structure ofthe text? âA. Ielaborates onthe previous sentence's description ofthe character B.Itintroduces the setting that is described in the sentences that follow."
      },
      {
        "id": "C",
        "text": "C. establishes a contrat with the description in the previous sentence."
      },
      {
        "id": "D",
        "text": "Dit sets up the character description presented inthe sentences that follow, 2% erzernee Horizontal gene transfer occurs when an organism of one species acquires genetic material from an organism of"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Identify the role the highlighted sentence or detail plays in the passage.",
    "hint2": "Consider what the writer is trying to accomplish at that point: introduce, illustrate, contrast, support, or conclude.",
    "hint3": "Choose the answer that describes the function in context rather than merely repeating the sentence content.",
    "source": "Text Structure and Purpose 2.pdf",
    "sourceQuestionNumber": "2.13",
    "ocr": true
  },
  {
    "id": "ocr-01083",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Transitions",
    "group": "Expression of Ideas — Transitions",
    "difficulty": "unknown",
    "passage": "",
    "question": "Which choice completes the text with the most logical transition? âA. adaltionally, 8. utimately,",
    "choices": [
      {
        "id": "A",
        "text": "A.lnadsition,"
      },
      {
        "id": "B",
        "text": "B.ncontrast, Â©. Specifically,"
      },
      {
        "id": "C",
        "text": "C. accordingly, . consequently, 33 eerie I.2009, the Craft and Folk Art Museum in Los Angeles hosted a special exibition, Suefos/Yume, showcasing the âworks of local sculptor Dora de Larios. As suggested by the show's title (suefos and yume mean âÃ©reams\" in Spanish and Japanese, respectively), de Laros's at reflects a mix of cultural influences. __her workis. ârounded in the artistic traditions of both Mexico and Japan âWhich choice completes the text withthe most logical transition?"
      },
      {
        "id": "D",
        "text": "D. Therefore, 34 Se0esoda âwhen one looks atthe dark craggy vista in Hitoshi Fugo's evocative photo series, one's mind might wander off to the cratered surfaces of faraway planets. ___ isthe seriesâ til, Flying Frying Pan, that brings one back to Earth, reminding the viewer that each photo is actualy a close-up view of a familiar household object: frying pan,"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Read the sentence before and after the blank.",
    "hint2": "Decide what relationship the ideas have: contrast, cause, continuation, example, or sequence.",
    "hint3": "Pick the transition that expresses that relationship precisely, not merely one that sounds natural.",
    "source": "Transitions 3.pdf",
    "sourceQuestionNumber": "3.2",
    "ocr": true
  },
  {
    "id": "ocr-01088",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Transitions",
    "group": "Expression of Ideas — Transitions",
    "difficulty": "unknown",
    "passage": "",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      {
        "id": "A",
        "text": "A. therefore,"
      },
      {
        "id": "B",
        "text": "Buin fact,"
      },
      {
        "id": "C",
        "text": "C. moreover, .though, 38 rreedcas 42017 study of sign language learners tested the role of iconictyâthe similarity of a sign to the thing it represente~in language acquisition, The study found that the greater the iconicty of a sig, the more likely it wae tohave been learned the correlation between acquisition and iconcity was lower than that between âacquisition and another factor studied: sign frequency. âWhich choice completes the text withthe most logical transition? Avlinfact, B.Inother words, Â©. Granted,"
      },
      {
        "id": "D",
        "text": "DLAs a result, 39 stags: âTulip mania\"âthe rapid rise and sudden fll ofthe price of tulip bulbs in seventeenth-century Amsterdamâis often cited as an example ofthe peris of rampant market speculation. However, recent research has âdemonstrated thatthe episode was neither as frenzied nor as disastrous as has been thought. The popular myth urtecnding shat bo vagented sch exma-shepiicetn."
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Read the sentence before and after the blank.",
    "hint2": "Decide what relationship the ideas have: contrast, cause, continuation, example, or sequence.",
    "hint3": "Pick the transition that expresses that relationship precisely, not merely one that sounds natural.",
    "source": "Transitions 3.pdf",
    "sourceQuestionNumber": "3.7",
    "ocr": true
  },
  {
    "id": "ocr-01105",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Command of Evidence",
    "group": "Information and Ideas — Command of Evidence",
    "difficulty": "unknown",
    "passage": "",
    "question": "âand shelter for many; and rents and taxes throughout Northern England that were not merely high but predatory?",
    "choices": [
      {
        "id": "A",
        "text": "after an Extended Period in Water 2.2 180 SEs 160 222 140 SBE2 120 BBs Es 100 282 80 Seal B S222 6 232â 4 Oo Seal A ZE3 20 Seal C 0 a 8 Dayl Day2 Sleep on land Research suggests that REM sleepin animals is homaostatcally egulted: animals compensate for periods of REM slep deprivation by increasing subsequent REM sleep. When an land, ur seals gt enough REM sleep, but"
      },
      {
        "id": "B",
        "text": "Be cebtebe Fur Seal REM Sleep on Land"
      },
      {
        "id": "C",
        "text": "conclided that REM sleep may not be homeostatialy regulated in fur seal, citing as evidence the foc thatthe pmenpenprecpayistey"
      },
      {
        "id": "D",
        "text": "duting the weeks they're inthe water, they get almost none. na study of fur sealsâ seep habits, researchers recorded the REM sleep (asa percentage af baseline) of fr seals once they had returned o land. They"
      }
    ],
    "correctAnswer": "C",
    "explanation": "",
    "hint1": "Focus on what the question asks you to identify, not on every detail in the passage.",
    "hint2": "Find the sentence or evidence that most directly supports the claim you need.",
    "hint3": "Eliminate choices that add information, overstate the passage, or rely on evidence that is not actually present.",
    "source": "Command of Evidence 3.pdf",
    "sourceQuestionNumber": "3.4",
    "ocr": true
  },
  {
    "id": "ocr-01236",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Command of Evidence",
    "group": "Information and Ideas — Command of Evidence",
    "difficulty": "unknown",
    "passage": "",
    "question": "210 sfbedio The Land of Enchantment is a 1906 travel book by Lilian Whiting. In the book, which describes the experience of {traveling through the southwestern United States by train, Whiting reflects on the escape from everyday ie that âsuch a journey provides: âWhich quotation from The Lang af Enchantment most effectively ilustrates the claim? |A. âThe opportunities and advantages already offered and constantly increasing ae greator than would at fist be",
    "choices": [
      {
        "id": "A",
        "text": "am essesssa âSense and Sensibility isan 1811 nave by Jane Austen. Inthe novel, Austen describes Marianne Dashwood's ability {to persuade others ofthe rightness of her atistc judgments, as is evident when Marianne visits with John Willoughby, a potential suitor âWhich quotation from Sense and Sensibility most effectively illustrates the cai? âA. âAbove all, when she heard him declare, that of music and dancing he was passionately fond, she gave him such a look of approbation as secured the largest share of his discourse to herself forthe rest of hs stay\" Â£B. \"Ther taste was strikingly alke. The same books, the same passages were idolized by eachâor it any"
      },
      {
        "id": "B",
        "text": "brightness of her eyes could be displayedâ"
      },
      {
        "id": "C",
        "text": "considered possibleâ 8. \"The social and the picturesque charm ofthe ong journey is singularly enhanced by the leisurely stops made forrereshmentâ C. \"The eal journey begins, of course, at Chicago, and as these trains leave in the evening the traveller fares forth inthe seclusion of his berthâ 1. âOne experiences a certain sense of detachment from ordinary day and daylight duties that is extilarating*"
      },
      {
        "id": "D",
        "text": "difference appeared, any objection arose, it lasted no longer than tithe force of her arguments and the"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Focus on what the question asks you to identify, not on every detail in the passage.",
    "hint2": "Find the sentence or evidence that most directly supports the claim you need.",
    "hint3": "Eliminate choices that add information, overstate the passage, or rely on evidence that is not actually present.",
    "source": "Command of Evidence 2.pdf",
    "sourceQuestionNumber": "2.1",
    "ocr": true
  },
  {
    "id": "ocr-01239",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Command of Evidence",
    "group": "Information and Ideas — Command of Evidence",
    "difficulty": "unknown",
    "passage": "",
    "question": "na a ol ol, Soe âAnchorage and Fairbanks, the student concludes thatthe two cities show a similar pattern in the month hours of âsunshine from April to September Which choice best describes data from the graph that support the student's conclusion? [A The monthly hours of sunshine in both Anchorage and Fabanks hold steady in June and July before",
    "choices": [
      {
        "id": "A",
        "text": "atterneonâ (\"it was a beautiful day in balmy May and the sun shone pleasantly on Mr. Cornelius Johnson's very spruce Prince Albert sult of grey as he alighted from the train in Washingtonâ"
      },
      {
        "id": "B",
        "text": "beginning to dectine ln August 8, The monthly hours of sunshine in both Anchorage and Fabanks increase from Aprito June and then"
      },
      {
        "id": "C",
        "text": "C. Anchorage and Fairoanks both have less than 200 monthly hours of sunshine from April to September, '. Anchorage and Fairbanks both have more than 300 monthly hours of sunshine from Apri to June and less than 200 hours from July to September 2x3 2scaesta âtr, Comelus Johnson, Office-Seeker\" isa 1900 short story by Paul Laurence Dunbar. In the story, the narrator describes Mr. Cornelius Johnson's appearance as conveying his exaggerated sense of his importance: âWhich quotation from *Mr. Cornelius Johnson Office-Seekerâ most effectively illustrates the claim? |A.*He carried himself alvays as fhe were passing under his own tiumohalarch* 1. \"The grey Prince Albert as scrupulously buttoned about his frm, and a shiny top hat replaced the felt of the"
      },
      {
        "id": "D",
        "text": "decrease from June to September."
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Focus on what the question asks you to identify, not on every detail in the passage.",
    "hint2": "Find the sentence or evidence that most directly supports the claim you need.",
    "hint3": "Eliminate choices that add information, overstate the passage, or rely on evidence that is not actually present.",
    "source": "Command of Evidence 2.pdf",
    "sourceQuestionNumber": "2.13",
    "ocr": true
  },
  {
    "id": "ocr-01295",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Boundaries",
    "group": "Standard English Conventions — Boundaries",
    "difficulty": "unknown",
    "passage": "",
    "question": "RE INS COMATNNS TNS OEEE Â£0 Chet E COREITENS 1) The COENERINS CO nae Eee",
    "choices": [
      {
        "id": "A",
        "text": "A.olfense. According"
      },
      {
        "id": "B",
        "text": "B.offense, according"
      },
      {
        "id": "C",
        "text": "C.offense according"
      },
      {
        "id": "D",
        "text": "D.offense and according 28 scstase Itis generally tue that technological change is linear process, in which ance-useful technologies are replaced by new and better ___ the reawakening of interest inthe steam engine (fram advocates of carban-nevtral ail ârave reminds us that ostensibly obsolete technelogies may be brought back into service to address society's changing needs. âwhich choice completes the text so that it conforms tothe conventions of Standard English? âones, even so; 8. ones even s, C. ones; even so, D.ones, even so, 29 zsÂ«t68 In 2017, artists isabel and Ruben Toledo redesigned the costumes and sets for The Miami Cty Ballet's production âof The _ to reviewers, the Toledos' designs helped infuse the production with elements of Miamâs Latin âAmerican culture"
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Read the full passage and identify exactly what the question is asking.",
    "hint2": "Use the surrounding context and the most relevant evidence or grammatical rule.",
    "hint3": "Eliminate choices that are too broad, too narrow, unsupported, or inconsistent with the passage.",
    "source": "Boundaries 2.pdf",
    "sourceQuestionNumber": "2.7",
    "ocr": true
  },
  {
    "id": "ocr-01315",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Boundaries",
    "group": "Standard English Conventions — Boundaries",
    "difficulty": "unknown",
    "passage": "",
    "question": "âWhich choles completes the tect so thet tt conforms to the conventions of Stendesd English? âadjustments prior 8. adjustments, prior",
    "choices": [
      {
        "id": "A",
        "text": "adjustment, Proe Â©. adustments and prior 228 assi%Ã© The Mesoamerican city of Teotihuacan featured a uniquely egalitarian urban housing infrastructure. Bult between the first, and seventh centuries CE, Teothuacan housed its residents (as many as 200,000, by some â__ in acomnplex of"
      },
      {
        "id": "B",
        "text": "B estimates), Â©. estimatesâ"
      },
      {
        "id": "C",
        "text": "comfortable apartments of comparable size. Which choice completes the texts that it conforms tothe convetions of Standard English? âAcestimates)"
      },
      {
        "id": "D",
        "text": "Deestimates"
      }
    ],
    "correctAnswer": "C",
    "explanation": "",
    "hint1": "Read the full passage and identify exactly what the question is asking.",
    "hint2": "Use the surrounding context and the most relevant evidence or grammatical rule.",
    "hint3": "Eliminate choices that are too broad, too narrow, unsupported, or inconsistent with the passage.",
    "source": "Boundaries 2.pdf",
    "sourceQuestionNumber": "2.27",
    "ocr": true
  },
  {
    "id": "ocr-01390",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Form, Structure, and Sense",
    "group": "Standard English Conventions — Form, Structure, and Sense",
    "difficulty": "unknown",
    "passage": "",
    "question": "8. were tying",
    "choices": [
      {
        "id": "A",
        "text": "Aas enabled 8. enable Cis enabling Dienables wag c2ecs2s6 It you try on one of artist Nick Cave's signature Soundsuits, you can expect to swish, rustle, or clang every time âyou move, Cave makes his sults out of found objects, everything from ceramic bird to broken record players. He carefully considers the sound an object makes before using __in a suit. \\Which choice comptes the text so that ft conforms te the conventions of Standard English? Athi"
      },
      {
        "id": "B",
        "text": "bly wa Aesazace âWanda Diaz-Merced is an astrophysicist who lost her sight when she was young. Diaz-Merced's condition inspired her to develop software that can translate scientific data into sound. Sound-based tools___scientists to"
      },
      {
        "id": "C",
        "text": "Chae flown"
      },
      {
        "id": "D",
        "text": "detect subtle patterns in data. Such pattems may nat be evident in traditional graphs. âWhich choice completes the text so that it conforms tothe conventions of Standard English?"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Read the full passage and identify exactly what the question is asking.",
    "hint2": "Use the surrounding context and the most relevant evidence or grammatical rule.",
    "hint3": "Eliminate choices that are too broad, too narrow, unsupported, or inconsistent with the passage.",
    "source": "Form, Structure, and Sense 1.pdf",
    "sourceQuestionNumber": "1.17",
    "ocr": true
  },
  {
    "id": "ocr-01410",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Form, Structure, and Sense",
    "group": "Standard English Conventions — Form, Structure, and Sense",
    "difficulty": "unknown",
    "passage": "",
    "question": "2. survived",
    "choices": [
      {
        "id": "A",
        "text": "Aare"
      },
      {
        "id": "B",
        "text": "B.was have been D.were 1391440463\" Unsupervised machine learning is an approach that computer scientist lke Nina Miolane use to engineer artificial inteligence technologies. t involves taining computer algorithms to organize unlabeled datasets, Mutttask learning is âanother approach. involves training computer models to perform multiple tasks atthe same time, Which choice completes the text so that it conforms to the conventions of Standard English? A Those"
      },
      {
        "id": "C",
        "text": "C. would survive"
      },
      {
        "id": "D",
        "text": "Dsuvives 1.38 es180056 Mary Madden of Ohio __a fierce advocate of women's voting rights in the late 1800s. The dedication of Madden and her {fellow activists was rewarded in 1920, when the Nineteenth Amendment tothe US Constitution guaranteed American women the right to vote Which choice comaletes the text so that it conforms tothe conventions of Standard English?"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Read the full passage and identify exactly what the question is asking.",
    "hint2": "Use the surrounding context and the most relevant evidence or grammatical rule.",
    "hint3": "Eliminate choices that are too broad, too narrow, unsupported, or inconsistent with the passage.",
    "source": "Form, Structure, and Sense 1.pdf",
    "sourceQuestionNumber": "1.37",
    "ocr": true
  },
  {
    "id": "ocr-01437",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Boundaries",
    "group": "Standard English Conventions — Boundaries",
    "difficulty": "unknown",
    "passage": "",
    "question": "8. fibers but",
    "choices": [
      {
        "id": "A",
        "text": "Alife"
      },
      {
        "id": "B",
        "text": "B.life; Cult: Dale, We radacz âA subseasonal weather forecast attempts to predict weather conditions three to four weeks in_its predictions are therefore more short-term than those of the seasonal forecast, which attempts to predict the |weather more than a month in advance, âWhich choice completes the text so that it conforms tothe conventions of Standard English? A.advance, 8. advance"
      },
      {
        "id": "C",
        "text": "C-fibers"
      },
      {
        "id": "D",
        "text": "Difibers, but 13s sfecesse Emperor Ashoka ruled the Maurya Empire in South Asa from roughly 270 to 232 BCE. He is known for enforcing @ âmoral code called the Law of Piety, which established the sanctity of animal the just treatment of the âeldery, and the abolition ofthe slave trade. âWhich choice completes the text so that it conforms tothe conventions of Standard English?"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Read the full passage and identify exactly what the question is asking.",
    "hint2": "Use the surrounding context and the most relevant evidence or grammatical rule.",
    "hint3": "Eliminate choices that are too broad, too narrow, unsupported, or inconsistent with the passage.",
    "source": "Boundaries 1.pdf",
    "sourceQuestionNumber": "1.2",
    "ocr": true
  },
  {
    "id": "ocr-01447",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Boundaries",
    "group": "Standard English Conventions — Boundaries",
    "difficulty": "unknown",
    "passage": "",
    "question": "8. themselves, themselves. And",
    "choices": [
      {
        "id": "A",
        "text": "Ablend, with"
      },
      {
        "id": "B",
        "text": "B. blend. with"
      },
      {
        "id": "C",
        "text": "C.blend; with Diblend with tg Teasore2 I.2000, Nora de Hoyos Comstock, herself an owner ofa successful consulting fm, sought to increase Latina representation in corporate founded Las Comadres para las Americas, an international community that for âover two decades has served as a resource and information network for Latina business professionals. Which choice completes the text so that it conforms tothe conventions of Standard English? A. settings she"
      },
      {
        "id": "D",
        "text": "D.themselves was acces793 In 1976, the Inuit rock group Sikumiut recorded the album People of the ce. Though anly their fist recor, it shows a band already skied atthe dificult task of making music that sounds easy and fun. On songs lke âUtirumavunga,âLucassie Koperqualukâs guitar ifs effortlessly Charlie Adams's delightully catchy vocal melodies âWhich choice completes the text so that it conforms tothe conventions of Standard English?"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Read the full passage and identify exactly what the question is asking.",
    "hint2": "Use the surrounding context and the most relevant evidence or grammatical rule.",
    "hint3": "Eliminate choices that are too broad, too narrow, unsupported, or inconsistent with the passage.",
    "source": "Boundaries 1.pdf",
    "sourceQuestionNumber": "1.12",
    "ocr": true
  },
  {
    "id": "ocr-01504",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "8. postpone",
    "choices": [
      {
        "id": "A",
        "text": "A.Denying a. entering c. carrying"
      },
      {
        "id": "B",
        "text": "b. Hearing"
      },
      {
        "id": "C",
        "text": "C. protect"
      },
      {
        "id": "D",
        "text": "Di decorate Me asotaes âThe following text is adapted from Sui Sin Fars 1912 short story Â°Mrs. Spring Fragrance.â Me. and Mrs. Spring Fragrance immigrated to the United States from China Mrs. Spring Fragrance was unaware that Mr. Spring Fragrance, tired withthe day's business, had thrown himself down on the bamboo settee onthe veranda, and that although his eyes were engaged in scanning the pages of the Chinese World, his ears could nat helpceceiving the words which were borne to him through the open window. âAs used in the text, what does the word âreceivingâ most nearly mean?"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 1.pdf",
    "sourceQuestionNumber": "1.12",
    "ocr": true
  },
  {
    "id": "ocr-01508",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      {
        "id": "A",
        "text": "A.veritying 8. multiplying"
      },
      {
        "id": "B",
        "text": "B inicator of . mativaion for Dicaitciem of ws exsbtaer In the mid-nineteenth century, some abolitionist newspapers __ westward migration in the United States; by printing a letter that described the easy fortunes and high salaries miners could make in California during the Gold Fush,Frederick Douglass's newspaper North Star was one such publication that inspired readers to relocate âWhich choice completes the text withthe most logical and precise word or phrase?"
      },
      {
        "id": "C",
        "text": "C. comforting"
      },
      {
        "id": "D",
        "text": "Diensuring ur pszasta âAccording to statistician Nassim Nicholas Taleb, the best way to predict the amount of ime @ nonperishable entity (such as a bulaing ora technology) will continue to exist isto examine how long It has survived Sofa, n this view, an item's age isthe strongest _ how much longer it wl lst âWhich choice completes the text withthe most logical and precise word or phrase? A. uncertainty about"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 1.pdf",
    "sourceQuestionNumber": "1.16",
    "ocr": true
  },
  {
    "id": "ocr-01513",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "122 arosssse âSumerian civilization (which lasted from around 3300 to 2000 BCE) _many concepts that persist into present-day civilizations: for example, the first description of the seven-day week appears in the Sumerian Epic of Gilgamesh âWhich choice completes the text withthe most logical and precise word or phrase?",
    "choices": [
      {
        "id": "A",
        "text": "A. transformed"
      },
      {
        "id": "B",
        "text": "B. introduced"
      },
      {
        "id": "C",
        "text": "C.iherted"
      },
      {
        "id": "D",
        "text": "Di overlooked"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 1.pdf",
    "sourceQuestionNumber": "1.21",
    "ocr": true
  },
  {
    "id": "ocr-01515",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "Words in Context 1",
    "choices": [
      {
        "id": "A",
        "text": "A.creatve B. bold"
      },
      {
        "id": "B",
        "text": "buildings. Instead of using standard shapes and colors, she typically explored imovaive forms and daring hues. âWhich choice completes the text with the most logical and precise word or phrase?"
      },
      {
        "id": "C",
        "text": "conducting key experiments that selenite later used a the bass for thir on investigation that led othe fist âered detection ofa gravitational wave in 2016. âWhich choice completes the text with the most logical and precise word or phrase? âA foundational 8. supplementary C. repetitive D.inatfective 126 eoebe1e9 âAs anarcitectin Los Angeles inthe 1950s, Helan Liu Fong became known fr avoiding __designs in her"
      },
      {
        "id": "D",
        "text": "das asroicre Physicist Joseph Weber performed __ werk in gravitational wave research nthe 1960s nd 1970s,"
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 1.pdf",
    "sourceQuestionNumber": "1.23",
    "ocr": true
  },
  {
    "id": "ocr-01521",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "Which choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      {
        "id": "A",
        "text": "Acadmired"
      },
      {
        "id": "B",
        "text": "B. disagreed with"
      },
      {
        "id": "C",
        "text": "C. warmed . depended on 130 asreerss âThe following texts adapted from Mohsin Hamidâs 2017 novel Et West. Saeed lives with his mother and father âOn cloudless nights after a daytime rain, Seeds father would sometimes bring out the telescape, andthe family âwould sip green tea on ther balcony, enoying a breeze, and take tums to look up at objects whose light, often, had been emitted before any of these three viewers had been bornâlight fram other centuries, only now reaching Earth. (Â©2017 by Mohsin Hamid âAs used in the text, what does the word âreachingâ most nearly mean? A. Arriving at 8. Consulting with Â©. Running to"
      },
      {
        "id": "D",
        "text": "D.Ciinging to a zacdze1 âSome people have speculated that two helmets with attached horns discovered in Denmark in 1842 belonged to Vikings, but scholars have long been skeptical. Archaeologist Helle Vandkilde and colleagues recently provided"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 1.pdf",
    "sourceQuestionNumber": "1.29",
    "ocr": true
  },
  {
    "id": "ocr-01522",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "âVikings, but scholars have long been skeptical. Archaeologist Helle Vandkiide end colleagues recently provided radiocarbon dates for the helmets, and their findings ___ scholarsâ skepticism: the helmets date to the Nordic",
    "choices": [
      {
        "id": "A",
        "text": "Anticipate B.inspect"
      },
      {
        "id": "B",
        "text": "Bronze Age, centuries before the Vikings existed. âwhich choice completes the text withthe most logical and precise word or phrase?"
      },
      {
        "id": "C",
        "text": "C.roveal"
      },
      {
        "id": "D",
        "text": "Dajustty"
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 1.pdf",
    "sourceQuestionNumber": "1.3",
    "ocr": true
  },
  {
    "id": "ocr-01525",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "âWhich choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      {
        "id": "A",
        "text": "A.reviewed 8. defied"
      },
      {
        "id": "B",
        "text": "B required unintended unknown 135 bso7!0!__[atyo, the main character of Gene Wolfe's navel Solder ofthe Mist ia man in ancient Greece. He completely loses his memory whenever he sleeps. So, before sleeping, Latro records the important experiences ofeach day on a scoll,carefully choosing which ones to"
      },
      {
        "id": "C",
        "text": "C.respected"
      },
      {
        "id": "D",
        "text": "D. prevented 113% 73906056 _Ronyaung Kim creatively captures the Korean American immigrant experience inher novel Clay Walls by writing about a {arrily from three ___ perspectives. The first section ofthe novels from the mother Haesuâs perspective the second is {rom the father Chun's perspective, and the last is from the daughter Fayes perspective. Which choice comaletes the text with the most logical and precise word? Adistinct"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 1.pdf",
    "sourceQuestionNumber": "1.33",
    "ocr": true
  },
  {
    "id": "ocr-01538",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "WoT 44cet75 Atticially delivering biomolecules to plant cells is an important component of protecting plants from pathogens,",
    "choices": [
      {
        "id": "A",
        "text": "A. conceptualize B. neglect"
      },
      {
        "id": "B",
        "text": "butitiscfficult to transmit biomolecules through the layers ofthe plant cell wall. Markita del Carpio Landry and her colleagues have shown that it may be possible to___ this problem by transmitting molecules through âcarbon nanotubes, which can cross cel walls. âWhich choice completes the text withthe most logical and precige word or phrase?"
      },
      {
        "id": "C",
        "text": "C.ilustrate"
      },
      {
        "id": "D",
        "text": "D. overcome"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 1.pdf",
    "sourceQuestionNumber": "1.46",
    "ocr": true
  },
  {
    "id": "ocr-01541",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "âWhich choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      {
        "id": "A",
        "text": "A. surpassed by 8. comparable to"
      },
      {
        "id": "B",
        "text": "be preserved. âWhich choice completes the text withthe most logical and precise word or phrase? A. catastrophic B.eusive C.abrupt Da limminent ast Taste Particle physicist like Ayana Holloway Arce and Aida El-Khadra spend much oftheir time __ what is invisible to the naked eye: using sophisticated technology they closely examine the behavior of subatomic particles, the smallest detectable parts of matter. Which shunt eomumiptme tine teat writs the meet lowles) ere) eremieur vere ex vheaseâÂ®"
      },
      {
        "id": "C",
        "text": "C. independent of"
      },
      {
        "id": "D",
        "text": "D. obtained from 1so antec âThe Cambrian explosion ges its name from the sudden appearance and rapid lversification of animal remains in âthe fossil record about 541 millon years ago, during the Cambrian period. Some scientists argue that this __ âchange inthe fossil record might be because ofa sift in many organisms to body types that were more likely to"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 1.pdf",
    "sourceQuestionNumber": "1.49",
    "ocr": true
  },
  {
    "id": "ocr-01552",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Transitions",
    "group": "Expression of Ideas — Transitions",
    "difficulty": "unknown",
    "passage": "",
    "question": "8. Previously,",
    "choices": [
      {
        "id": "A",
        "text": "artworks, and results have been impressive overall. these bacterial stainsâwhich can metabolize âcenturiesâ worth of ol, ele, dit, and other surface impurities without creating harmful byproductsâhave proven âmore effective than tracitional chemical cleaning methods. âWhich choice completes the text withthe most logical transition? A. However,"
      },
      {
        "id": "B",
        "text": "B.Inmany cases, Â©.Asarosuit, . Adsitionaly, 26 zecfot âAlexander Lawrence Posey (1873-1908) varied his focus and tone depending on the gen in which he was âwriting. n hs pooty, he used heartfelt language to evoke the beauty and peacefulness of his natural surroundings in his journalism, __he employed humor and satie to comment on politcal ssues affecting his Muskogee Creek community. âWhich choice completes the text withthe most logical transition?"
      },
      {
        "id": "C",
        "text": "C.As a result,"
      },
      {
        "id": "D",
        "text": "D.Likewise, 23 s0r%ce For years, biologists have experimented with using grime-eating bacteria rather than harsh chemicals to lean"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Read the sentence before and after the blank.",
    "hint2": "Decide what relationship the ideas have: contrast, cause, continuation, example, or sequence.",
    "hint3": "Pick the transition that expresses that relationship precisely, not merely one that sounds natural.",
    "source": "Transitions 2.pdf",
    "sourceQuestionNumber": "2.2",
    "ocr": true
  },
  {
    "id": "ocr-01562",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Transitions",
    "group": "Expression of Ideas — Transitions",
    "difficulty": "unknown",
    "passage": "",
    "question": "Which choice completes the text with the most logical transition? Thus,",
    "choices": [
      {
        "id": "A",
        "text": "A. For example, 8. Therefore, Â©. Simiary, D.Finally, 2a rrecoaos âwhen in the 1800s, geologist fist realized that much of Earth had once been covered by great sheets of ice, some theorized thatthe phenomenon was cycical, occurring at regular intervals. Each Ice Age Is so destructive, nossesh that it lnreseihy ermews the eemiineiiea) euricheren mf ihe tpatierseenr _omahrunfote smre coabhn te"
      },
      {
        "id": "B",
        "text": "B.n addition,"
      },
      {
        "id": "C",
        "text": "C.By comparison, . Specialy, 213 25zctecs__Scjentlsts long debated the origins of chondrules tiny glass beads that formed in meteors billions of years ago. For decades,"
      },
      {
        "id": "D",
        "text": "different theories were proposed, from lightning strikes to powerful rock collision, but none had sufficient evidentiary âsupport._ scientists found strong evidence that chondrules were formed by shock waves in nearby nebulae. Which choice completes the text with the most logical transition?"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Read the sentence before and after the blank.",
    "hint2": "Decide what relationship the ideas have: contrast, cause, continuation, example, or sequence.",
    "hint3": "Pick the transition that expresses that relationship precisely, not merely one that sounds natural.",
    "source": "Transitions 2.pdf",
    "sourceQuestionNumber": "2.12",
    "ocr": true
  },
  {
    "id": "ocr-01575",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "âWhich choice completes the text with the most logical and precise word or phrase?",
    "choices": [
      {
        "id": "A",
        "text": "A. hypothesis .afinity anomaly"
      },
      {
        "id": "B",
        "text": "but biologists Shalene Jha and Claire Kremen showed that beesâ behavior is inconsistent with this prediction if flowers in dense patches are __: bees will forage beyond patches of low species richness to acquire multiple resource types. âWhich choice completes the text withthe most logical and precise word or phrase? âA depleted Â£8. homogeneous"
      },
      {
        "id": "C",
        "text": "C.immature Di dispersed 39 stone Investigating whether shared false visual memorlesâspeeific but inaccurate and widely held recollections of images such as product logos~are caused by people's previous ___ incorrect rentions ofthe images, researchers Deepasi Prasad and Wma Bainbridge found tha, infact, such memaries are often not explained by âfamiliarity with erroneous versions of the images."
      },
      {
        "id": "D",
        "text": "D.caraboration 3a sacsaase Some foraging models predict thatthe distance bees travel when foraging will decline as floral density increases,"
      }
    ],
    "correctAnswer": "C",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 3.pdf",
    "sourceQuestionNumber": "3.7",
    "ocr": true
  },
  {
    "id": "ocr-01580",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "âsurprising that the existence of planets in such systems has lacked _ explanation. Roman Rafikov and Kedron Silsbee shed light onthe subject when they used modeling o determine a complex set of factors that âcould support planetsâ development. âWhich choice completes the text withthe most logical and precise word or phrase?",
    "choices": [
      {
        "id": "A",
        "text": "Aa discernible 8.2 straightfomard"
      },
      {
        "id": "B",
        "text": "Bas crasre66 Itis by no means ___ to recognize the influence of Dutch painter Hieronymus Bosch on Al Banisade's paintings; indeed, Banisadr himself cites Bosch as an inspiration. However, some scholars have suggested that the ancient Mesopotamian poem Epic of Gilgamesh may have had afar greater impact on Banisadr's work. âWhich choice completes the text with the most logical and precise word or phrase? A. substantial 8. satisfying . unimportant D. appropriate 316 fesfoaab âSome scientists have suggested that mammals in the Mesozoic era were nota very___ group, but"
      },
      {
        "id": "C",
        "text": "C.aninconclusive"
      },
      {
        "id": "D",
        "text": "Danunbiased"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 3.pdf",
    "sourceQuestionNumber": "3.12",
    "ocr": true
  },
  {
    "id": "ocr-01641",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Text Structure and Purpose",
    "group": "Craft and Structure — Text Structure and Purpose",
    "difficulty": "unknown",
    "passage": "",
    "question": "Tae BOE SE TOW atlas in relatively warm climates in southeast âsia as wel. âhich choice best states the function of the undertined portion inthe text as a wile?",
    "choices": [
      {
        "id": "A",
        "text": "A. Itdismisses as untrue the research presented inthe previous sentence, 8. defines @ term used inthe description that follows inthe rest ofthe sentence."
      },
      {
        "id": "B",
        "text": "Black freedom seekers leaving the South before the US Chil War. Much of the historical evidence ofthis help, âcomes from Incigenous oral traditions and from autobiographies written by the freedom seekers. One such natrative is Jecmain Loaven'sautobiograpty, which tells about how NeshnabÃ© (Potawatomi vllagets offered im âood, lodging. and directions during his 1835 journey trom Tennessee to Canada, âWhich choice best describes the function af the underined sentence? |. tprovides an example ofan autobiography that describes help given by an indigenous people to @ Black âfreedom secker. 8B. It shows why Loguen decided to writ in great detal about his experiences traveling from Tennessee to Canada in his autobiography. â¬.ttargues that autobiographies are particularly important sources of information about geography in the United States before the Chil War Dit suggests that most historians believe that NeshrabÃ© vllagers vere more successful in assisting freedom âccoheve than other pammlie vere,"
      },
      {
        "id": "C",
        "text": "C.ttemphasizes the main goal of the research introduced inthe previous sentence."
      },
      {
        "id": "D",
        "text": "D. tt provides context that clarifies the significance ofthe information that follows inthe rest of the sentence. 1s ease Historians Tia Miles and Roy E, Finkenbine have both documented the assistance Indigenous peoples gave to"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Identify the role the highlighted sentence or detail plays in the passage.",
    "hint2": "Consider what the writer is trying to accomplish at that point: introduce, illustrate, contrast, support, or conclude.",
    "hint3": "Choose the answer that describes the function in context rather than merely repeating the sentence content.",
    "source": "Text Structure and Purpose 1.pdf",
    "sourceQuestionNumber": "1.2",
    "ocr": true
  },
  {
    "id": "ocr-01648",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Text Structure and Purpose",
    "group": "Craft and Structure — Text Structure and Purpose",
    "difficulty": "unknown",
    "passage": "",
    "question": "Text, Structure, and Purpose 1 19 seesord âThe following text is rom Holly Goldberg Sloan's 2017 novel Shot More than two years ago my parents bought a piano from some people who were moving to Utah, Mom and",
    "choices": [
      {
        "id": "A",
        "text": "A. It explains why the naratoralvays wanted a piano close to her bedroom. 8. Itestablshes how the narator feels about the plano,"
      },
      {
        "id": "B",
        "text": "but pretty much hate the thing from the second twas carted ito the halvay upstais, which s ight nxt to my bedroom. The piano glared at me. It was lke a songbird in a cage. it wanted to beset fre. {Â©2017 by Holy Goldberg Sloan âWhich choice best slates the main purpose ofthe text?"
      },
      {
        "id": "C",
        "text": "C. It suggest thatthe narator's brothers ae talented piano players. Dit describes the event that led the narrators parents to buy a piano. 140 veen4ae Jackie Ormes'sTorehy Brown in Di to Harlem (1037-38) was the fst comic strip bya Black woman to aposar ina widely read newspaper. The stip tals the story of Torch, young woman who leaves Missisinpite became âa performer in Now York City. Torchy's story reflects the experience of the Great Migration (1910-1970), when"
      },
      {
        "id": "D",
        "text": "Dad gave it to my brothers and me for Cvitmas. had to act realy happy because it was auch abig present,"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Identify the role the highlighted sentence or detail plays in the passage.",
    "hint2": "Consider what the writer is trying to accomplish at that point: introduce, illustrate, contrast, support, or conclude.",
    "hint3": "Choose the answer that describes the function in context rather than merely repeating the sentence content.",
    "source": "Text Structure and Purpose 1.pdf",
    "sourceQuestionNumber": "1.9",
    "ocr": true
  },
  {
    "id": "ocr-01664",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Form, Structure, and Sense",
    "group": "Standard English Conventions — Form, Structure, and Sense",
    "difficulty": "unknown",
    "passage": "",
    "question": "â¬. the use of drinking straws by Sumerians in ancient Mesopotamia happened Â©. ancient Mesopotamia was home to Sumerians who used drinking straws 23 cszsmea âThe human brain is primed to recognize faces~s0 much so that, due toa perceptual tendency called pareidolia, will even find faces in clouds, wooden doors pieces of fut, and other faceless inanimate objects. Researcher Susan Magsamen has focused her work on better understanding this everyday phenomenon. âWhich choice completes the text so that it conforms to the conventions of Standard English?",
    "choices": [
      {
        "id": "A",
        "text": "Ashe"
      },
      {
        "id": "B",
        "text": "B.they"
      },
      {
        "id": "C",
        "text": "cit"
      },
      {
        "id": "D",
        "text": "D.those 2 seDKese7 Official measurements ofthe Mississippi River's length vary: according tothe US Geologie Survey, the rivers 2300 mites long, whereas the Envconmental Protection Agency records its length as 2,320 miles. This disparity âcanbe explained in part by the fact that rivers such asthe Mississipi expand and contract as____seciment. âWhich choice completes the text so that it conforms to the conventions of Standard English? A. they accumulate 8. one accumulates been"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Read the full passage and identify exactly what the question is asking.",
    "hint2": "Use the surrounding context and the most relevant evidence or grammatical rule.",
    "hint3": "Eliminate choices that are too broad, too narrow, unsupported, or inconsistent with the passage.",
    "source": "Form, Structure, and Sense 2.pdf",
    "sourceQuestionNumber": "2.2",
    "ocr": true
  },
  {
    "id": "ocr-01669",
    "subject": "reading-writing",
    "domain": "Standard English Conventions",
    "skill": "Form, Structure, and Sense",
    "group": "Standard English Conventions — Form, Structure, and Sense",
    "difficulty": "unknown",
    "passage": "",
    "question": "8. are evoking",
    "choices": [
      {
        "id": "A",
        "text": "A.ascended 8. will ascend C.ascends Duis ascencing 29Â° ssoserta Nuhdd al-Haddd, known as Feruz, was one ofthe mast beloved Lebanese singers of the twentieth century. Her"
      },
      {
        "id": "B",
        "text": "broad singing repertoireâwhich included traditional forms, such asthe Arabic qasida and maqam, alongside âmodern pop and azz styleslentFaruz a timeless, cross-generational appeal, ___her the moniker âthe soul âof Lebanon.â âWhich choice completes the text so that it conforms tothe conventions of Standard English? Aenea"
      },
      {
        "id": "C",
        "text": "C.have evoked"
      },
      {
        "id": "D",
        "text": "Di evoke 28 so2eÂ«soa By the time Hawaian king Kamehameha Il_ the throne, the number of longhorn cattle, frst introduced to âthe islands in 1793, had drastically increased, and so too had the need for panialo (Hawaiian cowboys) to manage âthe ile herds tha then roamed throughout the voleanic terrain, âWhich choice completes the text so that it conforms tothe conventions of Standard English?"
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Read the full passage and identify exactly what the question is asking.",
    "hint2": "Use the surrounding context and the most relevant evidence or grammatical rule.",
    "hint3": "Eliminate choices that are too broad, too narrow, unsupported, or inconsistent with the passage.",
    "source": "Form, Structure, and Sense 2.pdf",
    "sourceQuestionNumber": "2.7",
    "ocr": true
  },
  {
    "id": "ocr-01712",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Central Ideas and Details",
    "group": "Information and Ideas — Central Ideas and Details",
    "difficulty": "unknown",
    "passage": "",
    "question": "olf of i IES",
    "choices": [
      {
        "id": "A",
        "text": "Assessment Test Domain skill Ditticutty sar âReading and Writing | Information and Central Ideas and Teas Details mec 1D: 2312021b"
      },
      {
        "id": "B",
        "text": "B. Historians believe thatthe Gestaprincipum Polonorum provides more evidence for Siemomyst existence than it does {for Mieszko Il Lambert's existence."
      },
      {
        "id": "C",
        "text": "C. Historians agree that Siemomyst ruled Poland much later than Mieszko Il Lambert. Historians find the orally transmitted stores affirming the existence of Mieszko I Lambert to be more convincing than siemlar stories about Semomysl 227 2070 Question ID 2312021b"
      },
      {
        "id": "D",
        "text": "documented figures lke Siemomyst, who is said to have rule inthe 10th century but whose historical actuality is disputed. Siemomyst appears in the Gesta princjpum Polonorum, a chronicle of medieval Polish history written between 1112 and 1178. However, the chronicles documentation of Slemomys relies on oral tradition, unlike its records of ater rulers. âAccording tothe text, what isa difference between how historians view Siemomysl and how they view Mieszko Il Lambert? |A Historians agree that Mieszko Il Lambert existe, but disagree about whether Siemomys! existed."
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Focus on what the question asks you to identify, not on every detail in the passage.",
    "hint2": "Find the sentence or evidence that most directly supports the claim you need.",
    "hint3": "Eliminate choices that add information, overstate the passage, or rely on evidence that is not actually present.",
    "source": "Central Ideas and Details 2.pdf",
    "sourceQuestionNumber": "2.26",
    "ocr": true
  },
  {
    "id": "ocr-01744",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Transitions",
    "group": "Expression of Ideas — Transitions",
    "difficulty": "unknown",
    "passage": "",
    "question": "âA. Inother words, 8, Regarless,",
    "choices": [
      {
        "id": "A",
        "text": "A. Similar, 8. For instance, C.Nevertheess, D.Asaresuit,"
      },
      {
        "id": "B",
        "text": "buttresses eliminated this need. ___ Gothic cathedrals could be bult with thinner, higher wal âWhich choice completes the text withthe most logical transition?"
      },
      {
        "id": "C",
        "text": "C.In conclusion,"
      },
      {
        "id": "D",
        "text": "D.Forexamle, 1S otedeaca In Gothic architecture, tying buttresses ae large arches that help support a building's exterior walls. Before the Gothic era, cathedralsâ heavy celings had tobe supported by tick, short walls, but the invention offing"
      }
    ],
    "correctAnswer": "C",
    "explanation": "",
    "hint1": "Read the sentence before and after the blank.",
    "hint2": "Decide what relationship the ideas have: contrast, cause, continuation, example, or sequence.",
    "hint3": "Pick the transition that expresses that relationship precisely, not merely one that sounds natural.",
    "source": "Transitions 1.pdf",
    "sourceQuestionNumber": "1.3",
    "ocr": true
  },
  {
    "id": "ocr-01758",
    "subject": "reading-writing",
    "domain": "Expression of Ideas",
    "skill": "Transitions",
    "group": "Expression of Ideas — Transitions",
    "difficulty": "unknown",
    "passage": "",
    "question": "Which choice completes the text with the most logical transition?",
    "choices": [
      {
        "id": "A",
        "text": "A For example,"
      },
      {
        "id": "B",
        "text": "B. Specifically,"
      },
      {
        "id": "C",
        "text": "C.Firsty, 2. By contrast, waa ascaras In 1891, dancer and choreographer Loie Fuller frst performed her celebrated Serpentine Dance, artfully twiting her long, flowing skit to create striking visual effects In 1886, cinema pioneers Auguste and Louis Lumire made a groundbreaking short fim of Fuller's dance. âWhich choice completes the text withthe most logical transition? A. However, 8. Inconctusion, Cuter,"
      },
      {
        "id": "D",
        "text": "Dilnather words, aaa aseonase Riley Blackâthe author of critically acclaimed books such as My Beloved Brontosaurus (2013)âis best known for âwriting about dinosaurs, but she has also conducted hands-on fieldwork her feldwork has included Paleontological digs in Utah, Montana, ane Wyoming, and her dinosaur fossil dlscoveres can be seen at places âsuch asthe Carnegie Museum of Natural History,"
      }
    ],
    "correctAnswer": "D",
    "explanation": "",
    "hint1": "Read the sentence before and after the blank.",
    "hint2": "Decide what relationship the ideas have: contrast, cause, continuation, example, or sequence.",
    "hint3": "Pick the transition that expresses that relationship precisely, not merely one that sounds natural.",
    "source": "Transitions 1.pdf",
    "sourceQuestionNumber": "1.17",
    "ocr": true
  },
  {
    "id": "ocr-01783",
    "subject": "reading-writing",
    "domain": "Information and Ideas",
    "skill": "Inferences",
    "group": "Information and Ideas — Inferences",
    "difficulty": "unknown",
    "passage": "",
    "question": "Inferences1 1S esaesoo1 -Archeeologits have been debating the origin of arate frm of lad found in Shang dynasty (1766-1046 BCE)",
    "choices": [
      {
        "id": "A",
        "text": "atifacts, but ne conclusive evidence has been presented, Whats intriguing is that bronze artifacts from China"
      },
      {
        "id": "B",
        "text": "bronze artifacts since its presence was dlacovered in China in the 1990s. Different researchers have proposed theories on which regions ofthe worl would have ha the raw materials containing the specific lead in these"
      },
      {
        "id": "C",
        "text": "C. bronze was used fora short time during the Shang dynasty before diferent metals were used to make aritact. Â©, methods used to analyze bronze arifacs are not usefulon pices that are dated ater the Shang dynasty 16 dbboesad Oif-off-Broadway theaters emerged in the late 1950 asa rebelion against mainstream Broadway theaters in New York, freeing artists to create productions that were more experimental than typical Broadway shows. One such artist was playwright Marla irene FornÃ©s. Working with off-off Broadway theaters enabled FornÃ©s not only to"
      },
      {
        "id": "D",
        "text": "dated after the Shang dynasty do not contain this form of lea, suggesting that âWihich choice most lgically comptes the text? |. Shang dynasty bronze places are rare and therefor mare valuable than those from other te periods 28. the source of some ofthe raw materials used to make bronze was exploited only uti the end of the Shang dynasty"
      }
    ],
    "correctAnswer": "B",
    "explanation": "",
    "hint1": "Focus on what the question asks you to identify, not on every detail in the passage.",
    "hint2": "Find the sentence or evidence that most directly supports the claim you need.",
    "hint3": "Eliminate choices that add information, overstate the passage, or rely on evidence that is not actually present.",
    "source": "Inferences 1.pdf",
    "sourceQuestionNumber": "1.5",
    "ocr": true
  },
  {
    "id": "ocr-01796",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "identifying broad similarities between two seemingly different phenomena, Hu used information about how ants. âmove inside colonies to calculate how the particles of ight that make up laser beams trav! through snow. âWhich choice comptes the text withthe most logical and precise word or phrase? â2 collaboration",
    "choices": [
      {
        "id": "A",
        "text": "A. exposed B.asserted"
      },
      {
        "id": "B",
        "text": "Bian accessory .a contradiction"
      },
      {
        "id": "C",
        "text": "C. discovered D. doubted"
      },
      {
        "id": "D",
        "text": "D.ananalogy 25 sbasbosi âA journalist and well-respected art eit of nineteenth-century Ertan, Lady Elizabeth Rigby Eastlake did not hesitate to publish reviews that went against popular opinion. One of her most divisive works was an essay âquestioning the idea of photography as an emerging medium for fine atin the essay, Eastake thatthe value of photographs was informational rather than creative. âWhich choice completes the text withthe most logical and precige word or phrase?"
      }
    ],
    "correctAnswer": "C",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 2.pdf",
    "sourceQuestionNumber": "2.3",
    "ocr": true
  },
  {
    "id": "ocr-01801",
    "subject": "reading-writing",
    "domain": "Craft and Structure",
    "skill": "Words in Context",
    "group": "Craft and Structure — Words in Context",
    "difficulty": "unknown",
    "passage": "",
    "question": "âWhich choice completes the text withthe most logical and precige word or phrase?",
    "choices": [
      {
        "id": "A",
        "text": "A. recommend"
      },
      {
        "id": "B",
        "text": "B.citcize Â©. impede"
      },
      {
        "id": "C",
        "text": "C. ongoing uniform"
      },
      {
        "id": "D",
        "text": "D.eonstruct 210 bees2759 Mineralogical differences are detectable in samples collected from two locations onthe near-Earth astereid Ryugu, but such differences may not indicate substantial compositional variation in the asteroid Cosmochemist Kazuhide Nagashima and colleagues note that atthe small scale of the samples, the dstribution of minerals is unlikely tobe. âWhich choice completes the text with the most logical and precise word or phrase? A.neglected 8. redundant"
      }
    ],
    "correctAnswer": "A",
    "explanation": "",
    "hint1": "Use the surrounding sentence to determine what the blank needs to mean.",
    "hint2": "Replace the blank with your own word before looking for a choice.",
    "hint3": "Check that the choice fits both the meaning and tone of the passage.",
    "source": "Words in Context 2.pdf",
    "sourceQuestionNumber": "2.8",
    "ocr": true
  }
];
