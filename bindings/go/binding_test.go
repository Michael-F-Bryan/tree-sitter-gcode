package tree_sitter_gcode_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_gcode "github.com/michael-f-bryan/tree-sitter-gcode/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_gcode.Language())
	if language == nil {
		t.Errorf("Error loading G-Code grammar")
	}
}
