var onlineData = "Not assigned";
var dataToSend = "none";
function accessData(data,post)
{
  dataToSend = data;

  $(document).ready(function() {
    // Reading PHP variable
    if (!post)
    {
    $.ajax({
      url: 'variables.php',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        var onlineData = data.myVariable;
        console.log(onlineData);
      }
    });
    }

    if (post)
    {
    $.ajax({
      url: 'modify.php', // Create a separate PHP file for modifying variables
      type: 'POST',
      data: { newVariableValue: onlineData },
      success: function(response) {
        console.log(response);
      }
    });
    }
  });
}