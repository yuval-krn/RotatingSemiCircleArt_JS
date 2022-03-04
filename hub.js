function Hub(x, y, normal){
    //print("within hub");
    this.x = x;
    let permX = x;
    this.y = y;
    let permY = y;
    this.normal = normal;
    let r = random(60, 80);
    let g = random(100, 200);
    let b = random(175, 225);
    
    this.show = function(){
        if (normal){
            
            myGraph.fill(r, g, b);
            myGraph.arc(this.x, this.y, 50, 50, HALF_PI, PI);
            myGraph.fill(g, b, r);
            myGraph.arc(this.x, this.y, 50, 50, PI, PI + HALF_PI);
        } else{
            myGraph.fill(r, g, b);
            myGraph.arc(this.x, this.y, 50, 50, PI + HALF_PI, 0);
            myGraph.fill(g, b, r);
            myGraph.arc(this.x, this.y, 50, 50, 0, HALF_PI);

        }
    }

    this.upShow = function(rHold, gHold, bHold){
        if (normal){
            fill(rHold, gHold, bHold);
            arc(this.x, this.y, 50, 50, HALF_PI, PI);
            fill(gHold, bHold, rHold);
            arc(this.x, this.y, 50, 50, PI, PI + HALF_PI);
        } else{
            fill(rHold, gHold, bHold);
            arc(this.x, this.y, 50, 50, PI + HALF_PI, 0);
            fill(gHold, bHold, rHold);
            arc(this.x, this.y, 50, 50, 0, HALF_PI);

        }
    }

    this.rotShow = function(angle){
        if (normal){
            noStroke();
            fill(r, g, b);
            arc(this.x, this.y, 50, 50, HALF_PI + angle, PI + angle);
            noStroke();
            fill(g, b, r);
            arc(this.x, this.y, 50, 50, PI + angle, PI + HALF_PI + angle);
        } else{
            noStroke();
            fill(r, g, b);
            arc(this.x, this.y, 50, 50, PI + HALF_PI - angle, 0 - angle);
            noStroke();
            fill(g, b, r);
            arc(this.x, this.y, 50, 50, 0 - angle, HALF_PI - angle);
        }
    }
}