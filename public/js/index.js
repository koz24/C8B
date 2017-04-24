$(document).ready(function() {

  $('.containerBubble').click(function() {
    $(this).addClass('open');
  });


  $('#formBubbleInput').on('submit', function() {

    var this1 = $(this),
      action = this1.attr('action'),
      method = this1.attr('method'),
      data = {};

    this1.find('[name]').each(function(index, value) {

      var this1 = $(this),
        name = this1.attr('name'),
        value = this1.val();

      data[name] = value;

    });

    $.ajax({
      url: '/',
      type: 'POST',
      data: data,
      success: function(res) {
        console.log(data['phone']);
        successMotion();
        if (validator.isMobilePhone(data['phone'], 'en-AU')) {
          setTimeout(function() {
            $('.containerBubble').removeClass('open');
          }, 2000);
        } else {console.log('wrong phone')}
      }
    });

    return false;

  });

  function successMotion() {

    $('#svgSuccessCircle').fadeIn(500);
    $('#svgTick').fadeIn(500);

    Moveit.put(svgSuccessCircle, {
      start: '0%',
      end: '0%'
    });

    Moveit.animate(svgSuccessCircle, {
      start: '0%',
      end: '100%',
      duration: 1,
      delay: 0,
      timing: 'ease-in-out',
    });

    Moveit.put(svgTick, {
      start: '0%',
      end: '0%'
    });

    Moveit.animate(svgTick, {
      start: '0%',
      end: '100%',
      duration: 1,
      delay: 0,
      timing: 'ease-in-out',
    });

  }

  

 /*
  function errorMotion() {

    Moveit.put(svgErrorCircle, {
      start: '0%',
      end: '0%'
    });

    Moveit.animate(svgErrorCircle, {
      start: '0%',
      end: '100%',
      duration: 4,
      delay: 0,
      timing: 'ease-in-out'
    });

    Moveit.put(svgX, {
      start: '0%',
      end: '0%'
    });

    Moveit.animate(svgX, {
      start: '0%',
      end: '100%',
      duration: 4,
      delay: 0,
      timing: 'ease-in-out',
    });

    Moveit.put(svgX2, {
      start: '0%',
      end: '0%'
    });

    Moveit.animate(svgX2, {
      start: '0%',
      end: '100%',
      duration: 4,
      delay: 0,
      timing: 'ease-in-out',
    });

  }*/



  //errorMotion();

});
