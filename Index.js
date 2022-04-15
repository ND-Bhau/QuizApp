let QuestionCounter = 0;
let score = 0;

data = [{
        QuestionID: 1,
        Question: "Who was the first women prime minister of India?",
        a: "Indira Gandhi",
        b: "Pratibha Gandhi",
        c: "Sumitra Gandhi",
        d: "Sonia Gandhi",
        Answer: "a"
    },
    {
        QuestionID: 2,
        Question: "What is the total number of characters in the Hindi alphabet?",
        a: "62",
        b: "42",
        c: "52",
        d: "50",
        Answer: "c"
    },
    {
        QuestionID: 3,
        Question: "Which is the largest state in India?",
        a: "Maharashtra",
        b: "Rajasthan",
        c: "Uttar Pradesh",
        d: "Madhya Pradesh",
        Answer: "b"
    },
    {
        QuestionID: 4,
        Question: "Which are the Smallest States in India?",
        a: "Manipur",
        b: "Goa",
        c: "Uttarkhand",
        d: "Assam",
        Answer: "b"
    },
    {
        QuestionID: 5,
        Question: "What is the national song of India?",
        a: "Jan Gan Man…",
        b: "Vande Matram…",
        c: "Sare Jahan Se Acha…",
        d: "None of these",
        Answer: "b"
    },
];



function LoadQuestions() {
    let Q = [];
    data.forEach(element => {
        Q.push({
            QuestionID: element.QuestionID,
            Question: element.Question,
            a: element.a,
            b: element.b,
            c: element.c,
            d: element.d
        });
    });

    // this.log(Q);
    return Q;
}

let qu = document.getElementById('que');
let a = document.getElementById('a_ans');
let b = document.getElementById('b_ans');
let d = document.getElementById('c_ans');
let c = document.getElementById('d_ans');
let ans = document.querySelectorAll('.answer');

function loadque() {

    deselectAnswers();
    let Question = LoadQuestions();

    qu.innerText = Question[QuestionCounter].Question;
    a.innerText = Question[QuestionCounter].a;
    b.innerText = Question[QuestionCounter].b;
    c.innerText = Question[QuestionCounter].c;
    d.innerText = Question[QuestionCounter].d;

}

function submit() {
    const answer = getSelected();

    if (answer) {
        if (answer === data[QuestionCounter].Answer) {
            score++;
        }

        QuestionCounter++;

        if (QuestionCounter < data.length) {
            loadque();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${data.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
}

function deselectAnswers() {
    if (ans != null)
        ans.forEach((e) => {
            e.checked = false;
        });
}

function getSelected() {
    let answer = undefined;

    ans.forEach((e) => {
        if (e.checked) {
            answer = e.id;
        }
    });

    return answer;
}

function log(info) {
    console.log(info);
}

loadque();