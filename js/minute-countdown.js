function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

$(document).ready(function () {
    window.setInterval(function () {
        var iTimeRemaining = $("#spnSeconds").data('time');
        iTimeRemaining = ~~iTimeRemaining;
        if (iTimeRemaining == 0) {
            location.href = "https://twitter.com/realDonaldTrump";
        } else {
            var mins = ~~(iTimeRemaining / 60000);
            $("#spnSeconds").html(mins + ":" + pad(~~(iTimeRemaining / 1000 % 60),2));
            $("#spnSeconds").data('time', iTimeRemaining - 1000);
        }
    }, 1000);
});