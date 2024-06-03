import React, { useState, useEffect } from 'react';
import HyperFormula from 'hyperformula';
import { RupFileUploader } from '@/layouts/RupLayout/components/RupFileUploader';
import { RupTable } from '@/layouts/RupLayout/components/RupTable';
import { Groups } from '@/constants/GroupsArr';
import { WorkloadTable } from '@/layouts/WorkloadLayout/components/WorkloadTable';
import { TableControl } from '@/components/TableContol';
import { jwtDecode } from 'jwt-decode';
import RupApi from '@/services/RupApi';

const RupLayout = () => {
  const [data, setData] = useState([]);

  const hyperformulaInstance = HyperFormula.buildEmpty({
    licenseKey: 'internal-use-in-handsontable',
  });

  const handleData = uploadedData => {
    setData(uploadedData);
  };

  // Load initial data from backend
  useEffect(() => {
    const loadData = async () => {
      try {
        const educationYearId = JSON.parse(
          localStorage.getItem('selectedYear'),
        ).value;
        const token = localStorage.getItem('accessToken');
        const user = jwtDecode(token);
        const cafedraId = user.cafedraId;
        const initialData = await RupApi.findAll(educationYearId, cafedraId);
        setData(initialData);
      } catch (error) {
        console.error('Error loading data', error);
      }
    };
    loadData();
  }, []);

  // Example function to save data to backend
  const saveData = async () => {
    try {
      const educationYearId = JSON.parse(
        localStorage.getItem('selectedYear'),
      ).value;
      const token = localStorage.getItem('accessToken');
      const user = jwtDecode(token);
      const cafedraId = user.cafedraId;
      data.pop();
      const updatedData = data.map(item => ({
        ...item,
        educationYearId,
        cafedraId,
      }));
      await Promise.all(updatedData.map(rup => RupApi.upsert(rup)));
      alert('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data', error);
      alert('Failed to save data');
    }
  };

  return (
    <div>
      <TableControl onSave={saveData}>
        <RupFileUploader onData={handleData} />
        {/* <button onClick={saveData}>Save Data</button>{' '} */}
        {/* Example button to save data */}
      </TableControl>
      <RupTable data={data} hyperformulaInstance={hyperformulaInstance} />
    </div>
  );
};

export default RupLayout;
