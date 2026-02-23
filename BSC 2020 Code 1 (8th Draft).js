campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 15,
        "fields": {
            "year": 2020,
            "summary": "</p><p>Two years after Jon Tester trumped ‘Maryland Matt’, and yet <i>another</i> out-of-stater is up on the ballot against a Real Montanan™. Disappearing Daines thought he could coast to victory again, but Steve Bullock entered the race on the last day to file. Farmers cheer, Democrats pray, and Chuck Schumer salivates at the thought of another chink in the GOP’s senate control.</p><p>Can Bullock deliver a miracle this November, or is Montana doomed to the same beet-red fate as all its neighbors?</p>",
            "image_url": "https://i.postimg.cc/qRvktvhw/2020mt-dainesvsbullock.webp",
            "winning_electoral_vote_number": 1,
            "advisor_url": "https://i.postimg.cc/TwScxWVT/MTDP-Advisors.webp",
            "recommended_reading": "<h4 style=\"margin-top: 0.5em;\">Books and Links TBD</h4>",
            "has_visits": 1,
            "no_electoral_majority_image": "https://i.postimg.cc/Qd4mmPF8/Too-Close-To-Call.webp",
            "creator": "BIG SKY COUNTRY Team",
            "display_year": "2020BSC"
        }
    }
];

campaignTrail_temp.temp_election_list = [
    {
        "id": 15,
        "year": 2020,
        "is_premium": 0,
        "display_year": "2020BSC"
    }
];

campaignTrail_temp.credits = "BIG SKY COUNTRY Team";

campaignTrail_temp.global_parameter_json = [
    {
        "model": "campaign_trail.global_parameter",
        "pk": 1,
        "fields": {
            "vote_variable": 1.125,
            "max_swing": 0.12,
            "start_point": 0.94,
            "candidate_issue_weight": 10,
            "running_mate_issue_weight": 1,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": 35,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
];

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 152,
        "fields": {
            "first_name": "Steve",
            "last_name": "Daines",
            "election": 15,
            "party": "Republican",
            "state": "Gallatin County",
            "priority": 1,
            "description": "</p><p>None can better represent this state’s change than Steve Daines. Born in California and raised in Montana, Daines became a self-made millionaire working in the booming tech sector of Bozeman and Missoula. He made fast friends with principled conservatives like Greg Gianforte, getting things done in Congress while other politicians soapboxed about ‘Real Montanans’. Daines flipped Baucus’ Senate seat in 2014, the first Republican to win it in over a century, and got right to work passing bipartisan bills for farmers, students, and prairie folk across the state.</p><p>The fake news may say Daines never had to fight for his Senate seat before, or that he’s quick to hide from the cameras when on the campaign trail. But they don’t know Montana like he does. Montanans want a senator who gets results, and only Daines can deliver.</p>",
            "color_hex": "#8e2f2e",
            "secondary_color_hex": "#d1abab",
            "is_active": 1,
            "image_url": "https://i.postimg.cc/SsFv5TqS/sdaines.webp",
            "electoral_victory_message": "<h3>You won the Daines side!</h3><p>WIP endings</p>",
            "electoral_loss_message": "<h3>You lost the Daines side!</h3><p>WIP endings</p>",
            "no_electoral_majority_message": "<h3>Deadlock!</h3><p>WIP endings</p>",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 153,
        "fields": {
            "first_name": "Steve",
            "last_name": "Bullock",
            "election": 15,
            "party": "Democrat",
            "state": "Lewis and Clark County",
            "priority": 2,
            "description": "</p><p>A popular and well-liked Governor, a presidential candidate, and a born-and-raised Montanan, this race should be easy for the charming and eager Steve Bullock. But all signs point to it not being so. Bullock has jumped into the race as the late last hope for Democrats to win back Max Baucus's seat, apparently at the urging of President Obama himself, after Bullock spent the last few months denying, denying, and denying some more his intentions to get into the race. As soon as Bullock jumped in, there was a surge of excitement and the glare of national attention on the race, but the polls, regardless, do not look so sunny for the sitting Governor.</p><p>Can he make Democrats proud across the nation and flip the seat, harnessing his reputation and high name ID across the state? Or will he succumb to the power of President Trump and Montana's GOP, which has long wanted his head?</p>\n",
            "color_hex": "#2f6faf",
            "secondary_color_hex": "#abc5df",
            "is_active": 1,
            "image_url": "https://i.postimg.cc/nrtf4VM9/bullock.webp",
            "electoral_victory_message": "<h3>You won the Bullock side!</h3><p>WIP endings</p>",
            "no_electoral_majority_message": "<h3>Deadlock!</h3><p>WIP endings</p>",
            "description_as_running_mate": "'",
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 156,
        "fields": {
            "first_name": "Montana",
            "last_name": "Republican Party",
            "election": 15,
            "party": "Republican",
            "state": "Statewide",
            "priority": 5,
            "description": "'",
            "color_hex": "#8e2f2e",
            "secondary_color_hex": "#d1abab",
            "is_active": 0,
            "image_url": "https://i.postimg.cc/Nfk2r5Lb/mtgop.webp",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "</p><p>It’s an act as old as time, but somehow voters keep buying it.</p><p>Tester with his beer-belly farmer cosplay and two-fingered hand, traipsing back from DC once every six years to play the ‘independent voice for Montana’. But when the chips are down, he votes with Schumer and Pelosi every time. Now he’s got a new patsy, the brokeback-mountain governor looking for a consolation prize after losing to Biden. Steve Bollocks will run the same tired playbook from 2012 and 2018, calling you an out-of-stater looking to outsource jobs to China. He’ll talk about tractors and soybeans, shouting populist drivel from the mountaintops before running back to DC for his marching orders.</p><p>You can’t let that happen. It’s a new Montana under Trump, and it’s time the ‘Real Montanans’ got with the program.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 159,
        "fields": {
            "first_name": "Montana",
            "last_name": "Democratic Party",
            "election": 15,
            "party": "Democrat",
            "state": "Statewide",
            "priority": 8,
            "description": "'",
            "color_hex": "#2f6faf",
            "secondary_color_hex": "#abc5df",
            "is_active": 0,
            "image_url": "https://i.postimg.cc/xCQSHTX6/mtdem.webp",
            "electoral_victory_message": "'",
            "electoral_loss_message": "'",
            "no_electoral_majority_message": "'",
            "description_as_running_mate": "</p><p>This isn’t a fair fight.</p><p>If it was, our chances at a mandate wouldn’t depend on winning elections in states like Alabama and West Virginia. Remember two years ago? The biggest blue wave since ‘06, and the NRSC still bungled their way into a ‘win’. Now we’re down three Senate seats, and we need them back come November. You were there for the Obama years; you know what they’ll do if we let them have even a one-seat majority. America is in crisis right now, and we can’t afford to have gridlock and obstruction on day one of the Biden administration.</p><p>I know it’s a lot to ask, Governor, but we need to expand the map.</p>",
            "candidate_score": 0,
            "running_mate": true
        }
    }
];

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 98,
        "fields": {
            "candidate": 152,
            "running_mate": 156
        }
    },
    {
        "model": "campaign_trail.running_mate",
        "pk": 101,
        "fields": {
            "candidate": 153,
            "running_mate": 159
        }
    }
];

campaignTrail_temp.opponents_default_json = [
    {
        "election": 15,
        "candidates": [
            152,
            153
        ]
    }
];

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 15,
        "candidates": [
            152,
            153
        ]
    }
];

jet_data = {
    "headerColor": "#5a9be0",
    "windowColor": "#4E6330",
    "containerColor": "#d0b062",
    "innerWindowColor": "#4e6330",
    "bannerImageUrl": "https://i.postimg.cc/mgpBFs4h/banner-montana2020.webp",
    "backgroundImageUrl": "https://i.postimg.cc/WbHsdVTM/background-mt2020.webp",
    "gameTitle": "BIG SKY COUNTRY",
    "customQuote": "",
    "endingTextColor": "#000000"
};

//#startcode
function applyTheme(theme) {
    const gameHeader = document.querySelector(".game_header");
    if (gameHeader && theme.coloring_title) {
        gameHeader.style.backgroundColor = theme.coloring_title;
    }

    const gameWindow = document.getElementById("game_window");
    if (gameWindow && theme.coloring_window) {
        gameWindow.style.backgroundColor = theme.coloring_window;
    }

    const container = document.querySelector(".container");
    if (container && theme.coloring_container) {
        container.style.backgroundColor = theme.coloring_container;
    }

    const headerImg = document.getElementById("header");
    if (headerImg && theme.header_image) {
        headerImg.src = theme.header_image;
    }

    if (theme.body_background) {
        document.body.style.backgroundImage = `url("${theme.body_background}")`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
    }

    const style = document.createElement("style");
    style.textContent = `
      #results_container { color: #000000; }
      .inner_window_w_desc { background-color: #4e6330 !important; }
    `;
    document.head.appendChild(style);
}

corrr = '\n              <h2>BIG SKY COUNTRY</h2>\n            ';

const theme = nct_stuff.themes[nct_stuff.selectedTheme];

// define / override theme values
theme.coloring_title     = "#5a9be0";
theme.coloring_window    = "#4E6330";
theme.coloring_container = "#d0b062";
theme.header_image = "https://i.postimg.cc/mgpBFs4h/banner-montana2020.webp";
theme.body_background = "https://i.postimg.cc/WbHsdVTM/background-mt2020.webp";

applyTheme(theme);

// ======================================================
// MUSIC PLAYER (borrowed-mod style, but made "run once")
// Paste this near the bottom of Code1, AFTER applyTheme(theme);
// ======================================================

if (!campaignTrail_temp.musicPlayerLoaded) {
  campaignTrail_temp.musicPlayerLoaded = true;

  // ---------- Helpers ----------
  function waitForEl(id, cb) {
    const el = document.getElementById(id);
    if (el) return cb(el);
    const t = setInterval(() => {
      const el2 = document.getElementById(id);
      if (el2) {
        clearInterval(t);
        cb(el2);
      }
    }, 10);
  }

  // ---------- Classes ----------
  class Song {
    constructor(title, artist, coverLink, audioLink) {
      this.title = title;
      this.artist = artist;
      this.coverLink = coverLink;
      this.audioLink = audioLink;
    }
    getTitle() { return this.title; }
    getArtist() { return this.artist; }
    getCoverLink() { return this.coverLink; }
    getAudioLink() { return this.audioLink; }
  }

  class Playlist {
    constructor() {
      this.songs = [];
      this.currentSongIndex = 0;
    }
    addSong(song) { this.songs.push(song); }
    getCurrentSong() { return this.songs[this.currentSongIndex]; }
    playNext() { this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length; }
    playPrevious() { this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length; }
  }

  // expose if you want to use them elsewhere
  window.Playlist = Playlist;
  window.Song = Song;

  // ---------- Player state ----------
  let playlist;
  let dainesSoundtrack;
  let bullockSoundtrack;

  function updateUI(pl) {
    const currentSong = pl.getCurrentSong();
    const player = document.getElementById("player");
    if (!player) return;

    const cover = player.querySelector("#cover");
    const title = player.querySelector("#title");
    const artist = player.querySelector("#artist");

    if (cover) cover.src = currentSong.getCoverLink();
    if (title) title.textContent = currentSong.getTitle();
    if (artist) artist.textContent = currentSong.getArtist();
  }

  function changePlaylist(newPlaylist) {
    playlist = newPlaylist;
    playlist.currentSongIndex = 0;
    updateUI(playlist);

    const audio = document.getElementById("audio");
    if (!audio) return;

    audio.src = playlist.getCurrentSong().getAudioLink();
    audio.play().catch(() => {});
  }
  window.changePlaylist = changePlaylist;
  window.updateUI = updateUI;

  function setupMusicPlayer(gameWindowEl) {
    // prevent duplicates if the page re-renders
    if (document.getElementById("player")) return;

    // ---- Playlists ----
    playlist = new Playlist();
    dainesSoundtrack = new Playlist();
    bullockSoundtrack = new Playlist();

    // Default playlist (replace songs if you want)
    playlist.addSong(new Song(
      "Big Sky Country",
      "Chris Whitley",
      "https://files.catbox.moe/c6eoy5.jpg",
      "https://audio.jukehost.co.uk/Q6PYTEY7U21pSoRXg1l68lIBIN6O3RDp"
    ));
    playlist.addSong(new Song(
      "Six Feet Apart",
      "Luke Combs",
      "https://files.catbox.moe/63110s.webp",
      "https://audio.jukehost.co.uk/doHIFbcbiUHAny2Lj616MAFUk2o6apL6"
    ));
    playlist.addSong(new Song(
      "The Missoula Song",
      "Jewel",
      "https://files.catbox.moe/0wx0bj.jpg",
      "https://audio.jukehost.co.uk/i4XLAYjWAovr8oWljtmvB8GKQz2HHWYh"
    ));
     playlist.addSong(new Song(
      "Telephotogenetic",
      "Oblio Joes",
      "https://files.catbox.moe/4h47t8.jpg",
      "https://audio.jukehost.co.uk/ccsbtHgYK71vZgiWyvDQLlcHj0gw3NDK"
    ));
    playlist.addSong(new Song(
      "Paint it Blue",
      "Charley Crockett",
      "https://files.catbox.moe/ln1dkb.webp",
      "https://audio.jukehost.co.uk/GoJcYdPN9CQA0t5DNiPcvFAovekmeaIa"
    ));
    playlist.addSong(new Song(
      "Let's Pretend",
      "No-fi Soul Rebellion",
      "https://files.catbox.moe/yeatdq.jpg",
      "https://audio.jukehost.co.uk/dguYurB4XvEiQxbLnPGCMDkJ4asqgA29"
    ));

    // Optional “Daines” playlist (placeholder examples—swap these)
    dainesSoundtrack.addSong(new Song(
      "Telephotogenetic",
      "Oblio Joes",
      "https://files.catbox.moe/4h47t8.jpg",
      "https://audio.jukehost.co.uk/ccsbtHgYK71vZgiWyvDQLlcHj0gw3NDK"
    ));

    // Optional “Bullock” playlist (placeholder examples—swap these)
    bullockSoundtrack.addSong(new Song(
      "The Middle",
      "Jimmy Eat World",
      "https://resources.tidal.com/images/8434cc6f/7ce9/4558/bea8/af00b34dce36/320x320.jpg",
      "https://audio.jukehost.co.uk/VLIEj9gbu4y1WBgJjMKkdlckXQzAQsb8"
    ));

    // Expose for later switching if you want
    window.dainesSoundtrack = dainesSoundtrack;
    window.bullockSoundtrack = bullockSoundtrack;

    // ---- DOM ----
    const playerContainer = document.createElement("div");
    playerContainer.id = "player";

    const displayBox = document.createElement("div");
    displayBox.id = "display-box";

    const coverElement = document.createElement("img");
    coverElement.id = "cover";
    displayBox.appendChild(coverElement);

    const infoContainer = document.createElement("div");
    infoContainer.id = "info-container";
    infoContainer.style.backgroundImage = "url('https://i.ibb.co/M73CBjW/overlay.png')";
    infoContainer.style.backgroundSize = "cover";
    infoContainer.style.color = "white";

    const songInfo = document.createElement("div");
    songInfo.id = "song-info";

    const titleElement = document.createElement("h3");
    titleElement.id = "title";
    titleElement.style.fontWeight = "normal";
    songInfo.appendChild(titleElement);

    const artistElement = document.createElement("p");
    artistElement.id = "artist";
    songInfo.appendChild(artistElement);

    infoContainer.appendChild(songInfo);
    displayBox.appendChild(infoContainer);
    playerContainer.appendChild(displayBox);

    const controlsContainer = document.createElement("div");
    controlsContainer.id = "controls-container";

    const controls = document.createElement("div");
    controls.id = "controls";

    const prevButton = document.createElement("img");
    prevButton.id = "prevButton";
    prevButton.src = "https://i.ibb.co/gMyNq5T/back.png";
    prevButton.alt = "Previous";
    controls.appendChild(prevButton);

    const playPauseButton = document.createElement("img");
    playPauseButton.id = "playPauseButton";
    playPauseButton.src = "https://i.ibb.co/5TwzzWN/pause.png";
    playPauseButton.alt = "Play/Pause";
    controls.appendChild(playPauseButton);

    const nextButton = document.createElement("img");
    nextButton.id = "nextButton";
    nextButton.src = "https://i.ibb.co/5Rx0cYt/forward.png";
    nextButton.alt = "Next";
    controls.appendChild(nextButton);

    controlsContainer.appendChild(controls);

    const progressBarContainer = document.createElement("div");
    progressBarContainer.id = "progress-bar-container";

    const progressBar = document.createElement("progress");
    progressBar.type = "range";
    progressBar.id = "progress-bar";
    progressBar.value = "0";
    progressBar.max = "100";

    progressBarContainer.appendChild(progressBar);
    controlsContainer.appendChild(progressBarContainer);

    // Volume
    const volumeContainer = document.createElement("div");
    volumeContainer.id = "volume-container";

    const volumeLabel = document.createElement("img");
    volumeLabel.src = "https://i.ibb.co/9Gkg5Qp/volume.png";
    volumeLabel.alt = "Volume";
    volumeContainer.appendChild(volumeLabel);

    const volumeSliderContainer = document.createElement("div");
    volumeSliderContainer.classList.add("is-vertical");
    volumeSliderContainer.style.marginLeft = "23%";
    volumeSliderContainer.style.height = "126px";

    const volumeSlider = document.createElement("input");
    volumeSlider.type = "range";
    volumeSlider.id = "volumeSlider";
    volumeSlider.min = 0;
    volumeSlider.max = 9;
    volumeSlider.step = 1;
    volumeSlider.value = 1;

    volumeSliderContainer.appendChild(volumeSlider);

    const volumeDisplay = document.createElement("span");
    volumeDisplay.id = "volume-display";
    volumeDisplay.style.fontWeight = "bold";
    volumeDisplay.style.display = "none";
    volumeDisplay.textContent = "1";

    volumeContainer.appendChild(volumeSliderContainer);
    volumeContainer.appendChild(volumeDisplay);

    controlsContainer.appendChild(volumeContainer);
    playerContainer.appendChild(controlsContainer);

    // Insert into page (after game_window)
    gameWindowEl.insertAdjacentElement("afterend", playerContainer);

    // ---- Audio ----
    const audio = document.createElement("audio");
    audio.id = "audio";
    audio.src = playlist.getCurrentSong().getAudioLink();
    audio.volume = 1 / 9;

    function updateProgressBar() {
      if (!audio.duration) return;
      const progress = (audio.currentTime / audio.duration) * 100;
      try { progressBar.value = progress; } catch (_) {}
    }

    audio.addEventListener("timeupdate", updateProgressBar);
    audio.addEventListener("ended", function () {
      playlist.playNext();
      updateUI(playlist);
      audio.src = playlist.getCurrentSong().getAudioLink();
      audio.play().catch(() => {});
    });

    progressBar.addEventListener("input", function () {
      if (!audio.duration) return;
      const seekTime = (progressBar.value / 100) * audio.duration;
      audio.currentTime = seekTime;
    });

    // ---- Button handlers ----
    playPauseButton.addEventListener("click", function () {
      if (audio.paused) {
        audio.play().catch(() => {});
        playPauseButton.src = "https://i.ibb.co/5TwzzWN/pause.png";
      } else {
        audio.pause();
        playPauseButton.src = "https://i.ibb.co/G5TsX12/play.png";
      }
    });

    nextButton.addEventListener("click", function () {
      playlist.playNext();
      updateUI(playlist);
      audio.src = playlist.getCurrentSong().getAudioLink();
      audio.play().catch(() => {});
    });

    prevButton.addEventListener("click", function () {
      playlist.playPrevious();
      updateUI(playlist);
      audio.src = playlist.getCurrentSong().getAudioLink();
      audio.play().catch(() => {});
    });

    let currentVolume = 1;
    function updateAudioVolume() {
      audio.volume = currentVolume / 9;
    }

    volumeSlider.addEventListener("input", function () {
      currentVolume = parseInt(volumeSlider.value, 10);
      volumeDisplay.textContent = String(currentVolume);
      updateAudioVolume();
    });

    document.body.appendChild(audio);

    // ---- Styles ----
    const style = document.createElement("style");
    style.textContent = `
      #player {
        border: 3px solid #C9C9C9;
        display: flex;
        flex-direction: row;
        height: 191px;
        background-image: url("https://i.ibb.co/dKL29kY/background.png");
      }
      #display-box {
        display: flex;
        align-items: center;
        width: 50%;
      }
      #cover {
        width: 176px;
        height: 176px;
      }
      #info-container {
        display: flex;
        flex-direction: row;
        height: 178px;
        width: 127px;
        margin-top: 3px;
      }
      #song-info {
        width: 100%;
        padding: 5px;
      }
      #controls-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        width: 100%;
        padding-top: 15px;
      }
      .is-vertical #volumeSlider {
        width: 125px;
      }
      #controls {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 80%;
      }
      #progress-bar-container { width: 100%; }
      #progress-bar {
        width: 80%;
        margin: auto;
        display: flex;
        margin-top: 20px;
      }
    `;
    document.head.appendChild(style);

    // ---- Start playback + UI ----
    updateUI(playlist);
    audio.play().catch(() => {});
  }

  // Start once the game window exists
  waitForEl("game_window", setupMusicPlayer);
}

//#endcode
