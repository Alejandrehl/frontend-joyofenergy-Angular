import { formatDateLabel } from './chart';

describe('Chart Utils', () => {
  describe('formatDateLabel', () => {
    it('should format date label correctly', () => {
      expect(formatDateLabel(new Date(2021, 0, 1).getTime())).toBe('01/01');
      expect(formatDateLabel(new Date(2021, 1, 1).getTime())).toBe('01/02');
      expect(formatDateLabel(new Date(2021, 5, 1).getTime())).toBe('01/06');
      expect(formatDateLabel(new Date(2021, 11, 1).getTime())).toBe('01/12');
      expect(formatDateLabel(new Date(2021, 11, 25).getTime())).toBe('25/12');
      expect(formatDateLabel(new Date(2021, 11, 31).getTime())).toBe('31/12');
    });

    it('should handle single digit day and month', () => {
      expect(formatDateLabel(new Date(2021, 0, 5).getTime())).toBe('05/01');
      expect(formatDateLabel(new Date(2021, 8, 9).getTime())).toBe('09/09');
    });

    it('should handle double digit day and month', () => {
      expect(formatDateLabel(new Date(2021, 9, 15).getTime())).toBe('15/10');
      expect(formatDateLabel(new Date(2021, 11, 30).getTime())).toBe('30/12');
    });

    it('should handle edge cases', () => {
      expect(formatDateLabel(new Date(2021, 0, 1).getTime())).toBe('01/01');
      expect(formatDateLabel(new Date(2021, 11, 31).getTime())).toBe('31/12');
    });
  });
});
