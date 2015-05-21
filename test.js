d3.json("d.json", function(error,d) {

var w = 1000;
var h = 1000;


//svg要素を生成
var svg = d3.select("body").append("svg").attr({width:w,height:h});

 //グラフの生成
	svg.selectAll('circle')
	.data(d)
	.enter()
	.append("circle")
	.attr({
		cx:function(d){return d.LAT},
		cy:function(d){return d.LAT},
		r:0,
		fill: "orange"
	})
	.transition()
	.duration(1500)
	.attr({
		r: function(d)
			if(d.DATE<=5){
				return d.DATE+10;
			}
			else{
				return d.DATE;
			},
		opacity: 0.6
	});

//テキストの生成
	svg.selectAll('text')
	.data(d)
	.enter()
	.append("text")
	.attr({
// 		"transform": function(d) { return "translate(" + arc.centroid(d) + ")"; },
		'fill': "#6495ED",
		'text-anchor': "middle",
		'font-size':"0px"
	})
	.text (function(d,i){return d.DATE;})
	.transition()
	.duration(2000)
	.attr('font-size',function(d,i){return(d.DATE) +10+ "px";});



});