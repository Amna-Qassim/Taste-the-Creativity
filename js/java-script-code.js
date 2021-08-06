//all
var All = document.getElementById('All');

//code
var accode = document.getElementById('accode');
var code1 = document.getElementById('code1');
var code2 = document.getElementById('code2');
var code3 = document.getElementById('code3');
var code4 = document.getElementById('code4');

//phot
var acphot = document.getElementById('acphot');
var phot1 = document.getElementById('phot1');
var phot2 = document.getElementById('phot2');
var phot3 = document.getElementById('phot3');
var phot4 = document.getElementById('phot4');

//web
var acdesign =document.getElementById('acdesign');
var web1 = document.getElementById('web1');
var web2 = document.getElementById('web2');
var web3 = document.getElementById('web3');
var web4 = document.getElementById('web4');


//button
var button22 =document.getElementById('button22');
var butt1 = document.getElementById('butt1');
var butt2 = document.getElementById('butt2');
var butt3 = document.getElementById('butt3');
var butt4 = document.getElementById('butt4');
var butt5 = document.getElementById('butt5');
var butt6 = document.getElementById('butt6');
var butt7 = document.getElementById('butt7');
var butt8 = document.getElementById('butt8');


function all1() {
    code1.style.display ='';
    code2.style.display ='';
    code3.style.display ='';
    code4.style.display ='';

    phot1.style.display ='';
    phot2.style.display ='';
    phot3.style.display ='';
    phot4.style.display ='';

    web1.style.display ='';
    web2.style.display ='';
    web3.style.display ='';
    web4.style.display ='';

    butt1.style.display ="none";
    butt2.style.display ="none";
    butt3.style.display ="none";
    butt4.style.display ="none";
    butt5.style.display ="none";
    butt6.style.display ="none";
    butt7.style.display ="none";
    butt8.style.display ="none";

    All.classList.add("active");
    acdesign.classList.remove("active");
    accode.classList.remove("active");
    acphot.classList.remove("active");
   
}

function web() {
    code1.style.display ="none";
    code2.style.display ="none";
    code3.style.display ="none";
    code4.style.display ="none";

    phot1.style.display ="none";
    phot2.style.display ="none";
    phot3.style.display ="none";
    phot4.style.display ="none";

    web1.style.display ='';
    web2.style.display ='';
    web3.style.display ='';
    web4.style.display ='';

    butt1.style.display ="none";
    butt2.style.display ="none";
    butt3.style.display ="none";
    butt4.style.display ="none";
    butt5.style.display ="none";
    butt6.style.display ="none";
    butt7.style.display ="none";
    butt8.style.display ="none";

    acdesign.classList.add("active");
    All.classList.remove("active");
    accode.classList.remove("active");
    acphot.classList.remove("active");
   
}

function code() {
    web1.style.display ="none";
    web2.style.display ="none";
    web3.style.display ="none";
    web4.style.display ="none";

    phot1.style.display ="none";
    phot2.style.display ="none";
    phot3.style.display ="none";
    phot4.style.display ="none";

    code1.style.display ='';
    code2.style.display ='';
    code3.style.display ='';
    code4.style.display ='';

    butt1.style.display ="none";
    butt2.style.display ="none";
    butt3.style.display ="none";
    butt4.style.display ="none";
    butt5.style.display ="none";
    butt6.style.display ="none";
    butt7.style.display ="none";
    butt8.style.display ="none";

    accode.classList.add("active");
    acdesign.classList.remove("active");
    All.classList.remove("active");
    acphot.classList.remove("active"); 
}

function phot33() {
    code1.style.display ="none";
    code2.style.display ="none";
    code3.style.display ="none";
    code4.style.display ="none";

    web1.style.display  ="none";
    web2.style.display ="none";
    web3.style.display  ="none";
    web4.style.display  ="none";
    
    phot1.style.display ="";
    phot2.style.display ="";
    phot3.style.display ="";
    phot4.style.display ="";

    butt1.style.display ="none";
    butt2.style.display ="none";
    butt3.style.display ="none";
    butt4.style.display ="none";
    butt5.style.display ="none";
    butt6.style.display ="none";
    butt7.style.display ="none";
    butt8.style.display ="none";

    acdesign.classList.remove("active");
    All.classList.remove("active");
    accode.classList.remove("active");
    acphot.classList.add("active");
   
}
function button() {
    code1.style.display ="none";
    code2.style.display ="none";
    code3.style.display ="none";
    code4.style.display ="none";
    web1.style.display  ="none";
    web2.style.display ="none";
    web3.style.display  ="none";
    web4.style.display  ="none";
    phot1.style.display ="none";
    phot2.style.display ="none";
    phot3.style.display ="none";
    phot4.style.display ="none";

    butt1.style.display ="";
    butt2.style.display ="";
    butt3.style.display ="";
    butt4.style.display ="";
    
    butt5.style.display ="";
    butt6.style.display ="";
    butt7.style.display ="";
    butt8.style.display ="";

    acdesign.classList.remove("active");
    All.classList.remove("active");
    acphot.classList.remove("active");
    accode.classList.remove("active");

}