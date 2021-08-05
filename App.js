console.log("stock analyzer");
const purcashePrice = document.getElementById("purchase_price");
const stockQuantity = document.getElementById("quantity");
const currentPrice = document.getElementById("current_price");
const check = document.getElementById("btn");
let purchase_price = 0;
let stock_quanitiy = 0;
let current_price = 0;

const AnalyseStock = (purchase_price, stock_quanitiy, current_price) => {
  //   console.log(purchase_price, stock_quanitiy, current_price);

  const TotalAmountSpent = purchase_price * stock_quanitiy;

  const CurrentMarketValue = current_price * stock_quanitiy;

  if (TotalAmountSpent > CurrentMarketValue) {
    const Loss = TotalAmountSpent - CurrentMarketValue;
    const LossInPercent = (Loss / TotalAmountSpent) * 100;
    console.log(Loss, LossInPercent);
  } else {
    const Profit = CurrentMarketValue - TotalAmountSpent;
    const ProfitInPercent = (Profit / TotalAmountSpent) * 100;
    console.log(Profit, ProfitInPercent);
  }
};

check.addEventListener("click", () => {
  if (purchase_price >= 0 && stock_quanitiy >= 0 && current_price >= 0) {
    AnalyseStock(purchase_price, stock_quanitiy, current_price);
  } else {
    alert("Numbers cant not be -ve");
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
