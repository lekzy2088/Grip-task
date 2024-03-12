
const filterRecords = (records, action, startTime, endTime) => {
  // Check if StartTime is more than Stop time to return Empty list
  if (startTime > endTime){return []}
  // Filter records aacording to given conditions
  return records
    .filter(
      (record) =>
        record.action === action &&
        record.date_actioned >= startTime &&
        record.date_actioned <= endTime
    )
    .map((record) => record.user_id).sort();
};
// Export filterRecords function for testing
module.exports = filterRecords;
