# Compiler Design and Development

**Context:** practical compiler design course project.  
**Implementation language:** C++.  
**Scope:** a simplified subset of AML, not a replacement for the full proprietary language or compiler.

## Overview

Developed a compiler that translates a simplified AML subset into x86-64 assembly, with support for building and running Windows executables.

```text
Simplified AML source
        ↓
Lexical analysis → Parsing → Semantic validation
        ↓
x86-64 assembly generation
        ↓
NASM object file → MinGW-w64 linking
        ↓
Windows executable
```

## Work covered

Implemented the core compilation stages, extended the pipeline from generated assembly to executable programs, and used example programs, automated checks, and technical documentation to explain and validate the design.

## What this page does and does not provide

This is a written overview of the course implementation. The final source package, reproducible build instructions, example output, and verified test results have not yet been added to this public repository. No current passing-test count is claimed here.

The project's implementation should be separated from restricted course materials and company code before any source release. No redistribution of the full AML runtime or compiler is implied.

[Back to portfolio](../README.md)
