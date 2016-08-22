console.log(countChar("BAGJSBKMBb",'B'));

////Chapter 2////
function countChar(a, b)
{
    var result=0;
    for(var i1=0;i1<a.length;i1++)
        if(a.charAt(i1)==b) result++;
    return result;
}

function countBs(a)
{
    var result=0;
    for(var i1=0;i1<a.length;i1++)
        if(a.charAt(i1)=='B') result++;
    return result;
}


function even(a)
{
    a=Math.abs(a);
    if(a==0) return true;
    else if(a==1) return false;
    else return even(a-2);
}


function min(a, b)
{
    
    if(a>b) return b;
    else if(b>a) return a;
    else return "equal";
}
////Chapter 1////
function loopTri()
{
/////////////////////////
////Looping triangle////
///////////////////////
    //variables
    var iterString="";
    //iterate 7 times and create triangle
    for(var count=0;count<7;count++){
        //add # on each iteration
        iterString += "#";
        //output current string into log
        console.log(iterString);
        //$document.getElementById(".result" + count).innerHTML=iterString;
    }
}

function fizzBuzz(){
/////////////////////////
//////FizzBuzz//////////
///////////////////////
    //variables
    var outResult = "";
    var nr = 1;
    //iterating loop
    while(nr<101){
        if((nr%3==0) && (nr%5==0)) outResult="FizzBuzz";
        else if(nr%3==0) outResult="Fizz";
        else if(nr%5==0) outResult="Buzz";
        else outResult=nr;
        nr++;
        console.log(outResult);
    }
}


function chessBoard(sz){
/////////////////////////
//////Chess Board//////////
///////////////////////
    var outResult="";
    //iterating loop
    for(var i1=0;i1<sz;i1++)
        {
            outResult="";
            for(var i2=0;i2<sz;i2++)
                {
                    if(i1%2==0)
                        if(i2%2==0) outResult+="#";
                        else outResult+=" ";
                    else
                        if(i2%2==0) outResult+=" ";
                        else outResult+="#"; 
                }
            console.log(outResult);
            console.log("\n");
        }
}