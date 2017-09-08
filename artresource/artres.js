 window.onload = function(){ //when the window loads
                //sorts data alphabetically 
                resourcedata.sort(function(a,b){
                    if(a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });

                loadDefault();
             }

             function loadDefault(){

                //Goes through the dataset (resourcedata) and filters it with a function name (tagfunda)
                //function goes through the 'tags' (a string) and checks if it has another string within it with the function called 'indexOf'
                // 'tags' in the dataset looks like this: "tags": "podcast, fundamentals, book"
                //searches through second string for 'fundamentals'
                // must be greater than -1 because -1 means it cannot find 'fundamentals'
                var filfunda = resourcedata.filter(function(tagfunda){
                     return (tagfunda.tags.indexOf("fundamentals") > -1)
                });
            
                var filtool = resourcedata.filter(function(tagtool){
                     return (tagtool.tags.indexOf("tools") > -1)
                });

                var filvislib = resourcedata.filter(function(tagvislib){
                     return (tagvislib.tags.indexOf("visual library") > -1)
                });
            
                var filcomm = resourcedata.filter(function(tagcomm){
                     return (tagcomm.tags.indexOf("communities") > -1)
                });
            
                var filbook = resourcedata.filter(function(tagbook){
                     return (tagbook.tags.indexOf("books") > -1)
                });
            
                var filauvid = resourcedata.filter(function(tagauvid){
                     return (tagauvid.tags.indexOf("audio visual") > -1)
                });
            
                
                console.log(filfunda, filtool, filvislib, filcomm, filbook, filauvid);
               
                var conf = document.getElementById('Fundamentalsbox');
                var cont = document.getElementById('Toolsbox');
                var convl = document.getElementById('VisualLibrarybox');
                var conco = document.getElementById('Communitiesbox');
                var conb = document.getElementById('Booksbox');
                var conav = document.getElementById('AudioVisualbox');
                var brush = document.getElementsByClassName('underline');
                
                
                for (i = 0; i < filfunda.length; i++){
                    conf.innerHTML += "<div class='tooltiphover'><a href='" + filfunda[i].link + "'>" + filfunda[i].name + "</a> <span class='info'>🛈</span> <br>" + "<div id='desctooltip' class='desctooltip'>" + filfunda[i].desc + "</div></div><br>";
                }//displays each item in the filtered category. Also contains a div that will act as a tooltip for the description with classname 'tooltiphover' 

                for (i = 0; i < filtool.length; i++){
                    cont.innerHTML += "<div class='tooltiphover'><a href='" + filtool[i].link + "'>" + filtool[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + filtool[i].desc + "</div></div><br>";
                }
                
                for (i = 0; i < filvislib.length; i++){
                    convl.innerHTML += "<div class='tooltiphover'><a href='" + filvislib[i].link + "'>" + filvislib[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + filvislib[i].desc + "</div></div><br>";
                }

                for (i = 0; i < filcomm.length; i++){
                    conco.innerHTML += "<div class='tooltiphover'><a href='" + filcomm[i].link + "'>" + filcomm[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + filcomm[i].desc + "</div></div><br>";
                }

                for (i = 0; i < filbook.length; i++){
                    conb.innerHTML += "<div class='tooltiphover'><a href='" + filbook[i].link + "'>" + filbook[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + filbook[i].desc + "</div></div><br>";
                }

                for (i = 0; i < filauvid.length; i++){
                    conav.innerHTML += "<div class='tooltiphover'><a href='" + filauvid[i].link + "'>" + filauvid[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + filauvid[i].desc + "</div></div><br>";
                }
            

                //free/paid/brush buttons
                var freebtn = document.getElementById('freebtn');
                var paidbtn = document.getElementById('paidbtn');
                var brush = document.getElementById('brush');

                brush.onclick = function(){
                    var filbrush = resourcedata.filter(function(tagbrush){
                        return (tagbrush.subcategory.indexOf("Brushes") > -1);
                    });

                    console.log(filbrush);

                    while (cont.hasChildNodes()) {
                        cont.removeChild(cont.firstChild);
                    }

                    for (i = 0; i < filbrush.length; i++){
                        cont.innerHTML += "<div class='tooltiphover'><div class='showbrush'><a href='" + filbrush[i].link + "'>" + filbrush[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + filbrush[i].desc + "</div></div><br></div>";
                    }

                }


                //filters through 'free' resources only when freebtn is clicked
                freebtn.onclick = function(){
                    //checks if 'conf'/Fundamentals category has "ChildNodes" and then clears it
                    while (conf.hasChildNodes()) {
                        conf.removeChild(conf.firstChild);
                    }
                    // conf.innerHTML = ""; // this clears existing innerHTML - does the same thing as above
                    var freefunda = filfunda.filter(function(freef){
                        return (freef.freepaid.indexOf("Free") > -1);
                    });

                    while (cont.hasChildNodes()) {
                        cont.removeChild(cont.firstChild);
                    }
                    var freetool = filtool.filter(function(freet){
                        return (freet.freepaid.indexOf("Free") > -1);
                    });

                    while (convl.hasChildNodes()) {
                        convl.removeChild(convl.firstChild);
                    }
                    var freevislib = filvislib.filter(function(freevl){
                        return (freevl.freepaid.indexOf("Free") > -1);
                    });

                    while (conco.hasChildNodes()) {
                        conco.removeChild(conco.firstChild);
                    }
                    var freecom = filcomm.filter(function(freec){
                        return (freec.freepaid.indexOf("Free") > -1);
                    });

                    while (conb.hasChildNodes()) {
                        conb.removeChild(conb.firstChild);
                    }
                    var freebook = filbook.filter(function(freeb){
                        return (freeb.freepaid.indexOf("Free") > -1);
                    });

                    while (conav.hasChildNodes()) {
                        conav.removeChild(conav.firstChild);
                    }
                    var freeauvid = filauvid.filter(function(freeav){
                        return (freeav.freepaid.indexOf("Free") > -1);
                    });

                    
                    console.log(freefunda, freetool, freevislib, freecom, freebook, freeauvid);

                    //fills in with new filtered data for the category 'Free
                    for (i = 0; i < freefunda.length; i++){
                        conf.innerHTML += "<div class='tooltiphover'><a href='" + freefunda[i].link + "'>" + freefunda[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + freefunda[i].desc + "</div></div><br>"; 
                        }
                    
                    for (i = 0; i < freetool.length; i++){
                        cont.innerHTML += "<div class='tooltiphover'><a href='" + freetool[i].link + "'>" + freetool[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + freetool[i].desc + "</div></div><br>";
                    }

                    for (i = 0; i < freevislib.length; i++){
                        convl.innerHTML += "<div class='tooltiphover'><a href='" + freevislib[i].link + "'>" + freevislib[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + freevislib[i].desc + "</div></div><br>";
                    }

                    for (i = 0; i < freecom.length; i++){
                        conco.innerHTML += "<div class='tooltiphover'><a href='" + freecom[i].link + "'>" + freecom[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + freecom[i].desc + "</div></div><br>";
                    }

                    for (i = 0; i < freebook.length; i++){
                        conb.innerHTML += "<div class='tooltiphover'><a href='" + freebook[i].link + "'>" + freebook[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + freebook[i].desc + "</div></div><br>";
                    }

                    for (i = 0; i < freeauvid.length; i++){
                        conav.innerHTML += "<div class='tooltiphover'><a href='" + freeauvid[i].link + "'>" + freeauvid[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + freeauvid[i].desc + "</div></div><br>";
                    }

        
                }

                //filters through 'paid' 
                paidbtn.onclick = function(){
                    while (conf.hasChildNodes()) {
                        conf.removeChild(conf.firstChild);
                    }
                    var paidfunda = filfunda.filter(function(paidf){
                        return (paidf.freepaid.indexOf("Paid") > -1);
                    });

                    while (cont.hasChildNodes()) {
                        cont.removeChild(cont.firstChild);
                    }
                    var paidtool = filtool.filter(function(paidt){
                        return (paidt.freepaid.indexOf("Paid") > -1);
                    });

                    while (convl.hasChildNodes()) {
                        convl.removeChild(convl.firstChild);
                    }
                    var paidvislib = filvislib.filter(function(paidvl){
                        return (paidvl.freepaid.indexOf("Paid") > -1);
                    });

                    while (conco.hasChildNodes()) {
                        conco.removeChild(conco.firstChild);
                    }
                    var paidcom = filcomm.filter(function(paidc){
                        return (paidc.freepaid.indexOf("Paid") > -1);
                    });

                    while (conb.hasChildNodes()) {
                        conb.removeChild(conb.firstChild);
                    }
                    var paidbook = filbook.filter(function(paidb){
                        return (paidb.freepaid.indexOf("Paid") > -1);
                    });

                    while (conav.hasChildNodes()) {
                        conav.removeChild(conav.firstChild);
                    }
                    var paidauvid = filauvid.filter(function(paidav){
                        return (paidav.freepaid.indexOf("Paid") > -1);
                    });

                    
                    console.log(paidfunda);
                    console.log(paidtool);
                    console.log(paidvislib);
                    console.log(paidcom);
                    console.log(paidbook);
                    console.log(paidauvid);

                    for (i = 0; i < paidfunda.length; i++){
                        conf.innerHTML += "<div class='tooltiphover'><a href='" + paidfunda[i].link + "'>" + paidfunda[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + paidfunda[i].desc + "</div></div> <br>"; 
                        
                        if (conf.children.length === 0){
                        conf.innerHTML = "Nothing in this category!";    
                        }   
                    }
                    
                    for (i = 0; i < paidtool.length; i++){
                        cont.innerHTML += "<div class='tooltiphover'><a href='" + paidtool[i].link + "'>" + paidtool[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + paidtool[i].desc + "</div></div><br>";
                    }

                    for (i = 0; i < paidvislib.length; i++){
                        convl.innerHTML += "<div class='tooltiphover'><a href='" + paidvislib[i].link + "'>" + paidvislib[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + paidvislib[i].desc + "</div></div><br>";

                    }

                    for (i = 0; i < paidcom.length; i++){
                        conco.innerHTML += "<div class='tooltiphover'><a href='" + paidcom[i].link + "'>" + paidcom[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + paidcom[i].desc + "</div></div><br>";
                    }

                    for (i = 0; i < paidbook.length; i++){
                        conb.innerHTML += "<div class='tooltiphover'><a href='" + paidbook[i].link + "'>" + paidbook[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + paidbook[i].desc + "</div></div><br>";
                    }

                    for (i = 0; i < paidauvid.length; i++){
                        conav.innerHTML += "<div class='tooltiphover'><a href='" + paidauvid[i].link + "'>" + paidauvid[i].name + "</a> <span class='info'>🛈</span><br>" + "<div id='desctooltip' class='desctooltip'>" + paidauvid[i].desc + "</div></div><br>";
                    }

        
                }
            
            


            var resetbtn = document.getElementById('resetbtn');//reset button - clears everything and reloads the loadDefault function

            resetbtn.onclick = function() {
                while (conf.hasChildNodes()) {
                    conf.removeChild(conf.firstChild);
                }

                while (cont.hasChildNodes()) {
                    cont.removeChild(cont.firstChild);
                }

                while (convl.hasChildNodes()) {
                    convl.removeChild(convl.firstChild);
                }

                while (conco.hasChildNodes()) {
                    conco.removeChild(conco.firstChild);
                }

                while (conb.hasChildNodes()) {
                    conb.removeChild(conb.firstChild);
                }

                while (conav.hasChildNodes()) {
                    conav.removeChild(conav.firstChild);
                }

                loadDefault();
            }
        }