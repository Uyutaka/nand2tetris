// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/04/Mult.asm

// Multiplies R0 and R1 and stores the result in R2.
// (R0, R1, R2 refer to RAM[0], RAM[1], and RAM[2], respectively.)
//
// This program only needs to handle arguments that satisfy
// R0 >= 0, R1 >= 0, and R0*R1 < 32768.

// Put your code here.
// 高級言語版
// R2 = 0;
// while(0 < R1){
//  R2 = R0 + R2
//  R1 = R1 - 1
// }
//
@R2
M = 0 // R2 = 0

@R1
D=M
@END
D;JLE

(LOOP)
@R0
D=M // D = R0

@R2
M=M+D // R2 = R2 + R0

@R1
M=M-1 // R1 = R1 - 1
D = M


@LOOP
D;JGT

(END)
@END
0;JMP

