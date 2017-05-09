var searchStrByHexFaInput = "", searchStrByFaHexInput = "";       
var hexFaIcon = document.getElementById("hexFaIcon"); 
var faHexIcon = document.getElementById("faHexIcon");
var iconFound = ""; 
var hexFound = ""; 

var escapeIndex = {
    "fontAwesomeIcons":[
         /* Accesibilidad */
         {"icon":"american-sign-language-interpreting","unicodeEscape":"f2a3"},
         {"icon":"asl-interpreting","unicodeEscape":"f2a3"},
         {"icon":"assistive-listening-systems","unicodeEscape":"f2a2"},
         {"icon":"audio-description","unicodeEscape":"f29e"},
         {"icon":"blind","unicodeEscape":"f29d"},
         {"icon":"braille","unicodeEscape":"f2a1"},
         {"icon":"cc","unicodeEscape":"f20a"},
         {"icon":"deaf", "unicodeEscape":"f2a4"},
         {"icon":"deafness","unicodeEscape":"f2a4"},
         {"icon":"hard-of-hearing", "unicodeEscape":"f2a4"},
         {"icon":"low-vision","unicodeEscape":"f2a8"},
         {"icon":"question-circle-o","unicodeEscape":"f29c"},
         {"icon":"sign-language","unicodeEscape":"f2a7"},
         {"icon":"signing", "unicodeEscape":"f2a7"},
         {"icon":"tty","unicodeEscape":"f1e4"},
         {"icon":"universal-access", "unicodeEscape":"f29a"},
         {"icon":"volume-control-phone", "unicodeEscape":"f2a0"},
         {"icon":"wheelchair", "unicodeEscape":"f193"},
         {"icon":"wheelchair-alt", "unicodeEscape":"f29b"},
         /* Mano */
         {"icon":"hand-grab-o","unicodeEscape":"f255"},
         {"icon":"hand-lizard-o","unicodeEscape":"f258"},
         {"icon":"hand-o-down","unicodeEscape":"f0a7"},
         {"icon":"hand-o-left","unicodeEscape":"f0a5"},
         {"icon":"hand-o-right","unicodeEscape":"f0a4"},
         {"icon":"hand-o-up","unicodeEscape":"f0a6"},
         {"icon":"hand-paper-o","unicodeEscape":"f256"},
         {"icon":"hand-peace-o","unicodeEscape":"f25b"},
         {"icon":"hand-pointer-o","unicodeEscape":"f25a"},
         {"icon":"hand-rock-o","unicodeEscape":"f255"},
         {"icon":"hand-scissors-o","unicodeEscape":"f257"},
         {"icon":"hand-spock-o","unicodeEscape":"f259"},
         {"icon":"hand-stop-o","unicodeEscape":"f256"},
         {"icon":"thumbs-down","unicodeEscape":"f165"},
         {"icon":"thumbs-o-down","unicodeEscape":"f088"},
         {"icon":"thumbs-o-up","unicodeEscape":"f087"},
         {"icon":"thumbs-up",unicodeEscape:"f164"},
         /* Transporte */
         {"icon":"ambulance","unicodeEscape":"f0f9"},
         {"icon":"automobile","unicodeEscape":"f1b9"},
         {"icon":"bicycle","unicodeEscape":"f206"},
         {"icon":"bus","unicodeEscape":"f207"},
         {"icon":"cab","unicodeEscape":"f1ba"},
         {"icon":"car","unicodeEscape":"f1b9"},
         {"icon":"fighter-jet","unicodeEscape":"f0fb"},
         {"icon":"motorcycle","unicodeEscape":"f21c"},
         {"icon":"plane","unicodeEscape":"f072"},
         {"icon":"rocket","unicodeEscape":"f135"},
         {"icon":"ship","unicodeEscape":"f21a"},
         {"icon":"space-shuttle","unicodeEscape":"f197"},
         {"icon":"subway","unicodeEscape":"f239"},
         {"icon":"taxi","unicodeEscape":"f1ba"},
         {"icon":"train","unicodeEscape":"f238"},
         {"icon":"truck","unicodeEscape":"f0d1"},
         {"icon":"wheelchair","unicodeEscape":"f193"},
         {"icon":"wheelchair-alt","unicodeEscape":"f29b"}
    ]
};
            
document.getElementById("hexFaSearchText").addEventListener("input", function(){    
    searchStrByHexFaInput = document.getElementById("hexFaSearchText").value;
    for(i in escapeIndex.fontAwesomeIcons) {
        if (searchStrByHexFaInput == escapeIndex.fontAwesomeIcons[i].unicodeEscape.slice(1,4)) {
            iconFound = escapeIndex.fontAwesomeIcons[i].icon;
            hexFaIcon.classList = "";
            hexFaIcon.classList.add("fa");
            hexFaIcon.classList.add("fa-fw");
            hexFaIcon.classList.add("fa-" + escapeIndex.fontAwesomeIcons[i].icon);
            document.getElementById("hexFaIconName").innerHTML = iconFound; 
        }
    }
});
            
document.getElementById("faHexSearchText").addEventListener("input", function(){
    searchStrByFaHexInput = document.getElementById("faHexSearchText").value; 
    for(j in escapeIndex.fontAwesomeIcons) {
        if(searchStrByFaHexInput == escapeIndex.fontAwesomeIcons[j].icon) {
            hexFound = escapeIndex.fontAwesomeIcons[j].unicodeEscape.slice(1,4);
            faHexIcon.classList = "";
            faHexIcon.classList.add("fa");
            faHexIcon.classList.add("fa-fw");
            faHexIcon.classList.add("fa-" + escapeIndex.fontAwesomeIcons[j].icon);
            document.getElementById("faHexCode").innerHTML = hexFound; 
        }
    }
});
            
console.log(hexFaIcon);
            