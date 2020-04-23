const app = {}

app.photos = function(category) {
    $.ajax({
        beforeSend: function(xhr) {
            xhr.setRequestHeader ("Authorization","563492ad6f9170000100000182a4cb90fb2d4d1ca388854336c754cb")
        },
        url: `https://api.pexels.com/v1/search?query=${category}&per_page=15&page=1`,
        method: `GET`,
        datatype: `json`
    }).then(function(data) {
        getPhotos(data.photos);
        
    },function(error) {
        console.log(error);
    });
};

function getPhotos(photos) {
    $(`.container`).children(`.image`).remove();
    
    photos.forEach(function(photo, i) {
        const className = `photoNumber${i}`;
        let image = $(`<img>`).attr(`src`, photo.src.original);
        let imageDiv = $(`<div>`).append(image).addClass(`image`).addClass(className);
        $(`.container`).append(imageDiv);
    });
    
    function overlay () {
        let overlayP = $(`<p>`).text(`Lorem ipsum dolor sit amet consectectetur adipiscing elit.`);
        let overlayDiv = $(`<div>`).addClass(`overlay`).append(overlayP);
        $(`.image`).append(overlayDiv);
    }
    overlay();
    // https://masonry.desandro.com/
};

app.side = function() {
    $(`.sideUl`).on(`click`, `li`, function() {
        $(`.sideToggle`).removeClass(`sideToggle`);
        $(this).addClass(`sideToggle`);
        let value = $(this).attr(`value`);
        app.photos(value);
    })
};

app.textP = function(){
    let text = $(`<p>`).text(`Lorem ipsum dolor sit amet consectecteur adipiscing elit.`).addClass(`textP`);
    $(`.sideUl li`).append(text);
};

app.large = function() {
    $(`.container`).on(`click`, `.image`, function(e) {
        e.stopPropagation();
    console.log(`clicked`);
    let enlargedImage = $(this).addClass(`show`);
    enlargedImage.appendTo(`.enlarged`);
    $(`.topNav`).hide();
    $(`.bigContainer`).hide();
    $(`.enlargedBackground`).css(`background-color`, `grey`);
    });
};

app.back = function() {
    $(`.enlarged`).on(`click`, `.show`, function() {
        console.log(this);
        let prepend = $(this).prepend(`.enlarged`);
        $(`.container`).append(prepend);
        prepend.removeClass(`show`);
        $(`.topNav`).show();
        $(`.bigContainer`).show();
        $(`.enlargedBackground`).css(`background-color`, `white`);
    });
};
//when I click on the enlarged photo, I want to put it back to exactly where it was but it goes to the very end and for some reason, it has some text which is ".enlarged".

$(function() {
    app.photos(`wedding`);
    app.side();
    app.textP();
    app.large();
    app.back();
});