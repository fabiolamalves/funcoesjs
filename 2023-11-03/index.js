const CSV = "Fabiola Santos, 33, true, 58.70, 06/29/2023"
var LISTA_DOS_VALORES_SEPARADOS_POR_VIRGULA = CSV.split(",")
//console.log(LISTA_DOS_VALORES_SEPARADOS_POR_VIRGULA)
//console.info(LISTA_DOS_VALORES_SEPARADOS_POR_VIRGULA[4])

var dataComValoresIncorretos = LISTA_DOS_VALORES_SEPARADOS_POR_VIRGULA [4];

console.info(dataComValoresIncorretos);

var dataSeparadasPeloTraco = dataComValoresIncorretos.split("/");

console.info(dataSeparadasPeloTraco);

var dia = dataSeparadasPeloTraco [1];
var mes = dataSeparadasPeloTraco [0];
var ano = dataSeparadasPeloTraco [2];

var dataComFormatoCorreto = dia + "/" + mes +"/" + ano;
//var dataComFormatoCorreto = `$(dia)+$(mes)+$(ano)`;

console.info(dataComFormatoCorreto);

var NOVO_CSV = [
    LISTA_DOS_VALORES_SEPARADOS_POR_VIRGULA [0],
    LISTA_DOS_VALORES_SEPARADOS_POR_VIRGULA [1],
    LISTA_DOS_VALORES_SEPARADOS_POR_VIRGULA [2],
    LISTA_DOS_VALORES_SEPARADOS_POR_VIRGULA [3],
    dataComFormatoCorreto
].join(",");

console.info(NOVO_CSV)

// note que o resultado agora está como string e pode voltar ao formato csv, por exemplo.

function transformaDataDoCSVEmFormatoBrasileiro(csvString) {

}