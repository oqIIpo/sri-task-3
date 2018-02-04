[Демо](https://tranquil-thicket-93129.herokuapp.com/)

Для реализации задачи выбран React. Выбор обусловлен тем, что принципиально он абсолютно для этого подходит + я с ним знаком. 

Для совершения graphql запросов выбран `react-apollo`. Именно он – потому что сходу приглянулась его простота использования, решил вместо прозябания в муках выбора остановиться на Apollo и поскорее приступить непосредственно к задаче.

Для Date и Time пикеров выбраны [react-day-picker](http://react-day-picker.js.org/) и [rc-time-picker](http://react-component.github.io/time-picker/). Выбирал ориентируясь на зведздочки, понятность доки, и тому на сколько подходит функционал. 

 getRecommendation работает следующим образом:
- либо выдает варианты со свободными переговорками, сортируя их по близости ко всем участникам
- либо пытается совершить перестановки, причем перестановки неограничены по  глубине (перестановки генерируются рекурсивно). Полученные варианты отсортированы по количеству перестановок в порядке возрастания (возможно правильней опять считать количество пройденных этажей?) Эта часть кода функции вышла некрасивой на вид, надеюсь успею исправить до проверки.
- либо ищет ближайшие по времени варианты. Варианты с переносом на следующий день в интерфейсе решил помечать (+1)
При поисках вариантов с перестановками getRecommendation исключает встречи, которые уже в процессе.

Пользовательский ввод и валидация:
Я решил не позволять пользователю сабмитить форму с временем выходящим за промежуток с 8 до 23 часов. Кроме того, когда время встречи менее 15 минут. Минуты можно вводить кратно 5.  С невыбранной переговоркой, незаполненной темой и невыбранным(и) участниками также невозможно создать встречу. Поля с ошибками подсвечиваются.

От себя добавил уведомление об успешном редактировании встречи. 

Элементы интерфейса, диаграмма, хэдер и страница создания/редактирования разнесены по разным компонентам. При этом компонент Even (страница создания/редактирования) получился довольно громоздким из-за количества обработчиков событий.

Было бы неплохо улучшить выдачу подсказок в дропдауне «участники» (встречи). Сделать что-то наподобие умного поиска как в саблайме или vscode, когда по частичному совпадению в разных частях набираемого текста предлагаются варианты.
Так же сделать переключение табом между полями, сделать нормальный аутлайн для полей ввода. Я знаю как намного умнее реализовать высоту вертикальных линий (те что бьют диаграмму по часам, а так же текущее время)
Но сегодня уже 28 число, и я боюсь что регистрация закончится в любой момент, поэтому отравляю все как есть, и возможно до проверки успею что-то поправить.
