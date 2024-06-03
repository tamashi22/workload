import React, { useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import { MdDriveFolderUpload } from 'react-icons/md';
import { AppButton } from '../../../../components/ui/AppButton';
import styles from './RupFileUploader.module.scss';

const RupFileUploader = ({ onData }) => {
  const [jsonData, setJsonData] = useState({});
  const fileInput = useRef(null);

  const handleFile = async event => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = e => {
      const ab = e.target.result;
      const workbook = XLSX.read(ab, { type: 'array', cellFormula: true });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const rawData = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
        defval: null,
        raw: false,
      }); // Read data as array of arrays
      const data = rawData.slice(4);
      const keys = [
        'disciplineCode',
        'nameOfDiscipline',
        'department',
        'direction',
        'credits',
        'hours',
        'totalHours',
        'lectures',
        'laboratories', // Corrected from 'labaratories'
        'practical',
        'independentWorks', // Corrected from 'indepedentWorks'
        'y1s1Laboratories', // Corrected from '1y1sLabaratories'
        'y1s1Practical', // Corrected from '1y1sPractical'
        'y1s1Credits', // Corrected from '1y1sCredits'
        'y1s1Lectures', // Corrected from '1y1sLectures'
        'y1s2Laboratories', // Corrected from '1y2sLabaratories'
        'y1s2Practical', // Corrected from '1y2sPractical'
        'y1s2Credits', // Corrected from '1y2sCredits'
        'y1s2Lectures', // Corrected from '1y2sLectures'
        'y2s3Laboratories', // Corrected from '2y3sLabaratories'
        'y2s3Practical', // Corrected from '2y3sPractical'
        'y2s3Credits', // Corrected from '2y3sCredits'
        'y2s3Lectures', // Corrected from '2y3sLectures'
        'y2s4Laboratories', // Corrected from '2y4sLabaratories'
        'y2s4Practical', // Corrected from '2y4sPractical'
        'y2s4Credits', // Corrected from '2y4sCredits'
        'y2s4Lectures', // Corrected from '2y4sLectures'
        'y3s5Laboratories', // Corrected from '3y5sLabaratories'
        'y3s5Practical', // Corrected from '3y5sPractical'
        'y3s5Credits', // Corrected from '3y5sCredits'
        'y3s5Lectures', // Corrected from '3y5sLectures'
        'y3s6Laboratories', // Corrected from '3y6sLabaratories'
        'y3s6Practical', // Corrected from '3y6sPractical'
        'y3s6Credits', // Corrected from '3y6sCredits'
        'y3s6Lectures', // Corrected from '3y6sLectures'
        'y4s7Laboratories', // Corrected from '4y7sLabaratories'
        'y4s7Practical', // Corrected from '4y7sPractical'
        'y4s7Credits', // Corrected from '4y7sCredits'
        'y4s7Lectures', // Corrected from '4y7sLectures'
        'y4s8Laboratories', // Corrected from '4y8sLabaratories'
        'y4s8Practical', // Corrected from '4y8sPractical'
        'y4s8Credits', // Corrected from '4y8sCredits'
        'y4s8Lectures', // Corrected from '4y8sLectures'
        'zachet',
        'courseWorks',
        'stateExam',
      ]; // Custom keys for JSON objects
      const objects = data.map(row => {
        let obj = {};
        keys.forEach((key, index) => {
          // Use null for undefined or null values
          obj[key] = row[index] == null ? null : row[index];
        });
        return obj;
      });
      setJsonData(objects);
      console.log(objects);

      onData(objects);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFile}
        accept=".xlsx, .xls"
        name="file"
        style={{ display: 'none' }}
        ref={fileInput}
      />
      <AppButton
        onClick={() => fileInput.current.click()}
        className={styles.uploader}
      >
        <MdDriveFolderUpload size={20} />
        Импорт
      </AppButton>
    </div>
  );
};

export default RupFileUploader;
