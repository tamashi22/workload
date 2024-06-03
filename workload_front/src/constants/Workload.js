const Worlkload = [
  {
    id: 'autoincrement i will to it in nest js backend after send data',
    discipline: 'discipline from rup table data',
    group: 'group from group table data',
    numberOfStudets: 'students number from group table data',
    numberOfStudetsWithCoef:
      'students number with coefficient formula:numberOfStudets *1(coefficient can change) ',
    credits: 'credits of discipline from rup table data',
    semesters:
      'semester counts can be 1 or 2 from from rup table data depents on couse and semester if data in theese fields is exists for example for 1 coure 1y1sLabaratories or Lectures i.e is not empty add 1 for secont semest too if theese fields have data',
    lectionsByRup: ' lections data from rup table data',
    lectionsByWorkload: 'lectionsByRup data dublicat ',
    practicalByRup: 'practical data from rup table data',
    practicalByWorkload: 'practicalByRup data dublicat',
    labaratoriesByRup: 'labaratories data from rup table data',
    labaratoriesByWorkload: 'labaratoriesByRup data dublicat',
    courseWorksByRup: 'cw from rup table data',
    courseWorksByAccept: 'empty field ',
    courseWorksByManagement: 'empty field',
    consultationsOnline: 'empty field',
    consultationsIndividual: ' empty field',
    consultationsByTeacher: ' empty field',
    cheksOfWorks: ' empty field',
    cheksByHeadOfCafedra: ' empty field',
    reviewsOfworks: ' empty field',
    eduPractice: ' empty field',
    interships: ' empty field',
    tests: ' empty field',
    exams: 'formula: 0,5*numberOfStudetsWithCoef',
    diplomManagement: ' empty field',
    diplomConsultations: ' empty field',
    diplomReviews: ' empty field',
    diplomExams: ' empty field',
    individualWorks:
      'formula:=((30*credits-(lectionsByRup+practicalByRup+labaratoriesByRup))/30)*0,2*numberOfStudetsWithCoef',
    scolarshipStudents: 'from group table data ',
    contractStudents: 'from group table data',
    scolarshipHours:
      'formula:=totalWorkloadHours/(scolarshipStudents+ contractStudents)*scolarshipStudents',
    contractHours:
      'formula:=totalWorkloadHours/(scolarshipStudents+ contractStudents)*contractStudents',
    totalWorkloadHours:
      'formula:=СУММ(practicalByWorkload;lectionsByWorklad;labaratoriesByWorkload;then all from courseWorksByRup to: individualWork in order)',
  },
];
