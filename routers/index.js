module.exports=function(app,path){
    app.get('/',function(req,res){
        res.sendFile(path.resolve('app/index.html'));
    });

    app.get('/ts',function(req,res){
        res.sendFile(path.resolve('app/typescript/app1.html'));
    });
}