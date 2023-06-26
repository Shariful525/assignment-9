import './Quiz.css';

const Quiz = ({ question }) => {
    const { options } = question;
    // console.log(question);
    // console.log(options);

    const bondhu = (e) => {

        const a = document.querySelector('#option')
        if (e.target === question.correctAnswer) {
            a.style.color = "green";
        }

        // a.style.color = "red";
        // console.dir(e.target);


    }




    return (
        <div >

            <h4>Question: <span>{question.question}</span>
            </h4>
            <div className='question'>
                {
                    options.map((option, i) => <div key={i} onClick={bondhu} id='option'>

                        <input id={option} type="radio" value={option} name={question.id} />
                        <label htmlFor={option}>{option}</label>



                    </div>)
                }
            </div>

        </div>
    );
};

export default Quiz;
