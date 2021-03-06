Unit tests should focus on interfaces, not implementation. Try changing the require statement in `strong-tests.test.js` from reverseString to reverseStringRefactor. You'll notice that those 4 tests still pass either way, and give you confidence that your refactored code has the same interface as before.

On the other hand, changing the require statement on `brittle-tests.test.js` will cause your test to fail. This is because during the refactor, you decided to simplify your implementation and remove an external dependency on a barely useful function. 

Refactoring the interal workings of functions should not cause tests to fail. Part of the power of unit tests is giving you confidence when you change or refactor code that you haven't broken an interface. The failures produced by `brittle-tests.test.js` don't give you any confidence in the interface of your function, and in fact slow you down when it comes to refactoring and improving code.
