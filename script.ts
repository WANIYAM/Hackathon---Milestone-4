
// Get form fields and display elements
const nameField = document.getElementById("nameField") as HTMLInputElement;
const contactField = document.getElementById("contactField") as HTMLInputElement;
const addressField = document.getElementById("addressField") as HTMLInputElement;
const fbField = document.getElementById("fbField") as HTMLInputElement;
const instaField = document.getElementById("instaField") as HTMLInputElement;
const linkedInField = document.getElementById("linkedInField") as HTMLInputElement;
const objectiveField = document.getElementById("objectiveField") as HTMLTextAreaElement;
const imgField = document.getElementById("imgField") as HTMLInputElement;
const profileImage = document.querySelector(".myimg") as HTMLImageElement;

// Target template areas for the resume
const nameT1 = document.getElementById("nameT1") as HTMLElement;
const nameT2 = document.getElementById("nameT2") as HTMLElement;
const contactT = document.getElementById("contactT") as HTMLElement;
const adT = document.getElementById("adT") as HTMLElement;
const fbT = document.getElementById("fbT") as HTMLAnchorElement;
const instaT = document.getElementById("instaT") as HTMLAnchorElement;
const linkT = document.getElementById("linkT") as HTMLAnchorElement;
const objT = document.getElementById("objT") as HTMLElement;
const weT = document.getElementById("weT") as HTMLElement;
const acT = document.getElementById("acT") as HTMLElement;

// Validate the form
function validateForm(): boolean {
  const name: string = nameField.value;
  const contact: string = contactField.value;
  const address: string = addressField.value;
  const objective: string = objectiveField.value;
  const skills = document.querySelectorAll(".skillsField") as NodeListOf<HTMLTextAreaElement>;
  const workExperience = document.querySelectorAll(".weField") as NodeListOf<HTMLTextAreaElement>;
  const academicQualification = document.querySelectorAll(".AcField") as NodeListOf<HTMLTextAreaElement>;

  if (
    name === "" ||
    contact === "" ||
    address === "" ||
    objective === "" ||
    Array.from(skills).some(skill => skill.value.trim() === "") ||
    Array.from(workExperience).some(work => work.value.trim() === "") ||
    Array.from(academicQualification).some(ac => ac.value.trim() === "")
  ) {
    alert("Please fill in all fields before generating the CV.");
    return false; // Prevents the CV generation
  }
  return true; // Proceed with CV generation
}

// Generate CV
function generateCV(): void {
  if (validateForm()) {
    // Hide the form and show the resume template
    (document.getElementById("Resume-Form") as HTMLElement).style.display = "none";
    (document.getElementById("Resume-Template") as HTMLElement).style.display = "block";

    // Personal Information
    nameT1.innerText = nameField.value;
    nameT2.innerText = nameField.value;
    contactT.innerText = contactField.value;
    adT.innerText = addressField.value;

    // Social Links
    fbT.href = fbField.value || "#";
    fbT.innerText = fbField.value || "Facebook";
    instaT.href = instaField.value || "#";
    instaT.innerText = instaField.value || "Instagram";
    linkT.href = linkedInField.value || "#";
    linkT.innerText = linkedInField.value || "LinkedIn";

    // Objective
    objT.innerText = objectiveField.value || "Your Objective goes here.";

    // Skills
    const skillsElement = document.querySelector(".skills-box ul") as HTMLUListElement;
    skillsElement.innerHTML = ""; // Clear existing skills
    const skillsList = document.querySelectorAll(".skillsField") as NodeListOf<HTMLTextAreaElement>;
    skillsList.forEach(skill => {
      if (skill.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = skill.value.trim();
        skillsElement.appendChild(li);
      }
    });

    // Work Experience
    const workExperienceElement = document.getElementById("weT") as HTMLUListElement;
    workExperienceElement.innerHTML = ""; // Clear existing work experience
    const workExperienceList = document.querySelectorAll(".weField") as NodeListOf<HTMLTextAreaElement>;
    workExperienceList.forEach(workField => {
      if (workField.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = workField.value.trim();
        workExperienceElement.appendChild(li);
      }
    });

    // Academic Qualification
    const academicElement = document.getElementById("acT") as HTMLUListElement;
    academicElement.innerHTML = ""; // Clear existing academic qualifications
    const academicList = document.querySelectorAll(".AcField") as NodeListOf<HTMLTextAreaElement>;
    academicList.forEach(acField => {
      if (acField.value.trim() !== "") {
        let li = document.createElement("li");
        li.innerText = acField.value.trim();
        academicElement.appendChild(li);
      }
    });

    // Profile Image
    const file = imgField.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event: ProgressEvent<FileReader>) {
        if (event.target?.result) {
          profileImage.src = event.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
  }
}

// Add new work experience field
function addNewweField(): void {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "weField", "mt-2");
  newNode.setAttribute("placeholder", "Enter your Work experience");
  newNode.setAttribute("rows", "3");
  document.getElementById("we")?.appendChild(newNode);
}

// Add new academic qualification field
function addNewAcField(): void {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "AcField", "mt-2");
  newNode.setAttribute("placeholder", "Enter your Academic Qualification");
  newNode.setAttribute("rows", "3");
  document.getElementById("Ac")?.appendChild(newNode);
}

// Add new skills field
function addNewSkillsField(): void {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control", "skillsField", "mt-2");
  newNode.setAttribute("placeholder", "Enter your skill");
  newNode.setAttribute("rows", "3");
  document.getElementById("skills")?.appendChild(newNode);
}

// Generate CV Below
function generateCVBelow(): void {
  if (validateForm()) {
    // Show the resume template
    (document.getElementById("Resume-Template") as HTMLElement).style.display = "block";

    // Personal Information
    nameT1.innerText = nameField.value;
    nameT2.innerText = nameField.value;
    contactT.innerText = contactField.value;
    adT.innerText = addressField.value;
    objT.innerText = objectiveField.value;

    // Social Links
    fbT.href = fbField.value || "#";
    fbT.innerText = fbField.value || "Facebook";
    instaT.href = instaField.value || "#";
    instaT.innerText = instaField.value || "Instagram";
    linkT.href = linkedInField.value || "#";
    linkT.innerText = linkedInField.value || "LinkedIn";

    // Work Experience
    const workExperienceElement = document.getElementById("weT") as HTMLUListElement;
    workExperienceElement.innerHTML = "";
    document.querySelectorAll(".weField").forEach(e => {
      if ((e as HTMLTextAreaElement).value.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = (e as HTMLTextAreaElement).value.trim();
        workExperienceElement.appendChild(listItem);
      }
    });

    // Academic Qualifications
    const academicElement = document.getElementById("acT") as HTMLUListElement;
    academicElement.innerHTML = "";
    document.querySelectorAll(".AcField").forEach(e => {
      if ((e as HTMLTextAreaElement).value.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = (e as HTMLTextAreaElement).value.trim();
        academicElement.appendChild(listItem);
      }
    });

    // Skills
    const skillsElement = document.querySelector(".skills-box ul") as HTMLUListElement;
    skillsElement.innerHTML = "";
    document.querySelectorAll(".skillsField").forEach(e => {
      if ((e as HTMLTextAreaElement).value.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = (e as HTMLTextAreaElement).value.trim();
        skillsElement.appendChild(listItem);
      }
    });

    // Profile Image
    const file = imgField.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e: ProgressEvent<FileReader>) {
        if (e.target?.result) {
          profileImage.src = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);
    }
    
  }
}

// / Edit Resume
function editResume(): void {
  (document.getElementById("Resume-Form") as HTMLElement).style.display = "block";
  (document.getElementById("Resume-Template") as HTMLElement).style.display = "none";

  nameField.value = nameT1.innerText;
  contactField.value = contactT.innerText;
  addressField.value = adT.innerText;
  objectiveField.value = objT.innerText;
}

// Expose functions to the global scope
(window as any).generateCV = generateCV;
(window as any).generateCVBelow = generateCVBelow;
(window as any).editResume = editResume;
(window as any).addNewSkillsField = addNewSkillsField;
(window as any).addNewweField = addNewweField;
(window as any).addNewAcField = addNewAcField;

