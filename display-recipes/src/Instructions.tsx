import './Instructions.scss'
interface InstructionsProps {
    instructions: string[];
  }
  
  const Instructions = ({ instructions } : InstructionsProps) => {
    return (
      <div  className='instructions-content'>
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    );
  };
  
  export default Instructions;