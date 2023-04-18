const phoneP = document.querySelector('#phone');
const nameP = document.querySelector('#name');
const dateP = document.querySelector('#date');
const peopleP = document.querySelector('#people');
const send = document.querySelector('#send');

send.addEventListener('click', () => {
  const phone = phoneP.value;
  const date = dateP.value;
  const name = nameP.value;
  const people = peopleP.value;

  if (!phone || !name || !date || !people) {
    alert('Заполните все поля!');
    return;
  }
  const link = `https://api.whatsapp.com/send/?phone=79196853086&text=Здравствуйте. Меня+зовут+${name}! Хочу+забронировать+на+${date}. Нас+${people}+человек. Перезвоните+мне+на+этот+номер+-${phone}&app_absent=0`;
  send.href = link;
});