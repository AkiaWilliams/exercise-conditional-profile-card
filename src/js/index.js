import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 */
function render(variables = {}) {
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let myName = "Lucy";
  if (variables.name != null) myName = variables.name;
  let myLastName = "Boilett";
  if (variables.lastname != null) myLastName = variables.lastname;

  let mySocialMediaPosition = "position-right";
  if (variables.socialMediaPosition != null) {
    mySocialMediaPosition = variables.socialMediaPosition;
  }
  let twitter = "";
  if (variables.twitter != null) twitter = variables.twitter;

  let github = "";
  if (variables.github != null) github = variables.github;

  let linkedin = "";
  if (variables.linkedin != null) linkedin = variables.linkedin;

  let instagram = "";
  if (variables.instagram != null) instagram = variables.instagram;

  let role = "Web Developer";
  if (variables.role != null) role = variables.role;

  let country = "USA";
  if (variables.country != null) country = variables.country;

  let city = "Miami";
  if (variables.city != null) city = variables.city;

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${myName} ${myLastName}</h1>
          <h2>${role}</h2>
          <h3>${city}, ${country}</h3>
          <ul class="${mySocialMediaPosition}">
            <li><a href="https://twitter.com/${twitter}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${github}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${linkedin}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${instagram}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == ""
          ? null
          : this.value == "true"
            ? true
            : this.value == "false"
              ? false
              : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
