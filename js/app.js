const title = $('#title');
const body = $('#body');
const formmm = $('.formm');
const posts = [];

// $('.creat-post').on('click' , function(event){
//     event.preventDefault();  //ba5li ma yb3at4 el data aw el y submit 8ir lma a22olo ( delete el required from html)
//     let validTitle = false;
//     let validBody = false;


//     if (title.val() === ''){
//         title.addClass("is-invalid").removeClass('is-valid'); //chain method
//     } else{
//         title.removeClass('is-invalid');
//         title.addClass('is-valid');
//         validTitle = true;
//     }


//     if (body.val() === ''){
//         body.addClass("is-invalid").removeClass('is-valid');
//     } else{
//         body.removeClass('is-invalid').addClass("is-valid");
//         validBody = true;
//     }



//     if (validTitle && validBody){
//         formmm.submit();
//     }

// });






//refactor

// $('.creat-post').on('click' , function(event){
//     event.preventDefault();

//     let validTitle = validate(title);   // tal3ly el result ll fun w ba3di qarin fe el validate
//     let validBody = validate(body);

//     if (validTitle && validBody){
//         formmm.submit();
//     }
// });

// function validate(input){
//     if (input.val() === ''){
//         input.addClass("is-invalid").removeClass('is-valid'); //chain method
//         return false;
//     } else{
//         input.removeClass('is-invalid');
//         input.addClass('is-valid');
//         return true;
//     }
// }








//refactor

$('.creat-post').on('click' , function(event){
    const self = $(this);
    event.preventDefault();

    let validTitle = validate(title);   // tal3ly el result ll fun w ba3di qarin fe el validate
    let validBody = validate(body);

    if (validTitle && validBody){
        self.attr('disabled',true);
        self.html('Loading . . . <i class="fas fa-spinner fa-spin"></i>');
        let post = {title: title.val() , body: body.val()};
        let postes = JSON.parse(localStorage.getItem('posts'));
        if (postes !== null){
            postes.push(post)
            localStorage.setItem('posts' , JSON.stringify(postes));
        }
        else{
            localStorage.setItem('posts' , JSON.stringify([post]));
        }
        // formmm.submit();


            $('.alert').removeClass('d-none').addClass('d-block');
            setTimeout(function (){
                title.val('');
                body.val('');
                title.removeClass('is-invalid').removeClass('is-valid');
                body.removeClass('is-invalid').removeClass('is-valid');
        
                self.attr('disabled' , false);
                self.html('Creat Post');
                $('.alert').removeClass('d-block').addClass('d-none');
            } , 2500);
    }
});

function validate(input){
    if (input.val() === ''){
        input.addClass("is-invalid").removeClass('is-valid'); //chain method
        return false;
    }

    input.removeClass('is-invalid').addClass('is-valid'); // lo shilto m4 hai3mlk 3lamet el valid
    return true;

    }

