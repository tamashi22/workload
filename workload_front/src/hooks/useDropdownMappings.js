import { useMemo } from 'react';

export const useDropdownMappings = optionsMap => {
  const mappings = useMemo(() => {
    const output = {};
    for (const key in optionsMap) {
      const options = optionsMap[key];
      const idToName = {};
      const nameToId = {};
      options.forEach(option => {
        idToName[option.id] = option.name;
        nameToId[option.name] = option.id;
      });
      output[key] = {
        idToName,
        nameToId,
        options: options.map(option => option.name),
      };
    }
    return output;
  }, [optionsMap]);

  const transformForDisplay = data => {
    return data.map(item => {
      const newItem = { ...item };
      for (const key in mappings) {
        if (item[key] !== undefined) {
          newItem[key] = mappings[key].idToName[item[key]] || item[key];
        }
      }
      return newItem;
    });
  };

  const transformForStorage = data => {
    return data.map(item => {
      const newItem = { ...item };
      for (const key in mappings) {
        if (item[key] !== undefined) {
          newItem[key] = mappings[key].nameToId[item[key]] || item[key];
        }
      }
      return newItem;
    });
  };

  return { transformForDisplay, transformForStorage, mappings };
};
