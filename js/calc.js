$(document).ready(function(){
    //Quando o valor do campo mudar...
    $('.calc').keyup(function(){
        var Custo0 = parseFloat($('#custo0').val().replace(".", "").replace(",", ".")) || 0.00;
        var Markup0 = parseFloat($('#markup0').val().replace(".", "").replace(",", ".")) || 0.00;
        var Taxa0 = parseFloat($('#taxa0').val().replace(".", "").replace(",", ".")) || 0.00;
        var Frete0 = parseFloat($('#frete0').val().replace(".", "").replace(",", ".")) || 0.00;

        //O total 
        var Venda0 = Custo0 + Markup0 + Taxa0 + Frete0;
        var Margem0 = custo0 / venda0;

        $('#Venda0').val(number_format(Venda0,2, ',', '.'));
        $('#margem0').val(number_format(Margem0,2, ',', '.'));

    });
});

function number_format( number, decimals, dec_point, thousands_sep ) {
var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
var d = dec_point == undefined ? "," : dec_point;
var t = thousands_sep == undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");}
