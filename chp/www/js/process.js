let process = {
	menu:function(){
		let content =<div>
			<center>
			<img src="img/bat.png" width='100%' height='950px'></img>
			<img src="img/skill/bat.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page19}>❮</a></button>
			<button with='100%'><a href='#' onClick={process.bat2}>Evolution</a></button>
			<button><a href='#' onClick={process.page1}>❯</a></button>
			</center>
			</div>
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div><center>
				<img src='img/cu.png' width="100%" height='950px'></img>
				<img src='img/skill/cu.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.menu}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.cu2}>Evolution</a></button>
				<button><a href='#' onClick={process.page2}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content =<div><center>
				<img src='img/dig.png' width="100%" height='950px'></img>
				<img src='img/skill/dig.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page1}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.dig2}>Evolution</a></button>
				<button><a href='#' onClick={process.page3}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div><center>
				<img src='img/duk.png' width="100%" height='950px'></img>
				<img src='img/skill/duk.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page2}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.duk2}>Evolution</a></button>
				<button><a href='#' onClick={process.page4}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
	let content = <div><center>
				<img src='img/dwe.png' width="100%" height='950px'></img>
				<img src='img/skill/dwe.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page3}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.dwe2}>Evolution</a></button>
				<button><a href='#' onClick={process.page5}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page5:function(){
	let content = <div><center>
				<img src='img/f.png' width="100%" height='950px'></img>
				<img src='img/skill/f.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page4}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.fox2}>Evolution</a></button>
				<button><a href='#' onClick={process.page6}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page6:function(){
	let content = <div><center>
				<img src='img/fish.png' width="100%" height='950px'></img>
				<img src='img/skill/fish.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page5}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.fish2}>Evolution</a></button>
				<button><a href='#' onClick={process.page7}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page7:function(){
	let content = <div><center>
				<img src='img/flip.png' width="100%" height='950px'></img>
				<img src='img/skill/osh.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page6}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.flip2}>Evolution</a></button>
				<button><a href='#' onClick={process.page8}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page8:function(){
	let content = <div><center>
				<img src='img/grow.png' width="100%" height='950px'></img>
				<img src='img/skill/grow.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page7}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.grow2}>Evolution</a></button>
				<button><a href='#' onClick={process.page9}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page9:function(){
	let content = <div><center>
				<img src='img/jig2.png' width="100%" height='950px'></img>
				<img src='img/skill/jig.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page8}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.jig2}>Evolution</a></button>
				<button><a href='#' onClick={process.page10}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page10:function(){
	let content = <div><center>
				<img src='img/key.png' width="100%" height='950px'></img>
				<img src='img/skill/key.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page9}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.key2}>Evolution</a></button>
				<button><a href='#' onClick={process.page11}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page11:function(){
	let content = <div><center>
				<img src='img/oct.png' width="100%" height='950px'></img>
				<img src='img/skill/oct.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page10}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.oct2}>Evolution</a></button>
				<button><a href='#' onClick={process.page12}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page12:function(){
	let content = <div><center>
				<img src='img/onk.png' width="100%" height='950px'></img>
				<img src='img/skill/onk.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page11}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.onk2}>Evolution</a></button>
				<button><a href='#' onClick={process.page13}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page13:function(){
	let content = <div><center>
				<img src='img/paras.png' width="100%" height='950px'></img>
				<img src='img/skill/paras.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page12}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.paras2}>Evolution</a></button>
				<button><a href='#' onClick={process.page14}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page14:function(){
	let content = <div><center>
				<img src='img/pi.png' width="100%" height='950px'></img>
				<img src='img/skill/p.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page13}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.ri}>Evolution</a></button>
				<button><a href='#' onClick={process.page15}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page15:function(){
	let content = <div><center>
				<img src='img/pi1.png' width="100%" height='950px'></img>
				<img src='img/skill/pig.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page14}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.pig2}>Evolution</a></button>
				<button><a href='#' onClick={process.page16}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page16:function(){
	let content = <div><center>
				<img src='img/pon.png' width="100%" height='950px'></img>
				<img src='img/skill/pon.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page15}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.pon2}>Evolution</a></button>
				<button><a href='#' onClick={process.page17}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page17:function(){
	let content = <div><center>
				<img src='img/scg.png' width="100%" height='950px'></img>
				<img src='img/skill/scg.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page16}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.scg2}>Evolution</a></button>
				<button><a href='#' onClick={process.page18}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page18:function(){
	let content = <div><center>
				<img src='img/sea.png' width="100%" height='950px'></img>
				<img src='img/skill/sea.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page17}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.sea2}>Evolution</a></button>
				<button><a href='#' onClick={process.page19}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page19:function(){
	let content = <div><center>
				<img src='img/star.png' width="100%" height='950px'></img>
				<img src='img/skill/star.png' width="100%" height='700px'></img>
				<button><a href='#' onClick={process.page18}>❮</a></button>
				<button with='100%'><a href='#' onClick={process.star2}>Evolution</a></button>
				<button><a href='#' onClick={process.menu}>❯</a></button>
				</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},




	bat2:function(){
		let content = <div><center>
				<img src="img/bat2.png" width="100%"></img>
				<img src="img/skill/bat.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.menu}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
		cu2:function(){
		let content = <div><center>
				<img src="img/cu2.png" width="100%"></img>
				<img src="img/skill/cu.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page1}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	dig2:function(){
		let content = <div><center>
				<img src="img/dig2.png" width="100%"></img>
				<img src="img/skill/dig.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page2}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	duk2:function(){
		let content = <div><center>
				<img src="img/duk2.png" width="100%"></img>
				<img src="img/skill/duk.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page3}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	dwe2:function(){
		let content = <div><center>
				<img src="img/dwe2.png" width="100%"></img>
				<img src="img/skill/dwe.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page4}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	fox2:function(){
		let content = <div><center>
				<img src="img/fox2.png" width="100%"></img>
				<img src="img/skill/f.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page5}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	fish2:function(){
		let content = <div><center>
				<img src="img/fish2.png" width="100%"></img>
				<img src="img/skill/gyara.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page6}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	flip2:function(){
		let content = <div><center>
				<img src="img/flip2.png" width="100%"></img>
				<img src="img/skill/osh.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.flip3}>Evolution</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	flip3:function(){
		let content = <div><center>
				<img src="img/flip3.png" width="100%"></img>
				<img src="img/skill/osh.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page7}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	grow2:function(){
		let content = <div><center>
				<img src="img/grow2.png" width="100%"></img>
				<img src="img/skill/grow.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page8}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	jig2:function(){
		let content = <div><center>
				<img src="img/jig.png" width="100%"></img>
				<img src="img/skill/jig.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.jig3}>Evolution</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	jig3:function(){
		let content = <div><center>
				<img src="img/jig3.png" width="100%"></img>
				<img src="img/skill/dwe.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page9}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	key2:function(){
		let content = <div><center>
				<img src="img/key2.png" width="100%"></img>
				<img src="img/skill/key.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page10}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	oct2:function(){
		let content = <div><center>
				<img src="img/oct2.png" width="100%"></img>
				<img src="img/skill/oct.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page11}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	onk2:function(){
		let content = <div><center>
				<img src="img/onk2.png" width="100%"></img>
				<img src="img/skill/onk.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page12}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	paras2:function(){
		let content = <div><center>
				<img src="img/paras2.png" width="100%"></img>
				<img src="img/skill/dwe.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page13}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	ri:function(){
		let content = <div><center>
				<img src="img/ri.png" width="100%"></img>
				<img src="img/skill/p.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page14}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	pig2:function(){
		let content = <div><center>
				<img src="img/pig2.png" width="100%"></img>
				<img src="img/skill/pig.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.pig3}>Evolution</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	pig3:function(){
		let content = <div><center>
				<img src="img/pig3.png" width="100%"></img>
				<img src="img/skill/megapig.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page15}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	pon2:function(){
		let content = <div><center>
				<img src="img/pon2.png" width="100%"></img>
				<img src="img/skill/pon.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page16}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	scg2:function(){
		let content = <div><center>
				<img src="img/scg2.png" width="100%"></img>
				<img src="img/skill/scg.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page17}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	sea2:function(){
		let content = <div><center>
				<img src="img/sea2.png" width="100%"></img>
				<img src="img/skill/sea.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.sea3}>Evolution</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	sea3:function(){
		let content = <div><center>
				<img src="img/sea3.png" width="100%"></img>
				<img src="img/skill/sea.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page18}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	star2:function(){
		let content = <div><center>
				<img src="img/star2.png" width="100%"></img>
				<img src="img/skill/star.png" width="100%" height='700px'></img>
			<button><a href='#' onClick={process.page19}>Back</a></button>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div>
				Pokemon...
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},1000);