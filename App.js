const purcashePrice = document.getElementById("purchase_price");
const stockQuantity = document.getElementById("quantity");
const currentPrice = document.getElementById("current_price");
const check = document.getElementById("btn");
const ReslutPage = document.getElementById("displayResult");
const ShowResultInNum = document.getElementById("resultInNum");
const ShowResultInPercent = document.getElementById("resultInPercentage");
const closeBtn = document.getElementById("close");
const resultBox = document.getElementById("resultContianer");
let purchase_price = 0;
let stock_quanitiy = 0;
let current_price = 0;

const AnalyseStock = (purchase_price, stock_quanitiy, current_price) => {
  const TotalAmountSpent = purchase_price * stock_quanitiy;

  const CurrentMarketValue = current_price * stock_quanitiy;

  if (TotalAmountSpent > CurrentMarketValue) {
    const Loss = TotalAmountSpent - CurrentMarketValue;
    const LossInPercent = (Loss / TotalAmountSpent) * 100;

    ReslutPage.style.display = "grid";
    ReslutPage.style.color = "red";
    ReslutPage.style.backgroundImage =
      "url(https://media.giphy.com/media/lSzQjkthGS1gc/giphy.gif)";
    resultBox.style.backgroundImage =
      "url(https://media.giphy.com/media/lSzQjkthGS1gc/giphy.gif)";
    ShowResultInNum.innerHTML = `You lost  ₹ ${Loss} `;
    ShowResultInPercent.innerHTML = ` Your total loss is  ${LossInPercent}%`;
  } else {
    const Profit = CurrentMarketValue - TotalAmountSpent;
    const ProfitInPercent = (Profit / TotalAmountSpent) * 100;
    ReslutPage.style.backgroundImage =
      "url(https://media.giphy.com/media/JtBZm3Getg3dqxK0zP/giphy.gif)";
    ReslutPage.style.display = "grid";
    ReslutPage.style.color = "lime";

    ShowResultInNum.innerHTML = `You gained  ₹ ${Profit}`;
    ShowResultInPercent.innerHTML = ` Your total profit is  ${ProfitInPercent}%`;
  }
};

closeBtn.addEventListener("click", () => {
  ReslutPage.style.display = "none";
});

check.addEventListener("click", () => {
  if (purchase_price > 0 && stock_quanitiy > 0 && current_price > 0) {
    AnalyseStock(purchase_price, stock_quanitiy, current_price);
  } else {
    alert("Invalid Number");
  }
});

purcashePrice.addEventListener("change", (e) => {
  const purchaseCost = e.target.value;
  purchase_price = purchaseCost;
});

stockQuantity.addEventListener("change", (e) => {
  const quantity = e.target.value;
  stock_quanitiy = quantity;
});

currentPrice.addEventListener("change", (e) => {
  const currentPrice = e.target.value;
  current_price = currentPrice;
});
