// U.S. Citizenship Test Study Guide - Main Application
// =====================================================

// Utility function to escape HTML and prevent XSS
function escapeHtml(text) {
    if (text === null || text === undefined) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Global State
const AppState = {
    currentSection: 'home',
    selectedState: localStorage.getItem('selectedState') || null,
    markedQuestions: JSON.parse(localStorage.getItem('markedQuestions')) || [],
    progress: JSON.parse(localStorage.getItem('studyProgress')) || {
        questionsStudied: [],
        questionsMastered: [],
        quizzesTaken: 0,
        examsPassed: 0,
        examsFailed: 0,
        totalCorrect: 0,
        totalAnswered: 0,
        weakQuestions: [],
        categoryProgress: {}
    },

    // Flashcard state
    flashcard: {
        currentIndex: 0,
        questions: [],
        isFlipped: false
    },

    // Quiz state
    quiz: {
        questions: [],
        currentIndex: 0,
        score: 0,
        answers: [],
        type: 'written',
        isActive: false
    },

    // Exam state
    exam: {
        questions: [],
        currentIndex: 0,
        correct: 0,
        answers: [],
        mode: 'standard',
        isActive: false,
        timer: null,
        timeRemaining: 600
    }
};

// =====================================================
// Initialization
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHome();
    initFlashcards();
    initQuiz();
    initExam();
    initStudyGuide();
    initGovernment();
    initHistory();
    initProgress();
    loadProgress();
});

// =====================================================
// Navigation
// =====================================================

function initNavigation() {
    // Desktop navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            navigateTo(section);
        });
    });

    // Mobile menu toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

function navigateTo(section) {
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.section === section);
    });

    // Show/hide sections
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.toggle('active', sec.id === section);
    });

    AppState.currentSection = section;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =====================================================
// Home Section
// =====================================================

function initHome() {
    // Quick start cards
    document.querySelectorAll('.quick-card').forEach(card => {
        card.addEventListener('click', () => {
            const target = card.dataset.goto;
            navigateTo(target);
        });
    });

    // Populate category preview
    const categoryGrid = document.getElementById('home-categories');
    if (categoryGrid) {
        const categoryCounts = {};
        civicsQuestions.forEach(q => {
            categoryCounts[q.category] = (categoryCounts[q.category] || 0) + 1;
        });

        Object.entries(categoryCounts).forEach(([category, count]) => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <span class="category-count">${count}</span>
                <span class="category-name">${category}</span>
            `;
            card.addEventListener('click', () => {
                navigateTo('study');
                document.getElementById('study-category-filter').value = category;
                filterStudyGuide();
            });
            categoryGrid.appendChild(card);
        });
    }
}

// =====================================================
// Flash Cards
// =====================================================

function initFlashcards() {
    const categorySelect = document.getElementById('flashcard-category');
    const shuffleCheckbox = document.getElementById('flashcard-shuffle');
    const is65Checkbox = document.getElementById('flashcard-65plus');
    const flashcard = document.getElementById('flashcard');
    const prevBtn = document.getElementById('flashcard-prev');
    const nextBtn = document.getElementById('flashcard-next');
    const markBtn = document.getElementById('flashcard-mark');

    // Populate categories
    if (categorySelect) {
        getCategories().forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categorySelect.appendChild(option);
        });

        categorySelect.addEventListener('change', loadFlashcards);
    }

    if (shuffleCheckbox) shuffleCheckbox.addEventListener('change', loadFlashcards);
    if (is65Checkbox) is65Checkbox.addEventListener('change', loadFlashcards);

    // Flashcard flip
    if (flashcard) {
        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
            AppState.flashcard.isFlipped = !AppState.flashcard.isFlipped;
        });
    }

    // Navigation
    if (prevBtn) prevBtn.addEventListener('click', () => navigateFlashcard(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigateFlashcard(1));
    if (markBtn) markBtn.addEventListener('click', toggleMarkCurrentFlashcard);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (AppState.currentSection !== 'flashcards') return;

        switch (e.key) {
            case 'ArrowLeft':
                navigateFlashcard(-1);
                break;
            case 'ArrowRight':
                navigateFlashcard(1);
                break;
            case ' ':
                e.preventDefault();
                flashcard?.click();
                break;
            case 'm':
            case 'M':
                toggleMarkCurrentFlashcard();
                break;
        }
    });

    loadFlashcards();
}

function loadFlashcards() {
    const category = document.getElementById('flashcard-category')?.value || 'all';
    const shuffle = document.getElementById('flashcard-shuffle')?.checked || false;
    const is65Plus = document.getElementById('flashcard-65plus')?.checked || false;

    let questions = category === 'all' ? [...civicsQuestions] : getQuestionsByCategory(category);

    if (is65Plus) {
        questions = questions.filter(q => q.is65Plus);
    }

    if (shuffle) {
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
    }

    AppState.flashcard.questions = questions;
    AppState.flashcard.currentIndex = 0;
    AppState.flashcard.isFlipped = false;

    updateFlashcardDisplay();
}

function navigateFlashcard(direction) {
    const { questions, currentIndex } = AppState.flashcard;
    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = questions.length - 1;
    if (newIndex >= questions.length) newIndex = 0;

    AppState.flashcard.currentIndex = newIndex;
    AppState.flashcard.isFlipped = false;
    document.getElementById('flashcard')?.classList.remove('flipped');

    updateFlashcardDisplay();
    markQuestionAsStudied(questions[newIndex].id);
}

function updateFlashcardDisplay() {
    const { questions, currentIndex } = AppState.flashcard;

    if (questions.length === 0) {
        document.getElementById('flashcard-question').textContent = 'No questions available';
        document.getElementById('flashcard-answer').innerHTML = '';
        return;
    }

    const question = questions[currentIndex];
    const answers = question.isVariable ? getCurrentAnswers(question.id, AppState.selectedState) : question.answers;

    document.getElementById('flashcard-current').textContent = currentIndex + 1;
    document.getElementById('flashcard-total').textContent = questions.length;
    document.getElementById('flashcard-question').textContent = `${question.id}. ${question.question}`;

    let answerHtml = '<ul>';
    answers.forEach(a => {
        answerHtml += `<li>${a}</li>`;
    });
    answerHtml += '</ul>';
    document.getElementById('flashcard-answer').innerHTML = answerHtml;

    // Update mark button
    const markBtn = document.getElementById('flashcard-mark');
    if (markBtn) {
        const isMarked = AppState.markedQuestions.includes(question.id);
        markBtn.textContent = isMarked ? '★ Marked' : '☆ Mark for Review';
        markBtn.classList.toggle('marked', isMarked);
    }
}

function toggleMarkCurrentFlashcard() {
    const question = AppState.flashcard.questions[AppState.flashcard.currentIndex];
    if (!question) return;

    toggleMarkQuestion(question.id);
    updateFlashcardDisplay();
}

// =====================================================
// Quiz Section
// =====================================================

function initQuiz() {
    const categorySelect = document.getElementById('quiz-category');

    // Populate categories
    if (categorySelect) {
        getCategories().forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categorySelect.appendChild(option);
        });
    }

    document.getElementById('start-quiz')?.addEventListener('click', startQuiz);
    document.getElementById('quiz-submit')?.addEventListener('click', submitQuizAnswer);
    document.getElementById('quiz-next')?.addEventListener('click', nextQuizQuestion);
    document.getElementById('retry-quiz')?.addEventListener('click', () => {
        document.getElementById('quiz-setup').classList.remove('hidden');
        document.getElementById('quiz-results').classList.add('hidden');
        document.getElementById('quiz-review').classList.add('hidden');
    });
    document.getElementById('review-quiz')?.addEventListener('click', showQuizReview);
}

function startQuiz() {
    const count = parseInt(document.getElementById('quiz-count').value);
    const category = document.getElementById('quiz-category').value;
    const type = document.getElementById('quiz-type').value;
    const is65Plus = document.getElementById('quiz-65plus').checked;
    const markedOnly = document.getElementById('quiz-marked').checked;

    let pool = category === 'all' ? [...civicsQuestions] : getQuestionsByCategory(category);

    if (is65Plus) pool = pool.filter(q => q.is65Plus);
    if (markedOnly) pool = pool.filter(q => AppState.markedQuestions.includes(q.id));

    if (pool.length === 0) {
        alert('No questions match your criteria. Please adjust your settings.');
        return;
    }

    // Shuffle and take requested count
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    AppState.quiz = {
        questions: pool.slice(0, Math.min(count, pool.length)),
        currentIndex: 0,
        score: 0,
        answers: [],
        type: type,
        isActive: true
    };

    document.getElementById('quiz-setup').classList.add('hidden');
    document.getElementById('quiz-active').classList.remove('hidden');
    document.getElementById('quiz-results').classList.add('hidden');

    displayQuizQuestion();
}

function displayQuizQuestion() {
    const { questions, currentIndex, type, score } = AppState.quiz;
    const question = questions[currentIndex];
    const answers = question.isVariable ? getCurrentAnswers(question.id, AppState.selectedState) : question.answers;

    // Update progress
    document.getElementById('quiz-current-num').textContent = currentIndex + 1;
    document.getElementById('quiz-total-num').textContent = questions.length;
    document.getElementById('quiz-score').textContent = score;
    document.getElementById('quiz-progress-fill').style.width = `${((currentIndex) / questions.length) * 100}%`;

    // Update question display
    document.getElementById('quiz-q-number').textContent = `Q${question.id}`;
    document.getElementById('quiz-question-text').textContent = question.question;

    // Clear feedback
    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('quiz-submit').classList.remove('hidden');
    document.getElementById('quiz-next').classList.add('hidden');

    // Setup answer area based on type
    const answerArea = document.getElementById('quiz-answer-area');

    if (type === 'written') {
        answerArea.innerHTML = `
            <textarea id="quiz-user-answer" placeholder="Type your answer here..." rows="3"></textarea>
        `;
        document.getElementById('quiz-user-answer')?.focus();
    } else if (type === 'multiple') {
        // Generate multiple choice options
        const options = generateMultipleChoiceOptions(question);
        answerArea.innerHTML = `
            <div class="multiple-choice-options">
                ${options.map((opt, i) => `
                    <label class="mc-option" data-index="${i}">
                        <input type="radio" name="quiz-mc" value="${i}">
                        ${opt}
                    </label>
                `).join('')}
            </div>
        `;

        // Add click handlers
        answerArea.querySelectorAll('.mc-option').forEach(opt => {
            opt.addEventListener('click', () => {
                answerArea.querySelectorAll('.mc-option').forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                opt.querySelector('input').checked = true;
            });
        });
    } else if (type === 'reveal') {
        answerArea.innerHTML = `
            <div class="reveal-answer hidden" id="reveal-answer">
                <strong>Answer:</strong>
                <ul>
                    ${answers.map(a => `<li>${a}</li>`).join('')}
                </ul>
            </div>
            <button class="btn btn-secondary" id="reveal-btn">Show Answer</button>
            <div class="self-grade hidden" id="self-grade">
                <p>Did you know the answer?</p>
                <button class="btn btn-success" data-correct="true">Yes, I knew it</button>
                <button class="btn btn-danger" data-correct="false">No, I didn't</button>
            </div>
        `;

        document.getElementById('reveal-btn')?.addEventListener('click', () => {
            document.getElementById('reveal-answer').classList.remove('hidden');
            document.getElementById('reveal-btn').classList.add('hidden');
            document.getElementById('self-grade').classList.remove('hidden');
            document.getElementById('quiz-submit').classList.add('hidden');
        });

        document.querySelectorAll('#self-grade button').forEach(btn => {
            btn.addEventListener('click', () => {
                const isCorrect = btn.dataset.correct === 'true';
                recordQuizAnswer(isCorrect, answers[0]);
            });
        });
    }
}

function generateMultipleChoiceOptions(question) {
    const correctAnswers = question.isVariable ?
        getCurrentAnswers(question.id, AppState.selectedState) : question.answers;
    const correct = correctAnswers[0];

    // Get wrong options from other questions in same category or random
    const wrongOptions = [];
    const sameCategory = civicsQuestions.filter(q =>
        q.id !== question.id && q.category === question.category && !q.isVariable
    );

    while (wrongOptions.length < 3 && sameCategory.length > 0) {
        const idx = Math.floor(Math.random() * sameCategory.length);
        const wrongQ = sameCategory.splice(idx, 1)[0];
        if (wrongQ.answers[0] && wrongQ.answers[0] !== correct) {
            wrongOptions.push(wrongQ.answers[0]);
        }
    }

    // Fill remaining with generic wrong answers if needed
    const genericWrong = [
        "The Supreme Court",
        "Congress",
        "The President",
        "The Constitution",
        "1776",
        "1787",
        "George Washington",
        "Thomas Jefferson",
        "50",
        "13"
    ].filter(w => w !== correct && !wrongOptions.includes(w));

    while (wrongOptions.length < 3 && genericWrong.length > 0) {
        wrongOptions.push(genericWrong.shift());
    }

    // Combine and shuffle
    const options = [correct, ...wrongOptions.slice(0, 3)];
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    // Store correct index for checking
    AppState.quiz.currentCorrectIndex = options.indexOf(correct);

    return options;
}

function submitQuizAnswer() {
    const { questions, currentIndex, type } = AppState.quiz;
    const question = questions[currentIndex];
    const answers = question.isVariable ? getCurrentAnswers(question.id, AppState.selectedState) : question.answers;

    let userAnswer = '';
    let isCorrect = false;

    if (type === 'written') {
        userAnswer = document.getElementById('quiz-user-answer')?.value || '';
        isCorrect = checkAnswer(question.id, userAnswer);
    } else if (type === 'multiple') {
        const selected = document.querySelector('input[name="quiz-mc"]:checked');
        if (!selected) {
            alert('Please select an answer');
            return;
        }
        const selectedIndex = parseInt(selected.value);
        isCorrect = selectedIndex === AppState.quiz.currentCorrectIndex;
        userAnswer = document.querySelector(`.mc-option[data-index="${selectedIndex}"]`)?.textContent.trim();

        // Highlight correct/incorrect
        document.querySelectorAll('.mc-option').forEach((opt, i) => {
            if (i === AppState.quiz.currentCorrectIndex) {
                opt.classList.add('correct');
            } else if (i === selectedIndex && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });
    }

    recordQuizAnswer(isCorrect, userAnswer, answers);
}

function recordQuizAnswer(isCorrect, userAnswer, correctAnswers = []) {
    const { questions, currentIndex } = AppState.quiz;
    const question = questions[currentIndex];

    if (!correctAnswers.length) {
        correctAnswers = question.isVariable ? getCurrentAnswers(question.id, AppState.selectedState) : question.answers;
    }

    if (isCorrect) {
        AppState.quiz.score++;
        markQuestionAsMastered(question.id);
    } else {
        addWeakQuestion(question.id);
    }

    AppState.quiz.answers.push({
        questionId: question.id,
        question: question.question,
        userAnswer: userAnswer,
        correctAnswers: correctAnswers,
        isCorrect: isCorrect
    });

    // Show feedback
    const feedback = document.getElementById('quiz-feedback');
    feedback.classList.remove('hidden', 'correct', 'incorrect');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');

    feedback.innerHTML = `
        <div class="feedback-icon">${isCorrect ? '✓' : '✗'}</div>
        <div>
            <div class="feedback-text">${isCorrect ? 'Correct!' : 'Incorrect'}</div>
            ${!isCorrect ? `<div class="correct-answer">Correct answer: ${correctAnswers.join(' OR ')}</div>` : ''}
        </div>
    `;

    document.getElementById('quiz-submit').classList.add('hidden');
    document.getElementById('quiz-next').classList.remove('hidden');

    // Disable inputs
    document.querySelectorAll('#quiz-answer-area input, #quiz-answer-area textarea').forEach(el => {
        el.disabled = true;
    });
}

function nextQuizQuestion() {
    AppState.quiz.currentIndex++;

    if (AppState.quiz.currentIndex >= AppState.quiz.questions.length) {
        showQuizResults();
    } else {
        displayQuizQuestion();
    }
}

function showQuizResults() {
    const { questions, score, answers } = AppState.quiz;
    const percent = Math.round((score / questions.length) * 100);

    document.getElementById('quiz-active').classList.add('hidden');
    document.getElementById('quiz-results').classList.remove('hidden');

    document.getElementById('results-percent').textContent = `${percent}%`;
    document.getElementById('results-correct').textContent = score;
    document.getElementById('results-incorrect').textContent = questions.length - score;
    document.getElementById('results-total').textContent = questions.length;

    let message = '';
    if (percent >= 90) message = 'Excellent! You\'re ready for the test!';
    else if (percent >= 70) message = 'Good job! Keep studying to improve.';
    else if (percent >= 60) message = 'You passed! But more practice would help.';
    else message = 'Keep studying. You\'ll get there!';

    document.getElementById('results-message').textContent = message;

    // Update progress
    AppState.progress.quizzesTaken++;
    AppState.progress.totalCorrect += score;
    AppState.progress.totalAnswered += questions.length;
    saveProgress();
}

function showQuizReview() {
    const reviewDiv = document.getElementById('quiz-review');
    const reviewList = document.getElementById('review-list');
    reviewDiv.classList.remove('hidden');

    reviewList.innerHTML = AppState.quiz.answers.map((a, i) => `
        <div class="review-item ${a.isCorrect ? 'correct' : 'incorrect'}">
            <div class="review-question">${i + 1}. ${escapeHtml(a.question)}</div>
            <div class="review-your-answer">Your answer: ${escapeHtml(a.userAnswer) || '(no answer)'}</div>
            ${!a.isCorrect ? `<div class="review-correct-answer">Correct: ${a.correctAnswers.map(ans => escapeHtml(ans)).join(' OR ')}</div>` : ''}
        </div>
    `).join('');
}

// =====================================================
// Exam Section
// =====================================================

function initExam() {
    document.getElementById('start-exam')?.addEventListener('click', startExam);
    document.getElementById('exam-submit')?.addEventListener('click', submitExamAnswer);
    document.getElementById('exam-next')?.addEventListener('click', nextExamQuestion);
    document.getElementById('exam-retry')?.addEventListener('click', () => {
        document.getElementById('exam-intro').classList.remove('hidden');
        document.getElementById('exam-results').classList.add('hidden');
        document.getElementById('exam-review-section').classList.add('hidden');
    });
    document.getElementById('exam-review')?.addEventListener('click', showExamReview);
}

function startExam() {
    const mode = document.querySelector('input[name="exam-mode"]:checked')?.value || 'standard';
    const is65Plus = document.getElementById('exam-65plus')?.checked || false;

    let pool = is65Plus ? get65PlusQuestions() : [...civicsQuestions];

    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    AppState.exam = {
        questions: pool.slice(0, 10),
        currentIndex: 0,
        correct: 0,
        answers: [],
        mode: mode,
        isActive: true,
        timer: null,
        timeRemaining: 600
    };

    document.getElementById('exam-intro').classList.add('hidden');
    document.getElementById('exam-active').classList.remove('hidden');
    document.getElementById('exam-results').classList.add('hidden');

    // Setup timer if timed mode
    const timerEl = document.getElementById('exam-timer');
    if (mode === 'timed') {
        timerEl.classList.remove('hidden');
        startExamTimer();
    } else {
        timerEl.classList.add('hidden');
    }

    // Create progress dots
    const dotsContainer = document.getElementById('exam-dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const dot = document.createElement('span');
        dot.className = 'exam-dot';
        if (i === 0) dot.classList.add('current');
        dotsContainer.appendChild(dot);
    }

    displayExamQuestion();
}

function startExamTimer() {
    AppState.exam.timer = setInterval(() => {
        AppState.exam.timeRemaining--;
        const mins = Math.floor(AppState.exam.timeRemaining / 60);
        const secs = AppState.exam.timeRemaining % 60;
        document.getElementById('exam-time').textContent =
            `${mins}:${secs.toString().padStart(2, '0')}`;

        if (AppState.exam.timeRemaining <= 0) {
            clearInterval(AppState.exam.timer);
            endExam();
        }
    }, 1000);
}

function displayExamQuestion() {
    const { questions, currentIndex, correct } = AppState.exam;
    const question = questions[currentIndex];

    document.getElementById('exam-q-num').textContent = currentIndex + 1;
    document.getElementById('exam-correct').textContent = correct;
    document.getElementById('exam-question').textContent = question.question;
    document.getElementById('exam-answer').value = '';
    document.getElementById('exam-answer').disabled = false;
    document.getElementById('exam-answer').focus();

    document.getElementById('exam-feedback').classList.add('hidden');
    document.getElementById('exam-submit').classList.remove('hidden');

    // Update dots
    document.querySelectorAll('.exam-dot').forEach((dot, i) => {
        dot.classList.toggle('current', i === currentIndex);
    });
}

function submitExamAnswer() {
    const { questions, currentIndex, mode } = AppState.exam;
    const question = questions[currentIndex];
    const userAnswer = document.getElementById('exam-answer').value;
    const answers = question.isVariable ? getCurrentAnswers(question.id, AppState.selectedState) : question.answers;

    const isCorrect = checkAnswer(question.id, userAnswer);

    if (isCorrect) {
        AppState.exam.correct++;
        markQuestionAsMastered(question.id);
    } else {
        addWeakQuestion(question.id);
    }

    AppState.exam.answers.push({
        questionId: question.id,
        question: question.question,
        userAnswer: userAnswer,
        correctAnswers: answers,
        isCorrect: isCorrect
    });

    // Update dot
    const dots = document.querySelectorAll('.exam-dot');
    dots[currentIndex].classList.remove('current');
    dots[currentIndex].classList.add(isCorrect ? 'correct' : 'incorrect');

    // Show feedback
    const feedback = document.getElementById('exam-feedback');
    feedback.classList.remove('hidden', 'correct', 'incorrect');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');

    feedback.querySelector('.exam-feedback-content').innerHTML = `
        <h4>${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</h4>
        <p>${isCorrect ? 'Great job!' : `The correct answer was: ${answers.join(' OR ')}`}</p>
    `;

    document.getElementById('exam-submit').classList.add('hidden');
    document.getElementById('exam-answer').disabled = true;
    document.getElementById('exam-correct').textContent = AppState.exam.correct;

    // Check for realistic mode early ending
    if (mode === 'realistic') {
        if (AppState.exam.correct >= 6) {
            // Passed early
            setTimeout(() => endExam(), 1500);
            return;
        }
        const remaining = 10 - currentIndex - 1;
        const needed = 6 - AppState.exam.correct;
        if (needed > remaining) {
            // Cannot pass
            setTimeout(() => endExam(), 1500);
            return;
        }
    }
}

function nextExamQuestion() {
    AppState.exam.currentIndex++;

    if (AppState.exam.currentIndex >= 10) {
        endExam();
    } else {
        displayExamQuestion();
    }
}

function endExam() {
    if (AppState.exam.timer) {
        clearInterval(AppState.exam.timer);
    }

    const { correct, answers } = AppState.exam;
    const passed = correct >= 6;

    document.getElementById('exam-active').classList.add('hidden');
    document.getElementById('exam-results').classList.remove('hidden');

    const badge = document.getElementById('exam-badge');
    badge.textContent = passed ? 'PASSED' : 'FAILED';
    badge.className = `result-badge ${passed ? 'pass' : 'fail'}`;

    document.getElementById('exam-result-title').textContent =
        passed ? 'Congratulations!' : 'Keep Practicing';
    document.getElementById('exam-result-message').textContent =
        passed ? 'You passed the practice exam! You\'re well prepared.' :
            'You need 6 correct answers to pass. Keep studying!';
    document.getElementById('exam-final-correct').textContent = correct;
    document.getElementById('exam-final-total').textContent = answers.length;

    // Update progress
    if (passed) {
        AppState.progress.examsPassed++;
    } else {
        AppState.progress.examsFailed++;
    }
    AppState.progress.totalCorrect += correct;
    AppState.progress.totalAnswered += answers.length;
    saveProgress();
}

function showExamReview() {
    const reviewSection = document.getElementById('exam-review-section');
    const reviewList = document.getElementById('exam-review-list');
    reviewSection.classList.remove('hidden');

    reviewList.innerHTML = AppState.exam.answers.map((a, i) => `
        <div class="review-item ${a.isCorrect ? 'correct' : 'incorrect'}">
            <div class="review-question">${i + 1}. ${escapeHtml(a.question)}</div>
            <div class="review-your-answer">Your answer: ${escapeHtml(a.userAnswer) || '(no answer)'}</div>
            ${!a.isCorrect ? `<div class="review-correct-answer">Correct: ${a.correctAnswers.map(ans => escapeHtml(ans)).join(' OR ')}</div>` : ''}
        </div>
    `).join('');
}

// =====================================================
// Study Guide Section
// =====================================================

function initStudyGuide() {
    const categoryFilter = document.getElementById('study-category-filter');
    const searchInput = document.getElementById('study-search');

    // Populate categories
    if (categoryFilter) {
        getCategories().forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categoryFilter.appendChild(option);
        });

        categoryFilter.addEventListener('change', filterStudyGuide);
    }

    if (searchInput) {
        searchInput.addEventListener('input', filterStudyGuide);
    }

    document.getElementById('study-65plus-filter')?.addEventListener('change', filterStudyGuide);
    document.getElementById('study-marked-filter')?.addEventListener('change', filterStudyGuide);

    renderStudyGuide();
}

function renderStudyGuide() {
    const container = document.getElementById('study-content');
    if (!container) return;

    const categories = getCategories();
    container.innerHTML = '';

    categories.forEach(category => {
        const questions = getQuestionsByCategory(category);

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'study-category';
        categoryDiv.dataset.category = category;

        categoryDiv.innerHTML = `
            <div class="category-header">
                <h3>${category} (${questions.length} questions)</h3>
                <span class="category-toggle">▼</span>
            </div>
            <div class="category-questions">
                ${questions.map(q => {
            const answers = q.isVariable ? getCurrentAnswers(q.id, AppState.selectedState) : q.answers;
            const isMarked = AppState.markedQuestions.includes(q.id);
            return `
                        <div class="study-question" data-id="${q.id}" data-65plus="${q.is65Plus}">
                            <div class="question-header">
                                <span class="question-num ${q.is65Plus ? 'is-65' : ''}">${q.id}${q.is65Plus ? '*' : ''}</span>
                                <span class="question-text-study">${q.question}</span>
                                <span class="question-mark ${isMarked ? 'marked' : ''}" data-id="${q.id}">
                                    ${isMarked ? '★' : '☆'}
                                </span>
                            </div>
                            <div class="study-answer">
                                <ul>
                                    ${answers.map(a => `<li>${a}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `;
        }).join('')}
            </div>
        `;

        // Toggle category
        categoryDiv.querySelector('.category-header').addEventListener('click', () => {
            categoryDiv.classList.toggle('open');
        });

        container.appendChild(categoryDiv);
    });

    // Add click handlers for questions and marks
    container.querySelectorAll('.study-question').forEach(q => {
        q.addEventListener('click', (e) => {
            if (!e.target.classList.contains('question-mark')) {
                q.classList.toggle('open');
                markQuestionAsStudied(parseInt(q.dataset.id));
            }
        });
    });

    container.querySelectorAll('.question-mark').forEach(mark => {
        mark.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(mark.dataset.id);
            toggleMarkQuestion(id);
            const isMarked = AppState.markedQuestions.includes(id);
            mark.textContent = isMarked ? '★' : '☆';
            mark.classList.toggle('marked', isMarked);
        });
    });
}

function filterStudyGuide() {
    const category = document.getElementById('study-category-filter')?.value || 'all';
    const search = document.getElementById('study-search')?.value.toLowerCase() || '';
    const is65Plus = document.getElementById('study-65plus-filter')?.checked || false;
    const markedOnly = document.getElementById('study-marked-filter')?.checked || false;

    document.querySelectorAll('.study-category').forEach(cat => {
        const catName = cat.dataset.category;
        const matchesCategory = category === 'all' || catName === category;

        if (!matchesCategory) {
            cat.style.display = 'none';
            return;
        }

        cat.style.display = '';

        let visibleCount = 0;
        cat.querySelectorAll('.study-question').forEach(q => {
            const id = parseInt(q.dataset.id);
            const question = civicsQuestions.find(cq => cq.id === id);
            const questionText = question?.question.toLowerCase() || '';

            const matchesSearch = !search || questionText.includes(search);
            const matches65 = !is65Plus || q.dataset['65plus'] === 'true';
            const matchesMarked = !markedOnly || AppState.markedQuestions.includes(id);

            const visible = matchesSearch && matches65 && matchesMarked;
            q.style.display = visible ? '' : 'none';
            if (visible) visibleCount++;
        });

        // Hide category if no visible questions
        if (visibleCount === 0 && (search || is65Plus || markedOnly)) {
            cat.style.display = 'none';
        }
    });
}

// =====================================================
// Government Section
// =====================================================

function initGovernment() {
    renderOfficials();
    initStateSelector();
}

function renderOfficials() {
    // Legislative officials
    const legDiv = document.getElementById('legislative-officials');
    if (legDiv) {
        legDiv.innerHTML = `
            ${officialCard(currentOfficials.speaker)}
            ${officialCard(currentOfficials.senateMajorityLeader)}
            ${officialCard(currentOfficials.senateMinorityLeader)}
            ${officialCard(currentOfficials.houseMinorityLeader)}
        `;
    }

    // Executive officials
    const execDiv = document.getElementById('executive-officials');
    if (execDiv) {
        execDiv.innerHTML = `
            ${officialCard(currentOfficials.president)}
            ${officialCard(currentOfficials.vicePresident)}
        `;
    }

    // Judicial officials
    const judDiv = document.getElementById('judicial-officials');
    if (judDiv) {
        let html = officialCard(currentOfficials.chiefJustice);
        currentOfficials.associateJustices.forEach(j => {
            html += `
                <div class="official-card">
                    <div class="official-avatar">${j.initials}</div>
                    <div class="official-info">
                        <div class="official-name">${j.name}</div>
                        <div class="official-title">Associate Justice</div>
                        <div class="official-term">Since ${j.termStart}</div>
                    </div>
                </div>
            `;
        });
        judDiv.innerHTML = html;
    }
}

function officialCard(official) {
    return `
        <div class="official-card">
            <div class="official-avatar">${official.initials}</div>
            <div class="official-info">
                <div class="official-name">${official.name}</div>
                <div class="official-title">${official.title}</div>
                ${official.termEnd ? `<div class="official-term">Term ends: ${official.termEnd}</div>` : ''}
            </div>
        </div>
    `;
}

function initStateSelector() {
    const select = document.getElementById('state-select');
    if (!select) return;

    getStates().forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        select.appendChild(option);
    });

    if (AppState.selectedState) {
        select.value = AppState.selectedState;
        showStateInfo(AppState.selectedState);
    }

    select.addEventListener('change', () => {
        const state = select.value;
        AppState.selectedState = state;
        localStorage.setItem('selectedState', state);

        if (state) {
            showStateInfo(state);
        } else {
            document.getElementById('state-info').classList.add('hidden');
        }

        // Re-render study guide to update variable questions
        renderStudyGuide();
    });
}

function showStateInfo(stateName) {
    const info = getStateInfo(stateName);
    if (!info) return;

    const infoDiv = document.getElementById('state-info');
    infoDiv.classList.remove('hidden');

    infoDiv.innerHTML = `
        <h3>${stateName}</h3>
        <div class="state-officials">
            <div class="state-official-card">
                <h4>State Capital</h4>
                <p>${info.capital}</p>
            </div>
            <div class="state-official-card">
                <h4>Governor</h4>
                <p>${info.governor.name}</p>
                <small>${info.governor.party} - Term ends ${info.governor.termEnd}</small>
            </div>
            <div class="state-official-card">
                <h4>U.S. Senator</h4>
                <p>${info.senators[0].name}</p>
                <small>${info.senators[0].party} - Term ends ${info.senators[0].termEnd}</small>
            </div>
            <div class="state-official-card">
                <h4>U.S. Senator</h4>
                <p>${info.senators[1].name}</p>
                <small>${info.senators[1].party} - Term ends ${info.senators[1].termEnd}</small>
            </div>
        </div>
    `;
}

// =====================================================
// History Section
// =====================================================

function initHistory() {
    document.querySelectorAll('.history-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const period = tab.dataset.period;

            // Update active tab
            document.querySelectorAll('.history-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show corresponding period
            document.querySelectorAll('.history-period').forEach(p => p.classList.remove('active'));
            document.getElementById(`period-${period}`)?.classList.add('active');
        });
    });
}

// =====================================================
// Progress Section
// =====================================================

function initProgress() {
    document.getElementById('reset-progress')?.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            resetProgress();
        }
    });

    document.getElementById('export-progress')?.addEventListener('click', exportProgress);
}

function loadProgress() {
    updateProgressDisplay();
}

function saveProgress() {
    localStorage.setItem('studyProgress', JSON.stringify(AppState.progress));
    localStorage.setItem('markedQuestions', JSON.stringify(AppState.markedQuestions));
    updateProgressDisplay();
}

function updateProgressDisplay() {
    const progress = AppState.progress;

    // Overall progress
    const studiedCount = progress.questionsStudied.length;
    const masteredCount = progress.questionsMastered.length;
    const percent = Math.round((masteredCount / 100) * 100);

    document.getElementById('overall-progress-percent').textContent = `${percent}%`;

    // Update progress ring
    const ring = document.getElementById('overall-progress-ring');
    if (ring) {
        const circumference = 408.4; // 2 * PI * 65
        const offset = circumference - (percent / 100) * circumference;
        ring.style.strokeDashoffset = offset;
    }

    // Stats
    document.getElementById('stat-studied').textContent = `${studiedCount} / 100`;
    document.getElementById('stat-mastered').textContent = masteredCount;
    document.getElementById('stat-quizzes').textContent = progress.quizzesTaken;
    document.getElementById('stat-exams-passed').textContent = progress.examsPassed;

    const avgScore = progress.totalAnswered > 0 ?
        Math.round((progress.totalCorrect / progress.totalAnswered) * 100) : 0;
    document.getElementById('stat-avg-score').textContent = `${avgScore}%`;

    // Marked questions
    const markedList = document.getElementById('marked-questions-list');
    if (markedList) {
        if (AppState.markedQuestions.length === 0) {
            markedList.innerHTML = '<p class="empty-message">No questions marked yet</p>';
        } else {
            markedList.innerHTML = AppState.markedQuestions.map(id => {
                const q = civicsQuestions.find(cq => cq.id === id);
                return `<div class="marked-item" data-id="${id}">${id}. ${q?.question.slice(0, 50)}...</div>`;
            }).join('');

            markedList.querySelectorAll('.marked-item').forEach(item => {
                item.addEventListener('click', () => {
                    navigateTo('study');
                    // Expand and scroll to question
                    const qEl = document.querySelector(`.study-question[data-id="${item.dataset.id}"]`);
                    if (qEl) {
                        qEl.closest('.study-category')?.classList.add('open');
                        qEl.classList.add('open');
                        qEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                });
            });
        }
    }

    // Category progress
    const categoryList = document.getElementById('category-progress-list');
    if (categoryList) {
        categoryList.innerHTML = getCategories().map(cat => {
            const catQuestions = getQuestionsByCategory(cat);
            const mastered = catQuestions.filter(q => progress.questionsMastered.includes(q.id)).length;
            const catPercent = Math.round((mastered / catQuestions.length) * 100);

            return `
                <div class="category-progress-item">
                    <div class="category-progress-header">
                        <span>${cat}</span>
                        <span>${mastered}/${catQuestions.length}</span>
                    </div>
                    <div class="category-progress-bar">
                        <div class="category-progress-fill" style="width: ${catPercent}%"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Weak questions
    const weakList = document.getElementById('weak-questions-list');
    if (weakList) {
        if (progress.weakQuestions.length === 0) {
            weakList.innerHTML = '<p class="empty-message">No weak areas identified yet. Take some quizzes!</p>';
        } else {
            weakList.innerHTML = progress.weakQuestions.slice(0, 10).map(id => {
                const q = civicsQuestions.find(cq => cq.id === id);
                return `
                    <div class="weak-item" data-id="${id}">
                        <div class="weak-item-question">${id}. ${q?.question}</div>
                        <div class="weak-item-category">${q?.category}</div>
                    </div>
                `;
            }).join('');

            weakList.querySelectorAll('.weak-item').forEach(item => {
                item.addEventListener('click', () => {
                    navigateTo('flashcards');
                    const idx = AppState.flashcard.questions.findIndex(q => q.id === parseInt(item.dataset.id));
                    if (idx >= 0) {
                        AppState.flashcard.currentIndex = idx;
                        updateFlashcardDisplay();
                    }
                });
            });
        }
    }
}

function markQuestionAsStudied(id) {
    if (!AppState.progress.questionsStudied.includes(id)) {
        AppState.progress.questionsStudied.push(id);
        saveProgress();
    }
}

function markQuestionAsMastered(id) {
    markQuestionAsStudied(id);
    if (!AppState.progress.questionsMastered.includes(id)) {
        AppState.progress.questionsMastered.push(id);
    }
    // Remove from weak if mastered
    const weakIdx = AppState.progress.weakQuestions.indexOf(id);
    if (weakIdx >= 0) {
        AppState.progress.weakQuestions.splice(weakIdx, 1);
    }
    saveProgress();
}

function addWeakQuestion(id) {
    // Add to weak questions (move to front if already there)
    const idx = AppState.progress.weakQuestions.indexOf(id);
    if (idx >= 0) {
        AppState.progress.weakQuestions.splice(idx, 1);
    }
    AppState.progress.weakQuestions.unshift(id);

    // Limit weak questions list to 20 items to prevent unbounded growth
    if (AppState.progress.weakQuestions.length > 20) {
        AppState.progress.weakQuestions = AppState.progress.weakQuestions.slice(0, 20);
    }

    // Remove from mastered
    const masterIdx = AppState.progress.questionsMastered.indexOf(id);
    if (masterIdx >= 0) {
        AppState.progress.questionsMastered.splice(masterIdx, 1);
    }

    saveProgress();
}

function toggleMarkQuestion(id) {
    const idx = AppState.markedQuestions.indexOf(id);
    if (idx >= 0) {
        AppState.markedQuestions.splice(idx, 1);
    } else {
        AppState.markedQuestions.push(id);
    }
    saveProgress();
}

function resetProgress() {
    AppState.progress = {
        questionsStudied: [],
        questionsMastered: [],
        quizzesTaken: 0,
        examsPassed: 0,
        examsFailed: 0,
        totalCorrect: 0,
        totalAnswered: 0,
        weakQuestions: [],
        categoryProgress: {}
    };
    AppState.markedQuestions = [];
    saveProgress();
    alert('Progress has been reset.');
}

function exportProgress() {
    const data = {
        progress: AppState.progress,
        markedQuestions: AppState.markedQuestions,
        exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'citizenship-study-progress.json';
    a.click();
    URL.revokeObjectURL(url);
}
