/* Dietrich Ney, 9/19/21, Birthday Countdown JS for CSCI-310 */

/* Define my birthday and time itervals */
let countdown = document.getElementById('timer')
let mybirthday = new Date('07/25/2022')
const sec = 1000
const min = 60 * sec
const hr = 60 * min
const day = 24 * hr
let today = new Date()

 /* Fuction to update message */
function birthdayCountdown() {
    let today = new Date()
    let timeleft = mybirthday - today

    /* Math for time output formatting */
    const daysleft = Math.floor(timeleft / day)
    const hoursleft = Math.floor((timeleft % day) / hr)
    const minutesleft = Math.floor((timeleft % hr) / min)
    const secondssleft = Math.floor((timeleft % min) / sec)

    /* If it is my birthday */
    if((timeleft < 0) && (timeleft > (-day))) {
        timer.innerHTML = 'HAPPY 24th BIRTHDAY DIETRICH!!'
        clearInterval(mytimer)
        return
    }

    /*If it is after my birthday */
    if(timeleft <= (-day)) {
        timer.innerHTML = "HAPPY BELATED BIRTHDAY DIETRICH!!" + "<br/>" + "Your 24th birthday was:" + "<br/>" + Math.abs(daysleft + 1) + "<br/>" + "day(s) ago!"
        clearInterval(mytimer)
        return
    }

    /* Update the time left until my birthday every second */
    timer.innerHTML = 'It is exactly:' + "<br/> " + daysleft + ' Days' + "<br/> " + hoursleft +  ' Hours' + "<br/> " +  minutesleft + ' Minutes' + "<br/>" + "And " + secondssleft +' Seconds' + "<br/>" + "Until Dietrich's 24th Birthday!"
}

let mytimer = setInterval(birthdayCountdown, sec)