        document.addEventListener("keydown", function(event){
            if(event.which === 39){
                ung()
            }
            if(event.which==37){
                chap();
            }
            if(event.which==38){
                yuqori()
            }
            if(event.which==40){
                past();
            }
        });

        var sonlar = [2,4,8,2,4,8,2,8,"","","","","","","",""];
        var raqamlar = [];

        var aralashtirilganSonlar = sonlar.sort((a, b) => 0.5 - Math.random());
        var knopkalar = document.getElementsByTagName("button");
        for (i=0; i<knopkalar.length; i++)
        {
            knopkalar[i].innerHTML = aralashtirilganSonlar[i];
        }

       
        function ung(){
            var number=0;
            for(i=0;i<4;i++){
                for(i1=0; i1<3; i1++){
                    var a=String(i);

                    if((parseInt(document.getElementById(a+i1).innerHTML)==parseInt(document.getElementById(a+(i1+1)).innerHTML)) ){
                        document.getElementById(a+(i1+1)).innerHTML=document.getElementById(a+i1).innerHTML*2;
                        document.getElementById(a+i1).innerHTML="";
                        number++;
                    }
                    else if((document.getElementById(a+i1).innerHTML>document.getElementById(a+(i1+1)).innerHTML)&&(document.getElementById(a+(i1+1)).innerHTML==0)){
                        document.getElementById(a+(i1+1)).innerHTML=document.getElementById(a+i1).innerHTML;
                        document.getElementById(a+i1).innerHTML="";
                    }
                }
            }
            number_in();
            rang(); 
        }
        function past(){
            for(i=0;i<4;i++){
                for(i1=0; i1<3; i1++){
                    var a=String(i)                    

                    if((parseInt(document.getElementById(i1+a).innerHTML)==parseInt(document.getElementById((i1+1)+a).innerHTML)) ){
                        document.getElementById((i1+1)+a).innerHTML=document.getElementById(i1+a).innerHTML*2;
                        document.getElementById(i1+a).innerHTML="";
                    }
                    else if((document.getElementById(i1+a).innerHTML>document.getElementById((i1+1)+a).innerHTML)&&(document.getElementById((i1+1)+a).innerHTML==0)){
                        document.getElementById((i1+1)+a).innerHTML=document.getElementById(i1+a).innerHTML;
                        document.getElementById(i1+a).innerHTML="";
                    }
                }
            }
            number_in();
            rang(); 
        }

        function chap(){
            for(i=3;i>=0;i--){
                for(i1=3; i1>0; i1--){
                    var a=String(i)

                    if((parseInt(document.getElementById(a+i1).innerHTML)==parseInt(document.getElementById(a+(i1-1)).innerHTML)) ){
                        document.getElementById(a+(i1-1)).innerHTML=document.getElementById(a+i1).innerHTML*2;
                        document.getElementById(a+i1).innerHTML="";
                    }
                    else if((document.getElementById(a+i1).innerHTML>document.getElementById(a+(i1-1)).innerHTML)&&(document.getElementById(a+(i1-1)).innerHTML==0)){
                        document.getElementById(a+(i1-1)).innerHTML=document.getElementById(a+i1).innerHTML;
                        document.getElementById(a+i1).innerHTML="";
                    }
                }
            }
            number_in();
            rang(); 
        }
        function yuqori(){
            for(i=3;i>=0;i--){
                for(i1=3; i1>0; i1--){
                    var a=String(i);

                    if((parseInt(document.getElementById(i1+a).innerHTML)==parseInt(document.getElementById((i1-1)+a).innerHTML)) ){
                        document.getElementById((i1-1)+a).innerHTML=document.getElementById(i1+a).innerHTML*2;
                        document.getElementById(i1+a).innerHTML="";
                    }
                    else if((document.getElementById(i1+a).innerHTML>document.getElementById((i1-1)+a).innerHTML)&&(document.getElementById((i1-1)+a).innerHTML==0)){
                        document.getElementById((i1-1)+a).innerHTML=document.getElementById(i1+a).innerHTML;
                        document.getElementById(i1+a).innerHTML="";
                    }
                }
            }
            number_in();
            rang(); 
        }

        var qiymat_sanagich=0
        function number_in(){
            qiymat_sanagich++
            var sonni_ol0=[],sonni_ol1=[],sonni_ol2=[],sonni_ol3=[];
            for(i=0;i<4;i++){
                for(i1=0; i1<4; i1++){
                    var a=String(i);
                    if(document.getElementById(a+i1).innerHTML==0){
                        if(i==0){
                            sonni_ol0[i1]=a+i1;
                        }
                        else if(i==1){
                            sonni_ol1[i1]=a+i1;
                        }
                        else if(i==2){
                            sonni_ol2[i1]=a+i1;
                        }
                        else if(i==3){
                            sonni_ol3[i1]=a+i1;
                        }
                    }
                }
            }
            var sonni_ol=[];
            for(i=0; i<16;i++){
                if((i<4)&&((knopkalar[i].innerHTML==0))){
                    sonni_ol[i]=sonni_ol0[i+0];
                }
                if(i<8 && i>3 && ((knopkalar[i].innerHTML==0))){
                    sonni_ol[i]=sonni_ol1[i-4];
                }
                if(i<12 && i>7 && ((knopkalar[i].innerHTML==0))){
                    sonni_ol[i]=sonni_ol2[i-8];
                }
                if(i>11 && ((knopkalar[i].innerHTML==0))){
                    sonni_ol[i]=sonni_ol3[i-12]
                }
            }
            var aralashtirilganSonlar_ol = sonni_ol.sort((a, b) => 0.5 - Math.random());
            if(sonni_ol!=0){
                document.getElementById(aralashtirilganSonlar_ol[0]).innerHTML=2; 
            }
            else{
                if (confirm("Sizning achkoyingiz: "+qiymat_sanagich+" Siz yutqazdingiz.  O`yinni qayta boshlamoqchimisiz?")){
                    for (i=0; i<knopkalar.length; i++)
                    {
                        knopkalar[i].innerHTML = aralashtirilganSonlar[i];
                        knopkalar[i].style = "color:white; border:none; background-color:#5f9ea0;font-size: 40px;";
                    }
                }
                else{}
            }
        }

        rang(); 
        function rang() {
            var rang_sanagich=0
            var ranglar=['#7FFFD4','#FFE4C4','#0000FF','#8A2BE2','#FFD700','#A52A2A','#7FFF00','#6495ED','#008B8B','#006400','#FF8C00','#00BFFF'];
            for(n=0; n<16; n++){
                if(knopkalar[n].innerHTML!=0){
                    for(i=2; i<=knopkalar[n].innerHTML; i*=2){
                        rang_sanagich++
                    }
                    knopkalar[n].style="background-color: "+ranglar[rang_sanagich];
                    rang_sanagich=0;
                }
                else{
                    knopkalar[n].style="background-color: none;"
                }
                
            }
        }
        