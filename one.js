const frames = window.frames;
const zip1 = frames[1].frames[1].document.getElementById('shinsei_prefectures_zipcode1').value;
const zip2 = frames[1].frames[1].document.getElementById('shinsei_prefectures_zipcode2').value;

const address1 = frames[1].frames[1].document.getElementById('shinsei_prefectures_address1').value;
const address2 = frames[1].frames[1].document.getElementById('shinsei_prefectures_address2').value;
const address3 = frames[1].frames[1].document.getElementById('shinsei_prefectures_address3').value;

console.log(zip1 + "-" + zip2);
console.log(address1 + address2 + address3);
