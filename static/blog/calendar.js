document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialDate: new Date(),
    events: 'events.json',
    locale: 'ru',
    selectable: true,
    selectMirror: true,
    select: function(arg) {
      var title = prompt('Название события:');
      if (title) {
        calendar.addEvent({
          title: title,
          start: arg.start,
          end: arg.end,
          allDay: arg.allDay
        })
      }
      calendar.unselect()
    },
    eventClick: function(arg) {
      if (confirm('Вы уверены, что хотите удалить это мероприятие?')) {
        arg.event.remove()
      }
    },
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
<<<<<<< HEAD
        title: 'Доклад',
        start: '2021-06-01'
      },
      {
        title: 'Проверка',
        start: '2021-06-07',
        end: '2021-06-09'
      },
      {
        groupId: 999,
        title: 'Собеседование',
=======
        title: 'Событие на весь день',
        start: '2021-06-01'
      },
      {
        title: 'Длинное событие',
        start: '2021-06-07',
        end: '2021-06-10'
      },
      {
        groupId: 999,
        title: 'Повторяющееся событие',
>>>>>>> 480e9b1bc1d55f92ed7212fb0affa59de543e21a
        start: '2021-06-09T16:00:00'
      },
      {
        groupId: 999,
<<<<<<< HEAD
        title: 'Собеседование',
=======
        title: 'Повторяющееся событие',
>>>>>>> 480e9b1bc1d55f92ed7212fb0affa59de543e21a
        start: '2021-06-16T16:00:00'
      },
      {
        title: 'Конференция',
        start: '2021-06-11',
<<<<<<< HEAD
        end: '2021-06-12'
      },
      {
        title: 'Встреча',
        start: '2021-06-18T10:30:00',
        end: '2021-06-18T12:30:00'
      },
      {
        title: 'Обед',
        start: '2021-06-18T12:00:00'
      },
      {
        title: 'Встреча',
        start: '2021-06-18T14:30:00'
      },
      {
        title: 'Счастливый час',
        start: '2021-06-18T17:30:00'
      },
      {
        title: 'Обед',
        start: '2021-06-18T20:00:00'
=======
        end: '2021-06-13'
      },
      {
        title: 'Встреча',
        start: '2021-06-12T10:30:00',
        end: '2021-06-12T12:30:00'
      },
      {
        title: 'Обед',
        start: '2021-06-12T12:00:00'
      },
      {
        title: 'Встреча',
        start: '2021-06-12T14:30:00'
      },
      {
        title: 'Счастливый час',
        start: '2021-06-12T17:30:00'
      },
      {
        title: 'Обед',
        start: '2021-06-12T20:00:00'
>>>>>>> 480e9b1bc1d55f92ed7212fb0affa59de543e21a
      },
      {
        title: 'День рождения',
        start: '2021-06-13T07:00:00'
      },
      {
<<<<<<< HEAD
        title: 'Управление пассажирского транспорта и автомобильных дорог',
        url: 'https://www.gov.kz/memleket/entities/kostanai-zhol-kolik?lang=ru',
        start: '2021-06-28',
        end: '2021-07-02'
=======
        title: 'Нажмите для Google',
        url: 'http://google.com/',
        start: '2021-06-28'
>>>>>>> 480e9b1bc1d55f92ed7212fb0affa59de543e21a
      }
    ]
  });

  calendar.render();
});
