import {
    setMousePosition,
    getMousePosition,
    leftClick,
    rightClick,
    scrollDown,
    scrollUp,
    scrollLeft,
    scrollRight,
    dragTo,
    clickButton,
    pressButton,
    releaseButton,
    doubleClickButton,
} from "."
import { mouse } from "@nut-tree-fork/nut-js";

// test("set mouse position", async () => {
//     const result = await setMousePosition.invoke({ x: 200, y: 100 });
//     expect(result).toBe("success");
// })

// test("set mouse position with invalid args", async () => {
//     await expect(setMousePosition.invoke({ x: "invalid", y: 100 }))
//         .rejects.toThrow();
// })

// test("get mouse position", async () => {
//     await setMousePosition.invoke({ x: 200, y: 100 });
//     // wait a bit for the mouse to move
//     await new Promise((r) => setTimeout(r, 100));
//     const result = await getMousePosition.invoke();
//     expect(result).toBe("x: 200, y: 100");
// });

// test("move and click", async () => {
//     const moveResult = await setMousePosition.invoke({ x: 30, y: 70 });
//     expect(moveResult).toBe("success");

//     await leftClick.invoke();

//     const clickResult = await leftClick.invoke();
//     expect(clickResult).toBe("success");

//     const positionResult = await getMousePosition.invoke();
//     expect(positionResult).toBe("x: 30, y: 70");
// });

// test("move and scroll", async () => {
//     const moveResult = await setMousePosition.invoke({ x: 500, y: 500 });
//     expect(moveResult).toBe("success");

//     // focus
//     await leftClick.invoke();

//     const scrollUpResult = await scrollUp.invoke(200);
//     expect(scrollUpResult).toBe("success");

//     const scrollDownResult = await scrollDown.invoke(200);
//     expect(scrollDownResult).toBe("success");

//     const scrollLeftResult = await scrollLeft.invoke(200);
//     expect(scrollLeftResult).toBe("success");

//     const scrollRightResult = await scrollRight.invoke(200);
//     expect(scrollRightResult).toBe("success");
// })

// test("drag to", async () => {
//     const moveResult = await setMousePosition.invoke({ x: 860, y: 430 });
//     expect(moveResult).toBe("success");

//     // focus
//     await leftClick.invoke();

//     // wait a bit for the mouse to move
//     await new Promise((r) => setTimeout(r, 300));

//     const dragResult = await dragTo.invoke({ x: 1100, y: 430 });
//     expect(dragResult).toBe("success");

//     // wait a bit for the mouse to move
//     await new Promise((r) => setTimeout(r, 100));

//     const positionResult = await getMousePosition.invoke();
//     expect(positionResult).toBe("x: 1100, y: 430");
// });

// test("drag to and copy", async () => {
//     await setMousePosition.invoke({ x: 860, y: 430 });
//     // focus
//     await leftClick.invoke();
//     await new Promise((r) => setTimeout(r, 300));
//     await dragTo.invoke({ x: 1100, y: 430 });
//     const rightClickResult = await rightClick.invoke();
//     expect(rightClickResult).toBe("success");

//     await setMousePosition.invoke({ x: 1120, y: 480 });

//     // wait a bit for the mouse to move
//     await new Promise((r) => setTimeout(r, 100));
//     const positionResult2 = await getMousePosition.invoke();
//     expect(positionResult2).toBe("x: 1120, y: 480");

//     const clickResult = await leftClick.invoke();
//     expect(clickResult).toBe("success");
// })

// test("click button", async () => {
//     const result = await clickButton.invoke(2);
//     expect(result).toBe("success");
// });

// test("double click button", async () => {
//     const result = await doubleClickButton.invoke(0);
//     expect(result).toBe("success");
// });

// test("hold, move and release button", async () => {
//     await setMousePosition.invoke({ x: 800, y: 430 });
//     await leftClick.invoke();

//     const result = await pressButton.invoke(0);
//     expect(result).toBe("success");

//     await setMousePosition.invoke({ x: 1100, y: 430 });

//     const releaseResult = await releaseButton.invoke(0);
//     expect(releaseResult).toBe("success");
// })

test("scroll", async () => {
    await mouse.leftClick();
    const result = await scrollDown.invoke({ amount: 300 });
    expect(result).toBeDefined();
});
