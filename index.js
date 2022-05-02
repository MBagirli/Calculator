let container = document.querySelector('.container');
let screen__h2 = document.querySelector('.container__display__h2');
let screen__span = document.querySelector('.container__display__span');
let iswaitingforsecondvalue = false;
let act;

container.addEventListener('click', function (e) {
  if (e.target.classList.contains('container__tools__btn')) {
    switch (e.target.textContent) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (screen__h2.textContent == '0') {
          screen__h2.textContent = e.target.textContent;
        } else {
          screen__h2.textContent += e.target.textContent;
        }
        if (iswaitingforsecondvalue) {
          Action(act);
        }
        break;
      case '.':
        if (screen__h2.textContent.includes('.')) {
          alert('You have already wrote it!');
        } else {
          screen__h2.textContent += e.target.textContent;
        }
        break;
      case 'x':
        DefiningTheAction('product');
        break;
      case '-':
        DefiningTheAction('substraction');
        break;
      case '+':
        DefiningTheAction('sum');
        break;
      case '/':
        DefiningTheAction('division');
        break;
      case 'AC':
        Zeroing('0');
        break;
      case '=':
        Zeroing(screen__span.textContent);
        break;
    }
  }
});

function Action(a) {
  if (a === 'product') {
    screen__span.textContent = Number(screen__span.textContent) * Number(screen__h2.textContent);
  }
  if (a === 'substraction') {
    screen__span.textContent = Number(screen__span.textContent) - Number(screen__h2.textContent);
  }
  if (a === 'sum') {
    screen__span.textContent = Number(screen__span.textContent) + Number(screen__h2.textContent);
  }
  if (a === 'division') {
    screen__span.textContent = Number(screen__span.textContent) / Number(screen__h2.textContent);
  }
}

function DefiningTheAction(a) {
  if (!iswaitingforsecondvalue) {
    screen__span.textContent = screen__h2.textContent;
    iswaitingforsecondvalue = true;
    act = a;
  } else {
    act = a;
  }
  screen__h2.textContent = '';
}

function Zeroing(a) {
  screen__h2.textContent = a;
  screen__span.textContent = '';
  iswaitingforsecondvalue = false;
}