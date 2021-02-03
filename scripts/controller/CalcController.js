class CalcController {

	constructor()
	{
		
		this._locale = 'pt-Br';

		// El refers to HTML Element
		this._displayCalcEl = document.querySelector(
			"#display");
		this._dateEl = document.querySelector("#date");
		this._timeEl = document.querySelector("#time");
		
		this._currentDate;
		this.initialize();
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

	initButtonsEvents(){

		// get the first g tag which are children of #button id
		// get the first g tag which are children of #parts id
		// document.querySelector("#buttons > g", "#parts > g");

		// get all g tags which are children of #button id
		// get all g tags which are children of #parts id
		let buttons = document.querySelectorAll("#buttons > g", "#parts > g");
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