$(document).ready(function(){
        //variables
        var iterString="";
        var div=document.createElement("div");
        //iterate 7 times and create triangle
        for(var count=0;count<7;count++){
            //add # on each iteration
            iterString += "#";
            //output current string into log
            console.log(iterString);
            //create new HTML markup and output into web page
            //div.attributes.id = "result"+count
            document.getElementById('result').innerHTML="this";
            //$document.getElementById(".result" + count).innerHTML=iterString;
        }    
})
