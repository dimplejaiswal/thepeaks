import valueAt from './valueAt';

describe('valueAt Suite', () => {
    const obj = {
        a: {
            b: {
                c: 1,
            },
        },
    };
    it('Should extract with default value', () => {
        const val = valueAt(obj, 'a.b.c.d', 2);
        expect(val).toBe(2);
    });

    it('should extract the value', () => {
        const val = valueAt(obj, 'a.b.c', 2);
        expect(val).toBe(1);
    });
});
