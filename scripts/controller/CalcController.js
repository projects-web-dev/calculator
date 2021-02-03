class CalcController {

	constructor()
	{
		this._operation = [];
		this._locale = 'pt-Br';

		// El refers to HTML Element
		this._displayCalcEl = document.querySelector(
			"#display");
		this._dateEl = document.querySelector("#date");
		this._timeEl = document.querySelector("#time");
		
		this._currentDate;
		this.initialize();
		this.initButtonsEvents();
	}

	initialize(){

		this.setDisplayDateTime();

		let interval = setInterval(()=>{

			this.setDisplayDateTime();

		}, 1000);

		// to stop refresh the displayDate and displayTime after 10 seconds after the interval
		// have been initialized

		// setTimeout(()=>{

		// 	clearInterval(interval);

		// }, 10000);
	}

	addEventListenerAll(element, events, fn){
		
		events.split(' ').forEach(event =>{

			// false is to avoid apply function to the event more than one time (considering the bellow layers)
			element.addEventListener(event, fn, false);

		});
	}



	clearAll(){
		this._operation = [];
	}

	clearEntry(){
		this._operation.pop();
	}

	addOperation(value){

		this._operation.push(value);

		console.log(this._operation);
	}

	setError(){
		this.displayCalc = "Error";
	}

	execBtn(value){

		switch (value) {

			case 'ac':
				this.clearAll();
				break;

			case 'ce':
				this.clearEntry();
				break;

			case 'soma':
				break;

			case 'subtracao':
				break;

			case 'divisao':
				break;

			case 'multiplicacao':
				break;

			case 'porcento':
				break;

			case 'igual':
				break;

			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				this.addOperation(parseInt(value));
				break;

			default:
				this.setError();
				break;
		}
	}

	initButtonsEvents(){

		// get the first g tag which are children of #button id
		// get the first g tag which are children of #parts id
		// document.querySelector("#buttons > g", "#parts > g");

		// get all g tags which are children of #button id
		// get all g tags which are children of #parts id
		let buttons = document.querySelectorAll("#buttons > g, #parts > g");

		// adding addEventListener('click') for each button in buttons
		buttons.forEach((btn, index)=>{

			this.addEventListenerAll(btn, "click drag", e => {

				// console.log(e); // catch the click event
				// console.log(btn); // display g element (button) in the console
				// console.log(btn.className.baseVal); // getting the class of the button (g element)
				// console.log(index); // display the index of the button (g element)
				// console.log(btn.className.baseVal.replace("btn-", "")); // getting only what comes after "btn-" in class name of the btn (g element)

				let textBtn = btn.className.baseVal.replace("btn-", "");

				this.execBtn();

			});

			this.addEventListenerAll(btn, "mouseover moseup mousedown", e => {

				btn.style.cursor = "pointer";

			});

		})
	}

	setDisplayDateTime(){

		this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
			day: "2-digit",
			month: "long",
			year: "numeric"
		});
		this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

	}

	get displayTime(){
		return this._timeEl.innerHTML;
	}

	set displayTime(value){
		this._timeEl.innerHTML = value;
	}

	get displayDate(){
		return this._dateEl.innerHTML;
	}

	set displayDate(value){
		this._dateEl.innerHTML = value;
	}

	get displayCalc()
	{
		return this._displayCalcEl.innerHTML;
	}

	set displayCalc(value)
	{
		this._displayCalcEl.innerHTML = value;
	}

	get currentDate()
	{
		return new Date();
	}

	set currentDate(value)
	{
		this._currentDate = value;
	}
}