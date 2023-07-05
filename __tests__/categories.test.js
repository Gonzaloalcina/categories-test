const { categories, getCategoryPath } = require('../categories.js');

describe("should return", () => {
    test("should return the correct path for a given category", () => {
        expect(getCategoryPath(categories, 'category4')).toBe('/category1/category3/category4');
        expect(getCategoryPath(categories, 'category2')).toBe('/category1/category2');
        expect(getCategoryPath(categories, 'category5')).toBe('/category5');
    })
})
