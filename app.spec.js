const app = (n) => {
  return n * n;
};

describe("App Test", () => {
  test("Quadrat Function", () => {
    expect(app(2)).toEqual(4);
  });
});
