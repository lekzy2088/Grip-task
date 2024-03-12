const calculateUniquePlaybackTime = require('./calculateUniquePlaybackTime');

describe('calculateUniquePlaybackTime', () => {
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

    it('should return 430', () => {
        expect(calculateUniquePlaybackTime(1, records,)).toEqual(430);
    });

    it('should return 290', () => {
      expect(calculateUniquePlaybackTime(2, records,)).toEqual(290);
    });

    it('should return 100', () => {
      expect(calculateUniquePlaybackTime(3, records,)).toEqual(100);
    });
});
