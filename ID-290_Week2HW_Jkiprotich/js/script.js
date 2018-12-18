var now = new Date(),
    day = now.getDay(),
    $day = document.getElementById(day),
    text = document.getElementById('text'),
    i,
    msg = [
        "Sunday Funday!",
        "Back to the grind!",
        "Oh. It's Tuesday.",
        "Boom! Wednesday!",
        "Thirsty Thursday, yo!",
        "Paaarrrtttyyy!",
        "It's Saturday! We should be kickin' it!"
        ];
    text.textContent = msg[day];
    $day.setAttribute('id', 'day');
