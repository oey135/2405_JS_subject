/**
 * 두 수의 합을 구하는 함수
 * @param {*} n1 : 첫번째 수
 * @param {*} n2 : 두번째 수
 */
// function sum(n1, n2) {
//   return n1 + n2;
// }
const sum = (n1, n2) => n1 + n2;

/**
 * 부과세를 구하는 함수
 * @param {*} priceOfProduct : 물건 가격
 * @returns : 세금 반환
 */
// function taxAmount(priceOfProduct) {
//   var tax = 0.1; // scope : 함수 안, 전역 ㄴㄴ.....
//   return tax * priceOfProduct;
// }
const taxAmount = (priceOfProduct) => {
  var tax = 0.1; // scope : 함수 안, 전역 ㄴㄴ.....
  return tax * priceOfProduct;
};

/**
 * 오늘을 기준으로 며칠 전, 후를 구하는 함수
 * @param {*} day : 며칠 전이면 음수, 후라면 양수
 * @returns
 */

const intervalDate = (day) => {
  let changeTime = day * 24 * 60 * 60 * 1000;
  let now = new Date();
  let intervalDate = new Date(now.getTime() + changeTime);
  return intervalDate;
};

/**
 * 며칠 전, 후를 일정한 format으로 출력하는 함수
 * @param {*} day
 * @param {*} format
 * @returns
 */
const intervalDateFormat = (day, format = "YYYY-MM-DD") => {
  let intervalDate = new Date(new Date().getTime() + day * 24 * 60 * 60 * 1000);

  let year = intervalDate.getFullYear().toString();
  let month = intervalDate.getMonth().toString().padStart(2, 0);
  let date = intervalDate.getDate().toString().padStart(2, 0);

  return format //연속적인 메소드 사용 : chaining
    .replace(/YYYY/g, year)
    .replace(/YY/g, year.slice(2))
    .replace(/MM/g, month)
    .replace(/DD/g, date);
};
