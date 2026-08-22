/**
 * Mock question bank — mirrors /data/questions.json exactly.
 * Exists so the static site works when opened directly (file://) without
 * a local server, since fetch() on local JSON is blocked by CORS in that mode.
 *
 * TODO (later phase): replace with a real fetch to /api/questions.
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
  }
];
