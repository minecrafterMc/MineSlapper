console.log("script imported");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "12px Arial";
ctx.textAlign = "center";

const CanvasHeight = 2 * OutlineSize + (Rows - 1) * BorderSize + Rows * CellHeight;
const CanvasWidth = 2 * OutlineSize + (Columns - 1) * BorderSize + Columns * CellWidth;
const SpacesOnGrid = Rows * Columns;
document.getElementById("canvas").width = CanvasWidth;
document.getElementById("canvas").height = CanvasHeight;
var Board = [];
var markedBombs = 0;
var pslapped = false;
function tick()
{
  displayDiscoveredText();
}
setup();
const ticks = setInterval(tick, 1000 / TicksPerSec);
var cursor = new Cell(5,5,"black","","white","cursor",1);
cursor.drawCell();