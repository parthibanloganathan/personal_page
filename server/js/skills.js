var o = {
    init: function(){
        this.diagram(); 
    },
    random: function(l, u){
        return Math.floor((Math.random()*(u-l+1))+l);
    },
    diagram: function(){
        var r = Raphael('diagram', 600, 600),
            // first arc radius
            rad = 38;
 
        // center circle radius
        r.circle(300, 300, 45).attr({ stroke: 'none', fill: '#193340' });
 
        var title = r.text(300, 300, 'Skills').attr({
            font: '15px Arial',
            fill: '#FFFFFF'
        }).toFront();
 
        r.customAttributes.arc = function(value, color, rad){
            var v = 3.6*value,
                alpha = v == 360 ? 359.99 : v,
                random = o.random(91, 240),
                a = (random-alpha) * Math.PI/180,
                b = random * Math.PI/180,
                sx = 300 + rad * Math.cos(b),
                sy = 300 - rad * Math.sin(b),
                x = 300 + rad * Math.cos(a),
                y = 300 - rad * Math.sin(a),
                path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
            return { path: path, stroke: color }
        }
 
        $('.get').find('.arc').each(function(i){
            var t = $(this), 
                color = t.find('.color').val(),
                value = t.find('.percent').val(),
                text = t.find('.text').text();
 
            // spacing between arcs
            rad += 25;
            // initial arc width
            var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 20 });
 
            z.mouseover(function(){
              // on hover arc width
                this.animate({ 'stroke-width': 30, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
                    this.toFront();
                title.animate({ opacity: 0 }, 200, '>', function(){
                    this.attr({ text: text }).animate({ opacity: 1 }, 500, '<');
                });
            }).mouseout(function(){
              // original arc width
                this.animate({ 'stroke-width': 20, opacity: 1 }, 1000, 'elastic');

                // fix title back to 'Skills'
                title.attr({ 'text' : 'Skills' });
            });
        });
    }
}

$(function(){ o.init(); });
