//*
function getAllCases(arr, length) {
  const cases = [];

  function recursive(currentCase) {
    if (currentCase.length === length) {
      cases.push(currentCase);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      recursive([...currentCase, arr[i]]);
    }
  }

  recursive([]);

  return cases;
}

function solution(users, emoticons) {
  let answer = [];
  let min = 40;
  let discounts = [];

  // 1. users[i][0]의 최솟값 구하기
  users.map((el) => (min = Math.min(min, el[0])));
  // 2. 최솟값 이상이고, 10%, 20%, 30%, 40% 중에 해당하는 할인율 찾기
  for (let i = 0; i < 4; i++) {
    const percents = [10, 20, 30, 40];
    if (min <= percents[i]) {
      discounts = percents.slice(i);
      break;
    }
  }
  // 3. emoticons.length만큼 discounts 사용해서 순열만들기
  const cases = getAllCases(discounts, emoticons.length);

  // 4. [할인률, 할인률이 적용된 최종 이모티콘 가격] 구하기
  const priceList = cases.map((el) => {
    return el.map((discount, price) => [discount, emoticons[price] * (100 - discount) * 0.01]);
  });

  for (let i = 0; i < priceList.length; i++) {
    let join = 0;
    let price = 0;

    for (let j = 0; j < users.length; j++) {
      const [criteria, amount] = users[j];
      let currentPrice = 0;

      for (let k = 0; k < priceList[0].length; k++) {
        // criteria 이상 할인하는 이모티콘 모두 구매
        if (criteria <= priceList[i][k][0]) {
          currentPrice += priceList[i][k][1];
        }
      }

      // amount 이상 되면 이모티콘 구입 취소 후 플러스 가입
      if (currentPrice >= amount) join += 1;
      else price += currentPrice;
    }

    answer.push([join, price]);
  }

  // 서비스 가입 수, 이모티콘 매출액(서비스 가입하지 않은 사람이 구매한 이모티콘의 가격)
  return answer.sort((a, b) => b[0] - a[0] || b[1] - a[1]).shift();
}
