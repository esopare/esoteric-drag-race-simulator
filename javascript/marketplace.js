// =====================================
// MARKETPLACE QUEENS
// =====================================

let marketplaceQueens = [

    new Queen("Abigail Beverly Hilzz", 9, 8, 8, 7, 9, 10, 8, "DLC/AbigailBeverlyHilzz"),
    new Queen("Gia Luzz", 12, 9, 15, 10, 11, 14, 15, "DLC/GiaLuzz"),
    new Queen("Kitty Banks", 6, 6, 7, 10, 6, 11, 7, "DLC/KittyBanks"),
    new Queen("Camille Yen", 9, 8, 5, 8, 8, 11, 8, "DLC/CamilleYen"),
    new Queen("Fungi", 11, 13, 6, 14, 12, 15, 10, "DLC/Fungi"),
    new Queen("Justy Love", 10, 7, 15, 11, 8, 11, 14, "DLC/JustyLove"),
    new Queen("Amarra", 11, 11, 11, 8, 11, 13, 11, "DLC/Amarra"),
    new Queen("Cleo D'Indy", 10, 10, 10, 13, 9, 14, 10, "DLC/CleoDIndy"),
    new Queen("Lou Mei Yi", 12, 11, 10, 14, 12, 13, 10, "DLC/LouMeiYi"),
    new Queen("Gucci", 11, 9, 10, 8, 9, 7, 12, "DLC/Gucci"),
    new Queen("Kikkita Flowers", 9, 9, 11, 6, 10, 8, 6, "DLC/KikkitaFlowers"),
    new Queen("Feytunia Slut", 7, 3, 7, 15, 5, 15, 6, "DLC/FeytuniaSlut"),
    new Queen("Gwen Zee", 5, 6, 7, 6, 6, 6, 12, "DLC/GwenZee"),
    new Queen("Envy Her", 9, 6, 10, 10, 5, 13, 8, "DLC/EnvyHer"),
    new Queen("Martina Von Palma", 4, 4, 4, 4, 4, 6, 4, "DLC/MartinaVonPalma"),
    new Queen("Foiegras", 7, 7, 7, 7, 7, 7, 7, "DLC/Foiegras"),
    new Queen("Lux Kween", 7, 7, 7, 7, 7, 7, 7, "DLC/LuxKween"),
    new Queen("Darna Bloom", 12, 11, 7, 14, 11, 14, 11, "DLC/DarnaBloom"),
    new Queen("Echoo", 9, 8, 7, 9, 10, 9, 8, "DLC/Echoo"),
    new Queen("Elektra Pulse", 9, 8, 11, 12, 8, 15, 13, "DLC/ElektraPulse"),
    new Queen("Karna Too", 4, 4, 5, 5, 4, 6, 6, "DLC/KarnaToo"),
    new Queen("Kiki Kaboom", 10, 11, 13, 15, 8, 15, 13, "DLC/KikiKaboom"),
    new Queen("Onyx Ray", 8, 9, 8, 9, 9, 11, 12, "DLC/OnyxRay"),
    new Queen("Polly Mateo", 14, 12, 9, 9, 10, 12, 13, "DLC/PollyMateo"),
    new Queen("Sugar Vain", 3, 3, 4, 3, 4, 4, 4, "DLC/SugarVain"),
    new Queen("Vera Cess", 9, 10, 8, 6, 10, 9, 12, "DLC/VeraCess"),
    new Queen("Amora Vise", 8, 6, 7, 9, 5, 8, 5, "DLC/AmoraVise"),
    new Queen("Angel Darko", 7, 8, 7, 6, 7, 6, 7, "DLC/AngelDarko"),
    new Queen("Roseé-Sheneé Plastique", 9, 8, 9, 9, 6, 13, 8, "DLC/RoseeShenee"),
    new Queen("Nana Youngrong Kim", 11, 10, 12, 15, 8, 15, 9, "DLC/NanaYoungrongKim"),
    new Queen("Luer Mizhari", 7, 7, 7, 7, 7, 7, 7, "DLC/LuerMizhari"),
    new Queen("Diwata", 7, 7, 7, 7, 7, 7, 7, "DLC/Diwata"),
    new Queen("Léo Pattra", 7, 7, 7, 7, 7, 7, 7, "DLC/LeoPatra"),
    new Queen("Arsyn", 7, 7, 7, 7, 7, 7, 7, "DLC/Arsyn"),
    new Queen("Dominik", 7, 7, 7, 7, 7, 7, 7, "DLC/Dominik"),
    new Queen("Kenzie The Dragon", 6, 5, 5, 6, 7, 7, 5, "DLC/KenzieTheDragon"),
    new Queen("Kris Love Dion", 3, 2, 5, 3, 2, 6, 8, "DLC/KrisLoveDion"),
    new Queen("Mo'Riah", 8, 4, 8, 6, 4, 6, 7, "DLC/MoRiah"),
    new Queen("Lolita Colby", 11, 10, 10, 11, 9, 10, 9, "DLC/LolitaColby"),
    new Queen("Jasmine Rice LaBeija", 7, 7, 7, 7, 7, 7, 7, "DLC/JasmineRiceLaBeija"),
    new Queen("Cynthia Grandé", 5, 5, 4, 4, 4, 4, 4, "DLC/CynthiaGrande"),
    new Queen("Divina D'Vil", 11, 13, 10, 8, 13, 12, 9, "DLC/DivinaDVil"),
    new Queen("Her", 10, 11, 12, 14, 10, 14, 9, "DLC/Her"),
    new Queen("Hershii King", 4, 4, 12, 6, 3, 8, 11, "DLC/HershiiKing"),
    new Queen("Kitty Espaxe", 13, 9, 10, 6, 8, 9, 10, "DLC/KittyEspaxe"),
    new Queen("La Cristal", 4, 8, 9, 9, 10, 10, 13, "DLC/LaCristal"),
    new Queen("Lexi Elite", 7, 7, 7, 7, 7, 7, 7, "DLC/LexiElite"),
    new Queen("Pepperminx", 11, 9, 10, 8, 9, 9, 12, "DLC/Pepperminx"),
    new Queen("Star La'Pearl", 4, 4, 4, 6, 4, 8, 4, "DLC/StarLaPearl"),
    new Queen("Stella Femme", 4, 4, 5, 12, 4, 11, 5, "DLC/StellaFemme"),
    new Queen("Venin", 15, 15, 11, 10, 15, 11, 10, "DLC/Venin"),
    new Queen("Zahira Versace", 7, 9, 9, 9, 8, 9, 10, "DLC/ZahiraVersace"),
    new Queen("Bambi Banks", 9, 9, 8, 8, 8, 8, 8, "DLC/BambiBanks"),
    new Queen("Jessica Hvsh", 7, 7, 7, 7, 7, 7, 7, "DLC/JessicaHvsh"),
    new Queen("Lagoona Bloo", 13, 12, 13, 8, 12, 8, 6, "DLC/LagoonaBloo"),
    new Queen("Rowan Ruthless", 3, 8, 6, 4, 4, 7, 7, "DLC/RowanRuthless"),
    new Queen("Veronica", 3, 2, 5, 3, 2, 6, 7, "DLC/Veronica"),
    new Queen("Aura", 5, 6, 5, 5, 6, 6, 5, "DLC/Aura"),
    new Queen("Barbie Velour", 8, 7, 7, 8, 5, 11, 7, "DLC/BarbieVelour"),
    new Queen("Bimbo Doll", 9, 7, 7, 6, 5, 11, 6, "DLC/BimboDoll"),
    new Queen("Dolly Demise", 6, 6, 8, 9, 6, 10, 7, "DLC/DollyDemise"),
    new Queen("Kandi Versace", 8, 10, 9, 10, 12, 13, 9, "DLC/KandiVersace"),
    new Queen("La Bonnie Tae", 6, 5, 6, 11, 5, 10, 9, "DLC/LaBonnieTae"),
    new Queen("La Carmen", 10, 9, 9, 9, 8, 13, 8, "DLC/LaCarmen"),
    new Queen("Lana Lust", 15, 15, 8, 10, 15, 10, 11, "DLC/LanaLust"),
    new Queen("Lux Vybe", 4, 8, 6, 5, 9, 8, 7, "DLC/LuxVybe"),
    new Queen("Ma'Amou", 8, 11, 12, 9, 11, 13, 12, "DLC/MaAmou"),
    new Queen("Mei Belle", 6, 7, 11, 10, 9, 11, 7, "DLC/MeiBelle"),
    new Queen("Seraphine", 10, 13, 9, 8, 13, 10, 9, "DLC/Seraphine"),
    new Queen("Velvet Vixen", 10, 11, 9, 8, 13, 13, 7, "DLC/VelvetVixen"),
    new Queen("Amelia Moon", 8, 7, 10, 7, 6, 10, 10, "DLC/AmeliaMoon"),
    new Queen("Brooke Heighs", 5, 4, 5, 4, 6, 11, 10, "DLC/BrookeHeights"),
    new Queen("Heidi Taylor", 9, 9, 10, 8, 10, 10, 12, "DLC/HeidiTaylor"),
    new Queen("Jaida Westwood", 7, 4, 8, 8, 6, 9, 8, "DLC/JaidaWestwood"),
    new Queen("Juicy Coco", 10, 7, 8, 10, 9, 9, 9, "DLC/JuicyCoco"),
    new Queen("Karma X", 10, 9, 10, 13, 9, 15, 10, "DLC/KarmaX"),
    new Queen("Miss Devine", 10, 10, 11, 5, 8, 9, 9, "DLC/MissDevine"),
    new Queen("Paula Jackson", 11, 6, 9, 12, 6, 11, 11, "DLC/PaulaJackson"),
    new Queen("Rayven", 6, 9, 9, 11, 6, 11, 11, "DLC/Rayven"),
    new Queen("Sunrize", 9, 9, 8, 12, 10, 12, 7, "DLC/Sunrize"),
    new Queen("Arizona Diore", 9, 9, 11, 6, 10, 8, 11, "DLC/ArizonaDiore"),
    new Queen("Cardi Haute", 9, 7, 10, 10, 9, 10, 12, "DLC/CardiHaute"),
    new Queen("Fifi Kiss", 8, 7, 8, 11, 7, 12, 8, "DLC/FifiKiss"),
    new Queen("Hazelnut", 10, 6, 6, 8, 6, 9, 8, "DLC/Hazelnut"),
    new Queen("Krystal Kaye", 8, 5, 8, 10, 6, 11, 9, "DLC/KrystalKaye"),
    new Queen("Lydia Starr", 9, 10, 15, 10, 10, 12, 15, "DLC/LydiaStarr"),
    new Queen("Mandy Dion", 5, 4, 14, 6, 3, 6, 14, "DLC/MandyDion"),
    new Queen("Mhyra", 9, 6, 10, 9, 6, 12, 7, "DLC/Mhyra"),
    new Queen("Onyx Ondix", 6, 5, 7, 7, 5, 13, 7, "DLC/OnyxOndix"),
    new Queen("Carmelle", 6, 8, 11, 6, 8, 8, 9, "DLC/Carmelle"),
    new Queen("Chasity Lopez", 8, 7, 4, 10, 6, 10, 8, "DLC/ChasityLopez"),
    new Queen("Dissy Adams", 7, 8, 6, 9, 9, 11, 6, "DLC/DissyAdams"),
    new Queen("Ivory Couture", 10, 12, 9, 11, 13, 13, 13, "DLC/IvoryCouture"),
    new Queen("Lux Milan", 8, 6, 6, 11, 7, 11, 7, "DLC/LuxMilan"),
    new Queen("Marina Peru", 6, 6, 9, 6, 6, 7, 9, "DLC/MarinaPeru"),
    new Queen("Mhiya Dion", 5, 5, 10, 5, 5, 8, 10, "DLC/MhiyaDion"),
    new Queen("Onya Chainz", 6, 7, 8, 6, 5, 11, 12, "DLC/OnyaChainz"),
    new Queen("Silky Smoothè", 6, 8, 4, 15, 8, 13, 4, "DLC/SilkySmoothe"),
    new Queen("Starzy Glitz", 4, 10, 9, 10, 6, 10, 12, "DLC/StarzyGlitz"),
    new Queen("Suki Supreme", 8, 8, 6, 9, 7, 8, 9, "DLC/SukiSupreme"),
    new Queen("Yvie Moon", 4, 4, 12, 6, 3, 8, 12, "DLC/YvieMoon"),
    new Queen("Alyssa Chang", 5, 5, 6, 12, 6, 11, 8, "DLC/AlyssaChang"),
    new Queen("Amanda", 11, 13, 10, 8, 13, 12, 9, "DLC/Amanda"),
    new Queen("Atheria", 5, 4, 8, 6, 4, 10, 8, "DLC/Atheria"),
    new Queen("Black Lacquer", 12, 12, 6, 11, 10, 11, 7, "DLC/BlackLacquer"),
    new Queen("Brandi Storm", 6, 6, 8, 8, 6, 10, 8, "DLC/BrandiStorm"),
    new Queen("Chainz", 12, 5, 6, 6, 5, 12, 9, "DLC/Chainz"),
    new Queen("Chanel No.5", 8, 9, 8, 9, 9, 11, 12, "DLC/ChanelN5"),
    new Queen("Dusk", 5, 5, 7, 6, 8, 8, 7, "DLC/Dusk"),
    new Queen("Erica La'Pearl", 8, 9, 11, 12, 10, 13, 10, "DLC/EricaLaPeral"),
    new Queen("Ganganja", 9, 5, 14, 8, 5, 8, 12, "DLC/Ganganja"),
    new Queen("Goddessa", 12, 8, 15, 10, 11, 14, 15, "DLC/Goddessa"),
    new Queen("Kehlani", 6, 6, 10, 6, 9, 7, 13, "DLC/Kehlani"),
    new Queen("Kiannah Fierce", 7, 6, 7, 11, 5, 12, 6, "DLC/KiannahFierce"),
    new Queen("Lydia Glitz", 4, 7, 7, 10, 6, 10, 9, "DLC/LydiaGlitz"),
    new Queen("Myth", 6, 6, 7, 10, 6, 11, 7, "DLC/Myth"),
    new Queen("Ophelia Starr", 5, 5, 6, 9, 5, 12, 9, "DLC/OpheliaStarr"),
    new Queen("Paolo Amuro", 6, 6, 10, 7, 6, 9, 11, "DLC/PaoloAmuro"),
    new Queen("Rita Black", 6, 7, 8, 8, 8, 8, 8, "DLC/RitaBlack"),
    new Queen("Sasha Fierce", 10, 4, 7, 11, 4, 10, 9, "DLC/SashaFierce"),
    new Queen("Scarlett Harlem", 9, 8, 10, 15, 8, 15, 9, "DLC/ScarletHarlem"),
    new Queen("Serpentina", 8, 9, 10, 10, 10, 15, 13, "DLC/Serpentina"),
    new Queen("Shade Couleè", 9, 11, 9, 8, 9, 10, 10, "DLC/ShadeCoulee"),
    new Queen("Sierra Love", 8, 6, 13, 9, 6, 11, 11, "DLC/SierraLove"),
    new Queen("Sparklez", 9, 8, 13, 11, 7, 13, 13, "DLC/Sparklez"),
    new Queen("Spikes La'Rue", 6, 8, 6, 7, 8, 9, 7, "DLC/SpikesLaRue"),
    new Queen("Tokyo Stylez", 9, 7, 10, 10, 9, 10, 12, "DLC/TokyoStylez"),
    new Queen("Tranna Montona", 10, 9, 7, 9, 4, 11, 6, "DLC/TrannaMontana")

];

// =====================================
// DOWNLOADED QUEENS
// =====================================

let downloadedQueens =
JSON.parse(localStorage.getItem("downloadedQueens")) || [];

// =====================================
// ELEMENTS
// =====================================

const queenGrid = document.getElementById("queenGrid");
const queenSearch = document.getElementById("queenSearch");
const queenSort = document.getElementById("queenSort");
// Preview Modal
const previewModal = document.getElementById("previewModal");
const closePreviewBtn = document.getElementById("closePreviewBtn");

const previewImage = document.getElementById("previewImage");
const previewName = document.getElementById("previewName");

const previewActing = document.getElementById("previewActing");
const previewComedy = document.getElementById("previewComedy");
const previewDance = document.getElementById("previewDance");
const previewDesign = document.getElementById("previewDesign");
const previewImprov = document.getElementById("previewImprov");
const previewRunway = document.getElementById("previewRunway");
const previewLipSync = document.getElementById("previewLipSync");

const downloadCount =
document.getElementById("downloadCount");

// =====================================
// RENDER
// =====================================

function renderMarketplace() {

    queenGrid.innerHTML = "";
    downloadCount.textContent =
"Downloaded Queens: " + downloadedQueens.length;

    let queens = [...marketplaceQueens];

    // Search

    let search = queenSearch.value.toLowerCase();

    queens = queens.filter(q =>
        q.getName().toLowerCase().includes(search)
    );

    // Sort

// Sort

switch (queenSort.value) {

    case "default":
        // Keep original order
        break;

    case "az":

        queens.sort(function(a,b){

            return a.getName().localeCompare(b.getName());

        });

        break;

    case "za":

        queens.sort(function(a,b){

            return b.getName().localeCompare(a.getName());

        });

        break;

    case "highest":

        queens.sort(function(a,b){

            let totalA =
                a._actingStat +
                a._comedyStat +
                a._danceStat +
                a._designStat +
                a._improvStat +
                a._runwayStat +
                a._lipsyncStat;

            let totalB =
                b._actingStat +
                b._comedyStat +
                b._danceStat +
                b._designStat +
                b._improvStat +
                b._runwayStat +
                b._lipsyncStat;

            return totalB - totalA;

        });

        break;

    case "lowest":

        queens.sort(function(a,b){

            let totalA =
                a._actingStat +
                a._comedyStat +
                a._danceStat +
                a._designStat +
                a._improvStat +
                a._runwayStat +
                a._lipsyncStat;

            let totalB =
                b._actingStat +
                b._comedyStat +
                b._danceStat +
                b._designStat +
                b._improvStat +
                b._runwayStat +
                b._lipsyncStat;

            return totalA - totalB;

        });

        break;

}

    // Cards

    queens.forEach(queen=>{

        let downloaded =
        downloadedQueens.includes(queen.getName());

        let card=document.createElement("div");

        card.className="queenCard";

        card.innerHTML=`

            <img src="${queen.image}">

            <h3>${queen.getName()}</h3>

            ${
                downloaded ?

                `
                <button class="downloadBtn" disabled>
                    ✓ Downloaded
                </button>

                <button class="removeBtn">
                    Remove
                </button>
                `

                :

                `
                <button class="downloadBtn">
                    Download
                </button>
                `
            }

            <button class="previewBtn">
                Preview Stats
            </button>

        `;

        queenGrid.appendChild(card);

        //--------------------------------
        // Download
        //--------------------------------

        const downloadBtn =
        card.querySelector(".downloadBtn");

if(downloadBtn && !downloadBtn.disabled){

    downloadBtn.onclick=function(){

        // Save downloaded list
        downloadedQueens.push(queen.getName());

        localStorage.setItem(
            "downloadedQueens",
            JSON.stringify(downloadedQueens)
        );

        // Get existing custom queens
        let customQueens = JSON.parse(
            localStorage.getItem("customQueens")
        ) || [];

        // Prevent duplicates
        let exists = customQueens.some(function(q){

            return q._name === queen._name;

        });

        if(!exists){

            queen.customqueen = true;
            queen.custom = true;

            customQueens.push(queen);

            localStorage.setItem(
                "customQueens",
                JSON.stringify(customQueens)
            );

        }

        renderMarketplace();

    };

}

        //--------------------------------
        // Remove
        //--------------------------------

        const removeBtn =
        card.querySelector(".removeBtn");

if(removeBtn){

    removeBtn.onclick=function(){

        // Remove from downloaded list
        downloadedQueens =
        downloadedQueens.filter(
            q => q != queen.getName()
        );

        localStorage.setItem(
            "downloadedQueens",
            JSON.stringify(downloadedQueens)
        );

        // Remove from custom queens
        let customQueens = JSON.parse(
            localStorage.getItem("customQueens")
        ) || [];

        customQueens = customQueens.filter(function(q){

            return q._name !== queen._name;

        });

        localStorage.setItem(
            "customQueens",
            JSON.stringify(customQueens)
        );

        renderMarketplace();

    };

}

        //--------------------------------
        // Preview
        //--------------------------------

        const previewBtn =
        card.querySelector(".previewBtn");

previewBtn.onclick = function () {

    previewImage.src = queen.image;

    previewName.textContent = queen.getName();

    // Numbers
    previewActing.textContent = queen._actingStat;
    previewComedy.textContent = queen._comedyStat;
    previewDance.textContent = queen._danceStat;
    previewDesign.textContent = queen._designStat;
    previewImprov.textContent = queen._improvStat;
    previewRunway.textContent = queen._runwayStat;
    previewLipSync.textContent = queen._lipsyncStat;

    // Bars
    document.getElementById("actingBar").style.width = queen._actingStat * 10 + "%";
    document.getElementById("comedyBar").style.width = queen._comedyStat * 10 + "%";
    document.getElementById("danceBar").style.width = queen._danceStat * 10 + "%";
    document.getElementById("designBar").style.width = queen._designStat * 10 + "%";
    document.getElementById("improvBar").style.width = queen._improvStat * 10 + "%";
    document.getElementById("runwayBar").style.width = queen._runwayStat * 10 + "%";
    document.getElementById("lipsyncBar").style.width = queen._lipsyncStat * 10 + "%";

    previewModal.style.display = "flex";

};

    });

}

// =====================================
// EVENTS
// =====================================

queenSearch.oninput=function(){

    renderMarketplace();

};

queenSort.onchange=function(){

    renderMarketplace();

};

// =====================================
// START
// =====================================

renderMarketplace();

closePreviewBtn.onclick = function () {

    previewModal.style.display = "none";

};

window.addEventListener("click", function (e) {

    if (e.target === previewModal) {

        previewModal.style.display = "none";

    }

});