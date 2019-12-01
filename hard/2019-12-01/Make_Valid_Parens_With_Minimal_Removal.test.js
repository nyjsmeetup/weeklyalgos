const {
  minRemoveValidString,
} = require('./Make_Valid_Parens_With_Minimal_Removal.js');

describe('Make valid parens with minimal removal', () => {
  test('case 01', () => {
    const str1 = 'n(ew)y)or()k';
    const str1Modified = minRemoveValidString(str1);
    const diff = checkDiff(str1, str1Modified);

    expect(diff).toBe(1);
    expect(checkValidParens(str1Modified)).toBe(true);
  });
  test('case 02', () => {
    const str2 = ')h)e)ll)0(w(o(r(l(d)';
    const str2Modified = minRemoveValidString(str2);
    const diff = checkDiff(str2, str2Modified);

    expect(diff).toBe(8);
    expect(checkValidParens(str2Modified)).toBe(true);
  });
  test('case 03', () => {
    const str3 = '(()(())())))(((((';
    const str3Modified = minRemoveValidString(str3);
    const diff = checkDiff(str3, str3Modified);

    expect(diff).toBe(7);
    expect(checkValidParens(str3Modified)).toBe(true);
  });
  test('case 04', () => {
    const str4 = 'unicorn(';
    const str4Modified = minRemoveValidString(str4);
    const diff = checkDiff(str4, str4Modified);

    expect(diff).toBe(1);
    expect(checkValidParens(str4Modified)).toBe(true);
  });
  test('case 05', () => {
    const str5 = '(r(a(i(n(b(o(w)o)b)n)i)a)r)';
    const str5Modified = minRemoveValidString(str5);
    const diff = checkDiff(str5, str5Modified);

    expect(diff).toBe(0);
    expect(checkValidParens(str5Modified)).toBe(true);
  });
  test('case 06', () => {
    const str6 = '((c)o)d(e)))';
    const str6Modified = minRemoveValidString(str6);
    const diff = checkDiff(str6, str6Modified);

    expect(diff).toBe(2);
    expect(checkValidParens(str6Modified)).toBe(true);
  });
});

function checkDiff(originalStr, modifiedStr) {
  let diffCount = 0;
  let origArr = originalStr.split('');
  let modArr = modifiedStr.split('');
  for (let i = 0; i < originalStr.length; i += 1) {
    if (modArr[i] !== origArr[i]) {
      modArr.splice(i, 0, '!');
      diffCount += 1;
    }
  }
  return diffCount;
}

function checkValidParens(str) {
  const stack = [];
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i += 1) {
    const char = strArr[i];
    if (char === '(') {
      stack.push('(');
    } else if (char === ')') {
      if (!stack.length) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
}
