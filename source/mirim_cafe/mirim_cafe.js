let totalAmount = 0;
let totalPrice = 0;

const menuList = [
    { name: "아메리카노", price: 3000, category: "coffee" },
    { name: "카페라떼", price: 4000, category: "coffee" },
    { name: "바닐라라떼", price: 4500, category: "coffee" },
    { name: "초코라떼", price: 4200, category: "nonCoffee" },
    { name: "레몬에이드", price: 5000, category: "ade" },
    { name: "자몽에이드", price: 5200, category: "ade" },
];

// 메뉴 선택 목록 옵션
const loadMenu = () => {
    let menuOptions = [];
    for (let menu of menuList) {
        menuOptions.push(
            `<option value="${menu.name}">${menu.name} : ${menu.price}원</option>`,
        );
    }
    let menuOptionTags = menuOptions.join("");
    console.log("메뉴 옵션 : ", menuOptionTags);
    document.getElementById("menuList").innerHTML = menuOptionTags;
};

// 주문 내역 추가
const orderList = [];
let orderNumber = 1;
const addOrder = () => {
    let selectMenu = document.getElementById("menuList");
    let menu = selectMenu.value;
    let amount = document.getElementById("amountInput").value;
    let price = menuList.find((item) => item.name === menu).price;
    console.log(price);

    if (amount === "" || amount < 1) {
        console.log("잘못된 수량 입력입니다");
        alert("잘못된 수량 입력입니다");
    } else {
        totalAmount += parseInt(amount);
        console.log(totalAmount);

        totalPrice += price * amount;

        orderList.push(
            `<tr>
                <td>${orderNumber}</td>
                <td>${menu}</td>
                <td>${price}</td>
                <td>${amount}</td>
                <td>${price * amount}</td>
            </tr>`,
        );
        orderNumber++;
        let orderTags = orderList.join("");
        console.log("주문 내역 :", orderTags);
        document.getElementById("orderList").innerHTML = orderTags;
        document.getElementById("amountInput").value = "";
        PaymentInfo();
    }
};

// 메뉴 검색
const doSearch = () => {
    let keyword = document.getElementById("menuToFind").value;
    let result = [];

    console.log(keyword);

    const isThere = menuList.find((item) => item.name.indexOf(keyword) != -1);
    console.log(isThere);

    if (isThere) {
        for (let item of menuList) {
            if (item.name.indexOf(keyword) != -1) {
                result.push(`<p>${item.name}</p>`);
            }
        }
        let resultTag = result.join("");
        console.log("검색 결과 :", resultTag);
        document.getElementById("searchResult").innerHTML = resultTag;
    } else {
        console.log("검색 결과 X");
        const nonTag = `<p>검색 결과가 없습니다.</p>`;
        document.getElementById("searchResult").innerHTML = nonTag;
    }
};

// 결제 정보
const PaymentInfo = () => {
    document.getElementById("totalAmount").innerHTML = totalAmount + "개";
    document.getElementById("totalPrice").innerHTML = totalPrice + "원";
};
