new fullpage('#fullpage', {  
    // get one from 
    // https://alvarotrigo.com/fullPage/pricing/
    licenseKey: 'YOUR KEY HERE',
  
    navigation: true,
    sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c', '#fec401'],
  });

  
$(function() {
  $('.luminaire:nth-child(2n)').addClass('on');
  $('.luminaire').on('click', function() {
    $(this).toggleClass('on');
  });
}); 

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
