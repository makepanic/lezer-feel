import { styleTags, tags as t } from '@lezer/highlight';

export const feelHighlighting = styleTags({
  'StringLiteral': t.string,
  'NumericLiteral': t.number,
  'BooleanLiteral': t.bool,
  'Name QualifiedName': t.name,
  'CompareOp': t.compareOperator,
  'ArithOp': t.arithmeticOperator,
  'PropertyName PathExpression/Name Key': t.propertyName,
  'for if then else some every satisfies between': t.controlKeyword,
  'in return instance of and or': t.operatorKeyword,
  'function': t.definitionKeyword,
  'FormalParameter/Type!': t.typeName,
  'as': t.keyword,
  'Wildcard': t.special,
  'null': t.null,
  ',': t.separator,
  '[ ]': t.squareBracket,
  '{ }': t.brace,
  '( )': t.paren,
  'LineComment': t.lineComment,
  'BlockComment': t.blockComment,
  'ParameterName VariableName ?': t.variableName,
  'DateTimeConstructor! SpecialFunctionName BuiltInFunctionName': t.function(t.special(t.variableName)),
  'FunctionInvocation/VariableName': t.function(t.variableName),
  'List Interval': t.list,
  'BuiltInType ListType ContextType FunctionType': t.function(t.typeName),
  'Context': t.definition(t.literal),
  'ContextEntry/Key': t.variableName,
  'InExpression/Name': t.local(t.variableName),
  'ParameterName/Name': t.local(t.variableName),
  'IterationContext/".." Interval/".." "."': t.punctuation
});