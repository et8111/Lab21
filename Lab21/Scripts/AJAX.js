$(document).ready(function () {
    $.ajax({
        type: 'GET',
        data: { a: 0, b: 1 },
        url: 'Home/doMATH',
        success: function (temp) {
                console.log(temp);
        }
    });
});
$(document).ready(function () {
        $.ajax({
            type: 'GET',
            url: "Home/HelloAjax",
            success: function (result) {
                console.log("YEA");
            }
        });
});