// quiz.js (Randomized Phishing Quiz Generator)

const questionsPool = [
  {
    question: "Which of the following best signals a phishing email?",
    options: [
      "A message from a familiar brand using company colors",
      "A file attachment labeled \"Invoice_2024.pdf\" from a supplier",
      "The sender’s name says ‘PayPal’ but the email is from randommail.co",
      "The email contains a valid-looking company signature"
    ],
    answer: 2
  },
  {
    question: "You receive a request to verify your bank login via email. What’s the most secure response?",
    options: [
      "Log in via the link and check your account",
      "Call the number in the email",
      "Open a new browser tab and visit the official bank site directly",
      "Forward the email to your colleagues to warn them"
    ],
    answer: 2
  },
  {
    question: "Which URL below should raise a red flag for phishing?",
    options: [
      "https://paypal.com-security-support.net",
      "https://support.paypal.com/login",
      "https://paypal.verify-secure-account.com",
      "https://www.paypal.com/help/contact"
    ],
    answer: 2
  },
  {
    question: "What’s a secure way to verify a message from a company you trust?",
    options: [
      "Reply asking if it's really from them",
      "Click the link and see if it feels familiar",
      "Contact them using a method listed on their official website",
      "Use the contact info provided in the email"
    ],
    answer: 2
  },
  {
    question: "A coworker sends you an unexpected file called 'ClientContract.zip'. What should you do?",
    options: [
      "Open it if you recognize the name",
      "Scan it with antivirus then open it",
      "Ask them if they meant to send it",
      "Confirm with the sender via a separate communication channel before opening"
    ],
    answer: 3
  },
  {
    question: "You see a message that says: ‘Urgent: Verify your account in 12 hours or it will be disabled.’ What’s your best course of action?",
    options: [
      "Ignore it if you don’t care about the account",
      "Investigate using the company’s real site or support channels",
      "Follow the link and verify your info quickly",
      "Delete the email and move on"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a reliable sign of a legitimate email?",
    options: [
      "A branded email template with logos",
      "A matching sender display name and subject",
      "The email contains your full name and correct account number",
      "The domain name matches the organization’s official domain exactly"
    ],
    answer: 3
  },
  {
    question: "You get a Zoom invite from a partner company, but the URL is zoomstart.meeting-connect.com. What do you do?",
    options: [
      "Accept since it looks like Zoom",
      "Ask for the password to verify it’s secure",
      "Contact the sender through a verified channel to confirm",
      "Join the meeting and ask questions later"
    ],
    answer: 2
  },
  {
    question: "A browser pop-up says: ‘System alert: your device is infected. Call now.’ What should you do?",
    options: [
      "Close the pop-up and scan your system with trusted antivirus",
      "Call the number and ask for support",
      "Click to download the recommended cleaning tool",
      "Share the pop-up with your IT team via screenshot"
    ],
    answer: 0
  },
  {
    question: "Which is the safest habit when browsing online?",
    options: [
      "Trusting sites with a padlock icon",
      "Clicking links only from known people",
      "Typing full URLs manually or using bookmarks to navigate",
      "Using autofill to log into websites quickly"
    ],
    answer: 2
  },
  {
    question: "How should you handle a login page that appears after clicking a suspicious email?",
    options: [
      "Enter your info if the design looks legitimate",
      "Forward the email to IT without further action",
      "Check the domain manually in a new browser tab",
      "Ignore it and continue using the website"
    ],
    answer: 2
  },
  {
    question: "Which email behavior increases your vulnerability to phishing?",
    options: [
      "Filtering your inbox",
      "Opening attachments from trusted contacts only",
      "Responding to emails with sensitive data",
      "Using a business email account"
    ],
    answer: 2
  },
  {
    question: "Which password practice offers the highest level of security?",
    options: [
      "Using your birthdate and pet name",
      "Creating a long passphrase with unrelated words",
      "Reusing a strong password on several accounts",
      "Saving passwords in a browser"
    ],
    answer: 1
  },
  {
    question: "When should you update your antivirus software?",
    options: [
      "Only when notified",
      "Once per year",
      "After every download",
      "Regularly, even without signs of issues"
    ],
    answer: 3
  },
  {
    question: "Why is it risky to click on email links asking for urgent action?",
    options: [
      "They may install time trackers",
      "They often lead to surveys",
      "They might redirect you to malicious sites",
      "They could trigger auto-responses"
    ],
    answer: 2
  }
];

function getRandomQuestions(pool, count = 10) {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function renderQuiz() {
  const quizForm = document.getElementById("quizForm");
  const questions = getRandomQuestions(questionsPool);
  quizForm.innerHTML = "";

  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>` +
      q.options.map((opt, i) => `
        <label><input type="radio" name="q${index}" value="${i}"> ${opt}</label><br>
      `).join("");
    quizForm.appendChild(questionDiv);
  });

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit Answers";
  quizForm.appendChild(submitButton);

  quizForm.onsubmit = function(event) {
    event.preventDefault();
    let score = 0;
    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name='q${index}']:checked`);
      if (selected && parseInt(selected.value) === q.answer) {
        score++;
      }
    });
    document.getElementById("quiz-result").textContent = `You scored ${score} out of ${questions.length}.`;
  };
}

document.addEventListener("DOMContentLoaded", renderQuiz);
