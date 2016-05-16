/* 折线图组件对象 */
var H5ComponentPolyline = function( name,cfg ){
    var component = new H5ComponentBase (name , cfg);
    
    
    var w= cfg.width;
    var h = cfg.height;
    
    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h;
    component.append(cns);
    
    
    var step = 10;
    ctx.beginPath();
    ctx.lengWidth = 1;
    ctx.strokeStyle = "#AAAAAA";
    
    window.ctx = ctx;
    for(var i=0;i<step+1;i++){
        var y = (h/step)*i;
        ctx.moveTo(0,y);
        ctx.lineTo(w,y);
    }
    
    step = cfg.data.length+1;
    for(var i=0;i<step+1;i++){
        var x =(w/step)*i;
        ctx.moveTo(x,0);
        ctx.lineTo(x,h);
    }
    
    ctx.stroke();
    
    var cns = document.createElement('canvas');
    var ctx = cns.getContext('2d');
    cns.width = ctx.width = w;
    cns.height = ctx.height = h; 
    component.append(cns);
    
    ctx.beginPath();
    ctx.lengWidth = 3; 
    ctx.strokeStyle = "#ff8878";
    
    var x = 0;
    var y = 0;
 
    var row_w = (w/(cfg.data.length+1));
    for(i in cfg.data){
        var item = cfg.data[i];
        
        x = row_w*i+row_w;
        y = h*(1-item[1]);
        
        ctx.moveTo(x,y);
        ctx.arc(x,y,5,0,2*Math.PI);
    }
    
    ctx.stroke();
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    return component;
    
}