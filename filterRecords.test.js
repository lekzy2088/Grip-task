const filterRecords = require('./filterRecords');

describe('filterRecords', () => {
    const records = [
        {
          user_id: 1,
          device: "Windows 10",
          action: "start",
          date_actioned: 100,
        },
        {
          user_id: 2,
          device: "OSX 15.4",
          action: "start",
          date_actioned: 200,
        },
        {
          user_id: 1,
          device: "iPhone 8s",
          action: "start",
          date_actioned: 250,
        },
        {
          user_id: 1,
          device: "Windows 10",
          action: "stop",
          date_actioned: 370,
        },
        {
          user_id: 1,
          device: "iPhone 8s",
          action: "stop",
          date_actioned: 410,
        },
        {
          user_id: 2,
          device: "OSX 15.4",
          action: "stop",
          date_actioned: 490,
        },
        {
          user_id: 3,
          device: "Android 9.1",
          action: "start",
          date_actioned: 700,
        },
        {
          user_id: 3,
          device: "Android 9.1",
          action: "stop",
          date_actioned: 800,
        },
      ];

    it('should return an empty array if no records match the criteria', () => {
        expect(filterRecords(records, "start", 400, 500)).toEqual([]);
    });

    it('should return an array of user_ids for "start" action within the specified time window', () => {
        expect(filterRecords(records, "start", 150, 300)).toEqual([1,2]);
    });

    it('should return an array of user_ids for "stop" action within the specified time window', () => {
        expect(filterRecords(records, "stop", 200, 400)).toEqual([1]);
    });

    it('should return an array of user_ids for "start" action at the start of the time window', () => {
        expect(filterRecords(records, "start", 100, 200)).toEqual([1, 2]);
    });

    it('should return an array of user_ids for "stop" action at the end of the time window', () => {
        expect(filterRecords(records, "stop", 300, 370)).toEqual([1]);
    });
});