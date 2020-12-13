import FormVisibleReducer from "../../../reducers/FormVisibleReducer";

describe("FormVisibleReducer", () => {
  test("starts returning default action", () => {
    expect(FormVisibleReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
  });
});
