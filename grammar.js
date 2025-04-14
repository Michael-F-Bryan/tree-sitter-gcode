/**
 * @file Gcode grammar for tree-sitter
 * @author Michael-F-Bryan <consulting@michaelfbryan.com>
 * @license MIT AND Apache-2.0
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "gcode",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
