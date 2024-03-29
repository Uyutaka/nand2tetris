// Draws a filled rectangle at the screen's top left corner, with width of 16 pixels and height of RAM[0] pixels.
// Usage: put a non-negative number (rectangle's height) in RAM[0]

// for (i=0;i<n;i++){
//  draw 16 blocks pixels at the beginning of row i    
// }
////////////////////////////////////////////////
// addr = SCREEN
// n=RAM[0]
// i = 0
// LOOP:
//  if i > n goto END
//  RAM[addr] = -1 // 1111 1111 1111 1111
//  //advances to the next row
//  addr = addr + 32
//  i = i + 1
//  goto LOOP
// END:
//  goto END
////////////////////////////////////////////////

@SCREEN
D=A
@addr
M=D // addr = 16384 (Screen's base address)

@0
D=M
@n
M=D // n = RAM[0]


@i
M=0 // i = 0

(LOOP)
@i
D=M
@n
D=D-M
@END
D; JGT // if i>n goto END

@addr
A=M
M=-1 // RAM[addr] = 1111 1111 1111 1111

@i
M=M+1 // i = i + 1

@32
D=A
@addr
M=D+M // addr = addr + 32

@LOOP
0; JMP // goto LOOP

(END)
@END // program's end
0; JMP // infinite loop