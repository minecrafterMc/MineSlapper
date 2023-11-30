console.log("classes imported");
class Cell
{
  constructor(x,y,color,text,textColor,CellType,id)
  //id should only be used with cells of "empty" type
  {
    //bx and by stand for "board x/y" 
    //it stores the cell's x and y values
    //relative to the board not in pixels
    //also bp stands for "board position"
    this.bx = x;
    this.by = y;
    this.x = OutlineSize + (x - 1) * CellWidth + (x - 1) * BorderSize;
    this.y = OutlineSize + (y - 1) * CellHeight + (y - 1) * BorderSize;
    this.bp = x * 1 + (y - 1) * Columns;
    if (CellType != "empty")
    {
    this.color = color;
    this.text = text;
    this.CellType = CellType;
    this.textColor = textColor;
    this.textSize = CellWidth / text.length;
    }
    else 
    {
      this.color = BackgroundColor;
      this.text = text;
      this.CellType = "empty";
      this.textColor = "darkred";
      this.textSize = CellWidth / text.length;
      this.id = id;
      this.bomb = false;
      this.marked = false;
      this.slapped = false;
    }
  }
  drawCell()
  {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,CellWidth,CellHeight);
    if (this.CellType == "cursor")
    {
      ctx.fillStyle = Board[this.bp].color;
      ctx.fillRect(this.x + CellWidth / 4,this.y + CellWidth / 4,CellWidth/2,CellHeight/2);
    }
  }
  drawText()
  {
    ctx.fillStyle = this.textColor;
    ctx.font = this.textSize + "px Arial";
    ctx.fillText(this.text, this.x + CellWidth / 3, this.y + CellHeight /1.2);
  }
  move(x,y)
  {
    if (this.bx + x <= Columns && this.bx + x != 0 && this.by + y <= Rows && this.by + y != 0)
    {
    let ocolor = this.color;
    let otcolor = this.textColor;
    this.color = Board[this.bp].color;
    this.drawCell();
    this.color = ocolor;
    this.textColor = otcolor;
    this.bx += x;
    this.by += y;
    this.bp += x * 1 + y * Columns;
    this.x = OutlineSize + (this.bx - 1) * CellWidth + (this.bx - 1) * BorderSize;
    this.y = OutlineSize + (this.by - 1) * CellHeight + (this.by - 1) * BorderSize;
    this.drawCell();
    this.drawText();
    }
  }
    tp(x,y)
    {
      let ocolor = this.color;
      this.color = Board[this.bp].color;
      this.drawCell();
      this.color = ocolor;
      this.bx = x;
      this.by = y;
      this.bp = x * 1 + (y - 1) * Columns;
      this.x = OutlineSize + (this.bx - 1) * CellWidth + (this.bx - 1) * BorderSize;
      this.y = OutlineSize + (this.by - 1) * CellHeight + (this.by - 1) * BorderSize;
      this.drawCell();
      this.drawText();
    }
    changetype(to)
    {
      this.type = to;
    }
  }
function setup()
{
    let i = OutlineSize + CellWidth;
    let a = 1;
    let x = 1;
    let y = 1;
    ctx.fillStyle = OutlineColor;
    ctx.fillRect(0,0,CanvasWidth, CanvasHeight);
    ctx.fillStyle = BackgroundColor;
    ctx.fillRect(OutlineSize, OutlineSize, CanvasWidth - OutlineSize * 2,CanvasHeight - (OutlineSize * 2));
    ctx.fillStyle = BorderColor;
    while (a != Columns)
    {
        ctx.fillRect(i, OutlineSize, BorderSize, CanvasHeight - (OutlineSize * 2));
        i += CellWidth + BorderSize;
        a += 1;
    }
        i = OutlineSize + CellHeight;
        a = 1;
        while (a != Rows)
    {
        ctx.fillRect(OutlineSize, i, CanvasWidth - (OutlineSize * 2),BorderSize);
        i += CellHeight + BorderSize;
        a += 1;
    }
    i = 1;
    while (i != SpacesOnGrid + 1)
    {
      Board[i] = new Cell(x,y,BackgroundColor,i,"white","empty",i);
      Board[i].drawCell();
      if (dev)
      {
      Board[i].drawText();
      }
      if (x == Columns)
      {
        x = 1;
        y += 1;
      }
      else 
      {
        x += 1;
      }
      i += 1;
      
    }
}
function slap(id)
{
  if (!Board[id].slapped)
  {
    Board[id].slapped = true;
    Board[id].color = "white";
    Board[id].drawCell();
    cursor.drawCell();
    checkAround(id);
  }
}
function checkAround(id)
{
  let i = 1;
  let a = 0;
  let pos = Board[id].bp - 1 - Columns;
  let b = 1;
  while (i != 9)
  {
    if (Board[pos].bomb)
    {
      a += 1;
    }
    i += 1;
    b += 1;
    pos += 1;
    if (b == 4)
    {
      b = 1;
      pos = pos + Columns - 3;
    }
  }
  Board[id].text = a;
  Board[id].drawText();
}
function displayDiscoveredText()
{
  let i = 1;
  while(i != SpacesOnGrid)
  {
    
  }
}