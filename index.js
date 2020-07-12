function sqlJoinToJson(resultStructure, recordSet, prevKey = null) {
  try {
    const initKeys = Object.keys(resultStructure);
    let firstValue;

    return recordSet
      .map((record, index) =>
        recordSet.find(
          compareNested(resultStructure, record, index, recordSet, prevKey)
        )
      )
      .filter((record) => Boolean(record))
      .map((initialRecord) => ({
        ...initKeys
          .filter((key) => resultStructure[key] === 1)
          .reduce((acc, initKey, index) => {
            if (index === 0) firstValue = initialRecord[initKey];
            return { ...acc, [initKey]: initialRecord[initKey] };
          }, {}),
        ...initKeys
          .filter(
            (key) =>
              typeof resultStructure[key] === "object" &&
              resultStructure[key] !== null
          )
          .reduce((acc, initKey) => {
            return {
              ...acc,
              [initKey]: sqlJoinToJson(
                resultStructure[initKey],
                recordSet.filter(
                  (rs) => rs[Object.keys(resultStructure)[0]] === firstValue
                ),
                Object.keys(resultStructure)[0]
              ),
            };
          }, {}),
      }));
  } catch (err) {
    throw err;
  }
}

function compareNested(resultStructure, record, index, recordSet, prevKey) {
  const initKeys = Object.keys(resultStructure);

  if (prevKey) {
    return (rfind) =>
      rfind[prevKey] === record[prevKey] &&
      rfind[initKeys[0]] === record[initKeys[0]] &&
      index ===
        recordSet.findIndex((ri) => ri[initKeys[0]] === rfind[initKeys[0]]);
  } else
    return (rfind) =>
      rfind[initKeys[0]] === record[initKeys[0]] &&
      index ===
        recordSet.findIndex((ri) => ri[initKeys[0]] === rfind[initKeys[0]]);
}

module.exports = sqlJoinToJson;