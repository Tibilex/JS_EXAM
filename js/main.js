function GetAllProducts(){
    let prodContainer = $('#prod');

    $.get("http://bipihok184-001-site1.itempurl.com/controller/AllProducts")
    .done((data) =>{
        for (const iterator of data) {
            let prodBlock = $("<div></div>", {'class': 'product__block'});
            let prodImage = $("<div></div>", {'class': 'product__image'});
            let prodImageLink = $("<a></a>", {'class': 'product__image-link'});
            let prodImg = $("<img></img>", {
                'class': 'product__img',
                src: '/img/products/'+iterator.imageUrl,
                alt: 'img'    
            });
            let block = $("<div></div>", {'class': 'block'});
            let prodName = $("<div></div>", {
                'class': 'product__name',
                text: iterator.name
            });
            let prodAvaliable = $('<div></div>',{
                'class': 'product__avaliable',
                text: 'В наличии'
            });
            let ul = $('<ul></ul>');
            let li1 = $('<li></li>', {
                text: iterator.steelGrade
            });
            let li2 = $('<li></li>', {
                text: iterator.hardness
            });
            let li3 = $('<li></li>', {
                text: iterator.lever
            });
            let prodPrice = $('<div></div>', {
                'class': 'product__price',
                text: iterator.price + ' грн'
            })
            let prodbuyBtn = $('<button></button>', {
                'class': 'product__buy',
                text: 'Купить'
            })

            ul.append(li1);
            ul.append(li2);
            ul.append(li3);
            block.append(prodName);
            block.append(prodAvaliable);
            block.append(ul);
            block.append(prodPrice);
            prodImageLink.append(prodImg);
            prodImage.append(prodImageLink);
            prodBlock.append(prodImage);
            prodBlock.append(block);
            prodBlock.append(prodbuyBtn);
            prodContainer.append(prodBlock);
        }
    });
}

GetAllProducts();

function SignIn(){
    $(".login__form").css('display', 'block');
    $(".main__container").css('filter', 'blur(5px)');
    $(".header__container").css('filter', 'blur(5px)');
}

function CloseSignIn(){
    $(".login__form").css('display', 'none');
}

function Login(){
    $("#loginForm").css('display', 'none');
    $("#userInfo").css('display', 'block');
    GetAllProducts();
}

document.addEventListener('DOMContentLoaded', (e) => {

    $('#login').click(()=>{
        SignIn();
    });

    $('#buttonLoginClose').click(() => {
        CloseSignIn();
    });

    $('#signin').click((e) => {
        e.preventDefault();
        Login();
        window.location = "./html/adminPage.html";
    });

});