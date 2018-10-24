jQuery(document).ready(function($) {
// SERVICESDƏKİ ADD BUTONU ÜÇÜN JQUERY KODLARI 

$('.modal__btn1').click(function(event) {
 $("#exampleModalServices").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
 $("body").css('overflow','hidden');
});   

$('.close').click(function(event) {
 $("#exampleModalServices").addClass('fade').css('display','none');
 $("body").css('overflow','unset');

}); 

$('.modal__cancelBtn').click(function(event) {
 $("#exampleModalServices").addClass('fade').css('display','none');
 $("body").css('overflow','unset');

}); 


$("*").click(function (event) {
  if ($(event.target).is("#exampleModalServices")) {
   $("#exampleModalServices").addClass('fade').css('display','none').removeClass('show');
   $("body").css('overflow','unset');
   return false;
 }

});


// SERVICES TITLEDAKİ ADD BUTONU ÜÇÜN JQUERY KODLARI 

$('.modal__btn2').click(function(event) {
 $("#exampleModalServicesTitle").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
 $("body").css('overflow','hidden');
});   

$('.close').click(function(event) {
 $("#exampleModalServicesTitle").addClass('fade').css('display','none');
 $("body").css('overflow','unset');

}); 

$('.modal__cancelBtn').click(function(event) {
 $("#exampleModalServicesTitle").addClass('fade').css('display','none');
 $("body").css('overflow','unset');

}); 



$("*").click(function (event) {
  if ($(event.target).is("#exampleModalServicesTitle")) {
   $("#exampleModalServicesTitle").addClass('fade').css('display','none').removeClass('show');
   $("body").css('overflow','unset');
   return false;
 }

});


  // AWARDSDAKI ADD BUTONU ÜÇÜN JQUERY KODLARI 

  $('.modal__btn3').click(function(event) {
   $("#exampleModalAwards").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
   $("body").css('overflow','hidden');
 });   

  $('.close').click(function(event) {
   $("#exampleModalAwards").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 

  $('.modal__cancelBtn').click(function(event) {
   $("#exampleModalAwards").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 


  $("*").click(function (event) {

    if ($(event.target).is("#exampleModalAwards")) {

     $("#exampleModalAwards").addClass('fade').css('display','none').removeClass('show');

     $("body").css('overflow','unset');
     return false;
   }

 });

    // PORTFOLIODAKI ADD BUTONU ÜÇÜN JQUERY KODLARI 

    $('.modal__btn4').click(function(event) {
     $("#exampleModalPortfolio").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
     $("body").css('overflow','hidden');
   });   

    $('.close').click(function(event) {
     $("#exampleModalPortfolio").addClass('fade').css('display','none');
     $("body").css('overflow','unset');

   }); 

    $('.modal__cancelBtn').click(function(event) {
     $("#exampleModalPortfolio").addClass('fade').css('display','none');
     $("body").css('overflow','unset');

   }); 


    $("*").click(function (event) {
      if ($(event.target).is("#exampleModalPortfolio")) {
       $("#exampleModalPortfolio").addClass('fade').css('display','none').removeClass('show');
       $("body").css('overflow','unset');
       return false;
     }

   });

        // PRODUCT ADD BUTONU ÜÇÜN JQUERY KODLARI 

        $('.modal__btn5').click(function(event) {
         $("#exampleModalProducts").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
         $("body").css('overflow','hidden');
       });   

        $('.close').click(function(event) {
         $("#exampleModalProducts").addClass('fade').css('display','none');
         $("body").css('overflow','unset');

       }); 

        $('.modal__cancelBtn').click(function(event) {
         $("#exampleModalProducts").addClass('fade').css('display','none');
         $("body").css('overflow','unset');

       }); 


        $("*").click(function (event) {
          if ($(event.target).is("#exampleModalProducts")) {
           $("#exampleModalProducts").addClass('fade').css('display','none').removeClass('show');
           $("body").css('overflow','unset');
           return false;
         }

       });     

   // IMG ADD BUTONU  SUCCESS ÜÇÜN JQUERY KODLARI 

   $('.imgAddBtn').click(function(event) {
     $("#exampleModalSuccess").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
     $("body").css('overflow','hidden');
   });   

   $('.close').click(function(event) {
     $("#exampleModalSuccess").addClass('fade').css('display','none');
     $("body").css('overflow','unset');

   }); 

   $('.modal__cancelBtn').click(function(event) {
     $("#exampleModalSuccess").addClass('fade').css('display','none');
     $("body").css('overflow','unset');

   }); 


   $("*").click(function (event) {
    if ($(event.target).is("#exampleModalSuccess")) {
     $("#exampleModalSuccess").addClass('fade').css('display','none').removeClass('show');
     $("body").css('overflow','unset');
     return false;
   }

 });


   // ACCEPT BUTONU  SUCCESS ÜÇÜN JQUERY KODLARI 

   $('.accept').click(function(event) {
     $("#accept").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
     $("body").css('overflow','hidden');
   });   

   $('.close').click(function(event) {
     $("#accept").addClass('fade').css('display','none');
     $("body").css('overflow','unset');

   }); 

   $('.modal__cancelBtn').click(function(event) {
     $("#accept").addClass('fade').css('display','none');
     $("body").css('overflow','unset');

   }); 


   $("*").click(function (event) {
    if ($(event.target).is("#accept")) {
     $("#accept").addClass('fade').css('display','none').removeClass('show');
     $("body").css('overflow','unset');
     return false;
   }

 });

      // REJECT BUTONU  SUCCESS ÜÇÜN JQUERY KODLARI 

      $('.reject').click(function(event) {
       $("#reject").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
       $("body").css('overflow','hidden');
     });   

      $('.close').click(function(event) {
       $("#reject").addClass('fade').css('display','none');
       $("body").css('overflow','unset');

     }); 

      $('.modal__cancelBtn').click(function(event) {
       $("#reject").addClass('fade').css('display','none');
       $("body").css('overflow','unset');

     }); 


      $("*").click(function (event) {
        if ($(event.target).is("#reject")) {
         $("#reject").addClass('fade').css('display','none').removeClass('show');
         $("body").css('overflow','unset');
         return false;
       }

     });


      $('.homeCarousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsiveClass:false,
        responsive:{
          0:{
            items:1,


          },
          600:{
            items:9,


          },
          1000:{
            items:9,

          }
        }
      })


      $('.proposalBox__proposalLink').click(function(event) {
       $("#proposalBox").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
       $("body").css('overflow','hidden');
     });   

      $('.close').click(function(event) {
       $("#proposalBox").addClass('fade').css('display','none');
       $("body").css('overflow','unset');

     }); 

      $('.modal__cancelBtn').click(function(event) {
       $("#proposalBox").addClass('fade').css('display','none');
       $("body").css('overflow','unset');

     }); 


      $("*").click(function (event) {
        if ($(event.target).is("#proposalBox")) {
         $("#proposalBox").addClass('fade').css('display','none').removeClass('show');
         $("body").css('overflow','unset');
         return false;
       }

     });

//Post a tender button modal

$('.postTenderBox__applyLink').click(function(event) {
 $("#postTenderBox__applyLink").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
 $("body").css('overflow','hidden');
});   

$('.close').click(function(event) {
 $("#postTenderBox__applyLink").addClass('fade').css('display','none');
 $("body").css('overflow','unset');

}); 

$('.modal__cancelBtn').click(function(event) {
 $("#postTenderBox__applyLink").addClass('fade').css('display','none');
 $("body").css('overflow','unset');

}); 


$("*").click(function (event) {
  if ($(event.target).is("#postTenderBox__applyLink")) {
   $("#postTenderBox__applyLink").addClass('fade').css('display','none').removeClass('show');
   $("body").css('overflow','unset');
   return false;
 }

});


 //Send Tender  button modal

 $('.sendTender').click(function(event) {
   $("#sendTender").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
   $("body").css('overflow','hidden');
 });   

 $('.close').click(function(event) {
   $("#sendTender").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 

 $('.modal__cancelBtn').click(function(event) {
   $("#sendTender").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 


 $("*").click(function (event) {
  if ($(event.target).is("#sendTender")) {
   $("#sendTender").addClass('fade').css('display','none').removeClass('show');
   $("body").css('overflow','unset');
   return false;
 }

});


 //Confirm  button modal

 $('.confirm').click(function(event) {
   $("#sendTender").addClass('fade').css('display','none');
   $("#confirm").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
   $("body").css('overflow','hidden');
 });   

 $('.close').click(function(event) {
   $("#confirm").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 

 $('.modal__cancelBtn').click(function(event) {
   $("#confirm").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 


 $("*").click(function (event) {
  if ($(event.target).is("#confirm")) {
   $("#confirm").addClass('fade').css('display','none').removeClass('show');
   $("body").css('overflow','unset');
   return false;
 }

});


 //reactivate Tender  button modal

 $('.reactivateTender').click(function(event) {
   $("#reactivateTender").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
   $("body").css('overflow','hidden');
 });   

 $('.close').click(function(event) {
   $("#reactivateTender").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 

 $('.reactivateCancel').click(function(event) {
   $("#reactivateTender").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 


 $("*").click(function (event) {
  if ($(event.target).is("#reactivateTender")) {
   $("#reactivateTender").addClass('fade').css('display','none').removeClass('show');
   $("body").css('overflow','unset');
   return false;
 }

});


 //Reactivate Confirm  button modal

 $('.reactivateConfirm').click(function(event) {
   $("#reactivateTender").addClass('fade').css('display','none');
   $("#reactivateConfirm").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
   $("body").css('overflow','hidden');
 });   

 $('.close').click(function(event) {
   $("#reactivateConfirm").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 

 $('.modal__cancelBtn').click(function(event) {
   $("#reactivateConfirm").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 


 $("*").click(function (event) {
  if ($(event.target).is("#reactivateConfirm")) {
   $("#reactivateConfirm").addClass('fade').css('display','none').removeClass('show');
   $("body").css('overflow','unset');
   return false;
 }

});

 //Recommend   modal

 $('.recommend').click(function(event) {
   $("#recommend").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
   $("body").css('overflow','hidden');
 });   

 $('.close').click(function(event) {
   $("#recommend").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 

 $('.recommendCancel').click(function(event) {
   $("#recommend").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 


 $("*").click(function (event) {
  if ($(event.target).is("#recommend")) {
   $("#recommend").addClass('fade').css('display','none').removeClass('show');
   $("body").css('overflow','unset');
   return false;
 }

});
 
 //sendInvitationBtn   modal

 $('.sendInvitationBtn').click(function(event) {
   $("#sendInvitationModal").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
   $("body").css('overflow','hidden');
 });   

 $('.close').click(function(event) {
   $("#sendInvitationModal").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 

 $('.cancelInvitation').click(function(event) {
   $("#sendInvitationModal").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 


 $("*").click(function (event) {
  if ($(event.target).is("#sendInvitationModal")) {
   $("#sendInvitationModal").addClass('fade').css('display','none').removeClass('show');
   $("body").css('overflow','unset');
   return false;
 }

});

 //sendInvitation   modal

 $('.sendInvitation').click(function(event) {
   $("#sendInvitationModal").addClass('fade').css('display','none');
   $("#sendInvitation").addClass('show').css({'display':'block', 'background-color': 'rgba(0,0,0, .8)'});
   $("body").css('overflow','hidden');
 });   

 $('.close').click(function(event) {
   $("#sendInvitation").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 

 $('.invitationSuccess__close').click(function(event) {
   $("#sendInvitation").addClass('fade').css('display','none');
   $("body").css('overflow','unset');

 }); 


 $("*").click(function (event) {
  if ($(event.target).is("#sendInvitation")) {
   $("#sendInvitation").addClass('fade').css('display','none').removeClass('show');
   $("body").css('overflow','unset');
   return false;
 }

});

 $(".notificationBoxShow").click(function(event) {
  $(".notificationBox").slideDown(400);
});


 $(".notificationBox__btn").click(function(event) {
  $(".notificationBox").slideUp(400);
});

 $(".notificationBox__bell").click(function(event) {
  $(".notificationList").toggle(400);
  
});

$('.alertBox__close').click(function(event) {
  $('.alertBox').hide('400');
});

});


