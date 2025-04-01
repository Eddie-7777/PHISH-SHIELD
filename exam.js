// exam.js (Advanced Phishing & Fake Website Detection)

const examPool = [
  {
    question: "Is this email safe?\n\nFrom: support@amaz0n.com\nSubject: Your order has shipped!",
    options: [
      "Yes, the sender is Amazon",
      "Yes, the subject seems normal",
      "No, the domain 'amaz0n.com' is not Amazon",
      "Yes, the email confirms shipping"
    ],
    answer: 2
  },
  {
    question: "Which of these URLs is suspicious?",
    options: [
      "https://signin.aws.amazon.com",
      "https://amazonwebservices.com/support/login",
      "https://aws.support-login.com",
      "https://console.aws.amazon.com"
    ],
    answer: 2
  },
  {
    question: "A login page looks like Microsoft, but the URL is 'https://login.micr0soft.com'. What's your verdict?",
    options: [
      "Looks fine, it's secure",
      "Legitimate Microsoft site",
      "Fake - domain is misspelled",
      "Just a regional variation"
    ],
    answer: 2
  },
  {
    question: "Is this email legitimate?\n\nFrom: info@paypal-security.com\nSubject: Account Locked - Action Required",
    options: [
      "Yes, it’s from PayPal",
      "Yes, because the subject is urgent",
      "No, real PayPal emails use paypal.com",
      "Yes, it’s warning about security"
    ],
    answer: 2
  },
  {
    question: "Which login page should raise suspicion?",
    options: [
      "https://accounts.google.com",
      "https://secure-google.loginpage.com",
      "https://myaccount.google.com",
      "https://login.live.com"
    ],
    answer: 1
  },
  {
    question: "You receive an email: 'support@netfliix.com' with a subscription alert. What should you do?",
    options: [
      "Click to confirm it's not fake",
      "Ignore if you're not a Netflix user",
      "Report it — the domain is suspicious",
      "Trust it — Netflix is misspelled often"
    ],
    answer: 2
  },
  {
    question: "You visit a website that looks like Facebook but the URL is: 'https://facebook-com.login.verify-now.net'. What's your action?",
    options: [
      "Login quickly to secure account",
      "Ignore the URL, focus on design",
      "Report — domain is clearly fake",
      "Continue if using HTTPS"
    ],
    answer: 2
  },
  {
    question: "An email claims to be from Microsoft: 'microsoft-account@msverify.net'. Safe?",
    options: [
      "Yes — Microsoft has many domains",
      "No — real Microsoft uses microsoft.com",
      "Yes — it sounds official",
      "Yes — they often outsource"
    ],
    answer: 1
  },
  {
    question: "Which URL is most likely phishing?",
    options: [
      "https://support.apple.com",
      "https://appleid.apple.com",
      "https://appleid.recover-support.com",
      "https://www.apple.com"
    ],
    answer: 2
  },
  {
    question: "You get this email: 'billing@amazons.com' asking you to update your card info. What’s wrong?",
    options: [
      "Nothing, it’s normal",
      "Seems urgent, probably real",
      "Spelling of domain is incorrect",
      "Amazon may use variants"
    ],
    answer: 2
  },
  {
    question: "The website 'https://dropbox-com.login.secure-site.org' requests your credentials. What’s your move?",
    options: [
      "It's fine if it has HTTPS",
      "Report it — domain is deceptive",
      "Ignore it — Dropbox uses multiple domains",
      "Login quickly to protect your files"
    ],
    answer: 1
  },
  {
    question: "An email reads: 'From: alert@bankofamericasecurity.com' — what do you notice?",
    options: [
      "Domain is too long to be official",
      "It uses the word 'alert'",
      "It looks secure",
      "No red flags"
    ],
    answer: 0
  },
  {
    question: "A link says: 'Click here to verify your Netflix account' and points to 'netflix-billing-help.com'. Safe?",
    options: [
      "Yes — all links work",
      "No — real Netflix wouldn’t use that domain",
      "Yes — it’s related to billing",
      "No — the SSL certificate is invalid"
    ],
    answer: 1
  },
  {
    question: "Which of these LinkedIn URLs is fake?",
    options: [
      "https://linkedin.com/login",
      "https://login.linkedin.com",
      "https://linkedln.com/profile",
      "https://www.linkedin.com/feed"
    ],
    answer: 2
  },
  {
    question: "Is this email trustworthy? 'From: amazon-security@amznverify.com'",
    options: [
      "Yes, it's from Amazon",
      "No — real Amazon domains are simpler",
      "Yes — uses secure format",
      "Yes — verified support domain"
    ],
    answer: 1
  },
  {
    question: "A support URL points to 'https://microsoft-accounthelp.com'. What do you think?",
    options: [
      "Legit — includes Microsoft",
      "Fake — not an official Microsoft domain",
      "Safe if accessed on company Wi-Fi",
      "Only bad if misspelled"
    ],
    answer: 1
  },
  {
    question: "Email from 'update@googIe.com' (with a capital 'i') — safe?",
    options: [
      "Yes — it’s from Google",
      "No — domain uses a fake 'i' instead of 'l'",
      "Yes — this is common",
      "Only a concern if attachments exist"
    ],
    answer: 1
  },
  {
    question: "Is 'paypal.verify-info.com' a valid PayPal login URL?",
    options: [
      "Yes — verified by name",
      "No — misleading subdomain",
      "Yes — uses HTTPS",
      "Yes — subdomains vary"
    ],
    answer: 1
  },
  {
    question: "A Google sign-in form opens from 'https://accounts.google.secure.com'. Is it safe?",
    options: [
      "Yes — domain includes 'google'",
      "Yes — secure connection",
      "No — main domain is not google.com",
      "Yes — subdomains are flexible"
    ],
    answer: 2
  },
  {
    question: "The email 'no-reply@bank0famerica.com' appears in your inbox. What stands out?",
    options: [
      "Nothing, it’s expected",
      "It's from Bank of America",
      "Domain uses zero instead of 'o'",
      "It's fine if you bank with them"
    ],
    answer: 2
  }
];

function getRandomExam(pool, count = 10) {
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function renderExam() {
  const form = document.getElementById("examForm");
  const questions = getRandomExam(examPool);
  form.innerHTML = "";

  questions.forEach((q, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("question");
    wrapper.innerHTML = `<p>${index + 1}. ${q.question.replace(/\n/g, '<br>')}</p>` +
      q.options.map((opt, i) => `
        <label><input type="radio" name="q${index}" value="${i}"> ${opt}</label><br>`
      ).join("");
    form.appendChild(wrapper);
  });

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit Exam";
  form.appendChild(submitBtn);

  form.onsubmit = function (e) {
    e.preventDefault();
    let score = 0;
    questions.forEach((q, i) => {
      const selected = document.querySelector(`input[name='q${i}']:checked`);
      if (selected && parseInt(selected.value) === q.answer) score++;
    });
    document.getElementById("exam-result").textContent = `You scored ${score} out of ${questions.length}.`;
  }
}

document.addEventListener("DOMContentLoaded", renderExam);