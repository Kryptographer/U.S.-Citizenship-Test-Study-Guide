// =====================================================
// ENHANCED APP - Additional Features
// =====================================================

// Enhanced State Extensions
AppState.games = {
    speedChallenge: {
        score: 0,
        bestScore: parseInt(localStorage.getItem('speedBestScore')) || 0,
        timeRemaining: 60,
        timer: null,
        isActive: false,
        currentQuestion: null
    },
    matching: {
        cards: [],
        selected: [],
        matches: 0,
        startTime: null,
        timer: null,
        bestTime: localStorage.getItem('matchingBestTime') || null
    },
    fillBlank: {
        questions: [],
        currentIndex: 0,
        correct: 0
    },
    dailyChallenge: {
        completed: localStorage.getItem('dailyChallengeDate') === new Date().toDateString(),
        streak: parseInt(localStorage.getItem('dailyStreak')) || 0
    }
};

AppState.gamification = {
    points: parseInt(localStorage.getItem('totalPoints')) || 0,
    level: parseInt(localStorage.getItem('currentLevel')) || 1,
    achievements: JSON.parse(localStorage.getItem('achievements')) || [],
    lastStudyDate: localStorage.getItem('lastStudyDate') || null,
    streak: parseInt(localStorage.getItem('studyStreak')) || 0
};

AppState.english = {
    currentReadingSentence: null,
    currentWritingSentence: null
};

AppState.vocabulary = {
    currentIndex: 0,
    isFlipped: false
};

AppState.darkMode = localStorage.getItem('darkMode') === 'true';
AppState.audioEnabled = localStorage.getItem('audioEnabled') === 'true';

// =====================================================
// DARK MODE
// =====================================================

function initDarkMode() {
    const darkModeBtn = document.getElementById('dark-mode-toggle');

    if (AppState.darkMode) {
        document.body.classList.add('dark-mode');
        if (darkModeBtn) darkModeBtn.textContent = '☀️';
    }

    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', function() {
            AppState.darkMode = !AppState.darkMode;
            document.body.classList.toggle('dark-mode', AppState.darkMode);
            darkModeBtn.textContent = AppState.darkMode ? '☀️' : '🌙';
            localStorage.setItem('darkMode', AppState.darkMode);
        });
    }
}

// =====================================================
// TEXT-TO-SPEECH
// =====================================================

function initTextToSpeech() {
    const audioToggle = document.getElementById('audio-toggle');

    if (audioToggle) {
        audioToggle.classList.toggle('active', AppState.audioEnabled);

        audioToggle.addEventListener('click', function() {
            AppState.audioEnabled = !AppState.audioEnabled;
            audioToggle.classList.toggle('active', AppState.audioEnabled);
            localStorage.setItem('audioEnabled', AppState.audioEnabled);

            if (AppState.audioEnabled) {
                speak('Audio mode enabled');
            }
        });
    }
}

function speak(text) {
    if (!AppState.audioEnabled && !arguments[1]) return;
    if (!('speechSynthesis' in window)) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voices = speechSynthesis.getVoices();
    const usVoice = voices.find(function(v) { return v.lang === 'en-US'; });
    if (usVoice) utterance.voice = usVoice;

    speechSynthesis.speak(utterance);
}

// Force speak function (ignores audioEnabled)
function forceSpeak(text) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
}

// =====================================================
// GAMES SECTION
// =====================================================

function initGames() {
    var speedBestEl = document.getElementById('speed-best-score');
    var matchBestEl = document.getElementById('matching-best-time');
    var streakEl = document.getElementById('daily-streak');

    if (speedBestEl) speedBestEl.textContent = AppState.games.speedChallenge.bestScore;
    if (matchBestEl) matchBestEl.textContent = AppState.games.matching.bestTime || '--:--';
    if (streakEl) streakEl.textContent = AppState.games.dailyChallenge.streak;

    var startSpeedBtn = document.getElementById('start-speed-challenge');
    var speedSubmitBtn = document.getElementById('speed-submit');
    var speedAnswerInput = document.getElementById('speed-answer');
    var startMatchBtn = document.getElementById('start-matching-game');
    var startFillBtn = document.getElementById('start-fill-blank');
    var fillSubmitBtn = document.getElementById('fill-submit');
    var dailyBtn = document.getElementById('start-daily-challenge');

    if (startSpeedBtn) startSpeedBtn.addEventListener('click', startSpeedChallenge);
    if (speedSubmitBtn) speedSubmitBtn.addEventListener('click', submitSpeedAnswer);
    if (speedAnswerInput) {
        speedAnswerInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') submitSpeedAnswer();
        });
    }
    if (startMatchBtn) startMatchBtn.addEventListener('click', startMatchingGame);
    if (startFillBtn) startFillBtn.addEventListener('click', startFillBlank);
    if (fillSubmitBtn) fillSubmitBtn.addEventListener('click', submitFillAnswer);
    if (dailyBtn) dailyBtn.addEventListener('click', startDailyChallenge);

    renderAchievements();
    updateGamificationStats();
}

function startSpeedChallenge() {
    var state = AppState.games.speedChallenge;
    state.score = 0;
    state.timeRemaining = 60;
    state.isActive = true;

    var gamesGrid = document.querySelector('.games-grid');
    var speedActive = document.getElementById('speed-challenge-active');

    if (gamesGrid) gamesGrid.classList.add('hidden');
    if (speedActive) speedActive.classList.remove('hidden');

    document.getElementById('speed-score').textContent = '0';
    document.getElementById('speed-timer').textContent = '60';
    document.getElementById('speed-timer').className = 'timer-value';

    loadNextSpeedQuestion();

    state.timer = setInterval(function() {
        state.timeRemaining--;
        var timerEl = document.getElementById('speed-timer');
        timerEl.textContent = state.timeRemaining;

        if (state.timeRemaining <= 10) {
            timerEl.className = 'timer-value danger';
        } else if (state.timeRemaining <= 20) {
            timerEl.className = 'timer-value warning';
        }

        if (state.timeRemaining <= 0) {
            endSpeedChallenge();
        }
    }, 1000);
}

function loadNextSpeedQuestion() {
    var randomQ = civicsQuestions[Math.floor(Math.random() * civicsQuestions.length)];
    document.getElementById('speed-question').textContent = randomQ.question;
    document.getElementById('speed-answer').value = '';
    document.getElementById('speed-answer').focus();
    document.getElementById('speed-feedback').textContent = '';
    document.getElementById('speed-feedback').className = 'speed-feedback';

    AppState.games.speedChallenge.currentQuestion = randomQ;
}

function submitSpeedAnswer() {
    var state = AppState.games.speedChallenge;
    if (!state.isActive) return;

    var answer = document.getElementById('speed-answer').value.trim().toLowerCase();
    var feedback = document.getElementById('speed-feedback');

    var isCorrect = state.currentQuestion.answers.some(function(a) {
        return answer.includes(a.toLowerCase()) || a.toLowerCase().includes(answer);
    });

    if (isCorrect) {
        state.score++;
        document.getElementById('speed-score').textContent = state.score;
        feedback.textContent = 'Correct!';
        feedback.className = 'speed-feedback correct';
        addPoints(10);
    } else {
        feedback.textContent = 'Wrong! Answer: ' + state.currentQuestion.answers[0];
        feedback.className = 'speed-feedback incorrect';
    }

    setTimeout(function() {
        if (state.isActive) loadNextSpeedQuestion();
    }, 800);
}

function endSpeedChallenge() {
    var state = AppState.games.speedChallenge;
    state.isActive = false;
    clearInterval(state.timer);

    if (state.score > state.bestScore) {
        state.bestScore = state.score;
        localStorage.setItem('speedBestScore', state.score);
        document.getElementById('speed-best-score').textContent = state.score;
    }

    document.getElementById('speed-feedback').innerHTML =
        '<h3>Time\'s Up!</h3>' +
        '<p>You scored <strong>' + state.score + '</strong> correct answers!</p>' +
        '<p>Best Score: ' + state.bestScore + '</p>' +
        '<button class="btn btn-primary" onclick="location.reload()">Play Again</button>';

    checkAchievement('speed_demon', state.score >= 10);
}

function startMatchingGame() {
    var state = AppState.games.matching;
    state.matches = 0;
    state.selected = [];
    state.startTime = Date.now();

    document.querySelector('.games-grid').classList.add('hidden');
    document.getElementById('matching-game-active').classList.remove('hidden');

    var shuffled = civicsQuestions.slice().sort(function() { return Math.random() - 0.5; }).slice(0, 8);

    state.cards = [];
    shuffled.forEach(function(q, idx) {
        state.cards.push({ id: idx, type: 'question', content: q.question, matchId: idx });
        state.cards.push({ id: idx + 100, type: 'answer', content: q.answers[0], matchId: idx });
    });

    state.cards.sort(function() { return Math.random() - 0.5; });

    renderMatchingBoard();

    state.timer = setInterval(function() {
        var elapsed = Math.floor((Date.now() - state.startTime) / 1000);
        var mins = Math.floor(elapsed / 60);
        var secs = elapsed % 60;
        document.getElementById('matching-timer').textContent = mins + ':' + secs.toString().padStart(2, '0');
    }, 1000);
}

function renderMatchingBoard() {
    var board = document.getElementById('matching-board');
    board.innerHTML = AppState.games.matching.cards.map(function(card, idx) {
        return '<div class="match-card" data-index="' + idx + '" data-match-id="' + card.matchId + '">' +
            '<span class="card-content">' + (card.type === 'question' ? '?' : 'A') + '</span>' +
            '</div>';
    }).join('');

    board.querySelectorAll('.match-card').forEach(function(card) {
        card.addEventListener('click', function() { handleMatchCardClick(card); });
    });
}

function handleMatchCardClick(cardEl) {
    var state = AppState.games.matching;
    var idx = parseInt(cardEl.dataset.index);
    var card = state.cards[idx];

    if (cardEl.classList.contains('matched') || cardEl.classList.contains('selected')) return;

    cardEl.classList.add('flipped', 'selected');
    cardEl.querySelector('.card-content').textContent = card.content;

    state.selected.push({ el: cardEl, card: card });

    if (state.selected.length === 2) {
        var first = state.selected[0];
        var second = state.selected[1];

        if (first.card.matchId === second.card.matchId && first.card.type !== second.card.type) {
            setTimeout(function() {
                first.el.classList.add('matched');
                second.el.classList.add('matched');
                first.el.classList.remove('selected');
                second.el.classList.remove('selected');
                state.matches++;
                document.getElementById('matching-moves').textContent = state.matches;
                addPoints(15);

                if (state.matches === 8) {
                    endMatchingGame();
                }
            }, 500);
        } else {
            setTimeout(function() {
                first.el.classList.remove('flipped', 'selected');
                second.el.classList.remove('flipped', 'selected');
                first.el.querySelector('.card-content').textContent = first.card.type === 'question' ? '?' : 'A';
                second.el.querySelector('.card-content').textContent = second.card.type === 'question' ? '?' : 'A';
            }, 1000);
        }

        state.selected = [];
    }
}

function endMatchingGame() {
    var state = AppState.games.matching;
    clearInterval(state.timer);

    var elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    var mins = Math.floor(elapsed / 60);
    var secs = elapsed % 60;
    var timeStr = mins + ':' + secs.toString().padStart(2, '0');

    if (!state.bestTime || elapsed < parseTime(state.bestTime)) {
        state.bestTime = timeStr;
        localStorage.setItem('matchingBestTime', timeStr);
        document.getElementById('matching-best-time').textContent = timeStr;
    }

    setTimeout(function() {
        alert('Congratulations! You matched all pairs in ' + timeStr + '!');
        location.reload();
    }, 500);
}

function parseTime(timeStr) {
    var parts = timeStr.split(':').map(Number);
    return parts[0] * 60 + parts[1];
}

function startFillBlank() {
    var state = AppState.games.fillBlank;
    state.currentIndex = 0;
    state.correct = 0;

    state.questions = civicsQuestions
        .sort(function() { return Math.random() - 0.5; })
        .slice(0, 10)
        .map(function(q) {
            var answer = q.answers[0];
            var words = answer.split(' ');
            var blankIdx = Math.floor(Math.random() * words.length);
            var blankWord = words[blankIdx];
            words[blankIdx] = '_____';
            return {
                sentence: q.question + ' Answer: ' + words.join(' '),
                answer: blankWord,
                fullAnswer: answer
            };
        });

    document.querySelector('.games-grid').classList.add('hidden');
    document.getElementById('fill-blank-active').classList.remove('hidden');

    loadFillBlankQuestion();
}

function loadFillBlankQuestion() {
    var state = AppState.games.fillBlank;
    var q = state.questions[state.currentIndex];

    document.getElementById('fill-current').textContent = state.currentIndex + 1;
    document.getElementById('fill-correct').textContent = state.correct;
    document.getElementById('fill-sentence').textContent = q.sentence;
    document.getElementById('fill-answer').value = '';
    document.getElementById('fill-answer').focus();
    document.getElementById('fill-feedback').textContent = '';
}

function submitFillAnswer() {
    var state = AppState.games.fillBlank;
    var q = state.questions[state.currentIndex];
    var answer = document.getElementById('fill-answer').value.trim().toLowerCase();
    var feedback = document.getElementById('fill-feedback');

    if (answer === q.answer.toLowerCase()) {
        state.correct++;
        feedback.innerHTML = '<span style="color: var(--success)">✓ Correct!</span>';
        addPoints(10);
    } else {
        feedback.innerHTML = '<span style="color: var(--danger)">✗ The answer was: <strong>' + q.answer + '</strong></span>';
    }

    state.currentIndex++;

    setTimeout(function() {
        if (state.currentIndex < state.questions.length) {
            loadFillBlankQuestion();
        } else {
            endFillBlank();
        }
    }, 1500);
}

function endFillBlank() {
    var state = AppState.games.fillBlank;
    var accuracy = Math.round((state.correct / 10) * 100);

    document.getElementById('fill-accuracy').textContent = accuracy + '%';

    document.getElementById('fill-blank-active').innerHTML =
        '<div class="results-card">' +
        '<h2>Game Complete!</h2>' +
        '<p>You got <strong>' + state.correct + '/10</strong> correct (' + accuracy + '%)</p>' +
        '<button class="btn btn-primary" onclick="location.reload()">Play Again</button>' +
        '</div>';
}

function startDailyChallenge() {
    AppState.games.dailyChallenge.completed = false;
    navigateTo('quiz');
    document.getElementById('quiz-count').value = '10';
    document.getElementById('start-quiz').click();
}

// =====================================================
// GAMIFICATION
// =====================================================

function addPoints(amount) {
    AppState.gamification.points += amount;
    localStorage.setItem('totalPoints', AppState.gamification.points);

    var newLevel = Math.floor(AppState.gamification.points / 100) + 1;
    if (newLevel > AppState.gamification.level) {
        AppState.gamification.level = newLevel;
        localStorage.setItem('currentLevel', newLevel);
    }

    updateGamificationStats();
}

function updateGamificationStats() {
    var totalPointsEl = document.getElementById('total-points');
    var levelEl = document.getElementById('current-level');
    var achievementsEl = document.getElementById('achievements-earned');
    var streakEl = document.getElementById('study-streak');

    if (totalPointsEl) totalPointsEl.textContent = AppState.gamification.points;
    if (levelEl) levelEl.textContent = AppState.gamification.level;
    if (achievementsEl) achievementsEl.textContent = AppState.gamification.achievements.length;
    if (streakEl) streakEl.textContent = AppState.gamification.streak;
}

function checkAchievement(id, condition) {
    if (typeof achievements === 'undefined') return;

    if (condition && !AppState.gamification.achievements.includes(id)) {
        AppState.gamification.achievements.push(id);
        localStorage.setItem('achievements', JSON.stringify(AppState.gamification.achievements));

        var achievement = achievements.find(function(a) { return a.id === id; });
        if (achievement) {
            addPoints(achievement.points);
            alert('Achievement Unlocked: ' + achievement.name + '! (+' + achievement.points + ' points)');
        }

        renderAchievements();
    }
}

function renderAchievements() {
    var grid = document.getElementById('achievements-grid');
    if (!grid || typeof achievements === 'undefined') return;

    grid.innerHTML = achievements.map(function(a) {
        var unlocked = AppState.gamification.achievements.includes(a.id);
        return '<div class="achievement-card ' + (unlocked ? 'unlocked' : 'locked') + '">' +
            '<div class="achievement-icon">' + a.icon + '</div>' +
            '<div class="achievement-name">' + a.name + '</div>' +
            '<div class="achievement-desc">' + a.description + '</div>' +
            '<div class="achievement-points">+' + a.points + ' pts</div>' +
            '</div>';
    }).join('');
}

function updateStudyStreak() {
    var today = new Date().toDateString();
    var lastDate = AppState.gamification.lastStudyDate;

    if (lastDate !== today) {
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastDate === yesterday.toDateString()) {
            AppState.gamification.streak++;
        } else if (lastDate !== today) {
            AppState.gamification.streak = 1;
        }

        AppState.gamification.lastStudyDate = today;
        localStorage.setItem('lastStudyDate', today);
        localStorage.setItem('studyStreak', AppState.gamification.streak);

        checkAchievement('streak_3', AppState.gamification.streak >= 3);
        checkAchievement('streak_7', AppState.gamification.streak >= 7);
        checkAchievement('streak_30', AppState.gamification.streak >= 30);
    }
}

// =====================================================
// ENGLISH TEST SECTION
// =====================================================

function initEnglish() {
    document.querySelectorAll('.english-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.english-tab').forEach(function(t) { t.classList.remove('active'); });
            document.querySelectorAll('.english-panel').forEach(function(p) { p.classList.remove('active'); });

            tab.classList.add('active');
            document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
        });
    });

    var randomReadBtn = document.getElementById('random-reading');
    var showAllReadBtn = document.getElementById('show-all-reading');
    var readAloudBtn = document.getElementById('read-aloud');
    var randomWriteBtn = document.getElementById('random-writing');
    var playWriteBtn = document.getElementById('play-writing-audio');
    var checkWriteBtn = document.getElementById('check-writing');
    var showWriteBtn = document.getElementById('show-writing-answer');

    if (randomReadBtn) randomReadBtn.addEventListener('click', showRandomReadingSentence);
    if (showAllReadBtn) showAllReadBtn.addEventListener('click', showAllReadingSentences);
    if (readAloudBtn) readAloudBtn.addEventListener('click', function() {
        if (AppState.english.currentReadingSentence) {
            forceSpeak(AppState.english.currentReadingSentence);
        }
    });

    if (randomWriteBtn) randomWriteBtn.addEventListener('click', showRandomWritingSentence);
    if (playWriteBtn) playWriteBtn.addEventListener('click', function() {
        if (AppState.english.currentWritingSentence) {
            forceSpeak(AppState.english.currentWritingSentence);
        }
    });
    if (checkWriteBtn) checkWriteBtn.addEventListener('click', checkWritingAnswer);
    if (showWriteBtn) showWriteBtn.addEventListener('click', showWritingAnswer);

    if (typeof readingVocabulary !== 'undefined') {
        populateVocabList('vocab-civics', readingVocabulary.civicsWords);
        populateVocabList('vocab-people', readingVocabulary.peopleWords);
        populateVocabList('vocab-places', readingVocabulary.placesWords);
        populateVocabList('vocab-holidays', readingVocabulary.holidaysWords);
        populateVocabList('vocab-questions', readingVocabulary.questionWords);
        populateVocabList('vocab-verbs', readingVocabulary.verbWords);
        populateVocabList('vocab-other', readingVocabulary.otherContentWords);
    }
}

function showRandomReadingSentence() {
    if (typeof readingSentences === 'undefined') return;

    var sentence = readingSentences[Math.floor(Math.random() * readingSentences.length)];
    AppState.english.currentReadingSentence = sentence;

    document.getElementById('reading-sentence').textContent = sentence;
    document.getElementById('all-reading-sentences').classList.add('hidden');
}

function showAllReadingSentences() {
    if (typeof readingSentences === 'undefined') return;

    var container = document.getElementById('all-reading-sentences');
    container.innerHTML = '<h4>All Reading Sentences</h4>' +
        readingSentences.map(function(s, i) {
            return '<div class="sentence-item">' +
                '<span>' + (i + 1) + '. ' + s + '</span>' +
                '<button class="btn btn-outline btn-sm" onclick="forceSpeak(\'' + s.replace(/'/g, "\\'") + '\')">🔊</button>' +
                '</div>';
        }).join('');
    container.classList.toggle('hidden');
}

function showRandomWritingSentence() {
    if (typeof writingSentences === 'undefined') return;

    var sentence = writingSentences[Math.floor(Math.random() * writingSentences.length)];
    AppState.english.currentWritingSentence = sentence;

    document.getElementById('writing-input').value = '';
    document.getElementById('writing-feedback').innerHTML = '';
    document.getElementById('all-writing-sentences').classList.add('hidden');
}

function checkWritingAnswer() {
    var input = document.getElementById('writing-input').value.trim();
    var correct = AppState.english.currentWritingSentence;
    var feedback = document.getElementById('writing-feedback');

    if (!correct) {
        feedback.innerHTML = 'Please click "Play Sentence" first!';
        return;
    }

    var normalize = function(s) { return s.toLowerCase().replace(/[.,!?]/g, '').trim(); };

    if (normalize(input) === normalize(correct)) {
        feedback.innerHTML = '<span class="correct">✓ Correct! Great job!</span>';
        feedback.className = 'writing-feedback correct';
        addPoints(10);
    } else {
        feedback.innerHTML = '<span class="incorrect">Not quite. The correct sentence is:<br><strong>' + correct + '</strong></span>';
        feedback.className = 'writing-feedback incorrect';
    }
}

function showWritingAnswer() {
    var feedback = document.getElementById('writing-feedback');
    if (AppState.english.currentWritingSentence) {
        feedback.innerHTML = '<strong>Answer:</strong> ' + AppState.english.currentWritingSentence;
        feedback.className = 'writing-feedback';
    }
}

function populateVocabList(elementId, words) {
    var container = document.getElementById(elementId);
    if (!container || !words) return;

    container.innerHTML = words.map(function(w) {
        return '<span class="vocab-word" onclick="forceSpeak(\'' + w.replace(/'/g, "\\'") + '\')">' + w + '</span>';
    }).join('');
}

// =====================================================
// AMENDMENTS SECTION
// =====================================================

function initAmendments() {
    if (typeof constitutionalAmendments === 'undefined') return;

    renderAmendments('all');

    document.querySelectorAll('.amendment-filter-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.amendment-filter-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            renderAmendments(btn.dataset.filter);
        });
    });

    var quizBtn = document.getElementById('start-amendments-quiz');
    if (quizBtn) {
        quizBtn.addEventListener('click', function() {
            navigateTo('quiz');
            alert('Starting quiz focused on Constitutional amendments!');
        });
    }
}

function renderAmendments(filter) {
    var list = document.getElementById('amendments-list');
    if (!list) return;

    var filtered = constitutionalAmendments;

    switch(filter) {
        case 'bill-of-rights':
            filtered = constitutionalAmendments.filter(function(a) { return a.number <= 10; });
            break;
        case 'reconstruction':
            filtered = constitutionalAmendments.filter(function(a) { return a.number >= 13 && a.number <= 15; });
            break;
        case 'voting':
            filtered = constitutionalAmendments.filter(function(a) { return [15, 19, 24, 26].includes(a.number); });
            break;
        case 'modern':
            filtered = constitutionalAmendments.filter(function(a) { return a.number >= 16; });
            break;
    }

    list.innerHTML = filtered.map(function(a) {
        return '<div class="amendment-card">' +
            '<div class="amendment-header" onclick="this.parentElement.classList.toggle(\'expanded\')">' +
            '<span class="amendment-number">' + a.number + '</span>' +
            '<span class="amendment-title">' + escapeHtml(a.shortName) + '</span>' +
            '<span class="amendment-year">' + a.year + '</span>' +
            '</div>' +
            '<div class="amendment-body">' +
            '<div class="amendment-text">"' + escapeHtml(a.fullText.substring(0, 200)) + '..."</div>' +
            '<div class="amendment-explanation">' +
            '<h5>Simple Explanation</h5>' +
            '<p>' + escapeHtml(a.simpleExplanation) + '</p>' +
            '</div>' +
            '<div class="amendment-explanation">' +
            '<h5>Why It Matters</h5>' +
            '<p>' + escapeHtml(a.whyItMatters) + '</p>' +
            '</div>' +
            '<div class="amendment-mnemonic">' +
            '💡 Memory Tip: ' + escapeHtml(a.mnemonicHelp) +
            '</div>' +
            '</div>' +
            '</div>';
    }).join('');
}

// =====================================================
// PRESIDENTS SECTION
// =====================================================

function initPresidents() {
    if (typeof allPresidents === 'undefined') return;

    renderPresidents('all');

    var searchInput = document.getElementById('president-search');
    var filterSelect = document.getElementById('president-filter');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            var search = e.target.value.toLowerCase();
            var filter = filterSelect ? filterSelect.value : 'all';
            renderPresidents(filter, search);
        });
    }

    if (filterSelect) {
        filterSelect.addEventListener('change', function(e) {
            var search = searchInput ? searchInput.value.toLowerCase() : '';
            renderPresidents(e.target.value, search);
        });
    }

    var quizBtn = document.getElementById('start-presidents-quiz');
    if (quizBtn) {
        quizBtn.addEventListener('click', function() {
            alert('Starting Presidential trivia quiz!');
            navigateTo('quiz');
        });
    }
}

function renderPresidents(filter, search) {
    search = search || '';
    var grid = document.getElementById('presidents-grid');
    if (!grid) return;

    var filtered = allPresidents;

    switch(filter) {
        case 'founding':
            filtered = allPresidents.filter(function(p) { return p.number <= 6; });
            break;
        case 'antebellum':
            filtered = allPresidents.filter(function(p) { return p.number >= 7 && p.number <= 15; });
            break;
        case 'civil-war':
            filtered = allPresidents.filter(function(p) { return p.number >= 16 && p.number <= 18; });
            break;
        case 'gilded':
            filtered = allPresidents.filter(function(p) { return p.number >= 19 && p.number <= 25; });
            break;
        case 'modern':
            filtered = allPresidents.filter(function(p) { return p.number >= 26; });
            break;
    }

    if (search) {
        filtered = filtered.filter(function(p) {
            return p.name.toLowerCase().includes(search) || p.party.toLowerCase().includes(search);
        });
    }

    grid.innerHTML = filtered.map(function(p) {
        var partyClass = 'other';
        if (p.party.toLowerCase().includes('republican')) partyClass = 'republican';
        else if (p.party.toLowerCase().includes('democrat')) partyClass = 'democratic';

        return '<div class="president-card">' +
            '<div class="president-header">' +
            '<div class="president-number">' + p.number + '</div>' +
            '<div class="president-info">' +
            '<h4>' + escapeHtml(p.name) + '</h4>' +
            '<span class="president-years">' + p.years + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="president-body">' +
            '<span class="president-party ' + partyClass + '">' + escapeHtml(p.party) + '</span>' +
            '<ul class="president-facts">' +
            p.keyFacts.map(function(f) { return '<li>' + escapeHtml(f) + '</li>'; }).join('') +
            '</ul>' +
            '</div>' +
            '</div>';
    }).join('');
}

// =====================================================
// NATURALIZATION PROCESS SECTION
// =====================================================

function initProcess() {
    document.querySelectorAll('.process-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.process-tab').forEach(function(t) { t.classList.remove('active'); });
            document.querySelectorAll('.process-panel').forEach(function(p) { p.classList.remove('active'); });

            tab.classList.add('active');
            document.getElementById('process-' + tab.dataset.tab).classList.add('active');
        });
    });

    if (typeof naturalizationProcess !== 'undefined') {
        renderProcessTimeline();
    }

    if (typeof n400Guide !== 'undefined') {
        renderN400Guide();
    }
}

function renderProcessTimeline() {
    var timeline = document.getElementById('naturalization-timeline');
    if (!timeline) return;

    timeline.innerHTML = naturalizationProcess.map(function(step) {
        return '<div class="process-step-card">' +
            '<div class="step-number">' + step.step + '</div>' +
            '<div class="step-content">' +
            '<h4>' + escapeHtml(step.title) + '</h4>' +
            '<p>' + escapeHtml(step.description) + '</p>' +
            '<div class="step-tips">' +
            '<h5>Tips:</h5>' +
            '<ul>' +
            step.tips.map(function(t) { return '<li>' + escapeHtml(t) + '</li>'; }).join('') +
            '</ul>' +
            '</div>' +
            '</div>' +
            '</div>';
    }).join('');
}

function renderN400Guide() {
    var container = document.getElementById('n400-parts');
    if (!container) return;

    container.innerHTML = n400Guide.map(function(part) {
        return '<div class="n400-part">' +
            '<h5><span class="part-label">' + part.part + '</span> - ' + escapeHtml(part.title) + '</h5>' +
            '<p>' + escapeHtml(part.description) + '</p>' +
            '</div>';
    }).join('');
}

// =====================================================
// VOCABULARY BUILDER SECTION
// =====================================================

function initVocabularyBuilder() {
    if (typeof citizenshipVocabulary === 'undefined') return;

    renderVocabularyList();

    var searchInput = document.getElementById('vocab-search');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            renderVocabularyList(e.target.value.toLowerCase());
        });
    }

    var flashcardsBtn = document.getElementById('vocab-flashcards');
    var prevBtn = document.getElementById('vocab-prev');
    var nextBtn = document.getElementById('vocab-next');
    var closeBtn = document.getElementById('close-vocab-mode');
    var audioBtn = document.getElementById('vocab-audio');
    var vocabCard = document.getElementById('vocab-card');

    if (flashcardsBtn) flashcardsBtn.addEventListener('click', startVocabFlashcards);
    if (prevBtn) prevBtn.addEventListener('click', function() { navigateVocab(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function() { navigateVocab(1); });
    if (closeBtn) closeBtn.addEventListener('click', closeVocabMode);
    if (audioBtn) audioBtn.addEventListener('click', function() {
        var term = citizenshipVocabulary[AppState.vocabulary.currentIndex].term;
        forceSpeak(term);
    });

    if (vocabCard) {
        vocabCard.addEventListener('click', function() {
            vocabCard.classList.toggle('flipped');
        });
    }
}

function renderVocabularyList(search) {
    search = search || '';
    var container = document.getElementById('vocab-builder');
    if (!container) return;

    var filtered = citizenshipVocabulary;
    if (search) {
        filtered = filtered.filter(function(v) {
            return v.term.toLowerCase().includes(search) || v.definition.toLowerCase().includes(search);
        });
    }

    container.innerHTML = filtered.map(function(v) {
        return '<div class="vocab-card" onclick="forceSpeak(\'' + v.term.replace(/'/g, "\\'") + '\')">' +
            '<div class="vocab-term-title">' + escapeHtml(v.term) + '</div>' +
            '<div class="vocab-pronunciation-text">' + escapeHtml(v.pronunciation) + '</div>' +
            '<div class="vocab-definition-text">' + escapeHtml(v.definition) + '</div>' +
            '</div>';
    }).join('');
}

function startVocabFlashcards() {
    AppState.vocabulary.currentIndex = 0;
    document.getElementById('vocab-flashcard-mode').classList.remove('hidden');
    document.querySelector('.vocab-builder').classList.add('hidden');
    document.querySelector('.vocab-practice').classList.add('hidden');
    updateVocabFlashcard();
}

function updateVocabFlashcard() {
    var vocab = citizenshipVocabulary[AppState.vocabulary.currentIndex];
    document.getElementById('vocab-term').textContent = vocab.term;
    document.getElementById('vocab-pronunciation').textContent = vocab.pronunciation;
    document.getElementById('vocab-definition').textContent = vocab.definition;
    document.getElementById('vocab-counter').textContent = (AppState.vocabulary.currentIndex + 1) + '/' + citizenshipVocabulary.length;
    document.getElementById('vocab-card').classList.remove('flipped');
}

function navigateVocab(direction) {
    AppState.vocabulary.currentIndex += direction;
    if (AppState.vocabulary.currentIndex < 0) AppState.vocabulary.currentIndex = citizenshipVocabulary.length - 1;
    if (AppState.vocabulary.currentIndex >= citizenshipVocabulary.length) AppState.vocabulary.currentIndex = 0;
    updateVocabFlashcard();
}

function closeVocabMode() {
    document.getElementById('vocab-flashcard-mode').classList.add('hidden');
    document.querySelector('.vocab-builder').classList.remove('hidden');
    document.querySelector('.vocab-practice').classList.remove('hidden');
}

// =====================================================
// INITIALIZE ALL NEW FEATURES
// =====================================================

// =====================================================
// ACCESSIBILITY SETTINGS PANEL
// =====================================================

function initAccessibilityPanel() {
    var toggleBtn = document.getElementById('accessibility-toggle');
    var menu = document.getElementById('accessibility-menu');
    var fontSizeBtns = document.querySelectorAll('.font-size-btn');
    var highContrastToggle = document.getElementById('high-contrast-toggle');
    var dyslexiaToggle = document.getElementById('dyslexia-toggle');
    var reduceMotionToggle = document.getElementById('reduce-motion-toggle');

    // Load saved preferences
    loadAccessibilityPreferences();

    // Toggle menu
    if (toggleBtn && menu) {
        toggleBtn.addEventListener('click', function() {
            menu.classList.toggle('open');
            var isOpen = menu.classList.contains('open');
            toggleBtn.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.accessibility-panel')) {
                menu.classList.remove('open');
                toggleBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menu.classList.contains('open')) {
                menu.classList.remove('open');
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.focus();
            }
        });
    }

    // Font size controls
    fontSizeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            fontSizeBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            var size = btn.getAttribute('data-size');
            setFontSize(size);
        });
    });

    // High contrast toggle
    if (highContrastToggle) {
        highContrastToggle.addEventListener('change', function() {
            document.body.classList.toggle('high-contrast', this.checked);
            localStorage.setItem('highContrast', this.checked);
        });
    }

    // Dyslexia-friendly toggle
    if (dyslexiaToggle) {
        dyslexiaToggle.addEventListener('change', function() {
            document.body.classList.toggle('dyslexia-friendly', this.checked);
            localStorage.setItem('dyslexiaFriendly', this.checked);
        });
    }

    // Reduce motion toggle
    if (reduceMotionToggle) {
        reduceMotionToggle.addEventListener('change', function() {
            document.body.classList.toggle('reduce-motion', this.checked);
            localStorage.setItem('reduceMotion', this.checked);
        });
    }
}

function setFontSize(size) {
    document.body.classList.remove('large-text', 'xl-text');
    if (size === 'large') {
        document.body.classList.add('large-text');
    } else if (size === 'xl') {
        document.body.classList.add('xl-text');
    }
    localStorage.setItem('fontSize', size);
}

function loadAccessibilityPreferences() {
    // Font size
    var savedFontSize = localStorage.getItem('fontSize') || 'normal';
    setFontSize(savedFontSize);
    var fontBtns = document.querySelectorAll('.font-size-btn');
    fontBtns.forEach(function(btn) {
        btn.classList.toggle('active', btn.getAttribute('data-size') === savedFontSize);
    });

    // High contrast
    var highContrast = localStorage.getItem('highContrast') === 'true';
    document.body.classList.toggle('high-contrast', highContrast);
    var hcToggle = document.getElementById('high-contrast-toggle');
    if (hcToggle) hcToggle.checked = highContrast;

    // Dyslexia-friendly
    var dyslexia = localStorage.getItem('dyslexiaFriendly') === 'true';
    document.body.classList.toggle('dyslexia-friendly', dyslexia);
    var dfToggle = document.getElementById('dyslexia-toggle');
    if (dfToggle) dfToggle.checked = dyslexia;

    // Reduce motion
    var reduceMotion = localStorage.getItem('reduceMotion') === 'true';
    document.body.classList.toggle('reduce-motion', reduceMotion);
    var rmToggle = document.getElementById('reduce-motion-toggle');
    if (rmToggle) rmToggle.checked = reduceMotion;
}

// Add reduce-motion class styles
var motionStyle = document.createElement('style');
motionStyle.textContent = 'body.reduce-motion *, body.reduce-motion *::before, body.reduce-motion *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }';
document.head.appendChild(motionStyle);

document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
    initTextToSpeech();
    initGames();
    initEnglish();
    initAmendments();
    initPresidents();
    initProcess();
    initVocabularyBuilder();
    initAccessibilityPanel();
    updateStudyStreak();

    // Check achievements
    if (AppState.progress) {
        checkAchievement('first_card', AppState.progress.questionsStudied.length >= 1);
        checkAchievement('ten_cards', AppState.progress.questionsStudied.length >= 10);
        checkAchievement('fifty_cards', AppState.progress.questionsStudied.length >= 50);
        checkAchievement('all_cards', AppState.progress.questionsStudied.length >= 100);
    }
});
