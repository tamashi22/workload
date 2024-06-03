import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { WorkloadTable } from '@/layouts/WorkloadLayout/components/WorkloadTable';
import { AppButton } from '@/components/ui/AppButton';
import Toast, { showToast } from '@/components/ui/Toast';
import RupApi from '@/services/RupApi';
import GroupsApi from '@/services/GroupsApi';
import UsersApi from '@/services/UsersApi';
import WorkloadApi from '@/services/WorkloadApi'; // Assuming you have an API for Workload
import { TableControl } from '@/components/TableContol';

const WorkloadLayout = () => {
  const [rups, setRups] = useState([]);
  const [workload, setWorkload] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [useDefaultFormulas, setUseDefaultFormulas] = useState(true);
  const [year, setYear] = useState();
  const [cafedra, setCafedra] = useState();
  useEffect(() => {
    const educationYearId = JSON.parse(
      localStorage.getItem('selectedYear'),
    ).value;
    setYear(educationYearId);
    const token = localStorage.getItem('accessToken');
    const user = jwtDecode(token);
    const cafedraId = user.cafedraId;
    setCafedra(cafedraId);
    const loadData = async () => {
      try {
        // Load Rup data
        const rupData = await RupApi.findAll(educationYearId, cafedraId);
        setRups(rupData);

        // Load Groups data
        const groupsData = await GroupsApi.findAll(educationYearId);
        setGroups(groupsData);

        // Load Teachers data
        const teachersData = await UsersApi.findAllByCafedraId(cafedraId);
        setTeachers(teachersData);

        // Load Workload data
        const workloadData = await WorkloadApi.findAll(
          educationYearId,
          cafedraId,
        );
        setWorkload(workloadData);
      } catch (error) {
        console.error('Error loading data', error);
      }
    };

    loadData();
  }, []);

  const createWorkload = (rups, groups) => {
    return groups.flatMap(group => {
      return [1, 2, 3, 4].flatMap(course => {
        if (parseInt(course) === parseInt(group.course)) {
          return rups
            .filter(discipline => {
              return (
                discipline.direction === group.direction &&
                Object.keys(discipline).some(
                  key =>
                    key.startsWith(`y${course}s`) &&
                    key.endsWith('Credits') &&
                    discipline[key],
                )
              );
            })
            .flatMap(discipline => {
              const semesterInfo = Object.keys(discipline).filter(
                key =>
                  key.startsWith(`y${course}s`) &&
                  key.includes('Credits') &&
                  discipline[key],
              );

              return semesterInfo.map(key => {
                const semester = key.match(/y(\d)s(\d)/)[2];
                return {
                  discipline: discipline.nameOfDiscipline,
                  group: group.name,
                  course: group.course,
                  numberOfStudents: JSON.stringify(group.numberOfStudents),
                  numberOfStudentsWithCoef: null,
                  credits: discipline.credits,
                  semester: semester,
                  lectionsByRup: discipline.lectures,
                  lectionsByWorkload: null,
                  practicalByRup: discipline.practical,
                  practicalByWorkload: null,
                  labaratoriesByRup: discipline.laboratories,
                  labaratoriesByWorkload: null,
                  courseWorksByRup: discipline.courseWorks,
                  courseWorksByAccept: null,
                  courseWorksByManagement: null,
                  consultationsOnline: null,
                  consultationsIndividual: null,
                  consultationsByTeacher: null,
                  cheksOfWorks: null,
                  cheksByHeadOfCafedra: null,
                  reviewsOfworks: null,
                  eduPractice: null,
                  interships: null,
                  tests: null,
                  exams: null,
                  diplomManagement: null,
                  diplomConsultations: null,
                  diplomReviews: null,
                  diplomExams: null,
                  individualWorks: null,
                  scolarshipStudents: JSON.stringify(group.scolarshipStudents),
                  contractStudents: JSON.stringify(group.contractStudents),
                  scolarshipHours: null,
                  contractHours: null,
                  totalWorkloadHours: null,
                  rupId: discipline.id,
                  educationYearId: year,
                  cafedraId: cafedra,
                };
              });
            });
        }
        return [];
      });
    });
  };

  const handleCreateWorkload = async () => {
    const newWorkload = createWorkload(rups, groups);
    setWorkload(newWorkload);

    showToast('Нагрузка сформирована!');
  };

  const handleToggleFormulas = () => {
    setUseDefaultFormulas(!useDefaultFormulas);
  };

  const handleSaveWorkload = async () => {
    console.log(workload);
    // try {
    //   await Promise.all(
    //     workload.map(item => WorkloadApi.update(item.id, item)),
    //   );
    //   showToast('Сохранено');
    // } catch (error) {
    //   console.error('Error saving workload', error);
    //   showToast('Ошибка', 'error');
    // }
  };

  return (
    <div>
      <TableControl onSave={handleSaveWorkload}>
        <AppButton onClick={handleCreateWorkload}>Create Workload</AppButton>
        <label>
          <input
            type="checkbox"
            checked={useDefaultFormulas}
            onChange={handleToggleFormulas}
          />
          Использовать Формулы
        </label>
      </TableControl>

      <WorkloadTable
        data={workload}
        teachers={teachers}
        useDefaultFormulas={useDefaultFormulas}
        setWorkload={setWorkload}
      />
      <Toast />
    </div>
  );
};

export default WorkloadLayout;
