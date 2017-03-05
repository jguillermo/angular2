module.exports=function(app,path){
    app.get('/',function(req,res){
        res.sendFile(path.resolve('public/index.html'));
    });

    app.get('/ts',function(req,res){
        res.sendFile(path.resolve('public/typescript/app1.html'));
    });
}