let alert = document.getElementById('alert');
let fullName = document.getElementById('fullName');
let cls = document.getElementById('cls');
let sec = document.getElementById('sec');
let rollNo = document.getElementById('rollNo');
let obt = document.getElementById('obt');
let perc = document.getElementById('perc');
let grade = document.getElementById('grade');
let remarks = document.getElementById('remarks');
let subjects = document.querySelectorAll('.subject');
let eng = document.getElementById('eng');
let isl = document.getElementById('isl');
let comp = document.getElementById('comp');
let phy = document.getElementById('phy');
let chem = document.getElementById('chem');
let inputs = document.querySelectorAll('input');
let result = document.getElementById('result');
let clear = document.getElementById('clear');


Array.from(inputs).forEach((input) => {
    clear.addEventListener('click', (e)=>{
    input.value = "";
    input.style.background = 'white'
}) })

Array.from(subjects).forEach((subject) => {
    
        subject.addEventListener('input', function validation(){
            if(subject.value > 100 || subject.value == ""){
              alert.style.background = 'red';
              alert.style.color = 'white';
              alert.style.textAlign = 'center';
              alert.innerHTML = "Above 100 numbers Or empty fields are not allowed!";
                subject.style.background = 'red';
                subject.style.color = 'white';           
            }
            
            else if(subject.value <= 100 || subject.value >= 0){
                subject.style.background = 'green';
                subject.style.color = 'white';
                alert.style.background = 'none';
              alert.style.color = 'rgb(18, 4, 37)';
              alert.style.textAlign = 'center';
              alert.innerHTML = "Marksheet Calculator";
            }          
        })
    })
    
    function showResult() { 
       
result.classList.toggle('show-result');

        document.getElementById('fullName').innerHTML = 'Name: ' + document.getElementById('first-n').value + " " + document.getElementById('last-n').value;
        document.getElementById('cls').innerHTML = 'Class: ' + document.getElementById('class').value ;
        document.getElementById('sec').innerHTML = 'Section: ' + document.getElementById('section').value;
        document.getElementById('rollNo').innerHTML = 'Roll no: ' + document.getElementById('roll').value;
        let total =  +isl.value + +comp.value + +eng.value + +phy.value + +chem.value;
        let percent =  total /5;
        document.getElementById('obt').innerHTML = 'Obtained Marks: ' + total + "/500";
        document.getElementById('perc').innerHTML = 'Percentage: ' + percent + '%';
        if(percent >=80){
            document.getElementById('grade').innerHTML = 'Grade : A+';
            document.getElementById('remarks').innerHTML = 'Remarks: Excellent!';
        }
        else if(percent >=70){
            document.getElementById('grade').innerHTML = 'Grade : A';
            document.getElementById('remarks').innerHTML = 'Remarks: Very Good!';
        }
        else if(percent >=60){
            document.getElementById('grade').innerHTML = 'Grade : B';
            document.getElementById('remarks').innerHTML = 'Remarks: Good enough!';
        }
        else if(percent >=50){
            document.getElementById('grade').innerHTML = 'Grade : C';
            document.getElementById('remarks').innerHTML = 'Remarks: Need Improvement!';
        }
        else if(percent >=40){
            document.getElementById('grade').innerHTML = 'Grade : D';
            document.getElementById('remarks').innerHTML = 'Remarks: Work hard!';
        }

        else if(percent >=30){
            document.getElementById('grade').innerHTML = 'Grade : E';
            document.getElementById('remarks').innerHTML = 'Remarks: Very low result!';
        }
        
        else{
            document.getElementById('grade').innerHTML = 'Grade : No Grade';
            document.getElementById('remarks').innerHTML = 'Remarks: Failed!';
        }
    }
    
    function goBack(){
        result.classList.remove('show-result');
    }