$(document).ready(function () {
    $('button').click(function () {
        $('button').removeClass("selected");
        $(this).addClass("selected");

        let flickerAPI = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        let animal = $(this).text();
        let flickrOptions = {
            tags: animal,
            format: "json"
        };
        function displayPhotos(data) {
            let photoHTML = '<ul>';
            $.each(data.items, function (index, photo) {
                photoHTML += '<li class="grid-25 tablet-grid-50">';
                photoHTML += '<a href="' + photo.link + '" class="image">';
                photoHTML += '<img src="' + photo.media.m + '" alt=""></a></li>';
            });
            photoHTML += "</ul>";
            $('#photos').html(photoHTML);
        }
        $.getJSON(flickerAPI, flickrOptions, displayPhotos);

    });
});