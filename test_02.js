createsvg();

function createsvg () {

d3.json("test.json", function(d) {

var w = 500;
var h = 500;


//svg要素を生成
var svg = d3.select("body").append("svg").attr({width:w,height:h});


//
var grp = svg.selectAll("g")    // グループを対象にする
	.data(d)
	.enter()
	.append("g")
    .attr("transform", function(d) {    // 円のX,Y座標を設定
        return "translate(" + d.LAT+ "," + d.LON + ")";
	});

 //グラフの生成
	grp.append("circle")
	.transition()
	.each("start",function(){
		d3.select(this)
		.attr({
			fill:"#333",
			r:0
		});
	})
	.attr({
		r: function(d){return d.DATE+100}
	})
	.each("end",function(){
		d3.select(this)
			.transition()
			.duration(1500)
			.attr({
				fill:"#ddd",
				r:100
	});

//テキストの生成	
	grp.append("text")
	.text(function(d){return d.DATE;})
	.style("text-anchor", "middle")
	});

})
};
