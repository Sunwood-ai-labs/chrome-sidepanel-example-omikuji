const fortunes = [
    {
        rank: "大吉",
        text: "これ以上ない最高の運勢です。何事も思うがままに進むでしょう。感謝の気持ちを忘れずに。",
        wish: "すべて叶います",
        person: "近いうちに来ます",
        lost: "必ず見つかります"
    },
    {
        rank: "吉",
        text: "安定した良い運勢です。焦らず一歩ずつ進むことで、大きな成果が得られるでしょう。",
        wish: "少しずつ叶います",
        person: "便りがあります",
        lost: "高いところから出ます"
    },
    {
        rank: "中吉",
        text: "活気にあふれた運勢です。新しいことに挑戦するのに最適な時期です。",
        wish: "望み通りになります",
        person: "遅れて現れます",
        lost: "意外な場所から出ます"
    },
    {
        rank: "小吉",
        text: "ささやかな幸せが訪れる運勢です。日常の小さな喜びに目を向けましょう。",
        wish: "急がなければ叶います",
        person: "来ますが遅いです",
        lost: "身近なところにあります"
    },
    {
        rank: "末吉",
        text: "これからの発展が期待できる運勢です。地道な努力が将来の成功に繋がります。",
        wish: "辛抱強く待てば叶います",
        person: "期待しすぎず待ちましょう",
        lost: "時が経てば出ます"
    },
    {
        rank: "凶",
        text: "少し注意が必要な運勢です。今は無理をせず、自分を見つめ直す時間として過ごしましょう。",
        wish: "今は難しいでしょう",
        person: "来ないかもしれません",
        lost: "見つけにくいです"
    }
];

const drawBtn = document.getElementById('draw-btn');
const resetBtn = document.getElementById('reset-btn');
const omikujiBox = document.getElementById('omikuji-box');
const resultContainer = document.getElementById('result-container');
const fortuneRank = document.getElementById('fortune-rank');
const fortuneText = document.getElementById('fortune-text');
const wishText = document.getElementById('wish-text');
const personText = document.getElementById('person-text');
const lostText = document.getElementById('lost-text');

drawBtn.addEventListener('click', () => {
    startOmikuji();
});

resetBtn.addEventListener('click', () => {
    resetOmikuji();
});

function startOmikuji() {
    drawBtn.disabled = true;
    omikujiBox.classList.add('shaking');
    
    // Simulate shaking time
    setTimeout(() => {
        showResult();
    }, 1500);
}

function showResult() {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    fortuneRank.textContent = randomFortune.rank;
    fortuneText.textContent = randomFortune.text;
    wishText.textContent = randomFortune.wish;
    personText.textContent = randomFortune.person;
    lostText.textContent = randomFortune.lost;

    omikujiBox.classList.remove('shaking');
    omikujiBox.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    drawBtn.classList.add('hidden');
    resetBtn.classList.remove('hidden');
}

function resetOmikuji() {
    resultContainer.classList.add('hidden');
    omikujiBox.classList.remove('hidden');
    
    drawBtn.classList.remove('hidden');
    drawBtn.disabled = false;
    resetBtn.classList.add('hidden');
}
