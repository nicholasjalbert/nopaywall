var killer_interval;
var killer_called_count;

function kill_nyt_paywall() {
    killer_called_count += 1;
    var overlay_div = $("#gatewayCreative").parent();
    if (overlay_div.length) {
        overlay_div.remove();
        $("body").css("overflow-x", "auto");
        $("body").css("overflow-y", "auto");
        clearInterval(killer_interval);
    }

    //No Paywall has appeared in ~10 seconds
    if (killer_called_count > 20) {
        clearInterval(killer_interval);
    }
}

$(document).ready(function() {
    killer_called_count = 0;
    killer_interval = setInterval("kill_nyt_paywall()", 500);
});
