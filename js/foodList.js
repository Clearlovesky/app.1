$.ajax({
    type:"post",
    url:"http://www.mffive.com:8080/drysaltery/getFoodList",
    success:function(data){
        var tplStr1 = template("tplProducts",data);
        console.log(data);
        $(".products").html(tplStr1);   
    },
    error:function(){
        console.log("请求失败!");
    }
})
