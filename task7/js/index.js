var Controller = Backbone.Router.extend({
  routes: {
    "": 'start', // Пустой hash-тэг
    "!/": 'start', // Начальная страница
    "!/success": 'success', // Блок удачи
    "!/error": 'error' // Блок ошибки
  },

  'start': function () {
    $(".block").hide(); // Прячем все блоки
    $("#start").show(); // Показываем нужный
  },

  success: function () {
    $(".block").hide();
    $("#success").show();
  },

  'error': function () {
    $(".block").hide();
    $("#error").show();
  }
});
var controller = new Controller(); // Создаём контроллер
Backbone.history.start();  // Запускаем HTML5 History push

var Start = Backbone.View.extend({
    el: $("#start"), // DOM элемент widget'а
    events: {
        "click input:button": "check" // Обработчик клика на кнопке "Проверить"
    },
    check: function () {
        if (this.$("input:text").val() == "test") // Проверка текста
            controller.navigate("!/success", true); // переход на страницу success
        else
            controller.navigate("!/error", true); // переход на страницу error
    }
});


var start = new Start();

