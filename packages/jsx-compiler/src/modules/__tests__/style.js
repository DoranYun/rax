const t = require('@babel/types');
const { _transform } = require('../style');
const { parseExpression } = require('../../parser');
const genExpression = require('../../codegen/genExpression');
const genCode = require('../../codegen/genCode');

function genInlineCode(ast) {
  return genCode(ast, {
    comments: false, // Remove template comments.
    concise: true, // Reduce whitespace, but not to disable all.
  });
}

function genDynamicAttrs(dynamicValue) {
  const properties = [];
  Object.keys(dynamicValue).forEach((key) => {
    properties.push(t.objectProperty(t.identifier(key), dynamicValue[key]));
  });
  return genInlineCode(t.objectExpression(properties)).code;
}

describe('Transform style', () => {
  it('should transform style props', () => {
    const raw = '<Text style={styles.name}>hello</Text>';
    const expected = '<Text style="{{_s0}}">hello</Text>';
    const expectedDynamicValue = '{ _s0: __create_style__(styles.name) }';
    const ast = parseExpression(raw);
    const dynamicValue = _transform(ast);
    expect(genExpression(ast)).toEqual(expected);
    expect(genDynamicAttrs(dynamicValue)).toEqual(expectedDynamicValue);
  });
});
