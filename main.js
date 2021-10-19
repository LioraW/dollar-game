// document.addEventListener('contextmenu', event => event.preventDefault());

function preload()
{
    //background_music = loadSound("./songs/Mario Bros -Remix(Chill Trap)_128k.ogg");
    //thwomp = loadSound("./songs/Super Mario 64 Thwomp Sound_128k.ogg")
}

function setup()
{
    createCanvas(window.innerWidth,window.innerHeight);
    window.addEventListener('resize', function(){ resizeCanvas(window.innerWidth,window.innerHeight)} );
    frameRate(60);
    angleMode(DEGREES); 
    //background_music.setVolume(0.02);
    //background_music.loop()
  

    node_bill = new Node(1,-9,400,400);
    node_bob = new Node(2, 12, 500, 500); 
    node_bill.add_connection(node_bob);
    node_bob.add_connection(node_bill);

    edge_jerry = new Edge(node_bill, node_bob);
    my_graph = new Graph(20, 2, false, 10)
    my_graph.populate_nodes();
    my_graph.populate_edges();
    
}

{
    var keyInput = [];  
    // key typed  
    {
    var keyFull = [];
    }
    keyPressed = function () {keyInput[keyCode] = true;};
    keyReleased = function () {keyInput[keyCode] = false;};
  
    keyTyped = function () {
        keyFull[keyCode] = true;
    };
} // key functions

function draw() 
{
    push();
    background(255, 255, 255);
    fill(255,0,0);
    
    my_graph.draw();

    text(displayWidth + " " + displayHeight, 100, 100);
    

    mouseReset();
    translate(width/2, height/2);
    scale(1);
    pop();
}





