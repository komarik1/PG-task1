var AppState = {
    username: ""
};

var Start = Backbone.View.extend({
    el: $("#block"), // DOM элемент widget'а

    template: _.template($('#start').html()),

    events: {
        "click input:button": "check" // Обработчик клика на кнопке "Проверить"
    },

    check: function () {
        AppState.username = this.$("input:text").val(); // Сохранение имени пользователя
        if (AppState.username == "test") {// Проверка имени пользователя
            controller.navigate("!/success", true); // переход на страницу success
        } else {
            controller.navigate("!/error", true); // переход на страницу error
	}
    },

    render: function () {
        $(this.el).html(this.template());
    }
});

var Success = Backbone.View.extend({
    el: $("#block"), // DOM элемент widget'а

    template: _.template($('#success').html()),

    render: function () {
        $(this.el).html(this.template(AppState));
    }
});

var Error = Backbone.View.extend({
    el: $("#block"), // DOM элемент widget'а

    template: _.template($('#error').html()),

    render: function () {
        $(this.el).html(this.template(AppState));
    }
});

var Views = { 
            start: new Start(),
            success: new Success(),
            error: new Error()
        };

var Controller = Backbone.Router.extend({
    routes: {
        "": "start", // Пустой hash-тэг
        "!/": "start", // Начальная страница
        "!/success": "success", // Блок удачи
        "!/error": "error" // Блок ошибки
    },

    start: function () {
        if (Views.start != null) {
            Views.start.render();
        }
    },

    success: function () {
        if (Views.success != null) {
            Views.success.render();
        }
    },

    error: function () {
        if (Views.error != null) {
            Views.error.render();
        }
    }
});

var controller = new Controller(); // Создаём контроллер
Backbone.history.start();  // Запускаем HTML5 History push



