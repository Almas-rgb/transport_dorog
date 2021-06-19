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
        title: 'Событие на весь день',
        start: '2021-05-01'
      },
      {
        title: 'Длинное событие',
        start: '2021-05-07',
        end: '2021-05-10'
      },
      {
        groupId: 999,
        title: 'Повторяющееся событие',
        start: '2021-05-09T16:00:00'
      },
      {
        groupId: 999,
        title: 'Повторяющееся событие',
        start: '2021-05-16T16:00:00'
      },
      {
        title: 'Конференция',
        start: '2021-05-11',
        end: '2021-05-13'
      },
      {
        title: 'Встреча',
        start: '2021-05-12T10:30:00',
        end: '2021-05-12T12:30:00'
      },
      {
        title: 'Обед',
        start: '2021-05-12T12:00:00'
      },
      {
        title: 'Встреча',
        start: '2021-05-12T14:30:00'
      },
      {
        title: 'Счастливый час',
        start: '2021-05-12T17:30:00'
      },
      {
        title: 'Обед',
        start: '2021-05-12T20:00:00'
      },
      {
        title: 'День рождения',
        start: '2021-05-13T07:00:00'
      },
      {
        title: 'Нажмите для Google',
        url: 'http://google.com/',
        start: '2021-05-28'
      }
    ]
  });

  calendar.render();
});
