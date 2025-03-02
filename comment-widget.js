// Firebase Configuration (same as before)
const firebaseConfig = {
  apiKey: "AIzaSyADGABM6QqX_3YOH_dwE-3TbE_i35qSJZw",
  authDomain: "anonymous-57c9f.firebaseapp.com",
  databaseURL: "https://anonymous-57c9f-default-rtdb.firebaseio.com",
  projectId: "anonymous-57c9f",
  storageBucket: "anonymous-57c9f.firebasestorage.app",
  messagingSenderId: "162675156575",
  appId: "1:162675156575:web:28a2c31c72802dee529dea",
  measurementId: "G-XJC74NYQGW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

class CommentWidget {
  constructor(config) {
    this.targetUrl = config.url || window.location.href;
    this.initWidget();
    this.loadBotComments();
    this.loadComments();
  }

  initWidget() {
    // Create widget container
    this.container = document.createElement('div');
    this.container.className = 'cq-container';
    this.container.innerHTML = `
      <div class="cq-comment-box">
        <input class="cq-username" placeholder="Username (optional)">
        <textarea class="cq-input" placeholder="Write your comment..."></textarea>
        <div class="cq-emoji-panel">
          <button data-emoji="😊">😊</button>
          <button data-emoji="😄">😄</button>
          <button data-emoji="😐">😐</button>
          <button data-emoji="😕">😕</button>
          <button data-emoji="😠">😠</button>
        </div>
        <div class="cq-stars">
          ${'★'.repeat(5).split('').map((_,i) => `<span data-rating="${i+1}">★</span>`).join('')}
        </div>
        <button class="cq-submit">Post Comment</button>
        <div class="cq-comments-list"></div>
      </div>
    `;

    // Append to DOM
    document.body.appendChild(this.container);
    
    // Event listeners
    this.initEvents();
  }

  // ... (Add all other methods from original popup.js here)
  // Modify chrome.tabs.query to use targetUrl
}

// Initialize widget when script loads
window.CommentQuest = {
  init: (config) => new CommentWidget(config)
};
