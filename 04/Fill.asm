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

// High-level Language
// R2 = 0;
// while(true){
//  
//  if(KBD != null){
//    isFill=1      
//  }else{
//    isFill=0
//  }
//  Fill(isFill)
// }

////////////////////////////////////////////////
// (INIT)
//   if(KBD != 0) COLOR=0
//   else COLOR = -1
// (FILL)
//   @INIT
//   0;JMP
////////////////////////////////////////////////

(INIT)
    // addr = SCREEN
    @SCREEN
    D=A
    @addr
    M=D
    
    // if KBD > 0, goto PRESSED
    @KBD
    D=M
    @PRESSED
    D;JGT

    // else, goto UNPRESSED
    @UNPRESSED
    0;JMP

(PRESSED)
    // color = -1
    @color
    M = -1
    // goto FILL
    @FILL
    0;JMP

(UNPRESSED)
    // color = 1
    @color
    M=0
    // goto FILL
    @FILL
    0;JMP  
    
(FILL)

    // M[addr] = color
      // D = color
      @color
      D=M
      // M[addr]
      @addr
      A=M
      // M[addr] = D
      M=D
    
    // addr = addr + 1
    @addr
    M=M+1

    // D = 8192 + SCREEN - addr
    @8192
    D=A
    @SCREEN
    D=D+A
    @addr
    D=D-M

    // if D > 0, goto LOOP
    @LOOP
    D;JGT

    // else, goto INIT
    @INIT
    0;JMP