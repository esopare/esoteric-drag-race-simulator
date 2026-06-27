// Franchise Builder JS
let franchises = [];
let currentFranchise = null;
let currentSeasonQueens = [];
let currentEditingSeasonIndex = null; // null means we're adding a new season

// DOM elements
const deleteSeasonBtn = document.getElementById('deleteSeasonBtn');
const franchiseNameInput = document.getElementById('franchiseNameInput');
const createFranchiseBtn = document.getElementById('createFranchiseBtn');
const franchiseTabs = document.getElementById('franchiseTabs');
const addSeasonSection = document.getElementById('addSeasonSection');
const seasonNumberEl = document.getElementById('seasonNumber');
const castLengthEl = document.getElementById('castLength');
const queenList = document.getElementById('queenList');
const queenSearch = document.getElementById('queenSearch');
const seasonButtons = document.getElementById('seasonButtons');
const posterUrlInput = document.getElementById('posterUrl');
const saveSeasonBtn = document.getElementById('saveSeasonBtn');
const currentCastEl = document.getElementById('currentCast');
const backToSeasonsBtn = document.getElementById('backToSeasonsBtn');

backToSeasonsBtn.addEventListener('click', () => {
    currentEditingSeasonIndex = null;        // exit edit mode
    addSeasonSection.style.display = 'none'; // hide form
    backToSeasonsBtn.style.display = 'none'; // hide back button
});

// Pull existing queens from index.js
allQueens = allQueens || [];
for (let key in window) {
    if (Array.isArray(window[key]) && window[key][0] instanceof Queen) {
        allQueens = allQueens.concat(window[key]);
    }
}

// ---- Render Queen List ----
function renderQueenList(filter = '') {
    queenList.innerHTML = '';
    if (filter.length === 0) return;

    const filtered = allQueens.filter(q => q._name.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach(q => {
        const card = document.createElement('div');
        card.className = 'queen-card';

        const img = document.createElement('img');
        img.src = q.image;
        img.alt = q._name;

        const name = document.createElement('div');
        name.textContent = q._name;

        card.appendChild(img);
        card.appendChild(name);

        card.onclick = () => addQueenToSeason(q);
        queenList.appendChild(card);
    });
}
const simulateSeasonBtn = document.getElementById('simulateSeasonBtn');

simulateSeasonBtn.onclick = () => {
  if (editingSeasonIndex === null) {
    alert("Open a saved season first");
    return;
  }

  const season = franchises[currentFranchise].seasons[editingSeasonIndex];

  window.startSimulationFromBuilder({
    cast: season.cast,
    premiere: season.premiere,
    format: season.format,
    finale: season.finale,
    returning: season.returning
  });
};


// ---- Update Current Cast ----
function updateCurrentCast() {
    currentCastEl.innerHTML = '';
    const currentCastCountEl = document.getElementById('currentCastCount');
    currentCastCountEl.textContent = `${currentSeasonQueens.length} queen${currentSeasonQueens.length !== 1 ? 's' : ''}`;

    currentSeasonQueens.forEach(q => {
        const card = document.createElement('div');
        card.className = 'current-cast-queen';
        card.style.position = 'relative'; // make positioning relative for remove button

        // Queen image
        const img = document.createElement('img');
        img.src = q.image;
        img.alt = q._name;
        card.appendChild(img);

        // Queen name
        const name = document.createElement('div');
        name.textContent = q._name;
        card.appendChild(name);

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×'; // fancy cross
        removeBtn.style.position = 'absolute';
        removeBtn.style.top = '5px';
        removeBtn.style.right = '5px';
        removeBtn.style.background = 'rgba(255,0,0,0.8)';
        removeBtn.style.color = '#fff';
        removeBtn.style.border = 'none';
        removeBtn.style.borderRadius = '50%';
        removeBtn.style.width = '20px';
        removeBtn.style.height = '20px';
        removeBtn.style.cursor = 'pointer';
        removeBtn.style.fontWeight = 'bold';
        removeBtn.onclick = (e) => {
            e.stopPropagation(); // prevent any parent click events
            currentSeasonQueens = currentSeasonQueens.filter(queen => queen !== q);
            updateCurrentCast();
            castLengthEl.textContent = currentSeasonQueens.length;
        };

        card.appendChild(removeBtn);
        currentCastEl.appendChild(card);
    });
}


// ---- Add Queen to Current Season ----
function addQueenToSeason(queen) {
    if (currentSeasonQueens.includes(queen)) return;
    currentSeasonQueens.push(queen);
    castLengthEl.textContent = currentSeasonQueens.length;
    updateCurrentCast();
    saveCurrentSeason();
}

// ---- Add Franchise ----
createFranchiseBtn.addEventListener('click', () => {
    const name = franchiseNameInput.value.trim();
    if (!name) return;
    const franchise = {name, seasons: []};
    franchises.push(franchise);
    franchiseNameInput.value = '';
    renderFranchiseTabs();
    saveFranchises();
});

// ---- Render Franchise Tabs ----
function renderFranchiseTabs() {
    franchiseTabs.innerHTML = '';
    franchises.forEach((f, idx) => {
        const tab = document.createElement('div');
        tab.className = 'franchise-tab';
        tab.textContent = f.name;
        tab.onclick = () => selectFranchise(idx);
        franchiseTabs.appendChild(tab);
    });
}

// ---- Select Franchise ----
function selectFranchise(idx) {
    currentFranchise = franchises[idx];
    addSeasonSection.style.display = 'none';
    renderSeasonButtons();
    document.querySelectorAll('.franchise-tab').forEach((tab,i)=>{
        tab.classList.toggle('active', i===idx);
    });
}

// ---- Render Season Buttons ----
function renderSeasonButtons() {
    seasonButtons.innerHTML = '';

currentFranchise.seasons.forEach((season, index) => {
    const btn = document.createElement('div');
    btn.className = 'season-button';

    // Apply poster with optional gradient overlay
    if (season.poster) {
        btn.style.background = `linear-gradient(rgba(255, 0, 153, 0.4), rgba(255, 102, 204, 0.4)), url('${season.poster}')`;
        btn.style.backgroundSize = 'cover';
        btn.style.backgroundPosition = 'center';
        btn.style.backgroundRepeat = 'no-repeat';
    } else {
        btn.style.background = '#ff99cc'; // fallback color
    }

    const span = document.createElement('span');
    span.textContent = `Season ${season.number}`;
    btn.appendChild(span);

    btn.onclick = () => {
        selectSeason(index);
        addSeasonSection.style.display = 'block';
    };

    seasonButtons.appendChild(btn);
});

    // "+ Add Season" button
    const addBtn = document.createElement('div');
    addBtn.className = 'season-button';
    addBtn.textContent = '+ Add Season';
    addBtn.style.background = '#ff66cc';
    addBtn.style.color = '#fff';
    addBtn.style.fontWeight = 'bold';
    addBtn.style.cursor = 'pointer';
    addBtn.onclick = () => {
        addSeasonSection.style.display = 'block';
        currentSeasonQueens = [];
        castLengthEl.textContent = 0;
        updateCurrentCast(); // <-- add this
        queenSearch.value = '';
        posterUrlInput.value = '';
        renderQueenList();
        seasonNumberEl.textContent = currentFranchise.seasons.length + 1;
    };
    seasonButtons.appendChild(addBtn);
}

// Close queen list when clicking outside the search box
document.addEventListener('click', (e) => {
    const search = document.getElementById('queenSearch');
    const list = document.getElementById('queenList');

    if (!search.contains(e.target) && !list.contains(e.target)) {
        // Clicked outside the search input and the list
        list.innerHTML = ''; // hide all filtered queens
    }
});

const randomQueenBtn = document.getElementById('randomQueenBtn');

randomQueenBtn.addEventListener('click', () => {
    if (!allQueens || allQueens.length === 0) return;

    // Filter out queens already in the current season
    const availableQueens = allQueens.filter(q => !currentSeasonQueens.includes(q));
    if (availableQueens.length === 0) return alert("All queens are already added!");

    // Pick a random queen
    const randomIndex = Math.floor(Math.random() * availableQueens.length);
    const queen = availableQueens[randomIndex];

    addQueenToSeason(queen);
});

const cancelSeasonBtn = document.getElementById('cancelSeasonBtn');

cancelSeasonBtn.addEventListener('click', () => {
    // Reset form values
    currentSeasonQueens = [];
    castLengthEl.textContent = 0;
    updateCurrentCast(); // clear the cast visually
    queenSearch.value = '';
    posterUrlInput.value = '';
    currentEditingSeasonIndex = null;

    // Hide the add-season section
    addSeasonSection.style.display = 'none';
    backToSeasonsBtn.style.display = 'none';
});


// ---- Select Season ----
function selectSeason(index) {
    const season = currentFranchise.seasons[index];
    if (!season) return;

    currentEditingSeasonIndex = index; // track the season being edited

    currentSeasonQueens = [...season.queens];
    castLengthEl.textContent = currentSeasonQueens.length;

    updateCurrentCast();
    posterUrlInput.value = season.poster || '';
    addSeasonSection.style.display = 'block'; // show form

    backToSeasonsBtn.style.display = 'inline-block'; // show back button
}



// ---- Save Season ----
saveSeasonBtn.addEventListener('click', () => {
    if (!currentFranchise) return;
    if (currentSeasonQueens.length === 0) return alert("Add at least one queen!");

    if (currentEditingSeasonIndex !== null) {
        // Editing existing season
        currentFranchise.seasons[currentEditingSeasonIndex].queens = [...currentSeasonQueens];
        currentFranchise.seasons[currentEditingSeasonIndex].poster = posterUrlInput.value || '';
    } else {
        // Adding new season
        const season = {
            number: currentFranchise.seasons.length + 1,
            queens: [...currentSeasonQueens],
            poster: posterUrlInput.value || '',
        };
        currentFranchise.seasons.push(season);
    }

    // Reset form
    currentSeasonQueens = [];
    posterUrlInput.value = '';
    queenSearch.value = '';
    currentEditingSeasonIndex = null; // reset to adding new season
    addSeasonSection.style.display = 'none'; 

    renderQueenList();
    renderSeasonButtons();
    saveFranchises();
    saveCurrentSeason();
});


// ---- Delete Season ----
deleteSeasonBtn.addEventListener('click', () => {
    if (!currentFranchise || currentFranchise.seasons.length === 0) return;
    if (!confirm("Are you sure you want to delete this season?")) return;

    currentFranchise.seasons.pop();
    currentSeasonQueens = [];
    castLengthEl.textContent = 0;
    queenSearch.value = '';
    posterUrlInput.value = '';
    renderSeasonButtons();
    updateCurrentCast();
    saveFranchises();
});

currentSeasonQueens.forEach(q => {
    const btn = document.createElement('div');
    btn.className = 'current-cast-queen';

    const img = document.createElement('img');
    img.src = q.image;
    img.alt = q._name;
    btn.appendChild(img);

    const name = document.createElement('div');
    name.textContent = q._name;
    btn.appendChild(name);

    btn.onclick = () => {
        currentSeasonQueens = currentSeasonQueens.filter(queen => queen !== q);
        updateCurrentCast();
        castLengthEl.textContent = currentSeasonQueens.length;
    };

    currentCastEl.appendChild(btn);
});

window.startSimulationFromBuilder = function (data) {
  // Clear current cast
  chosenKweens.innerHTML = "";
  kweens = [];

  // Inject cast exactly as if user picked them manually
  data.cast.forEach(name => {
    const queen = contestants.find(q => q.name === name);
    if (!queen) return;
    kweens.push(queen);
  });

  // Inject formats
  document.getElementById("premiere-format").value = data.premiere;
  document.getElementById("format").value = data.format;
  document.getElementById("finale").value = data.finale;
  document.getElementById("returning").value = data.returning;

  // Start simulation (existing function)
  startSimulation();
};



// ---- Save/Load to LocalStorage ----
function saveFranchises() {
    localStorage.setItem('franchises', JSON.stringify(franchises));
}
function loadFranchises() {
    const data = localStorage.getItem('franchises');
    if (data) franchises = JSON.parse(data);
}

// Save current season queens
function saveCurrentSeason() {
    localStorage.setItem('currentSeasonQueens', JSON.stringify(currentSeasonQueens.map(q => q._name)));
}
function loadCurrentSeason() {
    const data = localStorage.getItem('currentSeasonQueens');
    if (data) {
        const names = JSON.parse(data);
        currentSeasonQueens = allQueens.filter(q => names.includes(q._name));
        updateCurrentCast();
        castLengthEl.textContent = currentSeasonQueens.length;
    }
}

// ---- Event Listeners ----
queenSearch.addEventListener('input', e => renderQueenList(e.target.value));

// ---- Init ----
loadFranchises();
renderFranchiseTabs();
if (franchises.length > 0) selectFranchise(0);
loadCurrentSeason();
renderQueenList();