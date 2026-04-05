// Save form data to localStorage & display feedback
document.getElementById("touristForm").addEventListener("submit", function(e){
  e.preventDefault();

  const product = document.getElementById("product").value;
  const date = document.getElementById("date").value;
  const services = [];
  if(document.getElementById("guide").checked) services.push("Tour Guide");
  if(document.getElementById("transport").checked) services.push("Transport");
  if(document.getElementById("accommodation").checked) services.push("Accommodation");
  if(document.getElementById("meals").checked) services.push("Meals");
  const comments = document.getElementById("comments").value;

  const feedback = {
    product,
    date,
    services,
    comments
  };

  // Save to localStorage
  let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];
  feedbackList.push(feedback);
  localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

  // Display feedback
  const output = document.getElementById("feedbackOutput");
  output.innerHTML = `<h3>Thank you for your feedback!</h3>
                      <p>Product: ${product}</p>
                      <p>Date: ${date}</p>
                      <p>Services: ${services.join(", ")}</p>
                      <p>Comments: ${comments}</p>`;

  this.reset();
});