const csvToJson = (csvString) => {
    const [headerLine, ...lines] = csvString.trim().split('\n');
    const headers = headerLine.split(',');
  
    const json = lines.map(line => {
      const values = line.split(',');
      return headers.reduce((obj, key, index) => {
        obj[key.trim()] = values[index].trim();
        return obj;
      }, {});
    });
  
    return json;
  }

export default csvToJson;