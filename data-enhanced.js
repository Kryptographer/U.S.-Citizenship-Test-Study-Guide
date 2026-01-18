// Enhanced Data for U.S. Citizenship Study Guide
// Comprehensive explanations, mnemonics, and additional study content

// =====================================================
// QUESTION EXPLANATIONS, MNEMONICS & DIFFICULTY
// =====================================================
const questionEnhancements = {
    1: {
        explanation: "The Constitution is the supreme law because all other laws must follow it. Any law that conflicts with the Constitution can be struck down by courts. It was ratified in 1788 and has been amended 27 times.",
        mnemonic: "Constitution = Country's TOP law (Supreme = Top)",
        difficulty: "easy",
        commonMistakes: ["Saying 'Declaration of Independence' instead of 'Constitution'"],
        funFact: "The Constitution is the shortest written constitution of any major government in the world.",
        relatedQuestions: [2, 3, 4, 5]
    },
    2: {
        explanation: "The Constitution serves three main purposes: (1) establishes the structure of government with three branches, (2) defines how the government works and its powers, (3) protects individual rights through the Bill of Rights and other amendments.",
        mnemonic: "Constitution does 3 things: Sets up, Defines, Protects (SDP)",
        difficulty: "medium",
        commonMistakes: ["Confusing what the Constitution does vs. what the Declaration does"],
        funFact: "The Constitution was written in just 100 working days during the summer of 1787.",
        relatedQuestions: [1, 3, 4]
    },
    3: {
        explanation: "'We the People' establishes that the government's power comes from the citizens - this is the principle of popular sovereignty. The people are the source of all government authority.",
        mnemonic: "WE THE PEOPLE = Power from People",
        difficulty: "easy",
        commonMistakes: ["Saying 'In order to form' which comes after 'We the People'"],
        funFact: "Gouverneur Morris wrote the Preamble and is credited with the famous opening words.",
        relatedQuestions: [1, 2]
    },
    4: {
        explanation: "An amendment is a formal change or addition to the Constitution. The Founding Fathers knew the document would need to adapt over time. Amendments require 2/3 vote of Congress and ratification by 3/4 of states.",
        mnemonic: "A-MEND-ment = To MEND or fix/change",
        difficulty: "easy",
        commonMistakes: ["Thinking amendments replace the Constitution rather than modify it"],
        funFact: "Over 11,000 amendments have been proposed, but only 27 have been ratified.",
        relatedQuestions: [5, 7]
    },
    5: {
        explanation: "The Bill of Rights is the first 10 amendments, ratified in 1791. James Madison wrote them to protect individual liberties from government overreach. They include freedoms of speech, religion, press, and protections in legal proceedings.",
        mnemonic: "Bill of Rights = First 10 = Basic Individual Liberties",
        difficulty: "easy",
        commonMistakes: ["Saying there are 12 or confusing with total amendments (27)"],
        funFact: "Originally, 12 amendments were proposed. Two weren't ratified initially - one became the 27th Amendment in 1992!",
        relatedQuestions: [4, 6, 7]
    },
    6: {
        explanation: "The First Amendment protects five freedoms: Religion, Speech, Press, Assembly, and Petition. These are considered the most fundamental rights in American democracy.",
        mnemonic: "RAPPS: Religion, Assembly, Press, Petition, Speech",
        difficulty: "easy",
        commonMistakes: ["Including right to bear arms (that's the 2nd Amendment)"],
        funFact: "The First Amendment is only 45 words long but protects our most essential freedoms.",
        relatedQuestions: [5, 10, 51]
    },
    7: {
        explanation: "There are 27 amendments to the Constitution. The first 10 are the Bill of Rights (1791), and the most recent is the 27th Amendment (1992) about Congressional pay.",
        mnemonic: "27 = 2 + 7 = Perfect 9 justices need to interpret them all",
        difficulty: "medium",
        commonMistakes: ["Saying 10 (just Bill of Rights) or 26"],
        funFact: "The 27th Amendment was proposed in 1789 but wasn't ratified until 1992 - 203 years later!",
        relatedQuestions: [4, 5]
    },
    8: {
        explanation: "The Declaration of Independence (1776) announced that the 13 colonies were separating from Great Britain. It explained why independence was necessary and declared the colonies free and independent states.",
        mnemonic: "Declaration = Declaring we're DONE with Britain",
        difficulty: "easy",
        commonMistakes: ["Confusing with the Constitution which created the government"],
        funFact: "The Declaration was approved on July 2, 1776, but dated July 4 when it was formally adopted.",
        relatedQuestions: [9, 62, 63]
    },
    9: {
        explanation: "The Declaration states that all people have unalienable rights to 'Life, Liberty, and the pursuit of Happiness.' These ideas came from Enlightenment philosophers like John Locke.",
        mnemonic: "LLP: Life, Liberty, Pursuit of happiness (like an LLC but for people!)",
        difficulty: "easy",
        commonMistakes: ["Adding 'property' - Locke said that but Jefferson changed it"],
        funFact: "John Locke originally wrote 'life, liberty, and property' - Jefferson changed it to 'pursuit of happiness.'",
        relatedQuestions: [8, 62]
    },
    10: {
        explanation: "Freedom of religion means you can practice any religion or no religion at all. The government cannot establish an official religion or force anyone to follow religious practices.",
        mnemonic: "Free to believe or not believe - your choice!",
        difficulty: "easy",
        commonMistakes: ["Thinking it only protects practicing religion, not the choice to not practice"],
        funFact: "The U.S. was the first nation to explicitly separate church and state in its founding documents.",
        relatedQuestions: [6, 51, 58]
    },
    11: {
        explanation: "The U.S. has a capitalist/market economy where private individuals and businesses make most economic decisions. Prices are determined by supply and demand, not the government.",
        mnemonic: "Market economy = Markets (businesses) make decisions",
        difficulty: "medium",
        commonMistakes: ["Saying 'free market' without the word 'economy'"],
        funFact: "The U.S. is actually a 'mixed economy' with some government regulation, but capitalist/market economy are the accepted answers.",
        relatedQuestions: []
    },
    12: {
        explanation: "Rule of law means everyone must follow the law, including leaders and the government itself. No person is above the law, and laws apply equally to all people.",
        mnemonic: "Rule of Law = EVERYONE follows rules, even rulers",
        difficulty: "medium",
        commonMistakes: ["Thinking rule of law just means we have laws"],
        funFact: "This principle dates back to ancient Greece and was a key reason colonists fought for independence.",
        relatedQuestions: [14]
    },
    13: {
        explanation: "The three branches are: Legislative (Congress - makes laws), Executive (President - enforces laws), and Judicial (Courts - interprets laws). This separation prevents any one group from having too much power.",
        mnemonic: "LEJ: Legislative, Executive, Judicial (makes, enforces, judges)",
        difficulty: "easy",
        commonMistakes: ["Mixing up what each branch does"],
        funFact: "The idea of three branches comes from French philosopher Montesquieu.",
        relatedQuestions: [14, 15, 16, 37]
    },
    14: {
        explanation: "Checks and balances is a system where each branch can limit the powers of the others. For example, the President can veto laws, Congress can override vetoes, and courts can declare laws unconstitutional.",
        mnemonic: "Like a game of Rock-Paper-Scissors between branches",
        difficulty: "medium",
        commonMistakes: ["Confusing checks and balances with separation of powers (related but different)"],
        funFact: "The veto power has been used over 2,500 times in U.S. history.",
        relatedQuestions: [13, 33, 34, 37]
    },
    15: {
        explanation: "The President is the head of the executive branch. They enforce federal laws, command the military, conduct foreign policy, and appoint federal judges and cabinet members.",
        mnemonic: "President = Executive = Executes (carries out) the laws",
        difficulty: "easy",
        commonMistakes: ["Saying Congress (they're legislative) or Supreme Court (judicial)"],
        funFact: "The word 'executive' comes from Latin 'exsequi' meaning 'to carry out.'",
        relatedQuestions: [13, 28, 32, 33, 34]
    },
    16: {
        explanation: "Congress makes federal laws. Congress consists of two parts: the Senate (100 members) and the House of Representatives (435 members). Both must pass a bill for it to go to the President.",
        mnemonic: "Congress = Creates laws (both start with C)",
        difficulty: "easy",
        commonMistakes: ["Saying the President makes laws (they sign them)"],
        funFact: "Congress has passed over 30,000 laws since 1789.",
        relatedQuestions: [13, 17, 18, 21]
    },
    17: {
        explanation: "Congress has two chambers: the Senate (upper house) with 100 members and the House of Representatives (lower house) with 435 members. This bicameral system provides checks within the legislative branch.",
        mnemonic: "Senate + House = Congress (S+H=C)",
        difficulty: "easy",
        commonMistakes: ["Forgetting one chamber or calling it the 'House of Congress'"],
        funFact: "The bicameral system was a compromise between large and small states at the Constitutional Convention.",
        relatedQuestions: [16, 18, 21]
    },
    18: {
        explanation: "There are 100 U.S. Senators - 2 from each of the 50 states. This gives equal representation to all states regardless of population.",
        mnemonic: "100 Senators = 2 per state x 50 states",
        difficulty: "easy",
        commonMistakes: ["Confusing with House members (435) or saying 50"],
        funFact: "Originally, Senators were chosen by state legislatures. The 17th Amendment (1913) changed this to direct election.",
        relatedQuestions: [17, 19, 20, 21]
    },
    19: {
        explanation: "U.S. Senators serve 6-year terms. Elections are staggered so about 1/3 of the Senate is elected every 2 years, providing continuity.",
        mnemonic: "Senators = SIX years (both start with S)",
        difficulty: "easy",
        commonMistakes: ["Confusing with House terms (2 years) or President (4 years)"],
        funFact: "The longest-serving Senator was Robert Byrd of West Virginia - 51 years!",
        relatedQuestions: [18, 20, 22]
    },
    20: {
        explanation: "Each state has two U.S. Senators who represent the entire state. Your answer depends on your state of residence.",
        mnemonic: "Know YOUR state's Senators - they represent YOU",
        difficulty: "variable",
        commonMistakes: ["Not knowing current senators or confusing with state legislators"],
        funFact: "The first female Senator was Rebecca Latimer Felton of Georgia in 1922 - she served for just one day!",
        relatedQuestions: [18, 19, 43]
    },
    21: {
        explanation: "The House has 435 voting members. The number from each state is based on population (determined by the Census every 10 years). California has the most (52), while 7 states have only 1.",
        mnemonic: "435 Representatives = 4+3+5 = 12 (like a dozen representing millions)",
        difficulty: "medium",
        commonMistakes: ["Confusing with Senators (100) or total Congress members"],
        funFact: "The number 435 has been fixed since 1929, though the Constitution allows Congress to change it.",
        relatedQuestions: [17, 22, 25]
    },
    22: {
        explanation: "U.S. Representatives serve 2-year terms. This means the entire House is up for election every 2 years, making them more responsive to public opinion.",
        mnemonic: "Representatives = 2 years (R has 2 bumps on top)",
        difficulty: "easy",
        commonMistakes: ["Confusing with Senators (6 years)"],
        funFact: "The Founding Fathers made House terms short so representatives would stay connected to the people.",
        relatedQuestions: [19, 21, 23]
    },
    23: {
        explanation: "Your U.S. Representative represents your congressional district. The answer depends on where you live within your state.",
        mnemonic: "Your Rep represents YOUR district",
        difficulty: "variable",
        commonMistakes: ["Confusing with Senators (who represent whole state)"],
        funFact: "Congressional districts must have roughly equal populations - about 760,000 people each.",
        relatedQuestions: [21, 22, 25]
    },
    24: {
        explanation: "A U.S. Senator represents all the people of their entire state, not just one district. Both senators from a state represent everyone equally.",
        mnemonic: "Senator = Statewide (both start with S)",
        difficulty: "easy",
        commonMistakes: ["Thinking senators represent districts like House members"],
        funFact: "Before the 17th Amendment, senators didn't represent the people directly - they were chosen by state legislatures.",
        relatedQuestions: [18, 20, 25]
    },
    25: {
        explanation: "States with larger populations have more Representatives because House seats are distributed based on population. California (most populous) has 52 while Wyoming (least populous) has 1.",
        mnemonic: "More People = More Representatives",
        difficulty: "easy",
        commonMistakes: ["Thinking it's based on land area"],
        funFact: "The Census every 10 years determines how many representatives each state gets - it's called 'reapportionment.'",
        relatedQuestions: [21, 23, 24]
    },
    26: {
        explanation: "The President is elected to a 4-year term. Thanks to the 22nd Amendment (1951), a President can serve a maximum of 2 terms (8 years total).",
        mnemonic: "President = 4 years (4 letters in 'term')",
        difficulty: "easy",
        commonMistakes: ["Saying 8 years (that's the maximum, not one term)"],
        funFact: "FDR is the only President to serve more than 2 terms - he was elected 4 times!",
        relatedQuestions: [15, 27, 28]
    },
    27: {
        explanation: "Americans vote for President in November. Specifically, Election Day is the Tuesday after the first Monday in November.",
        mnemonic: "November = National election (both start with N)",
        difficulty: "easy",
        commonMistakes: ["Saying January (that's inauguration)"],
        funFact: "Tuesday was chosen because farmers needed Monday to travel to polling places and Wednesday was market day.",
        relatedQuestions: [26, 28]
    },
    28: {
        explanation: "The current President is Donald Trump, who began his second term on January 20, 2025. He is the 47th President.",
        mnemonic: "Stay updated on current officials!",
        difficulty: "easy",
        commonMistakes: ["Not knowing the current President"],
        funFact: "Donald Trump is only the second President to serve non-consecutive terms (Grover Cleveland was the first).",
        relatedQuestions: [26, 29, 46]
    },
    29: {
        explanation: "The current Vice President is JD Vance, who began serving on January 20, 2025. The VP is President of the Senate and first in line to succeed the President.",
        mnemonic: "VP = Vice to the President",
        difficulty: "easy",
        commonMistakes: ["Not knowing the current Vice President"],
        funFact: "JD Vance is the first Vice President born in the 1980s.",
        relatedQuestions: [28, 30, 31]
    },
    30: {
        explanation: "If the President dies, resigns, or is removed from office, the Vice President becomes President. This has happened 9 times in U.S. history.",
        mnemonic: "Vice President = Very next in line",
        difficulty: "easy",
        commonMistakes: ["Saying Speaker of the House (they're 2nd in line)"],
        funFact: "The 25th Amendment (1967) clarified presidential succession after JFK's assassination.",
        relatedQuestions: [29, 31]
    },
    31: {
        explanation: "If both President and VP can't serve, the Speaker of the House becomes President. The full succession line includes Cabinet members in order of department creation.",
        mnemonic: "Speaker Speaks for the country if top 2 are gone",
        difficulty: "medium",
        commonMistakes: ["Saying a Cabinet member or Senator"],
        funFact: "A Speaker has never actually become President through succession.",
        relatedQuestions: [30, 47]
    },
    32: {
        explanation: "The President is the Commander in Chief of the U.S. military. This means civilian control of the armed forces - the military answers to an elected leader, not generals.",
        mnemonic: "President = Chief of military (civilian control)",
        difficulty: "easy",
        commonMistakes: ["Saying a general or Secretary of Defense"],
        funFact: "George Washington actually led troops in battle while President during the Whiskey Rebellion.",
        relatedQuestions: [15, 33, 41]
    },
    33: {
        explanation: "The President signs bills passed by Congress to make them laws. The President can also veto (reject) bills, but Congress can override a veto with 2/3 vote in both chambers.",
        mnemonic: "President's Pen = Power to pass or prevent",
        difficulty: "easy",
        commonMistakes: ["Saying Congress signs bills"],
        funFact: "President Andrew Jackson had the nickname 'King Veto' for his frequent use of the veto.",
        relatedQuestions: [14, 15, 34]
    },
    34: {
        explanation: "The President vetoes (rejects) bills. A veto sends the bill back to Congress. Congress can override the veto with a 2/3 vote in both the House and Senate.",
        mnemonic: "Veto = Vote NO on laws",
        difficulty: "easy",
        commonMistakes: ["Thinking vetoes are permanent (Congress can override)"],
        funFact: "Franklin D. Roosevelt vetoed the most bills - 635 times!",
        relatedQuestions: [14, 33]
    },
    35: {
        explanation: "The Cabinet advises the President on important matters. Cabinet members head executive departments and help implement the President's policies.",
        mnemonic: "Cabinet = Counsel/Advise (the President's advisors)",
        difficulty: "easy",
        commonMistakes: ["Thinking the Cabinet makes laws"],
        funFact: "The Cabinet is not mentioned in the Constitution - it developed from tradition started by Washington.",
        relatedQuestions: [15, 36]
    },
    36: {
        explanation: "There are 15 Cabinet departments. Examples include State, Treasury, Defense, Justice (Attorney General), Interior, Agriculture, Commerce, Labor, Health and Human Services, Housing and Urban Development, Transportation, Energy, Education, Veterans Affairs, and Homeland Security.",
        mnemonic: "15 departments = 1+5 = 6 original + 9 newer ones",
        difficulty: "medium",
        commonMistakes: ["Naming agencies that aren't Cabinet level (like FBI, CIA)"],
        funFact: "The Department of Homeland Security is the newest, created after 9/11 in 2002.",
        relatedQuestions: [35]
    },
    37: {
        explanation: "The judicial branch (courts) reviews laws to see if they follow the Constitution, explains what laws mean, and resolves legal disputes. The power to declare laws unconstitutional is called judicial review.",
        mnemonic: "Judicial = Judges laws (interpret and review)",
        difficulty: "medium",
        commonMistakes: ["Saying courts make laws (they interpret them)"],
        funFact: "Judicial review wasn't explicitly in the Constitution - it came from Marbury v. Madison (1803).",
        relatedQuestions: [13, 14, 38, 39]
    },
    38: {
        explanation: "The Supreme Court is the highest court in the U.S. Its decisions are final and cannot be appealed. It has original jurisdiction in some cases and appellate jurisdiction in others.",
        mnemonic: "Supreme = Superior/Highest",
        difficulty: "easy",
        commonMistakes: ["Naming a lower federal court"],
        funFact: "The Supreme Court receives about 7,000-8,000 petitions per year but only hears about 80 cases.",
        relatedQuestions: [37, 39, 40]
    },
    39: {
        explanation: "There are 9 Supreme Court justices - 1 Chief Justice and 8 Associate Justices. The Constitution doesn't specify the number; Congress sets it by law.",
        mnemonic: "9 Justices = A perfect odd number for decisions",
        difficulty: "easy",
        commonMistakes: ["Saying 7 or 11"],
        funFact: "The number has changed 6 times. It was as low as 5 and as high as 10.",
        relatedQuestions: [38, 40]
    },
    40: {
        explanation: "The Chief Justice is John Roberts, appointed by President George W. Bush in 2005. The Chief Justice leads the Court and presides over presidential impeachment trials.",
        mnemonic: "Roberts leads the SCOTUS team",
        difficulty: "easy",
        commonMistakes: ["Not knowing the current Chief Justice"],
        funFact: "Chief Justices often serve for decades - John Marshall served 34 years!",
        relatedQuestions: [38, 39]
    },
    41: {
        explanation: "Federal government powers include: printing money, declaring war, creating an army, and making treaties. These powers are specifically given to the federal government in the Constitution.",
        mnemonic: "Federal = Foreign affairs, Fighting, Financing (money)",
        difficulty: "medium",
        commonMistakes: ["Naming state powers like education"],
        funFact: "The power to print money was given to prevent states from creating their own currencies.",
        relatedQuestions: [42]
    },
    42: {
        explanation: "State powers include providing education, police protection, fire departments, driver's licenses, and zoning. These are reserved to states by the 10th Amendment.",
        mnemonic: "States = Schools, Safety, Streets (local matters)",
        difficulty: "medium",
        commonMistakes: ["Naming federal powers like declaring war"],
        funFact: "Education policy varies greatly by state because it's a state power, not federal.",
        relatedQuestions: [41]
    },
    43: {
        explanation: "Your state's Governor is the head of the state's executive branch. The answer depends on your state.",
        mnemonic: "Governor Governs your state",
        difficulty: "variable",
        commonMistakes: ["Confusing with federal officials"],
        funFact: "Texas has had the most governors - 48 since becoming a state.",
        relatedQuestions: [20, 44]
    },
    44: {
        explanation: "Each state has a capital city where the state government is located. The answer depends on your state.",
        mnemonic: "Know YOUR state capital!",
        difficulty: "variable",
        commonMistakes: ["Naming the largest city (often not the capital)"],
        funFact: "State capitals are often NOT the largest cities - Albany not NYC, Sacramento not LA.",
        relatedQuestions: [43, 94]
    },
    45: {
        explanation: "The two major political parties are the Democratic Party and the Republican Party. The Democratic Party was founded in 1828, and the Republican Party in 1854.",
        mnemonic: "D and R = Democrats and Republicans",
        difficulty: "easy",
        commonMistakes: ["Naming third parties"],
        funFact: "The U.S. has had different major parties throughout history - Federalists, Whigs, etc.",
        relatedQuestions: [46]
    },
    46: {
        explanation: "The current President's party is Republican. Donald Trump is a Republican.",
        mnemonic: "Current President's party = Republican",
        difficulty: "easy",
        commonMistakes: ["Not knowing the current President's party"],
        funFact: "Only one President has never been affiliated with a political party - George Washington.",
        relatedQuestions: [28, 45]
    },
    47: {
        explanation: "The current Speaker of the House is Mike Johnson (Republican - Louisiana). The Speaker presides over the House and is second in the presidential line of succession.",
        mnemonic: "Speaker = House leader (speaks for the House)",
        difficulty: "easy",
        commonMistakes: ["Naming Senate leaders instead"],
        funFact: "Nancy Pelosi was the first female Speaker of the House.",
        relatedQuestions: [31]
    },
    48: {
        explanation: "Four amendments about voting: 15th (race), 19th (women), 24th (no poll tax), 26th (18 years old). These expanded voting rights over time.",
        mnemonic: "Voting amendments: 15-19-24-26 (race, women, tax, age)",
        difficulty: "medium",
        commonMistakes: ["Confusing which amendment covers which"],
        funFact: "The 26th Amendment was ratified in just 100 days - the fastest ever!",
        relatedQuestions: [49, 54]
    },
    49: {
        explanation: "Only citizens can serve on a jury and vote in federal elections. These responsibilities come with citizenship.",
        mnemonic: "Citizens-only: Jury duty and Voting in federal elections",
        difficulty: "easy",
        commonMistakes: ["Naming rights that non-citizens also have"],
        funFact: "About 32 million Americans are summoned for jury duty each year.",
        relatedQuestions: [50, 54]
    },
    50: {
        explanation: "Only citizens can vote in federal elections and run for federal office. Non-citizens cannot vote for President or Congress.",
        mnemonic: "Federal Vote + Run for office = Citizens only",
        difficulty: "easy",
        commonMistakes: ["Naming rights everyone has"],
        funFact: "You must be a natural-born citizen to be President, but naturalized citizens can serve in Congress.",
        relatedQuestions: [49]
    },
    51: {
        explanation: "Everyone in the U.S. has these rights: freedom of expression/speech, assembly, petition the government, religion, and the right to bear arms.",
        mnemonic: "Basic rights apply to EVERYONE in U.S., citizen or not",
        difficulty: "easy",
        commonMistakes: ["Thinking only citizens have these rights"],
        funFact: "The Supreme Court has ruled that many constitutional rights apply to all people in the U.S.",
        relatedQuestions: [6, 50]
    },
    52: {
        explanation: "The Pledge of Allegiance shows loyalty to the United States and the flag. It was written in 1892 and 'under God' was added in 1954.",
        mnemonic: "Pledge = Promise loyalty to flag and country",
        difficulty: "easy",
        commonMistakes: ["Just saying 'America' without specifying flag or United States"],
        funFact: "The original Pledge was written by Francis Bellamy in 1892.",
        relatedQuestions: [96, 97]
    },
    53: {
        explanation: "When becoming a citizen, you promise to: give up loyalty to other countries, defend the Constitution, obey laws, serve in military if needed, and be loyal to the U.S.",
        mnemonic: "Oath = One country, Allegiance to Constitution, Total loyalty",
        difficulty: "medium",
        commonMistakes: ["Thinking you keep dual loyalty"],
        funFact: "The Oath of Allegiance has been required for naturalization since 1790.",
        relatedQuestions: [49, 57]
    },
    54: {
        explanation: "You must be 18 years old to vote. The 26th Amendment (1971) lowered the voting age from 21 to 18.",
        mnemonic: "18 to vote = 26th Amendment",
        difficulty: "easy",
        commonMistakes: ["Saying 21 (that's the old law)"],
        funFact: "'Old enough to fight, old enough to vote' was the slogan that led to the 26th Amendment during Vietnam.",
        relatedQuestions: [48, 49]
    },
    55: {
        explanation: "Ways to participate in democracy: vote, join parties, help campaigns, join civic groups, contact officials, support/oppose issues, run for office, write to newspapers.",
        mnemonic: "Democracy = Do something! Vote, Voice opinions, Volunteer",
        difficulty: "easy",
        commonMistakes: ["Thinking voting is the only way to participate"],
        funFact: "About 60% of eligible voters voted in the 2020 presidential election.",
        relatedQuestions: [49, 54]
    },
    56: {
        explanation: "Federal income tax forms are due April 15 (or the next business day if it falls on a weekend/holiday).",
        mnemonic: "April 15 = Tax Day (Taxes Are Painful - April 15)",
        difficulty: "easy",
        commonMistakes: ["Saying different dates"],
        funFact: "The IRS receives about 150 million individual tax returns each year.",
        relatedQuestions: []
    },
    57: {
        explanation: "Men must register for Selective Service at age 18 and remain registered until 26. This is for a potential military draft.",
        mnemonic: "18-26 = Selective Service ages for men",
        difficulty: "medium",
        commonMistakes: ["Thinking it's been eliminated or includes women"],
        funFact: "The last military draft was in 1973 during the Vietnam War.",
        relatedQuestions: [53]
    },
    58: {
        explanation: "Colonists came to America for freedom (political, religious), economic opportunity, escape persecution, and to practice their religion.",
        mnemonic: "Colonists wanted FREEDOM: Financial opportunity, Religious freedom, Escape persecution",
        difficulty: "easy",
        commonMistakes: ["Giving modern reasons for immigration"],
        funFact: "The Pilgrims came for religious freedom; Jamestown colonists came for economic opportunity.",
        relatedQuestions: [10, 61]
    },
    59: {
        explanation: "American Indians / Native Americans lived in America before Europeans. They had diverse cultures, languages, and nations across the continent.",
        mnemonic: "Native Americans = Natural/Original Americans",
        difficulty: "easy",
        commonMistakes: ["Saying Europeans or colonists"],
        funFact: "Before European contact, there were hundreds of distinct Native American nations.",
        relatedQuestions: [87]
    },
    60: {
        explanation: "Africans were forcibly brought to America and sold as slaves. Slavery existed from 1619 until the 13th Amendment abolished it in 1865.",
        mnemonic: "Africans were forced to America as slaves",
        difficulty: "easy",
        commonMistakes: ["Vague answers that don't mention Africa"],
        funFact: "About 12.5 million Africans were transported across the Atlantic; about 10.7 million survived.",
        relatedQuestions: [74, 75, 76]
    },
    61: {
        explanation: "Colonists fought Britain because of: high taxes without representation, British soldiers in their homes, and lack of self-government.",
        mnemonic: "No Taxation without Representation! No soldiers! No freedom!",
        difficulty: "easy",
        commonMistakes: ["Only mentioning taxes without the representation part"],
        funFact: "The Boston Tea Party (1773) was a protest against taxation without representation.",
        relatedQuestions: [8, 58, 62]
    },
    62: {
        explanation: "Thomas Jefferson wrote the Declaration of Independence. He was 33 years old and later became the 3rd President.",
        mnemonic: "Jefferson = Jeffersonian ideals in Declaration",
        difficulty: "easy",
        commonMistakes: ["Saying Benjamin Franklin or John Adams (they helped but didn't write it)"],
        funFact: "Jefferson wrote the first draft in just 17 days.",
        relatedQuestions: [8, 9, 63]
    },
    63: {
        explanation: "The Declaration of Independence was adopted on July 4, 1776. This is why we celebrate Independence Day on July 4th.",
        mnemonic: "July 4, 1776 = J-4-76 (July Fourth Seventy-Six)",
        difficulty: "easy",
        commonMistakes: ["Saying July 2 (when it was approved) or 1787 (Constitution year)"],
        funFact: "Both John Adams and Thomas Jefferson died on July 4, 1826 - exactly 50 years later!",
        relatedQuestions: [8, 62, 99]
    },
    64: {
        explanation: "The 13 original colonies became the first states: Connecticut, Delaware, Georgia, Maryland, Massachusetts, New Hampshire, New Jersey, New York, North Carolina, Pennsylvania, Rhode Island, South Carolina, Virginia.",
        mnemonic: "13 Colonies = 13 stripes on the flag",
        difficulty: "medium",
        commonMistakes: ["Including states that weren't original colonies (like Vermont or Maine)"],
        funFact: "Delaware was the first state to ratify the Constitution, so it's called 'The First State.'",
        relatedQuestions: [96]
    },
    65: {
        explanation: "The Constitutional Convention (1787) is where the Constitution was written. Delegates from 12 states met in Philadelphia to create a new government.",
        mnemonic: "Constitutional Convention = Constitution Created",
        difficulty: "easy",
        commonMistakes: ["Confusing with Continental Congress"],
        funFact: "The Convention was supposed to just revise the Articles of Confederation but ended up creating an entirely new document.",
        relatedQuestions: [66, 67]
    },
    66: {
        explanation: "The Constitution was written in 1787 at the Constitutional Convention in Philadelphia.",
        mnemonic: "1787 = Constitution (17 + 87 = 104 years before 1891... just memorize 1787!)",
        difficulty: "easy",
        commonMistakes: ["Saying 1776 (Declaration year)"],
        funFact: "The Constitution was written in about 100 working days during the summer of 1787.",
        relatedQuestions: [65, 63]
    },
    67: {
        explanation: "The Federalist Papers were written by James Madison, Alexander Hamilton, and John Jay (under the pen name 'Publius') to support ratification of the Constitution.",
        mnemonic: "MHJ wrote for P: Madison, Hamilton, Jay wrote as Publius",
        difficulty: "medium",
        commonMistakes: ["Including other Founding Fathers who didn't write them"],
        funFact: "Hamilton wrote 51 of the 85 Federalist Papers in just six months!",
        relatedQuestions: [65, 66]
    },
    68: {
        explanation: "Benjamin Franklin was a diplomat, the oldest Convention delegate (81), first Postmaster General, writer of Poor Richard's Almanac, and started free libraries.",
        mnemonic: "Franklin = First in many things (libraries, Postmaster, diplomat)",
        difficulty: "medium",
        commonMistakes: ["Saying he was President (he never was)"],
        funFact: "Franklin was the only Founding Father to sign all four major documents: Declaration, Treaty of Alliance with France, Treaty of Paris, and Constitution.",
        relatedQuestions: [62, 69, 70]
    },
    69: {
        explanation: "George Washington is the 'Father of Our Country.' He led the Continental Army to victory and became the first President, setting many precedents.",
        mnemonic: "Washington = Father (like Washington is parent of the nation)",
        difficulty: "easy",
        commonMistakes: ["Saying Abraham Lincoln"],
        funFact: "Washington could have been king but chose to be President, establishing the republic.",
        relatedQuestions: [70]
    },
    70: {
        explanation: "George Washington was the first President (1789-1797). He set many precedents including the two-term limit and the Cabinet system.",
        mnemonic: "Washington = #1 = First President",
        difficulty: "easy",
        commonMistakes: ["Saying John Adams (2nd President)"],
        funFact: "Washington is the only President elected unanimously by the Electoral College - twice!",
        relatedQuestions: [69]
    },
    71: {
        explanation: "The Louisiana Purchase (1803) was territory bought from France under President Jefferson. It doubled the size of the U.S. and cost about $15 million ($18 per square mile).",
        mnemonic: "Louisiana from France = Lots of Land for Little",
        difficulty: "medium",
        commonMistakes: ["Saying purchased from Britain or Spain"],
        funFact: "Napoleon sold it because he needed money for wars in Europe. The U.S. paid about 3 cents per acre!",
        relatedQuestions: [72]
    },
    72: {
        explanation: "Wars in the 1800s: War of 1812 (Britain), Mexican-American War (1846-48), Civil War (1861-65), Spanish-American War (1898).",
        mnemonic: "1800s Wars: 1812, Mexican, Civil, Spanish (in order)",
        difficulty: "medium",
        commonMistakes: ["Naming WWI or WWII (those are 1900s)"],
        funFact: "The Mexican-American War added Texas, California, and the Southwest to the U.S.",
        relatedQuestions: [73, 78]
    },
    73: {
        explanation: "The Civil War (1861-1865) was fought between the North (Union) and South (Confederacy). It's also called the War Between the States.",
        mnemonic: "Civil War = Citizens fighting Citizens (North vs South)",
        difficulty: "easy",
        commonMistakes: ["Confusing with Revolutionary War"],
        funFact: "The Civil War was the deadliest war in American history - about 620,000 soldiers died.",
        relatedQuestions: [74, 75, 76]
    },
    74: {
        explanation: "The Civil War was caused by slavery, economic differences between North and South, and states' rights (including the right to have slavery).",
        mnemonic: "Civil War causes: Slavery, States' rights, (economic) Stuff",
        difficulty: "medium",
        commonMistakes: ["Only saying slavery without other factors"],
        funFact: "Seven Southern states seceded before Lincoln even took office.",
        relatedQuestions: [73, 75, 76]
    },
    75: {
        explanation: "Abraham Lincoln: freed slaves (Emancipation Proclamation), saved/preserved the Union, led during Civil War. He's considered one of the greatest Presidents.",
        mnemonic: "Lincoln = Liberation of slaves, Led Union, Legendary leader",
        difficulty: "easy",
        commonMistakes: ["Confusing Lincoln with Washington"],
        funFact: "Lincoln taught himself law by reading books and became one of the most successful lawyers in Illinois.",
        relatedQuestions: [73, 74, 76]
    },
    76: {
        explanation: "The Emancipation Proclamation (1863) freed slaves in Confederate states. It was a war measure that changed the purpose of the Civil War.",
        mnemonic: "Emancipation = Ending enslavement in rebellious states",
        difficulty: "medium",
        commonMistakes: ["Thinking it freed all slaves (only in Confederate states)"],
        funFact: "The 13th Amendment (1865) actually abolished all slavery - the Proclamation only applied to rebel states.",
        relatedQuestions: [75, 74]
    },
    77: {
        explanation: "Susan B. Anthony fought for women's rights, especially the right to vote (suffrage). She was arrested for voting illegally in 1872.",
        mnemonic: "Susan B. Anthony = Suffrage Activist",
        difficulty: "easy",
        commonMistakes: ["Confusing with other activists"],
        funFact: "Anthony died in 1906, 14 years before women got the right to vote with the 19th Amendment.",
        relatedQuestions: [48]
    },
    78: {
        explanation: "Wars in the 1900s: WWI, WWII, Korean War, Vietnam War, Persian Gulf War. The U.S. emerged as a superpower after WWII.",
        mnemonic: "1900s Wars: W-W-K-V-G (World, World, Korea, Vietnam, Gulf)",
        difficulty: "easy",
        commonMistakes: ["Naming Civil War (1800s)"],
        funFact: "The U.S. was involved in over a dozen conflicts in the 1900s; these five are the most significant.",
        relatedQuestions: [72, 79, 80, 81, 82]
    },
    79: {
        explanation: "Woodrow Wilson was President during WWI (1914-1918, U.S. joined 1917). He proposed the League of Nations and won the Nobel Peace Prize.",
        mnemonic: "Wilson = World War One",
        difficulty: "medium",
        commonMistakes: ["Confusing with FDR (WWII)"],
        funFact: "Wilson was a college professor and president of Princeton before becoming U.S. President.",
        relatedQuestions: [78, 80]
    },
    80: {
        explanation: "Franklin D. Roosevelt (FDR) was President during both the Great Depression and WWII. He's the only President elected 4 times.",
        mnemonic: "FDR = Four-term, Depression, (world war) Responder",
        difficulty: "easy",
        commonMistakes: ["Confusing with Theodore Roosevelt"],
        funFact: "FDR led the country for 12 years (1933-1945), longer than any other President.",
        relatedQuestions: [78, 79, 81]
    },
    81: {
        explanation: "In WWII, the U.S. fought against Japan, Germany, and Italy (the Axis Powers). The war lasted from 1939-1945 (U.S. joined 1941).",
        mnemonic: "WWII enemies: JIG (Japan, Italy, Germany)",
        difficulty: "easy",
        commonMistakes: ["Forgetting Italy or including the Soviet Union"],
        funFact: "The U.S. joined after Japan attacked Pearl Harbor on December 7, 1941.",
        relatedQuestions: [78, 80, 82]
    },
    82: {
        explanation: "Eisenhower was a general in WWII, serving as Supreme Allied Commander in Europe. He led D-Day and later became the 34th President.",
        mnemonic: "Eisenhower = Europe commander, then President",
        difficulty: "easy",
        commonMistakes: ["Saying WWI or Korean War"],
        funFact: "Eisenhower planned D-Day (June 6, 1944), the largest amphibious invasion in history.",
        relatedQuestions: [78, 81]
    },
    83: {
        explanation: "During the Cold War (1947-1991), the main concern was Communism and the Soviet Union. The U.S. and USSR competed globally without direct warfare.",
        mnemonic: "Cold War = Communism Concern",
        difficulty: "easy",
        commonMistakes: ["Naming a specific country instead of the ideology"],
        funFact: "It was called 'Cold' because the superpowers never directly fought each other.",
        relatedQuestions: [78, 84]
    },
    84: {
        explanation: "The civil rights movement (1950s-1960s) fought to end racial discrimination and segregation, seeking equal rights for African Americans.",
        mnemonic: "Civil Rights = Equality for all Citizens",
        difficulty: "easy",
        commonMistakes: ["Confusing with Civil War"],
        funFact: "The Civil Rights Act of 1964 banned discrimination based on race, color, religion, sex, or national origin.",
        relatedQuestions: [85]
    },
    85: {
        explanation: "Martin Luther King Jr. fought for civil rights and equality using nonviolent protest. His 'I Have a Dream' speech is one of the most famous in history.",
        mnemonic: "MLK = Movement Leader for equality (King)",
        difficulty: "easy",
        commonMistakes: ["Confusing what he fought for"],
        funFact: "MLK received the Nobel Peace Prize in 1964 at age 35, the youngest person at that time.",
        relatedQuestions: [84]
    },
    86: {
        explanation: "On September 11, 2001, terrorists attacked the U.S.: two planes hit the World Trade Center in NYC, one hit the Pentagon, and one crashed in Pennsylvania.",
        mnemonic: "9/11 = September 11, 2001 attacks",
        difficulty: "easy",
        commonMistakes: ["Getting details wrong"],
        funFact: "Nearly 3,000 people died in the attacks. The fourth plane was headed for Washington D.C. but passengers fought back.",
        relatedQuestions: []
    },
    87: {
        explanation: "Many American Indian tribes exist including: Cherokee, Navajo, Sioux, Chippewa, Choctaw, Apache, Iroquois, and many more.",
        mnemonic: "Remember just ONE tribe name you know",
        difficulty: "easy",
        commonMistakes: ["Making up tribe names"],
        funFact: "There are 574 federally recognized Native American tribes in the U.S. today.",
        relatedQuestions: [59]
    },
    88: {
        explanation: "The two longest rivers are the Missouri River (2,341 miles) and Mississippi River (2,340 miles). The Missouri flows into the Mississippi.",
        mnemonic: "M and M rivers: Missouri and Mississippi (both start with M)",
        difficulty: "easy",
        commonMistakes: ["Naming rivers like the Ohio or Colorado"],
        funFact: "Combined, they form the longest river system in North America at 3,902 miles.",
        relatedQuestions: []
    },
    89: {
        explanation: "The Pacific Ocean is on the West Coast. It's the largest and deepest ocean in the world.",
        mnemonic: "Pacific = Western edge (P for Pacific, like left on a map)",
        difficulty: "easy",
        commonMistakes: ["Confusing with Atlantic"],
        funFact: "The Pacific Ocean covers more area than all the land on Earth combined.",
        relatedQuestions: [90]
    },
    90: {
        explanation: "The Atlantic Ocean is on the East Coast. It's the second-largest ocean.",
        mnemonic: "Atlantic = Eastern edge (A comes first like East is on the right side)",
        difficulty: "easy",
        commonMistakes: ["Confusing with Pacific"],
        funFact: "The first transatlantic flight was by Charles Lindbergh in 1927.",
        relatedQuestions: [89]
    },
    91: {
        explanation: "U.S. territories include Puerto Rico, U.S. Virgin Islands, American Samoa, Northern Mariana Islands, and Guam. Residents are U.S. citizens but can't vote for President.",
        mnemonic: "Territories: PAGAN (Puerto Rico, American Samoa, Guam, And Northern Mariana, VI)",
        difficulty: "medium",
        commonMistakes: ["Naming states instead of territories"],
        funFact: "Puerto Rico has voted on statehood multiple times, most recently favoring it in 2020.",
        relatedQuestions: []
    },
    92: {
        explanation: "States bordering Canada: Maine, New Hampshire, Vermont, New York, Pennsylvania, Ohio, Michigan, Minnesota, North Dakota, Montana, Idaho, Washington, Alaska.",
        mnemonic: "Northern border states from East to West",
        difficulty: "medium",
        commonMistakes: ["Naming states that don't actually border Canada"],
        funFact: "The U.S.-Canada border is 5,525 miles long, the longest international border in the world.",
        relatedQuestions: [93]
    },
    93: {
        explanation: "States bordering Mexico: California, Arizona, New Mexico, Texas (from West to East).",
        mnemonic: "CANT border: California, Arizona, New Mexico, Texas",
        difficulty: "easy",
        commonMistakes: ["Adding Nevada or other states"],
        funFact: "The U.S.-Mexico border is about 1,954 miles long.",
        relatedQuestions: [92]
    },
    94: {
        explanation: "Washington, D.C. is the capital of the United States. D.C. stands for District of Columbia. It's not part of any state.",
        mnemonic: "D.C. = Democracy's Capital",
        difficulty: "easy",
        commonMistakes: ["Saying Washington State or New York"],
        funFact: "D.C. was chosen as the capital in 1790 as a compromise between Northern and Southern states.",
        relatedQuestions: [44]
    },
    95: {
        explanation: "The Statue of Liberty is in New York Harbor, on Liberty Island. It was a gift from France in 1886.",
        mnemonic: "Liberty Lady in New York (but technically also visible from NJ)",
        difficulty: "easy",
        commonMistakes: ["Just saying 'New York' without specifying harbor/island"],
        funFact: "The statue's full name is 'Liberty Enlightening the World' and was designed by Frédéric Auguste Bartholdi.",
        relatedQuestions: []
    },
    96: {
        explanation: "The flag has 13 stripes representing the 13 original colonies that became the first states.",
        mnemonic: "13 Stripes = 13 Original colonies",
        difficulty: "easy",
        commonMistakes: ["Saying the stripes represent states now"],
        funFact: "The flag briefly had 15 stripes (1795-1818) but went back to 13 as more states joined.",
        relatedQuestions: [64, 97]
    },
    97: {
        explanation: "The flag has 50 stars, one for each current state. The number of stars has changed as states were added.",
        mnemonic: "50 Stars = 50 States today",
        difficulty: "easy",
        commonMistakes: ["Confusing with stripes (13) or original colonies"],
        funFact: "The current 50-star flag has been used since 1960 when Hawaii became a state.",
        relatedQuestions: [96]
    },
    98: {
        explanation: "'The Star-Spangled Banner' is the national anthem. It was written by Francis Scott Key in 1814 during the War of 1812.",
        mnemonic: "Star-Spangled = Stars and Stripes = National anthem",
        difficulty: "easy",
        commonMistakes: ["Saying 'America the Beautiful' or 'God Bless America'"],
        funFact: "The poem was set to the tune of a British drinking song!",
        relatedQuestions: [96, 97]
    },
    99: {
        explanation: "Independence Day is July 4th, celebrating the Declaration of Independence in 1776.",
        mnemonic: "July 4 = Independence Day (July Fourth = Freedom Forever)",
        difficulty: "easy",
        commonMistakes: ["Saying July 2 (when independence was voted) or Memorial Day"],
        funFact: "John Adams predicted Americans would celebrate July 2, not July 4!",
        relatedQuestions: [63, 100]
    },
    100: {
        explanation: "National U.S. holidays include: New Year's Day, MLK Day, Presidents' Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, Christmas.",
        mnemonic: "Remember: January (New Year, MLK), February (Presidents), May (Memorial), July (Independence), September (Labor), October (Columbus), November (Veterans, Thanksgiving), December (Christmas)",
        difficulty: "easy",
        commonMistakes: ["Naming state holidays or non-federal holidays"],
        funFact: "Thanksgiving didn't become a national holiday until 1863 when Lincoln proclaimed it.",
        relatedQuestions: [99]
    }
};

// =====================================================
// ALL 27 CONSTITUTIONAL AMENDMENTS
// =====================================================
const constitutionalAmendments = [
    {
        number: 1,
        year: 1791,
        shortName: "Freedom of Religion, Speech, Press, Assembly, Petition",
        fullText: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.",
        simpleExplanation: "Protects five freedoms: religion, speech, press, assembly, and petition. Government cannot establish a religion or prevent you from practicing yours.",
        whyItMatters: "These are the most fundamental freedoms in American democracy. They allow citizens to express themselves and hold the government accountable.",
        mnemonicHelp: "RAPPS: Religion, Assembly, Press, Petition, Speech",
        relatedQuestions: [6, 10, 51]
    },
    {
        number: 2,
        year: 1791,
        shortName: "Right to Bear Arms",
        fullText: "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.",
        simpleExplanation: "Protects the right of individuals to own firearms.",
        whyItMatters: "This amendment remains one of the most debated, with ongoing discussions about gun rights vs. gun control.",
        mnemonicHelp: "2nd = 2 arms (guns)",
        relatedQuestions: [51]
    },
    {
        number: 3,
        year: 1791,
        shortName: "Quartering of Soldiers",
        fullText: "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.",
        simpleExplanation: "The government cannot force you to house soldiers in your home during peacetime.",
        whyItMatters: "This responded to British practice of forcing colonists to house soldiers. It's rarely cited today.",
        mnemonicHelp: "3 soldiers can't stay at your home without permission",
        relatedQuestions: [61]
    },
    {
        number: 4,
        year: 1791,
        shortName: "Search and Seizure",
        fullText: "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause...",
        simpleExplanation: "Police generally need a warrant to search your property. Protects your privacy.",
        whyItMatters: "Protects citizens from government intrusion into their private lives without good reason.",
        mnemonicHelp: "4th = 4-walled home protected",
        relatedQuestions: []
    },
    {
        number: 5,
        year: 1791,
        shortName: "Rights in Criminal Cases",
        fullText: "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury... nor shall any person be subject for the same offence to be twice put in jeopardy... nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law...",
        simpleExplanation: "Protects against double jeopardy (being tried twice for same crime), self-incrimination ('pleading the Fifth'), and requires due process.",
        whyItMatters: "Ensures fair treatment in the criminal justice system.",
        mnemonicHelp: "Take 5 = 'I plead the Fifth'",
        relatedQuestions: []
    },
    {
        number: 6,
        year: 1791,
        shortName: "Right to a Fair Trial",
        fullText: "In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury... to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.",
        simpleExplanation: "Guarantees the right to a speedy public trial, an impartial jury, and a lawyer.",
        whyItMatters: "Ensures accused people have a fair chance to defend themselves.",
        mnemonicHelp: "6th = Court rights (6 letters in 'courts')",
        relatedQuestions: [49]
    },
    {
        number: 7,
        year: 1791,
        shortName: "Rights in Civil Cases",
        fullText: "In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved...",
        simpleExplanation: "Guarantees jury trials in civil lawsuits over $20 (now applies to larger amounts).",
        whyItMatters: "Extends jury trial rights beyond just criminal cases.",
        mnemonicHelp: "7th = Civil suits (7 letters in 'lawsuits')",
        relatedQuestions: [49]
    },
    {
        number: 8,
        year: 1791,
        shortName: "Bails, Fines, and Punishments",
        fullText: "Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.",
        simpleExplanation: "Prohibits excessive bail/fines and cruel and unusual punishment.",
        whyItMatters: "Protects against torture and disproportionate punishment.",
        mnemonicHelp: "8th = Ate too much = excessive is bad",
        relatedQuestions: []
    },
    {
        number: 9,
        year: 1791,
        shortName: "Rights Retained by the People",
        fullText: "The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.",
        simpleExplanation: "Just because a right isn't listed in the Constitution doesn't mean you don't have it.",
        whyItMatters: "Recognizes that people have more rights than just those specifically listed.",
        mnemonicHelp: "9 = Rights beyond the listed nine (in Bill of Rights)",
        relatedQuestions: []
    },
    {
        number: 10,
        year: 1791,
        shortName: "Powers Retained by States and People",
        fullText: "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.",
        simpleExplanation: "Powers not given to the federal government belong to states or the people.",
        whyItMatters: "Foundation of federalism - limits federal power and protects state sovereignty.",
        mnemonicHelp: "10 = States get the rest (10 = end of Bill of Rights, states get remaining powers)",
        relatedQuestions: [41, 42]
    },
    {
        number: 11,
        year: 1795,
        shortName: "Lawsuits Against States",
        fullText: "The Judicial power of the United States shall not be construed to extend to any suit in law or equity, commenced or prosecuted against one of the United States by Citizens of another State, or by Citizens or Subjects of any Foreign State.",
        simpleExplanation: "States have sovereign immunity - they can't be sued in federal court by citizens of other states.",
        whyItMatters: "Protects state sovereignty from lawsuits.",
        mnemonicHelp: "11 = States are immune (11 looks like two standing shields)",
        relatedQuestions: []
    },
    {
        number: 12,
        year: 1804,
        shortName: "Election of President and Vice President",
        fullText: "The Electors shall meet in their respective states, and vote by ballot for President and Vice-President...",
        simpleExplanation: "Changed how the Electoral College works - now President and VP are elected separately on the same ticket.",
        whyItMatters: "Fixed problems with the original electoral system after the contentious 1800 election.",
        mnemonicHelp: "12 = Two separate votes for 2 positions",
        relatedQuestions: [26, 27]
    },
    {
        number: 13,
        year: 1865,
        shortName: "Abolition of Slavery",
        fullText: "Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States...",
        simpleExplanation: "Abolished slavery throughout the United States after the Civil War.",
        whyItMatters: "One of the most important amendments - ended the institution of slavery.",
        mnemonicHelp: "13 = Unlucky for slavery (abolished)",
        relatedQuestions: [60, 74, 75, 76]
    },
    {
        number: 14,
        year: 1868,
        shortName: "Civil Rights",
        fullText: "All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States... No State shall... deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.",
        simpleExplanation: "Grants citizenship to all born in the U.S., requires states to provide due process and equal protection.",
        whyItMatters: "Transformed the Constitution by applying Bill of Rights to states and establishing birthright citizenship.",
        mnemonicHelp: "14 = For equal protection (4 = for)",
        relatedQuestions: [84]
    },
    {
        number: 15,
        year: 1870,
        shortName: "Black Suffrage",
        fullText: "The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.",
        simpleExplanation: "Gave African American men the right to vote.",
        whyItMatters: "Major step toward racial equality, though enforcement took another century.",
        mnemonicHelp: "15 = African Americans could finally vote",
        relatedQuestions: [48, 84]
    },
    {
        number: 16,
        year: 1913,
        shortName: "Income Tax",
        fullText: "The Congress shall have power to lay and collect taxes on incomes, from whatever source derived, without apportionment among the several States...",
        simpleExplanation: "Allows the federal government to collect income tax.",
        whyItMatters: "Created the modern federal tax system.",
        mnemonicHelp: "16 = TAX (T=20, A=1, X=24... just remember 16 = tax!)",
        relatedQuestions: [56]
    },
    {
        number: 17,
        year: 1913,
        shortName: "Direct Election of Senators",
        fullText: "The Senate of the United States shall be composed of two Senators from each State, elected by the people thereof...",
        simpleExplanation: "Senators are now elected directly by voters, not by state legislatures.",
        whyItMatters: "Made the Senate more democratic and accountable to the people.",
        mnemonicHelp: "17 = Senators elected directly by citizens (17 letters in 'direct election')",
        relatedQuestions: [18, 19, 20]
    },
    {
        number: 18,
        year: 1919,
        shortName: "Prohibition of Liquor",
        fullText: "...the manufacture, sale, or transportation of intoxicating liquors within, the importation thereof into, or the exportation thereof from the United States... is hereby prohibited.",
        simpleExplanation: "Banned the manufacture, sale, and transportation of alcohol. (Repealed by 21st Amendment)",
        whyItMatters: "Only amendment to be repealed. Led to organized crime and bootlegging.",
        mnemonicHelp: "18 = You had to be 18 to drink... until this banned it entirely!",
        relatedQuestions: []
    },
    {
        number: 19,
        year: 1920,
        shortName: "Women's Suffrage",
        fullText: "The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex.",
        simpleExplanation: "Gave women the right to vote.",
        whyItMatters: "Doubled the electorate and was a major victory for the women's rights movement.",
        mnemonicHelp: "19 = Women's right to vote (19 rhymes with 'suffragine')",
        relatedQuestions: [48, 77]
    },
    {
        number: 20,
        year: 1933,
        shortName: "Presidential Terms and Succession",
        fullText: "The terms of the President and Vice President shall end at noon on the 20th day of January...",
        simpleExplanation: "Moved inauguration from March to January 20 and set Congressional terms to start January 3.",
        whyItMatters: "Reduced the 'lame duck' period between election and taking office.",
        mnemonicHelp: "20th Amendment = 20th of January inauguration",
        relatedQuestions: [26]
    },
    {
        number: 21,
        year: 1933,
        shortName: "Repeal of Prohibition",
        fullText: "The eighteenth article of amendment to the Constitution of the United States is hereby repealed.",
        simpleExplanation: "Repealed Prohibition (18th Amendment). Alcohol became legal again.",
        whyItMatters: "Only amendment that repeals another amendment. Recognized Prohibition failed.",
        mnemonicHelp: "21 = Legal drinking age (though that came later)",
        relatedQuestions: []
    },
    {
        number: 22,
        year: 1951,
        shortName: "Presidential Term Limits",
        fullText: "No person shall be elected to the office of the President more than twice...",
        simpleExplanation: "Limits presidents to two terms (8 years maximum).",
        whyItMatters: "Codified Washington's precedent after FDR served four terms.",
        mnemonicHelp: "22 = 2 terms x 2 = maximum 2 terms for President",
        relatedQuestions: [26]
    },
    {
        number: 23,
        year: 1961,
        shortName: "Washington D.C. Suffrage",
        fullText: "The District constituting the seat of Government of the United States shall appoint... A number of electors of President and Vice President...",
        simpleExplanation: "Gave Washington D.C. residents the right to vote for President (3 electoral votes).",
        whyItMatters: "D.C. residents could finally vote for President, though they still lack Congressional representation.",
        mnemonicHelp: "23 = D.C. votes (2+3 = 5 letters in 'DC can')",
        relatedQuestions: [94]
    },
    {
        number: 24,
        year: 1964,
        shortName: "Abolition of Poll Taxes",
        fullText: "The right of citizens of the United States to vote... shall not be denied or abridged by the United States or any State by reason of failure to pay any poll tax or other tax.",
        simpleExplanation: "Banned poll taxes in federal elections. You can't charge people to vote.",
        whyItMatters: "Removed a barrier used to prevent poor people and African Americans from voting.",
        mnemonicHelp: "24 = Can't PAY to vote (24/7 = free access)",
        relatedQuestions: [48, 84]
    },
    {
        number: 25,
        year: 1967,
        shortName: "Presidential Succession",
        fullText: "In case of the removal of the President from office or of his death or resignation, the Vice President shall become President...",
        simpleExplanation: "Clarifies presidential succession and what happens if President is disabled.",
        whyItMatters: "Created clear rules for succession after JFK's assassination.",
        mnemonicHelp: "25 = Succession (quarter of 100 = 25% of way there to replace)",
        relatedQuestions: [30, 31]
    },
    {
        number: 26,
        year: 1971,
        shortName: "Voting Age Set to 18",
        fullText: "The right of citizens of the United States, who are eighteen years of age or older, to vote shall not be denied or abridged by the United States or by any State on account of age.",
        simpleExplanation: "Lowered the voting age from 21 to 18.",
        whyItMatters: "Response to Vietnam War - if 18-year-olds could be drafted, they should vote.",
        mnemonicHelp: "26th = 18 years (26 - 8 = 18)",
        relatedQuestions: [48, 54]
    },
    {
        number: 27,
        year: 1992,
        shortName: "Congressional Pay",
        fullText: "No law, varying the compensation for the services of the Senators and Representatives, shall take effect, until an election of Representatives shall have intervened.",
        simpleExplanation: "Congress can't give itself a pay raise that takes effect before the next election.",
        whyItMatters: "Prevents Congress from voting themselves immediate pay raises.",
        mnemonicHelp: "27 = Last amendment (most recent) = Congress pay must wait",
        relatedQuestions: [7]
    }
];

// =====================================================
// ALL U.S. PRESIDENTS
// =====================================================
const allPresidents = [
    { number: 1, name: "George Washington", years: "1789-1797", party: "None/Federalist", vicePresident: "John Adams", keyFacts: ["Father of Our Country", "First President", "Set two-term precedent", "Commander of Continental Army"] },
    { number: 2, name: "John Adams", years: "1797-1801", party: "Federalist", vicePresident: "Thomas Jefferson", keyFacts: ["First Vice President", "Helped write Declaration", "Midnight judges", "Only one term"] },
    { number: 3, name: "Thomas Jefferson", years: "1801-1809", party: "Democratic-Republican", vicePresident: "Aaron Burr, George Clinton", keyFacts: ["Wrote Declaration of Independence", "Louisiana Purchase", "Lewis and Clark expedition"] },
    { number: 4, name: "James Madison", years: "1809-1817", party: "Democratic-Republican", vicePresident: "George Clinton, Elbridge Gerry", keyFacts: ["Father of the Constitution", "War of 1812", "White House burned"] },
    { number: 5, name: "James Monroe", years: "1817-1825", party: "Democratic-Republican", vicePresident: "Daniel D. Tompkins", keyFacts: ["Monroe Doctrine", "Era of Good Feelings", "Missouri Compromise"] },
    { number: 6, name: "John Quincy Adams", years: "1825-1829", party: "Democratic-Republican/National Republican", vicePresident: "John C. Calhoun", keyFacts: ["Son of John Adams", "Corrupt Bargain", "Later served in Congress"] },
    { number: 7, name: "Andrew Jackson", years: "1829-1837", party: "Democratic", vicePresident: "John C. Calhoun, Martin Van Buren", keyFacts: ["Old Hickory", "Indian Removal Act", "Killed the national bank", "First 'common man' president"] },
    { number: 8, name: "Martin Van Buren", years: "1837-1841", party: "Democratic", vicePresident: "Richard M. Johnson", keyFacts: ["Panic of 1837", "First president born U.S. citizen", "Old Kinderhook (OK)"] },
    { number: 9, name: "William Henry Harrison", years: "1841", party: "Whig", vicePresident: "John Tyler", keyFacts: ["Shortest presidency (32 days)", "Died of pneumonia", "Longest inauguration speech"] },
    { number: 10, name: "John Tyler", years: "1841-1845", party: "Whig", vicePresident: "None", keyFacts: ["First VP to assume presidency", "His Accidency", "Annexed Texas"] },
    { number: 11, name: "James K. Polk", years: "1845-1849", party: "Democratic", vicePresident: "George M. Dallas", keyFacts: ["Mexican-American War", "Gained California, SW", "Fulfilled all campaign promises", "One term"] },
    { number: 12, name: "Zachary Taylor", years: "1849-1850", party: "Whig", vicePresident: "Millard Fillmore", keyFacts: ["Old Rough and Ready", "Mexican War hero", "Died in office"] },
    { number: 13, name: "Millard Fillmore", years: "1850-1853", party: "Whig", vicePresident: "None", keyFacts: ["Compromise of 1850", "Last Whig president", "Know-Nothing party"] },
    { number: 14, name: "Franklin Pierce", years: "1853-1857", party: "Democratic", vicePresident: "William R. King", keyFacts: ["Kansas-Nebraska Act", "Bleeding Kansas", "Often ranked as worst president"] },
    { number: 15, name: "James Buchanan", years: "1857-1861", party: "Democratic", vicePresident: "John C. Breckinridge", keyFacts: ["Only bachelor president", "Dred Scott case", "Did nothing to prevent Civil War"] },
    { number: 16, name: "Abraham Lincoln", years: "1861-1865", party: "Republican", vicePresident: "Hannibal Hamlin, Andrew Johnson", keyFacts: ["Saved the Union", "Emancipation Proclamation", "Gettysburg Address", "Assassinated"] },
    { number: 17, name: "Andrew Johnson", years: "1865-1869", party: "Democratic/National Union", vicePresident: "None", keyFacts: ["First president impeached", "Reconstruction", "Purchased Alaska"] },
    { number: 18, name: "Ulysses S. Grant", years: "1869-1877", party: "Republican", vicePresident: "Schuyler Colfax, Henry Wilson", keyFacts: ["Civil War general", "15th Amendment ratified", "Scandals in administration"] },
    { number: 19, name: "Rutherford B. Hayes", years: "1877-1881", party: "Republican", vicePresident: "William A. Wheeler", keyFacts: ["Disputed election of 1876", "End of Reconstruction", "Civil service reform"] },
    { number: 20, name: "James A. Garfield", years: "1881", party: "Republican", vicePresident: "Chester A. Arthur", keyFacts: ["Assassinated after 6 months", "Civil service reform advocate"] },
    { number: 21, name: "Chester A. Arthur", years: "1881-1885", party: "Republican", vicePresident: "None", keyFacts: ["Pendleton Civil Service Act", "Reformed civil service", "Gentleman Boss"] },
    { number: 22, name: "Grover Cleveland", years: "1885-1889", party: "Democratic", vicePresident: "Thomas A. Hendricks", keyFacts: ["Only president to serve non-consecutive terms", "Vetoed many bills", "First term"] },
    { number: 23, name: "Benjamin Harrison", years: "1889-1893", party: "Republican", vicePresident: "Levi P. Morton", keyFacts: ["Grandson of William Henry Harrison", "Sherman Antitrust Act", "Six states admitted"] },
    { number: 24, name: "Grover Cleveland", years: "1893-1897", party: "Democratic", vicePresident: "Adlai Stevenson I", keyFacts: ["Only president counted twice", "Panic of 1893", "Second term"] },
    { number: 25, name: "William McKinley", years: "1897-1901", party: "Republican", vicePresident: "Garret Hobart, Theodore Roosevelt", keyFacts: ["Spanish-American War", "Annexed Hawaii, Philippines", "Assassinated"] },
    { number: 26, name: "Theodore Roosevelt", years: "1901-1909", party: "Republican", vicePresident: "Charles W. Fairbanks", keyFacts: ["Youngest president at 42", "Trust buster", "Panama Canal", "National parks", "Nobel Peace Prize"] },
    { number: 27, name: "William Howard Taft", years: "1909-1913", party: "Republican", vicePresident: "James S. Sherman", keyFacts: ["Heaviest president", "Later Chief Justice", "Dollar diplomacy"] },
    { number: 28, name: "Woodrow Wilson", years: "1913-1921", party: "Democratic", vicePresident: "Thomas R. Marshall", keyFacts: ["World War I", "League of Nations", "Federal Reserve", "19th Amendment"] },
    { number: 29, name: "Warren G. Harding", years: "1921-1923", party: "Republican", vicePresident: "Calvin Coolidge", keyFacts: ["Return to normalcy", "Teapot Dome scandal", "Died in office"] },
    { number: 30, name: "Calvin Coolidge", years: "1923-1929", party: "Republican", vicePresident: "Charles G. Dawes", keyFacts: ["Silent Cal", "Roaring Twenties prosperity", "Small government"] },
    { number: 31, name: "Herbert Hoover", years: "1929-1933", party: "Republican", vicePresident: "Charles Curtis", keyFacts: ["Great Depression began", "Hoovervilles", "Engineer and humanitarian"] },
    { number: 32, name: "Franklin D. Roosevelt", years: "1933-1945", party: "Democratic", vicePresident: "John Nance Garner, Henry Wallace, Harry Truman", keyFacts: ["Only president elected 4 times", "New Deal", "WWII", "Died in office"] },
    { number: 33, name: "Harry S. Truman", years: "1945-1953", party: "Democratic", vicePresident: "Alben W. Barkley", keyFacts: ["Atomic bomb decision", "Cold War began", "Korean War", "Fair Deal"] },
    { number: 34, name: "Dwight D. Eisenhower", years: "1953-1961", party: "Republican", vicePresident: "Richard Nixon", keyFacts: ["WWII Supreme Commander", "Interstate highways", "Cold War", "Warned of military-industrial complex"] },
    { number: 35, name: "John F. Kennedy", years: "1961-1963", party: "Democratic", vicePresident: "Lyndon B. Johnson", keyFacts: ["Youngest elected president", "Cuban Missile Crisis", "Space race", "Assassinated"] },
    { number: 36, name: "Lyndon B. Johnson", years: "1963-1969", party: "Democratic", vicePresident: "Hubert Humphrey", keyFacts: ["Great Society", "Civil Rights Act", "Vietnam War escalation", "Medicare/Medicaid"] },
    { number: 37, name: "Richard Nixon", years: "1969-1974", party: "Republican", vicePresident: "Spiro Agnew, Gerald Ford", keyFacts: ["Opened relations with China", "Watergate scandal", "Only president to resign", "EPA created"] },
    { number: 38, name: "Gerald Ford", years: "1974-1977", party: "Republican", vicePresident: "Nelson Rockefeller", keyFacts: ["Only unelected president", "Pardoned Nixon", "Helped heal nation"] },
    { number: 39, name: "Jimmy Carter", years: "1977-1981", party: "Democratic", vicePresident: "Walter Mondale", keyFacts: ["Camp David Accords", "Iran hostage crisis", "Energy crisis", "Nobel Peace Prize (2002)"] },
    { number: 40, name: "Ronald Reagan", years: "1981-1989", party: "Republican", vicePresident: "George H.W. Bush", keyFacts: ["Oldest president at the time", "Cold War end began", "Reaganomics", "Survived assassination attempt"] },
    { number: 41, name: "George H.W. Bush", years: "1989-1993", party: "Republican", vicePresident: "Dan Quayle", keyFacts: ["Gulf War", "End of Cold War", "Read my lips", "ADA signed"] },
    { number: 42, name: "Bill Clinton", years: "1993-2001", party: "Democratic", vicePresident: "Al Gore", keyFacts: ["Economic prosperity", "NAFTA", "Impeached (acquitted)", "Budget surplus"] },
    { number: 43, name: "George W. Bush", years: "2001-2009", party: "Republican", vicePresident: "Dick Cheney", keyFacts: ["9/11 attacks", "War on Terror", "Iraq and Afghanistan wars", "Great Recession began"] },
    { number: 44, name: "Barack Obama", years: "2009-2017", party: "Democratic", vicePresident: "Joe Biden", keyFacts: ["First African American president", "Affordable Care Act", "Bin Laden killed", "Paris Climate Agreement"] },
    { number: 45, name: "Donald Trump", years: "2017-2021", party: "Republican", vicePresident: "Mike Pence", keyFacts: ["First term", "Tax cuts", "COVID-19 pandemic", "Impeached twice (acquitted)", "First president with no prior political/military experience"] },
    { number: 46, name: "Joe Biden", years: "2021-2025", party: "Democratic", vicePresident: "Kamala Harris", keyFacts: ["Oldest president elected", "COVID-19 vaccines", "Infrastructure bill", "First female VP (Harris)"] },
    { number: 47, name: "Donald Trump", years: "2025-present", party: "Republican", vicePresident: "JD Vance", keyFacts: ["Second non-consecutive term", "Only second president to serve non-consecutive terms (after Cleveland)"] }
];

// =====================================================
// ENGLISH TEST READING VOCABULARY
// =====================================================
const readingVocabulary = {
    civicsWords: [
        "President", "Congress", "Senate", "House", "Supreme Court",
        "Constitution", "Bill of Rights", "Amendment", "Capitol",
        "White House", "flag", "vote", "citizen", "American", "United States"
    ],
    peopleWords: [
        "Abraham Lincoln", "George Washington", "Thomas Jefferson",
        "Benjamin Franklin", "Martin Luther King Jr."
    ],
    placesWords: [
        "America", "United States", "U.S.", "Washington", "Washington D.C."
    ],
    holidaysWords: [
        "Presidents' Day", "Memorial Day", "Flag Day", "Independence Day",
        "Labor Day", "Columbus Day", "Thanksgiving", "Christmas"
    ],
    questionWords: [
        "How", "What", "When", "Where", "Who", "Why"
    ],
    verbWords: [
        "can", "come", "do/does", "elects", "have/has", "is/are/was/be",
        "lives/lived", "meet", "name", "pay", "vote", "want"
    ],
    otherContentWords: [
        "a", "for", "here", "in", "of", "on", "the", "to", "we",
        "and", "during", "but", "or", "dollar bill", "first", "largest",
        "many", "most", "north", "one", "people", "second", "south"
    ]
};

// =====================================================
// ENGLISH TEST WRITING VOCABULARY
// =====================================================
const writingVocabulary = {
    civicsWords: [
        "President", "Congress", "Senate", "House", "Supreme Court",
        "Constitution", "Bill of Rights", "Amendment", "Capitol",
        "White House", "flag", "vote", "citizen", "American", "United States",
        "state/states", "capital", "country", "government", "freedom"
    ],
    peopleWords: [
        "Adams", "Lincoln", "Washington"
    ],
    placesWords: [
        "Alaska", "California", "Canada", "Delaware", "Mexico",
        "New York City", "United States", "Washington", "Washington D.C."
    ],
    monthsWords: [
        "February", "May", "June", "July", "September", "October", "November"
    ],
    holidaysWords: [
        "Presidents' Day", "Memorial Day", "Flag Day", "Independence Day",
        "Labor Day", "Columbus Day", "Thanksgiving"
    ],
    verbWords: [
        "can", "come", "elect", "have/has", "is/was/be",
        "lives/lived", "meets", "pay", "vote", "want"
    ],
    otherContentWords: [
        "a", "and", "during", "for", "here", "in", "of", "on", "the", "to", "we",
        "colors", "dollar bill", "first", "largest", "many", "most",
        "north", "one", "people", "right/rights", "second", "south"
    ]
};

// =====================================================
// READING TEST SENTENCES
// =====================================================
const readingSentences = [
    "Abraham Lincoln was President during the Civil War.",
    "George Washington was the first President.",
    "We vote for President in November.",
    "Congress meets in the Capitol.",
    "The President lives in the White House.",
    "The flag has 50 stars.",
    "The flag has 13 stripes.",
    "The Bill of Rights protects our freedoms.",
    "Citizens can vote.",
    "The United States has 50 states.",
    "Lincoln freed the slaves.",
    "Washington is on the dollar bill.",
    "Who was the first President?",
    "What is the capital of the United States?",
    "When do we vote for President?",
    "Where does Congress meet?",
    "How many states are in the United States?",
    "Independence Day is in July.",
    "Memorial Day is in May.",
    "Presidents' Day is in February.",
    "The Supreme Court is the highest court.",
    "The Constitution is the supreme law.",
    "Americans elect the President.",
    "What are the colors of the flag?",
    "The colors of the flag are red, white, and blue."
];

// =====================================================
// WRITING TEST SENTENCES
// =====================================================
const writingSentences = [
    "Adams was the second President.",
    "Alaska is the largest state.",
    "California has the most people.",
    "Canada is north of the United States.",
    "Citizens can vote.",
    "Columbus Day is in October.",
    "Congress meets in Washington, D.C.",
    "Delaware was the first state.",
    "Flag Day is in June.",
    "Independence Day is in July.",
    "Labor Day is in September.",
    "Lincoln was President during the Civil War.",
    "Memorial Day is in May.",
    "Mexico is south of the United States.",
    "New York City was the first capital.",
    "Presidents' Day is in February.",
    "Thanksgiving is in November.",
    "The President lives in the White House.",
    "The United States has 50 states.",
    "Washington is on the dollar bill.",
    "Washington was the first President.",
    "We elect the President in November.",
    "We have freedom of speech.",
    "We pay taxes.",
    "The flag has red, white, and blue."
];

// =====================================================
// VOCABULARY BUILDER TERMS
// =====================================================
const citizenshipVocabulary = [
    { term: "Amendment", definition: "A change or addition to the Constitution", pronunciation: "uh-MEND-ment" },
    { term: "Bill of Rights", definition: "The first 10 amendments to the Constitution that protect individual freedoms", pronunciation: "bill of RYTS" },
    { term: "Cabinet", definition: "The group of advisors to the President who head executive departments", pronunciation: "KAB-in-et" },
    { term: "Citizen", definition: "A person who owes loyalty to and is protected by a country", pronunciation: "SIT-ih-zen" },
    { term: "Congress", definition: "The legislative branch of the U.S. government, made up of the Senate and House", pronunciation: "KONG-gress" },
    { term: "Constitution", definition: "The supreme law of the United States that establishes the government", pronunciation: "kon-stih-TOO-shun" },
    { term: "Democracy", definition: "A government where power comes from the people", pronunciation: "deh-MOK-ruh-see" },
    { term: "Electoral College", definition: "The group that formally elects the President", pronunciation: "ee-LEK-tor-ul KOL-ij" },
    { term: "Executive Branch", definition: "The part of government that enforces laws, headed by the President", pronunciation: "eg-ZEK-yoo-tiv" },
    { term: "Federalism", definition: "The sharing of power between national and state governments", pronunciation: "FED-er-ul-iz-um" },
    { term: "House of Representatives", definition: "The lower chamber of Congress with 435 members based on state population", pronunciation: "rep-rih-ZEN-tuh-tivs" },
    { term: "Impeachment", definition: "The process of formally charging a government official with misconduct", pronunciation: "im-PEECH-ment" },
    { term: "Judicial Branch", definition: "The part of government that interprets laws, including the Supreme Court", pronunciation: "joo-DISH-ul" },
    { term: "Legislative Branch", definition: "The part of government that makes laws, which is Congress", pronunciation: "LEJ-is-lay-tiv" },
    { term: "Naturalization", definition: "The process by which a foreign citizen becomes a U.S. citizen", pronunciation: "nach-er-ul-ih-ZAY-shun" },
    { term: "Oath of Allegiance", definition: "The promise of loyalty new citizens make to the United States", pronunciation: "ohth of uh-LEE-junce" },
    { term: "Petition", definition: "A formal written request to the government", pronunciation: "puh-TIH-shun" },
    { term: "Ratify", definition: "To formally approve or confirm", pronunciation: "RAT-ih-fy" },
    { term: "Republic", definition: "A form of government where people elect representatives", pronunciation: "rih-PUB-lik" },
    { term: "Senate", definition: "The upper chamber of Congress with 100 members (2 per state)", pronunciation: "SEN-it" },
    { term: "Separation of Powers", definition: "The division of government into three branches", pronunciation: "sep-uh-RAY-shun" },
    { term: "Supreme Court", definition: "The highest court in the United States", pronunciation: "soo-PREEM kort" },
    { term: "Veto", definition: "The President's power to reject a bill passed by Congress", pronunciation: "VEE-toh" }
];

// =====================================================
// NATURALIZATION PROCESS STEPS
// =====================================================
const naturalizationProcess = [
    {
        step: 1,
        title: "Determine Eligibility",
        description: "Check if you meet basic requirements: 18+ years old, lawful permanent resident (green card holder) for 5 years (or 3 years if married to U.S. citizen), continuous residence, physical presence, good moral character.",
        tips: ["Use the USCIS eligibility calculator online", "Check your green card dates carefully", "Count your time outside the U.S."]
    },
    {
        step: 2,
        title: "Complete Form N-400",
        description: "Fill out the Application for Naturalization (Form N-400). Provide information about your background, residence, employment, and travel history.",
        tips: ["Be completely honest", "Gather documents before starting", "Double-check all dates and addresses", "You can file online or by mail"]
    },
    {
        step: 3,
        title: "Submit Application and Fees",
        description: "Submit your N-400 with required documents and filing fee ($760 as of 2024, or fee waiver if eligible). Documents include photos, copy of green card, and any supporting evidence.",
        tips: ["Keep copies of everything", "Use certified mail or track online submission", "Check current fees on USCIS website"]
    },
    {
        step: 4,
        title: "Biometrics Appointment",
        description: "Attend your scheduled biometrics appointment to have your fingerprints, photo, and signature taken for background check.",
        tips: ["Bring your appointment notice", "Arrive early", "Bring valid ID (green card)"]
    },
    {
        step: 5,
        title: "Complete Background Check",
        description: "USCIS conducts a background check using your biometrics. This happens automatically - you just wait.",
        tips: ["Processing times vary by location", "Check case status online", "Respond quickly to any requests for evidence"]
    },
    {
        step: 6,
        title: "Attend Interview",
        description: "Meet with a USCIS officer who will review your application, test your English (reading, writing, speaking), and ask you civics questions (up to 10, need 6 correct).",
        tips: ["Study all 100 civics questions", "Practice speaking English", "Bring original documents", "Dress professionally", "Be honest and calm"]
    },
    {
        step: 7,
        title: "Receive Decision",
        description: "After your interview, you'll be told if your application is granted, continued (need more info), or denied.",
        tips: ["If continued, respond quickly", "If denied, you may appeal", "Most people pass on the first try"]
    },
    {
        step: 8,
        title: "Take Oath of Allegiance",
        description: "Attend a naturalization ceremony and take the Oath of Allegiance to become a U.S. citizen. You'll receive your Certificate of Naturalization.",
        tips: ["This is a celebration - enjoy it!", "Bring your green card (you'll surrender it)", "You can register to vote the same day"]
    },
    {
        step: 9,
        title: "Celebrate and Next Steps",
        description: "You're now a U.S. citizen! Register to vote, apply for a U.S. passport, and update your Social Security record.",
        tips: ["Register to vote right away", "Apply for passport (use certificate)", "Keep your certificate safe", "You can now petition for family members"]
    }
];

// =====================================================
// N-400 FORM SECTIONS GUIDE
// =====================================================
const n400Guide = [
    {
        part: "Part 1",
        title: "Information About Your Eligibility",
        description: "Select why you're eligible to apply (5-year resident, 3-year married to citizen, military service, etc.)"
    },
    {
        part: "Part 2",
        title: "Information About You",
        description: "Your current legal name, name at birth, other names used, date of birth, country of birth, etc."
    },
    {
        part: "Part 3",
        title: "Accommodations for Disabilities",
        description: "Request accommodations if you have disabilities affecting your ability to take the tests"
    },
    {
        part: "Part 4",
        title: "Information About Your Contact",
        description: "Your daytime phone number and email address"
    },
    {
        part: "Part 5",
        title: "Information About Your Residence",
        description: "Your current address and addresses for the past 5 years"
    },
    {
        part: "Part 6",
        title: "Information About Your Parents",
        description: "Whether your parents are U.S. citizens (could affect your citizenship)"
    },
    {
        part: "Part 7",
        title: "Biographic Information",
        description: "Ethnicity, race, height, weight, eye color, hair color"
    },
    {
        part: "Part 8",
        title: "Information About Your Employment",
        description: "Employment history for the past 5 years"
    },
    {
        part: "Part 9",
        title: "Time Outside the United States",
        description: "All trips outside the U.S. in the past 5 years"
    },
    {
        part: "Part 10",
        title: "Information About Your Marital History",
        description: "Current marriage and previous marriages"
    },
    {
        part: "Part 11",
        title: "Information About Your Children",
        description: "All biological, adopted, and stepchildren"
    },
    {
        part: "Part 12",
        title: "Additional Information About You",
        description: "Questions about good moral character, arrests, organizations, military service, oath requirements"
    }
];

// =====================================================
// ACHIEVEMENT DEFINITIONS
// =====================================================
const achievements = [
    { id: "first_card", name: "First Step", description: "View your first flashcard", icon: "🎯", points: 10 },
    { id: "ten_cards", name: "Getting Started", description: "Study 10 flashcards", icon: "📚", points: 25 },
    { id: "fifty_cards", name: "Dedicated Learner", description: "Study 50 flashcards", icon: "🌟", points: 50 },
    { id: "all_cards", name: "Completionist", description: "Study all 100 questions", icon: "🏆", points: 100 },
    { id: "first_quiz", name: "Quiz Taker", description: "Complete your first quiz", icon: "✏️", points: 15 },
    { id: "perfect_quiz", name: "Perfect Score", description: "Get 100% on a quiz", icon: "💯", points: 75 },
    { id: "first_exam", name: "Test Ready", description: "Take your first practice exam", icon: "📝", points: 20 },
    { id: "pass_exam", name: "Passing Grade", description: "Pass a practice exam (6+ correct)", icon: "✅", points: 50 },
    { id: "perfect_exam", name: "Ace the Test", description: "Get all 10 questions right on an exam", icon: "🎖️", points: 100 },
    { id: "streak_3", name: "Three Day Streak", description: "Study 3 days in a row", icon: "🔥", points: 30 },
    { id: "streak_7", name: "Week Warrior", description: "Study 7 days in a row", icon: "💪", points: 75 },
    { id: "streak_30", name: "Monthly Master", description: "Study 30 days in a row", icon: "👑", points: 200 },
    { id: "speed_demon", name: "Speed Demon", description: "Answer 10 questions correctly in under 2 minutes", icon: "⚡", points: 50 },
    { id: "category_master", name: "Category Expert", description: "Master all questions in one category", icon: "🎓", points: 40 },
    { id: "all_categories", name: "Well-Rounded", description: "Study questions from all categories", icon: "🌈", points: 35 },
    { id: "night_owl", name: "Night Owl", description: "Study after 10 PM", icon: "🦉", points: 15 },
    { id: "early_bird", name: "Early Bird", description: "Study before 7 AM", icon: "🐦", points: 15 },
    { id: "audio_learner", name: "Audio Learner", description: "Use text-to-speech feature 10 times", icon: "🔊", points: 25 },
    { id: "note_taker", name: "Note Taker", description: "Add personal notes to 10 questions", icon: "📝", points: 30 },
    { id: "reviewer", name: "Thorough Reviewer", description: "Review all your marked questions", icon: "⭐", points: 35 }
];

// =====================================================
// DAILY CHALLENGES
// =====================================================
const dailyChallengeTypes = [
    { type: "quick_quiz", name: "Quick Quiz", description: "Answer 10 random questions", goal: 10, reward: 20 },
    { type: "category_focus", name: "Category Focus", description: "Answer 5 questions from {category}", goal: 5, reward: 15 },
    { type: "speed_round", name: "Speed Round", description: "Answer 5 questions correctly in under 1 minute", goal: 5, reward: 25 },
    { type: "perfect_set", name: "Perfect Set", description: "Get 5 questions correct in a row", goal: 5, reward: 30 },
    { type: "study_session", name: "Study Session", description: "Study for at least 10 minutes", goal: 600, reward: 20 },
    { type: "flashcard_flip", name: "Flashcard Master", description: "Review 20 flashcards", goal: 20, reward: 15 },
    { type: "weak_areas", name: "Weakness Crusher", description: "Practice 5 of your weak questions", goal: 5, reward: 25 },
    { type: "exam_practice", name: "Exam Ready", description: "Complete a full practice exam", goal: 1, reward: 30 }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        questionEnhancements,
        constitutionalAmendments,
        allPresidents,
        readingVocabulary,
        writingVocabulary,
        readingSentences,
        writingSentences,
        citizenshipVocabulary,
        naturalizationProcess,
        n400Guide,
        achievements,
        dailyChallengeTypes
    };
}
