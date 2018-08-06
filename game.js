

class Tetris {
	constructor(canvas){
		this.canvas = canvas;
		this.canvasWidth = canvas.width;
		this.canvasHeight = canvas.height;
		this.activeFigure = null;
		this.gameArea = [
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.'],
			['.','.','.','.','.','.','.','.','.']
		];
		this.I = [['*','*','*','*']];
		this.J = [
			['*','*','*'],
			['.','.','*']
		];
		this.L = [
			['*','*','*'],
			['*','.','.']
		];
		this.O = [
			['*','*'],
			['*','*']
		];
		this.S = [
			['.','*','*'],
			['*','*','.']
		];
		this.T = [
			['*','*','*'],
			['.','*','.']
		];
		this.Z = [
			['*','*','.'],
			['.','*','*']
		];
		this.figures = [this.I,this.J,this.L,this.O,this.S,this.T,this.Z];
	}

	randomFigure(){
		let figureIndex = Math.floor(Math.random() * (this.figures.length));
		return figureIndex;
	}

	createFigure(){
		let left = this.initiateFigureStartPosition();
		this.setFigure(5, left);
		this.drawArray();
	}

	setFigure(top,left){
		console.log(this.activeFigure);
		this.figures[this.activeFigure].forEach((row, i)=>{
			row.forEach((c,j)=>{
				this.gameArea[top + i][left+j] = c;
			});
		});
	}

	initiateFigureStartPosition(){
		this.activeFigure = this.randomFigure();
		let areaWidth = this.gameArea[0].length;
		let figureWidth = this.figures[this.activeFigure][0].length;
		let figureLeft = Math.floor((areaWidth / 2) - (figureWidth / 2));
		return figureLeft;
	}

	drawArray(){
		console.log(this.gameArea)
	}

	render(){
		this.gameArea.forEach(row=>{
			row.forEach(c=>{
				
			});
		});
	}

	clear(){

	}

}


window.onload = ()=>{
	let canvas = document.getElementById('tetris');
	let tetris = new Tetris(canvas);
	tetris.createFigure();
}

