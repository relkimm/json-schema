const Ajv = require("ajv");

describe("JSON 데이터 유효성 검사", () => {
  const ajv = new Ajv();
  const schema = {
    type: "object",
    properties: {
      name: { type: "string" },
      age: { type: "number" },
    },
    required: ["name", "age"],
  };
  const sut = ajv.compile(schema);

  describe("유효한 JSON 데이터를 전달하면", () => {
    test("true 를 반환한다.", () => {
      // given
      const 유효한_JSON = {
        name: "donggu",
        age: 31,
      };
      // when
      const actual = sut(유효한_JSON);
      // then
      expect(actual).toBe(true);
    });
  });
  describe("유효하지 않은 JSON 데이터를 전달하면", () => {
    test("false 를 반환한다.", () => {
      // given
      const 유효하지_않은_JSON = {
        name: "donggu",
        age: "31",
      };
      // when
      const actual = sut(유효하지_않은_JSON);
      // then
      expect(actual).toBe(false);
    });
  });
});
