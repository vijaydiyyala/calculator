function display(value){
    document.getElementById("textarea").value+=value
   

}
function calculate(){
   var ans=document.getElementById("textarea").value
   var result= eval(ans)
   document.getElementById("textarea").value=result
}
function clr()
{
    document.getElementById("textarea").value=" "
}