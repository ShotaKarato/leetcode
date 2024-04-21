import { extractFlagAndQuestionName } from "./add_solution";

describe("extractFlagAndQuestionName", () => {
  it.each([
    {
      id: 1,
      args: [
        "/Users/shotakarato/Documents/ss/leetcode/node_modules/.bin/ts-node",
        "/Users/shotakarato/Documents/ss/leetcode/scripts/add_solution.ts",
        "-ts",
        "1290.",
        "Convert",
        "Binary",
        "Number",
        "in",
        "a",
        "Linked",
        "List",
        "to",
        "Integer",
      ],
      expected: {
        flag: "-ts",
        questionName: [
          "1290.",
          "Convert",
          "Binary",
          "Number",
          "in",
          "a",
          "Linked",
          "List",
          "to",
          "Integer",
        ],
      },
    },
    {
      id: 2,
      args: [
        "/Users/shotakarato/Documents/ss/leetcode/node_modules/.bin/ts-node",
        "/Users/shotakarato/Documents/ss/leetcode/scripts/add_solution.ts",
        "1290.",
        "Convert",
        "Binary",
        "Number",
        "in",
        "a",
        "Linked",
        "List",
        "to",
        "Integer",
        "-ts",
      ],
      expected: {
        flag: "-ts",
        questionName: [
          "1290.",
          "Convert",
          "Binary",
          "Number",
          "in",
          "a",
          "Linked",
          "List",
          "to",
          "Integer",
        ],
      },
    },
  ])(
    "should test case $id return correct flag & question name",
    ({ args, expected }) => {
      const { flag, questionName } = extractFlagAndQuestionName(args);
      expect(flag).toBe(expected.flag);
      expect(questionName).toEqual(expected.questionName);
    }
  );
  it("should throw an error if flag is missing", () => {
    const invalidArgs = [
      "/Users/shotakarato/Documents/ss/leetcode/node_modules/.bin/ts-node",
      "/Users/shotakarato/Documents/ss/leetcode/scripts/add_solution.ts",
      "1290.",
      "Convert",
      "Binary",
      "Number",
      "in",
      "a",
      "Linked",
      "List",
      "to",
      "Integer",
    ];

    expect(() => extractFlagAndQuestionName(invalidArgs)).toThrow(
      /^Oops! Flag is missing!$/
    );
  });
});
