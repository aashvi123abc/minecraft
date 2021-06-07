var canvas= new fabric.Canvas("mycanvas");

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
    });
    canvas.add(player_object);
});
}

function newimage(get_image) {
    fabric.Image.fromURL(get_image,function (Img) {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
    });
    canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",keys);
function keys(e) {
    keypressed=e.keyCode;
    console.log(keypressed);
    if (e.shiftKey==true && keypressed=="80") {
        console.log("P and shift key pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("currentwidth").innerHTML=block_image_width;
        document.getElementById("currentheight").innerHTML=block_image_height;   

    }
    if (e.shiftKey==true && keypressed=="77") {
        console.log("M and shift key pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("currentwidth").innerHTML=block_image_width;
        document.getElementById("currentheight").innerHTML=block_image_height;   
        
    }
    if (keypressed=="38") {
        up();
        console.log("up");
    }
    if (keypressed=="40") {
        down();
        console.log("down");
    }
    if (keypressed=="37") {
        left();
        console.log("left");
    }
    if (keypressed=="39") {
        right();
        console.log("right");
    }
    if (keypressed=="87") {
        newimage("wall.jpg");
        console.log("w");
    }
    if (keypressed=="71") {
        newimage("ground.png");
        console.log("g");
    }
    if (keypressed=="76") {
        newimage("light_green.png");
        console.log("l");
    }
    if (keypressed=="84") {
        newimage("trunk.jpg");
        console.log("t");
    }
    if (keypressed=="82") {
        newimage("roof.jpg");
        console.log("r");
    }
    if (keypressed=="89") {
        newimage("yellow_wall.png");
        console.log("y");
    }
    if (keypressed=="68") {
        newimage("dark_green.png");
        console.log("d");
    }
    if (keypressed=="85") {
        newimage("unique.png");
        console.log("u");
    }
    if (keypressed=="67") {
        newimage("cloud.jpg");
        console.log("c");
    }
}

function down() {
    if (player_y<=500) {
        player_y=player_y+block_image_height;
        console.log("block_image_height="+block_image_height);
        console.log("when down arrow is pressed,X="+player_x+" , Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function up() {
    if (player_y>=0) {
        player_y=player_y-block_image_height;
        console.log("block_image_height="+block_image_height);
        console.log("when up arrow is pressed,X="+player_x+" , Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x>0) {
        player_x=player_x-block_image_width;
        console.log("block_image_width="+block_image_width);
        console.log("when left arrow is pressed,X="+player_x+" , Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x<=950) {
        player_x=player_x+block_image_width;
        console.log("block_image_width="+block_image_width);
        console.log("when down arrow is pressed,X="+player_x+" , Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}