var pages = ['measurementConverter', 'mortgageCalculator', 'currencyConverter']
var asyncRequest;


window.addEventListener("load", start, false);

function start(){
	//Content Switch
	document.getElementById('measurementConverterList').addEventListener("click", showMeasurementConverter, false);
	document.getElementById('mortgageCalculatorList').addEventListener("click", showMortgageCalculator, false);
	document.getElementById('currencyConverterList').addEventListener("click", showCurrencyConvertor, false);

	//Weight Converter
	document.getElementById('weightKG').addEventListener("keyup", kgToLbs, false);
	document.getElementById('weightLB').addEventListener("keyup", LbsTokg, false);

	//Height Converter
	document.getElementById('heightcm').addEventListener("keyup", cmToFeet, false);
	document.getElementById('heightft').addEventListener("keyup", FeetToCm, false);

	//Area Converter
	document.getElementById('areaMeter').addEventListener("keyup", meterSquareToFeetSquare, false);
	document.getElementById('areaFeet').addEventListener("keyup", feetSquareToMeterSquare, false);

	//Volume Converter
	document.getElementById('volumneMeter').addEventListener("keyup", meterCubicToFeetCubic, false);
	document.getElementById('volumneFeet').addEventListener("keyup", feetCubicToMeterCubic, false);

	//Mortgage Calculator
	document.getElementById('mortgageAmount').addEventListener("keyup", validateMortgageCalculator, false);
	document.getElementById('year').addEventListener("keyup", validateMortgageCalculator, false);
	document.getElementById('frequency').addEventListener("change", validateMortgageCalculator, false);
	document.getElementById('interestRate').addEventListener("keyup", validateMortgageCalculator, false);

	// //Currency Converter
	document.getElementById('USD').addEventListener("keyup", USDConvert, false);
	document.getElementById('CAD').addEventListener("keyup", CADConvert, false);
	document.getElementById('GBP').addEventListener("keyup", GBPConvert, false);
	document.getElementById('EUR').addEventListener("keyup", EURConvert, false);
	document.getElementById('JPY').addEventListener("keyup", JPYConvert, false);
}

function showMeasurementConverter(){
	document.getElementById('measurementConverter').style.display = 'block';
	document.getElementById('measurementConverterList').className = 'active';
	document.getElementById('mortgageCalculator').style.display = 'none';
	document.getElementById('mortgageCalculatorList').className = '';

	document.getElementById('currencyConverter').style.display = 'none';
	document.getElementById('currencyConverterList').className = '';

	document.getElementById("weightKG").value = '';
	document.getElementById("weightLB").value = '';
	document.getElementById("heightcm").value = '';
	document.getElementById("heightft").value = '';
	document.getElementById("areaMeter").value = '';
	document.getElementById("areaFeet").value = '';
	document.getElementById("volumneMeter").value = '';
	document.getElementById("volumneFeet").value = '';

}

function showMortgageCalculator(){
	document.getElementById('measurementConverter').style.display = 'none';
	document.getElementById('measurementConverterList').className = '';

	document.getElementById('mortgageCalculator').style.display = 'block';
	document.getElementById('mortgageCalculatorList').className = 'active';

	document.getElementById('currencyConverter').style.display = 'none';
	document.getElementById('currencyConverterList').className = '';

	document.getElementById('mortgageAmount').value = '';
	document.getElementById('year').value = '';
	document.getElementById('interestRate').value = '';
	//documnet.getElementById('amount').value = '';

}

function showCurrencyConvertor(){
	document.getElementById('measurementConverter').style.display = 'none';
	document.getElementById('measurementConverterList').className = '';

	document.getElementById('mortgageCalculator').style.display = 'none';
	document.getElementById('mortgageCalculatorList').className = '';

	document.getElementById('currencyConverter').style.display = 'block';
	document.getElementById('currencyConverterList').className = 'active';

	document.getElementById('USD').value = '';
	document.getElementById('CAD').value = '';
	document.getElementById('GBP').value = '';
	document.getElementById('EUR').value = '';
	document.getElementById('JPY').value = '';
}

function USDConvert(){
	var usd = document.getElementById('USD').value;
	document.getElementById('CAD').value = 1.25 * usd;
	document.getElementById('GBP').value = 0.73 * usd;
	document.getElementById('EUR').value = usd * 0.82;
	document.getElementById('JPY').value = usd * 112;;
}
function CADConvert(){
	var cad = document.getElementById('CAD').value;
	document.getElementById('USD').value = (cad / 1.25).toFixed(2);
	document.getElementById('GBP').value = cad * 0.58;
	document.getElementById('EUR').value = cad * 0.66;
	document.getElementById('JPY').value = cad * 90;
}
function GBPConvert(){
	var gbp = document.getElementById('GBP').value;
	document.getElementById('CAD').value = (gbp / 0.58).toFixed(2);
	document.getElementById('USD').value = (gbp / 0.73).toFixed(2);
	document.getElementById('EUR').value = gbp * 1.12;
	document.getElementById('JPY').value = gbp * 152;
}
function EURConvert(){
	var eur = document.getElementById('EUR').value;
	document.getElementById('CAD').value = (eur / 0.66).toFixed(2);
	document.getElementById('GBP').value = (eur / 1.12).toFixed(2);
	document.getElementById('USD').value = (eur / 0.82).toFixed(2);
	document.getElementById('JPY').value = eur * 135;
}
function JPYConvert(){
	var jpy = document.getElementById('JPY').value;
	document.getElementById('CAD').value = (jpy / 90).toFixed(2);
	document.getElementById('GBP').value = (jpy / 152).toFixed(2);
	document.getElementById('EUR').value = (jpy / 135).toFixed(2);
	document.getElementById('USD').value = (jpy / 112).toFixed(2);
}

function validateMortgageCalculator(){
	var amount = document.getElementById('mortgageAmount').value;
	var years = document.getElementById('year').value;
	var interest = document.getElementById('interestRate').value;

	if(isNaN(amount) && amount != ''){
		return;
	}

	if(isNaN(years) && years != ''){
		return;
	}

	if(isNaN(interest)){
		return;
	}

	mortgageCalculator();
}

function mortgageCalculator(){
	var amount = document.getElementById('mortgageAmount').value;
	var years = document.getElementById('year').value;
	var index = document.getElementById('frequency').selectedIndex;
	var options = document.getElementById('frequency').options;
	var frequency = options[index].text;
	var period = 0;

	var interest = document.getElementById('interestRate').value;
	if (interest == ''){
		interest = 0;
	}else{
		interest = interest / 100;
	}

	if(frequency == 'Monthly'){
		period = years * 12;
		interest = interest / 12;
	}
	if(frequency == 'Bi-Weekly'){
		period = years * 26;
		interest = interest / 26;
	}

	var payment = document.getElementById('payment');

	var p = amount * (1 + interest) / period;
	
	payment.innerHTML = p.toFixed(2);
}

function kgToLbs(){
	var kg = document.getElementById('weightKG').value;
	var lbs = kg * 2.20;

	document.getElementById('weightLB').value = lbs;
}

function LbsTokg(){
	var lbs = document.getElementById('weightLB').value;
	var kg = Math.round(lbs / 2.20);

	document.getElementById('weightKG').value = kg;
}

function cmToFeet(){
	var cm = document.getElementById('heightcm').value;
	var ft = cm * 0.0328;

	document.getElementById('heightft').value = ft;
}

function FeetToCm(){
	var ft = document.getElementById('heightft').value;
	var cm = Math.round(ft / 0.0328);

	document.getElementById('heightcm').value = cm;
}

function meterSquareToFeetSquare(){
	var area = document.getElementById('areaMeter').value;
	var ft = area * 10.76;

	document.getElementById('areaFeet').value = ft;
}

function feetSquareToMeterSquare(){
	var ft = document.getElementById('areaFeet').value;
	var area = Math.round(ft / 10.76);

	document.getElementById('areaMeter').value = area;
}

function meterCubicToFeetCubic(){
	var vol = document.getElementById('volumneMeter').value;
	var ft = vol * 35.31;

	document.getElementById('volumneFeet').value = ft;
}

function feetCubicToMeterCubic(){
	var ft = document.getElementById('volumneFeet').value;
	var vol = Math.round(ft / 35.31);

	document.getElementById('volumneMeter').value = vol;
}