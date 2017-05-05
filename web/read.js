function redirect(){
    input = $('#text').val();
    fetch('http://puneeth.pythonanywhere.com/')
    .then(function(result){
        return result.json()
    })
    .then(function(jsonResult){
        $('h1').remove();
        $('#form').remove();
        $('body').append((jsonResult.list).toString())
        console.log(jsonResult.list);
    })
    .catch(function(error){
        console.log(error);
    })
}