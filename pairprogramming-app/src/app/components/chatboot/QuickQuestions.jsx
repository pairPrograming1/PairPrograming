import { commonQuestions } from "../utils/intelligentResponses";

export const QuickQuestions = ({ onQuestionClick }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {commonQuestions.map((question, index) => (
        <button
          key={index}
          onClick={() => onQuestionClick(question)}
          className="text-xs bg-background hover:bg-hover-bg text-secondary-text border border-border-color px-3 py-1 rounded-full transition-colors hover:text-accent hover:border-accent"
        >
          {question}
        </button>
      ))}
    </div>
  );
};
