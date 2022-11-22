class CarBreakdownTimer {
    githubUrl = "epix0r.github.io";
    assetsFolder = "assets/";
    fileName = "date.json";
    dateLastBreakdown = "2022-11-22T16:20:00";

    getTimeSinceLastBreakdown() {
        let lastBreakdownDate = new Date(this.dateLastBreakdown);
        let currentDate = new Date();

        let distance = currentDate - lastBreakdownDate;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
    }

    getHoursInSeconds(value) {
        return value * 60 * 60;
    }

    getMinutesInSeconds(value) {
        return value * 60;
    }

    getTimerElement() {
        return document.getElementsByClassName("timer")[0];
    }

    registerTimer() {
        let timerElement = this.getTimerElement();

        setInterval(() => {
            timerElement.innerHTML = this.getTimeSinceLastBreakdown();
        }, 1000)
    }
}

window.onload = (_event) => {
    let cbt = new CarBreakdownTimer();

    cbt.registerTimer();
}
