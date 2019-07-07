function showTime() {
    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h > 12) {
        h -= 12;
        session = "PM";
    } else { session = "AM" }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    var t = `${h} : ${m} : ${s} ${session}`;

    var clock = document.querySelector(".myClockDisplay");
    clock.textContent = t;
}

showTime();
setInterval(showTime, 1000);