# Instagram Stories – React (Mobile Only)

This project is a simplified version of the Instagram Stories feature, built using **React** and **Tailwind CSS**.  
The focus of this assignment is on **user interface, interaction, and frontend logic**, without backend persistence.

---

## 🚀 Features

- 📱 **Mobile-first design** (optimized for small screens)
- 🖼️ **Horizontally scrollable list of stories**
- 📂 Stories fetched from an **external data file**
- ▶️ **Full-screen story viewer**
- ⏱️ **Automatic story progression every 5 seconds**
- 👆 **Manual navigation**
  - Tap left → Previous story
  - Tap right → Next story
- ⌨️ **Keyboard navigation (optional enhancement)**
  - Arrow keys for navigation
  - Escape key to close viewer
- ⏳ **Loading state handling**
- 🎨 Smooth UI transitions (optional)

---

## 🛠️ Tech Stack

- **React** (Functional Components & Hooks)
- **Tailwind CSS**
- **JavaScript (ES6+)**

> No external libraries were used for core functionality, as per the assignment requirements.

---

## 📁 Folder Structure

src/
├── data/
│ └── stories.js
├── components/
│ ├── StoryList.jsx
│ ├── StoryViewer.jsx
│ └── Loader.jsx
├── App.jsx
├── index.css
└── main.jsx

## 🔍 Demo / Live Site  
_If deployed (e.g. on Netlify), put the link here_  
[Live Demo](https://instagram-stories-otmsg1dn1-sayaliwagals-projects.vercel.app/) 


### Installation & Run

```bash
git clone https://github.com/sayaliwagal/Instagram-Stories.git
cd Instagram-Stories
npm install
npm run dev
