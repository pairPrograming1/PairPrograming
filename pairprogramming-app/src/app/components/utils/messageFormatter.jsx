export const formatMessage = (text) => {
  return text.split("**").map((part, index) => {
    return index % 2 === 1 ? (
      <strong key={index} className="text-accent">
        {part}
      </strong>
    ) : (
      part
    );
  });
};

export const formatMessageWithBreaks = (text) => {
  return text.split("\n").map((line, index) => (
    <div key={index}>
      {formatMessage(line)}
      {index < text.split("\n").length - 1 && <br />}
    </div>
  ));
};
