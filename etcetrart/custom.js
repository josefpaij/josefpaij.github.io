// arrays

var img = '/images/tattooImages/';



var thm=new Array();
thm[0]=img + "012.gif"
thm[1]=img + "001.jpg";
thm[2]=img + "002.jpg";
thm[3]=img + "003.jpg";
thm[4]=img + "004.jpg";
thm[5]=img + "005.jpg";
thm[6]=img + "006.gif";
thm[7]=img + "007.jpg";
thm[8]=img + "008.jpg";
thm[9]=img + "009.jpg";
thm[10]=img + "010.jpg";
thm[11]=img + "011.jpg";
thm[12]=img + "012.gif";
thm[13]=img + "013.jpg";
thm[14]=img + "014.jpg";
thm[15]=img + "015.jpg";
thm[16]=img + "016.jpg";
thm[17]=img + "017.jpg";
thm[18]=img + "018.jpg";
thm[19]=img + "019.gif";
thm[20]=img + "020.jpg";
thm[21]=img + "021.jpg";


/*
var serial=new Array();
serial[0]="000";
serial[1]="001";
serial[2]="002";
serial[3]="003";
serial[4]="004";
serial[5]="005";
serial[6]="006";
*/

function setFocus(pur,t)
{
 	document.pur.t.focus();
};

// thumbs rollover effects

function mouseOver(a,b,num) 
{
		var f= "#" + b;
		$("body").css("background","url("+a+") top left");
		$("body").css("background-attachment","fixed");
		$(f).animate({marginBottom:'60px'}, 200);
		document.getElementById(b).innerHTML = "<h3>Tattoo #" + num + "</h3>";
		$("h3").animate({opacity:0.9,
						marginTop:'172px'}, 200);
		$("h4").animate({opacity:0.9}, 200);
};

function mouseOver0(a,b,pr) 
{
		var f= "#" + b;
		$("body").css("background-image","url("+a+")");
		$(f).animate({marginBottom:'60px'}, 200);
		document.getElementById(b).innerHTML = "<h3>$" + pr + "</h3>";
		$("h3").animate({opacity:0.9,
						marginTop:'172px'}, 200);
		$("h4").animate({opacity:0.9}, 200);
};

function mouseOut(c)
{
		$("#"+c).animate({marginBottom:'20px'}, 200);
		document.getElementById(c).innerHTML = "";
		$("h3").animate({opacity:0,
						marginTop:'140px'}, 400);
		$("h4").animate({opacity:0}, 400);
		$("body").css("background-image","url(images/background.jpg) top center");
		$("body").css("background-attachment","fixed");

};

function mouseClick0(d,g)
{
		var addhash= "#" +d;
		hidethings();
		$(addhash).animate({
					opacity:1,
					left:'-383px',
					width:'375px'}, 100);
		$(addhash).css("z-index","1");
		setFocus(d,g);
		
};

function hidethings()
{
		$("div#what").css("opacity","0");
		$("div#what").css("left","-305");
		$("div#what").css("width","370px");
		$("div#contact").css("opacity","0");
		$("div#contact").css("left","-300px");
		$("div#contact").css("width","355px");
		$("div#contact").css("z-index","-2");
		$("#purchase000").css("z-index","-2");
		$("#purchase000").css("left","-350px");
		$("#purchase000").css("width","360px");
		$("#purchase000").css("opacity","0");
}

// jquery effects

window.onload = function()
{
		$("a#whatbutton").toggle(function() {
			hidethings();
			$("div#what").animate({opacity:1,
							left:'-335px',
							width:'372px'}, 100);
		},function(){
			$("div#what").animate({opacity:0,
						left:'-300px',
						width:'370px'}, 100);
});
		$("a#contactbutton").toggle(function() {
			hidethings();
			$("div#contact").animate({opacity:1,
							left:'-330px',
							width:'376px'}, 100);
		},function(){ 	
			$("div#contact").animate({opacity:0,
						left:'-295px',
						width:'355px'}, 100);
});
			$("#thumb-0").toggle(function() {
				hidethings();
					$("#purchase000").animate({
								opacity:1,
								left:'-383px',
								width:'375px'}, 100);
					$("#purchase000").css("z-index","1");
				setFocus(purchase000,os5);
			},function(){ 	
			$("#purchase000").css("z-index","-2");
			$("#purchase000").animate({opacity:0,
						left:'-350px',
						width:'360px'}, 100);
			//$("#purchase000").animate({opacity:.4}, 300)				
});

};