$(document).ready(function(){
    $form = createForm();
    $form.submit(redirect);
    $('body').append($form);
    console.log("Yes I have been included");
});

function createForm(){
    $form = $("<form></form>");
    $form.append('<input type="text" id = "text" placeholder="Anything">');
    $form.append('<input type="submit" value="Submit">');
    return $form
}

function redirect(){
    input = $('#text').val();
    $('body').html('')
    window.location='http://127.0.0.1:8000';
}