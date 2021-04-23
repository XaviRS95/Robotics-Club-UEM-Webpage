jQuery(document).ready(function() {
    jQuery('#sendmail').click(function() {
        var mail='mail='+jQuery('#contactmail').val()+'&subject='+jQuery('#mailsubject').val()+'&text='+jQuery('#mailsubject').val();
        console.log(mail)
        jQuery.ajax({
            type: 'POST',
            url: 'slider.js',
            data: mail
        });
    })
});

