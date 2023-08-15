// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...

getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
        
          const mashImg = document.getElementById('mashedPotatoesImg')
mashImg.style.display='block'
        },(err) => console.log(err))
      
      },(err) => console.log(err))
    
    },(err) => console.log(err))
  
  },(err) => console.log(err))

},(err) => console.log(err))



// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak',3)
  })
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 4)
  })
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 6)
  })
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 7)
  })
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return obtainInstruction('steak', 8)
  })
  const steakImg = document.getElementById('steakImg')
  steakImg.style.display='block'

// Iteration 3 using async/await

// async function makeBroccoli() {
//   const steps = [];
//   try {
//     const step1 = await obtainInstruction('broccoli', 0);
//     steps.push(step1);
//     const step2 = await obtainInstruction('broccoli', 1);
//     steps.push(step2);
//     const step3 = await obtainInstruction('broccoli', 2);
//     steps.push(step3);
//     const step4 = await obtainInstruction('broccoli', 3);
//     steps.push(step4);
//     const step5 = await obtainInstruction('broccoli', 4);
//     steps.push(step5);
//     const step6 = await obtainInstruction('broccoli', 5);
//     steps.push(step6);
//     const step7 = await obtainInstruction('broccoli', 6);
//     steps.push(step7);

//     let html = '<ul>';
//     for (let i = 0; i < steps.length; i++) {
//       html += `<li>${steps[i]}</li>`;
//     }
//     html += '<li>Broccoli is ready</li></ul>';
//     console.log(html);
//   } catch (error) {
//     console.log(error.message);
//   }
// }


async function makeBroccoli() {

  // try {
    const broccolies = document.querySelector('#broccoli')
    const step0 = await obtainInstruction("broccoli",0);
    broccolies.innerHTML += `<li>${step0}</li>`
    // const broccolies = document.querySelector('#broccoli')
    const step1 = await obtainInstruction("broccoli",1);
    broccolies.innerHTML += `<li>${step1}</li>`
    // const broccolies = document.querySelector('#broccoli')
    const step2 = await obtainInstruction("broccoli",2);
    broccolies.innerHTML += `<li>${step2}</li>`
    // const broccolies = document.querySelector('#broccoli')
    const step3 = await obtainInstruction("broccoli",3);
    broccolies.innerHTML += `<li>${step3}</li>`
    // const broccolies = document.querySelector('#broccoli')
    const step4 = await obtainInstruction("broccoli",4);
    broccolies.innerHTML += `<li>${step4}</li>`
    // const broccolies = document.querySelector('#broccoli')
    const step5  = await obtainInstruction("broccoli",5);
    broccolies.innerHTML += `<li>${step5}</li>`
    const step6  = await obtainInstruction("broccoli",6);
    broccolies.innerHTML += `<li>${step6}</li>`
    const brocImg = document.getElementById('broccoliImg')
    brocImg.style.display='block'
    
  
  } 
  makeBroccoli()
  // catch(err) {
    // console.log(err)
  // } 
// }

// Bonus 2 - Promise all
// ...
Promise.all([
    obtainInstruction("brusselsSprouts", 0),
    obtainInstruction("brusselsSprouts", 1),
    obtainInstruction("brusselsSprouts", 2),
    obtainInstruction("brusselsSprouts", 3),
    obtainInstruction("brusselsSprouts", 4),
  ]).then(([step0, step1, step2, step3, step4]) => {
    const brusselsSproutsList = 
    `<li>${step0}</li>
    <li>${step1}</li>
    <li>${step2}</li>
    <li>${step3}</li>
    <li>${step4}</li>`;
    document.querySelector("#brusselsSprouts").innerHTML += brusselsSproutsList;
    const brusselsSproutsImg = document.getElementById("brusselsSproutsImg");
    brusselsSproutsImg.style.display = "block";
  });