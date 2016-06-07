$(document).ready(function() {
    $('.carousel').carousel({
     	interval: 2000
    })

    $('.form_date').datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
    });
});
var cityPicker = new IIInsomniaCityPicker({
    data: cityData,
    target: '#cityChoice1',
    valType: 'k-v',
    hideCityInput: '#city',
    hideProvinceInput: '#province',
});
cityPicker.init();

var cityPicker = new IIInsomniaCityPicker({
    data: cityData,
    target: '#cityChoice2',
    valType: 'k-v',
    hideCityInput: '#city',
    hideProvinceInput: '#province',
});
cityPicker.init();

var cityPicker = new IIInsomniaCityPicker({
    data: cityData,
    target: '#cityChoice3',
    valType: 'k-v',
    hideCityInput: '#city',
    hideProvinceInput: '#province',
});
cityPicker.init();

var cityPicker = new IIInsomniaCityPicker({
    data: cityData,
    target: '#cityChoice4',
    valType: 'k-v',
    hideCityInput: '#city',
    hideProvinceInput: '#province',
});
cityPicker.init();

var cityPicker = new IIInsomniaCityPicker({
    data: cityData,
    target: '#cityChoice5',
    valType: 'k-v',
    hideCityInput: '#city',
    hideProvinceInput: '#province',
});
cityPicker.init();

var cityPicker = new IIInsomniaCityPicker({
    data: cityData,
    target: '#cityChoice6',
    valType: 'k-v',
    hideCityInput: '#city',
    hideProvinceInput: '#province',
});
cityPicker.init();

var cityPicker = new IIInsomniaCityPicker({
    data: cityData,
    target: '#cityChoice7',
    valType: 'k-v',
    hideCityInput: '#city',
    hideProvinceInput: '#province',
});
cityPicker.init();

var cityPicker = new IIInsomniaCityPicker({
    data: cityData,
    target: '#cityChoice8',
    valType: 'k-v',
    hideCityInput: '#city',
    hideProvinceInput: '#province',
});
cityPicker.init();