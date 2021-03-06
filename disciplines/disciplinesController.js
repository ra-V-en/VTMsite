var app = angular.module("site");

app.controller("DisciplinesController",
 ['$scope', 'ClanService', 'DisciplineService',
 function($scope, ClanService, DisciplineService){

   this.getFreebieMode = getFreebieMode;
   function getFreebieMode(){
     return DisciplineService.getFreebieMode();
   }

  this.selectDisciplinePt = selectDisciplinePt;
  this.disciplinesPage = "./disciplines/disciplines.html";
  this.disciplineList = ["Animalism", "Auspex", "Bardo", "Celerity",
                         "Chimerstry", "Daimonion", "Dementation",
                         "Dominate", "Flight", "Fortitude", "Melpominee",
                         "Mytherceria", "Necromancy", "Obeah", "Obfuscate",
                         "Obtenebration", "Ogham", "Potence", "Presence",
                         "Protean", "Quietus", "Sanguinus", "Serpentis",
                         "Spiritus", "Temporis", "Thanatosis", "Thaumaturgy",
                         "Valeren", "Vicissitude", "Visceratika"];

  function selectDisciplinePt(discipline, index){
    DisciplineService.selectDisciplinePt(discipline, index);
  }

  this.changeDiscipline = changeDiscipline;
  function changeDiscipline(discipline, index){
    DisciplineService.changeDiscipline(discipline, index);
  }

  this.selectedClanDisciplines = getDisciplines();
  function getDisciplines(){
    return DisciplineService.selectedClanDisciplines;
  };

  this.getDisciplinePts = getDisciplinePts;
  function getDisciplinePts(){
    return DisciplineService.disciplinePts;
  };

  this.addDiscipline = addDiscipline;
  function addDiscipline(){
    DisciplineService.addDiscipline();
  }

  this.removeDiscipline = removeDiscipline;
  function removeDiscipline(index){
    DisciplineService.removeDiscipline(index);
  }

}]);
