
exports.translate = function(load) {
    if (this.builder && this.transpiler) {
        load.metadata.format = 'esm';

        return 'export default (' + (function(load,name){
                if(!window.rtkStyle){
                    window.rtkStyle={};
                    window.rtkRaw={code:'',ready:false};
                    window.rtkStyleElement=document.createElement('STYLE');
                    document.head.appendChild(window.rtkStyleElement);
                    window.rtkStyleElement.id='rtkStyle';
                    window.rtkRefreshStyle=function(str,subs){
                        if(typeof(str)!='undefined'&&typeof(subs)!='undefined'){

                            window.rtkStyleElement.innerHTML=window.rtkRaw.code.replace((new RegExp(str,'g')),subs);
                        }else{
                            window.rtkStyleElement.innerHTML=window.rtkRaw.code;
                        }

                    }
                }
                if(!window.rtkStyle[name])
                {
                    window.rtkStyle[name]=true;
                    window.rtkRaw.code+=load;
                    window.rtkRaw.ready=false;

                }

                if(window.rtkTimeout){clearTimeout(window.rtkTimeout)}
                window.rtkTimeout= setTimeout(()=>{
                    window.rtkRaw.ready=true;
                    window.rtkRefreshStyle();


                },300)
            }).toString()+ ')('+JSON.stringify(load.source) +',"'+load.name+'");';
    }


    load.metadata.format = 'amd';
    if(!window.rtkStyle){
        window.rtkStyle={};
        window.rtkRaw={code:'',ready:false};
        window.rtkStyleElement=document.createElement('STYLE');
        document.head.appendChild(window.rtkStyleElement);
        window.rtkStyleElement.id='rtkStyle';
        window.rtkRefreshStyle=function(str,subs){
            if(typeof(str)!='undefined'&&typeof(subs)!='undefined'){

                window.rtkStyleElement.innerHTML=window.rtkRaw.code.replace((new RegExp(str,'g')),subs);
            }else{
                window.rtkStyleElement.innerHTML=window.rtkRaw.code;
            }

        }
    }
    if(!window.rtkStyle[load.name])
    {
        window.rtkStyle[load.name]=true;
        window.rtkRaw.code+=load.source;
        window.rtkRaw.ready=false;

    }

    if(window.rtkTimeout){clearTimeout(window.rtkTimeout)}
    window.rtkTimeout= setTimeout(()=>{
        window.rtkRaw.ready=true;
        window.rtkRefreshStyle();


    },300);

    return 'def' + 'ine(function() {\nreturn window.mainStyle;\n});';
};
