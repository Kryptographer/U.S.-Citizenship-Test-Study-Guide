// Current U.S. Government Officials Database
// Last Updated: January 2026
// Note: This data should be updated when officials change

const currentOfficials = {
    // Executive Branch
    president: {
        name: "Donald Trump",
        title: "President of the United States",
        party: "Republican",
        termStart: "January 20, 2025",
        termEnd: "January 20, 2029",
        initials: "DT"
    },
    vicePresident: {
        name: "JD Vance",
        title: "Vice President of the United States",
        party: "Republican",
        termStart: "January 20, 2025",
        termEnd: "January 20, 2029",
        initials: "JV"
    },

    // Legislative Branch
    speaker: {
        name: "Mike Johnson",
        title: "Speaker of the House",
        party: "Republican",
        state: "Louisiana",
        termStart: "October 25, 2023",
        initials: "MJ"
    },
    senateMajorityLeader: {
        name: "John Thune",
        title: "Senate Majority Leader",
        party: "Republican",
        state: "South Dakota",
        termStart: "January 3, 2025",
        initials: "JT"
    },
    senateMinorityLeader: {
        name: "Chuck Schumer",
        title: "Senate Minority Leader",
        party: "Democratic",
        state: "New York",
        initials: "CS"
    },
    houseMinorityLeader: {
        name: "Hakeem Jeffries",
        title: "House Minority Leader",
        party: "Democratic",
        state: "New York",
        initials: "HJ"
    },

    // Judicial Branch - Supreme Court
    chiefJustice: {
        name: "John Roberts",
        title: "Chief Justice of the United States",
        appointedBy: "George W. Bush",
        termStart: "September 29, 2005",
        termEnd: "Lifetime appointment",
        initials: "JR"
    },
    associateJustices: [
        {
            name: "Clarence Thomas",
            appointedBy: "George H.W. Bush",
            termStart: "October 23, 1991",
            initials: "CT"
        },
        {
            name: "Samuel Alito",
            appointedBy: "George W. Bush",
            termStart: "January 31, 2006",
            initials: "SA"
        },
        {
            name: "Sonia Sotomayor",
            appointedBy: "Barack Obama",
            termStart: "August 8, 2009",
            initials: "SS"
        },
        {
            name: "Elena Kagan",
            appointedBy: "Barack Obama",
            termStart: "August 7, 2010",
            initials: "EK"
        },
        {
            name: "Neil Gorsuch",
            appointedBy: "Donald Trump",
            termStart: "April 10, 2017",
            initials: "NG"
        },
        {
            name: "Brett Kavanaugh",
            appointedBy: "Donald Trump",
            termStart: "October 6, 2018",
            initials: "BK"
        },
        {
            name: "Amy Coney Barrett",
            appointedBy: "Donald Trump",
            termStart: "October 27, 2020",
            initials: "AB"
        },
        {
            name: "Ketanji Brown Jackson",
            appointedBy: "Joe Biden",
            termStart: "June 30, 2022",
            initials: "KJ"
        }
    ]
};

// State data with governors and senators
const stateData = {
    "Alabama": {
        capital: "Montgomery",
        governor: { name: "Kay Ivey", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "Tommy Tuberville", party: "Republican", termEnd: "2027" },
            { name: "Katie Britt", party: "Republican", termEnd: "2029" }
        ]
    },
    "Alaska": {
        capital: "Juneau",
        governor: { name: "Mike Dunleavy", party: "Republican", termEnd: "2026" },
        senators: [
            { name: "Lisa Murkowski", party: "Republican", termEnd: "2029" },
            { name: "Dan Sullivan", party: "Republican", termEnd: "2027" }
        ]
    },
    "Arizona": {
        capital: "Phoenix",
        governor: { name: "Katie Hobbs", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Ruben Gallego", party: "Democratic", termEnd: "2031" },
            { name: "Mark Kelly", party: "Democratic", termEnd: "2029" }
        ]
    },
    "Arkansas": {
        capital: "Little Rock",
        governor: { name: "Sarah Huckabee Sanders", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "John Boozman", party: "Republican", termEnd: "2027" },
            { name: "Tom Cotton", party: "Republican", termEnd: "2027" }
        ]
    },
    "California": {
        capital: "Sacramento",
        governor: { name: "Gavin Newsom", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Alex Padilla", party: "Democratic", termEnd: "2029" },
            { name: "Adam Schiff", party: "Democratic", termEnd: "2029" }
        ]
    },
    "Colorado": {
        capital: "Denver",
        governor: { name: "Jared Polis", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Michael Bennet", party: "Democratic", termEnd: "2027" },
            { name: "John Hickenlooper", party: "Democratic", termEnd: "2027" }
        ]
    },
    "Connecticut": {
        capital: "Hartford",
        governor: { name: "Ned Lamont", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Richard Blumenthal", party: "Democratic", termEnd: "2029" },
            { name: "Chris Murphy", party: "Democratic", termEnd: "2031" }
        ]
    },
    "Delaware": {
        capital: "Dover",
        governor: { name: "Matt Meyer", party: "Democratic", termEnd: "2029" },
        senators: [
            { name: "Lisa Blunt Rochester", party: "Democratic", termEnd: "2031" },
            { name: "Chris Coons", party: "Democratic", termEnd: "2027" }
        ]
    },
    "Florida": {
        capital: "Tallahassee",
        governor: { name: "Ron DeSantis", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "Ashley Moody", party: "Republican", termEnd: "2029" },
            { name: "Rick Scott", party: "Republican", termEnd: "2031" }
        ]
    },
    "Georgia": {
        capital: "Atlanta",
        governor: { name: "Brian Kemp", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "Jon Ossoff", party: "Democratic", termEnd: "2027" },
            { name: "Raphael Warnock", party: "Democratic", termEnd: "2029" }
        ]
    },
    "Hawaii": {
        capital: "Honolulu",
        governor: { name: "Josh Green", party: "Democratic", termEnd: "2026" },
        senators: [
            { name: "Brian Schatz", party: "Democratic", termEnd: "2029" },
            { name: "Mazie Hirono", party: "Democratic", termEnd: "2031" }
        ]
    },
    "Idaho": {
        capital: "Boise",
        governor: { name: "Brad Little", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "Mike Crapo", party: "Republican", termEnd: "2029" },
            { name: "Jim Risch", party: "Republican", termEnd: "2027" }
        ]
    },
    "Illinois": {
        capital: "Springfield",
        governor: { name: "JB Pritzker", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Dick Durbin", party: "Democratic", termEnd: "2027" },
            { name: "Tammy Duckworth", party: "Democratic", termEnd: "2029" }
        ]
    },
    "Indiana": {
        capital: "Indianapolis",
        governor: { name: "Mike Braun", party: "Republican", termEnd: "2029" },
        senators: [
            { name: "Todd Young", party: "Republican", termEnd: "2029" },
            { name: "Jim Banks", party: "Republican", termEnd: "2029" }
        ]
    },
    "Iowa": {
        capital: "Des Moines",
        governor: { name: "Kim Reynolds", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "Chuck Grassley", party: "Republican", termEnd: "2029" },
            { name: "Joni Ernst", party: "Republican", termEnd: "2027" }
        ]
    },
    "Kansas": {
        capital: "Topeka",
        governor: { name: "Laura Kelly", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Jerry Moran", party: "Republican", termEnd: "2029" },
            { name: "Roger Marshall", party: "Republican", termEnd: "2027" }
        ]
    },
    "Kentucky": {
        capital: "Frankfort",
        governor: { name: "Andy Beshear", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Mitch McConnell", party: "Republican", termEnd: "2027" },
            { name: "Rand Paul", party: "Republican", termEnd: "2029" }
        ]
    },
    "Louisiana": {
        capital: "Baton Rouge",
        governor: { name: "Jeff Landry", party: "Republican", termEnd: "2028" },
        senators: [
            { name: "Bill Cassidy", party: "Republican", termEnd: "2027" },
            { name: "John Kennedy", party: "Republican", termEnd: "2029" }
        ]
    },
    "Maine": {
        capital: "Augusta",
        governor: { name: "Janet Mills", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Susan Collins", party: "Republican", termEnd: "2027" },
            { name: "Angus King", party: "Independent", termEnd: "2031" }
        ]
    },
    "Maryland": {
        capital: "Annapolis",
        governor: { name: "Wes Moore", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Angela Alsobrooks", party: "Democratic", termEnd: "2031" },
            { name: "Chris Van Hollen", party: "Democratic", termEnd: "2029" }
        ]
    },
    "Massachusetts": {
        capital: "Boston",
        governor: { name: "Maura Healey", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Elizabeth Warren", party: "Democratic", termEnd: "2031" },
            { name: "Ed Markey", party: "Democratic", termEnd: "2027" }
        ]
    },
    "Michigan": {
        capital: "Lansing",
        governor: { name: "Gretchen Whitmer", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Gary Peters", party: "Democratic", termEnd: "2027" },
            { name: "Elissa Slotkin", party: "Democratic", termEnd: "2031" }
        ]
    },
    "Minnesota": {
        capital: "Saint Paul",
        governor: { name: "Tim Walz", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Amy Klobuchar", party: "Democratic", termEnd: "2031" },
            { name: "Tina Smith", party: "Democratic", termEnd: "2027" }
        ]
    },
    "Mississippi": {
        capital: "Jackson",
        governor: { name: "Tate Reeves", party: "Republican", termEnd: "2028" },
        senators: [
            { name: "Roger Wicker", party: "Republican", termEnd: "2031" },
            { name: "Cindy Hyde-Smith", party: "Republican", termEnd: "2027" }
        ]
    },
    "Missouri": {
        capital: "Jefferson City",
        governor: { name: "Mike Kehoe", party: "Republican", termEnd: "2029" },
        senators: [
            { name: "Josh Hawley", party: "Republican", termEnd: "2031" },
            { name: "Eric Schmitt", party: "Republican", termEnd: "2029" }
        ]
    },
    "Montana": {
        capital: "Helena",
        governor: { name: "Greg Gianforte", party: "Republican", termEnd: "2029" },
        senators: [
            { name: "Tim Sheehy", party: "Republican", termEnd: "2031" },
            { name: "Steve Daines", party: "Republican", termEnd: "2027" }
        ]
    },
    "Nebraska": {
        capital: "Lincoln",
        governor: { name: "Jim Pillen", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "Deb Fischer", party: "Republican", termEnd: "2031" },
            { name: "Pete Ricketts", party: "Republican", termEnd: "2027" }
        ]
    },
    "Nevada": {
        capital: "Carson City",
        governor: { name: "Joe Lombardo", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "Catherine Cortez Masto", party: "Democratic", termEnd: "2029" },
            { name: "Jacky Rosen", party: "Democratic", termEnd: "2031" }
        ]
    },
    "New Hampshire": {
        capital: "Concord",
        governor: { name: "Kelly Ayotte", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "Jeanne Shaheen", party: "Democratic", termEnd: "2027" },
            { name: "Maggie Hassan", party: "Democratic", termEnd: "2029" }
        ]
    },
    "New Jersey": {
        capital: "Trenton",
        governor: { name: "Phil Murphy", party: "Democratic", termEnd: "2026" },
        senators: [
            { name: "Cory Booker", party: "Democratic", termEnd: "2027" },
            { name: "Andy Kim", party: "Democratic", termEnd: "2029" }
        ]
    },
    "New Mexico": {
        capital: "Santa Fe",
        governor: { name: "Michelle Lujan Grisham", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Martin Heinrich", party: "Democratic", termEnd: "2031" },
            { name: "Ben Ray Luján", party: "Democratic", termEnd: "2027" }
        ]
    },
    "New York": {
        capital: "Albany",
        governor: { name: "Kathy Hochul", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Chuck Schumer", party: "Democratic", termEnd: "2029" },
            { name: "Kirsten Gillibrand", party: "Democratic", termEnd: "2031" }
        ]
    },
    "North Carolina": {
        capital: "Raleigh",
        governor: { name: "Josh Stein", party: "Democratic", termEnd: "2029" },
        senators: [
            { name: "Thom Tillis", party: "Republican", termEnd: "2027" },
            { name: "Ted Budd", party: "Republican", termEnd: "2029" }
        ]
    },
    "North Dakota": {
        capital: "Bismarck",
        governor: { name: "Kelly Armstrong", party: "Republican", termEnd: "2028" },
        senators: [
            { name: "John Hoeven", party: "Republican", termEnd: "2029" },
            { name: "Kevin Cramer", party: "Republican", termEnd: "2031" }
        ]
    },
    "Ohio": {
        capital: "Columbus",
        governor: { name: "Mike DeWine", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "Bernie Moreno", party: "Republican", termEnd: "2031" },
            { name: "Jon Husted", party: "Republican", termEnd: "2027" }
        ]
    },
    "Oklahoma": {
        capital: "Oklahoma City",
        governor: { name: "Kevin Stitt", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "James Lankford", party: "Republican", termEnd: "2029" },
            { name: "Markwayne Mullin", party: "Republican", termEnd: "2027" }
        ]
    },
    "Oregon": {
        capital: "Salem",
        governor: { name: "Tina Kotek", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Ron Wyden", party: "Democratic", termEnd: "2029" },
            { name: "Jeff Merkley", party: "Democratic", termEnd: "2027" }
        ]
    },
    "Pennsylvania": {
        capital: "Harrisburg",
        governor: { name: "Josh Shapiro", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Dave McCormick", party: "Republican", termEnd: "2031" },
            { name: "John Fetterman", party: "Democratic", termEnd: "2029" }
        ]
    },
    "Rhode Island": {
        capital: "Providence",
        governor: { name: "Dan McKee", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Jack Reed", party: "Democratic", termEnd: "2027" },
            { name: "Sheldon Whitehouse", party: "Democratic", termEnd: "2031" }
        ]
    },
    "South Carolina": {
        capital: "Columbia",
        governor: { name: "Henry McMaster", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "Lindsey Graham", party: "Republican", termEnd: "2027" },
            { name: "Tim Scott", party: "Republican", termEnd: "2029" }
        ]
    },
    "South Dakota": {
        capital: "Pierre",
        governor: { name: "Larry Rhoden", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "John Thune", party: "Republican", termEnd: "2029" },
            { name: "Mike Rounds", party: "Republican", termEnd: "2027" }
        ]
    },
    "Tennessee": {
        capital: "Nashville",
        governor: { name: "Bill Lee", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "Marsha Blackburn", party: "Republican", termEnd: "2031" },
            { name: "Bill Hagerty", party: "Republican", termEnd: "2027" }
        ]
    },
    "Texas": {
        capital: "Austin",
        governor: { name: "Greg Abbott", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "John Cornyn", party: "Republican", termEnd: "2027" },
            { name: "Ted Cruz", party: "Republican", termEnd: "2031" }
        ]
    },
    "Utah": {
        capital: "Salt Lake City",
        governor: { name: "Spencer Cox", party: "Republican", termEnd: "2029" },
        senators: [
            { name: "Mike Lee", party: "Republican", termEnd: "2029" },
            { name: "John Curtis", party: "Republican", termEnd: "2031" }
        ]
    },
    "Vermont": {
        capital: "Montpelier",
        governor: { name: "Phil Scott", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "Bernie Sanders", party: "Independent", termEnd: "2031" },
            { name: "Peter Welch", party: "Democratic", termEnd: "2029" }
        ]
    },
    "Virginia": {
        capital: "Richmond",
        governor: { name: "Glenn Youngkin", party: "Republican", termEnd: "2026" },
        senators: [
            { name: "Mark Warner", party: "Democratic", termEnd: "2027" },
            { name: "Tim Kaine", party: "Democratic", termEnd: "2031" }
        ]
    },
    "Washington": {
        capital: "Olympia",
        governor: { name: "Bob Ferguson", party: "Democratic", termEnd: "2029" },
        senators: [
            { name: "Patty Murray", party: "Democratic", termEnd: "2029" },
            { name: "Maria Cantwell", party: "Democratic", termEnd: "2031" }
        ]
    },
    "West Virginia": {
        capital: "Charleston",
        governor: { name: "Patrick Morrisey", party: "Republican", termEnd: "2029" },
        senators: [
            { name: "Shelley Moore Capito", party: "Republican", termEnd: "2027" },
            { name: "Jim Justice", party: "Republican", termEnd: "2031" }
        ]
    },
    "Wisconsin": {
        capital: "Madison",
        governor: { name: "Tony Evers", party: "Democratic", termEnd: "2027" },
        senators: [
            { name: "Ron Johnson", party: "Republican", termEnd: "2029" },
            { name: "Tammy Baldwin", party: "Democratic", termEnd: "2031" }
        ]
    },
    "Wyoming": {
        capital: "Cheyenne",
        governor: { name: "Mark Gordon", party: "Republican", termEnd: "2027" },
        senators: [
            { name: "John Barrasso", party: "Republican", termEnd: "2031" },
            { name: "Cynthia Lummis", party: "Republican", termEnd: "2027" }
        ]
    }
};

// Get list of all states
function getStates() {
    return Object.keys(stateData).sort();
}

// Get state information
function getStateInfo(stateName) {
    return stateData[stateName] || null;
}

// Get current answers for variable questions
function getCurrentAnswers(questionId, selectedState = null) {
    const question = civicsQuestions.find(q => q.id === questionId);
    if (!question || !question.isVariable) return question?.answers || [];

    switch (question.variableType) {
        case "president":
            return [currentOfficials.president.name];
        case "vicePresident":
            return [currentOfficials.vicePresident.name];
        case "speaker":
            return [currentOfficials.speaker.name];
        case "chiefJustice":
            return [currentOfficials.chiefJustice.name];
        case "presidentParty":
            return [currentOfficials.president.party];
        case "senator":
            if (selectedState && stateData[selectedState]) {
                return stateData[selectedState].senators.map(s => s.name);
            }
            return ["(Select your state to see your senators)"];
        case "governor":
            if (selectedState && stateData[selectedState]) {
                return [stateData[selectedState].governor.name];
            }
            return ["(Select your state to see your governor)"];
        case "stateCapital":
            if (selectedState && stateData[selectedState]) {
                return [stateData[selectedState].capital];
            }
            return ["(Select your state to see your capital)"];
        case "representative":
            return ["(Depends on your congressional district)"];
        default:
            return question.answers;
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { currentOfficials, stateData, getStates, getStateInfo, getCurrentAnswers };
}
