let header = document.querySelector('header');
let home = document.getElementById('home');
let introduction = document.getElementById('introsection');
let presentation = document.getElementById('presentSection');
let more = document.getElementById('more');
let history = document.getElementById('historySection');
let bottomH = document.getElementById('bottomHeader');
let CCM = document.getElementById('CCM');
let CPG = document.getElementById('CPG');
let LIQ = document.getElementById('LIQ');
let ADS = document.getElementById('ADS');
let AFF = document.getElementById('AFF');
let EXC = document.getElementById('EXC');
let HPLC = document.getElementById('HPLC');
let PAR = document.getElementById('PAR');
let ION = document.getElementById('ION');
let types = document.querySelector('#chTypes');
let btnTypes = document.getElementById('typeBtn');






function showData(id){
    if(id == 'introduction'){
        introduction.classList.remove('hide');
        home.classList.add('hide');
        presentation.classList.add('hide');
        history.classList.add('hide');
        more.classList.add('hide');
        bottomH.classList.add('hide');
        headerBtn.classList.add('hide');
        CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.add('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide')
        HPLC.classList.add('hide');
        types.classList.add('hide');
         Nav.classList.add('left');
    main.style.opacity = '1';
    }else if(id == 'historique'){
        home.classList.add('hide');
        introduction.classList.add('hide');
        presentation.classList.add('hide');
        history.classList.remove('hide');
        more.classList.add('hide')
        bottomH.classList.add('hide');
         presentation.classList.add('hide');
        CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.add('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide');
        HPLC.classList.add('hide'); 
        types.classList.add('hide');
        headerBtn.classList.add('hide');
         Nav.classList.add('left');
    main.style.opacity = '1';

    }else if(id == 'enPlus'){
         home.classList.add('hide');
        introduction.classList.add('hide');
        presentation.classList.add('hide');
        CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.add('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide');
        HPLC.classList.add('hide'); 
        history.classList.add('hide');
        more.classList.remove('hide');
        bottomH.classList.add('hide');
        headerBtn.classList.add('hide');
        types.classList.add('hide');
         Nav.classList.add('left');
    main.style.opacity = '1';
    }else if(id == 'présentation'){

  home.classList.add('hide');
        introduction.classList.add('hide');
        presentation.classList.remove('hide');
        history.classList.add('hide');
        more.classList.add('hide');
        bottomH.classList.remove('hide');
        headerBtn.classList.remove('hide');
         Nav.classList.add('left');
    main.style.opacity = '1';
}else{
       
            home.classList.remove('hide');
        introduction.classList.add('hide');
        presentation.classList.add('hide');
        history.classList.add('hide');
        more.classList.add('hide');
        bottomH.classList.add('hide');
        headerBtn.classList.add('hide');
        types.classList.add('hide');
         CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.add('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide')
        HPLC.classList.add('hide');
         Nav.classList.add('left');
    main.style.opacity = '1';
    

    }


}
function showTypes(id){
    if(id == 'couche'){
        presentation.classList.add('hide');
        CCM.classList.remove('hide');
        CPG.classList.add('hide');
        LIQ.classList.add('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide');
        HPLC.classList.add('hide');
        


    }
    else if(id == 'gaz'){
                presentation.classList.add('hide');
        CCM.classList.add('hide');
        CPG.classList.remove('hide');
        LIQ.classList.add('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide');
        HPLC.classList.add('hide');

    }else if(id == 'adsorbtion'){
presentation.classList.add('hide');
        CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.add('hide');
        AFF.classList.add('hide');
        ADS.classList.remove('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide');
        HPLC.classList.add('hide');
        
    }else if(id == 'partage'){
presentation.classList.add('hide');
        CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.add('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.remove('hide');
        HPLC.classList.add('hide');
    }else if(id == 'échange'){
 presentation.classList.add('hide');
        CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.add('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.remove('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide')
        HPLC.classList.add('hide');       
    }else if(id == 'exclusion'){
  presentation.classList.add('hide');
        CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.add('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.remove('hide');
        PAR.classList.add('hide');
        HPLC.classList.add('hide');        
    }else if(id == 'affinité'){
  presentation.classList.add('hide');
        CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.add('hide');
        AFF.classList.remove('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide');
        HPLC.classList.add('hide');          
    }else if(id == 'haute'){
  presentation.classList.add('hide');
        CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.add('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide');
        HPLC.classList.remove('hide');  
    }else if(id == 'typeBtn'){
  presentation.classList.add('hide');
        CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.remove('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide');
        HPLC.classList.add('hide');  
    }
    else{
  presentation.classList.remove('hide');
        CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.add('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide');
        HPLC.classList.add('hide'); 
    };

   types.classList.add('hide');


}
    
btnTypes.addEventListener('click',function(){
    types.classList.remove('hide');
});

window.onscroll = function(){
        if(scrollY > 40){
        header.style.background = '#fff';
        
    }else{
        header.style.background = ' #6666660c';
        
    };
};




// reponsive
let openBtn = document.getElementById('openBtn');
let closeBtn = document.getElementById('closeBtn');
var Nav = document.querySelector('nav');
var main = document.querySelector('main');
var headerBtn = document.getElementById('headerBtn');


openBtn.onclick = function(){
   
    Nav.classList.remove('left');
    main.style.opacity = '0.1';
    
};
closeBtn.onclick = function(){
    Nav.classList.add('left');
    main.style.opacity = '1';
};


function back(id){

        CCM.classList.add('hide');
        CPG.classList.add('hide');
        LIQ.classList.remove('hide');
        AFF.classList.add('hide');
        ADS.classList.add('hide');
        ION.classList.add('hide');
        EXC.classList.add('hide');
        PAR.classList.add('hide')
        HPLC.classList.add('hide');
};

