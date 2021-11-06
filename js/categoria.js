 $(document).ready(function(){
     
     // agrega la clase se css
     $('.cate .item[category="all"]').addClass('cateitem-active')
//Filtrando productos
     $('.item').click(function(){
         var catitem = $(this).attr('category');
         $('.item').removeClass('cateitem-active');
         $(this).addClass('cateitem-active');


        $('.producit').hide();

        $('.producit[category="'+catitem+'"]').show();
     });
     //Mostrar todos los productos
     $('.item[category="all"]').click(function(){
          $('.producit').show();
     });
 });