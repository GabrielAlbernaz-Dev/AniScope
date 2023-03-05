import React from 'react'

const RadioQuiz = ({answers,name,value,checkmark,onChange,labelClass,...props}) => {

  if(!answers.length) return null;

  return (
    <>
      {answers.map(answer => (
        <label key={`${answer.text}-${answer.name}`} className={labelClass} htmlFor={answer.name}>
          <input id={answer.name} name={name} value={answer.name} type="radio" onChange={onChange} {...props} />
            {checkmark && <span className={checkmark}></span>}
            {answer.text}
        </label>
      ))}
    </>
  )
}

export default RadioQuiz