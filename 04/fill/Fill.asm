// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/04/Fill.asm

// Runs an infinite loop that listens to the keyboard input.
// When a key is pressed (any key), the program blackens the screen,
// i.e. writes "black" in every pixel;
// the screen should remain fully black as long as the key is pressed. 
// When no key is pressed, the program clears the screen, i.e. writes
// "white" in every pixel;
// the screen should remain fully clear as long as no key is pressed.

// Put your code here.

(FILL)
    @SCREEN
    D=A
    @8191
    D=D+A
    @R1
    M=D

    (FILLLOOP)
        @R0
        D=M

        @R1
        A=M
        M=D

        @R1
        M=M-1
        D=M-1

        @SCREEN
        D=D-A
        @FILLLOOP
        D;JGE
@LOOP
0;JMP
