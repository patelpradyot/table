
function get_random_color() {
    function c() {
      var hex = Math.floor(Math.random()*256).toString(16);
      return ("0"+String(hex)).substr(-2); // pad with zero
    }
    return "#"+c()+c()+c();
  }
 function tabulate(table,val)
 {
 for(let i=1;i<=10;i++)
 {
     
     table.innerHTML=table.innerHTML+val*i+" ";
     table.style.color =get_random_color();
    table.style.fontSize=(val*10) + 'px';;
     document.body.appendChild(table);
     
 }
}
function table1(val)
{
    let  table =document.createElement('div');
    tabulate(table,val);

   


}

for(let val=2;val<=10;val++)
{
    setTimeout(table1(val),val*5000);
}
 