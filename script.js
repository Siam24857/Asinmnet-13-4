 

let jobs = [
{
  id: 1,
  company: "React Native Developer",
  position: "Mobile First Corp",
  jobType: "Remote • Full-time • $130,000 - $175,000",
   
  description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
  applyStatus: "NOT APPLIED",
  status: "all"
},
{
  id: 2,
  company: "Web Designer & Developer",
  position: "WebFlow Agency",
  jobType: "Los Angeles, CA •  Part-time • $80,000 - $120,000",
   
  description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
  applyStatus: "NOT APPLIED",
  status: "all"
},
{
  id: 3,
  company: "Data Visualization Specialist",
  position: "DataViz Solutions",
  jobType: "Boston, MA • Full-time • $125,000 - $165,000",
   
  description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
  applyStatus: "NOT APPLIED",
  status: "all"
},
{
  id: 4,
  company: "Backend Developer",
  position: "CloudFirst Inc",
  jobType: "Seattle, WA • Full-time • $140,000 - $190,000",
   
  description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
  applyStatus: "NOT APPLIED",
  status: "all"
},
{
  id: 5,
  company: "UI/UX Engineer",
  position: "Innovation Labs",
  jobType: "Austin, TX • Full-time • $110,000 - $150,000",
   
  description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
  applyStatus: "NOT APPLIED",
  status: "all"
},
{
  id: 6,
  company: "JavaScript Developer",
  position: "MegaCorp Solutions",
  jobType: "New York, NY • Full-time • $130,000 - $170,00",
   
  description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
  applyStatus: "NOT APPLIED",
  status: "all"
},
{
  id: 7,
  company: "Full Stack Engineer",
  position: "StartupXYZ",
  jobType: "Remote • Full-time • $120,000 - $160,000",
   
  description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
  applyStatus: "NOT APPLIED",
  status: "all"
},
{
  id: 8,
  company: "Senior Frontend Developer",
  position: "TechCorp Industries",
  jobType: "San Francisco, CA • Full-time • $130,000 - $175,000",
   
  description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
  applyStatus: "NOT APPLIED",
  status: "all"
},
 
];

let currentTab = "all";

function setActiveButton() {
  document.getElementById("btn-all").classList.remove("active-btn");
  document.getElementById("btn-intervew").classList.remove("active-btn");
  document.getElementById("btn-rejected").classList.remove("active-btn");
  
  if(currentTab == "all") {
    document.getElementById("btn-all").classList.add("active-btn");
  } else if(currentTab == "interview") {
    document.getElementById("btn-intervew").classList.add("active-btn");
  } else if(currentTab == "rejected") {
    document.getElementById("btn-rejected").classList.add("active-btn");
  }
}

function showJobs(){

  const container = document.getElementById("jobContainer");
  container.innerHTML = "";

  let count = 0;

  for(let i = 0; i < jobs.length; i++){

    if(currentTab == "all" || jobs[i].status == currentTab){

      count++;

  container.innerHTML +=
        "<div class='bg-white p-4 rounded-xl shadow relative'>" +
        "<button onclick='deleteJob("+jobs[i].id+")' class='absolute top-2 right-2 text-gray-400 hover:text-red-500 border border-zinc-200 rounded-full pt-1 pr-2 pl-2 pb-1'><i class='fa-solid fa-trash-can'></i></button>" +
              "<h3 class='font-bold text-xl pr-6'>" + jobs[i].position + "</h3>" +
        "<p class='text-gray-600 font-semibold'>" + jobs[i].company + "</p>" +
        // "<p class='text-gray-500 text-sm'>" + jobs[i].location + "</p>" +
         "<div class='my-2'>" +
        "</div>" +
     "<div class='flex gap-2 my-2'>" +
        "<span class='  text-gray-500 text-xs px-2 py-1 rounded'>" + jobs[i].jobType + "</span>" +
        // "<span class=' text-gray-500 text-xs px-2 py-1 rounded'> " + jobs[i].salary + "</span>" +     
      "</div>" +
       "<span class='bg-[#EEF4FF]  text-xs px-2 py-3 rounded font-semibold inline-block mb-2'>" + jobs[i].applyStatus + "</span>" +
       "<p class='text-gray-600 text-sm mb-3'>" + jobs[i].description + "</p>" +
            "<div class='flex gap-2'>" +
        "<button onclick='setInterview("+jobs[i].id+")' class='btn btn-outline btn-success'>Interview</button>" +
               "<button onclick='setRejected("+jobs[i].id+")' class='btn btn-outline btn-error'>Rejected</button>" +
        "</div>" +
        "</div>";
        
    }
  }


  document.getElementById("tabCount").innerText = count;
  
  
  if(count == 1) {
    document.getElementById("job-text").innerText = "job";
  } else {
    document.getElementById("job-text").innerText = "jobs";
  }

  if(count == 0){
    document.getElementById("emptyState").classList.remove("hidden");
  }else{
    document.getElementById("emptyState").classList.add("hidden");
  }

  updateDashboard();
  setActiveButton();
}

function setInterview(id){

  for(let i = 0; i < jobs.length; i++){

   if(jobs[i].id == id){

     if(jobs[i].status == "interview"){
        jobs[i].status = "all";
      jobs[i].applyStatus = "NOT APPLIED";
      }else{
        jobs[i].status = "interview";
        jobs[i].applyStatus = "INTERVIEW";
      }
 
    }
  }

  showJobs();
}

function setRejected(id){

  for(let i = 0; i < jobs.length; i++){

    if(jobs[i].id == id){

      if(jobs[i].status == "rejected"){
        jobs[i].status = "all";
        jobs[i].applyStatus = "NOT APPLIED";
      }else{
    jobs[i].status = "rejected";
        jobs[i].applyStatus = "REJECTED";
      }

    }
  }

  showJobs();
}

function deleteJob(id){

  for(let i = 0; i < jobs.length; i++){

    if(jobs[i].id == id){
     jobs.splice(i,1);
      break;
    }
  }

  showJobs();
}

function updateDashboard(){

  let total = jobs.length;
  let interview = 0;
  let rejected = 0;

  for(let i = 0; i < jobs.length; i++){

  if(jobs[i].status == "interview"){
      interview++;
    }

    if(jobs[i].status == "rejected"){
      rejected++;
    }
  }

  document.getElementById("totalCount").innerText = total;
  document.getElementById("interviewCount").innerText = interview;
  document.getElementById("rejectedCount").innerText = rejected;
}

function showAll(){
  currentTab = "all";
  document.getElementById("ofText").classList.add("hidden");
  showJobs();
}

function showInterview(){
  currentTab = "interview";
  document.getElementById("ofText").classList.remove("hidden");
  showJobs();
}

function showRejected(){
  currentTab = "rejected";
  document.getElementById("ofText").classList.remove("hidden");
  showJobs();
}

showJobs();

// ## Answers to Questions

//### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

//= getElementbyId is slao called a Id but getElementsByClassName also called class.
//querySelector() and querySelectorAll() are JavaScript DOM methods used to select HTML elements using CSS selectors. querySelector() selects the first element that matches a specified CSS selector.


//### 2. How do you create and insert a new element into the DOM?
//=A create and insert a new element into the DOM in JavaScript and you use the document.createElement() method and then insert it using methods like appendChild() or append().

//### 3. What is Event Bubbling? And how does it work?
//= Event Bubbling is a concept in JavaScript where an event starts on the element that was clicked and then moves up to  parent elements.
//When you click on something like a button the event first works on that button. After that the same event goes to parent element. Then it continues going up to the next parent and it can keep going up until  reaches the document.

// ### 4. What is Event Delegation in JavaScript? Why is it useful?
// = Event Delegation is a technique in JavaScript where instead of adding event listeners to many child elements you add one event listener to their parent element and handle the events      from   there.
// It works because of Event Bubbling. When a child element is clicked, the event moves up to its parent. The parent can then check which child triggered the event and respond accordingly.
// Ex:
// <ul id="list">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// ### 5. What is the difference between preventDefault() and stopPropagation() methods?
// = For example when you click a link, it normally opens a new page. When you submit a form is normally reloads the page. If you use preventDefault() these default actions will not happen.
// Ex:

// document.querySelector("a").addEventListener("click", function(event) {
//   event.preventDefault();
//   console.log("Link click stopped");
// });
