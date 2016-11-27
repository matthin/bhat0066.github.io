<script type="text/javascript">
  	function PopUp(hideOrshow) {
    if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
    else document.getElementById('ac-wrapper').removeAttribute('style');
  }
  window.onload = function () {
      setTimeout(function () {
          PopUp('show');
      });
  }
</script>
  
<script type="text/javascript">
  $(document).ready(function() {
    $('#hiddenBox').focus();
    $('#hiddenBox').val('');
    $(window).keydown(function(event){
      var command = $('#command').html();
      /* User hit backspace */
      if(event.which == 8) {
        $('#command').text(command.slice(0,-1));
        event.preventDefault();
      }
    });

    $(window).keypress(function(event){
      var command = $('#command').html();
      /* User hit enter */
      if (event.which == 13) {
        event.preventDefault();
        /* There's some command present */
        if(command.length === 0 || command === "clear" || command === "cd") {
          $('#command').text('');
          $('.output').hide();
        }else if(command === 'help'|| command === 'man'){
          $('#dynamic').html('There are lots of commands. Some of them are useful (e.g. "contact", "ls", "beer"). Most are not.');
          $('#command').text('');
          $('.output').show();
        }else if(command === 'contact'){
          $('#dynamic').html('<a href="mailto:jbhattji@gmail.com">jbhattji@gmail.com</a>');
          $('#command').text('');
          $('.output').show();
        }else if(command === 'whoami'){
          $('#dynamic').html('guest');
          $('#command').text('');
          $('.output').show();
        }else if(command === 'pwd'){
          $('#dynamic').html('home/guest');
          $('#command').text('');
          $('.output').show();
        }else if(command === 'ls'){
          $('#dynamic').html('resume/ <a href="https://github.com/bhat0066">GitHub/</a>  <a href="https://ca.linkedin.com/in/jinesh-bhatt-706830121">LinkedIn/</a>');
          $('#command').text('');
          $('.output').show();
        }else if(command === 'cd resume' || command === 'cd resume/'){
    $('#dynamic').html('Coming Soon...');
          $('#command').text('');
          $('.output').show();
        }else if(command === 'cd github' || command === 'cd github/' || command === 'cd GitHub/' || command === 'cd GitHub'){
          $('#dynamic').html('Loading ...' + '<meta http-equiv="refresh" content="1; URL=https://github.com/bhat0066"/>');
          $('#command').text('');
          $('.output').show();
        }else if(command === 'cd linkedin' || command === 'cd linkedin/' || command === 'cd LinkedIn' || command === 'cd LinkedIn/'){
    $('#dynamic').html('Loading ...' + '<meta http-equiv="refresh" content="1; URL=https://ca.linkedin.com/in/jinesh-bhatt-706830121"/>');
          $('#command').text('');
          $('.output').show();
        }else if(command === 'beer'){
          $('#dynamic').html('Loading ...' + '<meta http-equiv="refresh" content="1; URL=https://calendly.com/jbhattji"/>');
          $('#command').text('');
          $('.output').show();
        }else {
          $('#dynamic').html('Psshhhh. \'' + command + '\' isn\'t even a real command.');
          $('#command').text('');
          $('.output').show();
        }
      }
      /* User typed something */
      else {
        var input = String.fromCharCode(event.charCode);
        if(event.which > 31 && event.which < 127){
          input = input;
          $('#command').append(input);
        }
      }
    });
  });
</script>
