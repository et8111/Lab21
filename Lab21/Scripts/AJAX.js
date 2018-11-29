$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: "Home/doMATH",
        data: {a: 0, b: 1},
        success: function (result) {
            console.log(result);
        }
    });

    $("#subButton").contextmenu(function () {
        var b = document.getElementsByTagName("input");
        $.ajax({
            type: 'GET',
            url: "autoFill",
            success: function (result) {
                for (var i = 0; i < 6; i++)
                    b[i].value = result[i];
                validate();
            }
        });
    });
});