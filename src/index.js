module.exports = function toReadable(number) {
  const oneDigits = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const twoDigits = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tensDigits = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let temp = number;
  let count = 0;
  let result = '';

  if (temp === 0) {
    return 'zero';
  }

  if (temp > 0 && temp < 10) {
    return `${oneDigits[temp]}`;
  }

  if (temp >= 10 && temp < 20) {
    return `${twoDigits[temp - 10]}`;
  }

  if (temp >= 20 && temp < 100) {
    count = Math.floor(temp / 10);
    temp -= count * 10;
    result = `${tensDigits[count]}`;
    if (temp > 0) {
      result += ` ${oneDigits[temp]}`;
    }
    return result;
  }

  if (temp >= 100) {
    count = Math.floor(temp / 100);
    temp -= count * 100;
    result = `${oneDigits[count]} hundred`;
    if (temp >= 20) {
      count = Math.floor(temp / 10);
      temp -= count * 10;
      result += ` ${tensDigits[count]}`;
      if (temp > 0) {
        result += ` ${oneDigits[temp]}`;
      }
    } else if (temp >= 10) {
      count = Math.floor(temp / 10);
      temp -= count * 10;
      result += ` ${twoDigits[temp]}`;
    } else if (temp > 0) {
      result += ` ${oneDigits[temp]}`;
    }
  }

  return result;
};
