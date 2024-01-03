var rows=3;
var columns = 3; // since our board is 3*3
var currTile; // this is the current tile 
var otherTile;// this is the other tile
var turns =0;
var imageOrder=["1","4","6","7","2","9","8","5","3"];

window.onload=function(){
    for (let i =0;i<rows;i++){
        for(let j = 0; j<columns; j++){
            let tile = document.createElement("img");
            tile.id= i.toString+'-'+j.toString;
            tile.scr = imageOrder.shift()+".png";
            
            //drag funcationality
            tile.addEventListener("dragStart",dragStart);
            tile.addEventListener("dragOver",dragOver);
            tile.addEventListener("dragEnter",dragEnter);
            tile.addEventListener('dragLeave', dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragEnd",dragEnd);


            document.getElementById("board").append(tile);

        }


    }





}
function dragStart(){
    tile = this ;
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault()
}
function dragLeave()
{

}
function dragDrop(){
    tile=this;
}
function dragEnd(){
    let currCords =currTile.id.split("-");
    let r = parseInt(currCords[0]);
    let c = parseInt(currCords[1]);

    let otherCords = otherTile.id.split('-');
    let r2= parseInt(otherCords[0]);
    let c2 = parseInt(otherCords[1]);

    let moveLeft=r==r2&& c2 == c-1;
    let moveRight=r==r2 &&c2==c+1;
    let moveUp=c==c2&&r2==r-1;
    let moveDown = c==c2 && r2==r+1;
    
    let isAdjacent = moveDown||moveLeft||moveRight||moveUp;
    if (isAdjacent){
        let currImg=currTile.src;
        let otherImg = otherTile.src;
        currTile.src=otherImg;
        otherImg= currImg;

    }

}