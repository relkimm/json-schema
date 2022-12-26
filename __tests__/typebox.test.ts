const { Type } = require("@sinclair/typebox");
const Ajv = require("ajv");

describe("Schema 생성", () => {
  const schema = Type.Object({
    name: Type.String(),
    age: Type.Number(),
  });

  const ajv = new Ajv();
  const validate = ajv.compile(schema);

  describe("유효한 JSON 데이터를 전달하면", () => {
    test("true 를 반환한다.", () => {
      const 유효한_JSON = {
        name: "동구",
        age: 31,
      };

      const actual = validate(유효한_JSON);
      expect(actual).toBe(true);
    });
  });

  describe("유효하지 않은 JSON 데이터를 전달하면", () => {
    test("false 를 반환한다.", () => {
      const 유효하지_않은_JSON = {
        name: "동구",
        age: "31",
      };

      const actual = validate(유효하지_않은_JSON);
      expect(actual).toBe(false);
    });
  });
});
