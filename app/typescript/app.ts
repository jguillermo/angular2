let prom1 = new Promise<string>( function(resolve, reject){
    setTimeout(function(){
        console.log("promesa termianda");
        resolve();
    },1500);
    });

prom1.then(function(){
    console.log("salio bien");
    return '';
},function(){
    console.log("salio mal");
});
