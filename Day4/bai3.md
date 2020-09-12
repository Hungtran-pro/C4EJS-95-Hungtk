3.1 Object
3.2 Object
3.3
let len = hits.length;
for (let i = 0; i < len; i++) {
    console.log(\n);
    console.log(`Title: ${hits[i].jobTitle}`);
    console.log(`Salary: ${hits[i].jobSalary}`);
    console.log(`Benefits: ${hits[i].benefits.join(\n)}`);
    console.log(`Skills: ${hits[i].skills.join(\n)}`);
    console.log((`Requirements: ${hits[i].jobRequirement.join(\n)}`);
}