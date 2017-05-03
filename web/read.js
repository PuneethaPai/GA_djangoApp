$(document).ready(function(){
    var form = $('#form');
    form.submit(helloThere);
    console.log("Yes I have been included");
});

function helloThere(){
    input = $('#text').val()
    $('body').html(input);
}