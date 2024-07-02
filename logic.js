window.addEventListener('load',calculate);
function calculate(){
document.getElementById('result').addEventListener('click',CalculateFLAMES);
}
function CalculateFLAMES() {
    const name1 = document.getElementById('name1').value.toLowerCase().replace(/\s+/g, '');
    const name2 = document.getElementById('name2').value.toLowerCase().replace(/\s+/g, '');

    let combined = name1 + name2;
    let uniqueChars = new Set(combined.split(''));
    let totalCount = 0;

    uniqueChars.forEach(char => {
        let count1 = name1.split(char).length - 1;
        let count2 = name2.split(char).length - 1;
        totalCount += Math.abs(count1 - count2);
    });

    const flames = ['Friends', 'Lovers', 'Affectionate', 'Marriage', 'Enemies', 'Siblings'];
    let index = 0;

    while (flames.length > 1) {
        index = (index + totalCount - 1) % flames.length;
        flames.splice(index, 1);
    }

    document.getElementById('result').innerText = "Result : " + flames[0];
}
function Resets(){
    document.getElementById('name1').value='';
    document.getElementById('name2').value='';
    document.getElementById('result').innerText ='';
}