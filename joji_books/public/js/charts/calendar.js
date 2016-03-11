app.
   //camel cased directive name
   //in your HTML, this will be named as bars-chart
   directive('barsChart', function ($parse) {
     //explicitly creating a directive definition variable
     //this may look verbose but is good for clarification purposes
     //in real life you'd want to simply return the object {...}
     var directiveDefinitionObject = {
         //We restrict its use to an element
         //as usually  <bars-chart> is semantically
         //more understandable
         restrict: 'E',
         //this is important,
         //we don't want to overwrite our directive declaration
         //in the HTML mark-up
         replace: false,
         //our data source would be an array
         //passed thru chart-data attribute
         scope: {data: '=chartData'},
         link: function (scope, element, attrs) {
            var width = 960;
            var height = 136;
            var cellSize = 17; // cell size

            var percent = d3.format(".1%"),
                format = d3.time.format("%Y-%m-%d");

            var color = d3.scale.quantize()
                .domain([-.05, .05])
                .range(d3.range(11).map(function(d) { return "q" + d + "-11"; }));
           //in D3, any selection[0] contains the group
           //selection[0][0] is the DOM node
           //but we won't need that this time
           var chart = d3.select(element[0]);
           console.log(element[0]);
           //to our original directive markup bars-chart
           //we add a div with out chart stling and bind each
           //data entry to the chart

            svg = chart.selectAll("svg").data(d3.range(2000, 2005))
              .enter().append("svg")
              .attr("width", width)
              .attr("height", height)
              .attr("class", "RdYlGn")
              .append("g")
              .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

            svg.append("text")
            .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
            .style("text-anchor", "middle")
            .text(function(d) { return d; });

            var rect = svg.selectAll(".day")
              .data(function(d) { return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
              .enter().append("rect")
              .attr("class", "day")
              .attr("width", cellSize)
              .attr("height", cellSize)
              .attr("x", function(d) { return d3.time.weekOfYear(d) * cellSize; })
              .attr("y", function(d) { return d.getDay() * cellSize; })
              .datum(format);

            rect.append("title")
                .text(function(d) { return d; });

            svg.selectAll(".month")
              .data(function(d) { return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
              .enter().append("path")
              .attr("class", "month")
              .attr("d", monthPath);

                var data = d3.nest()
    .key(function(d) { return d.Date; })
    .rollup(function(d) { return (d[0].Close - d[0].Open) / d[0].Open; })
    .entries(scope.data);

  rect.filter(function(d) { return d in data; })
      .attr("class", function(d) { return "day " + color(data[d]); })
    .select("title")
      .text(function(d) { return d + ": " + percent(data[d]); });

              function monthPath(t0) {
  var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
      d0 = t0.getDay(), w0 = d3.time.weekOfYear(t0),
      d1 = t1.getDay(), w1 = d3.time.weekOfYear(t1);
  return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
      + "H" + w0 * cellSize + "V" + 7 * cellSize
      + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
      + "H" + (w1 + 1) * cellSize + "V" + 0
      + "H" + (w0 + 1) * cellSize + "Z";
}
         } 
      };
      return directiveDefinitionObject;
   });
