function redirect(){
    input = $('input:input').val()
    if(input === ""){
        return
    }
    data = new FormData()
    data.append('input', input)
    fetch('http://127.0.0.1:8000/run/',
    {
        method : "POST",
        body : data
    }
    )
    .then(function(result){
        console.log(result.)
        return result.json()
    })
    .then(function(jsonResult){
        console.log(jsonResult.list);
    })
    .catch(function(error){
        console.log(error);
    })
}