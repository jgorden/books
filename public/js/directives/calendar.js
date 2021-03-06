app.directive('dateChart', function ($parse) {

  var directiveDefinitionObject = {
    restrict: 'E',
    replace: false,
    scope: {data: '=chartData', range:'=range'},
    link: function (scope, element, attrs) {
      // Timeout necessary for html to load first
      setTimeout(function(){

        var width = $('#footer').outerWidth() -30;
            height = width / 7 + 50,
            cellSize = (height - 50)/ 8; // cell size
        var data = scope.data;
        var day = d3.time.format("%w"),
          week = d3.time.format("%U"),
          percent = d3.format(".1%"),
          format = d3.time.format("%Y-%m-%d");

        var color = d3.scale.category10();
        var dateParse = d3.time.format("%b/%d/%Y");

        // selecting tag as element, creating chart structure
        var svg = d3.select(element[0]).selectAll("svg")
          .data(d3.range(scope.range.start, scope.range.finish))
          .enter().append("svg")
          .attr("width", width)
          .attr("height", height)
          .attr("class", "RdYlGn")
          .append("g")
          .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - 50 - cellSize * 7 - 1) + ")");

        // year label
        svg.append("text")
          .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
          .style("text-anchor", "middle")
          .text(function(d) { return d; });

        // filling in the days
        var rect = svg.selectAll(".day")
          .data(function(d) { return d3.time.days(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
          .enter().append("rect")
          .attr("class", "day")
          .attr("width", cellSize)
          .attr("height", cellSize)
          .attr("x", function(d) { return week(d) * cellSize; })
          .attr("y", function(d) { return day(d) * cellSize; })
          .datum(format);

        rect.append("title")
          .text(function(d) { return d; });

        svg.selectAll(".month")
          .data(function(d) { return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
          .enter().append("path")
          .attr("class", "month")
          .attr("d", monthPath);


        var month_name = d3.time.format("%b")

        svg.selectAll("text.month")
          .data(function(d) { return d3.time.months(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
          .enter().insert("text", "text.month")
          .attr("class", "month small")
          .attr("x", function(d) { return week(d) * cellSize+15; })
          .attr("y", 8 * cellSize)
          .text(month_name);

        // data formatting
        data.forEach(function(d) {
          d.dd = format(d.date);
        });

        var nest = d3.nest()
          .key(function(d) { return d.dd; })
          .map(data);

        color.domain(d3.set(data.map(function(d) { return d.value; })).values());
        // color in selected dates from data
        rect.filter(function(d) { return d in nest })
          .attr("class", function(d) { return "day"; })
          .style("fill", function(d) { return color(nest[d][0].value); })
          .select("title")


        function monthPath(t0) {
          var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
            d0 = +day(t0), w0 = +week(t0),
            d1 = +day(t1), w1 = +week(t1);
          return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
                  + "H" + w0 * cellSize + "V" + 7 * cellSize
                  + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
                  + "H" + (w1 + 1) * cellSize + "V" + 0
                  + "H" + (w0 + 1) * cellSize + "Z";
        }
        
        function resize() {
        
          var width = $('#footer').outerWidth() -30;
            height = width / 7 + 50,
            cellSize = (height - 50)/ 8; // cell size

          svg.attr("width", width)
            .attr("height", height);

          svg.selectAll(".RdYlGn")
            .attr("transform", function(d, i) {
              return "translate(" + ((width - cellSize * 53) / 2) + "," + (((height - 50) - cellSize * 7 - 1) + (height * i)) + ")";
            });
          
          svg.selectAll(".month").attr("d", monthPath);
        
          svg.selectAll(".day")
            .attr("width", cellSize)
            .attr("height", cellSize)
            .attr("x", function(d) {
              d = format.parse(d);
              return week(d) * cellSize;
            })
            .attr("y", function(d) {
              d = format.parse(d);
              return day(d) * cellSize;
            });
            
          svg.selectAll("text.month")
            .attr("x", function(d) { return week(d) * cellSize+15; })
            .attr("y", 8 * cellSize);

        };

        d3.select(window).on('resize', resize);
      },0)
    } 
  };
  return directiveDefinitionObject;
});
