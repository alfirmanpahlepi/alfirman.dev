import { renderHook, act } from "@testing-library/react";
import useScrollPosition from "./useScrollPosition";

describe("useScrollPosition", () => {
  beforeEach(() => {
    // Mock window.pageYOffset
    Object.defineProperty(window, "pageYOffset", {
      writable: true,
      value: 0,
    });
  });

  it("should return the initial scroll position of 0", () => {
    const { result } = renderHook(() => useScrollPosition());
    expect(result.current).toBe(0);
  });

  it("should update the scroll position when the window is scrolled", () => {
    const { result } = renderHook(() => useScrollPosition());

    expect(result.current).toBe(0);

    // Simulate scrolling
    act(() => {
      window.pageYOffset = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(100);

    // Simulate scrolling further
    act(() => {
      window.pageYOffset = 200;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBe(200);
  });
});
