import { Whitespace, Word, WordPara, WordBox, Wordbtn } from "@/app/styles";

export const Welcome = () => {
  return (
    <div>
      <WordBox>
        <WordPara>
          <Word>Welcome</Word>
          <Whitespace> </Whitespace>
          <Word>to</Word>
          <Whitespace> </Whitespace>
          <Word>Somewhere.</Word>
        </WordPara>
        <WordPara>
          <Word>A</Word>
          <Whitespace> </Whitespace>
          <Word>Cocktail</Word>
          <Whitespace> </Whitespace>
          <Word>bar</Word>
          <Whitespace> </Whitespace>
          <Word>and</Word>
          <Whitespace> </Whitespace>
          <Word>experience.</Word>
        </WordPara>
        <WordPara>
          <Word>A</Word>
          <Whitespace> </Whitespace>
          <Word>portal</Word>
          <Whitespace> </Whitespace>
          <Word>to</Word>
          <Whitespace> </Whitespace>
          <Word>the</Word>
          <Whitespace> </Whitespace>
          <Word>extraordinary.</Word>
        </WordPara>
        <Wordbtn >Book Now</Wordbtn>
      </WordBox>
    </div>
  );
};
