const checkAge = () => {

    setInterval(function () {
        var dob = document.getElementById("dateOfBirth").value;

        var date = new Date(dob);
        var timeFixing = new Date();

        var fixingMili = timeFixing.getTime();

        dateMili = date.getTime();

        diff = fixingMili - dateMili;

        myDob = Math.floor(diff / (1000 * 60 * 60 * 24 * 30 * 12));
        month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        hours = Math.floor(diff / (1000 * 60 * 60));
        minutes = Math.floor(diff / (1000 * 60));
        seconds = Math.floor(diff / (1000));
        smallest = Math.floor(diff);
        document.getElementById("age").innerHTML = ` <b>Age</b>: ${myDob} <br>
          <b>Months:</b>:${month} <br>
          <b>Days:</b>:${days} <br> 
          <b>Hours:</b>:${hours} <br>
          <b>Minutes:</b>:${minutes} <br> 
          <b>Seconds:</b>:${seconds} <br> 
          <b>Milliseconds:</b> ${smallest}`

    }, 1000)
    return false;
}