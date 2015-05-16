
var dateset = [
                  [  50,  200 ,33],
                  [ 480,   90 ,4],
                  [ 250,  500 ,13],
                  [ 475,   44 ,1],
                  [ 250,  670 ,87],
                  [  85,   41 ,12],
                  [ 220,  880 ,35]
              ];



var w = 1000;
var h = 1000;

//svg要素を生成
var svg = d3.select("body").append("svg").attr({width:w,height:h});

//グラフの生成
	svg.selectAll('circle')
	.data(dateset)
	.enter()
	.append("circle")
	.attr({
		cx:function(d){return d[0]},
		cy:function(d){return d[1]},
		r:0,
		fill: "orange"
	})
	.transition()
	.duration(1500)
	.attr({
		r: function(d){
			if(d[2]<=5){
				return d[2]+10;
			}
			else{
				return d[2];
			}},
		opacity: 0.6
	});

//テキストの生成
	svg.selectAll('text')
	.data(dateset)
	.enter()
	.append("text")
	.attr({
 		"transform": function(d) { return "translate(" + arc.centroid(d) + ")"; },
		'fill': "#6495ED",
		'text-anchor': "middle",
		'font-size':"0px"
	})
	.text (function(d,i){return d[2];})
	.transition()
	.duration(2000)
	.attr('font-size',function(d,i){return(d[2]) +10+ "px";});

	