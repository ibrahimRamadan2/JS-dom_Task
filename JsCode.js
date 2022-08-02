/*
head 
    nav 
        div1 HIMA 
        div2 list 
*/
// --------------------------------------------- create the Header ------------------------------------------------------------

function get_li(name){
    let text = document.createTextNode(name);
    let _li = document.createElement("li") ;
    _li.appendChild(text);
    _li.style.cssText="margin:20px; font-family: sans-serif; font-size: 22px; color :rgb(145, 145, 139);";
     
    return _li;
}
let _head = document.createElement("header"); 
let div1 = document.createElement("div");  // store the logo 
let p1=  document.createElement("p"); 
let tetxNode = document.createTextNode("Hima"); 
p1.appendChild(tetxNode) ;

div1.appendChild(p1) ;
div1.style.cssText=" font-family: sans-serif; font-size:30px ; color : rgb(42, 142, 120); font-weight: bold";

// div2 
let div2 = document.createElement("div"); //  list in navbar
let _list = document.createElement("ul") ;
_list.appendChild(get_li("Home")); 
_list.appendChild(get_li("About")); 
_list.appendChild(get_li("Service")); 
_list.appendChild(get_li("Contact")); 
_list.style.cssText="list-style-type:none";
_list.style.display="flex" ;
div2.appendChild(_list);
div2.style.marginLeft="1350px";
// collect head 
_head.appendChild(div1) ;
_head.appendChild(div2) ;
_head.style.display="flex"; 
document.body.appendChild(_head);


/// ---------------------------------------------------- craete body ------------------------------------------------- 

 let _body = document.createElement("div") ;  // store all the element of the content 
 _body.style.cssText=" height: 710px;width: 1910px ; background-color:rgb(236, 236, 236);";
 
 function get_card(number){ // this function will return a div with looks like a card . 
    let _div = document.createElement("div") ;
    let _subDiv1 = document.createElement("div") ;
    let text1 = document.createTextNode(number.toString()); 
    _subDiv1.append(text1) ;   
    let _subDiv2 = document.createElement("div") ;
    let text2 = document.createTextNode("Product");
    let paragraph = document.createElement("p") ;
    paragraph.appendChild(text2) ;
    paragraph.style.cssText="color :rgb(145, 145, 139);"
    _subDiv1.style.textAlign="center";
    _subDiv2.append(paragraph) ;   
    _div.appendChild(_subDiv1); 
    _div.appendChild(_subDiv2); 
     _subDiv1.style.cssText="text-align: center; padding-top: 30px; font-size:40px; font-family: sans-serif; font-weight: 300;";
     _subDiv2.style.cssText="text-align: center;  font-size: 30px; font-family: sans-serif";
    let pad=80; // changable padding  . 
    _div.style.cssText= `margin-left:${pad+60}px ; margin-right:${pad}px  ;margin-top:${pad-40}px  ; height: 170px ; width: 400px; background-color: white; `;
    return _div ; 
}

function get_row_of_card(startNumber){
    let row = document.createElement("div"); 
    for(let i=0 ; i<3 ; i++){
        row.appendChild(get_card(i+cnt)) ;
    }
    row.style.display="flex" ;
    return row ;
}
let cnt=1 ; 
for(let i=0 ; i<3 ;i++){ 
    _body.appendChild(get_row_of_card(cnt)) ;
    cnt+=3; 
}
document.body.appendChild(_body) ;

//------------------------------------------ now let's create the footer -----------------------------------------------

let _tempDiv = document.createElement("div") ;
let tempParagraph =document.createElement("p") ; 
text =document.createTextNode("Copyright 2022"); 
tempParagraph.appendChild(text); 
tempParagraph.style.cssText="padding-top: 40px; margin-top: 0px; font-size: 30px; font-family: sans-serif; color: white;" 
_tempDiv.appendChild(tempParagraph) ; 
_tempDiv.style.cssText="background-color: rgb(42, 142, 120); text-align: center; width: 197 0pxpx; height: 118px;";

document.body.appendChild(_tempDiv) ;

///  here wo go ......   Finish  ;) 