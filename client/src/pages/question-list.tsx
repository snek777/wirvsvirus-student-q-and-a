import React from 'react';
import { useQuery } from 'react-fetching-library';

interface Question {
  _id: string;
  title: string;
  question: string;
  task: string;
  createdAt: string;
  createdBy: {
    _id: string;
    username: string;
  };
  subject: string;
  year: string;
}

const QuestionList = () => {
  const { payload: questions, loading } = useQuery<Question[]>({ method: 'GET', endpoint: '/api/v1/questions/list' });
  if (loading || !questions) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {questions.map(question => (
        <div key={question._id}>
          {question.createdBy.username}
          <br />
          {question.question}
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
