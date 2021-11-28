import "./style.css";
import "./style.scss";


// Первый блок -  форма регистрации пользователя

const section = document.createElement('div');
section.className = 'section';
document.body.prepend(section);


const divForm = document.createElement('div');
divForm.className = 'container';
section.prepend(divForm);


const contFormName = document.createElement('h2');
contFormName.className = 'header_form';
divForm.append(contFormName);
contFormName.innerText = 'Авторизация пользователя';


const contactBox = document.createElement('div');
contactBox.className = 'contact_Box';
divForm.append(contactBox);


let contactForm = document.createElement('form');
contactForm.className = 'contact_form';
contactBox.append(contactForm);


let labFname = document.createElement('label');
contactForm.append(labFname);
labFname.className = 'label_form';
labFname.setAttribute('name', 'labFname');
labFname.setAttribute('for', 'contactFirstName');
labFname.innerText = (' Имя : ');


let contactFirstName = document.createElement('input');
contactFirstName.setAttribute('id', 'contactFirstName');
contactFirstName.className = 'contact_fname'
contactForm.append(contactFirstName);
contactFirstName.setAttribute('type', 'text');
contactFirstName.setAttribute('placeholder', 'Имя пользователя');
contactFirstName.setAttribute('pattern', '[a-zA-ZА-Яа-я]+');
contactFirstName.required = true;
contactFirstName.setAttribute('value', '');
contactFirstName.focus();

let labLname = document.createElement('label');
contactForm.append(labLname);
labLname.className = 'label_form';
labLname.innerText = (' Фамилия :' );


let contactLastName = document.createElement('input');
contactLastName.className = 'contact_lname'
contactForm.append(contactLastName);
contactLastName.setAttribute('type', 'text');
contactLastName.setAttribute('placeholder', 'Фамилия пользователя');
contactLastName.setAttribute('pattern', '[a-zA-ZА-Яа-я]+');
contactLastName.required = true;


let labAge = document.createElement('label');
contactForm.append(labAge);
labAge.className = 'label_form';
labAge.innerText = (' Возраст, лет : ');


let contactAge = document.createElement('input');
contactAge.className = 'contact_age'
contactForm.append(contactAge);
contactAge.setAttribute('type', 'number');
contactAge.setAttribute('placeholder', 'Сколько Вам лет');
contactAge.setAttribute('min', '1');
contactAge.setAttribute('max', '100');
contactAge.required = true;


let contactBtn = document.createElement('button');
contactBtn.className = 'contact_btn'
contactForm.append(contactBtn);
contactBtn.innerText = 'Продолжить';


let finishBtn = document.createElement('button');
finishBtn.className = 'finish_btn'
section.prepend(finishBtn);

let newBtn = document.createElement('button');
newBtn.className = 'finish_btn'
section.prepend(newBtn);


contactForm.addEventListener('submit', (event) => {                   
    event.preventDefault();    
    modal1.innerText = `${labFname.innerText}  ${contactFirstName.value}`;
    modal2.innerText = `${labLname.innerText}  ${contactLastName.value}`;
    modal3.innerText = `${labAge.innerText}  ${contactAge.value}`;
}); 

    

let person = localStorage.getItem('user');
person = JSON.parse(person)


if (person){   
    divForm.style.display = 'none';    
    finishBtn.style.display = 'block';
    newBtn.style.display = 'block';  
    finishBtn.textContent = `Продолжить как ${person[0]}`;
    newBtn.textContent = `Ввести данные о себе снова`;

    finishBtn.addEventListener('click', () =>{ 
        modal1.innerText = `${labFname.innerText}  ${person[0]}`;
        modal2.innerText = `${labLname.innerText}  ${person[1]}`;
        modal3.innerText = `${labAge.innerText}  ${person[2]}`;       
        finishBtn.style.display = 'none';
        newBtn.style.display = 'none'; 
        divQuestion.style.display = 'block';      
        
    })         

    newBtn.addEventListener('click', () =>{          
        localStorage.clear();
        window.location.reload();
        finishBtn.style.display = 'none';
        newBtn.style.display = 'none'; 
        
         
    })        
    
                                                     
} else {
    contactForm.addEventListener('submit', (event) => {                   
        event.preventDefault(); 
        let user = [contactFirstName.value, contactLastName.value, contactAge.value];        
        localStorage.setItem('user', JSON.stringify(user));       
        divForm.style.display = 'none';       
        contactForm.reset();
        divQuestion.style.display = 'block'; 
               
        
    }                       
          
)};   


// Второй  блок - опросник.

const divQuestion = document.createElement('div');
divQuestion.className = 'question';
divForm.after(divQuestion);

const questionHeading = document.createElement('h2');
questionHeading.className = 'question_Heading';
divQuestion.prepend(questionHeading);
questionHeading.innerText = 'Анкета- опросник';

const questionBox = document.createElement('div');
questionBox.className = 'question_Box';
divQuestion.append(questionBox);  

const questionForm = document.createElement('form');
questionForm.className = 'question_form';
questionBox.append(questionForm);

const labInp1 = document.createElement('label');
questionForm.append(labInp1);
labInp1.className = 'label_form';
labInp1.setAttribute('for', 'questionInp1');
labInp1.innerText = ('Ваша профессия в настоящее время: ');


const questionInp1 = document.createElement('input');
questionInp1.className = 'question_Inp1'
questionForm.append(questionInp1);
questionInp1.setAttribute('id', 'questionInp1');
questionInp1.setAttribute('type', 'text');
questionInp1.setAttribute('placeholder', 'например: инженер');
questionInp1.setAttribute('pattern', '[a-zA-ZА-Яа-я,Ёё]+');
questionInp1.required = true;
questionInp1.focus();

const labInp2 = document.createElement('label');
questionForm.append(labInp2);
labInp2.className = 'label_form';
labInp2.setAttribute('for', 'questionInp2');
labInp2.innerText = (' Рассматриваемые вакансии: ');


const questionInp2 = document.createElement('input');
questionInp2.className = 'question_Inp2'
questionForm.append(questionInp2);
questionInp2.setAttribute('id', 'questionInp2');
questionInp2.setAttribute('type', 'text');
questionInp2.setAttribute('placeholder', 'например: инженер-конструктор');
questionInp2.setAttribute('pattern', '[a-zA-ZА-Яа-я,Ёё]+');
questionInp2.required = true;


const labInp3 = document.createElement('label');
questionForm.append(labInp3);
labInp3.className = 'label_form';
labInp3.innerText = (' Желаемый уровень заработной платы , USD : ');


const questionInp3 = document.createElement('input');
questionInp3.setAttribute('id', 'questionInp3');
questionInp3.className = 'question_Inp3'
questionForm.append(questionInp3);
questionInp3.setAttribute('type', 'range');
questionInp3.setAttribute('min', '500');
questionInp3.setAttribute('max', '5000');
questionInp3.setAttribute('step', '50');
questionInp3.setAttribute('value', '500') 
questionInp3.setAttribute('oninput', 'num.value = this.value');


let questionInp3_3 = document.createElement('output');
questionInp3_3.setAttribute('id', 'num');
questionInp3.after(questionInp3_3);
questionInp3_3.setAttribute('for', 'questionInp3');
questionInp3_3.innerText = questionInp3.value;



let fiel = document.createElement('fieldset');
questionForm.append(fiel);
let leg = document.createElement('legend');
fiel.append(leg);
leg.innerText = ' Выбрать один или два варианта : ';


const legBox1 = document.createElement('div');
legBox1.className = 'legBox1';
leg.after(legBox1);

let questionInp4_y = document.createElement('input');
questionInp4_y.className = 'question_Inp4'
questionInp4_y.setAttribute('type', 'checkbox');
questionInp4_y.setAttribute('id', 'questionInp4_y');
questionInp4_y.setAttribute('value', 'предложить варианты');
legBox1.append(questionInp4_y);

const lab_y = document.createElement('label');
questionInp4_y.after(lab_y);
lab_y.setAttribute('for', 'questionInp4_y');
lab_y.innerText = 'Работа в государственной компании -  ';


const legBox2 = document.createElement('div');
legBox2.className = 'legBox2';
leg.after(legBox2);

let questionInp4_n = document.createElement('input');
questionInp4_n.className = 'question_Inp4'
questionInp4_n.setAttribute('type', 'checkbox');
questionInp4_n.setAttribute('checked', 'true');
questionInp4_n.setAttribute('id', 'questionInp4_n');
questionInp4_n.setAttribute('value', ' предложить варианты');

legBox2.append(questionInp4_n);
const lab_n = document.createElement('label');
questionInp4_n.after(lab_n);
lab_n.setAttribute('for', 'questionInp4_n');
lab_n.innerText = 'Работа в частной компании - ';


let selectHeader = document.createElement('div');
fiel.after(selectHeader);
selectHeader.className = 'label_form'
selectHeader.innerText = 'Образование :';

let selectForm = document.createElement('select');
questionForm.append(selectForm);
selectForm.className = 'selectForm'
selectForm.setAttribute('value', 'text');

let option1 = document.createElement('option');
selectForm.append(option1);
option1.innerText = 'Высшее';

let option2 = document.createElement('option');
selectForm.append(option2);
option2.innerText = 'Средне-специальное';

let option3 = document.createElement('option');
selectForm.append(option3);
option3.innerText = 'Среднее';

let option4 = document.createElement('option');
selectForm.append(option4);
option4.innerText = 'Базовое';

let radioHeader = document.createElement('div');
selectForm.after(radioHeader);
radioHeader.className = 'label_form';
radioHeader.innerText = 'Опыт работы :';

let radioImp1 = document.createElement('input');
radioImp1.className = 'radioImp1'
radioImp1.setAttribute('type', 'radio');
radioImp1.setAttribute('id', 'radioImp1');
radioImp1.setAttribute('name', 'radioImp');
radioImp1.setAttribute('value', ' без опыта работы ');
radioHeader.after(radioImp1);

const labRad1 = document.createElement('label');
radioImp1.after(labRad1);
labRad1.className = 'labRadio';
labRad1.setAttribute('for', 'radioImp1');
labRad1.innerText = ' без опыта работы ';

let radioImp2 = document.createElement('input');
radioImp2.className = 'radioImp2'
radioImp2.setAttribute('type', 'radio');
radioImp2.setAttribute('id', 'radioImp2');
radioImp2.setAttribute('name', 'radioImp');
radioImp2.setAttribute('checked', 'true');
radioImp2.setAttribute('value', ' от 1 до 3 лет ');
labRad1.after(radioImp2);

const labRad2 = document.createElement('label');
radioImp2.after(labRad2);
labRad2.className = 'labRadio';
labRad2.setAttribute('for', 'radioImp2');
labRad2.innerText = ' от 1 до 3 лет ';

let radioImp3 = document.createElement('input');
radioImp3.className = 'radioImp3'
radioImp3.setAttribute('type', 'radio');
radioImp3.setAttribute('id', 'radioImp3');
radioImp3.setAttribute('name', 'radioImp');
radioImp3.setAttribute('value', ' от 3 лет и более ');
labRad2.after(radioImp3);

const labRad3 = document.createElement('label');
radioImp3.after(labRad3);
labRad3.className = 'labRadio';
labRad3.setAttribute('for', 'radioImp3');
labRad3.innerText = ' от 3 лет и более ';

let questionBtn = document.createElement('button');
questionBtn.className = 'question_btn'
questionForm.append(questionBtn);
questionBtn.innerText = 'Отправить';


questionForm.addEventListener('submit', (event)=>{                   
    event.preventDefault(); 
    section.style.background = " no-repeat center/100% url('https://acegif.com/wp-content/gifs/udachi-6.gif') "

    modal4.innerText = `${labInp1.innerText}  ${questionInp1.value}`;
    modal5.innerText = `${labInp2.innerText}  ${questionInp2.value}`;
    modal6.innerText = `${labInp3.innerText}  ${num.value}`;
       
    if (questionInp4_y.checked)  {
        modal7.innerText = `${lab_y.innerText}  ${questionInp4_y.value}`;
    } else {
        modal7.innerText = `${lab_y.innerText}  не предлагать`;
    };

    if (questionInp4_n.checked)  {
        modal8.innerText = `${lab_n.innerText}  ${questionInp4_n.value}`;
    } else {
        modal8.innerText = `${lab_n.innerText}  не предлагать`;
    };  
    modal9.innerText = `${selectHeader.innerText}  ${selectForm.value}`;

    if (radioImp1.checked)  {
    modal10.innerText = `${radioHeader.innerText}  ${radioImp1.value}`;
    }
    if (radioImp2.checked)  {
        modal10.innerText = `${radioHeader.innerText}  ${radioImp2.value}`;
        }
    if (radioImp3.checked)  {
    modal10.innerText = `${radioHeader.innerText}  ${radioImp3.value}`;
    }

    questionForm.reset();
    divQuestion.style.display = 'none';
    modal.style.display = 'block';     
         
 });  
 
 
// Третий  блок - модальное окно.

const modal = document.createElement('div');
modal.className ='modal';
divQuestion.after(modal);

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
modal.append(modalContent);

const modalClose = document.createElement('span');
modalClose.className = 'close';
modalContent.append(modalClose);
modalClose.innerText = '×'

const modalHeader = document.createElement('h2');
modalHeader.className = 'modal-header';
modalClose.after(modalHeader);
modalHeader.innerText = 'Анкетирование завершено, проверьте Ваши ответы.'

const modalResult = document.createElement('div');
modalResult.className = 'modal-result';
modalHeader.after(modalResult);

const modal1 = document.createElement('p');
modal1.className = 'modal_description';
modalResult.append(modal1);

const modal2 = document.createElement('p');
modal2.className = 'modal_description';
modalResult.append(modal2);

const modal3 = document.createElement('p');
modal3.className = 'modal_description';
modalResult.append(modal3);

const modal4 = document.createElement('p');
modal4.className = 'modal_description';
modalResult.append(modal4);

const modal5 = document.createElement('p');
modal5.className = 'modal_description';
modalResult.append(modal5);

const modal6 = document.createElement('p');
modal6.className = 'modal_description';
modalResult.append(modal6);

const modal7 = document.createElement('p');
modal7.className = 'modal_description';
modalResult.append(modal7);

const modal8 = document.createElement('p');
modal8.className = 'modal_description';
modalResult.append(modal8);

const modal9 = document.createElement('p');
modal9.className = 'modal_description';
modalResult.append(modal9);

const modal10 = document.createElement('p');
modal10.className = 'modal_description';
modalResult.append(modal10);

const modalFooter = document.createElement('div');
modalFooter.className = 'modal-footer';
modalResult.after(modalFooter);

const modalBtn = document.createElement('button');
modalFooter.append(modalBtn);
modalBtn.className = 'modal-btn';
modalBtn.innerText = 'Исправить';

modalClose.onclick = function() {
    modal.style.display = "none";
    section.style.display = "none";
    
 
}

modalBtn.onclick = function() {
    modal.style.display = "none";
    localStorage.clear();
    window.location.reload();

}




