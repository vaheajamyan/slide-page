var speed = 1000/100;
var opacity = 0;

document.querySelector('.open_slider').addEventListener('click', function () {
    setTimeout(function(){
        document.querySelector('.container').style.display = 'none';
        if(window.innerWidth >= 991) {
            document.querySelector('.container-fluid.desktop').style.display = 'block';
        } else {
            document.querySelector('.container-fluid.mobile').style.display = 'block';
        }
        let timerId = setInterval(function() {
            opacity++;
                document.querySelector('.container-fluid.desktop').style.opacity = opacity/100;
                document.querySelector('.container-fluid.mobile').style.opacity = opacity/100;
            if (opacity >= 100){
                clearInterval(timerId);
            }
        },speed);
    }, 1000);
});
window.addEventListener('resize', function () {
    if(window.innerWidth <= 991) {
        document.querySelector('.container-fluid.desktop').style.display = 'none';
        if(document.querySelector('.container').style.display != 'block') {
            document.querySelector('.container-fluid.mobile').style.display = 'block';
        }
    }else {
        if(document.querySelector('.container').style.display != 'block') {
            document.querySelector('.container-fluid.desktop').style.display = 'block';
        }
        document.querySelector('.container-fluid.display').style.display = 'none';
        document.querySelector('.container-fluid.mobile').style.display = 'none';
    }
});
var myNodeList = document.querySelectorAll('.button_close');

// ALT 1
Array.from(myNodeList).forEach(function(element) {
    element.addEventListener('click', function () {
        setTimeout(function () {
            document.querySelector('.container-fluid.desktop').style.display = 'none';
            document.querySelector('.container-fluid.mobile').style.display = 'none';
            document.querySelector('.container').style.display = 'block';
        }, 1000);

        speed = 1000/150; // 60 Frame per second
        opacity = 100;
        let timerId = setInterval(function() {
            opacity--;
            document.querySelector('.container-fluid.desktop').style.opacity = opacity/100;
            document.querySelector('.container-fluid.mobile').style.opacity = opacity/100;
            if (opacity == 0){
                clearInterval(timerId);
            }
        },speed);
    });
});