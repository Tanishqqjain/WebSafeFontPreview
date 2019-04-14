$(document).ready(() => {
    $('#sampletext').on('keyup', (event) => {
        $('#preview').html($(event.currentTarget).val());
        if ($(event.currentTarget).val() == "") {
            $('#preview').html("Result will be shown here.");
        }
    });
    $('#fontsize').on('keyup', (event) => {
        var fontsize = $(event.currentTarget).val() + "px";
        if ($(event.currentTarget).val() > 0) {
            $('#preview').css({
                fontSize: fontsize
            });
        } else {
            $('#preview').css({
                fontSize: '18px'
            });
            $('#preview').html("Please Enter a Positive Number greater than zero.");

        }
        if ($(event.currentTarget).val() == "") {
            $('#preview').html($('#sampletext').val());
        }
    });
    $('#fontfamily').on('change', (event) => {
        $('#preview').css({
            fontFamily: $(event.currentTarget).val()
        });
    });
    $('#fontweight').on('change', (event) => {
        $('#preview').css({
            fontWeight: $(event.currentTarget).val()
        });
    });
});