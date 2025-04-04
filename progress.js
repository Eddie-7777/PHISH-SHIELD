// progress.js

document.addEventListener("DOMContentLoaded", () => {
  fetch("getresults.php")
    .then(res => res.json())
    .then(response => {
      const tableBody = document.querySelector("#results-table tbody");
      const results = response.data;

      if (!results || results.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='4'>No results found.</td></tr>";
        return;
      }

      results.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${row.quiz_type}</td>
          <td>${row.score}</td>
          <td>${row.total_questions}</td>
          <td>${row.timestamp}</td>
        `;
        tableBody.appendChild(tr);
      });
    })
    .catch(err => {
      console.error("❗ Error loading results:", err);
    });
});
