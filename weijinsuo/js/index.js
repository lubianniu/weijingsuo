
$(function(){
		bannerRender();
});

 var bannerRender=function(){


  var renderHTMl=function(){


  		var isMobile=$(window).width()<768;  
        $('.carousel-indicators').html(template('pointTemplate',window.data)); 			
        $('.carousel-inner').html(template('bannenTemplate',{list:window.data,isM:isMobile}));
  };
var render=function(){
	if(window.data){
		renderHTMl();
	}else{
		$.ajax({
      url:'js/data.json',
      type:'get',
      dataType:'json',
      success:function(data){
   		window.data=data;
   		renderHTMl();
      }

  });
	}
      
};
		render();


	$(window).on('resize',function(){
	   render();
	});


	// 手势切换

	var startX=0;
	var distanceX=0;
	var isMove=false;

   	$('.wjs_banner').on('touchstart',function(e){

   	startX=e.originalEvent.touches[0].clientX;
   		// console.log(startX);
   	}).on('touchmove',function(e){
		var moveX=e.originalEvent.touches[0].clientX;		
		 distanceX=moveX-startX;
		 isMove=true;//这里为什么要加这个判断，没有这个判断还进不来
		
   	}).on('touchend',function(e){
   				
   		if( isMove && Math.abs(distanceX)>50){
   				
   				if(distanceX>0){
   					// console.log('prev');
   					console.log(startX);
   					$('#carousel-example-generic').carousel('prev');
   				}else{
   					// console.log('next');
   					console.log(distanceX);
   					$('#carousel-example-generic').carousel('next');
   				}
   		}
   		// 这里注意不能var，下面的代码不用写也可以，老师为什么要写？
 // 	startX=0;
 // 	distanceX=0;
	// isMove=false;
   	});



	};




