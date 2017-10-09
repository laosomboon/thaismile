function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



function initMap() {
    var uluru = { lat: 43.442800, lng: -79.7675000 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}


(function($) {


    // Instantiate MixItUp:
    $('#Container').mixItUp();




    // Add smooth scrolling to all links in navbar + footer link
    $(".sidenav a").on('click', function(event) {
        var hash = this.hash;
        if (hash) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {
                window.location.hash = hash;
            });
        }

    });



    $("#contact-form").submit(function(e) {

        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        var message = document.getElementById('message');

        if (!name.value || !email.value || !phone.value || !message.value) {

            alertify.error('Please check your entries');
            e.preventDefault();
            $(this).reset();
        } else {
            $.ajax({
                url: "https://formspree.io/saranat2515@gmail.com",
                method: "POST",
                data: $(this).serialize(),
                dataType: "json"
            });
            alertify.success('Message sent');
            e.preventDefault();
            $(this).reset();
        }
    });




})(jQuery);