
const calculateUniquePlaybackTime = (user_id, records) => {
  // Get records with user_id
    const userRecords = records.filter((record) => record.user_id === user_id);
    const timeStartArr = [];
    const timeStopArr = [];
    let totalUniquePlaybackTime = 0;
    // Seperate records into start and stop lists
    userRecords.forEach((record) => {
      if (record.action === "start") {
        timeStartArr.push(record);
      } else if (record.action === "stop") {
        timeStopArr.push(record);
      }
    });
    // Add playback times check start against stop list
    timeStartArr.forEach((record) => {
      let stopTime = timeStopArr.filter(
        (stopTimeRecord) => stopTimeRecord.device === record.device
      )[0].date_actioned;
      totalUniquePlaybackTime =
        totalUniquePlaybackTime + (stopTime - record.date_actioned);
    });
    // return Total playback
    return totalUniquePlaybackTime;
  };

  module.exports = calculateUniquePlaybackTime;
