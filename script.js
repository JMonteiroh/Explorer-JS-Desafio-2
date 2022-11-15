let studants = []

studants = [
  {
    name: "Luiz",
    firstTestGrade: 8,
    secondTestGrade: 6,
  },
  {
    name: "Carolina",
    firstTestGrade: 1,
    secondTestGrade: 3,
  },
  {
    name: "Juliana",
    firstTestGrade: 9,
    secondTestGrade: 4,
  },
  {
    name: "Marcos",
    firstTestGrade: 2,
    secondTestGrade: 7,
  },
];

function media(firstTestGrade, secondTestGrade) {
  return ((firstTestGrade + secondTestGrade) / 2).toFixed(1);
};

function printMedia(studant){
  if(media(studant.firstTestGrade,studant.secondTestGrade) >= 6){
    return `
    A média do(a) aluno(a) ${studant.name} é: ${media(studant.firstTestGrade,studant.secondTestGrade)} \n
    Parabéns, ${studant.name}! Você foi aprovado(a) no concurso!
    `
  }else{
    return `
    A média do(a) aluno(a) ${studant.name} é: ${media(studant.firstTestGrade,studant.secondTestGrade)} \n
    Não foi dessa vez, ${studant.name}! Tente novamente!
    `
  }
};

studants.push({name: "João", firstTestGrade: 8, secondTestGrade: 5,});

for(let studant of studants) {
  let mediaMessage = printMedia(studant)
  alert(mediaMessage)
};

