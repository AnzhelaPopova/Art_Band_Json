let json = `{ data : [   "name": "Час для леди",
    "time": "16 февраля  в 18.00",    "age": "21+",
    "price": "500р",   
    "description": "Встреча с Загидат",    "url": "https://drive.google.com/file/d/1WSavf02kT_Ldvz_CoHCty9QYRzYawZbi/view?usp=share_link"
   },{
 "name": "Мастер класс по созданию украшений",    "time": "18 февраля  в 12.00",
    "age": "10+",
    "price": "1200 - 1300р",    
    "description": "Изготовление украшений",    "url": "https://drive.google.com/file/d/1aMw76OKl1rG9hR52nnS0G9ASS_aw1W5v/view?usp=share_link"
},{
 "name": "Мастер класс декупаж/браширование",    "time": "19 февраля  в 15.00",
    "age": "8+",    "price": "1200р",
        "description": "картина в 3х техниках",
    "url": "https://drive.google.com/file/d/1I6hJb4eVXihuwTlHL7Gl-LYzaFNAw_4x/view?usp=share_link"
]}`

// Создаем переменные
let currentSlide = 0; // Начальный слайд
const slides = JSON.parse(json); // Преобразуем JSON в массив объектов

const sliderName = document.querySelector('.slider-name'); 
const sliderTime = document.querySelector('.slider-time'); 
const sliderAge = document.querySelector('.slider-age'); 
const sliderPrice = document.querySelector('.slider-price'); 
const sliderDescription = document.querySelector('.slider-description'); 
const sliderImg = document.querySelector('.slider-img');
function changeSlide() {
  const slide = slides[currentSlide];
  sliderName.textContent = slide.name;
  sliderTime.textContent = slide.time;
  sliderAge.textContent = `Возраст: ${slide.age}`;
  sliderPrice.textContent =`Цена: ${slide.price}`; 
  sliderDescription.textContent = slide.description;
  // sliderImg.src = slide.url
}

// Изменяем данные на первом слайде
changeSlide();

// Обработчик клика на кнопку "Следующий"
document.querySelector('.itc-slider__btn_next').addEventListener('click', () => {
  currentSlide++; // Увеличиваем номер текущего слайда
  if (currentSlide >= slides.length) {
    currentSlide = 0; // Обнуляем для создания эффекта бесконечной прокрутки
  }
  changeSlide(); // Изменяем данные на новом слайде
});

// Обработчик клика на кнопку "Предыдущий"
document.querySelector('.itc-slider__btn_prev').addEventListener('click', () => {
  currentSlide--; // Уменьшаем номер текущего слайда
  if (currentSlide < 0) {
    currentSlide = slides.length - 1; // Обновляем номер для создания эффекта бесконечной прокрутки
  }
  changeSlide(); // Изменяем данные на новом слайде
});


