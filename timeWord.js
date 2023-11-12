let num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty-one",
    "twenty-two",
    "twenty-three",
    "twenty-four",
    "twenty-five",
    "twenty-six",
    "twenty-seven",
    "twenty-eight",
    "twenty-nine",
    "thirty",
    "thirty-one",
    "thirty-two",
    "thirty-three",
    "thirty-four",
    "thirty-five",
    "thirty-six",
    "thirty-seven",
    "thirty-eight",
    "thirty-nine",
    "forty",
    "forty-one",
    "forty-two",
    "forty-three",
    "forty-four",
    "forty-five",
    "forty-six",
    "forty-seven",
    "forty-eight",
    "forty-nine",
    "fifty",
    "fifty-one",
    "fifty-two",
    "fifty-three",
    "fifty-four",
    "fifty-five",
    "fifty-six",
    "fifty-seven",
    "fifty-eight",
    "fifty-nine",
  ];
  
  function timeWord(time) {
    let h = parseInt(time.split(":")[0]);
    let m = parseInt(time.split(":")[1]);
    let h1 = time.split(":")[0];
    let m1 = time.split(":")[1];
    let pm_am = h >= 12 ? "pm" : "am";
  
    if (h1 === "00" && m1 === "00") {
      return "midnight";
    }
    if (h1 === "12" && m1 === "00") {
      return "noon";
    }
    if (h1 === "00") {
      return `twelve ${num[m]} ${pm_am}`;
    }
    if (m1 === "00") {
      return `${num[h]} o'clock ${pm_am}`;
    }
    if (m1 === "01") {
      return `${num[h]} oh one ${pm_am}`;
    }
    if (m1 === "09") {
      return `${num[h]} oh nine ${pm_am}`;
    }
  
    return `${num[h]} ${num[m]} ${pm_am}`;
  }
  
  module.exports = timeWord;