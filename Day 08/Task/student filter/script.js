const data = [
    {aum : 94},
    {shreyas : 60},
    {rohit : 45},
    {kartavya: 20},
    {david : 23},
    {gupta : 16},
    {parth : 23},
    {henish : 78},
    {cbum : 35},
    {kohli : 67},
    {devansh : 12}
]

let ans = data.filter((e) => {
    return Object.values(e)[0] >= 35;
})  

for(let i = 0; i < ans.length; i++){
    let answer = document.createElement("p")
    answer.textContent = JSON.stringify(ans[i])   //json.stringify converts Object or array to string
    document.body.appendChild(answer)
}




