

var RESUME_LINK = "https://drive.google.com/file/d/1ChD7D-x3_iYfBWNyqkbFBGxtLE2MGLTE/view?usp=sharing"; 
// Aug 2024

function makeHeader(link_location = "")
{
    //console.log("Making Headers...");
    var header = document.getElementById("head");
    header.className = "header";
    
    var head_name = document.createElement("a");
    head_name.className = "head_name";
    head_name.href = link_location + "index.html";
    head_name.innerHTML = "Joshua Kavner";
    
    var head_div = document.createElement("div");
    head_div.style = "line-height:54px; float:right;";
    
    var link1 = document.createElement("a");
    link1.href = link_location + "projects.html";
    link1.className = "head_links";
    link1.innerHTML = "Projects";
    
    var link2 = document.createElement("a");
    link2.href = link_location + "education.html";
    link2.className = "head_links";
    link2.innerHTML = "Education";
    
    var link2_1 = document.createElement("a");
    link2_1.href = link_location + "interests.html";
    link2_1.className = "head_links";
    link2_1.innerHTML = "Interests";
    
    var link3 = document.createElement("a");
    link3.href = link_location + "research.html";
    link3.className = "head_links";
    link3.innerHTML = "Research";
    
    var link4 = document.createElement("a");
    link4.href = link_location + "index.html";
    link4.className = "head_links";
    link4.innerHTML = "Ideas";
    
    var link5 = document.createElement("a");
    link5.href = RESUME_LINK;
    link5.target = "_blank"
    link5.className = "head_links";
    link5.innerHTML = "Curriculum Viate";
    
    //head_div.appendChild(link1);
    //head_div.appendChild(link2);
    //head_div.appendChild(link3);
    head_div.appendChild(link5);
    header.appendChild(head_name);
    header.appendChild(head_div);
    
}


function makeFooter(link_location = "")
{
    var footer = document.getElementById("foot");
    footer.className = "footer";
    
    var pDiv = document.createElement("div");
    pDiv.style="flex:60%; margin-left:10px;";
    
    var foot_name = document.createElement("a");
    foot_name.className = "foot_name";
    foot_name.href = link_location + "index.html";
    foot_name.innerHTML = "Joshua Kavner";
    
    var pDivSub = document.createElement("div");
    
    var link1 = document.createElement("a");
    link1.href = link_location + "projects.html";
    link1.className = "foot_links";
    link1.innerHTML = "Projects";
    
    var link2 = document.createElement("a");
    link2.href = link_location + "education.html";
    link2.className = "foot_links";
    link2.innerHTML = "Education";
    
    var link2_1 = document.createElement("a");
    link2_1.href = link_location + "interests.html";
    link2_1.className = "foot_links";
    link2_1.innerHTML = "Interests";
    
    var link3 = document.createElement("a");
    link3.href = link_location + "research.html";
    link3.className = "foot_links";
    link3.innerHTML = "Research";
    
    var link4 = document.createElement("a");
    link4.href = link_location + "index.html";
    link4.className = "foot_links";
    link4.innerHTML = "Ideas";
    
    var link5 = document.createElement("a");
    link5.href = RESUME_LINK;
    link5.target = "_blank"
    link5.className = "foot_links";
    link5.innerHTML = "Curriculum Viate";
    
    //pDivSub.appendChild(link1);
    //pDivSub.appendChild(link2);
    //pDivSub.appendChild(link3);
    //pDivSub.appendChild(link5);
    pDiv.appendChild(foot_name);
    //pDiv.appendChild(pDivSub);
    
    var sDiv = document.createElement("div");
    sDiv.style = "flex:40%; margin-right: 10px; text-align:right; white-space:nowrap;"
    
    var linkB = document.createElement("a");
    linkB.href = "mailto:kavnej@rpi.edu";
    linkB.style = "color:black; text-decoration:none";
    
    var emailBannar = document.createElement("img");
    emailBannar.src = "https://raw.githubusercontent.com/neilorangepeel/Free-Social-Icons/master/Flat/PNG/Mail.png"; //link_location + "Email Bannar.png";
    emailBannar.alt = "Email Bannar";
    emailBannar.style = "max-width:20px; border-radius:0.2em;";
    
    var emailText = document.createElement("p");
    emailText.innerHTML = "&nbsp;kavnej@rpi.edu";
    emailText.style = "margin:0; paddin:0; display:inline;";
    
    linkB.appendChild(emailBannar)
    linkB.appendChild(emailText)
    
    var linkL = document.createElement("a");
    linkL.href = "https://www.linkedin.com/in/joshua-kavner/";
    linkL.target = "_blank";
    linkL.style = "color:black; text-decoration:none;"
    linkL.innerHTML = "<br/>";
    
    var linkedInBannar = document.createElement("img");
    linkedInBannar.src = "https://raw.githubusercontent.com/neilorangepeel/Free-Social-Icons/master/Flat/PNG/LinkedIN.png"; //link_location + "LinkedIn Bannar.png";
    linkedInBannar.alt = "LinkedIn Bannar";
    linkedInBannar.style = "max-width:18px; border-radius:0.2em;";
    
    var linkedInText = document.createElement("p");
    linkedInText.innerHTML = "&nbsp;joshua-kavner"; //<br/>
    linkedInText.style = "margin:0; paddin:0; display:inline;";
    
    linkL.appendChild(linkedInBannar);
    linkL.appendChild(linkedInText);
    
    sDiv.appendChild(linkB);
    sDiv.appendChild(linkL);
    
    footer.appendChild(pDiv);
    footer.appendChild(sDiv);
}
















