import { TableControl } from '@/components/TableContol';
import React, { useEffect, useState } from 'react';
import GroupTable from './components/GroupTable/GroupTable';
import GroupsApi from '@/services/GroupsApi';
import { jwtDecode } from 'jwt-decode';
import { Groups } from '@/constants/GroupsArr';
import styles from './GroupsLayout.module.scss';

const GroupsLayout = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const loadGroups = async () => {
      try {
        const educationYearId = JSON.parse(
          localStorage.getItem('selectedYear'),
        ).value;
        const groupsData = await GroupsApi.findAll(educationYearId);
        setGroups(groupsData);
      } catch (error) {
        console.error('Error loading groups', error);
      }
    };
    loadGroups();
  }, []);

  const saveGroups = async () => {
    try {
      const educationYearId = JSON.parse(
        localStorage.getItem('selectedYear'),
      ).value;
      const token = localStorage.getItem('accessToken');
      const user = jwtDecode(token);

      const updatedGroups = groups.map(group => ({
        ...group,
        educationYearId: educationYearId,
        cafedraId: user.cafedraId,
      }));

      console.log('Updated Groups:', updatedGroups);

      await GroupsApi.deleteByYear(educationYearId);
      await GroupsApi.createMany(updatedGroups);

      alert('Groups saved successfully!');
    } catch (error) {
      console.error('Error saving groups', error);
      alert('Failed to save groups');
    }
  };

  return (
    <>
      <TableControl onSave={saveGroups} />
      <GroupTable groups={groups} setGroups={setGroups} />
    </>
  );
};

export default GroupsLayout;
