// TODO: write code here

const button = document.querySelector('button');
const tooltip = document.querySelector('.tooltip');

button.addEventListener('click', () => {
  // Если на в подсказке нет класса анимации и скрытия анимации, то... 
  if (tooltip.classList.contains('tooltip_animation_reverse') || !tooltip.classList.contains('tooltip_animation')) { 

    //Если в подсказке есть класс скрытия анимации, то ...
    if (tooltip.classList.contains('tooltip_animation_reverse')) {
      tooltip.classList.remove('tooltip_animation_reverse');   // то удаляем его 
    }
      
    tooltip.classList.add('tooltip_animation'); // добавляем класс открытия анимации

  } else {
    tooltip.classList.remove('tooltip_animation');   // удаляем класс открытия анимации
    tooltip.classList.add('tooltip_animation_reverse');      // добавляем класс скрытия анимации
  }

})



// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");
