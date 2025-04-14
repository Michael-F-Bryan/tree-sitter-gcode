/**
 * @file G-Code grammar for tree-sitter
 * @author Michael-F-Bryan <consulting@michaelfbryan.com>
 * @license MIT AND Apache-2.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "gcode",
  extras: $ => [$.inline_comment, $.line_comment, /\s+/],
  word: $ => $.letter,
  rules: {
    source_file: $ => repeat($.line),
    line: $ => choice(
      field("line_number", $.line_number),
      seq(
        field("line_number", optional($.line_number)),
        repeat1($.statement),
      ),
    ),
    statement: $ => seq(
      field("command", $.command),
      field("parameters", repeat($.parameter)),
    ),
    command: $ => seq($.command_name, $.number),
    command_name: $ => /[GMT]/,
    line_number: $ => seq("N", $.number),
    parameter: $ => seq(
      field("letter", $.letter),
      field("value", $.number),
    ),
    letter: $ => /[A-Z]/,
    number: $ => /-?(\d*\.?\d+)|(\d+\.\d*)/,
    line_comment: $ => /;.*\n/,
    inline_comment: $ => /\([^)]*\)/,
  },
});
