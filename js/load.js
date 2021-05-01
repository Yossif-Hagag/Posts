$(document).ready(function(){ //hena b2olo y5o4 3la el saf7a [html , css] el a2ol w ba3din y load mogard ta2min 


    var posts = JSON.parse(localStorage.getItem('posts'));
    loadPosts();



    function loadPosts(){

        
        // for (const post in posts) {    // post is a const index by js 7ta la astati3 el ta8iir fe value bta3t el post 0,1,2,..
        //     console.log(posts[post]);}
            
        for (const [index ,post] of posts.entries()) {    // of btgibly el eliment nafso , in btgibly el index el etnin fe ES6 version
            console.log(index , post);

            let posttTemplate = 
            //back tec di btti7 lk aktr mn line 3ks el '' "" , hoa mogard string // ${} di tri2t 3ard el var fe el html(template) in ES6 version
            ` 
            <div class="row" data-id="${index}">  <!-- data- aktb ai 7aga , da fe el html w bista5dam 8alban m3 el js -->
                <div class="col-md-2"></div>
                <div class="col-md-8 col-sm-12">
                        <div class="card mt-5">
                                <div class="card-header d-flex justify-content-between">${post.title}
                                <!-- &times; or --> 
                                <button class="btn btn-danger btn-sm delet-post"><i class="fas fa-trash"></i></button>
                                </div>
                                <div class="card-body">${post.body}</div>
                        </div>
                
                </div>
            </div>
            `;
        
        
            $("#load-posts").prepend(posttTemplate); //bi append bs a5r 7aga tb2a mn fo2
        }

    }





    $('.delet-post').on('click',function(){
        console.log($(this).parents('.row')); //parentes() --> ely ana 3aizo yo2af 3ando
        $(this).parents('.row').slideUp(700 , function(){


            posts.splice($(this).data('id') , 1); 
            //splice btms7 aw abadl 7aga b 7aga (el mkan elly hatbtdi tmsa7 mn 3ando , 3dd elly haitms7o , adi obj abdelo mkan elly 3aiz ams7o)
            $(this).remove();  //34an ams7 el div b3dha 34an bikon mogod w bib2a display none

            localStorage.setItem('posts' , JSON.stringify(posts));
        });




    });





});