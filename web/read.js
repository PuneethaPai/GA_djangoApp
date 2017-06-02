var list = [];
var index = 0;
var graphData = []
var timer;

function redirect(){
    input = $('input:input').val();
    $("#form").remove()
    $("<h2> Your input is :- " + input + "</h2>").insertBefore("#output")
    if(input === ""){
        return
    }
    data = new FormData()
    data.append('input', input)
    fetch('http://puneeth.pythonanywhere.com/run/',
    {
        method : "POST",
        body : data
    })
    .then(function(result){
        return result.json()
    })
    .then(function(jsonResult){
        list = jsonResult.result;
        for(item in list){
            value = {index: +item, value: list[item][1]}
            graphData.push(value)
        }
        timer = window.setInterval(display, 115);
    })
    .catch(function(error){
        console.log(error);
    })
}

function display(){
    if(list.length === 0){
        return;
    }
    $("#output").text(list[index][0])
    index ++;
    if(index >= list.length) {
        window.clearInterval(timer);
        plotGraph()
    }
}

function plotGraph(){
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    var valueline = d3.line()
        .x(function(d) { return x(d.index); })
        .y(function(d) { return y(d.value); });

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

    window.data = graphData;
    console.log(graphData);

    x.domain([0, d3.max(graphData, function(d) { return d.index; })]);
    y.domain([0, d3.max(graphData, function(d) { return d.value; })]);

    svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr('id', 'graph')
      .attr("d", valueline);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    svg.append("g")
       .call(d3.axisLeft(y));

    svg.append("text")
        .attr("transform",
        "translate(" + (width/2) + " ," +
            (height + margin.top + 10) + ")")
        .style("text-anchor", "middle")
        .text("Generation Number");

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Fitness");


    graph = $('#graph');
    graph.css({
        'fill-opacity': 0,
        'stroke-width': '2px',
        'stroke': 'deepskyblue'
        });
}