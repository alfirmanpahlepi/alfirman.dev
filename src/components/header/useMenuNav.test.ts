import { renderHook, act } from "@testing-library/react";
import useMenuNav from "./useMenuNav";

jest.mock("use-delayed-render", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({ mounted: true, rendered: true }),
}));

describe("useMenuNav", () => {
  test("toggleMenu toggles the menu state", () => {
    const { result } = renderHook(() => useMenuNav());

    const { toggleMenu } = result.current;

    expect(result.current.isMenuOpen).toBe(false);

    act(() => {
      toggleMenu();
    });

    expect(result.current.isMenuOpen).toBe(true);

    act(() => {
      toggleMenu();
    });

    expect(result.current.isMenuOpen).toBe(false);
  });
});
