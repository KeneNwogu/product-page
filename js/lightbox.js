let thumb_nails = document.querySelectorAll('.thumbnail');
let large_image = document.querySelector('.large-image>img');
let current_image_index = 0;
let carousel_images = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg']
let prev = document.querySelector('.previous');
let next = document.querySelector('.next');

prev.addEventListener('click', () =>  {slideImage(-1)});
next.addEventListener('click', () =>  {slideImage(1)});

thumb_nails.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('active');
        current_image_index = Array.from(thumb_nails).indexOf(element);
        thumb_nails.forEach(e => {
            if(e != element) e.classList.remove('active');
        })
        changeImage(element);
    })
});

changeImage = function(element){
    let url = element.getAttribute('src');
    console.log(url.split('-'));
    let image_url = url.split('-').slice(0, -1).join('-') + '.jpg';
    console.log(image_url)
    large_image.setAttribute('src', image_url);
}

slideImage = function(value){
    let length = carousel_images.length - 1
    if(value < 0){
        if(current_image_index <= 0){
            current_image_index = carousel_images.length - 1;
        }
        else{
            current_image_index += value
        }
    }
    
    if(value > 0){
        if(current_image_index >= length){
            current_image_index = 0;
        }
        else{
            current_image_index += value
        }
    }
    

    let image_url = carousel_images[current_image_index];
    large_image.setAttribute('src', image_url);

    changeActiveClass();
    console.log(current_image_index)
}

changeActiveClass = function(){
    let current_image = carousel_images[current_image_index];
    thumb_nails.forEach(element => {
        let url = element.getAttribute('src');
        let image_url = url.split('-').slice(0, -1).join('-') + '.jpg';
        if(image_url == current_image){
            element.classList.add('active');
            thumb_nails.forEach(e => {
                // if index of e is not current index
                if(Array.from(thumb_nails).indexOf(e) != current_image_index) e.classList.remove('active');
            })
        }
    })
}
