const productName = document.getElementById('productName');
const productImg = document.getElementById('productImg');
const bookOne = document.getElementById('bookOne');
const bookTwo = document.getElementById('bookTwo');
const bookThree = document.getElementById('bookThree');
const bookFour = document.getElementById('bookFour');
const bookFive = document.getElementById('bookFive');
const pat = document.getElementById('pat');
const productPrice = document.getElementById('productPrice');

bookOne.addEventListener('click', () => {
    productName.textContent = 'ขอต้อนรับสู่ห้องเรียนนิยม (เฉพาะ) ยอดคน ปีสอง เล่ม1 (ฉบับนิยาย)';
    productImg.src = 'img/เล่ม1.png';
    productPrice.textContent = '$279.00'
})

bookTwo.addEventListener('click', () => {
    productName.textContent = 'ขอต้อนรับสู่ห้องเรียนนิยม (เฉพาะ) ยอดคน ปีสอง เล่ม2 (ฉบับนิยาย)';
    productImg.src = 'img/เล่ม2.png';
    productPrice.textContent = '$279.00'
})

bookThree.addEventListener('click', () => {
    productName.textContent = 'ขอต้อนรับสู่ห้องเรียนนิยม (เฉพาะ) ยอดคน ปีสอง เล่ม3 (ฉบับนิยาย)';
    productImg.src = 'img/เล่ม3.png';
    productPrice.textContent = '$279.00'
})

bookFour.addEventListener('click', () => {
    productName.textContent = 'ขอต้อนรับสู่ห้องเรียนนิยม (เฉพาะ) ยอดคน ปีสอง เล่ม4 (ฉบับนิยาย)';
    productImg.src = 'img/เล่ม4.png';
    productPrice.textContent = '$279.00'
})

bookFive.addEventListener('click', () => {
    productName.textContent = 'ขอต้อนรับสู่ห้องเรียนนิยม (เฉพาะ) ยอดคน ปีสอง เล่ม4.5 (ฉบับนิยาย)';
    productImg.src = 'img/เล่ม4.5.png';
    productPrice.textContent = '$269.00'
})