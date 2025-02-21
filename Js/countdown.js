// class to create a countdown timer
class CountdownTimer {
    // setup timer values
    constructor({ selector, targetDate, backgroundColor = null, foregroundColor = null }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;

        // grab divs on frontend using supplied selector ID
        this.refs = {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            mins: document.querySelector(`${this.selector} [data-value="minutes"]`),
            secs: document.querySelector(`${this.selector} [data-value="seconds"]`),
        };
    }

    getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((total / 1000 / 60) % 60);
        const secs = Math.floor((total / 1000) % 60);
        return {
            total,
            days,
            hours,
            mins,
            secs,
        };
    }

    updateTimer({ days, hours, mins, secs }) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    }

    updateColors() {
        if (this.backgroundColor != null) {
            this.refs.days.style.background = this.backgroundColor;
            this.refs.hours.style.background = this.backgroundColor;
            this.refs.mins.style.background = this.backgroundColor;
            this.refs.secs.style.background = this.backgroundColor;
        }

        if (this.foregroundColor != null) {
            this.refs.days.style.color = this.foregroundColor;
            this.refs.hours.style.color = this.foregroundColor;
            this.refs.mins.style.color = this.foregroundColor;
            this.refs.secs.style.color = this.foregroundColor;
        }
    }

    startTimer() {
        const timer = this.getTimeRemaining(this.targetDate);
        this.updateTimer(timer);
        this.updateColors();
        setInterval(() => {
            const timer = this.getTimeRemaining(this.targetDate);
            this.updateTimer(timer);
        }, 1000);
    }
}

// setup timer with set textual date in the future
const timer1 = new CountdownTimer({
    selector: "#clock1",
    targetDate: new Date("December, 15 2022 16:30:00"),
});

timer1.startTimer(); 

// setup timer with date set in the future
const timer2 = new CountdownTimer({
    selector: "#clock2",
    targetDate: new Date("December, 17 2022 18:40:00"),
});

timer2.startTimer(); 

// setup timer with date set in the future
const timer3 = new CountdownTimer({
    selector: "#clock3",
    targetDate: new Date("December, 18 2022 17:30:00"),
});

timer3.startTimer(); 

// setup timer with date set in the future
const timer4 = new CountdownTimer({
    selector: "#clock4",
    targetDate: new Date("December, 19 2022 15:00:00"),
});

timer4.startTimer(); 
// setup timer with date set in the future
const timer5 = new CountdownTimer({
    selector: "#clock5",
    targetDate: new Date("December, 21 2022 18:00:00"),
});

timer5.startTimer(); 
// setup timer with date set in the future
const timer6 = new CountdownTimer({
    selector: "#clock6",
    targetDate: new Date("December, 26 2022 19:00:00"),
});

timer6.startTimer(); 

//Email validation function
function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    alert("Valid email address!");

    document.form1.text1.focus();

    return true;

  } else {

    alert("Invalid email address!");

    document.form1.text1.focus();

    return false;

  }

}