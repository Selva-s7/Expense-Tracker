# 💰 Expense Tracker

A simple, responsive expense tracker built with vanilla JavaScript. Add expenses, categorize them, view a live pie chart breakdown, and everything persists in your browser — no backend required.

## 🔗 Live Demo
[View Live Site](https://selva-s7.github.io/Expense-Tracker/)

## ✨ Features
- Add expenses with category and amount
- Real-time running total
- Delete individual expense entries
- Data persists across sessions using `localStorage`
- Visual breakdown by category using a Chart.js pie chart
- Chart updates dynamically as expenses are added or removed

## 🛠️ Built With
- HTML5
- CSS3
- JavaScript (ES6+)
- [Chart.js](https://www.chartjs.org/) for data visualization
- Browser `localStorage` API for persistence




## 🚀 Getting Started

Clone the repo and open `index.html` in your browser — no build step or dependencies needed:

```bash
git clone https://github.com/selva-s7/Expense-Tracker.git
cd Expense-Tracker
```

Then open `index.html` with Live Server or directly in your browser.

## 🧠 What I Learned
- Managing dynamic DOM creation and cleanup without element reuse bugs
- Structuring `localStorage` with individual keys per entry for reliable add/delete operations
- Wiring up Chart.js to reflect live data changes (destroy/recreate pattern)
- Handling state (running totals, ID counters) purely in JavaScript without a framework

## 📌 Future Improvements
- Edit existing expenses
- Filter/sort by date or category
- Monthly budget limits with visual warnings

---
Built as part of my journey learning JavaScript from the ground up 🚀