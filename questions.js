// USCIS 100 Civics Questions Database
// Questions marked with is65Plus: true are the 20 questions for applicants 65+/20 years

const CATEGORIES = {
    PRINCIPLES: "Principles of American Democracy",
    SYSTEM: "System of Government",
    RIGHTS: "Rights and Responsibilities",
    COLONIAL: "Colonial Period and Independence",
    1800S: "1800s",
    RECENT: "Recent American History",
    GEOGRAPHY: "Geography",
    SYMBOLS: "Symbols and Holidays"
};

const civicsQuestions = [
    // AMERICAN GOVERNMENT - Principles of American Democracy (Questions 1-12)
    {
        id: 1,
        question: "What is the supreme law of the land?",
        answers: ["the Constitution"],
        category: CATEGORIES.PRINCIPLES,
        is65Plus: true
    },
    {
        id: 2,
        question: "What does the Constitution do?",
        answers: [
            "sets up the government",
            "defines the government",
            "protects basic rights of Americans"
        ],
        category: CATEGORIES.PRINCIPLES,
        is65Plus: false
    },
    {
        id: 3,
        question: "The idea of self-government is in the first three words of the Constitution. What are these words?",
        answers: ["We the People"],
        category: CATEGORIES.PRINCIPLES,
        is65Plus: false
    },
    {
        id: 4,
        question: "What is an amendment?",
        answers: [
            "a change (to the Constitution)",
            "an addition (to the Constitution)"
        ],
        category: CATEGORIES.PRINCIPLES,
        is65Plus: false
    },
    {
        id: 5,
        question: "What do we call the first ten amendments to the Constitution?",
        answers: ["the Bill of Rights"],
        category: CATEGORIES.PRINCIPLES,
        is65Plus: true
    },
    {
        id: 6,
        question: "What is one right or freedom from the First Amendment?",
        answers: [
            "speech",
            "religion",
            "assembly",
            "press",
            "petition the government"
        ],
        category: CATEGORIES.PRINCIPLES,
        is65Plus: true
    },
    {
        id: 7,
        question: "How many amendments does the Constitution have?",
        answers: ["twenty-seven (27)"],
        category: CATEGORIES.PRINCIPLES,
        is65Plus: false
    },
    {
        id: 8,
        question: "What did the Declaration of Independence do?",
        answers: [
            "announced our independence (from Great Britain)",
            "declared our independence (from Great Britain)",
            "said that the United States is free (from Great Britain)"
        ],
        category: CATEGORIES.PRINCIPLES,
        is65Plus: false
    },
    {
        id: 9,
        question: "What are two rights in the Declaration of Independence?",
        answers: [
            "life",
            "liberty",
            "pursuit of happiness"
        ],
        category: CATEGORIES.PRINCIPLES,
        is65Plus: false
    },
    {
        id: 10,
        question: "What is freedom of religion?",
        answers: ["You can practice any religion, or not practice a religion."],
        category: CATEGORIES.PRINCIPLES,
        is65Plus: false
    },
    {
        id: 11,
        question: "What is the economic system in the United States?",
        answers: [
            "capitalist economy",
            "market economy"
        ],
        category: CATEGORIES.PRINCIPLES,
        is65Plus: false
    },
    {
        id: 12,
        question: "What is the 'rule of law'?",
        answers: [
            "Everyone must follow the law.",
            "Leaders must obey the law.",
            "Government must obey the law.",
            "No one is above the law."
        ],
        category: CATEGORIES.PRINCIPLES,
        is65Plus: false
    },

    // AMERICAN GOVERNMENT - System of Government (Questions 13-47)
    {
        id: 13,
        question: "Name one branch or part of the government.",
        answers: [
            "Congress",
            "legislative",
            "President",
            "executive",
            "the courts",
            "judicial"
        ],
        category: CATEGORIES.SYSTEM,
        is65Plus: true
    },
    {
        id: 14,
        question: "What stops one branch of government from becoming too powerful?",
        answers: [
            "checks and balances",
            "separation of powers"
        ],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 15,
        question: "Who is in charge of the executive branch?",
        answers: ["the President"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 16,
        question: "Who makes federal laws?",
        answers: [
            "Congress",
            "Senate and House (of Representatives)",
            "(U.S. or national) legislature"
        ],
        category: CATEGORIES.SYSTEM,
        is65Plus: true
    },
    {
        id: 17,
        question: "What are the two parts of the U.S. Congress?",
        answers: ["the Senate and House (of Representatives)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: true
    },
    {
        id: 18,
        question: "How many U.S. Senators are there?",
        answers: ["one hundred (100)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 19,
        question: "We elect a U.S. Senator for how many years?",
        answers: ["six (6)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 20,
        question: "Who is one of your state's U.S. Senators now?",
        answers: ["(Answers will vary by state)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: true,
        isVariable: true,
        variableType: "senator"
    },
    {
        id: 21,
        question: "The House of Representatives has how many voting members?",
        answers: ["four hundred thirty-five (435)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 22,
        question: "We elect a U.S. Representative for how many years?",
        answers: ["two (2)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 23,
        question: "Name your U.S. Representative.",
        answers: ["(Answers will vary by district)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: true,
        isVariable: true,
        variableType: "representative"
    },
    {
        id: 24,
        question: "Who does a U.S. Senator represent?",
        answers: ["all people of the state"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 25,
        question: "Why do some states have more Representatives than other states?",
        answers: [
            "(because of) the state's population",
            "(because) they have more people",
            "(because) some states have more people"
        ],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 26,
        question: "We elect a President for how many years?",
        answers: ["four (4)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: true
    },
    {
        id: 27,
        question: "In what month do we vote for President?",
        answers: ["November"],
        category: CATEGORIES.SYSTEM,
        is65Plus: true
    },
    {
        id: 28,
        question: "What is the name of the President of the United States now?",
        answers: ["(Current President's name)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: true,
        isVariable: true,
        variableType: "president"
    },
    {
        id: 29,
        question: "What is the name of the Vice President of the United States now?",
        answers: ["(Current Vice President's name)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: true,
        isVariable: true,
        variableType: "vicePresident"
    },
    {
        id: 30,
        question: "If the President can no longer serve, who becomes President?",
        answers: ["the Vice President"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 31,
        question: "If both the President and the Vice President can no longer serve, who becomes President?",
        answers: ["the Speaker of the House"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 32,
        question: "Who is the Commander in Chief of the military?",
        answers: ["the President"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 33,
        question: "Who signs bills to become laws?",
        answers: ["the President"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 34,
        question: "Who vetoes bills?",
        answers: ["the President"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 35,
        question: "What does the President's Cabinet do?",
        answers: ["advises the President"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 36,
        question: "What are two Cabinet-level positions?",
        answers: [
            "Secretary of Agriculture",
            "Secretary of Commerce",
            "Secretary of Defense",
            "Secretary of Education",
            "Secretary of Energy",
            "Secretary of Health and Human Services",
            "Secretary of Homeland Security",
            "Secretary of Housing and Urban Development",
            "Secretary of the Interior",
            "Secretary of Labor",
            "Secretary of State",
            "Secretary of Transportation",
            "Secretary of the Treasury",
            "Secretary of Veterans Affairs",
            "Attorney General",
            "Vice President"
        ],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 37,
        question: "What does the judicial branch do?",
        answers: [
            "reviews laws",
            "explains laws",
            "resolves disputes (disagreements)",
            "decides if a law goes against the Constitution"
        ],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 38,
        question: "What is the highest court in the United States?",
        answers: ["the Supreme Court"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 39,
        question: "How many justices are on the Supreme Court?",
        answers: ["nine (9)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 40,
        question: "Who is the Chief Justice of the United States now?",
        answers: ["(Current Chief Justice's name)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: false,
        isVariable: true,
        variableType: "chiefJustice"
    },
    {
        id: 41,
        question: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
        answers: [
            "to print money",
            "to declare war",
            "to create an army",
            "to make treaties"
        ],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 42,
        question: "Under our Constitution, some powers belong to the states. What is one power of the states?",
        answers: [
            "provide schooling and education",
            "provide protection (police)",
            "provide safety (fire departments)",
            "give a driver's license",
            "approve zoning and land use"
        ],
        category: CATEGORIES.SYSTEM,
        is65Plus: false
    },
    {
        id: 43,
        question: "Who is the Governor of your state now?",
        answers: ["(Answers will vary by state)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: true,
        isVariable: true,
        variableType: "governor"
    },
    {
        id: 44,
        question: "What is the capital of your state?",
        answers: ["(Answers will vary by state)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: true,
        isVariable: true,
        variableType: "stateCapital"
    },
    {
        id: 45,
        question: "What are the two major political parties in the United States?",
        answers: ["Democratic and Republican"],
        category: CATEGORIES.SYSTEM,
        is65Plus: true
    },
    {
        id: 46,
        question: "What is the political party of the President now?",
        answers: ["(Current President's party)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: true,
        isVariable: true,
        variableType: "presidentParty"
    },
    {
        id: 47,
        question: "What is the name of the Speaker of the House of Representatives now?",
        answers: ["(Current Speaker's name)"],
        category: CATEGORIES.SYSTEM,
        is65Plus: true,
        isVariable: true,
        variableType: "speaker"
    },

    // AMERICAN GOVERNMENT - Rights and Responsibilities (Questions 48-57)
    {
        id: 48,
        question: "There are four amendments to the Constitution about who can vote. Describe one of them.",
        answers: [
            "Citizens eighteen (18) and older (can vote).",
            "You don't have to pay (a poll tax) to vote.",
            "Any citizen can vote. (Women and men can vote.)",
            "A male citizen of any race (can vote)."
        ],
        category: CATEGORIES.RIGHTS,
        is65Plus: false
    },
    {
        id: 49,
        question: "What is one responsibility that is only for United States citizens?",
        answers: [
            "serve on a jury",
            "vote in a federal election"
        ],
        category: CATEGORIES.RIGHTS,
        is65Plus: true
    },
    {
        id: 50,
        question: "Name one right only for United States citizens.",
        answers: [
            "vote in a federal election",
            "run for federal office"
        ],
        category: CATEGORIES.RIGHTS,
        is65Plus: false
    },
    {
        id: 51,
        question: "What are two rights of everyone living in the United States?",
        answers: [
            "freedom of expression",
            "freedom of speech",
            "freedom of assembly",
            "freedom to petition the government",
            "freedom of religion",
            "the right to bear arms"
        ],
        category: CATEGORIES.RIGHTS,
        is65Plus: false
    },
    {
        id: 52,
        question: "What do we show loyalty to when we say the Pledge of Allegiance?",
        answers: [
            "the United States",
            "the flag"
        ],
        category: CATEGORIES.RIGHTS,
        is65Plus: false
    },
    {
        id: 53,
        question: "What is one promise you make when you become a United States citizen?",
        answers: [
            "give up loyalty to other countries",
            "defend the Constitution and laws of the United States",
            "obey the laws of the United States",
            "serve in the U.S. military (if needed)",
            "serve (do important work for) the nation (if needed)",
            "be loyal to the United States"
        ],
        category: CATEGORIES.RIGHTS,
        is65Plus: false
    },
    {
        id: 54,
        question: "How old do citizens have to be to vote for President?",
        answers: ["eighteen (18) and older"],
        category: CATEGORIES.RIGHTS,
        is65Plus: true
    },
    {
        id: 55,
        question: "What are two ways that Americans can participate in their democracy?",
        answers: [
            "vote",
            "join a political party",
            "help with a campaign",
            "join a civic group",
            "join a community group",
            "give an elected official your opinion on an issue",
            "call Senators and Representatives",
            "publicly support or oppose an issue or policy",
            "run for office",
            "write to a newspaper"
        ],
        category: CATEGORIES.RIGHTS,
        is65Plus: false
    },
    {
        id: 56,
        question: "When is the last day you can send in federal income tax forms?",
        answers: ["April 15"],
        category: CATEGORIES.RIGHTS,
        is65Plus: true
    },
    {
        id: 57,
        question: "When must all men register for the Selective Service?",
        answers: [
            "at age eighteen (18)",
            "between eighteen (18) and twenty-six (26)"
        ],
        category: CATEGORIES.RIGHTS,
        is65Plus: false
    },

    // AMERICAN HISTORY - Colonial Period and Independence (Questions 58-70)
    {
        id: 58,
        question: "What is one reason colonists came to America?",
        answers: [
            "freedom",
            "political liberty",
            "religious freedom",
            "economic opportunity",
            "practice their religion",
            "escape persecution"
        ],
        category: CATEGORIES.COLONIAL,
        is65Plus: false
    },
    {
        id: 59,
        question: "Who lived in America before the Europeans arrived?",
        answers: [
            "American Indians",
            "Native Americans"
        ],
        category: CATEGORIES.COLONIAL,
        is65Plus: false
    },
    {
        id: 60,
        question: "What group of people was taken to America and sold as slaves?",
        answers: [
            "Africans",
            "people from Africa"
        ],
        category: CATEGORIES.COLONIAL,
        is65Plus: false
    },
    {
        id: 61,
        question: "Why did the colonists fight the British?",
        answers: [
            "because of high taxes (taxation without representation)",
            "because the British army stayed in their houses (boarding, quartering)",
            "because they didn't have self-government"
        ],
        category: CATEGORIES.COLONIAL,
        is65Plus: false
    },
    {
        id: 62,
        question: "Who wrote the Declaration of Independence?",
        answers: ["(Thomas) Jefferson"],
        category: CATEGORIES.COLONIAL,
        is65Plus: true
    },
    {
        id: 63,
        question: "When was the Declaration of Independence adopted?",
        answers: ["July 4, 1776"],
        category: CATEGORIES.COLONIAL,
        is65Plus: true
    },
    {
        id: 64,
        question: "There were 13 original states. Name three.",
        answers: [
            "New Hampshire",
            "Massachusetts",
            "Rhode Island",
            "Connecticut",
            "New York",
            "New Jersey",
            "Pennsylvania",
            "Delaware",
            "Maryland",
            "Virginia",
            "North Carolina",
            "South Carolina",
            "Georgia"
        ],
        category: CATEGORIES.COLONIAL,
        is65Plus: false
    },
    {
        id: 65,
        question: "What happened at the Constitutional Convention?",
        answers: [
            "The Constitution was written.",
            "The Founding Fathers wrote the Constitution."
        ],
        category: CATEGORIES.COLONIAL,
        is65Plus: false
    },
    {
        id: 66,
        question: "When was the Constitution written?",
        answers: ["1787"],
        category: CATEGORIES.COLONIAL,
        is65Plus: false
    },
    {
        id: 67,
        question: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
        answers: [
            "(James) Madison",
            "(Alexander) Hamilton",
            "(John) Jay",
            "Publius"
        ],
        category: CATEGORIES.COLONIAL,
        is65Plus: false
    },
    {
        id: 68,
        question: "What is one thing Benjamin Franklin is famous for?",
        answers: [
            "U.S. diplomat",
            "oldest member of the Constitutional Convention",
            "first Postmaster General of the United States",
            "writer of 'Poor Richard's Almanac'",
            "started the first free libraries"
        ],
        category: CATEGORIES.COLONIAL,
        is65Plus: false
    },
    {
        id: 69,
        question: "Who is the 'Father of Our Country'?",
        answers: ["(George) Washington"],
        category: CATEGORIES.COLONIAL,
        is65Plus: true
    },
    {
        id: 70,
        question: "Who was the first President?",
        answers: ["(George) Washington"],
        category: CATEGORIES.COLONIAL,
        is65Plus: true
    },

    // AMERICAN HISTORY - 1800s (Questions 71-77)
    {
        id: 71,
        question: "What territory did the United States buy from France in 1803?",
        answers: [
            "the Louisiana Territory",
            "Louisiana"
        ],
        category: CATEGORIES["1800S"],
        is65Plus: false
    },
    {
        id: 72,
        question: "Name one war fought by the United States in the 1800s.",
        answers: [
            "War of 1812",
            "Mexican-American War",
            "Civil War",
            "Spanish-American War"
        ],
        category: CATEGORIES["1800S"],
        is65Plus: false
    },
    {
        id: 73,
        question: "Name the U.S. war between the North and the South.",
        answers: [
            "the Civil War",
            "the War between the States"
        ],
        category: CATEGORIES["1800S"],
        is65Plus: false
    },
    {
        id: 74,
        question: "Name one problem that led to the Civil War.",
        answers: [
            "slavery",
            "economic reasons",
            "states' rights"
        ],
        category: CATEGORIES["1800S"],
        is65Plus: false
    },
    {
        id: 75,
        question: "What was one important thing that Abraham Lincoln did?",
        answers: [
            "freed the slaves (Emancipation Proclamation)",
            "saved (or preserved) the Union",
            "led the United States during the Civil War"
        ],
        category: CATEGORIES["1800S"],
        is65Plus: true
    },
    {
        id: 76,
        question: "What did the Emancipation Proclamation do?",
        answers: [
            "freed the slaves",
            "freed slaves in the Confederacy",
            "freed slaves in the Confederate states",
            "freed slaves in most Southern states"
        ],
        category: CATEGORIES["1800S"],
        is65Plus: false
    },
    {
        id: 77,
        question: "What did Susan B. Anthony do?",
        answers: [
            "fought for women's rights",
            "fought for civil rights"
        ],
        category: CATEGORIES["1800S"],
        is65Plus: false
    },

    // AMERICAN HISTORY - Recent American History (Questions 78-87)
    {
        id: 78,
        question: "Name one war fought by the United States in the 1900s.",
        answers: [
            "World War I",
            "World War II",
            "Korean War",
            "Vietnam War",
            "(Persian) Gulf War"
        ],
        category: CATEGORIES.RECENT,
        is65Plus: true
    },
    {
        id: 79,
        question: "Who was President during World War I?",
        answers: ["(Woodrow) Wilson"],
        category: CATEGORIES.RECENT,
        is65Plus: false
    },
    {
        id: 80,
        question: "Who was President during the Great Depression and World War II?",
        answers: ["(Franklin) Roosevelt"],
        category: CATEGORIES.RECENT,
        is65Plus: false
    },
    {
        id: 81,
        question: "Who did the United States fight in World War II?",
        answers: ["Japan, Germany, and Italy"],
        category: CATEGORIES.RECENT,
        is65Plus: false
    },
    {
        id: 82,
        question: "Before he was President, Eisenhower was a general. What war was he in?",
        answers: ["World War II"],
        category: CATEGORIES.RECENT,
        is65Plus: false
    },
    {
        id: 83,
        question: "During the Cold War, what was the main concern of the United States?",
        answers: ["Communism"],
        category: CATEGORIES.RECENT,
        is65Plus: false
    },
    {
        id: 84,
        question: "What movement tried to end racial discrimination?",
        answers: ["civil rights (movement)"],
        category: CATEGORIES.RECENT,
        is65Plus: false
    },
    {
        id: 85,
        question: "What did Martin Luther King, Jr. do?",
        answers: [
            "fought for civil rights",
            "worked for equality for all Americans"
        ],
        category: CATEGORIES.RECENT,
        is65Plus: true
    },
    {
        id: 86,
        question: "What major event happened on September 11, 2001, in the United States?",
        answers: [
            "Terrorists attacked the United States.",
            "Terrorists took over two planes and crashed them into the World Trade Center in New York City.",
            "Terrorists took over a plane and crashed into the Pentagon in Virginia.",
            "Terrorists took over a plane originally aimed at Washington D.C. and crashed in a field in Pennsylvania."
        ],
        category: CATEGORIES.RECENT,
        is65Plus: false
    },
    {
        id: 87,
        question: "Name one American Indian tribe in the United States.",
        answers: [
            "Cherokee",
            "Navajo",
            "Sioux",
            "Chippewa",
            "Choctaw",
            "Pueblo",
            "Apache",
            "Iroquois",
            "Creek",
            "Blackfeet",
            "Seminole",
            "Cheyenne",
            "Arawak",
            "Shawnee",
            "Mohegan",
            "Huron",
            "Oneida",
            "Lakota",
            "Crow",
            "Teton",
            "Hopi",
            "Inuit"
        ],
        category: CATEGORIES.RECENT,
        is65Plus: false
    },

    // INTEGRATED CIVICS - Geography (Questions 88-95)
    {
        id: 88,
        question: "Name one of the two longest rivers in the United States.",
        answers: [
            "Missouri (River)",
            "Mississippi (River)"
        ],
        category: CATEGORIES.GEOGRAPHY,
        is65Plus: false
    },
    {
        id: 89,
        question: "What ocean is on the West Coast of the United States?",
        answers: ["Pacific (Ocean)"],
        category: CATEGORIES.GEOGRAPHY,
        is65Plus: false
    },
    {
        id: 90,
        question: "What ocean is on the East Coast of the United States?",
        answers: ["Atlantic (Ocean)"],
        category: CATEGORIES.GEOGRAPHY,
        is65Plus: false
    },
    {
        id: 91,
        question: "Name one U.S. territory.",
        answers: [
            "Puerto Rico",
            "U.S. Virgin Islands",
            "American Samoa",
            "Northern Mariana Islands",
            "Guam"
        ],
        category: CATEGORIES.GEOGRAPHY,
        is65Plus: false
    },
    {
        id: 92,
        question: "Name one state that borders Canada.",
        answers: [
            "Maine",
            "New Hampshire",
            "Vermont",
            "New York",
            "Pennsylvania",
            "Ohio",
            "Michigan",
            "Minnesota",
            "North Dakota",
            "Montana",
            "Idaho",
            "Washington",
            "Alaska"
        ],
        category: CATEGORIES.GEOGRAPHY,
        is65Plus: false
    },
    {
        id: 93,
        question: "Name one state that borders Mexico.",
        answers: [
            "California",
            "Arizona",
            "New Mexico",
            "Texas"
        ],
        category: CATEGORIES.GEOGRAPHY,
        is65Plus: false
    },
    {
        id: 94,
        question: "What is the capital of the United States?",
        answers: ["Washington, D.C."],
        category: CATEGORIES.GEOGRAPHY,
        is65Plus: true
    },
    {
        id: 95,
        question: "Where is the Statue of Liberty?",
        answers: [
            "New York (Harbor)",
            "Liberty Island",
            "(Also acceptable: New Jersey, near New York City, on the Hudson River)"
        ],
        category: CATEGORIES.GEOGRAPHY,
        is65Plus: true
    },

    // INTEGRATED CIVICS - Symbols (Questions 96-100)
    {
        id: 96,
        question: "Why does the flag have 13 stripes?",
        answers: [
            "because there were 13 original colonies",
            "because the stripes represent the original colonies"
        ],
        category: CATEGORIES.SYMBOLS,
        is65Plus: true
    },
    {
        id: 97,
        question: "Why does the flag have 50 stars?",
        answers: [
            "because there is one star for each state",
            "because each star represents a state",
            "because there are 50 states"
        ],
        category: CATEGORIES.SYMBOLS,
        is65Plus: true
    },
    {
        id: 98,
        question: "What is the name of the national anthem?",
        answers: ["The Star-Spangled Banner"],
        category: CATEGORIES.SYMBOLS,
        is65Plus: true
    },
    {
        id: 99,
        question: "When do we celebrate Independence Day?",
        answers: ["July 4"],
        category: CATEGORIES.SYMBOLS,
        is65Plus: true
    },
    {
        id: 100,
        question: "Name two national U.S. holidays.",
        answers: [
            "New Year's Day",
            "Martin Luther King, Jr. Day",
            "Presidents' Day",
            "Memorial Day",
            "Independence Day",
            "Labor Day",
            "Columbus Day",
            "Veterans Day",
            "Thanksgiving",
            "Christmas"
        ],
        category: CATEGORIES.SYMBOLS,
        is65Plus: false
    }
];

// Get unique categories for filtering
function getCategories() {
    return Object.values(CATEGORIES);
}

// Get questions by category
function getQuestionsByCategory(category) {
    if (category === "all") return civicsQuestions;
    return civicsQuestions.filter(q => q.category === category);
}

// Get 65/20 questions only
function get65PlusQuestions() {
    return civicsQuestions.filter(q => q.is65Plus);
}

// Get random questions
function getRandomQuestions(count, category = "all", only65Plus = false) {
    let pool = category === "all" ? [...civicsQuestions] : getQuestionsByCategory(category);
    if (only65Plus) {
        pool = pool.filter(q => q.is65Plus);
    }

    // Shuffle using Fisher-Yates
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool.slice(0, Math.min(count, pool.length));
}

// Check if answer is correct (flexible matching)
function checkAnswer(questionId, userAnswer) {
    const question = civicsQuestions.find(q => q.id === questionId);
    if (!question) return false;

    const normalizedUserAnswer = userAnswer.toLowerCase().trim()
        .replace(/[.,!?]/g, '')
        .replace(/\s+/g, ' ');

    // Check against each acceptable answer
    for (const answer of question.answers) {
        const normalizedAnswer = answer.toLowerCase().trim()
            .replace(/[.,!?]/g, '')
            .replace(/\s+/g, ' ')
            .replace(/\(.*?\)/g, '').trim(); // Remove parenthetical notes

        // Check for exact match or partial match
        if (normalizedUserAnswer === normalizedAnswer ||
            normalizedUserAnswer.includes(normalizedAnswer) ||
            normalizedAnswer.includes(normalizedUserAnswer)) {
            return true;
        }

        // Check individual words for multi-word acceptable answers
        const answerWords = normalizedAnswer.split(' ').filter(w => w.length > 2);
        const userWords = normalizedUserAnswer.split(' ').filter(w => w.length > 2);

        // If most key words match, consider it correct
        if (answerWords.length > 0) {
            const matchCount = answerWords.filter(w => userWords.some(uw => uw.includes(w) || w.includes(uw))).length;
            if (matchCount >= Math.ceil(answerWords.length * 0.6)) {
                return true;
            }
        }
    }

    return false;
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { civicsQuestions, CATEGORIES, getCategories, getQuestionsByCategory, get65PlusQuestions, getRandomQuestions, checkAnswer };
}
