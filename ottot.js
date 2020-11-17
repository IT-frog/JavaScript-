for (var i = 0; i < a; i++) {               
    for (var j = 0; j < Math.ceil(a/2); j++) {
     j >= Math.abs(i+1-Math.ceil(a/2)) ? document.write("&nbsp; * ") : document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");                   
       }
 document.write("<br/>");
}