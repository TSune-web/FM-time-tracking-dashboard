const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const cards = document.querySelectorAll(".card");

const data = require("./data.json");

interface Data {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

data.map((d: Data, index: number): void => {
  fetchAndRenderData(d, index);

  getDailyResult(d, index);
  getWeeklyResult(d, index);
  getMonthlyResult(d, index);
});

function getTitleClass(d: Data) {
  if (!d.title) return;
  return d.title.replace(/\s+/g, "").trim().toLowerCase();
}

function getDailyResult(d: Data, index: number): void {
  daily?.addEventListener("click", function () {
    daily?.classList.add("selected");
    weekly?.classList.remove("selected");
    monthly?.classList.remove("selected");
    
    const title = getTitleClass(d);

    cards[index].innerHTML = `
    <section class="content-wrapper ${title}">
        <div class="content">
            <div class="content__header">
                <h3>${d.title}</h3>
                <div class="ellipsis-wrapper"></div>
            </div>
            <div class="content__body">
                <span class="current">${d.timeframes.daily.current}hrs</span>
                <span class="previous">Last Week - ${d.timeframes.daily.previous}hrs</span>
            </div>
        </div>
    </section>
    `;
  });
}

function getWeeklyResult(d: Data, index: number): void {
  weekly?.addEventListener("click", function () {
    daily?.classList.remove("selected");
    weekly?.classList.add("selected");
    monthly?.classList.remove("selected");

    const title = getTitleClass(d);

    cards[index].innerHTML = `
    <section class="content-wrapper ${title}">
        <div class="content">
            <div class="content__header">
                <h3>${d.title}</h3>
                <div class="ellipsis-wrapper"></div>
            </div>
            <div class="content__body">
                <span class="current">${d.timeframes.weekly.current}hrs</span>
                <span class="previous">Last Week - ${d.timeframes.weekly.previous}hrs</span>
            </div>
        </div>
    </section>
    `;
  });
}

function getMonthlyResult(d: Data, index: number): void {
  monthly?.addEventListener("click", function () {
    daily?.classList.remove("selected");
    weekly?.classList.remove("selected");
    monthly?.classList.add("selected");

    const title = getTitleClass(d);

    cards[index].innerHTML = `
    <section class="content-wrapper ${title}">
        <div class="content">
            <div class="content__header">
                <h3>${d.title}</h3>
                <div class="ellipsis-wrapper"></div>
            </div>
            <div class="content__body">
                <span class="current">${d.timeframes.monthly.current}hrs</span>
                <span class="previous">Last Week - ${d.timeframes.monthly.previous}hrs</span>
            </div>
        </div>
    </section>
    `;
  });
}

function fetchAndRenderData(d: Data, index: number): void {
  document.addEventListener("DOMContentLoaded", function () {
    daily?.classList.remove("selected");
    weekly?.classList.add("selected");
    monthly?.classList.remove("selected");

    const title = getTitleClass(d);

    cards[index].innerHTML = `
    <section class="content-wrapper ${title}">
        <div class="content">
            <div class="content__header">
                <h3>${d.title}</h3>
                <div class="ellipsis-wrapper"></div>
            </div>
            <div class="content__body">
                <span class="current">${d.timeframes.weekly.current}hrs</span>
                <span class="previous">Last Week - ${d.timeframes.weekly.previous}hrs</span>
            </div>
        </div>
    </section>
    `;
  });
}
