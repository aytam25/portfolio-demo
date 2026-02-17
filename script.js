// قائمة الصور داخل مجلد images
const images = [
  "images/work1.jpg",
  "images/work2.jpg",
  "images/work3.jpg",
  "images/work4.jpg",
  "images/work5.jpg" // يمكنك إضافة المزيد هنا
];

const slider = document.getElementById("slider");

// إنشاء عناصر الصور داخل السلايدر
images.forEach((src, index) => {
  const img = document.createElement("img");
  img.src = src;
  if (index === 0) img.classList.add("active");
  slider.appendChild(img);
});

let current = 0;
const slides = slider.getElementsByTagName("img");

// تغيير الصور تلقائيًا كل 4 ثواني
setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 4000);