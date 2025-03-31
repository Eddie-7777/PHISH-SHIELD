function showSecurityTip() {
  const tips = [
    "Never click on suspicious links.",
    "Check the sender's email address carefully.",
    "Don't share personal information over email.",
    "Enable two-factor authentication whenever possible.",
    "Hover over links to preview the URL before clicking."
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("security-tip").textContent = randomTip;
}
